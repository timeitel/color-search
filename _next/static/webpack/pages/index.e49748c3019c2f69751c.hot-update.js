webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ColorSearch/colorsearch.js":
/*!***********************************************!*\
  !*** ./components/ColorSearch/colorsearch.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Table_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Table/table */ "./components/Table/table.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\timot\\source\\06-color-search\\components\\ColorSearch\\colorsearch.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var colorsearch = function colorsearch(_ref) {
  _s();

  var colors = _ref.colors;
  var inputStyle = {
    margin: '10px 0px',
    border: '1px solid gray',
    padding: '2px 5px',
    height: '30px'
  };
  var h2Style = {
    margin: '0'
  };
  var repoStyle = {
    position: 'absolute',
    top: '5%',
    right: '5%'
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      searchString = _useState[0],
      setSearchString = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(colors),
      colorsState = _useState2[0],
      setColorsState = _useState2[1]; // assumption: hex search does not have to be a contiguous substring
  // Therefore, rank by character match and not by substring


  function handleSearch(e) {
    // check if enter was pressed
    if (e.keyCode !== 13) {
      return;
    } // add a ranking property to color objects


    var rankedArray = colors.map(function (item) {
      // rank item's (color object's) similarity to the search string
      var rank = similarity(searchString, item.hex); // personal function to rank substring matching - simple and character based
      // const rank = searchString.split('').reduce((acc, ch) => {
      //   return item.color.includes(ch) ? acc + 1 : acc;
      // }, 0);

      return _objectSpread(_objectSpread({}, item), {}, {
        rank: rank
      });
    }); // sort color objects by the added rank property and return the first 50

    var sortedArray = rankedArray.sort(sortByRank).splice(0, 50);
    setColorsState(sortedArray);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    style: h2Style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "Colors"), __jsx("a", {
    href: "https://github.com/timeitel/color-search",
    target: "_blank",
    style: repoStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "Github Repo", __jsx("svg", {
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    height: "16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }))), __jsx("input", {
    onKeyDown: handleSearch,
    onChange: function onChange(e) {
      return setSearchString(e.target.value.toLowerCase());
    },
    style: inputStyle,
    placeholder: "Enter Hex Color Code",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }), __jsx(_Table_table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    colors: colorsState,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }));
};

_s(colorsearch, "vayfG2LxsxmrGO7CxWYS6ZiTbSw=");

/* harmony default export */ __webpack_exports__["default"] = (colorsearch); // helper function to sort color object by rank property

function sortByRank(a, b) {
  return a.rank < b.rank ? 1 : -1;
} // helper functions for fuzzy substring matching using the Levenshtein Algorithm - https://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely


