var ultrablocks;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/BlockCard.js":
/*!*************************************!*\
  !*** ./src/components/BlockCard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






const BlockCard = ({
  block,
  isLoading,
  onToggle
}) => {
  var _block$docLink;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ubs-block-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("ubs-block-card__icon", {
      // "is-disabled": block?.isPro && !ultrablocksObj?.hasPro,
    })
  }, block.icon?.()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ubs-block-card__description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, block.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: (_block$docLink = block?.docLink) !== null && _block$docLink !== void 0 ? _block$docLink : "https://docs.themeisle.com/category/1611-blocks-library",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn More")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ubs-block-card__action"
  }, block?.released ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    checked: !block?.isDisabled,
    onChange: onToggle
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ubs-block-comming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Coming", "ultrablocks"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockCard);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies.
 */

const Footer = () => {
  // auto change the year
  const year = new Date().getFullYear();
  const yearText = year === 2024 ? year : `2024 - ${year}`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", {
    className: "ultrablocks-footer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ultrablocks-container"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Copyright ©${yearText} UltraBlocks. All Rights Reserved.`, "ultrablocks")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Headers.js":
/*!***********************************!*\
  !*** ./src/components/Headers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * External dependencies.
 */


/**
 * WordPress dependencies.
 */

const NAVIGATION_ITEMS = [{
  slug: "welcome",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Welcome", "ultrablocks"),
  visibility: false
}, {
  slug: "blocks",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Blocks", "ultrablocks"),
  visibility: true
}, {
  slug: "integrations",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Integrations", "ultrablocks"),
  visibility: true
}, {
  slug: "upsell",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Free vs PRO", "ultrablocks"),
  visibility: false
  // visibility: !Boolean(window.ultrablocksObj.hasPro),
}, {
  slug: "feedback",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Feedback", "ultrablocks"),
  visibility: false
}];
const {
  ultrablocksAdminObj
} = window;
const Headers = ({
  isActive,
  setActive
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ultrablocks-navigation"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ultrablocks-navigation-left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: window.ultrablocksAdminObj.assetsUrl + "images/admin-logo.png",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Ultrablocks – Page Builder Blocks & Extensions for Gutenberg", "ultrablocks")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "ultrablocks-navigation-center"
  }, NAVIGATION_ITEMS.map(item => item.visibility && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      "is-active": item.slug === (isActive || "blocks")
    }),
    onClick: () => setActive(item.slug),
    key: item.slug
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ultrablocks-navigation-right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("abbr", {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Version: %s", "ultrablocks"), ultrablocksAdminObj.version),
    className: "version"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Version", "ultrablocks"), ": ", ultrablocksAdminObj.version)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Headers);

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useSettings */ "./src/utils/useSettings.js");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/_index */ "./src/pages/_index.js");





const Main = props => {
  const {
    activeTab,
    setActive
  } = props;
  const [getOption, updateOption, status] = (0,_utils_useSettings__WEBPACK_IMPORTED_MODULE_2__["default"])();
  // if ("loading" === status) {
  //   return (
  //     <Placeholder>
  //       <Spinner />
  //     </Placeholder>
  //   );
  // }

  const Content = () => {
    switch (activeTab) {
      case "":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pages_index__WEBPACK_IMPORTED_MODULE_3__.Blocks, null);
      case "integrations":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ultrablocks-left"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pages_index__WEBPACK_IMPORTED_MODULE_3__.Integrations, null));
      case "blocks":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pages_index__WEBPACK_IMPORTED_MODULE_3__.Blocks, null);
      default:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ultrablocks-left"
        }, "empty");
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ultrablocks-main is-blocks"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Content, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./src/components/Notices.js":
/*!***********************************!*\
  !*** ./src/components/Notices.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__);





const Notices = () => {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store).getNotices(), []);
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store);
  const snackbarNotices = notices.filter(notice => notice.type === "snackbar");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timeout = setTimeout(() => {
      if (snackbarNotices.length > 0) {
        removeNotice(snackbarNotices[0].id);
      }
    }, 2500); // 3 seconds

    return () => clearTimeout(timeout);
  }, [snackbarNotices, removeNotice]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SnackbarList, {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: removeNotice
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notices);

/***/ }),

/***/ "./src/components/_components.js":
/*!***************************************!*\
  !*** ./src/components/_components.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockCard: () => (/* reexport safe */ _BlockCard__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Footer: () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Headers: () => (/* reexport safe */ _Headers__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Main: () => (/* reexport safe */ _Main__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Notices: () => (/* reexport safe */ _Notices__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _Headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Headers */ "./src/components/Headers.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ "./src/components/Main.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var _Notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Notices */ "./src/components/Notices.js");
/* harmony import */ var _BlockCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlockCard */ "./src/components/BlockCard.js");






/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_components */ "./src/components/_components.js");



const getInitialStateFromURLQuery = () => {
  const hash = window.location.hash.slice(1); // Remove the '#' at the start
  return hash;
};
const Dashboard = () => {
  const [currentTab, setTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(getInitialStateFromURLQuery);
  if (currentTab) {
    window.location.hash = currentTab;
    window.history.pushState({}, "", `#${currentTab}`);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_components__WEBPACK_IMPORTED_MODULE_2__.Headers, {
    isActive: currentTab,
    setActive: setTab
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_components__WEBPACK_IMPORTED_MODULE_2__.Main, {
    activeTab: currentTab,
    setActive: setTab
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_components__WEBPACK_IMPORTED_MODULE_2__.Footer, null), undefined !== wp.notices.store && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_components__WEBPACK_IMPORTED_MODULE_2__.Notices, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./src/pages/_index.js":
/*!*****************************!*\
  !*** ./src/pages/_index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blocks: () => (/* reexport safe */ _blocks__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Integrations: () => (/* reexport safe */ _integrations__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/pages/blocks.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integrations */ "./src/pages/integrations.js");



/***/ }),

/***/ "./src/pages/blocks.js":
/*!*****************************!*\
  !*** ./src/pages/blocks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_BlockCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlockCard */ "./src/components/BlockCard.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/icons */ "./src/utils/icons.js");







const UltraBlocks = [{
  slug: "ultrablocks/paragraph",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Paragraph", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.paragraphIcon,
  docLink: "https://ultrablocks.pro",
  released: true
}, {
  slug: "ultrablocks/grid",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Grid", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.gridIcons,
  docLink: "https://ultrablocks.pro",
  released: true
}, {
  slug: "ultrablocks/container",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Container", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.containerIcon,
  docLink: "https://ultrablocks.pro",
  released: true
}, {
  slug: "ultrablocks/countdown",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Countdown", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.countdownIcon,
  docLink: "https://ultrablocks.pro",
  released: true
}, {
  slug: "ultrablocks/google-maps",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Google Maps", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.googleMapIcon,
  docLink: "https://ultrablocks.pro",
  released: true
}, {
  slug: "ultrablocks/tabs",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tabs", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.tabsIcon,
  docLink: "https://ultrablocks.pro",
  released: true
}, {
  slug: "ultrablocks/buttons",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Buttons", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.buttonsIcon,
  docLink: "https://ultrablocks.pro",
  released: true
}, {
  slug: "ultrablocks/shape-divider",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shape Divider", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.shapeDividerIcon,
  docLink: "https://ultrablocks.pro",
  released: true
}, {
  slug: "ultrablocks/search",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.searchIcon,
  docLink: "https://ultrablocks.pro",
  released: true
}, {
  slug: "ultrablocks/video",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Video", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.videoPlayerIcon,
  docLink: "https://ultrablocks.pro",
  released: false
}, {
  slug: "ultrablocks/newsletter",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Newsletter", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.newsletterIcon,
  docLink: "https://ultrablocks.pro",
  released: true
},
// {
//   slug: "ultrablocks/alertbox",
//   name: __("Alertbox", "ultrablocks"),
//   icon: alertboxIcon,
//   docLink: "https://ultrablocks.pro",
//   released: false,
// },
{
  slug: "ultrablocks/accordion",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Accordion", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.accordionIcon,
  docLink: "https://ultrablocks.pro",
  released: true
}, {
  slug: "ultrablocks/progress-bar",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Progress bar", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.progressIcon,
  docLink: "https://ultrablocks.pro",
  released: false
}, {
  slug: "ultrablocks/image-comparison",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Comparison", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.imageComparison,
  docLink: "https://ultrablocks.pro",
  released: true
}, {
  slug: "ultrablocks/post-grid",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Post Grid", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.postsIcon,
  docLink: "https://ultrablocks.pro",
  released: false
}, {
  slug: "ultrablocks/post-carousel",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Post Carousel", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.postCarouseIcon,
  docLink: "https://ultrablocks.pro",
  released: false
}, {
  slug: "ultrablocks/post-list",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Post List", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.postListIcon,
  docLink: "https://ultrablocks.pro",
  released: false
}, {
  slug: "ultrablocks/lottie",
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lottie", "ultrablocks"),
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.lottieIcon,
  docLink: "https://ultrablocks.pro",
  released: true
}].sort((a, b) => a.name.localeCompare(b.name));

/**
 * Dashboard Header component.
 * @param {import('../..').BlockCardHeaderProps} props Component props.
 */
