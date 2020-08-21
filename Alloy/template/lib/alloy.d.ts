// Type definitions for npm package Alloy 1.14
// Project: https://github.com/appcelerator/alloy
// Definitions by: Axway Appcelerator <https://github.com/appcelerator>
//                 Sergey Volkov <https://github.com/drauggres>
// Definitions: https://github.com/TiStrong/types
// TypeScript Version: 3.2

/// <reference types="titanium" />
import * as Backbone from 'backbone';

/**
 * Top-level module for Alloy functions.
 */
declare module Alloy {
  type ControllerParams = string | null | {
    widgetId: string|null
    name: string|null
  };

  /**
   * The base class for Alloy controllers.
   */
  interface Controller {
    [k: string]: any;

    /**
     *
     * @param proxy View object to which to add class(es).
     * @param classes Array or space-separated list of classes to apply.
     * @param opts Dictionary of properties to apply after classes have been added.
     */
    addClass<T extends Titanium.Proxy>(proxy: T, classes: string | string[], opts?: Dictionary<T>): void;

    /**
     * Adds a tracked event listeners to a view proxy object. By default, any event listener declared in XML is tracked by Alloy.
     *
     * @param proxy Proxy view object to listen to.
     * @param type Name of the event.
     * @param callback Callback function to invoke when the event is fired.
     * @returns ID attribute of the view object. If one does not exist, Alloy will create a unique ID.
     */
    addListener(proxy: Titanium.Proxy, type: string, callback: (e: any) => void): string | undefined;

    /**
     * Creates a dictionary of properties based on the specified styles.
     *
     * @param opts Dictionary of styles to apply.
     * @returns Dictionary of properties that can be passed to a view factory function or applyProperties().
     */
    createStyle<T extends Titanium.Proxy>(opts: any): Dictionary<T>;

    destroy(): void;

    getListener(proxy?: Titanium.Proxy, type?: string): any[];

    getTopLevelViews(): any[];

    /**
     * Returns the specified view associated with this controller.
     *
     * If no id is specified, returns the first top-level view.
     *
     * @param id ID of the view to return.
     */
    getView(id?: string): any;

    /**
     * Returns a list of all IDed view elements associated with this controller.
     */
    getViews(): Record<string, Ti.UI.View | Alloy.Controller>;

    /**
     * Removes a TSS class from the specified view object.
     *
     * @param proxy View object from which to remove class(es)
     * @param classes Array or space-separated list of classes to remove.
     * @param opts Dictionary of properties to apply after the class removal.
     */
    removeClass<T extends Titanium.Proxy>(proxy: T, classes: string | string[], opts?: Dictionary<T>): void;

    /**
     * Removes all tracked event listeners or only the ones specified by the parameters.
     *
     * Passing no parameters, removes all tracked event listeners. Set a
     * parameter to null if you do not want to restrict the match to that
     * parameter.
     *
     * @param proxy Proxy view object to remove event listeners from.
     * @param type Name of the event to remove.
     * @param callback Callback to remove.
     */
    removeListener(proxy: Titanium.Proxy, type?: string, callback?: (e: any) => void): Alloy.Controller;

    /**
     * Sets the array of TSS classes for the target View object, adding the classes specified and removing any applied classes that are not specified.
     *
     * @param proxy View object to reset.
     * @param classes Array or space-separated list of classes to apply after the reset.
     * @param opts Dictionary of properties to apply after the reset.
     */
    resetClass<T extends Titanium.Proxy>(proxy: T, classes: string | string[], opts?: Dictionary<T>): void;

    /**
     * Applies a set of properties to view elements associated with this controller.
     *
     * @param args An object whose keys are the IDs (in form '#id') of views to which the styles will be applied.
     */
    updateViews(args: { [k: string]: any }): Alloy.Controller;
  }

  const Android: {
    menuItemCreateArgs: [
      'itemId',
      'groupId',
      'title',
      'order',
      'actionView',
      'checkable',
      'checked',
      'enabled',
      'icon',
      'showAsAction',
      'titleCondensed',
      'visible'
    ];
  };

  const UI: {
    create: (controller: Alloy.ControllerParams, apiName: string, opts: any) => Ti.Proxy;
  };

  /**
   * An object that stores Alloy configuration values as defined in your app's app/config.json file
   */
  const CFG: any;

  /**
   * An object for storing globally accessible Alloy collections. Singleton collections created via markup will be stored on this object.
   */
  const Collections: {
    [k: string]: any;
    instance(name: string): any;
  };

  /**
   * An object for storing globally accessible variables and functions.
   */
  const Globals: any;

  /**
   * An object for storing globally accessible Alloy models. Singleton models created via markup will be stored on this object.
   */
  const Models: {
    [k: string]: any;
    instance(name: string): any;
  };

  /**
   * Returns true if the current device is a handheld device (not a tablet).
   */
  const isHandheld: boolean;

  /**
   * true if the current device is a tablet.
   */
  const isTablet: boolean;

  /**
   * Factory method for instantiating a Backbone collection of model objects. Creates and returns a collection for holding the named type of model objects.
   *
   * @param name Name of model to hold in this collection.
   * @param args Arguments to pass to the collection.
   */
  const createCollection: (name: string, args?: any) => any;

  /**
   * Factory method for instantiating a controller. Creates and returns an instance of the named controller.
   *
   * @param name Name of controller to instantiate.
   * @param args Arguments to pass to the controller
   */
  const createController: (name: string, args?: any) => Alloy.Controller;

  /**
   * Factory method for instantiating a Backbone Model object. Creates and returns an instance of the named model.
   *
   * @param name Name of model to instantiate.
   * @param args Arguments to pass to the model.
   */
  const createModel: (name: string, args?: any) => Backbone.Model;

  /**
   * Factory method for instantiating a widget controller. Creates and returns an instance of the named widget.
   *
   * @param id Id of widget to instantiate.
   * @param name Name of the view within the widget to instantiate ('widget' by default)
   * @param args Arguments to pass to the widget.
   */
  const createWidget: (id: string, name?: string, args?: any) => Alloy.Controller;

  const createStyle: <T extends Ti.Proxy>(
      controller: Alloy.ControllerParams,
      opts?: any,
      defaults?: any,
  ) => Dictionary<T>;

  const addClass: <T extends Ti.Proxy>(
      controller: Alloy.ControllerParams,
      proxy: T,
      classes: string | string[],
      opts?: Dictionary<T> | undefined,
  ) => void;

  const removeClass: <T extends Ti.Proxy>(
      controller: Alloy.ControllerParams,
      proxy: T,
      classes: string | string[],
      opts?: Dictionary<T> | undefined,
  ) => void;

  const resetClass: <T extends Ti.Proxy>(
      controller: Alloy.ControllerParams,
      proxy: T,
      classes: string | string[],
      opts?: Dictionary<T> | undefined,
  ) => void;
}

declare class Alloy {
  static deepExtend(target: any, ...source: any): any;
  static deepExtend(deep: boolean, targer: any, ...source: any): any;
}

declare global {
  /**
   * @deprecated Not supported platform.
   */
  const OS_MOBILEWEB: boolean;

  /**
   * @deprecated Not supported platform.
   */
  const OS_WINDOWS: boolean;

}

export = Alloy;