function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;

  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }

  var longerLength = longer.length;

  if (longerLength == 0) {
    return 1.0;
  }

  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  var costs = new Array();

  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;

    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1)) newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }

    if (i > 0) costs[s2.length] = lastValue;
  }

  return costs[s2.length];
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2xvclNlYXJjaC9jb2xvcnNlYXJjaC5qcyJdLCJuYW1lcyI6WyJjb2xvcnNlYXJjaCIsImNvbG9ycyIsImlucHV0U3R5bGUiLCJtYXJnaW4iLCJib3JkZXIiLCJwYWRkaW5nIiwiaGVpZ2h0IiwiaDJTdHlsZSIsInJlcG9TdHlsZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ1c2VTdGF0ZSIsInNlYXJjaFN0cmluZyIsInNldFNlYXJjaFN0cmluZyIsImNvbG9yc1N0YXRlIiwic2V0Q29sb3JzU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJlIiwia2V5Q29kZSIsInJhbmtlZEFycmF5IiwibWFwIiwiaXRlbSIsInJhbmsiLCJzaW1pbGFyaXR5IiwiaGV4Iiwic29ydGVkQXJyYXkiLCJzb3J0Iiwic29ydEJ5UmFuayIsInNwbGljZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJhIiwiYiIsInMxIiwiczIiLCJsb25nZXIiLCJzaG9ydGVyIiwibGVuZ3RoIiwibG9uZ2VyTGVuZ3RoIiwiZWRpdERpc3RhbmNlIiwicGFyc2VGbG9hdCIsImNvc3RzIiwiQXJyYXkiLCJpIiwibGFzdFZhbHVlIiwiaiIsIm5ld1ZhbHVlIiwiY2hhckF0IiwiTWF0aCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDbEMsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxVQUFNLEVBQUUsVUFEUztBQUVqQkMsVUFBTSxFQUFFLGdCQUZTO0FBR2pCQyxXQUFPLEVBQUUsU0FIUTtBQUlqQkMsVUFBTSxFQUFFO0FBSlMsR0FBbkI7QUFPQSxNQUFNQyxPQUFPLEdBQUc7QUFDZEosVUFBTSxFQUFFO0FBRE0sR0FBaEI7QUFJQSxNQUFNSyxT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QUdFLElBQUksQ0FBQ0MsR0FBTCxDQUFTRCxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsUUFBVCxFQUFtQkYsU0FBbkIsQ0FBVCxFQUF3Q0gsS0FBSyxDQUFDSSxDQUFELENBQTdDLElBQW9ELENBQS9EO0FBQ0ZKLGVBQUssQ0FBQ0ksQ0FBQyxHQUFHLENBQUwsQ0FBTCxHQUFlRCxTQUFmO0FBQ0FBLG1CQUFTLEdBQUdFLFFBQVo7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsUUFBSUgsQ0FBQyxHQUFHLENBQVIsRUFBV0YsS0FBSyxDQUFDUCxFQUFFLENBQUNHLE1BQUosQ0FBTCxHQUFtQk8sU0FBbkI7QUFDWjs7QUFDRCxTQUFPSCxLQUFLLENBQUNQLEVBQUUsQ0FBQ0csTUFBSixDQUFaO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTQ5NzQ4YzMwMTljMmY2OTc1MWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJsZSBmcm9tICcuLi9UYWJsZS90YWJsZSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgY29sb3JzZWFyY2ggPSAoeyBjb2xvcnMgfSkgPT4ge1xyXG4gIGNvbnN0IGlucHV0U3R5bGUgPSB7XHJcbiAgICBtYXJnaW46ICcxMHB4IDBweCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICBwYWRkaW5nOiAnMnB4IDVweCcsXHJcbiAgICBoZWlnaHQ6ICczMHB4J1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGgyU3R5bGUgPSB7XHJcbiAgICBtYXJnaW46ICcwJ1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcG9TdHlsZSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnNSUnLFxyXG4gICAgcmlnaHQ6ICc1JSdcclxuICB9O1xyXG5cclxuICBjb25zdCBbc2VhcmNoU3RyaW5nLCBzZXRTZWFyY2hTdHJpbmddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb2xvcnNTdGF0ZSwgc2V0Q29sb3JzU3RhdGVdID0gdXNlU3RhdGUoY29sb3JzKTtcclxuXHJcbiAgLy8gYXNzdW1wdGlvbjogaGV4IHNlYXJjaCBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgY29udGlndW91cyBzdWJzdHJpbmdcclxuICAvLyBUaGVyZWZvcmUsIHJhbmsgYnkgY2hhcmFjdGVyIG1hdGNoIGFuZCBub3QgYnkgc3Vic3RyaW5nXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKGUpIHtcclxuICAgIC8vIGNoZWNrIGlmIGVudGVyIHdhcyBwcmVzc2VkXHJcbiAgICBpZiAoZS5rZXlDb2RlICE9PSAxMykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIGEgcmFua2luZyBwcm9wZXJ0eSB0byBjb2xvciBvYmplY3RzXHJcbiAgICBjb25zdCByYW5rZWRBcnJheSA9IGNvbG9ycy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgLy8gcmFuayBpdGVtJ3MgKGNvbG9yIG9iamVjdCdzKSBzaW1pbGFyaXR5IHRvIHRoZSBzZWFyY2ggc3RyaW5nXHJcbiAgICAgIGNvbnN0IHJhbmsgPSBzaW1pbGFyaXR5KHNlYXJjaFN0cmluZywgaXRlbS5oZXgpO1xyXG5cclxuICAgICAgLy8gcGVyc29uYWwgZnVuY3Rpb24gdG8gcmFuayBzdWJzdHJpbmcgbWF0Y2hpbmcgLSBzaW1wbGUgYW5kIGNoYXJhY3RlciBiYXNlZFxyXG4gICAgICAvLyBjb25zdCByYW5rID0gc2VhcmNoU3RyaW5nLnNwbGl0KCcnKS5yZWR1Y2UoKGFjYywgY2gpID0+IHtcclxuICAgICAgLy8gICByZXR1cm4gaXRlbS5jb2xvci5pbmNsdWRlcyhjaCkgPyBhY2MgKyAxIDogYWNjO1xyXG4gICAgICAvLyB9LCAwKTtcclxuXHJcbiAgICAgIHJldHVybiB7IC4uLml0ZW0sIHJhbmsgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNvcnQgY29sb3Igb2JqZWN0cyBieSB0aGUgYWRkZWQgcmFuayBwcm9wZXJ0eSBhbmQgcmV0dXJuIHRoZSBmaXJzdCA1MFxyXG4gICAgY29uc3Qgc29ydGVkQXJyYXkgPSByYW5rZWRBcnJheS5zb3J0KHNvcnRCeVJhbmspLnNwbGljZSgwLCA1MCk7XHJcblxyXG4gICAgc2V0Q29sb3JzU3RhdGUoc29ydGVkQXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMiBzdHlsZT17aDJTdHlsZX0+Q29sb3JzPC9oMj5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vdGltZWl0ZWwvY29sb3Itc2VhcmNoJ1xyXG4gICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgIHN0eWxlPXtyZXBvU3R5bGV9XHJcbiAgICAgID5cclxuICAgICAgICBHaXRodWIgUmVwb1xyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgIGhlaWdodD0nMTYnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICBzdHJva2UtbGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9JzInXHJcbiAgICAgICAgICAgIGQ9J00xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQnXHJcbiAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoU3RyaW5nKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpfVxyXG4gICAgICAgIHN0eWxlPXtpbnB1dFN0eWxlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBIZXggQ29sb3IgQ29kZSdcclxuICAgICAgLz5cclxuICAgICAgPFRhYmxlIGNvbG9ycz17Y29sb3JzU3RhdGV9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29sb3JzZWFyY2g7XHJcblxyXG4vLyBoZWxwZXIgZnVuY3Rpb24gdG8gc29ydCBjb2xvciBvYmplY3QgYnkgcmFuayBwcm9wZXJ0eVxyXG5mdW5jdGlvbiBzb3J0QnlSYW5rKGEsIGIpIHtcclxuICByZXR1cm4gYS5yYW5rIDwgYi5yYW5rID8gMSA6IC0xO1xyXG59XHJcblxyXG4vLyBoZWxwZXIgZnVuY3Rpb25zIGZvciBmdXp6eSBzdWJzdHJpbmcgbWF0Y2hpbmcgdXNpbmcgdGhlIExldmVuc2h0ZWluIEFsZ29yaXRobSAtIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNDczNzQ1L2NvbXBhcmUtc3RyaW5ncy1qYXZhc2NyaXB0LXJldHVybi1vZi1saWtlbHlcclxuZnVuY3Rpb24gc2ltaWxhcml0eShzMSwgczIpIHtcclxuICB2YXIgbG9uZ2VyID0gczE7XHJcbiAgdmFyIHNob3J0ZXIgPSBzMjtcclxuICBpZiAoczEubGVuZ3RoIDwgczIubGVuZ3RoKSB7XHJcbiAgICBsb25nZXIgPSBzMjtcclxuICAgIHNob3J0ZXIgPSBzMTtcclxuICB9XHJcbiAgdmFyIGxvbmdlckxlbmd0aCA9IGxvbmdlci5sZW5ndGg7XHJcbiAgaWYgKGxvbmdlckxlbmd0aCA9PSAwKSB7XHJcbiAgICByZXR1cm4gMS4wO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgKGxvbmdlckxlbmd0aCAtIGVkaXREaXN0YW5jZShsb25nZXIsIHNob3J0ZXIpKSAvIHBhcnNlRmxvYXQobG9uZ2VyTGVuZ3RoKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXREaXN0YW5jZShzMSwgczIpIHtcclxuICBzMSA9IHMxLnRvTG93ZXJDYXNlKCk7XHJcbiAgczIgPSBzMi50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgY29zdHMgPSBuZXcgQXJyYXkoKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8PSBzMS5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGxhc3RWYWx1ZSA9IGk7XHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8PSBzMi5sZW5ndGg7IGorKykge1xyXG4gICAgICBpZiAoaSA9PSAwKSBjb3N0c1tqXSA9IGo7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChqID4gMCkge1xyXG4gICAgICAgICAgdmFyIG5ld1ZhbHVlID0gY29zdHNbaiAtIDFdO1xyXG4gICAgICAgICAgaWYgKHMxLmNoYXJBdChpIC0gMSkgIT0gczIuY2hhckF0KGogLSAxKSlcclxuICAgICAgICAgICAgbmV3VmFsdWUgPSBNYXRoLm1pbihNYXRoLm1pbihuZXdWYWx1ZSwgbGFzdFZhbHVlKSwgY29zdHNbal0pICsgMTtcclxuICAgICAgICAgIGNvc3RzW2ogLSAxXSA9IGxhc3RWYWx1ZTtcclxuICAgICAgICAgIGxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGkgPiAwKSBjb3N0c1tzMi5sZW5ndGhdID0gbGFzdFZhbHVlO1xyXG4gIH1cclxuICByZXR1cm4gY29zdHNbczIubGVuZ3RoXTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9