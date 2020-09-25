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
  }, __jsx("svg", {
    "class": "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 67,
      columnNumber: 11
    }
  })), "Github Repo"), __jsx("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2xvclNlYXJjaC9jb2xvcnNlYXJjaC5qcyJdLCJuYW1lcyI6WyJjb2xvcnNlYXJjaCIsImNvbG9ycyIsImlucHV0U3R5bGUiLCJtYXJnaW4iLCJib3JkZXIiLCJwYWRkaW5nIiwiaGVpZ2h0IiwiaDJTdHlsZSIsInJlcG9TdHlsZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ1c2VTdGF0ZSIsInNlYXJjaFN0cmluZyIsInNldFNlYXJjaFN0cmluZyIsImNvbG9yc1N0YXRlIiwic2V0Q29sb3JzU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJlIiwia2V5Q29kZSIsInJhbmtlZEFycmF5IiwibWFwIiwiaXRlbSIsInJhbmsiLCJzaW1pbGFyaXR5IiwiaGV4Iiwic29ydGVkQXJyYXkiLCJzb3J0Iiwic29ydEJ5UmFuayIsInNwbGljZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJhIiwiYiIsInMxIiwiczIiLCJsb25nZXIiLCJzaG9ydGVyIiwibGVuZ3RoIiwibG9uZ2VyTGVuZ3RoIiwiZWRpdERpc3RhbmNlIiwicGFyc2VGbG9hdCIsImNvc3RzIiwiQXJyYXkiLCJpIiwibGFzdFZhbHVlIiwiaiIsIm5ld1ZhbHVlIiwiY2hhckF0IiwiTWF0aCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDbEMsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxVQUFNLEVBQUUsVUFEUztBQUVqQkMsVUFBTSxFQUFFLGdCQUZTO0FBR2pCQyxXQUFPLEVBQUUsU0FIUTtBQUlqQkMsVUFBTSxFQUFFO0FBSlMsR0FBbkI7QUFPQSxNQUFNQyxPQUFPLEdBQUc7QUFDZEosVUFBTSxFQUFFO0FBRE0sR0FBaEI7QUFJQSxNQUFNSyxT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QUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDQyxHQUFMLENBQVNILFFBQVQsRUFBbUJGLFNBQW5CLENBQVQsRUFBd0NILEtBQUssQ0FBQ0ksQ0FBRCxDQUE3QyxJQUFvRCxDQUEvRDtBQUNGSixlQUFLLENBQUNJLENBQUMsR0FBRyxDQUFMLENBQUwsR0FBZUQsU0FBZjtBQUNBQSxtQkFBUyxHQUFHRSxRQUFaO0FBQ0Q7QUFDRjtBQUNGOztBQUNELFFBQUlILENBQUMsR0FBRyxDQUFSLEVBQVdGLEtBQUssQ0FBQ1AsRUFBRSxDQUFDRyxNQUFKLENBQUwsR0FBbUJPLFNBQW5CO0FBQ1o7O0FBQ0QsU0FBT0gsS0FBSyxDQUFDUCxFQUFFLENBQUNHLE1BQUosQ0FBWjtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwMDNjNDYyNWUzY2U2MDc5ZWNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFibGUgZnJvbSAnLi4vVGFibGUvdGFibGUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGNvbG9yc2VhcmNoID0gKHsgY29sb3JzIH0pID0+IHtcclxuICBjb25zdCBpbnB1dFN0eWxlID0ge1xyXG4gICAgbWFyZ2luOiAnMTBweCAwcHgnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgcGFkZGluZzogJzJweCA1cHgnLFxyXG4gICAgaGVpZ2h0OiAnMzBweCdcclxuICB9O1xyXG5cclxuICBjb25zdCBoMlN0eWxlID0ge1xyXG4gICAgbWFyZ2luOiAnMCdcclxuICB9O1xyXG5cclxuICBjb25zdCByZXBvU3R5bGUgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzUlJyxcclxuICAgIHJpZ2h0OiAnNSUnXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaFN0cmluZywgc2V0U2VhcmNoU3RyaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29sb3JzU3RhdGUsIHNldENvbG9yc1N0YXRlXSA9IHVzZVN0YXRlKGNvbG9ycyk7XHJcblxyXG4gIC8vIGFzc3VtcHRpb246IGhleCBzZWFyY2ggZG9lcyBub3QgaGF2ZSB0byBiZSBhIGNvbnRpZ3VvdXMgc3Vic3RyaW5nXHJcbiAgLy8gVGhlcmVmb3JlLCByYW5rIGJ5IGNoYXJhY3RlciBtYXRjaCBhbmQgbm90IGJ5IHN1YnN0cmluZ1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKSB7XHJcbiAgICAvLyBjaGVjayBpZiBlbnRlciB3YXMgcHJlc3NlZFxyXG4gICAgaWYgKGUua2V5Q29kZSAhPT0gMTMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCBhIHJhbmtpbmcgcHJvcGVydHkgdG8gY29sb3Igb2JqZWN0c1xyXG4gICAgY29uc3QgcmFua2VkQXJyYXkgPSBjb2xvcnMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgIC8vIHJhbmsgaXRlbSdzIChjb2xvciBvYmplY3Qncykgc2ltaWxhcml0eSB0byB0aGUgc2VhcmNoIHN0cmluZ1xyXG4gICAgICBjb25zdCByYW5rID0gc2ltaWxhcml0eShzZWFyY2hTdHJpbmcsIGl0ZW0uaGV4KTtcclxuXHJcbiAgICAgIC8vIHBlcnNvbmFsIGZ1bmN0aW9uIHRvIHJhbmsgc3Vic3RyaW5nIG1hdGNoaW5nIC0gc2ltcGxlIGFuZCBjaGFyYWN0ZXIgYmFzZWRcclxuICAgICAgLy8gY29uc3QgcmFuayA9IHNlYXJjaFN0cmluZy5zcGxpdCgnJykucmVkdWNlKChhY2MsIGNoKSA9PiB7XHJcbiAgICAgIC8vICAgcmV0dXJuIGl0ZW0uY29sb3IuaW5jbHVkZXMoY2gpID8gYWNjICsgMSA6IGFjYztcclxuICAgICAgLy8gfSwgMCk7XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5pdGVtLCByYW5rIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzb3J0IGNvbG9yIG9iamVjdHMgYnkgdGhlIGFkZGVkIHJhbmsgcHJvcGVydHkgYW5kIHJldHVybiB0aGUgZmlyc3QgNTBcclxuICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gcmFua2VkQXJyYXkuc29ydChzb3J0QnlSYW5rKS5zcGxpY2UoMCwgNTApO1xyXG5cclxuICAgIHNldENvbG9yc1N0YXRlKHNvcnRlZEFycmF5KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDIgc3R5bGU9e2gyU3R5bGV9PkNvbG9yczwvaDI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3RpbWVpdGVsL2NvbG9yLXNlYXJjaCdcclxuICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICBzdHlsZT17cmVwb1N0eWxlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgY2xhc3M9J3ctNiBoLTYnXHJcbiAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICBzdHJva2UtbGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9JzInXHJcbiAgICAgICAgICAgIGQ9J00xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQnXHJcbiAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIEdpdGh1YiBSZXBvXHJcbiAgICAgIDwvYT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hTdHJpbmcoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSl9XHJcbiAgICAgICAgc3R5bGU9e2lucHV0U3R5bGV9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIEhleCBDb2xvciBDb2RlJ1xyXG4gICAgICAvPlxyXG4gICAgICA8VGFibGUgY29sb3JzPXtjb2xvcnNTdGF0ZX0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvcnNlYXJjaDtcclxuXHJcbi8vIGhlbHBlciBmdW5jdGlvbiB0byBzb3J0IGNvbG9yIG9iamVjdCBieSByYW5rIHByb3BlcnR5XHJcbmZ1bmN0aW9uIHNvcnRCeVJhbmsoYSwgYikge1xyXG4gIHJldHVybiBhLnJhbmsgPCBiLnJhbmsgPyAxIDogLTE7XHJcbn1cclxuXHJcbi8vIGhlbHBlciBmdW5jdGlvbnMgZm9yIGZ1enp5IHN1YnN0cmluZyBtYXRjaGluZyB1c2luZyB0aGUgTGV2ZW5zaHRlaW4gQWxnb3JpdGhtIC0gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA0NzM3NDUvY29tcGFyZS1zdHJpbmdzLWphdmFzY3JpcHQtcmV0dXJuLW9mLWxpa2VseVxyXG5mdW5jdGlvbiBzaW1pbGFyaXR5KHMxLCBzMikge1xyXG4gIHZhciBsb25nZXIgPSBzMTtcclxuICB2YXIgc2hvcnRlciA9IHMyO1xyXG4gIGlmIChzMS5sZW5ndGggPCBzMi5sZW5ndGgpIHtcclxuICAgIGxvbmdlciA9IHMyO1xyXG4gICAgc2hvcnRlciA9IHMxO1xyXG4gIH1cclxuICB2YXIgbG9uZ2VyTGVuZ3RoID0gbG9uZ2VyLmxlbmd0aDtcclxuICBpZiAobG9uZ2VyTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiAxLjA7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICAobG9uZ2VyTGVuZ3RoIC0gZWRpdERpc3RhbmNlKGxvbmdlciwgc2hvcnRlcikpIC8gcGFyc2VGbG9hdChsb25nZXJMZW5ndGgpXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdERpc3RhbmNlKHMxLCBzMikge1xyXG4gIHMxID0gczEudG9Mb3dlckNhc2UoKTtcclxuICBzMiA9IHMyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIHZhciBjb3N0cyA9IG5ldyBBcnJheSgpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IHMxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgbGFzdFZhbHVlID0gaTtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDw9IHMyLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGlmIChpID09IDApIGNvc3RzW2pdID0gajtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGogPiAwKSB7XHJcbiAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBjb3N0c1tqIC0gMV07XHJcbiAgICAgICAgICBpZiAoczEuY2hhckF0KGkgLSAxKSAhPSBzMi5jaGFyQXQoaiAtIDEpKVxyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IE1hdGgubWluKE1hdGgubWluKG5ld1ZhbHVlLCBsYXN0VmFsdWUpLCBjb3N0c1tqXSkgKyAxO1xyXG4gICAgICAgICAgY29zdHNbaiAtIDFdID0gbGFzdFZhbHVlO1xyXG4gICAgICAgICAgbGFzdFZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaSA+IDApIGNvc3RzW3MyLmxlbmd0aF0gPSBsYXN0VmFsdWU7XHJcbiAgfVxyXG4gIHJldHVybiBjb3N0c1tzMi5sZW5ndGhdO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=