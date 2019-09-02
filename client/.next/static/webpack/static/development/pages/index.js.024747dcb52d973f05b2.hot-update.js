webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Posts/List.js":
/*!**********************************!*\
  !*** ./components/Posts/List.js ***!
  \**********************************/
/*! exports provided: allPostsQueryVars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPostsQueryVars", function() { return allPostsQueryVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "/Users/lamperouge/code/Lamperoyge/react-next-goals/client/components/Posts/List.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["{\n    posts {\n        id\n        name\n        description\n        image {\n            url\n        }\n    }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ALL_POSTS_QUERY = Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_templateObject());
var allPostsQueryVars = {
  skip: 0,
  first: 10
};
function PostList() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(ALL_POSTS_QUERY, {
    variables: allPostsQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      fetchMore = _useQuery.fetchMore,
      networkStatus = _useQuery.networkStatus;

  var loadingMorePosts = networkStatus === apollo_boost__WEBPACK_IMPORTED_MODULE_7__["NetworkStatus"].fetchMore;

  var loadMorePosts = function loadMorePosts() {
    fetchMore({
      variables: {
        skip: allPosts.length
      },
      updateQuery: function updateQuery(previousResult, _ref) {
        var fetchMoreResult = _ref.fetchMoreResult;

        if (!fetchMoreResult) {
          return previousResult;
        }

        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, previousResult, {
          // Append the new posts results to the old one
          allPosts: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(previousResult.allPosts), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fetchMoreResult.allPosts))
        });
      }
    });
  };

  if (error) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "error msg");
  if (loading && !loadingMorePosts) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Loading");
  var allPosts = data.allPosts,
      _allPostsMeta = data._allPostsMeta;
  var areMorePosts = allPosts.length < _allPostsMeta.count;
  return __jsx("section", {
    className: "jsx-1458778202",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1458778202",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, allPosts.map(function (post, index) {
    return __jsx("li", {
      key: post.id,
      className: "jsx-1458778202",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1458778202",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1458778202",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, index + 1, ". "), __jsx("a", {
      href: post.url,
      className: "jsx-1458778202",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, post.title)));
  })), areMorePosts && __jsx("button", {
    onClick: function onClick() {
      return loadMorePosts();
    },
    disabled: loadingMorePosts,
    className: "jsx-1458778202",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, loadingMorePosts ? 'Loading...' : 'Show More'), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1458778202",
    __self: this
  }, "section.jsx-1458778202{padding-bottom:20px;}li.jsx-1458778202{display:block;margin-bottom:10px;}div.jsx-1458778202{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-1458778202{font-size:14px;margin-right:10px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;}span.jsx-1458778202{font-size:14px;margin-right:5px;}ul.jsx-1458778202{margin:0;padding:0;}button.jsx-1458778202:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:'';height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYW1wZXJvdWdlL2NvZGUvTGFtcGVyb3lnZS9yZWFjdC1uZXh0LWdvYWxzL2NsaWVudC9jb21wb25lbnRzL1Bvc3RzL0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0V3QixBQUcrQixBQUdOLEFBSUssQUFJSixBQU9BLEFBSU4sQUFJUyxTQUhSLEtBbkJTLENBUUQsQUFPRCxJQUtuQixDQXZCQSxZQW1CQSxDQWZBLEFBUXVCLHNDQWNGLFlBYkYsT0FjVSxHQXBCZCxPQU9KLFNBQ1gsUUFhMkQsa0RBcEIzRCxPQXFCYSxXQUNGLFNBQ1EsaUJBQ1QsUUFDViIsImZpbGUiOiIvVXNlcnMvbGFtcGVyb3VnZS9jb2RlL0xhbXBlcm95Z2UvcmVhY3QtbmV4dC1nb2Fscy9jbGllbnQvY29tcG9uZW50cy9Qb3N0cy9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcbmltcG9ydCB7IE5ldHdvcmtTdGF0dXMgfSBmcm9tICdhcG9sbG8tYm9vc3QnXG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBBTExfUE9TVFNfUVVFUlkgPSBncmFwaHFsIGB7XG4gICAgcG9zdHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgfVxufWA7XG5cblxuZXhwb3J0IGNvbnN0IGFsbFBvc3RzUXVlcnlWYXJzID0ge1xuICAgIHNraXA6IDAsXG4gICAgZmlyc3Q6IDEwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0TGlzdCAoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSwgZmV0Y2hNb3JlLCBuZXR3b3JrU3RhdHVzIH0gPSB1c2VRdWVyeShcbiAgICAgICAgQUxMX1BPU1RTX1FVRVJZLFxuICAgICAgICB7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IGFsbFBvc3RzUXVlcnlWYXJzLFxuICAgICAgICAgICAgLy8gU2V0dGluZyB0aGlzIHZhbHVlIHRvIHRydWUgd2lsbCBtYWtlIHRoZSBjb21wb25lbnQgcmVyZW5kZXIgd2hlblxuICAgICAgICAgICAgLy8gdGhlIFwibmV0d29ya1N0YXR1c1wiIGNoYW5nZXMsIHNvIHdlIGFyZSBhYmxlIHRvIGtub3cgaWYgaXQgaXMgZmV0Y2hpbmdcbiAgICAgICAgICAgIC8vIG1vcmUgZGF0YVxuICAgICAgICAgICAgbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlOiB0cnVlXG4gICAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCBsb2FkaW5nTW9yZVBvc3RzID0gbmV0d29ya1N0YXR1cyA9PT0gTmV0d29ya1N0YXR1cy5mZXRjaE1vcmVcblxuICAgIGNvbnN0IGxvYWRNb3JlUG9zdHMgPSAoKSA9PiB7XG4gICAgICAgIGZldGNoTW9yZSh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBza2lwOiBhbGxQb3N0cy5sZW5ndGhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGVRdWVyeTogKHByZXZpb3VzUmVzdWx0LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwb3N0cyByZXN1bHRzIHRvIHRoZSBvbGQgb25lXG4gICAgICAgICAgICAgICAgICAgIGFsbFBvc3RzOiBbLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxQb3N0c11cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZXJyb3IgbXNnPC9kaXY+XG4gICAgaWYgKGxvYWRpbmcgJiYgIWxvYWRpbmdNb3JlUG9zdHMpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cblxuICAgIGNvbnN0IHsgYWxsUG9zdHMsIF9hbGxQb3N0c01ldGEgfSA9IGRhdGE7XG4gICAgY29uc3QgYXJlTW9yZVBvc3RzID0gYWxsUG9zdHMubGVuZ3RoIDwgX2FsbFBvc3RzTWV0YS5jb3VudFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2FsbFBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpbmRleCArIDF9LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC51cmx9Pntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIHthcmVNb3JlUG9zdHMgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfSBkaXNhYmxlZD17bG9hZGluZ01vcmVQb3N0c30+XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nTW9yZVBvc3RzID8gJ0xvYWRpbmcuLi4nIDogJ1Nob3cgTW9yZSd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBkaXYge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDZweCA0cHggMCA0cHg7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/lamperouge/code/Lamperoyge/react-next-goals/client/components/Posts/List.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.024747dcb52d973f05b2.hot-update.js.map