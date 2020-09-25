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
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    height: "12",
    width: "12",
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
      lineNumber: 68,
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
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx(_Table_table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    colors: colorsState,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2xvclNlYXJjaC9jb2xvcnNlYXJjaC5qcyJdLCJuYW1lcyI6WyJjb2xvcnNlYXJjaCIsImNvbG9ycyIsImlucHV0U3R5bGUiLCJtYXJnaW4iLCJib3JkZXIiLCJwYWRkaW5nIiwiaGVpZ2h0IiwiaDJTdHlsZSIsInJlcG9TdHlsZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ1c2VTdGF0ZSIsInNlYXJjaFN0cmluZyIsInNldFNlYXJjaFN0cmluZyIsImNvbG9yc1N0YXRlIiwic2V0Q29sb3JzU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJlIiwia2V5Q29kZSIsInJhbmtlZEFycmF5IiwibWFwIiwiaXRlbSIsInJhbmsiLCJzaW1pbGFyaXR5IiwiaGV4Iiwic29ydGVkQXJyYXkiLCJzb3J0Iiwic29ydEJ5UmFuayIsInNwbGljZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJhIiwiYiIsInMxIiwiczIiLCJsb25nZXIiLCJzaG9ydGVyIiwibGVuZ3RoIiwibG9uZ2VyTGVuZ3RoIiwiZWRpdERpc3RhbmNlIiwicGFyc2VGbG9hdCIsImNvc3RzIiwiQXJyYXkiLCJpIiwibGFzdFZhbHVlIiwiaiIsIm5ld1ZhbHVlIiwiY2hhckF0IiwiTWF0aCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDbEMsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxVQUFNLEVBQUUsVUFEUztBQUVqQkMsVUFBTSxFQUFFLGdCQUZTO0FBR2pCQyxXQUFPLEVBQUUsU0FIUTtBQUlqQkMsVUFBTSxFQUFFO0FBSlMsR0FBbkI7QUFPQSxNQUFNQyxPQUFPLEdBQUc7QUFDZEosVUFBTSxFQUFFO0FBRE0sR0FBaEI7QUFJQSxNQUFNSyxT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LENBQXhCLEVBQ0VDLFFBQVEsR0FBR0UsSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxRQUFULEVBQW1CRixTQUFuQixDQUFULEVBQXdDSCxLQUFLLENBQUNJLENBQUQsQ0FBN0MsSUFBb0QsQ0FBL0Q7QUFDRkosZUFBSyxDQUFDSSxDQUFDLEdBQUcsQ0FBTCxDQUFMLEdBQWVELFNBQWY7QUFDQUEsbUJBQVMsR0FBR0UsUUFBWjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxRQUFJSCxDQUFDLEdBQUcsQ0FBUixFQUFXRixLQUFLLENBQUNQLEVBQUUsQ0FBQ0csTUFBSixDQUFMLEdBQW1CTyxTQUFuQjtBQUNaOztBQUNELFNBQU9ILEtBQUssQ0FBQ1AsRUFBRSxDQUFDRyxNQUFKLENBQVo7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYTdhYTNmZGNhMTUyNjQ2NjcwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYmxlIGZyb20gJy4uL1RhYmxlL3RhYmxlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBjb2xvcnNlYXJjaCA9ICh7IGNvbG9ycyB9KSA9PiB7XHJcbiAgY29uc3QgaW5wdXRTdHlsZSA9IHtcclxuICAgIG1hcmdpbjogJzEwcHggMHB4JyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgIHBhZGRpbmc6ICcycHggNXB4JyxcclxuICAgIGhlaWdodDogJzMwcHgnXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaDJTdHlsZSA9IHtcclxuICAgIG1hcmdpbjogJzAnXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVwb1N0eWxlID0ge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICc1JScsXHJcbiAgICByaWdodDogJzUlJ1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hTdHJpbmcsIHNldFNlYXJjaFN0cmluZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbG9yc1N0YXRlLCBzZXRDb2xvcnNTdGF0ZV0gPSB1c2VTdGF0ZShjb2xvcnMpO1xyXG5cclxuICAvLyBhc3N1bXB0aW9uOiBoZXggc2VhcmNoIGRvZXMgbm90IGhhdmUgdG8gYmUgYSBjb250aWd1b3VzIHN1YnN0cmluZ1xyXG4gIC8vIFRoZXJlZm9yZSwgcmFuayBieSBjaGFyYWN0ZXIgbWF0Y2ggYW5kIG5vdCBieSBzdWJzdHJpbmdcclxuICBmdW5jdGlvbiBoYW5kbGVTZWFyY2goZSkge1xyXG4gICAgLy8gY2hlY2sgaWYgZW50ZXIgd2FzIHByZXNzZWRcclxuICAgIGlmIChlLmtleUNvZGUgIT09IDEzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgYSByYW5raW5nIHByb3BlcnR5IHRvIGNvbG9yIG9iamVjdHNcclxuICAgIGNvbnN0IHJhbmtlZEFycmF5ID0gY29sb3JzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAvLyByYW5rIGl0ZW0ncyAoY29sb3Igb2JqZWN0J3MpIHNpbWlsYXJpdHkgdG8gdGhlIHNlYXJjaCBzdHJpbmdcclxuICAgICAgY29uc3QgcmFuayA9IHNpbWlsYXJpdHkoc2VhcmNoU3RyaW5nLCBpdGVtLmhleCk7XHJcblxyXG4gICAgICAvLyBwZXJzb25hbCBmdW5jdGlvbiB0byByYW5rIHN1YnN0cmluZyBtYXRjaGluZyAtIHNpbXBsZSBhbmQgY2hhcmFjdGVyIGJhc2VkXHJcbiAgICAgIC8vIGNvbnN0IHJhbmsgPSBzZWFyY2hTdHJpbmcuc3BsaXQoJycpLnJlZHVjZSgoYWNjLCBjaCkgPT4ge1xyXG4gICAgICAvLyAgIHJldHVybiBpdGVtLmNvbG9yLmluY2x1ZGVzKGNoKSA/IGFjYyArIDEgOiBhY2M7XHJcbiAgICAgIC8vIH0sIDApO1xyXG5cclxuICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgcmFuayB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc29ydCBjb2xvciBvYmplY3RzIGJ5IHRoZSBhZGRlZCByYW5rIHByb3BlcnR5IGFuZCByZXR1cm4gdGhlIGZpcnN0IDUwXHJcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IHJhbmtlZEFycmF5LnNvcnQoc29ydEJ5UmFuaykuc3BsaWNlKDAsIDUwKTtcclxuXHJcbiAgICBzZXRDb2xvcnNTdGF0ZShzb3J0ZWRBcnJheSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgyIHN0eWxlPXtoMlN0eWxlfT5Db2xvcnM8L2gyPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS90aW1laXRlbC9jb2xvci1zZWFyY2gnXHJcbiAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgc3R5bGU9e3JlcG9TdHlsZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgIGhlaWdodD0nMTInXHJcbiAgICAgICAgICB3aWR0aD0nMTInXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICBzdHJva2UtbGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9JzInXHJcbiAgICAgICAgICAgIGQ9J00xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQnXHJcbiAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIEdpdGh1YiBSZXBvXHJcbiAgICAgIDwvYT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hTdHJpbmcoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSl9XHJcbiAgICAgICAgc3R5bGU9e2lucHV0U3R5bGV9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIEhleCBDb2xvciBDb2RlJ1xyXG4gICAgICAvPlxyXG4gICAgICA8VGFibGUgY29sb3JzPXtjb2xvcnNTdGF0ZX0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvcnNlYXJjaDtcclxuXHJcbi8vIGhlbHBlciBmdW5jdGlvbiB0byBzb3J0IGNvbG9yIG9iamVjdCBieSByYW5rIHByb3BlcnR5XHJcbmZ1bmN0aW9uIHNvcnRCeVJhbmsoYSwgYikge1xyXG4gIHJldHVybiBhLnJhbmsgPCBiLnJhbmsgPyAxIDogLTE7XHJcbn1cclxuXHJcbi8vIGhlbHBlciBmdW5jdGlvbnMgZm9yIGZ1enp5IHN1YnN0cmluZyBtYXRjaGluZyB1c2luZyB0aGUgTGV2ZW5zaHRlaW4gQWxnb3JpdGhtIC0gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA0NzM3NDUvY29tcGFyZS1zdHJpbmdzLWphdmFzY3JpcHQtcmV0dXJuLW9mLWxpa2VseVxyXG5mdW5jdGlvbiBzaW1pbGFyaXR5KHMxLCBzMikge1xyXG4gIHZhciBsb25nZXIgPSBzMTtcclxuICB2YXIgc2hvcnRlciA9IHMyO1xyXG4gIGlmIChzMS5sZW5ndGggPCBzMi5sZW5ndGgpIHtcclxuICAgIGxvbmdlciA9IHMyO1xyXG4gICAgc2hvcnRlciA9IHMxO1xyXG4gIH1cclxuICB2YXIgbG9uZ2VyTGVuZ3RoID0gbG9uZ2VyLmxlbmd0aDtcclxuICBpZiAobG9uZ2VyTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiAxLjA7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICAobG9uZ2VyTGVuZ3RoIC0gZWRpdERpc3RhbmNlKGxvbmdlciwgc2hvcnRlcikpIC8gcGFyc2VGbG9hdChsb25nZXJMZW5ndGgpXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdERpc3RhbmNlKHMxLCBzMikge1xyXG4gIHMxID0gczEudG9Mb3dlckNhc2UoKTtcclxuICBzMiA9IHMyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIHZhciBjb3N0cyA9IG5ldyBBcnJheSgpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IHMxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgbGFzdFZhbHVlID0gaTtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDw9IHMyLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGlmIChpID09IDApIGNvc3RzW2pdID0gajtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGogPiAwKSB7XHJcbiAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBjb3N0c1tqIC0gMV07XHJcbiAgICAgICAgICBpZiAoczEuY2hhckF0KGkgLSAxKSAhPSBzMi5jaGFyQXQoaiAtIDEpKVxyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IE1hdGgubWluKE1hdGgubWluKG5ld1ZhbHVlLCBsYXN0VmFsdWUpLCBjb3N0c1tqXSkgKyAxO1xyXG4gICAgICAgICAgY29zdHNbaiAtIDFdID0gbGFzdFZhbHVlO1xyXG4gICAgICAgICAgbGFzdFZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaSA+IDApIGNvc3RzW3MyLmxlbmd0aF0gPSBsYXN0VmFsdWU7XHJcbiAgfVxyXG4gIHJldHVybiBjb3N0c1tzMi5sZW5ndGhdO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=