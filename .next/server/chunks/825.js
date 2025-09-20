"use strict";
exports.id = 825;
exports.ids = [825];
exports.modules = {

/***/ 825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_animationCharCome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9899);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const ServiceElementV5 = ({ services , sectionTitle , sectionDescription  })=>{
    const charAnim = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    // Default services if none provided
    const serviceItems = services || [
        {
            id: 1,
            title: "Newsletters",
            description: "Outils avanc\xe9s pour g\xe9rer et ex\xe9cuter des campagnes email efficaces",
            link: "#"
        },
        {
            id: 2,
            title: "Prise de RDV",
            description: "Int\xe9gration avec Calendly pour la planification automatique",
            link: "#"
        },
        {
            id: 3,
            title: "Tracking visiteurs",
            description: "Suivi comportement utilisateurs avec donn\xe9es pr\xe9cises et insights",
            link: "#"
        },
        {
            id: 4,
            title: "Paiements",
            description: "Int\xe9gration Stripe et PayPal pour des transactions fluides et s\xe9curis\xe9es",
            link: "#"
        },
        {
            id: 5,
            title: "R\xe9seaux sociaux",
            description: "Affichage automatique de vos derniers posts LinkedIn et Instagram",
            link: "#"
        },
        {
            id: 6,
            title: "Formulaires",
            description: "Formulaires automatis\xe9s pour une prise de contact et suivi fluide",
            link: "#"
        }
    ];
    // Default section title and description
    const title = sectionTitle || "Possibilit\xe9s d'int\xe9gration";
    const description = sectionDescription || "";
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        (0,_lib_utils_animationCharCome__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(charAnim.current);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-538105c7ebec0330",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "jsx-538105c7ebec0330" + " " + "portfolio__service service-v5 pt-100 pb-100",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-538105c7ebec0330" + " " + "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-538105c7ebec0330" + " " + "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-538105c7ebec0330" + " " + "col-xxl-12 col-xl-12 col-lg-12 col-md-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        ref: charAnim,
                                        className: "jsx-538105c7ebec0330" + " " + "sec-title animation__char_come text-center",
                                        children: title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-538105c7ebec0330" + " " + "col-xxl-12 col-xl-12 col-lg-12 col-md-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-538105c7ebec0330" + " " + "sec-text text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-538105c7ebec0330",
                                            children: description
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-538105c7ebec0330" + " " + "portfolio__service-list",
                            children: serviceItems.length === 4 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-538105c7ebec0330" + " " + "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-538105c7ebec0330" + " " + "col-xxl-4 col-xl-4 col-lg-4 col-md-4 offset-xxl-2 offset-xl-2 offset-lg-2 offset-md-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-538105c7ebec0330" + " " + "portfolio__service-item",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: serviceItems[0].link,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-538105c7ebec0330" + " " + "ps-title",
                                                        children: serviceItems[0].title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-538105c7ebec0330",
                                                        children: serviceItems[0].description
                                                    }),
                                                    serviceItems[0].features && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "jsx-538105c7ebec0330" + " " + "feature-list",
                                                        children: serviceItems[0].features.map((feature, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "jsx-538105c7ebec0330" + " " + "feature-item",
                                                                children: feature
                                                            }, i))
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-538105c7ebec0330" + " " + "col-xxl-4 col-xl-4 col-lg-4 col-md-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-538105c7ebec0330" + " " + "portfolio__service-item",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: serviceItems[1].link,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-538105c7ebec0330" + " " + "ps-title",
                                                        children: serviceItems[1].title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-538105c7ebec0330",
                                                        children: serviceItems[1].description
                                                    }),
                                                    serviceItems[1].features && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "jsx-538105c7ebec0330" + " " + "feature-list",
                                                        children: serviceItems[1].features.map((feature, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "jsx-538105c7ebec0330" + " " + "feature-item",
                                                                children: feature
                                                            }, i))
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-538105c7ebec0330" + " " + "col-xxl-4 col-xl-4 col-lg-4 col-md-4 offset-xxl-2 offset-xl-2 offset-lg-2 offset-md-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-538105c7ebec0330" + " " + "portfolio__service-item h-100",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: serviceItems[2].link,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-538105c7ebec0330" + " " + "ps-title",
                                                        children: serviceItems[2].title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-538105c7ebec0330",
                                                        children: serviceItems[2].description
                                                    }),
                                                    serviceItems[2].features && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "jsx-538105c7ebec0330" + " " + "feature-list",
                                                        children: serviceItems[2].features.map((feature, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "jsx-538105c7ebec0330" + " " + "feature-item",
                                                                children: feature
                                                            }, i))
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-538105c7ebec0330" + " " + "col-xxl-4 col-xl-4 col-lg-4 col-md-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-538105c7ebec0330" + " " + "portfolio__service-item h-100",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: serviceItems[3].link,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-538105c7ebec0330" + " " + "ps-title",
                                                        children: serviceItems[3].title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-538105c7ebec0330",
                                                        children: serviceItems[3].description
                                                    }),
                                                    serviceItems[3].features && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "jsx-538105c7ebec0330" + " " + "feature-list",
                                                        children: serviceItems[3].features.map((feature, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "jsx-538105c7ebec0330" + " " + "feature-item",
                                                                children: feature
                                                            }, i))
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }) : /* Default layout for other numbers of items */ /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-538105c7ebec0330" + " " + "row",
                                children: serviceItems.map((service)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-538105c7ebec0330" + " " + ((serviceItems.length === 1 ? "col-xxl-12 col-xl-12 col-lg-12 col-md-12" : serviceItems.length === 2 ? "col-xxl-6 col-xl-6 col-lg-6 col-md-6" : serviceItems.length === 3 ? "col-xxl-4 col-xl-4 col-lg-4 col-md-4" : "col-xxl-4 col-xl-4 col-lg-4 col-md-4" // For 5+ items
                                        ) || ""),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-538105c7ebec0330" + " " + "portfolio__service-item",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: service.link,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-538105c7ebec0330" + " " + "ps-title",
                                                        children: service.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-538105c7ebec0330",
                                                        children: service.description
                                                    }),
                                                    service.features && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "jsx-538105c7ebec0330" + " " + "feature-list",
                                                        children: service.features.map((feature, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "jsx-538105c7ebec0330" + " " + "feature-item",
                                                                children: feature
                                                            }, i))
                                                    })
                                                ]
                                            })
                                        })
                                    }, service.id))
                            })
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "538105c7ebec0330",
                children: ".feature-list.jsx-538105c7ebec0330{list-style:disc;padding-left:2rem}.feature-item.jsx-538105c7ebec0330{list-style:disc;margin:6px 0;font-size:16px;color:#999}.feature-item.jsx-538105c7ebec0330 i.jsx-538105c7ebec0330{color:#10c186;margin-right:10px;font-size:14px}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceElementV5);


/***/ }),

/***/ 9899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7960);


const animationCharCome = (charAnim, staggerTime = 0.05)=>{
    if (false) {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animationCharCome);


/***/ })

};
;