const Header = ({
  blocks,
  onDisableAll,
  onEnableAll,
  canDisplayBtn
}) => {
  const allEnabled = blocks.every(block => !block.isDisabled);
  const allDisabled = blocks.every(block => block.isDisabled);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ubs-blocks-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ubs-blocks-header__left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('All Blocks', 'ultrablocks'))), canDisplayBtn && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ubs-blocks-header__right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "secondary",
    disabled: allDisabled,
    onClick: onDisableAll
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Disable All', 'ultrablocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "primary",
    disabled: allEnabled,
    onClick: onEnableAll
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable All', 'ultrablocks'))));
};
const Blocks = () => {
  const [blocksStatus, setBlocksStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(UltraBlocks);
  const [canShowNotice, canShowNoticeSet] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    preferencesHiddenBlocks,
    isLoading
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    /**
     * Array of hidden block types.
     * @type {Array<string>|undefined}
     */
    const hiddenBlocks = select("core/preferences")?.get("core", "hiddenBlockTypes");
    const isResolving = select("core/preferences").isResolving("get", ["hiddenBlockTypes"]);
    return {
      preferencesHiddenBlocks: hiddenBlocks ? new Set(hiddenBlocks) : undefined,
      isLoading: isResolving
    };
  }, [blocksStatus]);

  /**
   * Update the WP Option with the new value.
   * @param {import('../..').BlocksToDisableList} blocks Blocks to be updated.
   */
  const sendUpdates = blocks => {
    const newPreferencesHiddenBlocks = new Set();

    // Copy the old preferences.
    if (preferencesHiddenBlocks) {
      preferencesHiddenBlocks.forEach(block => {
        newPreferencesHiddenBlocks.add(block);
      });
    }

    // Add the new preferences.
    blocks.forEach(block => {
      if (block.isDisabled) {
        newPreferencesHiddenBlocks.add(block.slug);
      } else {
        newPreferencesHiddenBlocks.delete(block.slug);
      }
    });
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)("core/preferences").set("core/edit-post", "hiddenBlockTypes", [...newPreferencesHiddenBlocks]);
  };

  /**
   * Toggle the block status.
   * @param {string} blockSlug Block slug.
   */
  const toggleBlock = blockSlug => {
    const updatedBlocksStatus = blocksStatus.map(block => {
      if (block.slug === blockSlug) {
        block.isDisabled = !block.isDisabled;
      }
      return block;
    });
    sendUpdates(updatedBlocksStatus);
    setBlocksStatus(updatedBlocksStatus);
    canShowNoticeSet(true);
  };

  /**
   * Disable all blocks and update the WP Option.
   */
  const onDisableAll = () => {
    const updatedBlocksStatus = blocksStatus.map(block => {
      // if (block.isPro && !ultrablocksObj.hasPro) {
      //   return block;
      // }

      block.isDisabled = true;
      return block;
    });
    sendUpdates(updatedBlocksStatus);
    setBlocksStatus(updatedBlocksStatus);
    canShowNoticeSet(true);
  };

  /**
   * Enable all blocks and update the WP Option.
   */
  const onEnableAll = () => {
    const updatedBlocksStatus = blocksStatus.map(block => {
      block.isDisabled = false;
      return block;
    });
    sendUpdates(updatedBlocksStatus);
    setBlocksStatus(updatedBlocksStatus);
    canShowNoticeSet(true);
  };

  /**
   * Initiate the blocks' status.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isLoading) {
      return;
    }
    const updatedBlocksStatus = blocksStatus.map(block => {
      if (preferencesHiddenBlocks?.has(block.slug)) {
        block.isDisabled = true;
      } else {
        block.isDisabled = false;
      }
      return block;
    });
    setBlocksStatus(updatedBlocksStatus);
  }, [isLoading]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!canShowNotice || isLoading) {
      return;
    }
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)?.("core/notices")?.createNotice("info", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Option Updated.", "ultrablocks"), {
      isDismissible: true,
      type: "snackbar",
      id: "saved-options"
    });
    canShowNoticeSet(false);
  }, [canShowNotice, preferencesHiddenBlocks, isLoading]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Header, {
    blocks: blocksStatus,
    onDisableAll: onDisableAll,
    onEnableAll: onEnableAll,
    canDisplayBtn: !isLoading
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ubs-block-cards"
  }, blocksStatus.map((block, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      block: block,
      isLoading: isLoading,
      onToggle: () => toggleBlock(block.slug)
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blocks);

/***/ }),

/***/ "./src/pages/integrations.js":
/*!***********************************!*\
  !*** ./src/pages/integrations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_useSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useSettings */ "./src/utils/useSettings.js");






