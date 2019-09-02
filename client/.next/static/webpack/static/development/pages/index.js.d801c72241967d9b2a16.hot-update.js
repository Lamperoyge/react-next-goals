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







var ALL_POSTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
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
  }, "section.jsx-1458778202{padding-bottom:20px;}li.jsx-1458778202{display:block;margin-bottom:10px;}div.jsx-1458778202{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-1458778202{font-size:14px;margin-right:10px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;}span.jsx-1458778202{font-size:14px;margin-right:5px;}ul.jsx-1458778202{margin:0;padding:0;}button.jsx-1458778202:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:'';height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYW1wZXJvdWdlL2NvZGUvTGFtcGVyb3lnZS9yZWFjdC1uZXh0LWdvYWxzL2NsaWVudC9jb21wb25lbnRzL1Bvc3RzL0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0V3QixBQUcrQixBQUdOLEFBSUssQUFJSixBQU9BLEFBSU4sQUFJUyxTQUhSLEtBbkJTLENBUUQsQUFPRCxJQUtuQixDQXZCQSxZQW1CQSxDQWZBLEFBUXVCLHNDQWNGLFlBYkYsT0FjVSxHQXBCZCxPQU9KLFNBQ1gsUUFhMkQsa0RBcEIzRCxPQXFCYSxXQUNGLFNBQ1EsaUJBQ1QsUUFDViIsImZpbGUiOiIvVXNlcnMvbGFtcGVyb3VnZS9jb2RlL0xhbXBlcm95Z2UvcmVhY3QtbmV4dC1nb2Fscy9jbGllbnQvY29tcG9uZW50cy9Qb3N0cy9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcbmltcG9ydCB7IE5ldHdvcmtTdGF0dXMgfSBmcm9tICdhcG9sbG8tYm9vc3QnXG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBBTExfUE9TVFNfUVVFUlkgPSBncWwgYHtcbiAgICBwb3N0cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICB9XG59YDtcblxuXG5leHBvcnQgY29uc3QgYWxsUG9zdHNRdWVyeVZhcnMgPSB7XG4gICAgc2tpcDogMCxcbiAgICBmaXJzdDogMTBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RMaXN0ICgpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCBmZXRjaE1vcmUsIG5ldHdvcmtTdGF0dXMgfSA9IHVzZVF1ZXJ5KFxuICAgICAgICBBTExfUE9TVFNfUVVFUlksXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhcmlhYmxlczogYWxsUG9zdHNRdWVyeVZhcnMsXG4gICAgICAgICAgICAvLyBTZXR0aW5nIHRoaXMgdmFsdWUgdG8gdHJ1ZSB3aWxsIG1ha2UgdGhlIGNvbXBvbmVudCByZXJlbmRlciB3aGVuXG4gICAgICAgICAgICAvLyB0aGUgXCJuZXR3b3JrU3RhdHVzXCIgY2hhbmdlcywgc28gd2UgYXJlIGFibGUgdG8ga25vdyBpZiBpdCBpcyBmZXRjaGluZ1xuICAgICAgICAgICAgLy8gbW9yZSBkYXRhXG4gICAgICAgICAgICBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2U6IHRydWVcbiAgICAgICAgfVxuICAgIClcblxuICAgIGNvbnN0IGxvYWRpbmdNb3JlUG9zdHMgPSBuZXR3b3JrU3RhdHVzID09PSBOZXR3b3JrU3RhdHVzLmZldGNoTW9yZVxuXG4gICAgY29uc3QgbG9hZE1vcmVQb3N0cyA9ICgpID0+IHtcbiAgICAgICAgZmV0Y2hNb3JlKHtcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIHNraXA6IGFsbFBvc3RzLmxlbmd0aFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZXN1bHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RzIHJlc3VsdHMgdG8gdGhlIG9sZCBvbmVcbiAgICAgICAgICAgICAgICAgICAgYWxsUG9zdHM6IFsuLi5wcmV2aW91c1Jlc3VsdC5hbGxQb3N0cywgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFBvc3RzXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5lcnJvciBtc2c8L2Rpdj5cbiAgICBpZiAobG9hZGluZyAmJiAhbG9hZGluZ01vcmVQb3N0cykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuXG4gICAgY29uc3QgeyBhbGxQb3N0cywgX2FsbFBvc3RzTWV0YSB9ID0gZGF0YTtcbiAgICBjb25zdCBhcmVNb3JlUG9zdHMgPSBhbGxQb3N0cy5sZW5ndGggPCBfYWxsUG9zdHNNZXRhLmNvdW50XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7YWxsUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2luZGV4ICsgMX0uIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LnVybH0+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAge2FyZU1vcmVQb3N0cyAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZVBvc3RzKCl9IGRpc2FibGVkPXtsb2FkaW5nTW9yZVBvc3RzfT5cbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmdNb3JlUG9zdHMgPyAnTG9hZGluZy4uLicgOiAnU2hvdyBNb3JlJ31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4IDRweCAwIDRweDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/lamperouge/code/Lamperoyge/react-next-goals/client/components/Posts/List.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.d801c72241967d9b2a16.hot-update.js.map