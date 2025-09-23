"use strict";
exports.id = 8299;
exports.ids = [8299];
exports.modules = {

/***/ 8299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils_animationCharCome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9899);





const ServiceDetailsAlternatingLayout = ({ service  })=>{
    const charAnim = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    // Use sections from service prop or default data
    const sections = service?.alternatingSections || [
        {
            id: 1,
            title: "Identit\xe9 visuelle",
            content: "Logo, palette de couleurs, typographies, iconographie & motifs",
            imageUrl: "/assets/imgs/thumb/dev-1.jpg"
        },
        {
            id: 2,
            title: "Design print",
            content: "Flyers, brochures, pr\xe9sentations, pitch decks, roll-up, templates",
            imageUrl: "/assets/imgs/thumb/design-print.jpg"
        }
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Initialize animations if needed
        if (charAnim.current) {
            (0,_lib_utils_animationCharCome__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(charAnim.current);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "jsx-254f778aa3e04f34" + " " + "development__area",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-254f778aa3e04f34" + " " + "col-xxl-12 col-xl-12 col-lg-12 col-md-12 mb-5",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            ref: charAnim,
                            className: "jsx-254f778aa3e04f34" + " " + "sec-title animation__char_come text-center",
                            children: [
                                " ",
                                "Nos services web"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-254f778aa3e04f34" + " " + "container g-0 line pb-100",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-254f778aa3e04f34" + " " + "line-3"
                            }),
                            sections.map((section, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-254f778aa3e04f34" + " " + "row align-items-center mb-140",
                                    children: [
                                        index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-254f778aa3e04f34" + " " + "col-xxl-6 col-xl-6 col-lg-6 col-md-6 px-5",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-254f778aa3e04f34" + " " + "development__img",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            priority: true,
                                                            width: 600,
                                                            height: 400,
                                                            src: section.imageUrl,
                                                            alt: section.title,
                                                            style: {
                                                                width: "100%",
                                                                height: "100% !important"
                                                            }
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-254f778aa3e04f34" + " " + "col-xxl-6 col-xl-6 col-lg-6 col-md-6 px-5",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-254f778aa3e04f34" + " " + "sec-title-wrapper",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                ref: index === 0 ? charAnim : null,
                                                                className: "jsx-254f778aa3e04f34" + " " + "sec-title animation__char_come fs-1",
                                                                children: section.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-254f778aa3e04f34" + " " + "development__content mt-3 border-0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "jsx-254f778aa3e04f34",
                                                                    children: section.content
                                                                }),
                                                                section.features && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                    className: "jsx-254f778aa3e04f34" + " " + "feature-list",
                                                                    children: section.features.map((feature, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            className: "jsx-254f778aa3e04f34" + " " + "feature-item",
                                                                            children: feature
                                                                        }, i))
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : /* Even sections: content on left, image on right */ /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-254f778aa3e04f34" + " " + "col-xxl-6 col-xl-6 col-lg-6 col-md-6 px-5",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-254f778aa3e04f34" + " " + "sec-title-wrapper",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                ref: index === 0 ? charAnim : null,
                                                                className: "jsx-254f778aa3e04f34" + " " + "sec-title fs-1",
                                                                children: section.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-254f778aa3e04f34" + " " + "development__content mt-3 border-0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "jsx-254f778aa3e04f34",
                                                                    children: section.content
                                                                }),
                                                                section.features && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                    className: "jsx-254f778aa3e04f34" + " " + "feature-list",
                                                                    children: section.features.map((feature, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            className: "jsx-254f778aa3e04f34" + " " + "feature-item",
                                                                            children: feature
                                                                        }, i))
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-254f778aa3e04f34" + " " + "col-xxl-6 col-xl-6 col-lg-6 col-md-6 px-5",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-254f778aa3e04f34" + " " + "development__img",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            priority: true,
                                                            width: 600,
                                                            height: 600,
                                                            src: section.imageUrl,
                                                            alt: section.title,
                                                            style: {
                                                                width: "100%",
                                                                height: "100% !important"
                                                            }
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        index < sections.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-254f778aa3e04f34" + " " + "col-xxl-12",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                style: {
                                                    border: "none",
                                                    height: "1px",
                                                    background: "linear-gradient(to right, transparent, #ddd, transparent)",
                                                    margin: "80px 0"
                                                },
                                                className: "jsx-254f778aa3e04f34" + " " + "section-divider"
                                            })
                                        })
                                    ]
                                }, section.id))
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "254f778aa3e04f34",
                children: ".feature-list.jsx-254f778aa3e04f34{list-style:disc;padding-left:2rem}.feature-item.jsx-254f778aa3e04f34{list-style:disc;margin:12px 0;font-size:16px;color:#999}.feature-item.jsx-254f778aa3e04f34 i.jsx-254f778aa3e04f34{color:#10c186;margin-right:10px;font-size:14px}.development__img.jsx-254f778aa3e04f34{overflow:hidden;-webkit-box-shadow:0 20px 40px rgba(0,0,0,.1);-moz-box-shadow:0 20px 40px rgba(0,0,0,.1);box-shadow:0 20px 40px rgba(0,0,0,.1);-webkit-transition:-webkit-transform.3s ease;-moz-transition:-moz-transform.3s ease;-o-transition:-o-transform.3s ease;transition:-webkit-transform.3s ease;transition:-moz-transform.3s ease;transition:-o-transform.3s ease;transition:transform.3s ease}.development__img.jsx-254f778aa3e04f34:hover{-webkit-transform:translatey(-5px);-moz-transform:translatey(-5px);-ms-transform:translatey(-5px);-o-transform:translatey(-5px);transform:translatey(-5px)}.section-divider.jsx-254f778aa3e04f34{border:none;height:1px;background:-webkit-linear-gradient(left,transparent,#ddd,transparent);background:-moz-linear-gradient(left,transparent,#ddd,transparent);background:-o-linear-gradient(left,transparent,#ddd,transparent);background:linear-gradient(to right,transparent,#ddd,transparent);margin:80px 0}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceDetailsAlternatingLayout);


/***/ })

};
;