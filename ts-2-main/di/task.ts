import 'reflect-metadata';

const instancesMap: Map<Object, Object> = new Map<Object, Object>();

interface Metadata {
    singleton?: boolean;
}

interface Type<T> {
    new(...args: any[]): T;
}

export class NullInjectableError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export function Injectable(metadata?: Metadata) {
    if (metadata?.singleton === undefined) {
        metadata = {
            singleton: true,
        }
    }
    return function(ctor: Function) {
        Reflect.defineMetadata("metadataKey", metadata, ctor);
    }
}

export class Injector {
    public get<T>(tType: Type<any>): T {
        if (!Reflect.hasMetadata("metadataKey", tType)){
            throw new NullInjectableError("NullInjectableError");
        }
        let metadata = Reflect.getMetadata("metadataKey", tType) as Metadata;
        let tokens = Reflect.getMetadata('design:paramtypes', tType) || [];
        let injections = tokens.map((token: any) => new Injector().get<any>(token));
        if (metadata.singleton){
            if (!instancesMap.has(tType)) {
                instancesMap.set(tType, new tType(...injections))
            }
            return instancesMap.get(tType) as T;
        } else {
            return new tType(...injections) as T;
        }
    }
}