"use strict";
exports.id = 6974;
exports.ids = [6974];
exports.modules = {

/***/ 6974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ service_ServiceElementV2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
// EXTERNAL MODULE: ./src/plugins/index.js
var plugins = __webpack_require__(7960);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/assets/imgs/service/1/1.jpg
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.60ceaf8d.jpg","height":380,"width":280,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAACAwEAAAAAAAAAAAAAAAAAEgERMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ar4ZptV5WgAD/2Q==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/imgs/service/1/2.png
/* harmony default export */ const _2 = ({"src":"/_next/static/media/2.f3c54456.png","height":380,"width":280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEW9vb2xsbGkpKSlpaWcon7eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGNgwAoYmZgYQRQzM4jCAgABuQAPb+v1wwAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/imgs/service/1/3.png
/* harmony default export */ const _3 = ({"src":"/_next/static/media/3.f64ca43c.png","height":380,"width":280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEW9vb2xsbGkpKSlpaWcon7eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGNgwAoYmZgYQRQzM4jCAgABuQAPb+v1wwAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/imgs/service/1/4.png
/* harmony default export */ const _4 = ({"src":"/_next/static/media/4.cec624f0.png","height":380,"width":280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEW9vb2xsbGkpKSlpaWcon7eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGNgwAoYmZgYQRQzM4jCAgABuQAPb+v1wwAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/service/ServiceElementV2.jsx










external_gsap_.gsap.registerPlugin(plugins/* ScrollTrigger */.ic);
const ServiceElementV2 = ()=>{
    const [activeList, setActiveList] = (0,external_react_.useState)(1);
    const [activeImg, setActiveImg] = (0,external_react_.useState)(1);
    const [activeShape, setActiveShape] = (0,external_react_.useState)(1);
    const serviceList = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "service__area service-v2 pt-110 pb-150",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xxl-4 col-xl-4 col-lg-4 col-md-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sec-title-wrapper wrap",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "sec-sub-title title-anim",
                                            children: "service"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                            className: "sec-title title-anim",
                                            children: [
                                                "Solution we ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "provide"
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xxl-5 col-xl-5 col-lg-5 col-md-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "service__top-text text-anim",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "With every single one of our clients we bring forth a deep passion for ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "creative problem solving innovations"
                                            }),
                                            " ",
                                            "forward thinking brands boundaries"
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "service__list-wrapper",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xxl-4 col-xl-4 col-lg-0 col-md-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "service__img-wrapper",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                priority: true,
                                                width: 280,
                                                style: {
                                                    height: "auto"
                                                },
                                                src: _1,
                                                alt: "Service Image",
                                                className: activeImg == 1 ? "service__img img-1 active" : "service__img img-1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                priority: true,
                                                width: 280,
                                                style: {
                                                    height: "auto"
                                                },
                                                src: _2,
                                                alt: "Service Image",
                                                className: activeImg == 2 ? "service__img img-2 active" : "service__img img-2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                priority: true,
                                                width: 280,
                                                style: {
                                                    height: "auto"
                                                },
                                                src: _3,
                                                alt: "Service Image",
                                                className: activeImg == 3 ? "service__img img-3 active" : "service__img img-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                priority: true,
                                                width: 280,
                                                style: {
                                                    height: "auto"
                                                },
                                                src: _4,
                                                alt: "Service Image",
                                                className: activeImg == 4 ? "service__img img-4 active" : "service__img img-4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: activeShape == 1 ? "shapes shape-box-1 current" : "shapes shape-box-1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: activeShape == 2 ? "shapes shape-box-2 current" : "shapes shape-box-2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: activeShape == 3 ? "shapes shape-box-3 current" : "shapes shape-box-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: activeShape == 4 ? "shapes shape-box-4 current" : "shapes shape-box-4"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xxl-8 col-xl-8 col-lg-12 col-md-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "service__list",
                                        ref: serviceList,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/service-details",
                                                className: activeList == 1 ? "active" : "",
                                                "data-service": "1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "service__item animation_home1_service",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__number",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "01"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__title-wrapper",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "service__title",
                                                                children: "Web & Mobile Development"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "We create, products, brands, apps & websites for the companies all around the world class digital products"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__link",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-arrow-right"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/service-details",
                                                className: activeList == 2 ? "active" : "",
                                                "data-service": "2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "service__item  animation_home1_service",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__number",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "02"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__title-wrapper",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                className: "service__title",
                                                                children: [
                                                                    "Interaction ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    "Design"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "We create, products, brands, apps & websites for the companies all around the world class digital products"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__link",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-arrow-right"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/service-details",
                                                className: activeList == 3 ? "active" : "",
                                                "data-service": "3",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "service__item  animation_home1_service",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__number",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "03"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__title-wrapper",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                className: "service__title",
                                                                children: [
                                                                    "Digital ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    "Maketing"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "We create, products, brands, apps & websites for the companies all around the world class digital products"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__link",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-arrow-right"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/service-details",
                                                className: activeList == 4 ? "active" : "",
                                                "data-service": "4",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "service__item  animation_home1_service",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__number",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "04"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__title-wrapper",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "service__title",
                                                                children: "Branding and Strategy"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "We create, products, brands, apps & websites for the companies all around the world class digital products"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__link",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-arrow-right"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const service_ServiceElementV2 = (ServiceElementV2);


/***/ })

};
;