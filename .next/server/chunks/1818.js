"use strict";
exports.id = 1818;
exports.ids = [1818];
exports.modules = {

/***/ 7231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils_animationCharCome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9899);




const ServiceDetailsDevelopment = ({ service , images  })=>{
    const charAnim = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    // Default images if none provided
    const defaultImages = [
        "/assets/imgs/thumb/dev-1.jpg",
        "/assets/imgs/thumb/dev-2.jpg",
        "/assets/imgs/thumb/dev-3.jpg"
    ];
    const developmentImages = images || defaultImages;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_lib_utils_animationCharCome__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(charAnim.current);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "development__area",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container g-0 line pt-100 pb-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "line-3"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xxl-5 col-xl-5 col-lg-5 col-md-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sec-title-wrapper",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "sec-title animation__char_come",
                                        ref: charAnim,
                                        children: service?.development?.title || "Service Title"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xxl-7 col-xl-7 col-lg-7 col-md-7",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "development__wrapper",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "development__content",
                                            children: service?.development?.description?.map((paragraph, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: paragraph
                                                }, index)) || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Service description coming soon."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            children: service?.development?.features?.map((feature, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        "+ ",
                                                        feature
                                                    ]
                                                }, index)) || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "No features listed"
                                            })
                                        })
                                    ]
                                })
                            }),
                            developmentImages.map((image, index)=>{
                                // Define column classes based on index
                                let colClass = "col-xxl-3 col-xl-3 col-lg-3 col-md-3";
                                if (index === 1) {
                                    colClass = "col-xxl-6 col-xl-6 col-lg-6 col-md-6";
                                }
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: colClass,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "development__img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            priority: true,
                                            width: 500,
                                            height: 300,
                                            src: image,
                                            alt: `Development Image ${index + 1}`,
                                            "data-speed": index === 1 ? "auto" : null
                                        })
                                    })
                                }, index);
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceDetailsDevelopment);


/***/ }),

/***/ 816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ service_ServiceDetailsService)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./public/assets/imgs/icon/shape-6.png
/* harmony default export */ const shape_6 = ({"src":"/_next/static/media/shape-6.25ba27c2.png","height":51,"width":51,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVVZAZBTROiwxqiwxoeIw+WthpwhBlkchprghadvhrQ+x7O+R5oV1USAAAACnRSTlMBML3HIORkJma6vHV5awAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJwli8kRADAIAtcjh6b/fjMqHxYGoHXPuK8NiIBX1OhW9L2QAsu0AjCdR4/hAxGJAHY9yTwaAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/imgs/thumb/strategy-branding-service-banner.jpg
/* harmony default export */ const strategy_branding_service_banner = ({"src":"/_next/static/media/strategy-branding-service-banner.2bef5d07.jpg","height":4000,"width":6000,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAeEAABBAMAAwAAAAAAAAAAAAABAAIDBAUREgZBYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCflOVyklerBHfkijuPfK5gA5DQByzXto3v6UREH//Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/components/service/ServiceDetailsService.jsx



// Default service detail image if none provided

const ServiceDetailsService = ({ service  })=>{
    // Use the provided image or default to the strategy branding image
    const serviceDetailImage = service?.serviceSection?.image || strategy_branding_service_banner;
    const imageAlt = service?.serviceSection?.imageAlt || "Service detail image";
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "service__detail",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container g-0 line pb-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "line-3"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xxl-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "sec-title-wrapper",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "sec-title title-anim",
                                        children: service?.serviceSection?.title || "We replace unreliable wireframes and expensive agencies for one of the best organized layers."
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xxl-3 col-xl-3 col-lg-3 col-md-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "service__detail-circle",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-xxl-9 col-xl-9 col-lg-9 col-md-9",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "service__detail-img",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                priority: true,
                                                width: 960,
                                                height: 540,
                                                src: serviceDetailImage,
                                                alt: imageAlt,
                                                style: {
                                                    height: "auto"
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                priority: true,
                                                width: 51,
                                                height: 51,
                                                src: shape_6,
                                                alt: "Service shape image",
                                                className: "sd-shape",
                                                style: {
                                                    height: "auto"
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "service__detail-content",
                                        children: service?.serviceSection?.description?.map((paragraph, index)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: paragraph
                                            }, index)) || /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Receive your design within a few business days, and be updated on the process. Everything you need for a digitally driven brand. Defined proposition. Conceptual realisation. Logo, type, look, feel, tone, movement, content - we've got it covered."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Getting your brand message out there. We create dynamic campaign creative that engages audiences, wherever they are most talented. Bring your brand to life, communicate your value proposition with agile setup across creativity."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const service_ServiceDetailsService = (ServiceDetailsService);


/***/ }),

/***/ 8819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ServiceDetailsWorkflow = ({ service  })=>{
    const steps = service?.workflow?.steps || [];
    const getColumnClass = ()=>{
        switch(steps.length){
            case 6:
                return "col-xxl-2 col-xl-2 col-lg-2 col-md-2";
            case 4:
                return "col-xxl-3 col-xl-3 col-lg-3 col-md-3";
            case 3:
                return "col-xxl-4 col-xl-4 col-lg-4 col-md-4";
            case 2:
                return "col-xxl-6 col-xl-6 col-lg-6 col-md-6";
            case 1:
                return "col-xxl-12 col-xl-12 col-lg-12 col-md-12";
            default:
                // Default to 3 columns if not 1-4 or 6
                return "col-xxl-4 col-xl-4 col-lg-4 col-md-4";
        }
    };
    const columnClass = getColumnClass();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "workflow__area-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container g-0 line pb-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "line-3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "workflow__wrapper-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: steps.map((step, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: columnClass,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "workflow__slide-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "workflow__title-6",
                                                children: step.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: step.description
                                            }),
                                            step.features && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "feature-list",
                                                children: step.features.map((feature, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "feature-item",
                                                        children: feature
                                                    }, i))
                                            })
                                        ]
                                    })
                                }, index))
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceDetailsWorkflow);


/***/ })

};
;