const integrations = () => {
  const [getOption, updateOption, status] = (0,_utils_useSettings__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const [googleMapsAPI, setGoogleMapsAPI] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [mailchimpAPI, setMailchimpAPI] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [mailchimpAudienceID, setMailchimpAudienceID] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [weatherAPI, setWeatherAPI] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setGoogleMapsAPI(getOption("ultrablocks_google_maps_api_key"));
    setWeatherAPI(getOption("ultrablocks_open_weather_map_api_key"));
    setMailchimpAPI(getOption("ultrablocks_mailchimp_api_key"));
    setMailchimpAudienceID(getOption("ultrablocks_mailchimp_audience_id"));
  }, [getOption("ultrablocks_google_maps_api_key"), getOption("ultrablocks_mailchimp_api_key"), getOption("ultrablocks_mailchimp_audience_id"), getOption("ultrablocks_open_weather_map_api_key")]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Google Maps", "ultrablocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Google Maps API", "ultrablocks"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("In order to use Google Maps block, you need to use Google Maps and Places API.", "ultrablocks"),
    id: "ultrablocks-options-google-map-api",
    className: "ultrablocks-button-field"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    type: "text",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Secret Key", "ultrablocks"),
    value: googleMapsAPI,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Google Maps API Key", "ultrablocks"),
    disabled: "saving" === status,
    onChange: value => setGoogleMapsAPI(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ultrablocks-button-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    className: "ubs-action-button",
    isSecondary: true,
    disabled: "saving" === status,
    onClick: () => updateOption("ultrablocks_google_maps_api_key", googleMapsAPI)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Save", "ultrablocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
    href: "https://developers.google.com/maps/documentation/javascript/get-api-key"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Get API Key", "ultrablocks")))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Weather API (Coming Soon...)", "ultrablocks"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Weather API", "ultrablocks"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("In order to use Weather block, you need to use Weather API.", "ultrablocks"),
    id: "ultrablocks-options-weather-api",
    className: "ultrablocks-button-field"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    type: "text",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Secret Key", "ultrablocks"),
    value: weatherAPI,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Weather API Key", "ultrablocks"),
    disabled: true,
    onChange: value => setWeatherAPI(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ultrablocks-button-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    className: "ubs-action-button",
    isSecondary: true,
    disabled: true,
    onClick: () => updateOption("ultrablocks_open_weather_map_api_key", weatherAPI)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Save", "ultrablocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
    href: "https://home.openweathermap.org/api_keys"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Get API Key", "ultrablocks")))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Mailchimp (NEWSLETTER)", "ultrablocks"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Mailchimp API", "ultrablocks"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("In order to use Newsletter block, you need to use Mailchimp API.", "ultrablocks"),
    id: "ultrablocks-options-mailchimp-api",
    className: "ultrablocks-button-field"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    type: "text",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("API Key", "ultrablocks"),
    value: mailchimpAPI,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Mailchimp API Key", "ultrablocks"),
    onChange: value => setMailchimpAPI(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    type: "text",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("AUDIENCE ID", "ultrablocks"),
    value: mailchimpAudienceID,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Mailchimp Audience ID", "ultrablocks"),
    onChange: value => setMailchimpAudienceID(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ultrablocks-button-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    className: "ubs-action-button",
    isSecondary: true,
    onClick: () => {
      updateOption("ultrablocks_mailchimp_api_key", mailchimpAPI);
      updateOption("ultrablocks_mailchimp_audience_id", mailchimpAudienceID);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Save", "ultrablocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
    href: "https://mailchimp.com/"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Get API Key", "ultrablocks")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (integrations);

/***/ }),

/***/ "./src/utils/icons.js":
/*!****************************!*\
  !*** ./src/utils/icons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StarFilled: () => (/* binding */ StarFilled),
/* harmony export */   StarHalf: () => (/* binding */ StarHalf),
/* harmony export */   accordionIcon: () => (/* binding */ accordionIcon),
/* harmony export */   accordionItemIcon: () => (/* binding */ accordionItemIcon),
/* harmony export */   aiGeneration: () => (/* binding */ aiGeneration),
/* harmony export */   aiLayoutGeneratorIcon: () => (/* binding */ aiLayoutGeneratorIcon),
/* harmony export */   alertboxIcon: () => (/* binding */ alertboxIcon),
/* harmony export */   alignBottom: () => (/* binding */ alignBottom),
/* harmony export */   alignCenter: () => (/* binding */ alignCenter),
/* harmony export */   alignTop: () => (/* binding */ alignTop),
/* harmony export */   businessHoursIcon: () => (/* binding */ businessHoursIcon),
/* harmony export */   buttonIcon: () => (/* binding */ buttonIcon),
/* harmony export */   buttonsIcon: () => (/* binding */ buttonsIcon),
/* harmony export */   cartIcon: () => (/* binding */ cartIcon),
/* harmony export */   check: () => (/* binding */ check),
/* harmony export */   circleIcon: () => (/* binding */ circleIcon),
/* harmony export */   close: () => (/* binding */ close),
/* harmony export */   cols112: () => (/* binding */ cols112),
/* harmony export */   cols12: () => (/* binding */ cols12),
/* harmony export */   cols121: () => (/* binding */ cols121),
/* harmony export */   cols131: () => (/* binding */ cols131),
/* harmony export */   cols21: () => (/* binding */ cols21),
/* harmony export */   cols211: () => (/* binding */ cols211),
/* harmony export */   cols2Equal: () => (/* binding */ cols2Equal),
/* harmony export */   cols2Grid: () => (/* binding */ cols2Grid),
/* harmony export */   cols3Equal: () => (/* binding */ cols3Equal),
/* harmony export */   cols3Grid: () => (/* binding */ cols3Grid),
/* harmony export */   cols4Equal: () => (/* binding */ cols4Equal),
/* harmony export */   cols5Equal: () => (/* binding */ cols5Equal),
/* harmony export */   cols6Equal: () => (/* binding */ cols6Equal),
/* harmony export */   colsCollapsed: () => (/* binding */ colsCollapsed),
/* harmony export */   colsFull: () => (/* binding */ colsFull),
/* harmony export */   columnIcon: () => (/* binding */ columnIcon),
/* harmony export */   columnsIcon: () => (/* binding */ columnsIcon),
/* harmony export */   comparisonTableIcon: () => (/* binding */ comparisonTableIcon),
/* harmony export */   containerIcon: () => (/* binding */ containerIcon),
/* harmony export */   contentAiGenerationIcon: () => (/* binding */ contentAiGenerationIcon),
/* harmony export */   countdownIcon: () => (/* binding */ countdownIcon),
/* harmony export */   faIcon: () => (/* binding */ faIcon),
/* harmony export */   flipIcon: () => (/* binding */ flipIcon),
/* harmony export */   formFieldIcon: () => (/* binding */ formFieldIcon),
/* harmony export */   formIcon: () => (/* binding */ formIcon),
/* harmony export */   googleMapIcon: () => (/* binding */ googleMapIcon),
/* harmony export */   gridIcons: () => (/* binding */ gridIcons),
/* harmony export */   headingIcon: () => (/* binding */ headingIcon),
/* harmony export */   iconListIcon: () => (/* binding */ iconListIcon),
/* harmony export */   iconListItemIcon: () => (/* binding */ iconListItemIcon),
/* harmony export */   imageComparison: () => (/* binding */ imageComparison),
/* harmony export */   lottieIcon: () => (/* binding */ lottieIcon),
/* harmony export */   mapIcon: () => (/* binding */ mapIcon),
/* harmony export */   newsletterIcon: () => (/* binding */ newsletterIcon),
/* harmony export */   paragraphIcon: () => (/* binding */ paragraphIcon),
/* harmony export */   popupIcon: () => (/* binding */ popupIcon),
/* harmony export */   popupScratch: () => (/* binding */ popupScratch),
/* harmony export */   popupWithForm: () => (/* binding */ popupWithForm),
/* harmony export */   popupWithImageAndText: () => (/* binding */ popupWithImageAndText),
/* harmony export */   postCarouseIcon: () => (/* binding */ postCarouseIcon),
/* harmony export */   postGridIcon: () => (/* binding */ postGridIcon),
/* harmony export */   postListIcon: () => (/* binding */ postListIcon),
/* harmony export */   postsIcon: () => (/* binding */ postsIcon),
/* harmony export */   progressIcon: () => (/* binding */ progressIcon),
/* harmony export */   reviewIcon: () => (/* binding */ reviewIcon),
/* harmony export */   rowsCollapsed: () => (/* binding */ rowsCollapsed),
/* harmony export */   searchIcon: () => (/* binding */ searchIcon),
/* harmony export */   shapeDividerIcon: () => (/* binding */ shapeDividerIcon),
/* harmony export */   sharingIcon: () => (/* binding */ sharingIcon),
/* harmony export */   sliderIcon: () => (/* binding */ sliderIcon),
/* harmony export */   tabsIcon: () => (/* binding */ tabsIcon),
/* harmony export */   tabsItemIcon: () => (/* binding */ tabsItemIcon),
/* harmony export */   videoPlayerIcon: () => (/* binding */ videoPlayerIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


const paragraphIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"
  }));
};
const accordionIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 4.5h12V6H6zM6 18h12v1.5H6zm.15-10h-.029c-.395 0-.736 0-1.017.023-.297.024-.592.078-.875.222a2.25 2.25 0 0 0-.984.984c-.144.283-.198.578-.222.875C3 10.384 3 10.726 3 11.12v1.758c0 .395 0 .736.023 1.017.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.28.023.622.023 1.017.023H17.88c.395 0 .736 0 1.017-.023.297-.024.592-.078.875-.222.424-.216.768-.56.984-.984.144-.283.198-.578.222-.875.023-.28.023-.622.023-1.017V11.12c0-.395 0-.736-.023-1.017-.024-.297-.078-.592-.222-.875a2.25 2.25 0 0 0-.983-.984c-.284-.144-.58-.198-.876-.222C18.616 8 18.274 8 17.88 8H6.15M4.91 9.582c.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018h11.7c.432 0 .712 0 .924.018.204.017.28.045.316.064a.75.75 0 0 1 .328.328c.02.037.047.112.064.316.017.212.018.492.018.924v1.7c0 .432 0 .712-.018.924-.017.204-.045.28-.064.317a.75.75 0 0 1-.328.327c-.037.02-.112.047-.316.064-.212.017-.492.018-.924.018H6.15c-.432 0-.712 0-.924-.018-.204-.017-.28-.045-.316-.064a.75.75 0 0 1-.328-.327c-.02-.038-.047-.113-.064-.317a13 13 0 0 1-.018-.924v-1.7c0-.432 0-.712.018-.924.017-.204.045-.28.064-.316a.75.75 0 0 1 .328-.328",
    clipRule: "evenodd"
  }));
};
const accordionItemIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M3 10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M20 10H4v4h16v-4ZM4 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4Zm16-4H4v2h16V5ZM4 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4Zm16 13H4v2h16v-2ZM4 16a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4Z",
    clipRule: "evenodd"
  }));
};
const headingIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M15.999 6.455v12.39h.651c.364 0 .546.133.546.399v.357c0 .266-.182.399-.546.399h-2.541c-.364 0-.546-.133-.546-.399v-.357c0-.266.182-.399.546-.399h.651v-5.88H6.843v5.88h.651c.364 0 .546.133.546.399v.357c0 .266-.182.399-.546.399H4.953c-.364 0-.546-.133-.546-.399v-.357c0-.266.182-.399.546-.399h.651V6.455h-.651c-.364 0-.546-.133-.546-.399v-.357c0-.266.182-.399.546-.399h2.541c.364 0 .546.133.546.399v.357c0 .266-.182.399-.546.399h-.651v5.355h7.917V6.455h-.651c-.364 0-.546-.133-.546-.399v-.357c0-.266.182-.399.546-.399h2.541c.364 0 .546.133.546.399v.357c0 .266-.182.399-.546.399h-.651Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M17.5 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M20 5.5a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5Z",
    clipRule: "evenodd"
  }));
};
const buttonIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M20 9H4v5h16V9ZM4 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H4Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M5.618 11a.5.5 0 0 0 0 1h12.764a.5.5 0 0 0 0-1H5.618Z",
    clipRule: "evenodd"
  }));
};
const circleIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-1.346a7.654 7.654 0 1 1 0-15.308 7.654 7.654 0 0 1 0 15.308ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-3.346a6.654 6.654 0 1 1 0-13.308 6.654 6.654 0 0 1 0 13.308Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M6.005 18.713a9 9 0 0 1-2.115-2.81.355.355 0 0 1 .01-.335.615.615 0 0 1 .378-.296c.316-.091.812.079 1.128.615a7.655 7.655 0 1 0 8.1-11.392c-.61-.122-.934-.535-.951-.864a.615.615 0 0 1 .155-.454.355.355 0 0 1 .314-.119 9 9 0 1 1-7.019 15.655Zm-3.016-2.377c-.4-.832.123-1.768 1.011-2.025.888-.256 1.798.272 2.267 1.068a6.655 6.655 0 1 0 7.042-9.903c-.905-.182-1.703-.869-1.753-1.791-.049-.923.664-1.725 1.581-1.62A10 10 0 1 1 2.99 16.337Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M4.182 14.868c-.867.318-1.324 1.289-.866 2.091A10 10 0 1 0 13.921 2.186c-.906-.177-1.68.566-1.704 1.49-.024.923.717 1.671 1.606 1.924a6.654 6.654 0 1 1-7.304 10.174c-.524-.761-1.47-1.224-2.337-.906Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M6.36 19.013a9 9 0 0 1-2.175-2.55.355.355 0 0 1-.015-.335.615.615 0 0 1 .357-.321c.308-.114.816.021 1.168.534a7.653 7.653 0 1 0 8.402-11.703c-.599-.17-.889-.607-.88-.936a.615.615 0 0 1 .19-.441.355.355 0 0 1 .322-.093 9 9 0 1 1-7.37 15.845ZM3.315 16.96c-.458-.802-.001-1.773.866-2.091.868-.318 1.813.145 2.337.906A6.655 6.655 0 1 0 13.823 5.6c-.889-.253-1.63-1-1.606-1.924.024-.924.798-1.667 1.704-1.49A10 10 0 1 1 3.316 16.96Z",
    clipRule: "evenodd"
  }));
};
const countdownIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.75 2.002H9v1.5h2.25v1.533a8 8 0 1 0 7.24 3.286l1.04-1.04.53-.531L19 5.69l-.53.53-.97.97a7.97 7.97 0 0 0-4.75-2.155V3.502H15v-1.5H9.75M12 6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m.75 1.5v5.5h-1.5V8z",
    clipRule: "evenodd"
  }));
};
const flipIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M11.5 7V4h1v3A2.5 2.5 0 0 0 15 9.5h4v1h-4A3.5 3.5 0 0 1 11.5 7Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M11 4H5v16h14v-8a8 8 0 0 0-8-8ZM5 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a9 9 0 0 0-9-9H5Z",
    clipRule: "evenodd"
  }));
};
const faIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M20 4H4v16h16V4ZM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M11.776 7.454a.25.25 0 0 1 .448 0l1.187 2.406a.25.25 0 0 0 .189.136l2.654.386a.25.25 0 0 1 .139.427l-1.921 1.872a.25.25 0 0 0-.072.221l.453 2.644a.25.25 0 0 1-.362.263l-2.375-1.248a.25.25 0 0 0-.232 0L9.509 15.81a.25.25 0 0 1-.362-.263l.453-2.644a.25.25 0 0 0-.072-.221l-1.92-1.872a.25.25 0 0 1 .138-.427l2.654-.386a.25.25 0 0 0 .189-.136l1.187-2.406Z"
  }));
};
const formIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M19 3H5v18h14V3ZM5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M17 5H7v2h10V5ZM7 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7Zm10 7H7v1h10v-1ZM7 10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H7Zm10 5H7v4h10v-4ZM7 14a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H7Z",
    clipRule: "evenodd"
  }));
};
const formFieldIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M19 10H5v4h14v-4ZM5 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H5Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M6 12.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Z"
  }));
};
const googleMapIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    className: "o-block-icon",
    "aria-hidden": "true"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M8.872 8.64a.5.5 0 0 0-.41 0l-5.667 2.55a.5.5 0 0 0-.295.457v8.806a.5.5 0 0 0 .705.456l4.846-2.18a1.5 1.5 0 0 1 1.231 0l5.846 2.63a.5.5 0 0 0 .41 0l5.667-2.55a.5.5 0 0 0 .295-.456V9.547a.5.5 0 0 0-.705-.456l-4.846 2.18a1.5 1.5 0 0 1-1.231 0l-5.846-2.63Zm-.82-.911a1.5 1.5 0 0 1 1.23 0l5.846 2.63a.5.5 0 0 0 .41 0l4.846-2.18A1.5 1.5 0 0 1 22.5 9.547v8.806a1.5 1.5 0 0 1-.884 1.368l-5.667 2.55a1.5 1.5 0 0 1-1.231 0l-5.846-2.63a.5.5 0 0 0-.41 0l-4.846 2.18A1.5 1.5 0 0 1 1.5 20.453v-8.806a1.5 1.5 0 0 1 .884-1.368l5.667-2.55Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M16.515 13.662C18.255 11.396 20 9.123 20 6.875 20 4.183 17.985 2 15.5 2S11 4.183 11 6.875c0 2.25 1.745 4.52 3.485 6.787.343.446.686.892 1.015 1.338.33-.446.672-.892 1.015-1.338ZM15.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-2.4 6.2a.5.5 0 0 1 .7-.1l4 3a.5.5 0 0 1-.6.8l-4-3a.5.5 0 0 1-.1-.7Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M17.9 14.7a.5.5 0 0 0-.7-.1l-4 3a.5.5 0 0 0 .6.8l4-3a.5.5 0 0 0 .1-.7Z",
    clipRule: "evenodd"
  }));
};
const iconListIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M20 6H9v2h11V6ZM9 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H9Zm11 6H9v2h11v-2ZM9 10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9Zm11 6H9v2h11v-2ZM9 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9ZM6 6H4v2h2V6ZM4 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4Zm2 6H4v2h2v-2Zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4Zm2 6H4v2h2v-2Zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4Z",
    clipRule: "evenodd"
  }));
};
const iconListItemIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M20 6H9v2h11V6ZM9 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H9Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M8 11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M20 11H9v2h11v-2ZM9 10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9Zm11 6H9v2h11v-2ZM9 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9ZM6 6H4v2h2V6ZM4 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M3 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M6 11H4v2h2v-2Zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4Zm2 6H4v2h2v-2Zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4Z",
    clipRule: "evenodd"
  }));
};
const mapIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M8.872 8.64a.5.5 0 0 0-.41 0l-5.667 2.55a.5.5 0 0 0-.295.457v8.806a.5.5 0 0 0 .705.456l4.846-2.18a1.5 1.5 0 0 1 1.231 0l5.846 2.63a.5.5 0 0 0 .41 0l5.667-2.55a.5.5 0 0 0 .295-.456V9.547a.5.5 0 0 0-.705-.456l-4.846 2.18a1.5 1.5 0 0 1-1.231 0l-5.846-2.63Zm-.82-.911a1.5 1.5 0 0 1 1.23 0l5.846 2.63a.5.5 0 0 0 .41 0l4.846-2.18A1.5 1.5 0 0 1 22.5 9.547v8.806a1.5 1.5 0 0 1-.884 1.368l-5.667 2.55a1.5 1.5 0 0 1-1.231 0l-5.846-2.63a.5.5 0 0 0-.41 0l-4.846 2.18A1.5 1.5 0 0 1 1.5 20.453v-8.806a1.5 1.5 0 0 1 .884-1.368l5.667-2.55Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M16.515 13.662C18.255 11.396 20 9.123 20 6.875 20 4.183 17.985 2 15.5 2S11 4.183 11 6.875c0 2.25 1.745 4.52 3.485 6.787.343.446.686.892 1.015 1.338.33-.446.672-.892 1.015-1.338ZM15.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-2.4 6.2a.5.5 0 0 1 .7-.1l4 3a.5.5 0 0 1-.6.8l-4-3a.5.5 0 0 1-.1-.7Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M17.9 14.7a.5.5 0 0 0-.7-.1l-4 3a.5.5 0 0 0 .6.8l4-3a.5.5 0 0 0 .1-.7Z",
    clipRule: "evenodd"
  }));
};
const lottieIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.5 5.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75zM5.25 3A2.25 2.25 0 0 0 3 5.25v13.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V5.25A2.25 2.25 0 0 0 18.75 3zm10.678 4.25a3.75 3.75 0 0 0-3.311 1.99l-2.558 4.816a2.25 2.25 0 0 1-1.987 1.194H7v1.5h1.072a3.75 3.75 0 0 0 3.311-1.99l2.558-4.816a2.25 2.25 0 0 1 1.987-1.194H17v-1.5h-1.072",
    clipRule: "evenodd"
  }));
};
const popupIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M3 9.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 1 1 0V21a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 21V10A1.5 1.5 0 0 1 3 8.5h1.531a.5.5 0 1 1 0 1H3Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M21 3H8v11h13V3ZM8 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M14.45 4.55h4.5a.5.5 0 0 1 .5.5v4.5a.5.5 0 1 1-1 0V6.257l-4.096 4.097a.5.5 0 0 1-.707-.708l4.096-4.096H14.45a.5.5 0 0 1 0-1Z",
    clipRule: "evenodd"
  }));
};
const postsIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3.6 19.3h4.8c1.3 0 2.4-1 2.4-2.3v-3.8c0-1.3-1-2.4-2.4-2.4H3.6c-1.3 0-2.4 1-2.4 2.4V17c0 1.3 1.1 2.3 2.4 2.3zm-.8-6.1c0-.5.4-.9.9-.9h4.8c.5 0 .9.4.9.9V17c0 .5-.4.8-.9.8H3.6c-.5 0-.9-.4-.9-.8v-3.8zm7.4 7.6H2c-.4 0-.8.3-.8.8s.3.8.8.8h8.2c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zm10.1-9.9h-4.8c-1.3 0-2.3 1-2.3 2.4V17c0 1.3 1 2.3 2.3 2.3h4.8c1.3 0 2.4-1 2.4-2.3v-3.8c0-1.3-1.1-2.3-2.4-2.3zm.9 6.1c0 .5-.4.8-.9.8h-4.8c-.5 0-.8-.4-.8-.8v-3.8c0-.5.4-.9.8-.9h4.8c.5 0 .9.4.9.9V17zm.6 3.8h-8.2c-.4 0-.8.3-.8.8s.3.8.8.8h8.2c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zm-.8-19H3c-.9 0-1.8.8-1.8 1.8V7c0 .9.8 1.8 1.8 1.8h18c.9 0 1.8-.8 1.8-1.6V3.5c0-.9-.9-1.7-1.8-1.7zm.2 5.2s-.1.1-.2.1H3c-.1 0-.2-.1-.2-.2V3.5c0-.1.2-.2.2-.2h18c.1 0 .2.2.2.2V7z"
  }));
};
const progressIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4 7.8h13.6c.4 0 .8-.3.8-.8s-.4-.8-.8-.8H4c-.4 0-.8.4-.8.8s.4.8.8.8zm0 3h16c2.1 0 3.8-1.6 3.8-3.8S22.1 3.2 20 3.2H4C1.9 3.2.2 4.9.2 7s1.7 3.8 3.8 3.8zm0-6h16c1.3 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2H4c-1.3 0-2.2-1-2.2-2.2S2.7 4.8 4 4.8zm7.2 11.4H4c-.4 0-.8.3-.8.8s.3.8.8.8h7.2c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zm8.8-3H4C1.9 13.2.2 14.8.2 17s1.6 3.8 3.8 3.8h16c2.1 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8zm0 6H4c-1.3 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2h16c1.3 0 2.2 1 2.2 2.2 0 1.2-1 2.2-2.2 2.2z"
  }));
};
const reviewIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M1.717 8.588a.5.5 0 0 1 .695.13l2.264 3.297a.5.5 0 1 1-.825.566L1.588 9.283a.5.5 0 0 1 .13-.695Zm20.566 0a.5.5 0 0 1 .13.695l-2.264 3.298a.5.5 0 1 1-.825-.566l2.264-3.298a.5.5 0 0 1 .695-.13Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M19 13H5v7h14v-7ZM5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H5Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M11.776 3.454a.25.25 0 0 1 .448 0l1.04 2.108a.25.25 0 0 0 .189.137l2.326.338a.25.25 0 0 1 .138.426l-1.683 1.64a.25.25 0 0 0-.072.222l.397 2.316a.25.25 0 0 1-.362.264l-2.08-1.094a.25.25 0 0 0-.233 0l-2.08 1.094a.25.25 0 0 1-.363-.264l.397-2.316a.25.25 0 0 0-.072-.221L8.083 6.463a.25.25 0 0 1 .139-.426l2.325-.338a.25.25 0 0 0 .189-.137l1.04-2.108Z"
  }));
};
const columnsIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M21 4H3v16h18V4ZM3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M19 15H5v3h14v-3ZM5 14a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H5Zm5-8H5v6h5V6ZM5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5Zm14 1h-5v1h5V6Zm-5-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5Zm5 5h-5v2h5v-2Zm-5-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-5Z",
    clipRule: "evenodd"
  }));
};
const columnIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M21 4H3v16h18V4ZM3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M4 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M7 6H5v12h2V6ZM5 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5Zm8 1h-2v12h2V6Zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2Zm8 1h-2v12h2V6Zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2Z",
    clipRule: "evenodd"
  }));
};
const sharingIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "m14.69 6.154-6.715 4.268a.5.5 0 0 1-.537-.844l6.716-4.268.536.844Zm-7.122 7.094a.5.5 0 0 1 .684-.18l6.432 3.752-.504.864-6.432-3.752a.5.5 0 0 1-.18-.684Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M17 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    clipRule: "evenodd"
  }));
};
const sliderIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M2 5H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h1v-1H1V6h1V5Zm20 14h1V6h-1V5h1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-1v-1Zm-6.5-8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-8-3.87v8.37h9.207L7.5 8.13Zm-1-.904a.6.6 0 0 1 1.004-.444l10.64 9.674a.6.6 0 0 1-.403 1.044H7.1a.6.6 0 0 1-.6-.6V7.226Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M3 3v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Zm1 0v18h16V3H4Z",
    clipRule: "evenodd"
  }));
};
const tabsIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.25 4.5A2.25 2.25 0 0 0 3 6.75v11A2.25 2.25 0 0 0 5.25 20h13.5A2.25 2.25 0 0 0 21 17.75v-8a2.25 2.25 0 0 0-2.25-2.25H10.5v-.75A2.25 2.25 0 0 0 8.25 4.5zM9 7.5v-.75A.75.75 0 0 0 8.25 6h-3a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-8a.75.75 0 0 0-.75-.75H7.005V7.5H9",
    clipRule: "evenodd"
  }));
};
const tabsItemIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "m8.449 8.002-.091-.9-.035-.365c-.073-.793-.126-1.362-.499-1.826C7.467 4.468 6.57 3.893 4 4.017V20h16V8.002H8.449ZM3 3.996V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8.002a1 1 0 0 0-1-1H9.353l-.03-.33C9.182 5.02 8.99 2.762 3.91 3.02a.968.968 0 0 0-.91.976Z",
    clipRule: "evenodd"
  }));
};
const searchIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    alt: "Search",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
  }));
};
const cartIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M2.5 4a.5.5 0 0 1 .5-.5h.78a1.5 1.5 0 0 1 1.422 1.026L6.36 8h12.286a1.5 1.5 0 0 1 1.434 1.941l-1.385 4.5a1.5 1.5 0 0 1-1.434 1.059H8.74a1.5 1.5 0 0 1-1.434-1.059L5.524 8.653l-1.27-3.811a.5.5 0 0 0-.475-.342H3a.5.5 0 0 1-.5-.5Zm4.177 5 1.584 5.147a.5.5 0 0 0 .478.353h8.522a.5.5 0 0 0 .478-.353l1.385-4.5A.5.5 0 0 0 18.646 9H6.677Z",
    clipRule: "evenodd"
  }));
};
const businessHoursIcon = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ubs-block-icon",
    width: "24",
    height: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M16.347 8.36a.477.477 0 0 1-.694 0l-3.12-3.243L9.415 8.36a.477.477 0 0 1-.693 0 .524.524 0 0 1 0-.72l3.466-3.604a.48.48 0 0 1 .693 0l3.467 3.604a.524.524 0 0 1 0 .72Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M20 9H4v10h16V9ZM4 8h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    fillRule: "evenodd",
    d: "M8 15.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-3-3a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M14 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }));
};
const StarFilled = ({
  className
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
  }));
};
const StarHalf = ({
  className
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M9.518 8.783a.25.25 0 00.188-.137l2.069-4.192a.25.25 0 01.448 0l2.07 4.192a.25.25 0 00.187.137l4.626.672a.25.25 0 01.139.427l-3.347 3.262a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.363.264l-4.137-2.176a.25.25 0 00-.233 0l-4.138 2.175a.25.25 0 01-.362-.263l.79-4.607a.25.25 0 00-.072-.222L4.753 9.882a.25.25 0 01.14-.427l4.625-.672zM12 14.533c.28 0 .559.067.814.2l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39v7.143z"
  }));
};
const check = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M18.3 5.6L9.9 16.9l-4.6-3.4-.9 2.4 5.8 4.3 9.3-12.6z"
}));
const close = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
const colsFull = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }));
};
const cols2Equal = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols12 = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "16.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols21 = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "28.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols3Equal = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "28.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "16.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols112 = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "12.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols211 = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "32.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols121 = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "13.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "31.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols131 = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "11.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "33.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols4Equal = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "13.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "32.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols5Equal = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "10.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "34.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "26.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "18.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const colsCollapsed = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "4",
    y: "22.9",
    width: "40",
    height: "2.2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const rowsCollapsed = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "6",
    y: "22.9",
    width: "36",
    height: "2.2"
  })));
};
const cols6Equal = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "10.4",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "35.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "29.4",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "16.4",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols2Grid = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "4",
    y: "18.9",
    width: "40",
    height: "2.2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "4",
    y: "26.9",
    width: "40",
    height: "2.2"
  }));
};
const cols3Grid = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "4",
    y: "22.9",
    width: "40",
    height: "2.2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "28.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
    x: "16.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const alignBottom = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"
}));
const alignCenter = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"
}));
const alignTop = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z"
}));
const popupScratch = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
  x: "1.5",
  y: "8.5",
  width: "45",
  height: "31",
  rx: "0.5",
  stroke: "#ED6F57",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
  x: "42",
  y: "11",
  width: "2",
  height: "2",
  rx: "1",
  fill: "#ED6F57"
}));
const popupWithForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
  x: "1.5",
  y: "8.5",
  width: "45",
  height: "31",
  rx: "0.5",
  stroke: "#ED6F57",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
  x: "42",
  y: "11",
  width: "2",
  height: "2",
  rx: "1",
  fill: "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
  x: "16.5",
  y: "14.5",
  width: "15",
  height: "19",
  rx: "0.5",
  stroke: "#ED6F57",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
  x: "18.5",
  y: "16.5",
  width: "11",
  height: "3",
  rx: "0.5",
  stroke: "#ED6F57",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
  x: "18.5",
  y: "22.5",
  width: "11",
  height: "2",
  rx: "0.5",
  stroke: "#ED6F57",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
  x: "18.5",
  y: "26.5",
  width: "11",
  height: "5",
  rx: "0.5",
  stroke: "#ED6F57",
  fill: "none"
}));
const popupWithImageAndText = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Circle, {
  cx: "37.5",
  cy: "21.5",
  r: "2",
  stroke: "#ED6F57",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M29 28.9V19.2261C29 19.1392 29.103 19.0937 29.1673 19.1521L34.5 24L39.8086 28.826C39.8762 28.8875 39.8327 29 39.7413 29H34.5H29.1C29.0448 29 29 28.9552 29 28.9Z",
  stroke: "#ED6F57",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
  id: "path-3-inside-1_3034_34948",
  fill: "white"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M25 16C25 15.4477 25.4477 15 26 15H42C42.5523 15 43 15.4477 43 16V32C43 32.5523 42.5523 33 42 33H26C25.4477 33 25 32.5523 25 32V16Z"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M24 16C24 14.8954 24.8954 14 26 14H42C43.1046 14 44 14.8954 44 16H42H26H24ZM44 32C44 33.1046 43.1046 34 42 34H26C24.8954 34 24 33.1046 24 32H26H42H44ZM26 34C24.8954 34 24 33.1046 24 32V16C24 14.8954 24.8954 14 26 14V16V32V34ZM42 14C43.1046 14 44 14.8954 44 16V32C44 33.1046 43.1046 34 42 34V32V16V14Z",
  fill: "#ED6F57",
  mask: "url(#path-3-inside-1_3034_34948)"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M5 18H21",
  stroke: "#ED6F57",
  "stroke-linecap": "round",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M5 22H21",
  stroke: "#ED6F57",
  "stroke-linecap": "round",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M5 26H21",
  stroke: "#ED6F57",
  "stroke-linecap": "round",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M5 30H13.8889",
  stroke: "#ED6F57",
  "stroke-linecap": "round",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
  x: "1.5",
  y: "8.5",
  width: "45",
  height: "31",
  rx: "0.5",
  stroke: "#ED6F57",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Rect, {
  x: "42",
  y: "11",
  width: "2",
  height: "2",
  rx: "1",
  fill: "#ED6F57"
}));
const aiGeneration = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  "data-target": "generator-icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  style: {
    color: 'transparent'
  }
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M6 17V21",
  stroke: "url(#paint0_linear_3599_37937)",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M4 19H8",
  stroke: "url(#paint1_linear_3599_37937)",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M17 3V7",
  stroke: "url(#paint2_linear_3599_37937)",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M15 5H19",
  stroke: "url(#paint3_linear_3599_37937)",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M6.5 5C6.5 6.933 8.067 8.5 10 8.5",
  stroke: "url(#paint4_linear_3599_37937)",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M10 8.5C8.067 8.5 6.5 10.067 6.5 12",
  stroke: "url(#paint5_linear_3599_37937)",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M6.5 12C6.5 10.067 4.933 8.5 3 8.5",
  stroke: "url(#paint6_linear_3599_37937)",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M3 8.5C4.933 8.5 6.5 6.933 6.5 5",
  stroke: "url(#paint7_linear_3599_37937)",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M11.609 15.778C14.202 15.778 16.304 13.676 16.304 11.083",
  stroke: "url(#paint8_linear_3599_37937)",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M16.3051 11.083C16.3051 13.676 18.4071 15.778 21.0001 15.778",
  stroke: "url(#paint9_linear_3599_37937)",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M21.0001 15.7781C18.4071 15.7781 16.3051 17.8801 16.3051 20.4731",
  stroke: "url(#paint10_linear_3599_37937)",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M16.305 20.4731C16.305 17.8801 14.203 15.7781 11.61 15.7781",
  stroke: "url(#paint11_linear_3599_37937)",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Defs, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint0_linear_3599_37937",
  x1: "6",
  y1: "17",
  x2: "6",
  y2: "21",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint1_linear_3599_37937",
  x1: "6",
  y1: "18.5",
  x2: "6",
  y2: "19.5",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint2_linear_3599_37937",
  x1: "17",
  y1: "3",
  x2: "17",
  y2: "7",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint3_linear_3599_37937",
  x1: "17",
  y1: "4.5",
  x2: "17",
  y2: "5.5",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint4_linear_3599_37937",
  x1: "8.25",
  y1: "5",
  x2: "8.25",
  y2: "8.5",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint5_linear_3599_37937",
  x1: "8.25",
  y1: "8.5",
  x2: "8.25",
  y2: "12",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint6_linear_3599_37937",
  x1: "4.75",
  y1: "8.5",
  x2: "4.75",
  y2: "12",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint7_linear_3599_37937",
  x1: "4.75",
  y1: "5",
  x2: "4.75",
  y2: "8.5",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint8_linear_3599_37937",
  x1: "13.9565",
  y1: "11.083",
  x2: "13.9565",
  y2: "15.778",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint9_linear_3599_37937",
  x1: "18.6526",
  y1: "11.083",
  x2: "18.6526",
  y2: "15.778",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint10_linear_3599_37937",
  x1: "18.6526",
  y1: "15.7781",
  x2: "18.6526",
  y2: "20.4731",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint11_linear_3599_37937",
  x1: "13.9575",
  y1: "15.7781",
  x2: "13.9575",
  y2: "20.4731",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
}))));
const postGridIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 13.4941C5 13.218 5.22386 12.9941 5.5 12.9941H8.5C8.77614 12.9941 9 13.218 9 13.4941C9 13.7703 8.77614 13.9941 8.5 13.9941H5.5C5.22386 13.9941 5 13.7703 5 13.4941ZM10.5 12.9941C10.2239 12.9941 10 13.218 10 13.4941C10 13.7703 10.2239 13.9941 10.5 13.9941H13.5C13.7761 13.9941 14 13.7703 14 13.4941C14 13.218 13.7761 12.9941 13.5 12.9941H10.5ZM15 13.4941C15 13.218 15.2239 12.9941 15.5 12.9941H18.5C18.7761 12.9941 19 13.218 19 13.4941C19 13.7703 18.7761 13.9941 18.5 13.9941H15.5C15.2239 13.9941 15 13.7703 15 13.4941ZM5.5 17.0128C5.22386 17.0128 5 17.2367 5 17.5128C5 17.789 5.22386 18.0128 5.5 18.0128H8.5C8.77614 18.0128 9 17.789 9 17.5128C9 17.2367 8.77614 17.0128 8.5 17.0128H5.5ZM10 17.5128C10 17.2367 10.2239 17.0128 10.5 17.0128H13.5C13.7761 17.0128 14 17.2367 14 17.5128C14 17.789 13.7761 18.0128 13.5 18.0128H10.5C10.2239 18.0128 10 17.789 10 17.5128ZM15.5 17.0128C15.2239 17.0128 15 17.2367 15 17.5128C15 17.789 15.2239 18.0128 15.5 18.0128H18.5C18.7761 18.0128 19 17.789 19 17.5128C19 17.2367 18.7761 17.0128 18.5 17.0128H15.5ZM5 15.5083C5 15.2322 5.22386 15.0083 5.5 15.0083H8.5C8.77614 15.0083 9 15.2322 9 15.5083C9 15.7845 8.77614 16.0083 8.5 16.0083H5.5C5.22386 16.0083 5 15.7845 5 15.5083ZM10.5 15.0083C10.2239 15.0083 10 15.2322 10 15.5083C10 15.7845 10.2239 16.0083 10.5 16.0083H13.5C13.7761 16.0083 14 15.7845 14 15.5083C14 15.2322 13.7761 15.0083 13.5 15.0083H10.5ZM15 15.5083C15 15.2322 15.2239 15.0083 15.5 15.0083H18.5C18.7761 15.0083 19 15.2322 19 15.5083C19 15.7845 18.7761 16.0083 18.5 16.0083H15.5C15.2239 16.0083 15 15.7845 15 15.5083ZM6 5C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H8C8.55228 11 9 10.5523 9 10V6C9 5.44772 8.55228 5 8 5H6ZM10 6C10 5.44772 10.4477 5 11 5H13C13.5523 5 14 5.44772 14 6V10C14 10.5523 13.5523 11 13 11H11C10.4477 11 10 10.5523 10 10V6ZM16 5C15.4477 5 15 5.44772 15 6V10C15 10.5523 15.4477 11 16 11H18C18.5523 11 19 10.5523 19 10V6C19 5.44772 18.5523 5 18 5H16Z",
  fill: "#E11B4C"
}));
const contentAiGenerationIcon = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  width: "20",
  height: "21",
  viewBox: "0 0 20 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    color: 'transparent'
  },
  ...props
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M17.5044 8.49112V19.9911C17.5044 20.2911 17.3044 20.4911 17.0044 20.4911H3.00439C2.70439 20.4911 2.50439 20.2911 2.50439 19.9911V1.99112C2.50439 1.69112 2.70439 1.49112 3.00439 1.49112H12.8044",
  stroke: "url(#paint0_linear_1006_2437)",
  "stroke-linecap": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M5.50439 4.49112H9.50439",
  stroke: "url(#paint1_linear_1006_2437)",
  "stroke-linecap": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M5.50439 8.49112H13.5044",
  stroke: "url(#paint2_linear_1006_2437)",
  "stroke-linecap": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M5.50439 12.4911H14.5044",
  stroke: "url(#paint3_linear_1006_2437)",
  "stroke-linecap": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M5.50439 16.4911H14.5044",
  stroke: "url(#paint4_linear_1006_2437)",
  "stroke-linecap": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M16.0044 6.99112C16.0044 5.29112 17.3044 3.99112 19.0044 3.99112C17.3044 3.99112 16.0044 2.69112 16.0044 0.991119C16.0044 2.69112 14.7044 3.99112 13.0044 3.99112C13.8044 3.99112 14.6044 4.29112 15.1044 4.89112C15.7044 5.39112 16.0044 6.19112 16.0044 6.99112Z",
  stroke: "url(#paint5_linear_1006_2437)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Defs, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint0_linear_1006_2437",
  x1: "10.0044",
  y1: "1.49112",
  x2: "10.0044",
  y2: "20.4911",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint1_linear_1006_2437",
  x1: "7.50439",
  y1: "4.24112",
  x2: "7.50439",
  y2: "5.74112",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint2_linear_1006_2437",
  x1: "9.50439",
  y1: "8.24112",
  x2: "9.50439",
  y2: "9.74112",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint3_linear_1006_2437",
  x1: "10.0044",
  y1: "12.2411",
  x2: "10.0044",
  y2: "13.7411",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint4_linear_1006_2437",
  x1: "10.0044",
  y1: "16.2411",
  x2: "10.0044",
  y2: "17.7411",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint5_linear_1006_2437",
  x1: "16.0044",
  y1: "0.991119",
  x2: "16.0044",
  y2: "6.99112",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
}))));
const aiLayoutGeneratorIcon = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    color: 'transparent'
  },
  ...props
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M19.5 8V19.5C19.5 19.8 19.3 20 19 20H1C0.7 20 0.5 19.8 0.5 19.5V1.5C0.5 1.2 0.7 1 1 1H12.8",
  stroke: "url(#paint0_linear_1036_1071)",
  "stroke-linecap": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M17 6.5C17 4.8 18.3 3.5 20 3.5C18.3 3.5 17 2.2 17 0.5C17 2.2 15.7 3.5 14 3.5C14.8 3.5 15.6 3.8 16.1 4.4C16.7 4.9 17 5.7 17 6.5Z",
  stroke: "url(#paint1_linear_1036_1071)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M3 3H10C10.3 3 10.5 3.2 10.5 3.5V9.5C10.5 9.8 10.3 10 10 10H3C2.7 10 2.5 9.8 2.5 9.5V3.5C2.5 3.2 2.7 3 3 3Z",
  stroke: "url(#paint2_linear_1036_1071)"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M3 12H10C10.3 12 10.5 12.2 10.5 12.5V17.5C10.5 17.8 10.3 18 10 18H3C2.7 18 2.5 17.8 2.5 17.5V12.5C2.5 12.2 2.7 12 3 12Z",
  stroke: "url(#paint3_linear_1036_1071)"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M13 9H17C17.3 9 17.5 9.2 17.5 9.5V17.5C17.5 17.8 17.3 18 17 18H13C12.7 18 12.5 17.8 12.5 17.5V9.5C12.5 9.2 12.7 9 13 9Z",
  stroke: "url(#paint4_linear_1036_1071)"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Defs, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint0_linear_1036_1071",
  x1: "10",
  y1: "0.99",
  x2: "10",
  y2: "19.99",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint1_linear_1036_1071",
  x1: "17",
  y1: "0.49",
  x2: "17",
  y2: "6.49",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint2_linear_1036_1071",
  x1: "6.5",
  y1: "2.5",
  x2: "6.5",
  y2: "10.5",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint3_linear_1036_1071",
  x1: "6.5",
  y1: "11.5",
  x2: "6.5",
  y2: "18.5",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint4_linear_1036_1071",
  x1: "15",
  y1: "8.5",
  x2: "15",
  y2: "18.5",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
}))));
const comparisonTableIcon = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.G, {
  "clip-path": "url(#clip0_1028_2592)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20 3H4C3.45 3 3 3.45 3 4V19C3 19.55 3.45 20 4 20H11.502C12.052 20 12.502 19.55 12.502 19V12H20C20.55 12 21 11.55 21 11V4C21 3.45 20.55 3 20 3ZM11.502 19H4V12H11.502V19ZM4 4H20V11H12.502V3.82L11.502 3.64V11H4V4Z",
  fill: "url(#paint0_linear_1028_2592)"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16.8007 12.7084C16.8822 12.5432 17.1178 12.5432 17.1993 12.7084L18.1239 14.5818C18.1562 14.6474 18.2188 14.6929 18.2912 14.7034L20.3586 15.0038C20.5409 15.0303 20.6137 15.2543 20.4818 15.3829L18.9858 16.8411C18.9334 16.8922 18.9095 16.9657 18.9219 17.0378L19.275 19.0969C19.3062 19.2785 19.1156 19.4169 18.9526 19.3312L17.1034 18.359C17.0387 18.325 16.9613 18.325 16.8966 18.359L15.0474 19.3312C14.8844 19.4169 14.6938 19.2785 14.725 19.0969L15.0781 17.0378C15.0905 16.9657 15.0666 16.8922 15.0142 16.8411L13.5182 15.3829C13.3863 15.2543 13.4591 15.0303 13.6414 15.0038L15.7088 14.7034C15.7812 14.6929 15.8438 14.6474 15.8761 14.5818L16.8007 12.7084Z",
  fill: "url(#paint1_linear_1028_2592)"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Defs, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint0_linear_1028_2592",
  x1: "12",
  y1: "3",
  x2: "12",
  y2: "20",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.LinearGradient, {
  id: "paint1_linear_1028_2592",
  x1: "17",
  y1: "12.3046",
  x2: "17",
  y2: "19.5407",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#ED6F57"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#F22B6C"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_1028_2592"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "18",
  height: "17",
  fill: "white",
  transform: "translate(3 3)"
}))));
const videoPlayerIcon = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M6.15 3h-.029c-.395 0-.736 0-1.017.023-.297.024-.592.078-.875.222a2.25 2.25 0 0 0-.984.984c-.144.283-.198.578-.222.875C3 5.384 3 5.726 3 6.12V17.88c0 .395 0 .736.023 1.017.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.28.023.622.023 1.017.023H17.88c.395 0 .736 0 1.017-.023.297-.024.592-.078.875-.222a2.25 2.25 0 0 0 .984-.983c.144-.284.198-.58.222-.876.023-.28.023-.622.023-1.017V6.12c0-.395 0-.736-.023-1.017-.024-.297-.078-.592-.222-.875a2.25 2.25 0 0 0-.983-.984c-.284-.144-.58-.198-.876-.222C18.616 3 18.274 3 17.88 3H6.15M4.91 4.582c.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018h11.7c.432 0 .712 0 .924.018.204.017.28.045.316.064a.75.75 0 0 1 .328.328c.02.037.047.112.064.316.017.212.018.492.018.924v11.7c0 .432 0 .712-.018.924-.017.204-.045.28-.064.316a.75.75 0 0 1-.328.328c-.037.02-.112.047-.316.064-.212.017-.492.018-.924.018H6.15c-.432 0-.712 0-.924-.018-.204-.017-.28-.045-.316-.064a.75.75 0 0 1-.328-.328c-.02-.037-.047-.112-.064-.316a13 13 0 0 1-.018-.924V6.15c0-.432 0-.712.018-.924.017-.204.045-.28.064-.316a.75.75 0 0 1 .328-.328M15 12l-5-3v6z",
  clipRule: "evenodd"
}));
const buttonsIcon = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M7.75 3.5h-.028c-.326 0-.615 0-.854.02-.255.02-.519.067-.776.198a2 2 0 0 0-.874.874 2 2 0 0 0-.198.776c-.02.24-.02.528-.02.854v2.056c0 .326 0 .615.02.854.02.255.067.519.198.776a2 2 0 0 0 .874.874c.257.131.521.178.776.198.24.02.528.02.854.02h8.556c.326 0 .615 0 .854-.02.255-.02.519-.067.776-.198a2 2 0 0 0 .874-.874c.131-.257.178-.521.198-.776.02-.24.02-.528.02-.854V6.222c0-.326 0-.615-.02-.854a2 2 0 0 0-.198-.776 2 2 0 0 0-.874-.874 2 2 0 0 0-.776-.198c-.24-.02-.528-.02-.854-.02H7.75m-.977 1.555c.01-.006.055-.027.217-.04C7.16 5 7.388 5 7.75 5h8.5c.362 0 .59 0 .76.015.162.013.207.034.217.04a.5.5 0 0 1 .218.218c.006.01.027.055.04.217.014.17.015.398.015.76v2c0 .362 0 .59-.015.76-.013.162-.034.207-.04.217a.5.5 0 0 1-.218.219c-.01.005-.055.026-.217.04-.17.013-.398.014-.76.014h-8.5c-.362 0-.59 0-.76-.015-.162-.013-.207-.034-.217-.04a.5.5 0 0 1-.218-.218c-.006-.01-.027-.055-.04-.217-.014-.17-.015-.398-.015-.76v-2c0-.362 0-.59.015-.76.013-.162.034-.207.04-.217a.5.5 0 0 1 .218-.218M10.25 6.5H9.5V8h5V6.5h-4.25M7.722 13h8.556c.326 0 .615 0 .854.02.255.02.519.067.776.198a2 2 0 0 1 .874.874c.131.257.178.521.198.776.02.24.02.528.02.854v2.056c0 .326 0 .615-.02.854-.02.255-.067.519-.198.776a2 2 0 0 1-.874.874 2 2 0 0 1-.776.198c-.24.02-.528.02-.854.02H7.722c-.326 0-.615 0-.854-.02a2 2 0 0 1-.776-.198 2 2 0 0 1-.874-.874 2 2 0 0 1-.198-.776c-.02-.24-.02-.528-.02-.854v-2.056c0-.326 0-.615.02-.854.02-.255.067-.519.198-.776a2 2 0 0 1 .874-.874c.257-.131.521-.178.776-.198.24-.02.528-.02.854-.02m-.732 1.515c-.162.013-.207.034-.217.04a.5.5 0 0 0-.218.218c-.006.01-.027.055-.04.217-.014.17-.015.398-.015.76v2c0 .362 0 .59.015.76.013.162.034.207.04.217a.5.5 0 0 0 .218.218c.01.006.055.027.217.04.17.014.398.015.76.015h8.5c.362 0 .59 0 .76-.015.162-.013.207-.034.217-.04a.5.5 0 0 0 .218-.218c.006-.01.027-.055.04-.217.014-.17.015-.398.015-.76v-2c0-.362 0-.59-.015-.76-.013-.162-.034-.207-.04-.217a.5.5 0 0 0-.218-.218c-.01-.006-.055-.027-.217-.04-.17-.014-.398-.015-.76-.015h-8.5c-.362 0-.59 0-.76.014M10.25 16H9.5v1.5h5V16h-4.25",
  clipRule: "evenodd"
}));
const imageComparison = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12 2.75V2h-1.5v2H4.25A2.25 2.25 0 0 0 2 6.25v11.5A2.25 2.25 0 0 0 4.25 20h6.25v2H12V2.75M10.5 5.5H4.25a.75.75 0 0 0-.75.75v8.44l2.97-2.97.53-.53.53.53 2.97 2.97zm0 11.309-.03-.029L7 13.31l-3.47 3.47-.03.029v.941c0 .414.336.75.75.75h6.25zM14 4h4.75A2.25 2.25 0 0 1 21 6.25v11.5A2.25 2.25 0 0 1 18.75 20H14v-1.5h4.75a.75.75 0 0 0 .75-.75v-5.94l-1.75-1.75-3.47 3.47-.28.28v-2.12l3.22-3.22.53-.53.53.53 1.22 1.22V6.25a.75.75 0 0 0-.75-.75H14z",
  clipRule: "evenodd"
}));
const alertboxIcon = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M11.311 5.615a.5.5 0 0 1 .878 0L18.83 17.76a.5.5 0 0 1-.438.74H5.108a.5.5 0 0 1-.438-.74zm2.194-.72c-.759-1.387-2.751-1.387-3.51 0L3.354 17.04c-.73 1.333.235 2.96 1.754 2.96h13.284c1.519 0 2.483-1.627 1.754-2.96zM12.5 9.747v-.75H11v4.996h1.5V9.746m0 6.471v-.75H11v1.547h1.5v-.797",
  clipRule: "evenodd"
}));
const containerIcon = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M18.5 5.5V8H20V5.5H22.5V4H20V1.5H18.5V4H16V5.5H18.5ZM13.9624 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10.0391H18.5V18C18.5 18.2761 18.2761 18.5 18 18.5H10L10 10.4917L16.4589 10.5139L16.4641 9.01389L5.5 8.97618V6C5.5 5.72386 5.72386 5.5 6 5.5H13.9624V4ZM5.5 10.4762V18C5.5 18.2761 5.72386 18.5 6 18.5H8.5L8.5 10.4865L5.5 10.4762Z"
}));
const gridIcons = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
const postCarouseIcon = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M9.621 3.5h4.758c.395 0 .736 0 1.017.023.297.024.592.078.875.222.424.216.768.56.984.984.128.25.184.51.212.771h.783a2.25 2.25 0 0 1 2.25 2.25v8.5a2.25 2.25 0 0 1-2.25 2.25h-.783c-.028.262-.084.52-.212.771-.216.424-.56.768-.983.984-.284.144-.58.198-.876.222-.28.023-.622.023-1.017.023H9.62c-.395 0-.736 0-1.017-.023-.297-.024-.592-.078-.875-.222a2.25 2.25 0 0 1-.984-.983 2.2 2.2 0 0 1-.212-.772H5.75a2.25 2.25 0 0 1-2.25-2.25v-8.5A2.25 2.25 0 0 1 5.75 5.5h.783c.028-.261.085-.52.212-.771a2.25 2.25 0 0 1 .984-.984c.283-.144.578-.198.875-.222.28-.023.622-.023 1.017-.023M8 6.65v10.7c0 .432 0 .712.018.924.017.204.045.28.064.316a.75.75 0 0 0 .328.328c.037.02.112.047.316.064.212.017.492.018.924.018h4.7c.432 0 .712 0 .924-.018.204-.017.28-.045.317-.064a.75.75 0 0 0 .327-.328c.02-.037.047-.112.064-.316.017-.212.018-.492.018-.924V6.65c0-.432 0-.712-.018-.924-.017-.204-.045-.28-.064-.316a.75.75 0 0 0-.327-.328c-.038-.02-.113-.047-.317-.064A13 13 0 0 0 14.35 5h-4.7c-.432 0-.712 0-.924.018-.204.017-.28.045-.316.064a.75.75 0 0 0-.328.328c-.02.037-.047.112-.064.316-.017.212-.018.492-.018.924M6.5 17V7h-.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75zm11-10v10h.75a.75.75 0 0 0 .75-.75v-8.5a.75.75 0 0 0-.75-.75z",
  clipRule: "evenodd"
}));
const shapeDividerIcon = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M21 10.998V5.25A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25v2.753h1.5V5.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v5.748zM3 12.005v6.745A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75v-3.753h-1.5V15l-.015.01c-.21.126-.506.294-.843.46-.71.35-1.47.625-2.006.614-.667-.013-1.09-.256-1.438-.634-.383-.418-.673-.998-1.013-1.719l-.079-.168c-.613-1.307-1.438-3.065-3.549-3.408-1.531-.25-3.282.16-4.578.583a19 19 0 0 0-2.258.902l-.036.017-.01.005-.003.002H3.67l.17.34-.17-.34-.671.337.001.003zm1.5.926v5.819c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.032q-.095.049-.194.098c-.727.36-1.771.788-2.7.77-1.113-.023-1.915-.468-2.513-1.121-.563-.614-.94-1.407-1.264-2.092-.704-1.49-1.214-2.526-2.513-2.737-1.16-.188-2.625.122-3.871.529a18 18 0 0 0-1.945.766",
  clipRule: "evenodd"
}));
const postListIcon = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M19 1.2H4.9c-2 0-3.6 1.5-3.6 3.4v14.8c0 1.8 1.6 3.4 3.6 3.4h14.2c2 0 3.7-1.6 3.7-3.5V4.6c0-1.8-1.7-3.4-3.8-3.4zm2.2 18c0 1.1-.9 2-2.2 2H4.9c-1.2 0-2.1-.8-2.1-1.9V7.2H20c.4 0 .8-.3.8-.8s-.3-.8-.8-.8H2.8v-1c0-1 1-1.9 2.1-1.9H19c1.2 0 2.2.8 2.2 1.9v14.6zM8.3 8.4H5.6c-.7 0-1.2.6-1.2 1.3v2.7c0 .7.5 1.2 1.2 1.2h2.8c.6 0 1.1-.6 1.1-1.2V9.7c0-.7-.5-1.3-1.2-1.3zM8 12.1H5.9V9.9H8v2.2zm.3 2.5H5.6c-.7 0-1.2.5-1.2 1.2v2.7c0 .7.5 1.2 1.2 1.2h2.8c.6 0 1.1-.6 1.1-1.2v-2.7c0-.6-.5-1.2-1.2-1.2zM8 18.3H5.9v-2.2H8v2.2zm9.1-7.9h-5.6c-.4 0-.8.3-.8.8s.3.8.8.8h5.6c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zm0 6.1h-5.6c-.4 0-.8.3-.8.8s.3.8.8.8h5.6c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z"
}));
const newsletterIcon = (props = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  d: "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
}));

