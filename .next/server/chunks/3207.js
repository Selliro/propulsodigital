"use strict";
exports.id = 3207;
exports.ids = [3207];
exports.modules = {

/***/ 8218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/6.bfeca54e.jpg","height":700,"width":1820,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAACAgMAAAAAAAAAAAAAAAAAARESE3KR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AK6iyWlzs44AAP/Z","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 7533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ job_JobDetails1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
// EXTERNAL MODULE: ./src/plugins/index.js
var plugins = __webpack_require__(7960);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./public/assets/imgs/logo/logo-black.png
var logo_black = __webpack_require__(3678);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/job/JobDetailsModal1.jsx




const JobDetailsModal1 = ({ modal1 , setModal1 , setModal2  })=>{
    const applyClose = ()=>{
        setModal1(false);
    };
    const applyTrigger = ()=>{
        setModal2(true);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal, {
            show: modal1,
            onHide: applyClose,
            backdrop: "static",
            keyboard: false,
            className: "modal-show modal__application",
            id: "application_form",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "modal__apply",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: applyClose,
                        className: "modal__close-2",
                        id: "apply_close",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa-solid fa-xmark"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-top",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                priority: true,
                                style: {
                                    width: "auto",
                                    height: "auto"
                                },
                                src: logo_black/* default */.Z,
                                alt: "Site logo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "sec-title",
                                children: "Frontend Developer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Full time"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-apply",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            action: "#",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-apply",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Why you decided to apply here and why should we select you? *"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            name: "question",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-apply",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Tell us about a project that you worked on and felt proud of it."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            name: "question-2",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-apply",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Share your portfolios. (Behance, Dribbble, etc) *"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            name: "question-3",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-apply",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Who's your favorite designer? *"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            name: "question-4",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-apply",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Do you have any other designs which you want to show us? or this is not available on your portfolio."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            name: "question-5",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-apply",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "What are you looking for in your next job/journey? *"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            name: "question-6",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-apply",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "What makes you angry? and what makes you smile?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            name: "question-7",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-apply",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Your current salary & what are your salary expectations? *"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            name: "question-8",
                                            required: true
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-btn apply-trigger",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            onClick: applyTrigger,
                            className: "wc-btn-primary btn-hover",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                " next ",
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-arrow-right"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const job_JobDetailsModal1 = (JobDetailsModal1);

;// CONCATENATED MODULE: ./src/components/job/JobDetailsModal2.jsx




const JobDetailsModal2 = ({ modal2 , setModal1 , setModal2  })=>{
    const backForm = ()=>{
        setModal2(false);
    };
    const applyClose = ()=>{
        setModal2(false);
        setModal1(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal, {
            show: modal2,
            onHide: applyClose,
            backdrop: "static",
            keyboard: false,
            className: "modal-show modal__application",
            id: "application_form2",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "modal__apply",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: applyClose,
                        className: "modal__close-2",
                        id: "apply_close2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa-solid fa-xmark"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-top",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                priority: true,
                                style: {
                                    width: "auto",
                                    height: "auto"
                                },
                                src: logo_black/* default */.Z,
                                alt: "Site logo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "sec-title",
                                children: "Frontend Developer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Full time"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-apply",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            action: "#",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-apply-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Name *"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            name: "name",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-apply-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Email *"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            name: "email",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-apply-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Phone *"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "tel",
                                            name: "phone",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-apply-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Upload CV *"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "file",
                                            name: "cv"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-btn-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: backForm,
                                className: "wc-btn-primary btn-hover",
                                id: "back_form1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    " back ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-arrow-right"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: applyClose,
                                type: "submit",
                                className: "wc-btn-primary btn-hover",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    " Submit ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-arrow-right"
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
/* harmony default export */ const job_JobDetailsModal2 = (JobDetailsModal2);

;// CONCATENATED MODULE: ./src/components/job/JobDetails1.jsx






external_gsap_.gsap.registerPlugin(plugins/* ScrollTrigger */.ic);
const JobDetails1 = ()=>{
    const [modal1, setModal1] = (0,external_react_.useState)(false);
    const [modal2, setModal2] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    const jobApply = ()=>{
        setModal1(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "job__detail",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container g-0 line pb-110",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "line-3"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xxl-9 col-xl-9 col-lg-8 col-md-8",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "job__detail-wrapper",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "sec-title",
                                                children: "Frontend Developer"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "job__detail-meta",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Location"
                                                            }),
                                                            " 2541, Austin, New York"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Date"
                                                            }),
                                                            " 24, June 2022"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Job Type"
                                                            }),
                                                            " Full time (Remote)"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "job__detail-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "We’re looking for a Junior - Mid-level Designer to join our team. You’ll support the execution of graphic and digital design projects, working closely with the internal team of creatives, project managers, the Creative Director and development team to blend user needs and business goals into seamless, effective design experiences. You will need to demonstrate a fundamental understanding of design principles, an openness to learn and take direction, along with a strong aesthetic design intuition."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "What you will do"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Support Growth team in expanding customer base within legal industry as well as new markets"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Find prospective customer leads via LinkedIn Sales Navigator, industry directories, personal network and other sources"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Qualify prospective customer leads via email, phone, and Linkedin messaging"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Track and analyze prospective customer pipeline, presenting stats and progress to Growth team"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Identify trends in prospective customer engagement with various outreach campaigns"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Help strategize, implement, and maintain an efficient sales system, primarily within Hubspot Sales and Hubspot Marketing"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Create and maintain sales and marketing materials, like pricing sheets and feature highlights"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Support special projects, like event sponsorships and industry partnerships"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Contribute to customer support initiatives"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "Requirements"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Worked with any professional plugin development team or More than one Plugins approved at wordpress.org/CodeCanyon"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Solid and strong PHP knowledge."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Really good understanding in OOP, Namespace, Traits & Design Patterns"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Intermediate to Advanced JavaScript knowledge."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Fluent English speaking and writing is preferred but not required."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Writing reusable, testable, secured and efficient PHP, JavaScript, HTML5, CSS3, MySQL and AJAX Code."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    "Excellent knowledge about WP custom post type, custom taxonomy, and custom meta box",
                                                                    " "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Fluent in WordPress, PHP, plugins, themes security, JavaScript, and other technologies"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Clear concepts of WordPress Actions, Hooks, custom queries, meta fields."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Proficient with relational (SQL) and non-relational database platforms"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Optimize performance of applications utilizing industry standards on all ends of the architecture."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    "Creating database schemas that represent and support business processes.",
                                                                    " "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Coordinating the workflow between the UI/UX Designer, the QA, and yourself."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Problem-solving capabilities "
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Age 20 to 35 years"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "Educational Qualification"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "It doesn’t matter where you went to college or what your CGPA was as long as you are smart, passionate, ready to work hard and have fun."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "Perks & Benefits"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Competitive compensation and equity package"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "99% company paid medical, dental, and vision coverage for employees and dependents (for US employees)"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Flexible Spending Account (FSA) and Dependent Care Flexible Spending Account (DCFSA)"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Healthcare reimbursement (for International employees)"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Life, AD&D, Short and Long Term Disability Insurance"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "401(k) with 4% company matching"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Professional development reimbursement"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Wellness stipends"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Unlimited PTO"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Paid parental leave"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Remote work opportunities"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: "Home office & technology reimbursement"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "We’re committed to creating the happiest company working for and is proud to provide equal opportunity to all. All the qualified applicants will receive consideration for employment without regard to race, color, ancestry, religion."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "job__apply btn_wrapper",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    onClick: jobApply,
                                                    className: "wc-btn-primary btn-hover btn-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                        " Apply this ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        "Position ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-arrow-right"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xxl-3 col-xl-3 col-lg-4 col-md-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "job__detail-sidebar",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Experience"
                                                        }),
                                                        " 5+ Years Experience"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Working Hours"
                                                        }),
                                                        " 08 AM to 05 PM"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Working Days"
                                                        }),
                                                        " Weekly 5 days (Sun to Thur)"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Salary"
                                                        }),
                                                        " $24k - 65k (Yearly)"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Vacancy"
                                                        }),
                                                        " No of Vacancies: 2"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Deadline"
                                                        }),
                                                        " 03 July 2022"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(job_JobDetailsModal1, {
                        modal1: modal1,
                        setModal1: setModal1,
                        setModal2: setModal2
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(job_JobDetailsModal2, {
                        setModal1: setModal1,
                        modal2: modal2,
                        setModal2: setModal2
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const job_JobDetails1 = (JobDetails1);


/***/ })

};
;