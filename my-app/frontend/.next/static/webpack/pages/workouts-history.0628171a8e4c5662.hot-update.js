"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/workouts-history",{

/***/ "./src/pages/workouts-history.js":
/*!***************************************!*\
  !*** ./src/pages/workouts-history.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Container_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Container,Stack,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,Container,Stack,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _layouts_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/dashboard/layout */ \"./src/layouts/dashboard/layout.js\");\n/* harmony import */ var _heroicons_react_24_solid_PlusIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/24/solid/PlusIcon */ \"./node_modules/@heroicons/react/24/solid/esm/PlusIcon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/@mui/x-data-grid/index.js\");\n/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/colors */ \"./src/theme/colors.js\");\n/* harmony import */ var _contexts_dialog_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/dialog-context */ \"./src/contexts/dialog-context.js\");\n/* harmony import */ var _sections_workouts_history_add_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/workouts-history/add-dialog */ \"./src/sections/workouts-history/add-dialog.js\");\n/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/format */ \"./src/utils/format.js\");\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"./node_modules/@mui/icons-material/Edit.js\");\n/* harmony import */ var _mui_icons_material_DeleteOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/DeleteOutlined */ \"./node_modules/@mui/icons-material/DeleteOutlined.js\");\n/* harmony import */ var _sections_students_confirm_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/sections/students/confirm-dialog */ \"./src/sections/students/confirm-dialog.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst WorkoutHistoryPage = ()=>{\n    _s();\n    const [workoutHistory, setWorkoutHistory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const dialog = (0,_contexts_dialog_context__WEBPACK_IMPORTED_MODULE_4__.useDialog)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchMyAPI() {\n            let response = await fetch(\"/api/equipments\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            response = await response.json();\n            response.map((r)=>{\n                r.id = r._id;\n            });\n            setWorkoutHistory(response);\n        }\n        fetchMyAPI();\n    }, []);\n    const handleDeleteClick = (id)=>()=>{\n            const deleteAction = ()=>{\n                fetch(\"/api/equipments\", {\n                    method: \"DELETE\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        id\n                    })\n                });\n                setWorkoutHistory(workoutHistory.filter((s)=>s.id !== id));\n            };\n            dialog.setDialogContent({\n                title: \"Eliminar um equipamento\",\n                type: \"confirmwkh\",\n                content: \"Tem a certeza que quer eliminar o equipamento \" + workoutHistory.find((x)=>x.id == id) + \"?\",\n                action: deleteAction\n            });\n        };\n    const handleEditClick = (id)=>()=>{\n            //set popup content\n            dialog.setDialogContent({\n                title: \"Editar um equipamento\",\n                type: \"editwkh\",\n                workout: workoutHistory.find((x)=>x.id == id)\n            });\n        };\n    const columns = [\n        {\n            field: \"createdAt\",\n            headerName: \"Data\",\n            width: 150,\n            renderCell: (params)=>(0,_utils_format__WEBPACK_IMPORTED_MODULE_6__.formatCreatedDate)(params.value)\n        },\n        {\n            field: \"eqName\",\n            headerName: \"Nome do Equipamento\",\n            width: 160\n        },\n        {\n            field: \"maintenance\",\n            headerName: \"\\xdaltima manuten\\xe7\\xe3o\",\n            width: 150\n        },\n        {\n            field: \"availability\",\n            headerName: \"Disponibilidade\",\n            width: 150\n        },\n        {\n            field: \"actions\",\n            type: \"actions\",\n            headerName: \"Editar/Remover\",\n            width: 150,\n            cellClassName: \"actions\",\n            getActions: (param)=>{\n                let { id } = param;\n                return [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_8__.GridActionsCellItem, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, void 0, void 0),\n                        label: \"Cancel\",\n                        className: \"textPrimary\",\n                        onClick: handleEditClick(id),\n                        color: \"inherit\"\n                    }, 1, false, {\n                        fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_8__.GridActionsCellItem, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DeleteOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, void 0, void 0),\n                        label: \"Cancel\",\n                        className: \"textPrimary\",\n                        onClick: handleDeleteClick(id),\n                        color: \"inherit\"\n                    }, 1, false, {\n                        fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined)\n                ];\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            dialog.getType().type == \"confirmwkh\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_students_confirm_dialog__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialog, {}, void 0, false, {\n                fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                lineNumber: 112,\n                columnNumber: 48\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_workouts_history_add_dialog__WEBPACK_IMPORTED_MODULE_5__.AddWorkoutHistoryDialog, {}, void 0, false, {\n                fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                lineNumber: 112,\n                columnNumber: 68\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {\n                sx: {\n                    backgroundColor: \"background.default\",\n                    minHeight: \"100%\",\n                    py: 8\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__.Container, {\n                        maxWidth: false,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {\n                                direction: \"row\",\n                                justifyContent: \"space-between\",\n                                mb: 3,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {\n                                    color: \"textPrimary\",\n                                    variant: \"h4\",\n                                    children: \"Equipamentos\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__.Button, {\n                                startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid_PlusIcon__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, void 0, void 0),\n                                variant: \"contained\",\n                                sx: {\n                                    backgroundColor: _theme_colors__WEBPACK_IMPORTED_MODULE_3__.info.main\n                                },\n                                onClick: ()=>{\n                                    dialog.setDialogContent({\n                                        title: \"Adicionar um novo equipamento\",\n                                        type: \"createwkh\"\n                                    });\n                                },\n                                children: \"Adicionar equipamento\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__.Container, {\n                        maxWidth: \"xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {\n                            spacing: 3,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_8__.DataGrid, {\n                                rows: workoutHistory,\n                                columns: columns,\n                                pageSize: 5,\n                                pageSizeOptions: [\n                                    5,\n                                    10,\n                                    15,\n                                    20\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                                lineNumber: 146,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                            lineNumber: 145,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(WorkoutHistoryPage, \"r3CMBzDwoxHrgksNJKiN0LhmVrg=\", false, function() {\n    return [\n        _contexts_dialog_context__WEBPACK_IMPORTED_MODULE_4__.useDialog\n    ];\n});\n_c = WorkoutHistoryPage;\nWorkoutHistoryPage.getLayout = (page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/gpeduarte/Documents/MSP/MyClinic-App-Development/my-app/frontend/src/pages/workouts-history.js\",\n        lineNumber: 160,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkoutHistoryPage);\nvar _c;\n$RefreshReg$(_c, \"WorkoutHistoryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUI7b0JBQ2pCQyxXQUFXO29CQUNYQyxJQUFJO2dCQUNOOztrQ0FFQSw4REFBQ2pFLGlIQUFTQTt3QkFBQ2tFLFVBQVU7OzBDQUNuQiw4REFBQ2pFLDZHQUFLQTtnQ0FBQ2tFLFdBQVU7Z0NBQU1DLGdCQUFlO2dDQUFnQkMsSUFBSTswQ0FDeEQsNEVBQUNuRSxrSEFBVUE7b0NBQUMwRCxPQUFNO29DQUFjVSxTQUFROzhDQUFLOzs7Ozs7Ozs7OzswQ0FJL0MsOERBQUNDOzs7OzswQ0FDRCw4REFBQ3hFLDhHQUFNQTtnQ0FDTHlFLHlCQUFXLDhEQUFDbkUsMkVBQVFBO2dDQUNwQmlFLFNBQVE7Z0NBQ1JSLElBQUk7b0NBQ0ZDLGlCQUFpQnJELCtDQUFJQSxDQUFDK0QsSUFBSTtnQ0FDNUI7Z0NBQ0FkLFNBQVM7b0NBQ0x2QyxPQUFPa0IsZ0JBQWdCLENBQUM7d0NBQ3BCQyxPQUFPO3dDQUNQQyxNQUFNO29DQUNWO2dDQUNKOzBDQUNEOzs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUMrQjs7Ozs7a0NBQ0QsOERBQUN2RSxpSEFBU0E7d0JBQUNrRSxVQUFTO2tDQUNsQiw0RUFBQ2pFLDZHQUFLQTs0QkFBQ3lFLFNBQVM7c0NBQ2QsNEVBQUNsRSxzREFBUUE7Z0NBQ1BtRSxNQUFNekQ7Z0NBQ042QixTQUFTQTtnQ0FDVDZCLFVBQVU7Z0NBQ1ZDLGlCQUFpQjtvQ0FBQztvQ0FBRztvQ0FBSTtvQ0FBSTtpQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlDO0dBL0lNNUQ7O1FBR1dOLCtEQUFTQTs7O0tBSHBCTTtBQWlKTkEsbUJBQW1CNkQsU0FBUyxHQUFHLENBQUNDLHFCQUM5Qiw4REFBQzNFLDZEQUFlQTtrQkFDYjJFOzs7Ozs7QUFJTCwrREFBZTlELGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvd29ya291dHMtaGlzdG9yeS5qcz8zNTVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExheW91dCBhcyBEYXNoYm9hcmRMYXlvdXQgfSBmcm9tIFwiQC9sYXlvdXRzL2Rhc2hib2FyZC9sYXlvdXRcIjtcbmltcG9ydCBQbHVzSWNvbiBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZC9QbHVzSWNvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRBY3Rpb25zQ2VsbEl0ZW0gfSBmcm9tIFwiQG11aS94LWRhdGEtZ3JpZFwiO1xuaW1wb3J0IHsgaW5mbyB9IGZyb20gXCIuLi90aGVtZS9jb2xvcnNcIjtcbmltcG9ydCB7IHVzZURpYWxvZyB9IGZyb20gXCIuLi9jb250ZXh0cy9kaWFsb2ctY29udGV4dFwiO1xuaW1wb3J0IHsgQWRkV29ya291dEhpc3RvcnlEaWFsb2cgfSBmcm9tIFwiLi4vc2VjdGlvbnMvd29ya291dHMtaGlzdG9yeS9hZGQtZGlhbG9nXCI7XG5pbXBvcnQgeyBmb3JtYXRDcmVhdGVkRGF0ZSB9IGZyb20gXCJAL3V0aWxzL2Zvcm1hdFwiO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXRcIjtcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZU91dGxpbmVkXCI7XG5pbXBvcnQgeyBDb25maXJtRGlhbG9nIH0gZnJvbSBcIkAvc2VjdGlvbnMvc3R1ZGVudHMvY29uZmlybS1kaWFsb2dcIjtcblxuY29uc3QgV29ya291dEhpc3RvcnlQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbd29ya291dEhpc3RvcnksIHNldFdvcmtvdXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBkaWFsb2cgPSB1c2VEaWFsb2coKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNeUFQSSgpIHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9lcXVpcG1lbnRzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICByZXNwb25zZS5tYXAoKHIpID0+IHtcbiAgICAgICAgci5pZCA9IHIuX2lkO1xuICAgICAgfSk7XG4gICAgICBzZXRXb3Jrb3V0SGlzdG9yeShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgZmV0Y2hNeUFQSSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpY2sgPSAoaWQpID0+ICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVBY3Rpb24gPSAoKSA9PiB7XG4gICAgICBmZXRjaChcIi9hcGkvZXF1aXBtZW50c1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkIH0pLFxuICAgICAgfSk7XG4gICAgICBzZXRXb3Jrb3V0SGlzdG9yeSh3b3Jrb3V0SGlzdG9yeS5maWx0ZXIoKHMpID0+IHMuaWQgIT09IGlkKSk7XG4gICAgfTtcblxuICAgIGRpYWxvZy5zZXREaWFsb2dDb250ZW50KHtcbiAgICAgIHRpdGxlOiBcIkVsaW1pbmFyIHVtIGVxdWlwYW1lbnRvXCIsXG4gICAgICB0eXBlOiBcImNvbmZpcm13a2hcIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiVGVtIGEgY2VydGV6YSBxdWUgcXVlciBlbGltaW5hciBvIGVxdWlwYW1lbnRvIFwiICtcbiAgICAgICAgd29ya291dEhpc3RvcnkuZmluZCgoeCkgPT4geC5pZCA9PSBpZCkgK1xuICAgICAgICBcIj9cIixcbiAgICAgIGFjdGlvbjogZGVsZXRlQWN0aW9uLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVkaXRDbGljayA9IChpZCkgPT4gKCkgPT4ge1xuICAgIC8vc2V0IHBvcHVwIGNvbnRlbnRcbiAgICBkaWFsb2cuc2V0RGlhbG9nQ29udGVudCh7XG4gICAgICB0aXRsZTogXCJFZGl0YXIgdW0gZXF1aXBhbWVudG9cIixcbiAgICAgIHR5cGU6IFwiZWRpdHdraFwiLFxuICAgICAgd29ya291dDogd29ya291dEhpc3RvcnkuZmluZCgoeCkgPT4geC5pZCA9PSBpZCksXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICBmaWVsZDogXCJjcmVhdGVkQXRcIixcbiAgICAgIGhlYWRlck5hbWU6IFwiRGF0YVwiLFxuICAgICAgd2lkdGg6IDE1MCxcbiAgICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IGZvcm1hdENyZWF0ZWREYXRlKHBhcmFtcy52YWx1ZSksXG4gICAgfSxcbiAgICB7IGZpZWxkOiBcImVxTmFtZVwiLCBoZWFkZXJOYW1lOiBcIk5vbWUgZG8gRXF1aXBhbWVudG9cIiwgd2lkdGg6IDE2MCB9LFxuICAgIHsgZmllbGQ6IFwibWFpbnRlbmFuY2VcIiwgaGVhZGVyTmFtZTogXCLDmmx0aW1hIG1hbnV0ZW7Dp8Ojb1wiLCB3aWR0aDogMTUwIH0sXG4gICAgeyBmaWVsZDogXCJhdmFpbGFiaWxpdHlcIiwgaGVhZGVyTmFtZTogXCJEaXNwb25pYmlsaWRhZGVcIiwgd2lkdGg6IDE1MCB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiBcImFjdGlvbnNcIixcbiAgICAgIHR5cGU6IFwiYWN0aW9uc1wiLFxuICAgICAgaGVhZGVyTmFtZTogXCJFZGl0YXIvUmVtb3ZlclwiLFxuICAgICAgd2lkdGg6IDE1MCxcbiAgICAgIGNlbGxDbGFzc05hbWU6IFwiYWN0aW9uc1wiLFxuICAgICAgZ2V0QWN0aW9uczogKHsgaWQgfSkgPT4ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIDxHcmlkQWN0aW9uc0NlbGxJdGVtXG4gICAgICAgICAgICBrZXk9ezF9XG4gICAgICAgICAgICBpY29uPXs8RWRpdEljb24gLz59XG4gICAgICAgICAgICBsYWJlbD1cIkNhbmNlbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFZGl0Q2xpY2soaWQpfVxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAvPixcbiAgICAgICAgICA8R3JpZEFjdGlvbnNDZWxsSXRlbVxuICAgICAgICAgICAga2V5PXsxfVxuICAgICAgICAgICAgaWNvbj17PERlbGV0ZUljb24gLz59XG4gICAgICAgICAgICBsYWJlbD1cIkNhbmNlbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGVDbGljayhpZCl9XG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgIC8+LFxuICAgICAgICBdO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkaWFsb2cuZ2V0VHlwZSgpLnR5cGUgPT0gXCJjb25maXJtd2toXCIgPyA8Q29uZmlybURpYWxvZyAvPiA6IDxBZGRXb3Jrb3V0SGlzdG9yeURpYWxvZyAvPn1cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5kZWZhdWx0XCIsXG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICBweTogOCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD17ZmFsc2V9PlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBtYj17M30+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRQcmltYXJ5XCIgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIEVxdWlwYW1lbnRvc1xuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc3RhcnRJY29uPXs8UGx1c0ljb24gLz59XG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaW5mby5tYWluLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBkaWFsb2cuc2V0RGlhbG9nQ29udGVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFkaWNpb25hciB1bSBub3ZvIGVxdWlwYW1lbnRvXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY3JlYXRld2toXCIsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRpY2lvbmFyIGVxdWlwYW1lbnRvXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhsXCI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgPERhdGFHcmlkXG4gICAgICAgICAgICAgIHJvd3M9e3dvcmtvdXRIaXN0b3J5fVxuICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICBwYWdlU2l6ZT17NX1cbiAgICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zPXtbNSwgMTAsIDE1LCAyMF19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Xb3Jrb3V0SGlzdG9yeVBhZ2UuZ2V0TGF5b3V0ID0gKHBhZ2UpID0+IChcbiAgPERhc2hib2FyZExheW91dD5cbiAgICB7cGFnZX1cbiAgPC9EYXNoYm9hcmRMYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXb3Jrb3V0SGlzdG9yeVBhZ2U7XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiU3RhY2siLCJUeXBvZ3JhcGh5IiwiTGF5b3V0IiwiRGFzaGJvYXJkTGF5b3V0IiwiUGx1c0ljb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRhdGFHcmlkIiwiR3JpZEFjdGlvbnNDZWxsSXRlbSIsImluZm8iLCJ1c2VEaWFsb2ciLCJBZGRXb3Jrb3V0SGlzdG9yeURpYWxvZyIsImZvcm1hdENyZWF0ZWREYXRlIiwiRWRpdEljb24iLCJEZWxldGVJY29uIiwiQ29uZmlybURpYWxvZyIsIldvcmtvdXRIaXN0b3J5UGFnZSIsIndvcmtvdXRIaXN0b3J5Iiwic2V0V29ya291dEhpc3RvcnkiLCJkaWFsb2ciLCJmZXRjaE15QVBJIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJqc29uIiwibWFwIiwiciIsImlkIiwiX2lkIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJkZWxldGVBY3Rpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbHRlciIsInMiLCJzZXREaWFsb2dDb250ZW50IiwidGl0bGUiLCJ0eXBlIiwiY29udGVudCIsImZpbmQiLCJ4IiwiYWN0aW9uIiwiaGFuZGxlRWRpdENsaWNrIiwid29ya291dCIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ3aWR0aCIsInJlbmRlckNlbGwiLCJwYXJhbXMiLCJ2YWx1ZSIsImNlbGxDbGFzc05hbWUiLCJnZXRBY3Rpb25zIiwiaWNvbiIsImxhYmVsIiwiY2xhc3NOYW1lIiwib25DbGljayIsImNvbG9yIiwiZ2V0VHlwZSIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwicHkiLCJtYXhXaWR0aCIsImRpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwibWIiLCJ2YXJpYW50IiwiYnIiLCJzdGFydEljb24iLCJtYWluIiwic3BhY2luZyIsInJvd3MiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsImdldExheW91dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/workouts-history.js\n"));

/***/ })

});