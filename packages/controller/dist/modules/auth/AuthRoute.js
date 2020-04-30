var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import { graphql } from 'react-apollo';
import { Route, Redirect } from 'react-router';
import gql from 'graphql-tag';
var AuthRouteComponent = /** @class */ (function (_super) {
    __extends(AuthRouteComponent, _super);
    function AuthRouteComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderRoute = function (routeProps) {
            var _a = _this.props, data = _a.data, component = _a.component;
            if (!data || data.loading) {
                // Display screen loader
                return null;
            }
            if (!data.me) {
                // Redirect user to login
                return React.createElement(Redirect, { to: { pathname: '/login', state: { next: routeProps.location.pathname } } });
            }
            var Component = component;
            return React.createElement(Component, __assign({}, routeProps));
        };
        return _this;
    }
    AuthRouteComponent.prototype.render = function () {
        var _a = this.props, _ = _a.data, __ = _a.component, rest = __rest(_a, ["data", "component"]);
        return (React.createElement(Route, __assign({}, rest, { render: this.renderRoute })));
    };
    return AuthRouteComponent;
}(React.PureComponent));
export { AuthRouteComponent };
var meQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nquery MeQuery {\n    me {\n        email\n    }\n}\n"], ["\nquery MeQuery {\n    me {\n        email\n    }\n}\n"])));
export var AuthRoute = graphql(meQuery)(AuthRouteComponent);
var templateObject_1;
//# sourceMappingURL=AuthRoute.js.map