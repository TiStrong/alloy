import * as Backbone from 'backbone';

export class BaseModel<M extends { [key: string]: any }> extends Backbone.Model {
    // @ts-ignore: Property 'attributes' initialized in super constructor.
    public attributes: M;
    constructor(attributes?: Partial<M>, options?: any) {
        super(attributes, options);
    }
    public set<T extends M, K extends keyof M>(attributeName: K, value: T[K], options?: Backbone.ModelSetOptions): BaseModel<M>;
    public set(obj: Partial<M>, options?: Backbone.ModelSetOptions): BaseModel<M>;
    public set(first: any, second?: any, third?: any): BaseModel<M> {
        return super.set(first, second, third) as BaseModel<M>;
    }
    public transform(): any {
        return this.toJSON();
    }
    public toJSON(options?: never): M {
        return super.toJSON() as M;
    }
}

export class BaseCollection<M extends Backbone.Model> extends Backbone.Collection<M> {
    // For Backbone v1.1.2, copy the following to your subclass to override the
    // fetch method to account for a breaking change in Backbone.
    /*
    public fetch(options?: Backbone.CollectionFetchOptions): JQueryXHR {
    	options = options ? options : {};
    	options.reset = true;
    	return super.fetch(options);
    }
    */
}
