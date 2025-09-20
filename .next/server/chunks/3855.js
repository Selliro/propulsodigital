"use strict";
exports.id = 3855;
exports.ids = [3855];
exports.modules = {

/***/ 3855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ service_DigitalAgencyService)
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
;// CONCATENATED MODULE: ./public/assets/imgs/service/1/service_img_1.jpg
/* harmony default export */ const service_img_1 = ({"src":"/_next/static/media/service_img_1.75fbfe19.jpg","height":350,"width":265,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAXEAEBAQEAAAAAAAAAAAAAAAABAAIR/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJI4OGlFZJIHf//Z","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/service/DigitalAgencyService.jsx











external_gsap_.gsap.registerPlugin(plugins/* ScrollTrigger */.ic);
const DigitalAgencyService = ()=>{
    const [activeList, setActiveList] = (0,external_react_.useState)(1);
    const [activeImg, setActiveImg] = (0,external_react_.useState)(1);
    const [activeShape, setActiveShape] = (0,external_react_.useState)(1);
    const serviceList = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "service__area pt-110 pb-150",
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
                                                "Solutions que ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " nous cr\xe9ons"
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
                                            "Avec chaque client, nous travaillons ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "avec passion"
                                            }),
                                            " ",
                                            " pour cr\xe9er des ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "solutions digitales innovantes."
                                            }),
                                            " "
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
                                                src: service_img_1,
                                                alt: "Service Image",
                                                className: activeImg == 1 ? "service__img img-1 active" : "service__img img-1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                priority: true,
                                                width: 280,
                                                style: {
                                                    height: "auto"
                                                },
                                                src: service_img_1,
                                                alt: "Service Image",
                                                className: activeImg == 2 ? "service__img img-2 active" : "service__img img-2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                priority: true,
                                                width: 280,
                                                style: {
                                                    height: "auto"
                                                },
                                                src: service_img_1,
                                                alt: "Service Image",
                                                className: activeImg == 3 ? "service__img img-3 active" : "service__img img-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                priority: true,
                                                width: 280,
                                                style: {
                                                    height: "auto"
                                                },
                                                src: service_img_1,
                                                alt: "Service Image",
                                                className: activeImg == 4 ? "service__img img-4 active" : "service__img img-4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                priority: true,
                                                width: 280,
                                                style: {
                                                    height: "auto"
                                                },
                                                src: service_img_1,
                                                alt: "Service Image",
                                                className: activeImg == 5 ? "service__img img-5 active" : "service__img img-5"
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
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: activeShape == 5 ? "shapes shape-box-5 current" : "shapes shape-box-5"
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
                                                href: "/strategy-branding",
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
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                className: "service__title",
                                                                children: [
                                                                    "Strat\xe9gie & ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    "Branding"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Nous cr\xe9ons votre identit\xe9 digitale et d\xe9finissons la strat\xe9gie qui vous positionne comme leader sur votre march\xe9 avec impact et coh\xe9rence."
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
                                                href: "/sites-internet",
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
                                                                    "Sites Internet & ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    "E-commerce"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Nous d\xe9veloppons des sites web performants et des boutiques en ligne optimis\xe9es qui convertissent vos visiteurs en clients fid\xe8les."
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
                                                href: "/email-marketing",
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
                                                                    "Email Marketing & ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " Automatisation"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Nous concevons des campagnes email cibl\xe9es et des funnels automatis\xe9s qui renforcent l'engagement et transforment vos contacts en clients r\xe9currents."
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
                                                href: "/natural-referencing",
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
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                className: "service__title",
                                                                children: [
                                                                    "SEO & ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " R\xe9f\xe9rencement"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Nous optimisons votre pr\xe9sence en ligne gr\xe2ce \xe0 des techniques de r\xe9f\xe9rencement avanc\xe9es qui positionnent votre entreprise en t\xeate des r\xe9sultats de recherche."
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
                                                href: "/social-media-advertising",
                                                className: activeList == 5 ? "active" : "",
                                                "data-service": "5",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "service__item  animation_home1_service",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__number",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "05"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__title-wrapper",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                className: "service__title",
                                                                children: [
                                                                    "Social Media ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " Advertising (SMA)"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "service__text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Nous cr\xe9ons des campagnes publicitaires performantes sur Facebook, Instagram et LinkedIn qui g\xe9n\xe8rent des leads qualifi\xe9s et boostent vos conversions."
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
/* harmony default export */ const service_DigitalAgencyService = (DigitalAgencyService);


/***/ })

};
;