/***/ }),

/***/ "./src/utils/useSettings.js":
/*!**********************************!*\
  !*** ./src/utils/useSettings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies.
 */




let updatedSettings = {};
const useSettings = () => {
  const {
    createNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)("core/notices");
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("loading");
  const [settings, setSettings] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)({});
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getEntityRecord
    } = select("core");

    // Bail out if settings are already loaded.
    if (Object.keys(settings).length) {
      return;
    }
    const request = getEntityRecord("root", "site");
    if (request) {
      setStatus("loaded");
      setSettings(request);
    }
  }, [settings]);

  /**
   * Get the value of the given option.
   *
   * @param {string} option Option name.
   * @returns {any} Option value.
   */
  const getOption = option => {
    return updatedSettings?.[option] || settings?.[option];
  };

  /**
   * Set the value of the given option. Also set the message to be displayed on success Notice.
   *
   * @param {string} option Option name.
   * @param {any} value Option value.
   * @param {string?} success Success message for Notice.
   * @param {string?} noticeId Notice ID.
   * @param {function?} onSuccess Callback function to be executed on success.
   * @param {function?} onError Callback function to be executed on error.
   */
  const updateOption = (option, value, success = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Settings saved.", "ultrablocks"), noticeId = undefined, onSuccess = () => {}, onError = () => {}) => {
    setStatus("saving");
    const data = {
      [option]: value
    };
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: "/wp/v2/settings",
      method: "POST",
      data
    }).then(response => {
      updatedSettings = response;
      setStatus("loaded");
      onSuccess();
      createNotice("success", success, {
        isDismissible: true,
        type: "snackbar",
        id: 'ultrablocks-settings-saved'
      });
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)("core/notices").createSuccessNotice(success, {
        id: noticeId
      });
    }).catch(error => {
      setStatus("error");
      onError();
      // dispatch("core/notices").createErrorNotice(error.message, {
      //   id: noticeId,
      // });
    });
    return;
  };
  return [getOption, updateOption, status];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSettings);

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/index */ "./src/index.js");
/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/scss/style.scss */ "./src/scss/style.scss");
// noinspection JSUnusedGlobalSymbols



window.addEventListener('load', function () {
  var data = document.querySelector('.ultrablocks-admin-page');
  if (data) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(data).render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_index__WEBPACK_IMPORTED_MODULE_1__["default"]));
  }
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "../../node_modules/classnames/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/classnames/index.js ***!
  \**********************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"ultrablocks": 0,
/******/ 			"./style-ultrablocks": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkultrablocks_ultrablocks_admin_"] = self["webpackChunkultrablocks_ultrablocks_admin_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-ultrablocks"], () => (__webpack_require__("./index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	(ultrablocks = typeof ultrablocks === "undefined" ? {} : ultrablocks)["[ultrablocks-admin]"] = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=ultrablocks-admin.js.map