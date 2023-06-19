"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
    ["main"],
    {
        1595: (W, x, o) => {
            o.d(x, { D: () => a });
            var l = o(9244),
                e = o(2560),
                g = o(4666),
                E = o(3335);
            function c(R, P) {
                1 & R && e.GkF(0);
            }
            function I(R, P) {
                if (
                    (1 & R &&
                        (e.TgZ(0, "span", 3),
                        e.YNc(1, c, 1, 0, "ng-container", 4),
                        e.qZA()),
                    2 & R)
                ) {
                    const L = e.oxw(),
                        K = e.MAs(3);
                    e.Udp("background-color", L.backgroundColour),
                        e.ekj("circle", L.isIconCircular),
                        e.xp6(1),
                        e.Q6J("ngTemplateOutlet", K);
                }
            }
            function O(R, P) {
                1 & R && e.GkF(0);
            }
            function T(R, P) {
                if (
                    (1 & R &&
                        (e.TgZ(0, "span", 5),
                        e.YNc(1, O, 1, 0, "ng-container", 4),
                        e.qZA()),
                    2 & R)
                ) {
                    const L = e.oxw(),
                        K = e.MAs(3);
                    e.Udp("color", L.backgroundColour),
                        e.ekj(
                            "material-icons",
                            !L.isOutlinedIcon && !L.isSingleCharacterIcon
                        )(
                            "material-icons-outlined",
                            L.isOutlinedIcon && !L.isSingleCharacterIcon
                        )("single-character-icon", L.isSingleCharacterIcon)(
                            "white-circle",
                            "white" === L.themeColor
                        )("grey-circle", "grey" === L.themeColor)(
                            "smaller",
                            L.isSmallerIcon
                        )("medium", L.isMediumSizeIcon),
                        e.Q6J("matBadge", L.matIcon)(
                            "matBadgeColor",
                            L.matBadgeColour
                        ),
                        e.xp6(1),
                        e.Q6J("ngTemplateOutlet", K);
                }
            }
            function m(R, P) {
                1 & R && e.Hsn(0);
            }
            const _ = ["*"];
            let a = (() => {
                class R {
                    constructor() {
                        (this.backgroundColour = l.Ek.neutral0),
                            (this.isIconCircular = !0),
                            (this.useSurroundingCircle = !1),
                            (this.themeColor = "primary"),
                            (this.matIcon = ""),
                            (this.isSmallerIcon = !1),
                            (this.isMediumSizeIcon = !1),
                            (this.isOutlinedIcon = !1),
                            (this.isSingleCharacterIcon = !1);
                    }
                    get matBadgeColour() {
                        return "white" === this.themeColor ||
                            "grey" === this.themeColor
                            ? "primary"
                            : this.themeColor;
                    }
                }
                return (
                    (R.ɵfac = function (L) {
                        return new (L || R)();
                    }),
                    (R.ɵcmp = e.Xpm({
                        type: R,
                        selectors: [["luno-icon-background"]],
                        inputs: {
                            backgroundColour: "backgroundColour",
                            isIconCircular: "isIconCircular",
                            useSurroundingCircle: "useSurroundingCircle",
                            themeColor: "themeColor",
                            matIcon: "matIcon",
                            isSmallerIcon: "isSmallerIcon",
                            isMediumSizeIcon: "isMediumSizeIcon",
                            isOutlinedIcon: "isOutlinedIcon",
                            isSingleCharacterIcon: "isSingleCharacterIcon",
                        },
                        ngContentSelectors: _,
                        decls: 4,
                        vars: 2,
                        consts: [
                            [
                                "class",
                                "no-badge",
                                3,
                                "background-color",
                                "circle",
                                4,
                                "ngIf",
                            ],
                            [
                                "matBadgeSize",
                                "large",
                                3,
                                "material-icons",
                                "material-icons-outlined",
                                "single-character-icon",
                                "matBadge",
                                "matBadgeColor",
                                "white-circle",
                                "grey-circle",
                                "color",
                                "smaller",
                                "medium",
                                4,
                                "ngIf",
                            ],
                            ["contentTpl", ""],
                            [1, "no-badge"],
                            [4, "ngTemplateOutlet"],
                            [
                                "matBadgeSize",
                                "large",
                                3,
                                "matBadge",
                                "matBadgeColor",
                            ],
                        ],
                        template: function (L, K) {
                            1 & L &&
                                (e.F$t(),
                                e.YNc(0, I, 2, 5, "span", 0),
                                e.YNc(1, T, 2, 19, "span", 1),
                                e.YNc(
                                    2,
                                    m,
                                    1,
                                    0,
                                    "ng-template",
                                    null,
                                    2,
                                    e.W1O
                                )),
                                2 & L &&
                                    (e.Q6J("ngIf", !K.useSurroundingCircle),
                                    e.xp6(1),
                                    e.Q6J("ngIf", K.useSurroundingCircle));
                        },
                        dependencies: [g.O5, g.tP, E.k],
                        styles: [
                            "span[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}span.no-badge[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:4px;overflow:hidden}span.smaller[_ngcontent-%COMP%]{width:20px;height:20px}span.smaller.single-character-icon.mat-badge.mat-badge-large[_ngcontent-%COMP%], span.smaller.material-icons.mat-badge.mat-badge-large[_ngcontent-%COMP%], span.smaller.material-icons-outlined.mat-badge.mat-badge-large[_ngcontent-%COMP%]{height:20px;width:20px;margin:auto}span.smaller.single-character-icon.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%], span.smaller.material-icons.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%], span.smaller.material-icons-outlined.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%]{top:0;right:0;font-weight:500;color:inherit;height:20px;width:20px;line-height:20px;font-size:18px}span.medium[_ngcontent-%COMP%]{width:30px;height:30px}span.medium.single-character-icon.mat-badge.mat-badge-large[_ngcontent-%COMP%], span.medium.material-icons.mat-badge.mat-badge-large[_ngcontent-%COMP%], span.medium.material-icons-outlined.mat-badge.mat-badge-large[_ngcontent-%COMP%]{height:30px;width:30px;margin:auto}span.medium.single-character-icon.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%], span.medium.material-icons.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%], span.medium.material-icons-outlined.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%]{top:0;right:0;font-weight:500;color:inherit;height:30px;width:30px;line-height:30px;font-size:18px}span.white-circle.single-character-icon.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%], span.white-circle.material-icons-outlined.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%], span.white-circle.material-icons.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%]{background-color:var(--color-neutral-0)}span.grey-circle.single-character-icon.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%], span.grey-circle.material-icons-outlined.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%], span.grey-circle.material-icons.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%]{background-color:var(--color-neutral-100)}span.single-character-icon.mat-badge.mat-badge-large[_ngcontent-%COMP%], span.material-icons-outlined.mat-badge.mat-badge-large[_ngcontent-%COMP%], span.material-icons.mat-badge.mat-badge-large[_ngcontent-%COMP%]{height:40px;width:40px;margin:auto}span.single-character-icon.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%], span.material-icons-outlined.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%], span.material-icons.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%]{top:0;right:0;font-weight:500;color:inherit;height:40px;width:40px;line-height:40px}span.material-icons-outlined.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%]{font-family:Material Icons Outlined}span.material-icons.mat-badge.mat-badge-large[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%]{font-family:Material Icons}span.circle[_ngcontent-%COMP%]{border-radius:50%}",
                        ],
                        changeDetection: 0,
                    })),
                    R
                );
            })();
        },
        874: (W, x, o) => {
            o.d(x, { h: () => E });
            var l = o(4666),
                e = o(3335),
                g = o(2560);
            let E = (() => {
                class c {}
                return (
                    (c.ɵfac = function (O) {
                        return new (O || c)();
                    }),
                    (c.ɵmod = g.oAB({ type: c })),
                    (c.ɵinj = g.cJS({ imports: [l.ez, e.g] })),
                    c
                );
            })();
        },
        1443: (W, x, o) => {
            o.d(x, { J: () => T, n: () => O });
            var l = o(4929),
                e = o(2560),
                g = o(2815),
                E = o(4666),
                c = o(1453);
            function I(m, _) {
                if (1 & m) {
                    const a = e.EpF();
                    e.TgZ(0, "button", 1),
                        e.NdJ("click", function () {
                            e.CHM(a);
                            const P = e.oxw();
                            return e.KtG(P.buttonClick());
                        }),
                        e._UZ(1, "ng-lottie", 2),
                        e.qZA();
                }
                if (2 & m) {
                    const a = e.oxw();
                    e.xp6(1), e.Q6J("options", a.currentLottieConfig);
                }
            }
            var O = (() => {
                return (
                    ((m = O || (O = {}))[(m.DEFAULT = 0)] = "DEFAULT"),
                    (m[(m.TOGGLE = 1)] = "TOGGLE"),
                    O
                );
                var m;
            })();
            class T {
                constructor() {
                    (this.buttonClicked = new e.vpe()),
                        (this.currentLottieConfig = null);
                }
                ngOnInit() {
                    this.setAnimation();
                }
                setAnimation() {
                    this.animatedButtonConfig?.animations.length
                        ? this.animatedButtonConfig.type === O.TOGGLE
                            ? this.updateToggleConfig()
                            : (this.currentLottieConfig = this.animatedButtonConfig.animations[0])
                        : (this.currentLottieConfig = null);
                }
                buttonClick() {
                    if (this.animatedButtonConfig) {
                        if (this.animatedButtonConfig.type !== O.TOGGLE)
                            return void this.buttonClicked.emit();
                        (this.toggleValue = !this.toggleValue),
                            this.updateToggleConfig(),
                            this.buttonClicked.emit(this.toggleValue);
                    }
                }
                updateToggleConfig() {
                    this.currentLottieConfig = this.animatedButtonConfig
                        ?.animations.length
                        ? this.toggleValue
                            ? {
                                  ...this.animatedButtonConfig.animations[1],
                                  autoplay: !0,
                              }
                            : {
                                  ...this.animatedButtonConfig.animations[0],
                                  autoplay: !0,
                              }
                        : null;
                }
            }
            (T.ɵfac = function (_) {
                return new (_ || T)();
            }),
                (T.ɵcmp = e.Xpm({
                    type: T,
                    selectors: [["luno-animated-button"]],
                    inputs: {
                        animatedButtonConfig: "animatedButtonConfig",
                        toggleValue: "toggleValue",
                    },
                    outputs: { buttonClicked: "buttonClicked" },
                    decls: 1,
                    vars: 1,
                    consts: [
                        ["class", "animated-button", 3, "click", 4, "ngIf"],
                        [1, "animated-button", 3, "click"],
                        [3, "options"],
                    ],
                    template: function (_, a) {
                        1 & _ && e.YNc(0, I, 2, 1, "button", 0),
                            2 & _ && e.Q6J("ngIf", a.currentLottieConfig);
                    },
                    dependencies: [E.O5, c.e$],
                    styles: [
                        ".animated-button[_ngcontent-%COMP%]{background-color:transparent;border:none;cursor:pointer;padding:0;width:40px;height:40px}",
                    ],
                    changeDetection: 0,
                })),
                (0, l.gn)(
                    [
                        (0, g.G)("setAnimation"),
                        (0, l.w6)("design:type", Object),
                    ],
                    T.prototype,
                    "animatedButtonConfig",
                    void 0
                ),
                (0, l.gn)(
                    [
                        (0, g.G)("updateToggleConfig"),
                        (0, l.w6)("design:type", Object),
                    ],
                    T.prototype,
                    "toggleValue",
                    void 0
                );
        },
        1045: (W, x, o) => {
            o.d(x, { O: () => c });
            var l = o(4666),
                e = o(1453),
                g = o(8549),
                E = o(2560);
            let c = (() => {
                class I {}
                return (
                    (I.ɵfac = function (T) {
                        return new (T || I)();
                    }),
                    (I.ɵmod = E.oAB({ type: I })),
                    (I.ɵinj = E.cJS({
                        imports: [l.ez, e.CT.forRoot({ player: g.x })],
                    })),
                    I
                );
            })();
        },
        5599: (W, x, o) => {
            o.d(x, { r0: () => $e, L$: () => Ie });
            var l = o(4929),
                e = o(2560),
                g = o(4865),
                E = o(4666),
                c = o(6846),
                I = o(9129),
                O = o(2536);
            let T = (() => {
                class u {
                    constructor() {}
                    isNavType(s) {
                        return (
                            (s.type = this.getType(s)),
                            (s.type === c.GyU.STANDARD ||
                                s.type === c.GyU.PAYMENT_METHOD ||
                                s.type === c.GyU.INLINE_BUTTON) &&
                                this.hasAction(s)
                        );
                    }
                    isSelectType(s) {
                        return (
                            (s.type = this.getType(s)),
                            s.type === c.GyU.CHECKBOX ||
                                s.type === c.GyU.INLINE_CHECKBOX
                        );
                    }
                    isInlineCheckboxType(s) {
                        return (
                            (s.type = this.getType(s)),
                            s.type === c.GyU.INLINE_CHECKBOX
                        );
                    }
                    isEmptyType(s) {
                        return (
                            (s.type = this.getType(s)),
                            s.type === c.GyU.EMPTY_STATE
                        );
                    }
                    isDefaultType(s) {
                        return !this.isNavType(s) && !this.isSelectType(s);
                    }
                    hasAction(s) {
                        return (
                            s.actions?.length > 0 &&
                            !!s.actions[0] &&
                            Object.keys(s.actions[0]).length > 0
                        );
                    }
                    isInlineButton(s) {
                        return (
                            (s.type = this.getType(s)),
                            s.type === c.GyU.INLINE_BUTTON
                        );
                    }
                    isInlineButtonInteractive(s) {
                        return !!s.id || !!s.url || !!s.endpoint;
                    }
                    isInlineLabel(s) {
                        return (0, O.G)(c.gw3, s.style, c.gw3.INLINE_LABEL);
                    }
                    getType(s) {
                        switch ((0, O.I)(c.GyU, s.type)) {
                            case c.KzN.STANDARD:
                                return c.GyU.STANDARD;
                            case c.KzN.CHECKBOX:
                                return c.GyU.CHECKBOX;
                            case c.KzN.INLINE_CHECKBOX:
                                return c.GyU.INLINE_CHECKBOX;
                            case c.KzN.HEADING:
                                return c.GyU.HEADING;
                            case c.KzN.PAYMENT_METHOD:
                                return c.GyU.PAYMENT_METHOD;
                            case c.KzN.SWITCH_CONTROL:
                                return c.GyU.SWITCH_CONTROL;
                            case c.KzN.INLINE_BUTTON:
                                return c.GyU.INLINE_BUTTON;
                            case c.KzN.INLINE_STAR:
                                return c.GyU.INLINE_STAR;
                            case c.KzN.EMPTY_STATE:
                                return c.GyU.EMPTY_STATE;
                            default:
                                return c.GyU.UNKNOWN_TYPE;
                        }
                    }
                }
                return (
                    (u.ɵfac = function (s) {
                        return new (s || u)();
                    }),
                    (u.ɵprov = e.Yz7({
                        token: u,
                        factory: u.ɵfac,
                        providedIn: "root",
                    })),
                    u
                );
            })();
            var m = o(2157),
                _ = o(1484),
                a = o(3012),
                R = o(7822);
            function P(u, h) {
                if ((1 & u && e._UZ(0, "img", 2), 2 & u)) {
                    const s = e.oxw();
                    e.Q6J("src", s.icon.url, e.LSH);
                }
            }
            function L(u, h) {
                if (
                    (1 & u && (e.TgZ(0, "mat-icon"), e._uU(1), e.qZA()), 2 & u)
                ) {
                    e.oxw();
                    const s = e.MAs(1);
                    e.xp6(1),
                        e.Oqu(s.expanded ? "arrow_drop_up" : "arrow_drop_down");
                }
            }
            const K = function (u) {
                return { "background-color": u };
            };
            function B(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "mat-expansion-panel", 3, 4),
                        e.NdJ("closed", function () {
                            e.CHM(s);
                            const D = e.oxw();
                            return e.KtG(D.panelCollapsed.emit());
                        })("opened", function () {
                            e.CHM(s);
                            const D = e.oxw();
                            return e.KtG(D.panelExpanded.emit());
                        }),
                        e.TgZ(
                            2,
                            "mat-expansion-panel-header",
                            5
                        )(3, "mat-panel-title"),
                        e._uU(4),
                        e.qZA(),
                        e.YNc(5, L, 2, 1, "mat-icon", 6),
                        e.qZA(),
                        e.Hsn(6),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw();
                    e.ekj("transparent", s.isTransparent)(
                        "white-text",
                        s.useWhiteText
                    ),
                        e.Q6J(
                            "ngClass",
                            s.elevated ? "mat-elevation-z1" : "mat-elevation-z0"
                        )("ngStyle", e.VKq(16, K, s.backgroundColor))(
                            "expanded",
                            s.isExpanded
                        )("hideToggle", !0)("disabled", !s.isCollapsible),
                        e.xp6(2),
                        e.Q6J("collapsedHeight", s.collapsedHeight)(
                            "expandedHeight",
                            s.expandedHeight
                        )("ngStyle", e.VKq(18, K, s.backgroundColor)),
                        e.xp6(1),
                        e.ekj("uppercase", s.isTitleUppercase),
                        e.xp6(1),
                        e.Oqu(s.title),
                        e.xp6(1),
                        e.Q6J("ngIf", s.isCollapsible);
                }
            }
            const j = ["*"];
            let v = (() => {
                class u {
                    constructor() {
                        (this.isCollapsible = !0),
                            (this.collapsedHeight = "auto"),
                            (this.expandedHeight = "auto"),
                            (this.elevated = !0),
                            (this.isExpanded = !0),
                            (this.isTitleUppercase = !0),
                            (this.panelExpanded = new e.vpe()),
                            (this.panelCollapsed = new e.vpe());
                    }
                }
                return (
                    (u.ɵfac = function (s) {
                        return new (s || u)();
                    }),
                    (u.ɵcmp = e.Xpm({
                        type: u,
                        selectors: [["luno-expansion-panel"]],
                        inputs: {
                            title: "title",
                            useWhiteText: "useWhiteText",
                            isCollapsible: "isCollapsible",
                            collapsedHeight: "collapsedHeight",
                            expandedHeight: "expandedHeight",
                            icon: "icon",
                            elevated: "elevated",
                            isExpanded: "isExpanded",
                            backgroundColor: "backgroundColor",
                            isTransparent: "isTransparent",
                            isTitleUppercase: "isTitleUppercase",
                        },
                        outputs: {
                            panelExpanded: "panelExpanded",
                            panelCollapsed: "panelCollapsed",
                        },
                        ngContentSelectors: j,
                        decls: 3,
                        vars: 4,
                        consts: [
                            [3, "src", 4, "ngIf"],
                            [
                                3,
                                "ngClass",
                                "ngStyle",
                                "transparent",
                                "white-text",
                                "expanded",
                                "hideToggle",
                                "disabled",
                                "closed",
                                "opened",
                                4,
                                "ngIf",
                            ],
                            [3, "src"],
                            [
                                3,
                                "ngClass",
                                "ngStyle",
                                "expanded",
                                "hideToggle",
                                "disabled",
                                "closed",
                                "opened",
                            ],
                            ["panel", ""],
                            [3, "collapsedHeight", "expandedHeight", "ngStyle"],
                            [4, "ngIf"],
                        ],
                        template: function (s, N) {
                            1 & s &&
                                (e.F$t(),
                                e.TgZ(0, "div"),
                                e.YNc(1, P, 1, 1, "img", 0),
                                e.YNc(2, B, 7, 20, "mat-expansion-panel", 1),
                                e.qZA()),
                                2 & s &&
                                    (e.ekj("panel-container", N.icon),
                                    e.xp6(1),
                                    e.Q6J("ngIf", N.icon),
                                    e.xp6(1),
                                    e.Q6J("ngIf", N.title));
                        },
                        dependencies: [
                            E.mk,
                            E.O5,
                            E.PC,
                            a.ib,
                            a.yz,
                            a.yK,
                            R.Hw,
                        ],
                        styles: [
                            ".mat-expansion-panel[_ngcontent-%COMP%]{border-radius:0}mat-expansion-panel-header[_ngcontent-%COMP%], mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:var(--color-neutral-100)!important}.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%], mat-panel-title[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:800;line-height:1.1;font-size:14px;color:inherit;line-height:1.2;align-items:center;font-size:16px;text-align:left}.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   mat-panel-title.uppercase[_ngcontent-%COMP%], mat-panel-title.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}mat-icon[_ngcontent-%COMP%]{color:var(--color-primary)}img[_ngcontent-%COMP%]{width:24px;height:50px}.transparent.mat-expansion-panel[_ngcontent-%COMP%], .transparent[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%], .transparent[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background-color:transparent!important}.white-text[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .white-text[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%], .white-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color-neutral-0)!important}mat-panel-title[_ngcontent-%COMP%]{font-size:16px}.panel-container[_ngcontent-%COMP%]{display:flex}",
                        ],
                    })),
                    u
                );
            })();
            var y = o(2508),
                w = o(4505),
                Q = o(9151),
                ce = o(1443),
                Ne = o(2218),
                H = o(5921),
                q = o(8625),
                M = o(6942),
                z = o(3047),
                ie = o(8987);
            let De = (() => {
                class u {
                    constructor(s) {
                        (this.http = s),
                            (this.apiUrl_ = "/ajax/1/help/contextual"),
                            (this.subject = new w.X(null));
                    }
                    get(s) {
                        return this.fetch().pipe(
                            (0, z._)(),
                            (0, M.U)((N) => N.elements[s])
                        );
                    }
                    fetch() {
                        return this.subject.value
                            ? this.subject
                            : this.http
                                  .get(this.apiUrl_, {})
                                  .pipe(
                                      (0, M.U)((s) => (this.subject.next(s), s))
                                  );
                    }
                }
                return (
                    (u.ɵfac = function (s) {
                        return new (s || u)(e.LFG(ie.eN));
                    }),
                    (u.ɵprov = e.Yz7({
                        token: u,
                        factory: u.ɵfac,
                        providedIn: "root",
                    })),
                    u
                );
            })();
            var ne = o(4522),
                re = o(4792),
                we = o(3178);
            function Y(u, h) {
                if ((1 & u && e._UZ(0, "img", 6), 2 & u)) {
                    const s = e.oxw();
                    e.Q6J("src", s.headerImageUrl, e.LSH);
                }
            }
            function Z(u, h) {
                if ((1 & u && e._UZ(0, "div", 7), 2 & u)) {
                    const s = e.oxw();
                    e.Q6J("innerHTML", s.bodyHtml, e.oJD);
                }
            }
            function Ae(u, h) {
                if (
                    (1 & u &&
                        (e.TgZ(0, "div", 8)(1, "mat-checkbox", 9),
                        e._UZ(2, "p", 10),
                        e.qZA()()),
                    2 & u)
                ) {
                    const s = e.oxw();
                    e.ekj("error", s.hasAttemptedConfirm && !s.checkbox.value),
                        e.xp6(1),
                        e.Q6J("formControl", s.checkbox),
                        e.xp6(1),
                        e.Q6J("innerHTML", s.checkboxText, e.oJD);
                }
            }
            function ae(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "button", 12),
                        e.NdJ("click", function () {
                            e.CHM(s);
                            const D = e.oxw(2);
                            return e.KtG(D.dismiss(!1));
                        }),
                        e._uU(1),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(2);
                    e.uIk("cdkFocusInitial", !!s.focusSecondaryButton || null),
                        e.xp6(1),
                        e.Oqu(s.secondaryActionName);
                }
            }
            function Oe(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "a", 15),
                        e.NdJ("click", function () {
                            e.CHM(s);
                            const D = e.oxw(3);
                            return e.KtG(D.dismiss(!1));
                        }),
                        e._uU(1),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(3);
                    e.Q6J("routerLink", s.secondaryActionUrl)(
                        "queryParams",
                        s.secondaryActionUrlParams
                    ),
                        e.xp6(1),
                        e.Oqu(s.secondaryActionName);
                }
            }
            function Fe(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "a", 16),
                        e.NdJ("click", function () {
                            e.CHM(s);
                            const D = e.oxw(3);
                            return e.KtG(
                                D.dismiss(!1, !D.closeOnSecondaryButtonClick)
                            );
                        }),
                        e._uU(1),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(3);
                    e.Q6J(
                        "href",
                        s.secondaryActionUrl,
                        e.LSH
                    )(
                        "target",
                        s.shouldOpenInNewWindow(s.secondaryActionUrl)
                            ? "_blank"
                            : ""
                    ),
                        e.xp6(1),
                        e.Oqu(s.secondaryActionName);
                }
            }
            function Be(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e.YNc(1, Oe, 2, 3, "a", 13),
                        e.YNc(2, Fe, 2, 3, "a", 14),
                        e.BQk()),
                    2 & u)
                ) {
                    const s = e.oxw(2);
                    e.xp6(1),
                        e.Q6J(
                            "ngIf",
                            !s.showExternalLink(s.secondaryActionUrl)
                        ),
                        e.xp6(1),
                        e.Q6J("ngIf", s.showExternalLink(s.secondaryActionUrl));
                }
            }
            function ve(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e.YNc(1, ae, 2, 2, "button", 11),
                        e.YNc(2, Be, 3, 2, "ng-container", 5),
                        e.BQk()),
                    2 & u)
                ) {
                    const s = e.oxw();
                    e.xp6(1),
                        e.Q6J("ngIf", s.showSecondaryButton),
                        e.xp6(1),
                        e.Q6J("ngIf", s.showSecondaryLink);
                }
            }
            function he(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "button", 12),
                        e.NdJ("click", function () {
                            e.CHM(s);
                            const D = e.oxw(2);
                            return e.KtG(D.dismiss(!0));
                        }),
                        e._uU(1),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(2);
                    e.uIk("cdkFocusInitial", !s.focusSecondaryButton || null),
                        e.xp6(1),
                        e.Oqu(s.primaryActionName);
                }
            }
            function Ct(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "a", 15),
                        e.NdJ("click", function () {
                            e.CHM(s);
                            const D = e.oxw(3);
                            return e.KtG(D.dismiss(!0));
                        }),
                        e._uU(1),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(3);
                    e.Q6J("routerLink", s.primaryActionUrl)(
                        "queryParams",
                        s.primaryActionUrlParams
                    ),
                        e.xp6(1),
                        e.Oqu(s.primaryActionName);
                }
            }
            function Ge(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "a", 16),
                        e.NdJ("click", function () {
                            e.CHM(s);
                            const D = e.oxw(3);
                            return e.KtG(D.dismiss(!0));
                        }),
                        e._uU(1),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(3);
                    e.Q6J(
                        "href",
                        s.primaryActionUrl,
                        e.LSH
                    )(
                        "target",
                        s.shouldOpenInNewWindow(s.primaryActionUrl)
                            ? "_blank"
                            : ""
                    ),
                        e.xp6(1),
                        e.Oqu(s.primaryActionName);
                }
            }
            function ye(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e.YNc(1, Ct, 2, 3, "a", 13),
                        e.YNc(2, Ge, 2, 3, "a", 14),
                        e.BQk()),
                    2 & u)
                ) {
                    const s = e.oxw(2);
                    e.xp6(1),
                        e.Q6J("ngIf", !s.showExternalLink(s.primaryActionUrl)),
                        e.xp6(1),
                        e.Q6J("ngIf", s.showExternalLink(s.primaryActionUrl));
                }
            }
            function Ye(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e.YNc(1, he, 2, 2, "button", 11),
                        e.YNc(2, ye, 3, 2, "ng-container", 5),
                        e.BQk()),
                    2 & u)
                ) {
                    const s = e.oxw();
                    e.xp6(1),
                        e.Q6J("ngIf", s.showPrimaryButton),
                        e.xp6(1),
                        e.Q6J("ngIf", s.showPrimaryLink);
                }
            }
            let Tt = (() => {
                class u extends m.a {
                    constructor(s, N, D, G, be) {
                        super(N, D, G, {}),
                            (this.contextualHelpService = s),
                            (this.analyticsService = N),
                            (this.dialogRef = D),
                            (this.actionService = G),
                            (this.data = be),
                            (this.unsubscribe$ = new Ne.xQ());
                    }
                    ngOnInit() {
                        this.fetchHelpData();
                    }
                    ngOnDestroy() {
                        this.unsubscribe$.next(), this.unsubscribe$.complete();
                    }
                    fetchHelpData() {
                        this.contextualHelpService
                            .get(this.data.helpElementId)
                            .pipe((0, H.R)(this.unsubscribe$))
                            .subscribe((s) => {
                                this.setConfig(this.elementHelpToDialog(s));
                            });
                    }
                    elementHelpToDialog(s) {
                        return {
                            title: s.title || "",
                            bodyHtml: s.bodyHtml || "",
                            primaryAction: s.primaryAction,
                            secondaryAction: s.secondaryAction,
                            events: s.events,
                        };
                    }
                }
                return (
                    (u.ɵfac = function (s) {
                        return new (s || u)(
                            e.Y36(De),
                            e.Y36(I.y),
                            e.Y36(_.so),
                            e.Y36(q.c),
                            e.Y36(_.WI)
                        );
                    }),
                    (u.ɵcmp = e.Xpm({
                        type: u,
                        selectors: [["luno-contextual-help"]],
                        features: [e.qOj],
                        decls: 8,
                        vars: 6,
                        consts: [
                            [3, "src", 4, "ngIf"],
                            ["mat-dialog-title", "", 3, "innerHtml"],
                            ["class", "body", 3, "innerHTML", 4, "ngIf"],
                            [
                                "class",
                                "checkbox-container",
                                3,
                                "error",
                                4,
                                "ngIf",
                            ],
                            ["align", "end"],
                            [4, "ngIf"],
                            [3, "src"],
                            [1, "body", 3, "innerHTML"],
                            [1, "checkbox-container"],
                            ["color", "primary", 3, "formControl"],
                            [1, "checkbox-label", 3, "innerHTML"],
                            [
                                "mat-button",
                                "",
                                "color",
                                "primary",
                                3,
                                "click",
                                4,
                                "ngIf",
                            ],
                            ["mat-button", "", "color", "primary", 3, "click"],
                            [
                                "mat-button",
                                "",
                                "color",
                                "primary",
                                3,
                                "routerLink",
                                "queryParams",
                                "click",
                                4,
                                "ngIf",
                            ],
                            [
                                "mat-button",
                                "",
                                "color",
                                "primary",
                                "role",
                                "button",
                                3,
                                "href",
                                "target",
                                "click",
                                4,
                                "ngIf",
                            ],
                            [
                                "mat-button",
                                "",
                                "color",
                                "primary",
                                3,
                                "routerLink",
                                "queryParams",
                                "click",
                            ],
                            [
                                "mat-button",
                                "",
                                "color",
                                "primary",
                                "role",
                                "button",
                                3,
                                "href",
                                "target",
                                "click",
                            ],
                        ],
                        template: function (s, N) {
                            1 & s &&
                                (e.YNc(0, Y, 1, 1, "img", 0),
                                e._UZ(1, "h3", 1),
                                e.TgZ(2, "mat-dialog-content"),
                                e.YNc(3, Z, 1, 1, "div", 2),
                                e.YNc(4, Ae, 3, 4, "div", 3),
                                e.qZA(),
                                e.TgZ(5, "mat-dialog-actions", 4),
                                e.YNc(6, ve, 3, 2, "ng-container", 5),
                                e.YNc(7, Ye, 3, 2, "ng-container", 5),
                                e.qZA()),
                                2 & s &&
                                    (e.Q6J("ngIf", N.headerImageUrl),
                                    e.xp6(1),
                                    e.Q6J("innerHtml", N.titleHtml, e.oJD),
                                    e.xp6(2),
                                    e.Q6J("ngIf", N.bodyHtml),
                                    e.xp6(1),
                                    e.Q6J("ngIf", N.checkboxText),
                                    e.xp6(2),
                                    e.Q6J("ngIf", N.secondaryActionName),
                                    e.xp6(1),
                                    e.Q6J("ngIf", N.primaryActionName));
                        },
                        dependencies: [
                            E.O5,
                            ne.lW,
                            ne.zs,
                            re.oG,
                            _.uh,
                            _.xY,
                            _.H8,
                            y.JJ,
                            y.oH,
                            we.yS,
                        ],
                        styles: [
                            "h2[_ngcontent-%COMP%]{text-align:left;font-size:22px;color:var(--color-primary);font-weight:800}h2.mat-dialog-title[_ngcontent-%COMP%]{font-size:20px;line-height:1.3}.body[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:500}.body[_ngcontent-%COMP%]     a{color:#0091ff;text-decoration:none;font-weight:800}img[_ngcontent-%COMP%]{width:50px;margin:5px 0}.checkbox-container[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:8px}.checkbox-container[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]     label{white-space:normal}.checkbox-container.error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color-error)}.checkbox-container[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]{margin:0 0 0 8px;padding-top:2px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap-reverse}",
                        ],
                    })),
                    u
                );
            })();
            var ue = o(4210),
                Et = o(4878),
                Pe = o(2815),
                It = o(5095),
                ct = o(6708),
                Me = o(6517),
                ft = o(207),
                St = o(1528),
                He = o(8589),
                lt = o(2598),
                ke = o(1708),
                Xe = o(4139),
                Nt = o(9170),
                At = o(6439),
                qe = o(2692),
                Ot = o(9095),
                Ce = o(7418),
                et = o(4714);
            const tt = ["lunoToggle"],
                vt = ["*"];
            let Ke = (() => {
                class u {
                    constructor(s, N) {
                        (this.resolver = s),
                            (this.changeDetectorRef = N),
                            (this.action = () => (0, Xe.of)(null)),
                            (this.destroyComponent$ = new Nt.t(1)),
                            (this.changeEvent = (D) => {}),
                            (this.touchEvent = () => {});
                    }
                    ngOnInit() {
                        (this.toggleControl = new y.p4(
                            !(!this.config || !this.config.value) &&
                                this.config.value
                        )),
                            this.toggleControl.valueChanges
                                .pipe(
                                    (0, H.R)(this.destroyComponent$),
                                    (0, qe.b)(() => {
                                        this.actionStarted();
                                    }),
                                    (0, Ot.w)((N) =>
                                        this.action(N).pipe(
                                            (0, qe.b)(() => {
                                                this.actionCompleted();
                                            }),
                                            (0, Ce.K)(
                                                () => (
                                                    this.actionFailed(), At.E
                                                )
                                            )
                                        )
                                    )
                                )
                                .subscribe();
                    }
                    ngOnDestroy() {
                        this.destroyComponent$.next(),
                            this.destroyComponent$.unsubscribe();
                    }
                    registerOnChange(s) {
                        this.changeEvent = s;
                    }
                    registerOnTouched(s) {
                        this.touchEvent = s;
                    }
                    writeValue(s) {
                        return this.setToggleControlValue(s);
                    }
                    setDisabledState(s) {
                        return s
                            ? this.disableToggleControl()
                            : this.enableToggleControl();
                    }
                    disableToggleControl() {
                        this.toggleControl.disable({ emitEvent: !1 });
                    }
                    enableToggleControl() {
                        this.toggleControl.enable({ emitEvent: !1 });
                    }
                    setToggleControlValue(s) {
                        this.toggleControl.setValue(s, { emitEvent: !1 });
                    }
                    actionStarted() {
                        this.disableToggleControl(), this.addSpinner();
                    }
                    actionCompleted() {
                        this.changeEvent(this.toggleControl.value),
                            this.enableToggleControl(),
                            this.removeSpinner();
                    }
                    actionFailed() {
                        this.setToggleControlValue(!this.toggleControl.value),
                            this.enableToggleControl(),
                            this.removeSpinner();
                    }
                    addSpinner() {
                        if (this.toggleEl)
                            try {
                                const s = this.toggleEl._elementRef
                                    .nativeElement.children[0].children[0]
                                    .children[1].children[0];
                                this.removeChild(s.children[0]),
                                    s.appendChild(
                                        this.createMatSpinnerComponent()
                                    ),
                                    this.changeDetectorRef.detectChanges();
                            } catch (s) {
                                console.error(s);
                            }
                    }
                    removeSpinner() {
                        if (this.toggleEl)
                            try {
                                this.removeChild(
                                    this.toggleEl._elementRef.nativeElement
                                        .children[0].children[0].children[1]
                                        .children[0].children[0]
                                );
                            } catch (s) {
                                console.error(s);
                            }
                    }
                    removeChild(s) {
                        s &&
                            (s.remove(),
                            this.changeDetectorRef.detectChanges());
                    }
                    createMatSpinnerComponent() {
                        const s = this.resolver.resolveComponentFactory(ke.$g),
                            N = this.entry.createComponent(s).instance;
                        return (
                            (N.diameter = 18),
                            (N.color = "primary"),
                            N._elementRef.nativeElement
                        );
                    }
                }
                return (
                    (u.ɵfac = function (s) {
                        return new (s || u)(e.Y36(e._Vd), e.Y36(e.sBO));
                    }),
                    (u.ɵcmp = e.Xpm({
                        type: u,
                        selectors: [["luno-toggle"]],
                        viewQuery: function (s, N) {
                            if (
                                (1 & s && (e.Gf(tt, 5), e.Gf(tt, 5, e.s_b)),
                                2 & s)
                            ) {
                                let D;
                                e.iGM((D = e.CRH())) && (N.toggleEl = D.first),
                                    e.iGM((D = e.CRH())) && (N.entry = D.first);
                            }
                        },
                        inputs: { config: "config", action: "action" },
                        features: [
                            e._Bn([
                                {
                                    provide: y.JU,
                                    useExisting: (0, e.Gpc)(() => u),
                                    multi: !0,
                                },
                            ]),
                        ],
                        ngContentSelectors: vt,
                        decls: 3,
                        vars: 1,
                        consts: [
                            ["color", "primary", 3, "formControl", "blur"],
                            ["lunoToggle", ""],
                        ],
                        template: function (s, N) {
                            1 & s &&
                                (e.F$t(),
                                e.TgZ(0, "mat-slide-toggle", 0, 1),
                                e.NdJ("blur", function () {
                                    return N.touchEvent();
                                }),
                                e.Hsn(2),
                                e.qZA()),
                                2 & s && e.Q6J("formControl", N.toggleControl);
                        },
                        dependencies: [et.Rr, y.JJ, y.oH],
                        styles: [
                            ".mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{box-sizing:border-box}  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#0091ff66;box-sizing:border-box}  .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#0000001a;box-sizing:border-box}  .mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb{background-color:var(--color-neutral-0);box-sizing:border-box;display:flex;align-items:center;justify-content:center}  .luno-toggle-mat-icon{font-size:20px;line-height:20px;color:var(--color-neutral-0)}",
                        ],
                    })),
                    u
                );
            })();
            function yt(u, h) {
                1 & u && e.GkF(0);
            }
            function nt(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e.YNc(1, yt, 1, 0, "ng-container", 8),
                        e.BQk()),
                    2 & u)
                ) {
                    e.oxw();
                    const s = e.MAs(6);
                    e.xp6(1), e.Q6J("ngTemplateOutlet", s);
                }
            }
            function Pt(u, h) {
                1 & u && e.GkF(0);
            }
            function xt(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "luno-hyperlink", 11),
                        e.NdJ("blur", function () {
                            e.CHM(s);
                            const D = e.oxw(2);
                            return e.KtG(D.touchEvent());
                        }),
                        e.YNc(1, Pt, 1, 0, "ng-container", 8),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(2),
                        N = e.MAs(4);
                    e.Q6J("action", s.listItem.actions[0]),
                        e.xp6(1),
                        e.Q6J("ngTemplateOutlet", N);
                }
            }
            function Kt(u, h) {
                1 & u && e.GkF(0);
            }
            function xe(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e.YNc(1, Kt, 1, 0, "ng-container", 8),
                        e.BQk()),
                    2 & u)
                ) {
                    e.oxw(2);
                    const s = e.MAs(4);
                    e.xp6(1), e.Q6J("ngTemplateOutlet", s);
                }
            }
            function Rt(u, h) {
                if (
                    (1 & u &&
                        (e.YNc(0, xt, 2, 2, "luno-hyperlink", 9),
                        e.YNc(1, xe, 2, 1, "ng-container", 10)),
                    2 & u)
                ) {
                    const s = e.oxw();
                    e.Q6J("ngIf", s.isNavType),
                        e.xp6(1),
                        e.Q6J("ngIf", !s.isNavType);
                }
            }
            function Ve(u, h) {
                if ((1 & u && e._UZ(0, "picture", 28), 2 & u)) {
                    const s = e.oxw(3);
                    e.Q6J("lunoBadge", s.listItem.badge)(
                        "imgHeight",
                        (s.leftIcon.height || "40") + "px"
                    )("imgWidth", (s.leftIcon.width || "40") + "px")(
                        "imageTypes",
                        s.leftImageType
                    )("srcUrl", s.leftIcon.url)("fallbackSrc", s.leftIcon.url);
                }
            }
            function f(u, h) {
                1 & u && e.GkF(0);
            }
            function F(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e.YNc(1, f, 1, 0, "ng-container", 8),
                        e.BQk()),
                    2 & u)
                ) {
                    e.oxw(4);
                    const s = e.MAs(8);
                    e.xp6(1), e.Q6J("ngTemplateOutlet", s);
                }
            }
            function S(u, h) {
                if (
                    (1 & u &&
                        (e.TgZ(0, "p", 29),
                        e._uU(1),
                        e.YNc(2, F, 2, 1, "ng-container", 10),
                        e.qZA()),
                    2 & u)
                ) {
                    const s = e.oxw(3);
                    e.xp6(1),
                        e.hij(" ", s.listItem.overlineLabel, " "),
                        e.xp6(1),
                        e.Q6J("ngIf", !s.listItem.label);
                }
            }
            function k(u, h) {
                if ((1 & u && e._UZ(0, "h3", 30), 2 & u)) {
                    const s = e.oxw(3);
                    e.Q6J("innerHtml", s.listItem.labelHtml, e.oJD);
                }
            }
            function X(u, h) {
                1 & u && e.GkF(0);
            }
            function ee(u, h) {
                if (
                    (1 & u &&
                        (e.TgZ(0, "h3", 32),
                        e._uU(1),
                        e.YNc(2, X, 1, 0, "ng-container", 8),
                        e.qZA()),
                    2 & u)
                ) {
                    const s = e.oxw(4),
                        N = e.MAs(8);
                    e.Udp(
                        "color",
                        null == s.listItem ? null : s.listItem.labelColour
                    ),
                        e.xp6(1),
                        e.hij(" ", s.listItem.label, " "),
                        e.xp6(1),
                        e.Q6J("ngTemplateOutlet", N);
                }
            }
            function cn(u, h) {
                if ((1 & u && e.YNc(0, ee, 3, 4, "h3", 31), 2 & u)) {
                    const s = e.oxw(3);
                    e.Q6J("ngIf", s.listItem.label);
                }
            }
            function ln(u, h) {
                if ((1 & u && (e.TgZ(0, "p", 33), e._uU(1), e.qZA()), 2 & u)) {
                    const s = e.oxw(3);
                    e.Udp(
                        "color",
                        null == s.listItem ? null : s.listItem.subLabelColour
                    ),
                        e.xp6(1),
                        e.Oqu(s.listItem.subLabel);
                }
            }
            function un(u, h) {
                if ((1 & u && e._UZ(0, "p", 34), 2 & u)) {
                    const s = e.oxw(3);
                    e.Udp(
                        "color",
                        null == s.listItem ? null : s.listItem.valueColour
                    ),
                        e.Q6J("innerHTML", s.listItem.value, e.oJD);
                }
            }
            function _n(u, h) {
                if (
                    (1 & u && (e.TgZ(0, "aside", 35), e._uU(1), e.qZA()), 2 & u)
                ) {
                    const s = e.oxw(3);
                    e.xp6(1), e.hij(" ", s.listItem.caption, " ");
                }
            }
            function pn(u, h) {
                if ((1 & u && e._UZ(0, "luno-toggle", 36), 2 & u)) {
                    const s = e.oxw(3);
                    e.Q6J("config", s.toggleConfig)(
                        "formControl",
                        s.toggleControl
                    );
                }
            }
            function mn(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "luno-hyperlink", 37),
                        e.NdJ("clicked", function (D) {
                            e.CHM(s);
                            const G = e.oxw(3);
                            return e.KtG(G.listItemInlineButtonClicked(D));
                        }),
                        e.TgZ(1, "div", 38),
                        e.NdJ("mousedown", function (D) {
                            e.CHM(s);
                            const G = e.oxw(3);
                            return e.KtG(
                                G.preventRipple(D, G.isInlineButtonInteractive)
                            );
                        }),
                        e._uU(2),
                        e.qZA()();
                }
                if (2 & u) {
                    const s = e.oxw(3);
                    e.Q6J("action", s.listItem.actions[1]),
                        e.xp6(1),
                        e.ekj("interactive", s.isInlineButtonInteractive),
                        e.xp6(1),
                        e.hij(" ", s.inlineButtonText, " ");
                }
            }
            function dn(u, h) {
                1 & u && e.GkF(0);
            }
            function Vt(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e.YNc(1, dn, 1, 0, "ng-container", 8),
                        e.BQk()),
                    2 & u)
                ) {
                    e.oxw(3);
                    const s = e.MAs(10);
                    e.xp6(1), e.Q6J("ngTemplateOutlet", s);
                }
            }
            function gn(u, h) {
                if (
                    (1 & u && (e.TgZ(0, "div", 39), e._uU(1), e.qZA()), 2 & u)
                ) {
                    const s = e.oxw(3);
                    e.xp6(1), e.hij(" ", s.inlineButtonText, " ");
                }
            }
            const Zt = function (u, h) {
                return { height: u, width: h };
            };
            function hn(u, h) {
                if ((1 & u && e._UZ(0, "img", 40), 2 & u)) {
                    const s = e.oxw(3);
                    e.Q6J(
                        "src",
                        null == s.rightIcon ? null : s.rightIcon.url,
                        e.LSH
                    )(
                        "ngStyle",
                        e.WLB(
                            2,
                            Zt,
                            ((null == s.rightIcon
                                ? null
                                : s.rightIcon.height) || "16") + "px",
                            ((null == s.rightIcon ? null : s.rightIcon.width) ||
                                "16") + "px"
                        )
                    );
                }
            }
            function Cn(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.ynx(0),
                        e.TgZ(1, "div", 41)(2, "luno-animated-button", 42),
                        e.NdJ("click", function (D) {
                            e.CHM(s);
                            const G = e.oxw(3);
                            return e.KtG(G.inlineStarButtonClicked(D));
                        }),
                        e.qZA()(),
                        e.BQk();
                }
                if (2 & u) {
                    const s = e.oxw(3);
                    e.xp6(2),
                        e.Q6J("animatedButtonConfig", s.starAnimatedButton)(
                            "toggleValue",
                            s.listItem.isStarred
                        );
                }
            }
            function ot(u, h) {
                1 & u && e._UZ(0, "mat-divider", 43);
            }
            function Tn(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "mat-list-item", 14),
                        e.NdJ("click", function () {
                            e.CHM(s);
                            const D = e.oxw(2);
                            return e.KtG(D.listItemClicked());
                        }),
                        e.YNc(1, Ve, 1, 6, "picture", 15),
                        e.YNc(2, S, 3, 2, "p", 16),
                        e.YNc(3, k, 1, 1, "h3", 17),
                        e.YNc(4, cn, 1, 1, "ng-template", null, 18, e.W1O),
                        e.YNc(6, ln, 2, 3, "p", 19),
                        e.YNc(7, un, 1, 3, "p", 20),
                        e.YNc(8, _n, 2, 1, "aside", 21),
                        e.TgZ(9, "div", 22),
                        e.YNc(10, pn, 1, 2, "luno-toggle", 23),
                        e.YNc(11, mn, 3, 4, "luno-hyperlink", 24),
                        e.YNc(12, Vt, 2, 1, "ng-container", 10),
                        e.ALo(13, "async"),
                        e.YNc(14, gn, 2, 1, "div", 25),
                        e.YNc(15, hn, 1, 5, "img", 26),
                        e.YNc(16, Cn, 3, 2, "ng-container", 10),
                        e.qZA(),
                        e.YNc(17, ot, 1, 0, "mat-divider", 27),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.MAs(5),
                        N = e.oxw(2);
                    e.Udp(
                        "background-color",
                        null == N.listItem ? null : N.listItem.backgroundColour
                    ),
                        e.ekj("rounded", N.isRounded),
                        e.xp6(1),
                        e.Q6J("ngIf", N.leftIcon),
                        e.xp6(1),
                        e.Q6J("ngIf", N.listItem.overlineLabel),
                        e.xp6(1),
                        e.Q6J("ngIf", N.listItem.labelHtml)("ngIfElse", s),
                        e.xp6(3),
                        e.Q6J("ngIf", N.listItem.subLabel),
                        e.xp6(1),
                        e.Q6J("ngIf", N.listItem.value),
                        e.xp6(1),
                        e.Q6J("ngIf", N.listItem.caption && N.displayCaption),
                        e.xp6(2),
                        e.Q6J(
                            "ngIf",
                            N.listItem.type === N.listItemType.SWITCH_CONTROL
                        ),
                        e.xp6(1),
                        e.Q6J("ngIf", N.displayInLineButton),
                        e.xp6(1),
                        e.Q6J("ngIf", e.lcZ(13, 18, N.displayOverflowMenu$)),
                        e.xp6(2),
                        e.Q6J("ngIf", N.isInlineLabel),
                        e.xp6(1),
                        e.Q6J("ngIf", N.rightIcon),
                        e.xp6(1),
                        e.Q6J("ngIf", N.isInlineStarType),
                        e.xp6(1),
                        e.Q6J("ngIf", N.showDivider);
                }
            }
            function Te(u, h) {
                if ((1 & u && e._UZ(0, "picture", 49), 2 & u)) {
                    const s = e.oxw(3);
                    e.Q6J("imgHeight", (s.leftIcon.height || "40") + "px")(
                        "imgWidth",
                        (s.leftIcon.width || "40") + "px"
                    )("imageTypes", s.leftImageType)("srcUrl", s.leftIcon.url)(
                        "fallbackSrc",
                        s.leftIcon.url
                    )("lunoBadge", s.listItem.badge);
                }
            }
            function it(u, h) {
                if ((1 & u && (e.TgZ(0, "p", 29), e._uU(1), e.qZA()), 2 & u)) {
                    const s = e.oxw(3);
                    e.xp6(1), e.Oqu(s.listItem.overlineLabel);
                }
            }
            function En(u, h) {
                1 & u && e.GkF(0);
            }
            function Lt(u, h) {
                if (
                    (1 & u &&
                        (e.TgZ(0, "h3", 50),
                        e._uU(1),
                        e.YNc(2, En, 1, 0, "ng-container", 8),
                        e.qZA()),
                    2 & u)
                ) {
                    const s = e.oxw(3),
                        N = e.MAs(8);
                    e.xp6(1),
                        e.hij(" ", s.listItem.label, " "),
                        e.xp6(1),
                        e.Q6J("ngTemplateOutlet", N);
                }
            }
            function _e(u, h) {
                if ((1 & u && (e.TgZ(0, "p", 33), e._uU(1), e.qZA()), 2 & u)) {
                    const s = e.oxw(3);
                    e.xp6(1), e.Oqu(s.listItem.subLabel);
                }
            }
            function at(u, h) {
                if ((1 & u && (e.TgZ(0, "p", 51), e._uU(1), e.qZA()), 2 & u)) {
                    const s = e.oxw(3);
                    e.xp6(1), e.Oqu(s.listItem.value);
                }
            }
            function In(u, h) {
                1 & u && e._UZ(0, "mat-divider", 43);
            }
            function Dt(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "mat-list-option", 44),
                        e.NdJ("selectedChange", function (D) {
                            e.CHM(s);
                            const G = e.oxw(2);
                            return e.KtG(G.changeEvent(D));
                        }),
                        e.YNc(1, Te, 1, 6, "picture", 45),
                        e.YNc(2, it, 2, 1, "p", 16),
                        e.YNc(3, Lt, 3, 2, "h3", 46),
                        e.YNc(4, _e, 2, 1, "p", 47),
                        e.YNc(5, at, 2, 1, "p", 48),
                        e.YNc(6, In, 1, 0, "mat-divider", 27),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(2);
                    e.Q6J("checkboxPosition", s.checkBoxPosition)(
                        "selected",
                        s.selected
                    )("value", s.listItem.value),
                        e.xp6(1),
                        e.Q6J("ngIf", s.leftIcon),
                        e.xp6(1),
                        e.Q6J("ngIf", s.listItem.overlineLabel),
                        e.xp6(1),
                        e.Q6J("ngIf", s.listItem.label),
                        e.xp6(1),
                        e.Q6J("ngIf", s.listItem.subLabel),
                        e.xp6(1),
                        e.Q6J("ngIf", s.listItem.value),
                        e.xp6(1),
                        e.Q6J("ngIf", s.showDivider);
                }
            }
            function Mt(u, h) {
                if (
                    (1 & u &&
                        (e.YNc(0, Tn, 18, 20, "mat-list-item", 12),
                        e.YNc(1, Dt, 7, 9, "mat-list-option", 13)),
                    2 & u)
                ) {
                    const s = e.oxw();
                    e.Q6J("ngIf", !s.isSelectType),
                        e.xp6(1),
                        e.Q6J("ngIf", s.isSelectType);
                }
            }
            function Jt(u, h) {
                if ((1 & u && e._UZ(0, "img", 54), 2 & u)) {
                    const s = e.oxw(2);
                    e.Q6J(
                        "ngStyle",
                        e.WLB(
                            2,
                            Zt,
                            (null == s.emptyStateIcon
                                ? null
                                : s.emptyStateIcon.height) + "px",
                            (null == s.emptyStateIcon
                                ? null
                                : s.emptyStateIcon.width) + "px"
                        )
                    )(
                        "src",
                        null == s.emptyStateIcon ? null : s.emptyStateIcon.url,
                        e.LSH
                    );
                }
            }
            function Ut(u, h) {
                if (
                    (1 & u &&
                        (e.TgZ(0, "mat-list-item")(1, "div", 52),
                        e.YNc(2, Jt, 1, 5, "img", 53),
                        e.TgZ(3, "p"),
                        e._uU(4),
                        e.qZA()()()),
                    2 & u)
                ) {
                    const s = e.oxw();
                    e.xp6(2),
                        e.Q6J(
                            "ngIf",
                            null == s.emptyStateIcon
                                ? null
                                : s.emptyStateIcon.url
                        ),
                        e.xp6(2),
                        e.Oqu(s.listItem.label);
                }
            }
            function rt(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "mat-icon", 56),
                        e.NdJ("click", function (D) {
                            e.CHM(s);
                            const G = e.oxw(2);
                            return e.KtG(
                                G.onContextualIconClicked(
                                    D,
                                    G.listItem.helpElementId
                                )
                            );
                        }),
                        e._uU(1),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(2);
                    e.xp6(1),
                        e.hij(
                            " ",
                            s.isContextualInfoIcon ? "info" : "help",
                            " "
                        );
                }
            }
            function d(u, h) {
                if ((1 & u && e.YNc(0, rt, 2, 1, "mat-icon", 55), 2 & u)) {
                    const s = e.oxw();
                    e.Q6J("ngIf", s.displayContextualIcon);
                }
            }
            function pe(u, h) {
                if (
                    (1 & u &&
                        (e.TgZ(0, "button", 57),
                        e.NdJ("click", function (N) {
                            return N.stopPropagation();
                        }),
                        e.TgZ(1, "mat-icon"),
                        e._uU(2, "more_vert"),
                        e.qZA()()),
                    2 & u)
                ) {
                    e.oxw();
                    const s = e.MAs(12);
                    e.Q6J("matMenuTriggerFor", s);
                }
            }
            function bt(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "button", 59),
                        e.NdJ("click", function () {
                            const G = e.CHM(s).$implicit,
                                be = e.oxw(2);
                            return e.KtG(be.overflowMenuItemClicked(G));
                        }),
                        e.TgZ(1, "span"),
                        e._uU(2),
                        e.qZA()();
                }
                if (2 & u) {
                    const s = h.$implicit;
                    e.xp6(2), e.Oqu(s.name);
                }
            }
            function $t(u, h) {
                if ((1 & u && e.YNc(0, bt, 3, 1, "button", 58), 2 & u)) {
                    const s = e.oxw();
                    e.Q6J("ngForOf", s.listItem.menuActions);
                }
            }
            class Ue {
                constructor(h, s, N, D, G) {
                    (this.actionService = h),
                        (this.analyticsService = s),
                        (this.listService = N),
                        (this.dialog = D),
                        (this.commonInfoService = G),
                        (this.selected = !1),
                        (this.hideLinkIcon = !1),
                        (this.showDivider = !1),
                        (this.itemClicked = new e.vpe()),
                        (this.inlineItemClicked = new e.vpe()),
                        (this.itemToggled = new e.vpe()),
                        (this.inlineStarClicked = new e.vpe()),
                        (this.displayOverflowMenu$ = new w.X(!1)),
                        (this.isRounded = !1),
                        (this.listItemType = c.GyU),
                        (this.checkBoxPosition = "before"),
                        (this.starAnimatedButton = {
                            animations: [
                                {
                                    renderer: "svg",
                                    autoplay: !1,
                                    loop: !1,
                                    path: `${this.commonInfoService.staticAssetsUrl}/web/luno_v3/animations/coin_unfollow_v1.json`,
                                },
                                {
                                    renderer: "svg",
                                    autoplay: !1,
                                    loop: !1,
                                    path: `${this.commonInfoService.staticAssetsUrl}/web/luno_v3/animations/coin_follow_star_v2.json`,
                                },
                            ],
                            type: ce.n.TOGGLE,
                        }),
                        (this.changeEvent = (be) => {}),
                        (this.touchEvent = () => {});
                }
                get leftIcon() {
                    return this.getIcon(0);
                }
                get rightIcon() {
                    return this.getIcon(1);
                }
                get emptyStateIcon() {
                    return this.getIcon(0);
                }
                get iconType() {
                    return this.listService.isNavType(this.listItem)
                        ? "arrow_forward"
                        : null;
                }
                get displayCaption() {
                    return (
                        this.listItem.type === c.GyU.STANDARD &&
                        (!this.rightIcon || this.hideLinkIcon)
                    );
                }
                get displayInLineButton() {
                    return (
                        this.listService.isInlineButton(this.listItem) &&
                        2 === this.listItem?.actions?.length &&
                        !this.isInlineLabel
                    );
                }
                get displayContextualIcon() {
                    return (
                        this.listItem.helpElementId > 0 ||
                        this.isInlineStarType ||
                        Object.keys(this.listItem.actions?.[2] || {}).length > 0
                    );
                }
                get isContextualInfoIcon() {
                    return !(
                        !this.listItem.actions ||
                        !(0, O.G)(
                            c.gw3,
                            c.gw3.INFO_ICON,
                            this.listItem.actions[2]?.style
                        )
                    );
                }
                get isNavType() {
                    return this.listService.isNavType(this.listItem);
                }
                get isSelectType() {
                    return this.listService.isSelectType(this.listItem);
                }
                get isEmptyType() {
                    return this.listService.isEmptyType(this.listItem);
                }
                get isInlineStarType() {
                    return (0, O.G)(
                        c.GyU,
                        c.GyU.INLINE_STAR,
                        this.listItem.type
                    );
                }
                get isInlineButtonType() {
                    return (0, O.G)(
                        c.GyU,
                        c.GyU.INLINE_BUTTON,
                        this.listItem.type
                    );
                }
                get inlineButtonText() {
                    return (this.listItem?.actions ?? [])[1]?.name || "";
                }
                get isInlineButtonInteractive() {
                    return (
                        !this.isInlineLabel &&
                        !(
                            !this.inlineItemAction ||
                            !this.listService.isInlineButtonInteractive(
                                this.inlineItemAction
                            )
                        )
                    );
                }
                get isInlineLabel() {
                    return (
                        !!this.inlineItemAction &&
                        this.listService.isInlineLabel(this.inlineItemAction)
                    );
                }
                get leftImageType() {
                    return [ue.X.PNG, ue.X.SVG];
                }
                ngOnInit() {
                    !this.listItem ||
                        (this.processLinkUrl(),
                        this.buildToggleControl(),
                        this.listItem.actions &&
                            ((this.listItemAction = this.listItem.actions[0]),
                            (this.inlineItemAction = this.listItem.actions[1])));
                }
                onListItemChange(h) {
                    this.ngOnInit(),
                        (this.isRounded =
                            !!h?.backgroundColour &&
                            h.type === c.GyU.PAYMENT_METHOD),
                        (this.checkBoxPosition = this.listService.isInlineCheckboxType(
                            this.listItem
                        )
                            ? "after"
                            : "before"),
                        this.displayOverflowMenu$.next(
                            h.menuActions?.length > 0
                        );
                }
                listItemClicked() {
                    if (this.listItemAction) {
                        if (
                            this.listItem?.dialog &&
                            (0, O.G)(
                                c.Ta6,
                                this.listItemAction.type,
                                c.Ta6.DIALOG
                            )
                        )
                            return void this.processListItemDialog();
                        this.itemClicked.emit(this.listItemAction);
                    }
                }
                overflowMenuItemClicked(h) {
                    const { dialog: s } = h;
                    s &&
                        this.dialog
                            .open(m.a, { data: s, maxWidth: "540px" })
                            .afterClosed()
                            .pipe((0, Q.h)((D) => D))
                            .subscribe(() => {
                                const D = s?.primaryAction;
                                this.inlineItemClicked.emit(D),
                                    this.analyticsService.logEvent(D?.event);
                            });
                }
                listItemInlineButtonClicked(h) {
                    h.stopPropagation(),
                        this.inlineItemAction
                            ? this.listItem?.dialog
                                ? this.processListItemDialog()
                                : this.inlineItemClicked.emit(
                                      this.inlineItemAction
                                  )
                            : this.listItemClicked();
                }
                inlineStarButtonClicked(h) {
                    h.stopPropagation(),
                        this.inlineStarClicked.emit(this.listItem.actions[1]);
                }
                preventRipple(h, s = !0) {
                    s && h.stopPropagation();
                }
                writeValue(h) {
                    this.toggleControl?.setValue(h, { emitEvent: !1 }),
                        (this.selected = h);
                }
                registerOnChange(h) {
                    this.changeEvent = h;
                }
                registerOnTouched(h) {
                    this.touchEvent = h;
                }
                processListItemDialog() {
                    this.listItem?.dialog &&
                        this.dialog
                            .open(m.a, {
                                data: this.listItem.dialog,
                                maxWidth: "540px",
                            })
                            .afterClosed()
                            .subscribe((s) => {
                                this.onInlineItemDialogClose(s);
                            });
                }
                onInlineItemDialogClose(h) {
                    if (!h || this.isInlineStarType) return;
                    const s = this.createPrimaryDialogAction(
                        this.listItem.dialog
                    );
                    this.analyticsService.logEvent(
                        this.inlineItemAction?.event
                    ),
                        s
                            ? (this.analyticsService.logEvent(s?.event),
                              this.inlineItemClicked.emit(s))
                            : this.inlineItemClicked.emit(
                                  this.inlineItemAction
                              );
                }
                createPrimaryDialogAction(h) {
                    return h?.primaryAction?.id
                        ? this.createActionFromDialogAction(h.primaryAction)
                        : null;
                }
                createActionFromDialogAction(h) {
                    const { id: s, name: N, event: D, url: G } = h;
                    return { id: s, name: N, event: D, url: G };
                }
                onContextualIconClicked(h, s) {
                    if (
                        (h.stopPropagation(),
                        h.preventDefault(),
                        this.listItem?.actions?.length > 2 &&
                            (0, O.G)(
                                c.gw3,
                                c.gw3.INFO_ICON,
                                this.listItem.actions[2].style
                            ))
                    )
                        return (
                            this.analyticsService.logEvent(
                                this.listItem.actions[2].event
                            ),
                            void this.processListItemDialog()
                        );
                    !s || this.openContextualHelpDialog(s);
                }
                openContextualHelpDialog(h) {
                    this.dialog.open(Tt, { data: { helpElementId: h } });
                }
                buildToggleControl() {
                    !this.toggleConfig ||
                        ((this.toggleControl = new y.p4(
                            this.toggleConfig.value
                        )),
                        this.toggleControl.valueChanges.subscribe((h) => {
                            this.itemToggled.emit(h), this.changeEvent(h);
                        }));
                }
                getIcon(h) {
                    return this.listItem.icons &&
                        this.listItem.icons.length &&
                        this.listItem.icons[h] &&
                        this.listItem.icons[h].url
                        ? this.listItem.icons[h]
                        : null;
                }
                processLinkUrl() {
                    this.listService.isNavType(this.listItem) &&
                        ((this.listItem.actions[0].url = this.actionService.getUrl(
                            this.listItem.actions[0].url
                        )),
                        (this.url = this.listItem.actions[0].url));
                }
            }
            (Ue.ɵfac = function (h) {
                return new (h || Ue)(
                    e.Y36(q.c),
                    e.Y36(I.y),
                    e.Y36(T),
                    e.Y36(_.uw),
                    e.Y36(Et.E)
                );
            }),
                (Ue.ɵcmp = e.Xpm({
                    type: Ue,
                    selectors: [["luno-list-item"]],
                    inputs: {
                        listItem: "listItem",
                        toggleConfig: "toggleConfig",
                        selected: "selected",
                        hideLinkIcon: "hideLinkIcon",
                        showDivider: "showDivider",
                    },
                    outputs: {
                        itemClicked: "itemClicked",
                        inlineItemClicked: "inlineItemClicked",
                        itemToggled: "itemToggled",
                        inlineStarClicked: "inlineStarClicked",
                    },
                    features: [
                        e._Bn([
                            {
                                provide: y.JU,
                                useExisting: (0, e.Gpc)(() => Ue),
                                multi: !0,
                            },
                        ]),
                    ],
                    decls: 14,
                    vars: 2,
                    consts: [
                        [4, "ngIf", "ngIfElse"],
                        ["isNotEmptyType", ""],
                        ["contentTemplate", ""],
                        ["emptyStateTemplate", ""],
                        ["contextualIcon", ""],
                        ["overflowMenuIcon", ""],
                        ["overflowActionsMenu", "matMenu"],
                        ["matMenuContent", ""],
                        [4, "ngTemplateOutlet"],
                        [3, "action", "blur", 4, "ngIf"],
                        [4, "ngIf"],
                        [3, "action", "blur"],
                        [3, "background-color", "rounded", "click", 4, "ngIf"],
                        [
                            3,
                            "checkboxPosition",
                            "selected",
                            "value",
                            "selectedChange",
                            4,
                            "ngIf",
                        ],
                        [3, "click"],
                        [
                            "luno-picture",
                            "",
                            "matListAvatar",
                            "",
                            3,
                            "lunoBadge",
                            "imgHeight",
                            "imgWidth",
                            "imageTypes",
                            "srcUrl",
                            "fallbackSrc",
                            4,
                            "ngIf",
                        ],
                        ["matLine", "", "class", "overline", 4, "ngIf"],
                        [
                            "matLine",
                            "",
                            "class",
                            "subtitle label-html",
                            3,
                            "innerHtml",
                            4,
                            "ngIf",
                            "ngIfElse",
                        ],
                        ["label", ""],
                        [
                            "matLine",
                            "",
                            "class",
                            "sublabel",
                            3,
                            "color",
                            4,
                            "ngIf",
                        ],
                        [
                            "matLine",
                            "",
                            "class",
                            "base",
                            3,
                            "color",
                            "innerHTML",
                            4,
                            "ngIf",
                        ],
                        ["matSuffix", "", "class", "caption", 4, "ngIf"],
                        [1, "right-items"],
                        [
                            "matSuffix",
                            "",
                            3,
                            "config",
                            "formControl",
                            4,
                            "ngIf",
                        ],
                        [3, "action", "clicked", 4, "ngIf"],
                        ["class", "inline-label", "matSuffix", "", 4, "ngIf"],
                        [
                            "class",
                            "right-icon",
                            "matSuffix",
                            "",
                            3,
                            "src",
                            "ngStyle",
                            4,
                            "ngIf",
                        ],
                        ["inset", "true", 4, "ngIf"],
                        [
                            "luno-picture",
                            "",
                            "matListAvatar",
                            "",
                            3,
                            "lunoBadge",
                            "imgHeight",
                            "imgWidth",
                            "imageTypes",
                            "srcUrl",
                            "fallbackSrc",
                        ],
                        ["matLine", "", 1, "overline"],
                        [
                            "matLine",
                            "",
                            1,
                            "subtitle",
                            "label-html",
                            3,
                            "innerHtml",
                        ],
                        [
                            "matLine",
                            "",
                            "class",
                            "subtitle",
                            3,
                            "color",
                            4,
                            "ngIf",
                        ],
                        ["matLine", "", 1, "subtitle"],
                        ["matLine", "", 1, "sublabel"],
                        ["matLine", "", 1, "base", 3, "innerHTML"],
                        ["matSuffix", "", 1, "caption"],
                        ["matSuffix", "", 3, "config", "formControl"],
                        [3, "action", "clicked"],
                        ["matSuffix", "", 1, "inline-button", 3, "mousedown"],
                        ["matSuffix", "", 1, "inline-label"],
                        ["matSuffix", "", 1, "right-icon", 3, "src", "ngStyle"],
                        [1, "inline-star"],
                        [3, "animatedButtonConfig", "toggleValue", "click"],
                        ["inset", "true"],
                        [
                            3,
                            "checkboxPosition",
                            "selected",
                            "value",
                            "selectedChange",
                        ],
                        [
                            "luno-picture",
                            "",
                            "matListAvatar",
                            "",
                            3,
                            "imgHeight",
                            "imgWidth",
                            "imageTypes",
                            "srcUrl",
                            "fallbackSrc",
                            "lunoBadge",
                            4,
                            "ngIf",
                        ],
                        [
                            "matLine",
                            "",
                            "class",
                            "subtitle with-checkbox",
                            4,
                            "ngIf",
                        ],
                        ["matLine", "", "class", "sublabel", 4, "ngIf"],
                        ["matLine", "", "class", "base", 4, "ngIf"],
                        [
                            "luno-picture",
                            "",
                            "matListAvatar",
                            "",
                            3,
                            "imgHeight",
                            "imgWidth",
                            "imageTypes",
                            "srcUrl",
                            "fallbackSrc",
                            "lunoBadge",
                        ],
                        ["matLine", "", 1, "subtitle", "with-checkbox"],
                        ["matLine", "", 1, "base"],
                        [1, "mat-list-item-empty"],
                        [3, "ngStyle", "src", 4, "ngIf"],
                        [3, "ngStyle", "src"],
                        [
                            "class",
                            "contextual-icon",
                            "color",
                            "primary",
                            3,
                            "click",
                            4,
                            "ngIf",
                        ],
                        ["color", "primary", 1, "contextual-icon", 3, "click"],
                        [
                            "mat-icon-button",
                            "",
                            3,
                            "matMenuTriggerFor",
                            "click",
                        ],
                        [
                            "mat-menu-item",
                            "",
                            3,
                            "click",
                            4,
                            "ngFor",
                            "ngForOf",
                        ],
                        ["mat-menu-item", "", 3, "click"],
                    ],
                    template: function (h, s) {
                        if (
                            (1 & h &&
                                (e.YNc(0, nt, 2, 1, "ng-container", 0),
                                e.YNc(
                                    1,
                                    Rt,
                                    2,
                                    2,
                                    "ng-template",
                                    null,
                                    1,
                                    e.W1O
                                ),
                                e.YNc(
                                    3,
                                    Mt,
                                    2,
                                    2,
                                    "ng-template",
                                    null,
                                    2,
                                    e.W1O
                                ),
                                e.YNc(
                                    5,
                                    Ut,
                                    5,
                                    2,
                                    "ng-template",
                                    null,
                                    3,
                                    e.W1O
                                ),
                                e.YNc(
                                    7,
                                    d,
                                    1,
                                    1,
                                    "ng-template",
                                    null,
                                    4,
                                    e.W1O
                                ),
                                e.YNc(
                                    9,
                                    pe,
                                    3,
                                    1,
                                    "ng-template",
                                    null,
                                    5,
                                    e.W1O
                                ),
                                e.TgZ(11, "mat-menu", null, 6),
                                e.YNc(13, $t, 1, 1, "ng-template", 7),
                                e.qZA()),
                            2 & h)
                        ) {
                            const N = e.MAs(2);
                            e.Q6J("ngIf", s.isEmptyType)("ngIfElse", N);
                        }
                    },
                    dependencies: [
                        It.l,
                        E.sg,
                        E.O5,
                        E.tP,
                        E.PC,
                        ct.t,
                        ne.lW,
                        R.Hw,
                        Me.Tg,
                        Me.eA,
                        ft.X2,
                        Me.vS,
                        St.d,
                        He.VK,
                        He.OP,
                        He.p6,
                        He.KA,
                        lt.w,
                        y.JJ,
                        y.oH,
                        Ke,
                        ce.J,
                        E.Ov,
                    ],
                    styles: [
                        ".mat-list-item[_ngcontent-%COMP%]{text-align:left;height:auto!important;height:initial!important}.mat-list-item.rounded[_ngcontent-%COMP%]{border-radius:8px}.mat-list-item[_ngcontent-%COMP%]   .overline[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:800;line-height:1.1;font-size:10px;font-weight:500;text-transform:uppercase;margin-bottom:5px}.mat-list-item[_ngcontent-%COMP%]   .overline[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:var(--color-neutral-300);font-size:16px;cursor:pointer;position:relative;top:4px}.mat-list-item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:800;line-height:1.1;font-size:16px;line-height:1.428571429;color:inherit}.mat-list-item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] + .sublabel[_ngcontent-%COMP%]{margin-top:-4px}.mat-list-item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] + .base[_ngcontent-%COMP%]{margin-top:-4px}.mat-list-item[_ngcontent-%COMP%]   .subtitle.with-checkbox[_ngcontent-%COMP%]{font-weight:400}.mat-list-item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:var(--color-neutral-300);font-size:16px;cursor:pointer;position:relative;align-items:center;display:inline-flex;height:32px;justify-content:center;margin:-8px;top:2px;width:32px}.mat-list-item[_ngcontent-%COMP%]   .right-items[_ngcontent-%COMP%]{align-items:center;display:flex}.mat-list-item[_ngcontent-%COMP%]   .right-items[_ngcontent-%COMP%]   .inline-button[_ngcontent-%COMP%]{color:var(--color-primary);font-size:12px;line-height:1.428571429;background-color:var(--color-secondary-background);border-radius:4px;box-sizing:border-box;color:var(--color-secondary);cursor:pointer;display:inline-block;font-weight:800;height:24px;line-height:1.33;margin-top:-9px;padding:4px 6px;text-align:center;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;top:0}.mat-list-item[_ngcontent-%COMP%]   .right-items[_ngcontent-%COMP%]   .inline-button[_ngcontent-%COMP%]:hover{background-color:var(--color-secondary-background-lighter)}.mat-list-item[_ngcontent-%COMP%]   .right-items[_ngcontent-%COMP%]   .inline-button.interactive[_ngcontent-%COMP%]:hover{background-color:var(--color-secondary-background)}.mat-list-item[_ngcontent-%COMP%]   .right-items[_ngcontent-%COMP%]   .inline-label[_ngcontent-%COMP%]{color:var(--color-primary);font-size:12px;line-height:1.428571429;background-color:var(--color-success-background);border-radius:4px;box-sizing:border-box;color:var(--color-success);cursor:pointer;display:inline-block;font-weight:800;height:24px;line-height:1.33;padding:4px 6px;text-align:center;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none}.mat-list-item[_ngcontent-%COMP%]   .right-items[_ngcontent-%COMP%]   .right-icon[_ngcontent-%COMP%]{margin-left:8px;max-width:40px}.mat-list-item[_ngcontent-%COMP%]   .label-html[_ngcontent-%COMP%]{font-weight:400}.mat-list-item[_ngcontent-%COMP%]   .sublabel[_ngcontent-%COMP%]{color:#757575;font-size:12px;line-height:1.428571429;font-size:12px!important}.mat-list-item[_ngcontent-%COMP%]   .sublabel[_ngcontent-%COMP%] + .base[_ngcontent-%COMP%]{margin-top:-6px}.mat-list-item[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%]{font-size:14px;line-height:1.428571429}.mat-list-item[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{margin-bottom:8px;white-space:nowrap}.mat-list-item[_ngcontent-%COMP%]   .not-link-type[_ngcontent-%COMP%]{cursor:default}.mat-list-item[_ngcontent-%COMP%]   .inline-star[_ngcontent-%COMP%]{flex-basis:60px}.mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:normal;padding-right:4px}.mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:8px}[_nghost-%COMP%]     .mat-list-text{align-self:center;min-height:24px;justify-content:center}[_nghost-%COMP%]     .mat-list-item .mat-list-item-content{align-items:middle;padding:16px}[_nghost-%COMP%]     .mat-list-item .mat-list-item-content mat-pseudo-checkbox{align-self:center}[_nghost-%COMP%]     .mat-list-item .caption{align-self:flex-start}[_nghost-%COMP%]     .mat-list-option .mat-pseudo-checkbox-checked{background-color:var(--color-secondary)}[_nghost-%COMP%]     luno-hyperlink>a{text-decoration:none!important}[_nghost-%COMP%]     .mat-button-focus-overlay{background-color:transparent}.mat-list-avatar[_ngcontent-%COMP%]{border-radius:0!important;-o-object-fit:contain!important;object-fit:contain!important}.mat-list-item-empty[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:column nowrap;width:100%}.mat-list-item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] > mat-icon.contextual-icon[_ngcontent-%COMP%]{color:var(--color-tertiary)}.sublabel[_ngcontent-%COMP%]{color:var(--color-primary)}",
                    ],
                })),
                (0, l.gn)(
                    [
                        (0, Pe.G)("onListItemChange"),
                        (0, l.w6)("design:type", Object),
                    ],
                    Ue.prototype,
                    "listItem",
                    void 0
                );
            const oe = ["listSection", ""];
            function ut(u, h) {
                1 & u && e.GkF(0);
            }
            function wt(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "luno-expansion-panel", 3),
                        e.NdJ("panelExpanded", function () {
                            e.CHM(s);
                            const D = e.oxw(2);
                            return e.KtG(D.onPanelExpanded());
                        })("panelCollapsed", function () {
                            e.CHM(s);
                            const D = e.oxw(2);
                            return e.KtG(D.onPanelCollapsed());
                        }),
                        e.YNc(1, ut, 1, 0, "ng-container", 4),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(2),
                        N = e.MAs(3);
                    e.Q6J("title", s.listSection.title)(
                        "isCollapsible",
                        s.listSection.isCollapsible
                    ),
                        e.xp6(1),
                        e.Q6J("ngTemplateOutlet", N);
                }
            }
            function Yn(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "mat-icon", 6),
                        e.NdJ("click", function () {
                            e.CHM(s);
                            const D = e.oxw(3);
                            return e.KtG(
                                D.onContextualIconClick(D.listSection.button)
                            );
                        }),
                        e._uU(1, "info"),
                        e.qZA();
                }
            }
            function Ft(u, h) {
                1 & u && e.GkF(0);
            }
            function fn(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e.TgZ(1, "h5"),
                        e._uU(2),
                        e.YNc(3, Yn, 2, 0, "mat-icon", 5),
                        e.qZA(),
                        e.YNc(4, Ft, 1, 0, "ng-container", 4),
                        e.BQk()),
                    2 & u)
                ) {
                    const s = e.oxw(2),
                        N = e.MAs(3);
                    e.xp6(2),
                        e.hij(" ", s.listSection.title, " "),
                        e.xp6(1),
                        e.Q6J("ngIf", s.listSection.button),
                        e.xp6(1),
                        e.Q6J("ngTemplateOutlet", N);
                }
            }
            function Hn(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e.YNc(1, wt, 2, 3, "luno-expansion-panel", 2),
                        e.YNc(2, fn, 5, 3, "ng-container", 0),
                        e.BQk()),
                    2 & u)
                ) {
                    const s = e.oxw();
                    e.xp6(1),
                        e.Q6J("ngIf", !s.isGroupingHeading()),
                        e.xp6(1),
                        e.Q6J("ngIf", s.isGroupingHeading());
                }
            }
            function Qt(u, h) {
                1 & u && e.GkF(0);
            }
            function Ee(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e.YNc(1, Qt, 1, 0, "ng-container", 4),
                        e.BQk()),
                    2 & u)
                ) {
                    e.oxw();
                    const s = e.MAs(3);
                    e.xp6(1), e.Q6J("ngTemplateOutlet", s);
                }
            }
            function _t(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "mat-list")(1, "luno-list-item", 10),
                        e.NdJ("itemClicked", function (D) {
                            e.CHM(s);
                            const G = e.oxw(3);
                            return e.KtG(G.onItemClicked(D));
                        })("inlineItemClicked", function (D) {
                            e.CHM(s);
                            const G = e.oxw(3);
                            return e.KtG(G.onInlineItemClicked(D));
                        })("inlineStarClicked", function (D) {
                            e.CHM(s);
                            const G = e.oxw(3);
                            return e.KtG(G.onInlineStarClicked(D));
                        })("itemToggled", function (D) {
                            e.CHM(s);
                            const G = e.oxw().$implicit,
                                be = e.oxw(2);
                            return e.KtG(be.onItemToggled(G, D));
                        }),
                        e.qZA()();
                }
                if (2 & u) {
                    const s = e.oxw(),
                        N = s.$implicit,
                        D = s.last,
                        G = e.oxw(2);
                    e.xp6(1),
                        e.Q6J("listItem", N)(
                            "showDivider",
                            !D && G.showDivider
                        )("toggleConfig", G.getToggleConfig(N));
                }
            }
            function Bt(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "mat-nav-list", 11)(1, "luno-list-item", 12),
                        e.NdJ("itemClicked", function (D) {
                            e.CHM(s);
                            const G = e.oxw(3);
                            return e.KtG(G.onItemClicked(D));
                        })("inlineItemClicked", function (D) {
                            e.CHM(s);
                            const G = e.oxw(3);
                            return e.KtG(G.onInlineItemClicked(D));
                        }),
                        e.qZA()();
                }
                if (2 & u) {
                    const s = e.oxw(),
                        N = s.$implicit,
                        D = s.last,
                        G = e.oxw(2);
                    e.ekj("rounded", G.isRounded)(
                        "indent-item-on-hover",
                        G.isItemIndentedOnHover
                    ),
                        e.Q6J("disableRipple", G.isItemIndentedOnHover),
                        e.xp6(1),
                        e.Q6J("listItem", N)(
                            "showDivider",
                            !D && G.showDivider
                        );
                }
            }
            function jt(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "mat-selection-list", 13),
                        e.NdJ("selectionChange", function (D) {
                            e.CHM(s);
                            const G = e.oxw().$implicit,
                                be = e.oxw(2);
                            return e.KtG(be.onSelectionChange(G, D));
                        }),
                        e._UZ(1, "luno-list-item", 14),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(),
                        N = s.$implicit,
                        D = s.last,
                        G = e.oxw(2);
                    e.xp6(1),
                        e.Q6J("listItem", N)("selected", N.isActive)(
                            "showDivider",
                            !D && G.showDivider
                        );
                }
            }
            function Sn(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e.YNc(1, _t, 2, 3, "mat-list", 0),
                        e.YNc(2, Bt, 2, 7, "mat-nav-list", 8),
                        e.YNc(3, jt, 2, 3, "mat-selection-list", 9),
                        e.BQk()),
                    2 & u)
                ) {
                    const s = h.$implicit,
                        N = e.oxw(2);
                    e.xp6(1),
                        e.Q6J("ngIf", N.showMatList(s)),
                        e.xp6(1),
                        e.Q6J("ngIf", N.showNavList(s)),
                        e.xp6(1),
                        e.Q6J("ngIf", N.showSelectionList(s));
                }
            }
            function Nn(u, h) {
                if ((1 & u && e.YNc(0, Sn, 4, 3, "ng-container", 7), 2 & u)) {
                    const s = e.oxw();
                    e.Q6J("ngForOf", s.listSection.items);
                }
            }
            let Ze = (() => {
                class u {
                    constructor(s, N, D) {
                        (this.analyticsService = s),
                            (this.dialog = N),
                            (this.listService = D),
                            (this.showDivider = !0),
                            (this.isRounded = !1),
                            (this.isItemIndentedOnHover = !1),
                            (this.itemClicked = new e.vpe()),
                            (this.inlineItemClicked = new e.vpe()),
                            (this.inlineStarClicked = new e.vpe()),
                            (this.itemToggled = new e.vpe()),
                            (this.ListSectionStyle = c.d9x),
                            (this._listSectionTitle = "");
                    }
                    set listSection(s) {
                        !s ||
                            ((this._listSection = s),
                            (this._listSectionTitle = this._listSection.title));
                    }
                    isGroupingHeading() {
                        return (0, O.G)(
                            c.d9x,
                            this.listSection.style,
                            c.d9x.GROUPING
                        );
                    }
                    showMatList(s) {
                        return this.listService.isDefaultType(s);
                    }
                    showNavList(s) {
                        return this.listService.isNavType(s);
                    }
                    showSelectionList(s) {
                        return this.listService.isSelectType(s);
                    }
                    onItemClicked(s) {
                        this.itemClicked.emit(s);
                    }
                    onInlineItemClicked(s) {
                        this.inlineItemClicked.emit(s);
                    }
                    onInlineStarClicked(s) {
                        this.inlineStarClicked.emit(s);
                    }
                    onItemToggled(s, N) {
                        (s.isActive = N), this.itemToggled.emit(s);
                    }
                    onSelectionChange(s, N) {
                        (s.isActive = !!N.options?.[0]?.selected),
                            this.itemToggled.emit(s);
                    }
                    onContextualIconClick(s) {
                        s.action?.event &&
                            this.analyticsService.logEvent(s.action.event),
                            s.action?.dialog &&
                                this.processItemDialog(s.action.dialog);
                    }
                    onPanelExpanded() {
                        this.listSection.title = this._listSectionTitle;
                    }
                    onPanelCollapsed() {
                        this.listSection.title = `${this._listSectionTitle} \u2022 ${this.listSection.items.length}`;
                    }
                    getToggleConfig(s) {
                        return { value: s.isActive };
                    }
                    get listSection() {
                        if (!this._listSection)
                            throw new Error(
                                "Required listSection is undefined"
                            );
                        return this._listSection;
                    }
                    processItemDialog(s) {
                        this.dialog.open(m.a, { data: s, maxWidth: "540px" });
                    }
                }
                return (
                    (u.ɵfac = function (s) {
                        return new (s || u)(e.Y36(I.y), e.Y36(_.uw), e.Y36(T));
                    }),
                    (u.ɵcmp = e.Xpm({
                        type: u,
                        selectors: [["luno-list-section", "listSection", ""]],
                        inputs: {
                            listSection: "listSection",
                            showDivider: "showDivider",
                            isRounded: "isRounded",
                            isItemIndentedOnHover: "isItemIndentedOnHover",
                        },
                        outputs: {
                            itemClicked: "itemClicked",
                            inlineItemClicked: "inlineItemClicked",
                            inlineStarClicked: "inlineStarClicked",
                            itemToggled: "itemToggled",
                        },
                        attrs: oe,
                        decls: 4,
                        vars: 2,
                        consts: [
                            [4, "ngIf"],
                            ["listSectionTemplate", ""],
                            [
                                "collapsedHeight",
                                "50px",
                                "expandedHeight",
                                "50px",
                                3,
                                "title",
                                "isCollapsible",
                                "panelExpanded",
                                "panelCollapsed",
                                4,
                                "ngIf",
                            ],
                            [
                                "collapsedHeight",
                                "50px",
                                "expandedHeight",
                                "50px",
                                3,
                                "title",
                                "isCollapsible",
                                "panelExpanded",
                                "panelCollapsed",
                            ],
                            [4, "ngTemplateOutlet"],
                            [
                                "class",
                                "contextual-icon",
                                "color",
                                "primary",
                                3,
                                "click",
                                4,
                                "ngIf",
                            ],
                            [
                                "color",
                                "primary",
                                1,
                                "contextual-icon",
                                3,
                                "click",
                            ],
                            [4, "ngFor", "ngForOf"],
                            [
                                3,
                                "rounded",
                                "indent-item-on-hover",
                                "disableRipple",
                                4,
                                "ngIf",
                            ],
                            [3, "selectionChange", 4, "ngIf"],
                            [
                                3,
                                "listItem",
                                "showDivider",
                                "toggleConfig",
                                "itemClicked",
                                "inlineItemClicked",
                                "inlineStarClicked",
                                "itemToggled",
                            ],
                            [3, "disableRipple"],
                            [
                                3,
                                "listItem",
                                "showDivider",
                                "itemClicked",
                                "inlineItemClicked",
                            ],
                            [3, "selectionChange"],
                            [3, "listItem", "selected", "showDivider"],
                        ],
                        template: function (s, N) {
                            1 & s &&
                                (e.YNc(0, Hn, 3, 2, "ng-container", 0),
                                e.YNc(1, Ee, 2, 1, "ng-container", 0),
                                e.YNc(
                                    2,
                                    Nn,
                                    1,
                                    1,
                                    "ng-template",
                                    null,
                                    1,
                                    e.W1O
                                )),
                                2 & s &&
                                    (e.Q6J("ngIf", N.listSection.title),
                                    e.xp6(1),
                                    e.Q6J("ngIf", !N.listSection.title));
                        },
                        dependencies: [
                            E.sg,
                            E.O5,
                            E.tP,
                            v,
                            Ue,
                            R.Hw,
                            Me.i$,
                            Me.Hk,
                            Me.Ub,
                        ],
                        styles: [
                            ".mat-list-base[_ngcontent-%COMP%]{padding-top:0}h5[_ngcontent-%COMP%]{font-size:12px;font-weight:800;text-transform:uppercase;color:#bdbdbd;text-align:left;margin:16px 16px 8px;color:var(--color-primary)}h5[_ngcontent-%COMP%]   .contextual-icon[_ngcontent-%COMP%]{font-size:16px;cursor:pointer;position:relative;top:4px}[_nghost-%COMP%]     .indent-item-on-hover .mat-list-item{transition:all .4s ease}[_nghost-%COMP%]     .indent-item-on-hover .mat-list-item .mat-list-item-content{padding-left:0!important;transition:all .4s ease}[_nghost-%COMP%]     .indent-item-on-hover .mat-list-item:hover, [_nghost-%COMP%]     .indent-item-on-hover .mat-list-item :focus{background:var(--color-secondary-background-lighter)}[_nghost-%COMP%]     .indent-item-on-hover .mat-list-item:hover .mat-list-item-content, [_nghost-%COMP%]     .indent-item-on-hover .mat-list-item :focus .mat-list-item-content{padding-left:8px!important}[_nghost-%COMP%]     .mat-expansion-panel-header{padding-left:16px}[_nghost-%COMP%]     .mat-expansion-panel-body{padding:0}[_nghost-%COMP%]     mat-nav-list.rounded .mat-list-item{border-radius:8px}[_nghost-%COMP%]     mat-nav-list.rounded .mat-list-item-ripple{border-radius:8px}[_nghost-%COMP%]     .indent-item-on-hover .mat-list-item:hover, [_nghost-%COMP%]     .indent-item-on-hover .mat-list-item :focus{background:var(--color-neutral-100)}",
                        ],
                    })),
                    u
                );
            })();
            function pt(u, h) {
                if ((1 & u && e._UZ(0, "h3", 2), 2 & u)) {
                    const s = e.oxw();
                    e.Q6J("innerHtml", s.list.title, e.oJD);
                }
            }
            function ge(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "luno-list-section", 3),
                        e.NdJ("itemClicked", function (D) {
                            e.CHM(s);
                            const G = e.oxw();
                            return e.KtG(G.onItemClicked(D));
                        })("inlineItemClicked", function (D) {
                            e.CHM(s);
                            const G = e.oxw();
                            return e.KtG(G.onInlineItemClicked(D));
                        })("inlineStarClicked", function (D) {
                            e.CHM(s);
                            const G = e.oxw();
                            return e.KtG(G.onInlineStarClicked(D));
                        })("itemToggled", function (D) {
                            e.CHM(s);
                            const G = e.oxw();
                            return e.KtG(G.onItemToggled(D));
                        }),
                        e.qZA();
                }
                if (2 & u) {
                    const s = h.$implicit,
                        N = e.oxw();
                    e.Q6J("listSection", s)("showDivider", N.list.showDivider)(
                        "isRounded",
                        N.isRounded
                    )("isItemIndentedOnHover", N.isItemIndentedOnHover);
                }
            }
            let zt = (() => {
                class u {
                    constructor() {
                        (this.isRounded = !1),
                            (this.isItemIndentedOnHover = !1),
                            (this.itemClicked = new e.vpe()),
                            (this.inlineItemClicked = new e.vpe()),
                            (this.inlineStarClicked = new e.vpe()),
                            (this.itemToggled = new e.vpe());
                    }
                    onItemClicked(s) {
                        this.itemClicked.emit(s);
                    }
                    onInlineItemClicked(s) {
                        this.inlineItemClicked.emit(s);
                    }
                    onInlineStarClicked(s) {
                        this.inlineStarClicked.emit(s);
                    }
                    onItemToggled(s) {
                        this.itemToggled.emit(s);
                    }
                }
                return (
                    (u.ɵfac = function (s) {
                        return new (s || u)();
                    }),
                    (u.ɵcmp = e.Xpm({
                        type: u,
                        selectors: [["luno-list"]],
                        inputs: {
                            list: "list",
                            isRounded: "isRounded",
                            isItemIndentedOnHover: "isItemIndentedOnHover",
                        },
                        outputs: {
                            itemClicked: "itemClicked",
                            inlineItemClicked: "inlineItemClicked",
                            inlineStarClicked: "inlineStarClicked",
                            itemToggled: "itemToggled",
                        },
                        decls: 2,
                        vars: 2,
                        consts: [
                            ["class", "list-title", 3, "innerHtml", 4, "ngIf"],
                            [
                                3,
                                "listSection",
                                "showDivider",
                                "isRounded",
                                "isItemIndentedOnHover",
                                "itemClicked",
                                "inlineItemClicked",
                                "inlineStarClicked",
                                "itemToggled",
                                4,
                                "ngFor",
                                "ngForOf",
                            ],
                            [1, "list-title", 3, "innerHtml"],
                            [
                                3,
                                "listSection",
                                "showDivider",
                                "isRounded",
                                "isItemIndentedOnHover",
                                "itemClicked",
                                "inlineItemClicked",
                                "inlineStarClicked",
                                "itemToggled",
                            ],
                        ],
                        template: function (s, N) {
                            1 & s &&
                                (e.YNc(0, pt, 1, 1, "h3", 0),
                                e.YNc(1, ge, 1, 4, "luno-list-section", 1)),
                                2 & s &&
                                    (e.Q6J(
                                        "ngIf",
                                        (null == N.list
                                            ? null
                                            : N.list.title) &&
                                            N.list.sections &&
                                            N.list.sections.length > 0
                                    ),
                                    e.xp6(1),
                                    e.Q6J(
                                        "ngForOf",
                                        null == N.list ? null : N.list.sections
                                    ));
                        },
                        dependencies: [E.sg, E.O5, Ze],
                    })),
                    u
                );
            })();
            function An(u, h) {
                if ((1 & u && (e.TgZ(0, "h3"), e._uU(1), e.qZA()), 2 & u)) {
                    const s = e.oxw();
                    e.xp6(1), e.Oqu(s.bottomSheet.title);
                }
            }
            let On = (() => {
                class u {
                    constructor(s, N) {
                        (this.data = s),
                            (this.bottomSheetRef = N),
                            (this.itemSelected = new e.vpe());
                    }
                    ngOnInit() {
                        (this.bottomSheet = this.data.bottomSheet),
                            (this.list = {
                                sections: [{ items: this.bottomSheet.items }],
                            });
                    }
                    onItemSelected(s) {
                        this.itemSelected.emit(s),
                            this.bottomSheetRef.dismiss();
                    }
                }
                return (
                    (u.ɵfac = function (s) {
                        return new (s || u)(e.Y36(g.OG), e.Y36(g.oL));
                    }),
                    (u.ɵcmp = e.Xpm({
                        type: u,
                        selectors: [["luno-bottom-sheet"]],
                        decls: 2,
                        vars: 3,
                        consts: [
                            [4, "ngIf"],
                            [3, "list", "isRounded", "itemClicked"],
                        ],
                        template: function (s, N) {
                            1 & s &&
                                (e.YNc(0, An, 2, 1, "h3", 0),
                                e.TgZ(1, "luno-list", 1),
                                e.NdJ("itemClicked", function (G) {
                                    return N.onItemSelected(G);
                                }),
                                e.qZA()),
                                2 & s &&
                                    (e.Q6J("ngIf", N.bottomSheet.title),
                                    e.xp6(1),
                                    e.Q6J("list", N.list)("isRounded", !0));
                        },
                        dependencies: [E.O5, zt],
                    })),
                    u
                );
            })();
            var Gt = o(5713),
                vn = o(8607);
            let yn = (() => {
                class u {
                    constructor(s, N) {
                        (this.http = s), (this.snackbarService = N);
                    }
                    executeAction(s) {
                        return this.callApi(s).pipe(
                            (0, qe.b)((N) => {
                                N.popupMessage &&
                                    this.snackbarService.open(
                                        N.popupMessage,
                                        N.popupActionName
                                    );
                            }),
                            (0, M.U)(() => !0),
                            (0, Ce.K)(
                                (N) => (
                                    this.snackbarService.open(N.message, ""),
                                    (0, Xe.of)(!1)
                                )
                            )
                        );
                    }
                    callApi(s) {
                        const N = new FormData();
                        return (
                            N.append("token", s),
                            this.http.post("/ajax/1/token_action", N)
                        );
                    }
                }
                return (
                    (u.ɵfac = function (s) {
                        return new (s || u)(e.LFG(ie.eN), e.LFG(vn.o));
                    }),
                    (u.ɵprov = e.Yz7({
                        token: u,
                        factory: u.ɵfac,
                        providedIn: "root",
                    })),
                    u
                );
            })();
            function mt(u, h) {
                1 & u && e.GkF(0);
            }
            function kt(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "luno-submit-button", 5),
                        e.NdJ("clicked", function (D) {
                            e.CHM(s);
                            const G = e.oxw(2);
                            return e.KtG(G.onClick(D));
                        }),
                        e.YNc(1, mt, 1, 0, "ng-container", 6),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(2),
                        N = e.MAs(2);
                    e.Q6J("buttonType", s.buttonType)(
                        "isDisabled",
                        s.isDisabled
                    )("textColor", s.textColor)("themePalette", s.themePalette),
                        e.xp6(1),
                        e.Q6J("ngTemplateOutlet", N);
                }
            }
            function Kn(u, h) {
                1 & u && e.GkF(0);
            }
            function Pn(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "luno-anchor-without-url-button", 5),
                        e.NdJ("clicked", function (D) {
                            e.CHM(s);
                            const G = e.oxw(2);
                            return e.KtG(G.onClick(D));
                        }),
                        e.YNc(1, Kn, 1, 0, "ng-container", 6),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(2),
                        N = e.MAs(2);
                    e.Q6J("buttonType", s.buttonType)(
                        "isDisabled",
                        s.isDisabled
                    )("textColor", s.textColor)("themePalette", s.themePalette),
                        e.xp6(1),
                        e.Q6J("ngTemplateOutlet", N);
                }
            }
            function Je(u, h) {
                1 & u && e.GkF(0);
            }
            function xn(u, h) {
                if (1 & u) {
                    const s = e.EpF();
                    e.TgZ(0, "luno-anchor-with-url-button", 7),
                        e.NdJ("clicked", function (D) {
                            e.CHM(s);
                            const G = e.oxw(2);
                            return e.KtG(G.onClick(D));
                        }),
                        e.YNc(1, Je, 1, 0, "ng-container", 6),
                        e.qZA();
                }
                if (2 & u) {
                    const s = e.oxw(2),
                        N = e.MAs(2);
                    e.Q6J("buttonType", s.buttonType)("button", s.button)(
                        "params",
                        s.params
                    )("isDisabled", s.isDisabled)(
                        "isExternalLink",
                        s.isExternalLink
                    )("shouldOpenInNewWindow", s.shouldOpenInNewWindow)(
                        "rel",
                        s.rel
                    )("textColor", s.textColor)("themePalette", s.themePalette)(
                        "projectAssetsUrl",
                        s.projectAssetsUrl
                    ),
                        e.xp6(1),
                        e.Q6J("ngTemplateOutlet", N);
                }
            }
            function Rn(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0, 2),
                        e.YNc(1, kt, 2, 5, "luno-submit-button", 3),
                        e.YNc(2, Pn, 2, 5, "luno-anchor-without-url-button", 3),
                        e.YNc(3, xn, 2, 11, "luno-anchor-with-url-button", 4),
                        e.BQk()),
                    2 & u)
                ) {
                    const s = e.oxw();
                    e.Q6J("ngSwitch", s.displayType),
                        e.xp6(1),
                        e.Q6J(
                            "ngSwitchCase",
                            s.buttonDisplayType.SUBMIT_BUTTON
                        ),
                        e.xp6(1),
                        e.Q6J(
                            "ngSwitchCase",
                            s.buttonDisplayType.ANCHOR_WITHOUT_URL
                        ),
                        e.xp6(1),
                        e.Q6J(
                            "ngSwitchCase",
                            s.buttonDisplayType.ANCHOR_WITH_URL
                        );
                }
            }
            function Ln(u, h) {
                if (
                    (1 & u && (e.TgZ(0, "mat-icon"), e._uU(1), e.qZA()), 2 & u)
                ) {
                    const s = e.oxw(3);
                    e.xp6(1), e.Oqu(s.icon);
                }
            }
            function Xt(u, h) {
                if (
                    (1 & u &&
                        (e.ynx(0),
                        e._uU(1),
                        e.YNc(2, Ln, 2, 1, "mat-icon", 8),
                        e.BQk()),
                    2 & u)
                ) {
                    const s = e.oxw(2);
                    e.xp6(1),
                        e.hij(" ", s.button.action.name, " "),
                        e.xp6(1),
                        e.Q6J("ngIf", s.icon);
                }
            }
            function We(u, h) {
                if (
                    (1 & u &&
                        (e.TgZ(0, "mat-icon", 10),
                        e._UZ(1, "mat-spinner", 11),
                        e.qZA()),
                    2 & u)
                ) {
                    const s = e.oxw(2);
                    e.xp6(1), e.ekj("white-spinner", s.useWhiteLoader);
                }
            }
            function Dn(u, h) {
                if (
                    (1 & u &&
                        (e.YNc(0, Xt, 3, 2, "ng-container", 8),
                        e.YNc(1, We, 2, 2, "mat-icon", 9)),
                    2 & u)
                ) {
                    const s = e.oxw();
                    e.Q6J("ngIf", !s.isButtonLoading && s.button),
                        e.xp6(1),
                        e.Q6J("ngIf", s.isButtonLoading);
                }
            }
            var Ie = (() => {
                    return (
                        ((u = Ie || (Ie = {}))[(u.PRIMARY = 0)] = "PRIMARY"),
                        (u[(u.SECONDARY = 1)] = "SECONDARY"),
                        (u[(u.SOCIAL = 2)] = "SOCIAL"),
                        (u[(u.TERTIARY = 3)] = "TERTIARY"),
                        Ie
                    );
                    var u;
                })(),
                fe = (() => {
                    return (
                        ((u = fe || (fe = {}))[(u.ANCHOR_WITH_URL = 0)] =
                            "ANCHOR_WITH_URL"),
                        (u[(u.ANCHOR_WITHOUT_URL = 1)] = "ANCHOR_WITHOUT_URL"),
                        (u[(u.SUBMIT_BUTTON = 2)] = "SUBMIT_BUTTON"),
                        fe
                    );
                    var u;
                })(),
                dt = (() => (((dt || (dt = {})).DOWNLOAD = "download"), dt))();
            class $e {
                constructor(h, s, N, D, G) {
                    (this.actionService = h),
                        (this.analyticsService = s),
                        (this.bottomSheet = N),
                        (this.dialog = D),
                        (this.tokenActionService = G),
                        (this.isDisabled = !1),
                        (this.isLoading = !1),
                        (this.isNormalCase = !1),
                        (this.dialogMaxWidth = "540px"),
                        (this.tokenActionComplete = new e.vpe()),
                        (this.clicked = new e.vpe()),
                        (this.bottomSheetItemSelected = new e.vpe()),
                        (this.isPrimaryClass = !1),
                        (this.isSecondaryClass = !1),
                        (this.isTertiaryClass = !1),
                        (this.isGuideClass = !1),
                        (this.isNormalCaseClass = !1),
                        (this.buttonTypeEnum = Ie),
                        (this.isExternalLink = !1),
                        (this.shouldOpenInNewWindow = !1),
                        (this.rel = null),
                        (this.params = {}),
                        (this.buttonDisplayType = fe),
                        (this.displayType = fe.ANCHOR_WITHOUT_URL),
                        (this.icon = null),
                        (this.isClicked = !1);
                }
                set button(h) {
                    !h ||
                        (this.setButtonType(h),
                        this.hasUrl(h) &&
                            ((this.isExternalLink = this.actionService.isExternalLink(
                                h.action.url
                            )),
                            (this.shouldOpenInNewWindow = this.actionService.shouldOpenInNewWindow(
                                h.action.url
                            )),
                            (this.rel = this.shouldOpenInNewWindow
                                ? "opener"
                                : null),
                            (this.params = this.actionService.getParams(
                                h.action.url
                            )),
                            (h.action.url = this.isExternalLink
                                ? this.actionService.getUrl(h.action.url)
                                : this.actionService.getUrlWithoutParams(
                                      h.action.url
                                  ))),
                        this.setButtonDisplayType(h),
                        this.setButtonIconFromActionStyle(h),
                        (this._button = h));
                }
                set themePalette(h) {
                    this._themePalette = h;
                }
                get isButtonLoading() {
                    return this.isLoading && this.isClicked;
                }
                get button() {
                    return this._button;
                }
                get useWhiteLoader() {
                    return this.isPrimaryClass && !this.isGuideClass;
                }
                get themePalette() {
                    return this._themePalette || "primary";
                }
                ngOnInit() {
                    this.isNormalCaseClass = this.isNormalCase;
                }
                onClick(h) {
                    if (
                        ((this.isClicked = !0), !this.isLoading && this.button)
                    ) {
                        if (this.isDisabled) return void h.preventDefault();
                        if (this.isExternalLink)
                            return (
                                this.analyticsService.logEvent(
                                    this.button.action &&
                                        this.button.action.event
                                ),
                                void this.clicked.emit(this.button)
                            );
                        if (
                            ((this.displayType === fe.ANCHOR_WITHOUT_URL ||
                                this.displayType === fe.ANCHOR_WITH_URL) &&
                                h.preventDefault(),
                            this.hasDialogType())
                        )
                            return void this.processDialog();
                        this.hasBottomSheetType() && this.processBottomSheet(),
                            this.processTokenAction(this.button?.action),
                            this.analyticsService.logEvent(
                                this.button.action && this.button.action.event
                            ),
                            this.clicked.emit(this.button);
                    }
                }
                onIsLoadingChange(h) {
                    h || (this.isClicked = !1);
                }
                setButtonType(h) {
                    if ((0, O.G)(c.Ta6, h.action.type, c.Ta6.SOCIAL_SIGN_IN))
                        this.buttonType = Ie.SOCIAL;
                    else {
                        switch ((0, O.I)(c.gw3, h.action.style)) {
                            case c.gw3.PRIMARY:
                            case c.gw3.PRIMARY_UPGRADE:
                            case c.gw3.PRIMARY_GUIDE:
                            case c.gw3.UNKNOWN_STYLE:
                                this.buttonType = Ie.PRIMARY;
                                break;
                            case c.gw3.SECONDARY:
                            case c.gw3.SECONDARY_UPGRADE:
                            case c.gw3.SECONDARY_DOWNLOAD:
                                this.buttonType = Ie.SECONDARY;
                                break;
                            case c.gw3.TERTIARY:
                                this.buttonType = Ie.TERTIARY;
                                break;
                            case c.gw3.APPLE:
                            case c.gw3.FACEBOOK:
                            case c.gw3.GOOGLE:
                                this.buttonType = Ie.SOCIAL;
                        }
                        switch ((0, O.I)(c.gw3, h.action.style)) {
                            case c.gw3.PRIMARY:
                            case c.gw3.PRIMARY_UPGRADE:
                            case c.gw3.UNKNOWN_STYLE:
                                this.isPrimaryClass = !0;
                                break;
                            case c.gw3.PRIMARY_GUIDE:
                                (this.isPrimaryClass = !0),
                                    (this.isGuideClass = !0);
                                break;
                            case c.gw3.SECONDARY:
                            case c.gw3.SECONDARY_UPGRADE:
                            case c.gw3.SECONDARY_DOWNLOAD:
                                this.isSecondaryClass = !0;
                                break;
                            case c.gw3.TERTIARY:
                                this.isTertiaryClass = !0;
                        }
                    }
                }
                hasDialogType() {
                    return (
                        !!this.button &&
                        (0, O.G)(c.Ta6, this.button.action.type, c.Ta6.DIALOG)
                    );
                }
                hasBottomSheetType() {
                    return (
                        !!this.button &&
                        (0, O.G)(
                            c.Ta6,
                            this.button.action.type,
                            c.Ta6.BOTTOM_SHEET
                        )
                    );
                }
                hasTokenType(h) {
                    return !!h && (0, O.G)(c.Ta6, h.type, c.Ta6.TOKEN_ACTION);
                }
                processTokenAction(h) {
                    if ((h?.type && !this.hasTokenType(h)) || !h?.token) return;
                    const s = this.actionService.getParsedToken(h.token);
                    this.tokenActionService.executeAction(s).subscribe(
                        (N) => this.tokenActionComplete.emit(N),
                        () => this.tokenActionComplete.emit(!1)
                    );
                }
                processDialog() {
                    this.button &&
                        this.dialog
                            .open(m.a, {
                                data: this.button.dialog,
                                maxWidth: this.dialogMaxWidth,
                            })
                            .afterClosed()
                            .subscribe((s) => {
                                this.onDialogClose(s);
                            });
                }
                onDialogClose(h) {
                    if (!this.button || !h) return;
                    const s = this.createPrimaryDialogButton(
                        this.button.dialog
                    );
                    this.analyticsService.logEvent(this.button.action?.event),
                        this.analyticsService.logEvent(s?.action?.event),
                        this.clicked.emit(s || this.button);
                }
                createPrimaryDialogButton(h) {
                    return h?.primaryAction.id
                        ? this.createButtonFromDialogAction(h.primaryAction)
                        : null;
                }
                createButtonFromDialogAction(h) {
                    const { id: s, name: N, event: D, url: G } = h;
                    return { action: { id: s, name: N, event: D, url: G } };
                }
                processBottomSheet() {
                    if (!this.button) return;
                    const h = Gt._L.panelClass;
                    this.bottomSheetPanelClass &&
                        h.push(this.bottomSheetPanelClass);
                    const N = this.bottomSheet.open(On, {
                        data: { bottomSheet: this.button.bottomSheet },
                        panelClass: h,
                    });
                    N.instance &&
                        N.instance.itemSelected &&
                        N.instance.itemSelected.subscribe((D) => {
                            this.bottomSheetItemSelected.emit(D),
                                this.processTokenAction(D);
                        });
                }
                hasUrl(h) {
                    return !!h.action && !!h.action.url;
                }
                isSubmitButton(h) {
                    return (
                        !(!h.action || h.action.token) &&
                        (0, O.G)(c.Ta6, h.action.type, c.Ta6.SUBMIT)
                    );
                }
                setButtonDisplayType(h) {
                    this.displayType = this.isSubmitButton(h)
                        ? fe.SUBMIT_BUTTON
                        : this.hasUrl(h)
                        ? fe.ANCHOR_WITH_URL
                        : fe.ANCHOR_WITHOUT_URL;
                }
                setButtonIconFromActionStyle(h) {
                    (0, O.I)(c.gw3, h.action.style) ===
                        c.gw3.SECONDARY_DOWNLOAD && (this.icon = dt.DOWNLOAD);
                }
            }
            ($e.ɵfac = function (h) {
                return new (h || $e)(
                    e.Y36(q.c),
                    e.Y36(I.y),
                    e.Y36(g.ch),
                    e.Y36(_.uw),
                    e.Y36(yn)
                );
            }),
                ($e.ɵcmp = e.Xpm({
                    type: $e,
                    selectors: [["luno-button"]],
                    hostVars: 12,
                    hostBindings: function (h, s) {
                        2 & h &&
                            e.ekj("is-primary", s.isPrimaryClass)(
                                "is-secondary",
                                s.isSecondaryClass
                            )("is-tertiary", s.isTertiaryClass)(
                                "is-guide",
                                s.isGuideClass
                            )("is-normal-case", s.isNormalCaseClass)(
                                "is-loading",
                                s.isButtonLoading
                            );
                    },
                    inputs: {
                        button: "button",
                        isDisabled: "isDisabled",
                        isLoading: "isLoading",
                        isNormalCase: "isNormalCase",
                        dialogMaxWidth: "dialogMaxWidth",
                        projectAssetsUrl: "projectAssetsUrl",
                        textColor: "textColor",
                        bottomSheetPanelClass: "bottomSheetPanelClass",
                        themePalette: "themePalette",
                    },
                    outputs: {
                        tokenActionComplete: "tokenActionComplete",
                        clicked: "clicked",
                        bottomSheetItemSelected: "bottomSheetItemSelected",
                    },
                    decls: 3,
                    vars: 1,
                    consts: [
                        [3, "ngSwitch", 4, "ngIf"],
                        ["buttonContent", ""],
                        [3, "ngSwitch"],
                        [
                            3,
                            "buttonType",
                            "isDisabled",
                            "textColor",
                            "themePalette",
                            "clicked",
                            4,
                            "ngSwitchCase",
                        ],
                        [
                            3,
                            "buttonType",
                            "button",
                            "params",
                            "isDisabled",
                            "isExternalLink",
                            "shouldOpenInNewWindow",
                            "rel",
                            "textColor",
                            "themePalette",
                            "projectAssetsUrl",
                            "clicked",
                            4,
                            "ngSwitchCase",
                        ],
                        [
                            3,
                            "buttonType",
                            "isDisabled",
                            "textColor",
                            "themePalette",
                            "clicked",
                        ],
                        [4, "ngTemplateOutlet"],
                        [
                            3,
                            "buttonType",
                            "button",
                            "params",
                            "isDisabled",
                            "isExternalLink",
                            "shouldOpenInNewWindow",
                            "rel",
                            "textColor",
                            "themePalette",
                            "projectAssetsUrl",
                            "clicked",
                        ],
                        [4, "ngIf"],
                        ["class", "loading-spinner", 4, "ngIf"],
                        [1, "loading-spinner"],
                        ["mode", "indeterminate", "diameter", "24"],
                    ],
                    template: function (h, s) {
                        1 & h &&
                            (e.YNc(0, Rn, 4, 4, "ng-container", 0),
                            e.YNc(1, Dn, 2, 2, "ng-template", null, 1, e.W1O)),
                            2 & h && e.Q6J("ngIf", s.button);
                    },
                    styles: [
                        ".is-normal-case[_nghost-%COMP%]     .mat-button-wrapper{text-transform:none!important}a[_ngcontent-%COMP%]:focus{outline:none;text-decoration:inherit}.loading-spinner[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;height:1.5}",
                    ],
                })),
                (0, l.gn)(
                    [
                        (0, Pe.G)("onIsLoadingChange"),
                        (0, l.w6)("design:type", Boolean),
                    ],
                    $e.prototype,
                    "isLoading",
                    void 0
                );
        },
        7514: (W, x, o) => {
            o.d(x, { h: () => Ve });
            var l = o(4666),
                e = o(4522),
                g = o(7822),
                E = o(1708),
                c = o(930),
                I = o(3178),
                O = o(4865),
                T = o(6517),
                m = o(3468),
                _ = o(3012),
                a = o(2560);
            let R = (() => {
                class f {}
                return (
                    (f.ɵfac = function (S) {
                        return new (S || f)();
                    }),
                    (f.ɵmod = a.oAB({ type: f })),
                    (f.ɵinj = a.cJS({ imports: [l.ez, _.To, g.Ps] })),
                    f
                );
            })();
            var P = o(2508),
                L = o(8589),
                K = o(1045),
                B = o(1716),
                j = o(4714);
            let v = (() => {
                class f {}
                return (
                    (f.ɵfac = function (S) {
                        return new (S || f)();
                    }),
                    (f.ɵmod = a.oAB({ type: f })),
                    (f.ɵinj = a.cJS({
                        imports: [l.ez, j.rP, E.Cq, g.Ps, P.UX],
                    })),
                    f
                );
            })();
            var y = o(1867),
                w = o(4792),
                Q = o(1484);
            let ce = (() => {
                    class f {}
                    return (
                        (f.ɵfac = function (S) {
                            return new (S || f)();
                        }),
                        (f.ɵmod = a.oAB({ type: f })),
                        (f.ɵinj = a.cJS({
                            imports: [l.ez, e.ot, w.p9, Q.Is, P.UX, I.Bz],
                        })),
                        f
                    );
                })(),
                Ne = (() => {
                    class f {}
                    return (
                        (f.ɵfac = function (S) {
                            return new (S || f)();
                        }),
                        (f.ɵmod = a.oAB({ type: f })),
                        (f.ɵinj = a.cJS({
                            imports: [
                                y.T,
                                l.ez,
                                ce,
                                m.N,
                                e.ot,
                                g.Ps,
                                T.ie,
                                L.Tx,
                                B.K,
                                P.UX,
                                v,
                                K.O,
                            ],
                        })),
                        f
                    );
                })(),
                H = (() => {
                    class f {}
                    return (
                        (f.ɵfac = function (S) {
                            return new (S || f)();
                        }),
                        (f.ɵmod = a.oAB({ type: f })),
                        (f.ɵinj = a.cJS({
                            imports: [l.ez, R, Ne, _.To, g.Ps, T.ie],
                        })),
                        f
                    );
                })(),
                q = (() => {
                    class f {}
                    return (
                        (f.ɵfac = function (S) {
                            return new (S || f)();
                        }),
                        (f.ɵmod = a.oAB({ type: f })),
                        (f.ɵinj = a.cJS({ imports: [l.ez, H] })),
                        f
                    );
                })(),
                M = (() => {
                    class f {}
                    return (
                        (f.ɵfac = function (S) {
                            return new (S || f)();
                        }),
                        (f.ɵmod = a.oAB({ type: f })),
                        (f.ɵinj = a.cJS({
                            imports: [l.ez, m.N, O._r, T.ie, q],
                        })),
                        f
                    );
                })();
            var z = o(5599);
            let ie = (() => {
                    class f {}
                    return (
                        (f.ɵfac = function (S) {
                            return new (S || f)();
                        }),
                        (f.ɵmod = a.oAB({ type: f })),
                        (f.ɵinj = a.cJS({
                            imports: [l.ez, e.ot, w.p9, Q.Is, P.UX, I.Bz],
                        })),
                        f
                    );
                })(),
                De = (() => {
                    class f {}
                    return (
                        (f.ɵfac = function (S) {
                            return new (S || f)();
                        }),
                        (f.ɵmod = a.oAB({ type: f })),
                        (f.ɵinj = a.cJS({ imports: [l.ez, e.ot] })),
                        f
                    );
                })();
            var ne = o(6846),
                re = o(9129),
                we = o(1769);
            const Z_google_text = "Continue with Google",
                Z_facebook_text = "Continue with Facebook",
                Z_apple_text = "Continue with Apple";
            function Ae(f, F) {
                if ((1 & f && a._UZ(0, "img", 8), 2 & f)) {
                    const S = a.oxw(2).$implicit,
                        k = a.oxw();
                    a.ekj(
                        "non-experiment",
                        S.style === k.appleButtonStyle ||
                            S.style === k.facebookButtonStyle
                    ),
                        a.Q6J("src", S.iconSrc, a.LSH);
                }
            }
            function ae(f, F) {
                if ((1 & f && a._UZ(0, "img", 9), 2 & f)) {
                    const S = a.oxw(3);
                    a.Q6J("src", S.experimentFacebookIcon, a.LSH);
                }
            }
            function Oe(f, F) {
                if ((1 & f && a._UZ(0, "img", 10), 2 & f)) {
                    const S = a.oxw(3);
                    a.Q6J("src", S.experimentAppleIcon, a.LSH);
                }
            }
            function Fe(f, F) {
                if (1 & f) {
                    const S = a.EpF();
                    a.TgZ(0, "a", 2),
                        a.NdJ("click", function (X) {
                            a.CHM(S);
                            const ee = a.oxw(2);
                            return a.KtG(ee.onClick(X));
                        }),
                        a.TgZ(1, "div", 3),
                        a.YNc(2, Ae, 1, 3, "img", 4),
                        a.YNc(3, ae, 1, 1, "img", 5),
                        a.YNc(4, Oe, 1, 1, "img", 6),
                        a.TgZ(5, "div", 7),
                        a._uU(6),
                        a.qZA()()();
                }
                if (2 & f) {
                    const S = a.oxw().$implicit,
                        k = a.oxw();
                    a.ekj("apple-btn", S.style === k.appleButtonStyle)(
                        "facebook-btn",
                        S.style === k.facebookButtonStyle
                    ),
                        a.xp6(2),
                        a.Q6J("ngIf", S.iconSrc),
                        a.xp6(1),
                        a.Q6J("ngIf", S.style === k.facebookButtonStyle),
                        a.xp6(1),
                        a.Q6J("ngIf", S.style === k.appleButtonStyle),
                        a.xp6(2),
                        a.Oqu(S.text);
                }
            }
            function Be(f, F) {
                if (
                    (1 & f && (a.ynx(0), a.YNc(1, Fe, 7, 8, "a", 1), a.BQk()),
                    2 & f)
                ) {
                    const S = F.$implicit,
                        k = a.oxw();
                    a.xp6(1),
                        a.Q6J(
                            "ngIf",
                            k.button &&
                                k.button.action.style === S.style &&
                                !k.isButtonDisabled(S)
                        );
                }
            }
            let ve = (() => {
                class f {
                    constructor(S, k) {
                        (this.analyticsService = S),
                            (this.i18n = k),
                            (this.clicked = new a.vpe()),
                            (this.appleButtonStyle = ne.XMl[ne.fk3.APPLE]),
                            (this.facebookButtonStyle =
                                ne.XMl[ne.fk3.FACEBOOK]),
                            (this.experimentFacebookIcon = ""),
                            (this.experimentAppleIcon = "");
                    }
                    ngOnInit() {
                        this.setupSocialButtons();
                    }
                    onClick(S) {
                        this.button &&
                            this.button.action.url &&
                            (location.href = this.button.action.url),
                            this.analyticsService.logEvent(
                                this.button.action && this.button.action.event
                            ),
                            this.clicked.emit(this.button);
                    }
                    setupSocialButtons() {
                        (this.experimentFacebookIcon =
                            this.projectAssetsUrl + "/svg/social-facebook.svg"),
                            (this.experimentAppleIcon =
                                this.projectAssetsUrl +
                                "/svg/social-apple.svg"),
                            (this.socialButtons = [
                                {
                                    text: this.i18n.translateText(
                                        Z_google_text
                                    ),
                                    style: ne.XMl[ne.fk3.GOOGLE],
                                    iconSrc: this.projectAssetsUrl
                                        ? this.projectAssetsUrl +
                                          "/svg/social-google.svg"
                                        : null,
                                },
                                {
                                    text: this.i18n.translateText(
                                        Z_facebook_text
                                    ),
                                    style: ne.XMl[ne.fk3.FACEBOOK],
                                    iconSrc: this.projectAssetsUrl
                                        ? this.projectAssetsUrl +
                                          "/svg/social-facebook-white.svg"
                                        : null,
                                },
                                {
                                    text: this.i18n.translateText(Z_apple_text),
                                    style: ne.XMl[ne.fk3.APPLE],
                                    iconSrc: this.projectAssetsUrl
                                        ? this.projectAssetsUrl +
                                          "/svg/social-apple-white.svg"
                                        : null,
                                },
                            ]);
                    }
                    isButtonDisabled(S) {
                        switch (S.style) {
                            case ne.XMl[ne.fk3.GOOGLE]:
                                return this.isGoogleDisabled;
                            case ne.XMl[ne.fk3.FACEBOOK]:
                                return this.isFacebookDisabled;
                            case ne.XMl[ne.fk3.APPLE]:
                                return this.isAppleDisabled;
                            default:
                                return !1;
                        }
                    }
                }
                return (
                    (f.ɵfac = function (S) {
                        return new (S || f)(a.Y36(re.y), a.Y36(we.K));
                    }),
                    (f.ɵcmp = a.Xpm({
                        type: f,
                        selectors: [["luno-social-button"]],
                        inputs: {
                            button: "button",
                            projectAssetsUrl: "projectAssetsUrl",
                            isGoogleDisabled: "isGoogleDisabled",
                            isFacebookDisabled: "isFacebookDisabled",
                            isAppleDisabled: "isAppleDisabled",
                        },
                        outputs: { clicked: "clicked" },
                        decls: 1,
                        vars: 1,
                        consts: [
                            [4, "ngFor", "ngForOf"],
                            [
                                "mat-button",
                                "",
                                "role",
                                "button",
                                "class",
                                "social-button",
                                3,
                                "apple-btn",
                                "facebook-btn",
                                "click",
                                4,
                                "ngIf",
                            ],
                            [
                                "mat-button",
                                "",
                                "role",
                                "button",
                                1,
                                "social-button",
                                3,
                                "click",
                            ],
                            [1, "social-button-inner"],
                            [
                                "alt",
                                "social button icon",
                                "loading",
                                "lazy",
                                3,
                                "non-experiment",
                                "src",
                                4,
                                "ngIf",
                            ],
                            [
                                "alt",
                                "social button icon Facebook",
                                "loading",
                                "lazy",
                                "class",
                                "experiment",
                                3,
                                "src",
                                4,
                                "ngIf",
                            ],
                            [
                                "alt",
                                "social button icon Apple",
                                "loading",
                                "lazy",
                                "class",
                                "experiment",
                                3,
                                "src",
                                4,
                                "ngIf",
                            ],
                            [1, "inner-text"],
                            [
                                "alt",
                                "social button icon",
                                "loading",
                                "lazy",
                                3,
                                "src",
                            ],
                            [
                                "alt",
                                "social button icon Facebook",
                                "loading",
                                "lazy",
                                1,
                                "experiment",
                                3,
                                "src",
                            ],
                            [
                                "alt",
                                "social button icon Apple",
                                "loading",
                                "lazy",
                                1,
                                "experiment",
                                3,
                                "src",
                            ],
                        ],
                        template: function (S, k) {
                            1 & S && a.YNc(0, Be, 2, 1, "ng-container", 0),
                                2 & S && a.Q6J("ngForOf", k.socialButtons);
                        },
                        dependencies: [l.sg, l.O5, e.zs],
                        styles: [
                            ".social-button[_ngcontent-%COMP%]{padding:0 24px;text-transform:uppercase;font-weight:400;margin-bottom:16px!important;border:1px solid #000000;color:#000!important;max-width:344px;width:100%}.social-button[_ngcontent-%COMP%]     .mat-button-wrapper{display:flex;justify-content:left;align-items:center;text-transform:capitalize}.social-button[_ngcontent-%COMP%]   .social-button-inner[_ngcontent-%COMP%]{display:flex;margin-left:calc(25% - 34px);justify-content:center;align-items:center}.social-button[_ngcontent-%COMP%]   .social-button-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;margin-right:24px}.social-button[_ngcontent-%COMP%]   .social-button-inner[_ngcontent-%COMP%]   .inner-text[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.37px}@media screen and (max-width: 768px){.social-button[_ngcontent-%COMP%]   .social-button-inner[_ngcontent-%COMP%]{margin:0 auto}}.facebook-btn[_ngcontent-%COMP%]{background:#0091ff!important;color:var(--color-neutral-0)!important;border:none}.facebook-btn[_ngcontent-%COMP%]:hover{background:#1a9cff!important}.apple-btn[_ngcontent-%COMP%]{background:#000000!important;color:var(--color-neutral-0)!important;border:none}.apple-btn[_ngcontent-%COMP%]:hover{background:#0d0d0d!important}.experiment[_ngcontent-%COMP%]{display:none}.signup-variant-wrapper[_nghost-%COMP%]   .experiment[_ngcontent-%COMP%], .signup-variant-wrapper   [_nghost-%COMP%]   .experiment[_ngcontent-%COMP%]{display:block}.signup-variant-wrapper[_nghost-%COMP%]   .non-experiment[_ngcontent-%COMP%], .signup-variant-wrapper   [_nghost-%COMP%]   .non-experiment[_ngcontent-%COMP%]{display:none}.signup-variant-wrapper[_nghost-%COMP%]   .facebook-btn[_ngcontent-%COMP%], .signup-variant-wrapper   [_nghost-%COMP%]   .facebook-btn[_ngcontent-%COMP%]{background:#ffffff!important;border:1px solid #000000;color:#000!important}.signup-variant-wrapper[_nghost-%COMP%]   .apple-btn[_ngcontent-%COMP%], .signup-variant-wrapper   [_nghost-%COMP%]   .apple-btn[_ngcontent-%COMP%]{background:#ffffff!important;border:1px solid #000000;color:#000!important}",
                        ],
                    })),
                    f
                );
            })();
            function he(f, F) {
                1 & f && a.GkF(0);
            }
            function Ct(f, F) {
                if (1 & f) {
                    const S = a.EpF();
                    a.TgZ(0, "a", 6),
                        a.NdJ("click", function (X) {
                            a.CHM(S);
                            const ee = a.oxw(2);
                            return a.KtG(ee.onClick(X));
                        }),
                        a.YNc(1, he, 1, 0, "ng-container", 7),
                        a.qZA();
                }
                if (2 & f) {
                    const S = a.oxw(2),
                        k = a.MAs(3);
                    a.Udp("color", S.textColor),
                        a.Q6J("disabled", S.isDisabled)(
                            "routerLink",
                            S.isDisabled ||
                                null == S.button ||
                                null == S.button.action
                                ? null
                                : S.button.action.url
                        )("queryParams", S.params)("color", S.themePalette),
                        a.xp6(1),
                        a.Q6J("ngTemplateOutlet", k);
                }
            }
            function Ge(f, F) {
                1 & f && a.GkF(0);
            }
            function ye(f, F) {
                if (1 & f) {
                    const S = a.EpF();
                    a.TgZ(0, "a", 8),
                        a.NdJ("click", function (X) {
                            a.CHM(S);
                            const ee = a.oxw(2);
                            return a.KtG(ee.onClick(X));
                        }),
                        a.YNc(1, Ge, 1, 0, "ng-container", 7),
                        a.qZA();
                }
                if (2 & f) {
                    const S = a.oxw(2),
                        k = a.MAs(3);
                    a.Udp("color", S.textColor),
                        a.Q6J("color", S.themePalette)(
                            "disabled",
                            S.isDisabled
                        )(
                            "routerLink",
                            S.isDisabled ||
                                null == S.button ||
                                null == S.button.action
                                ? null
                                : S.button.action.url
                        )("queryParams", S.params),
                        a.xp6(1),
                        a.Q6J("ngTemplateOutlet", k);
                }
            }
            function Ye(f, F) {
                1 & f && a.GkF(0);
            }
            function Tt(f, F) {
                if (1 & f) {
                    const S = a.EpF();
                    a.TgZ(0, "a", 9),
                        a.NdJ("click", function (X) {
                            a.CHM(S);
                            const ee = a.oxw(2);
                            return a.KtG(ee.onClick(X));
                        }),
                        a.YNc(1, Ye, 1, 0, "ng-container", 7),
                        a.qZA();
                }
                if (2 & f) {
                    const S = a.oxw(2),
                        k = a.MAs(3);
                    a.Udp("color", S.textColor),
                        a.Q6J("color", S.themePalette)(
                            "disabled",
                            S.isDisabled
                        )(
                            "routerLink",
                            S.isDisabled ||
                                null == S.button ||
                                null == S.button.action
                                ? null
                                : S.button.action.url
                        )("queryParams", S.params),
                        a.xp6(1),
                        a.Q6J("ngTemplateOutlet", k);
                }
            }
            function ue(f, F) {
                if (
                    (1 & f &&
                        (a.ynx(0, 2),
                        a.YNc(1, Ct, 2, 7, "a", 3),
                        a.YNc(2, ye, 2, 7, "a", 4),
                        a.YNc(3, Tt, 2, 7, "a", 5),
                        a.BQk()),
                    2 & f)
                ) {
                    const S = a.oxw();
                    a.Q6J("ngSwitch", S.buttonType),
                        a.xp6(1),
                        a.Q6J("ngSwitchCase", S.buttonTypeEnum.PRIMARY),
                        a.xp6(1),
                        a.Q6J("ngSwitchCase", S.buttonTypeEnum.SECONDARY),
                        a.xp6(1),
                        a.Q6J("ngSwitchCase", S.buttonTypeEnum.TERTIARY);
                }
            }
            function Et(f, F) {
                1 & f && a.GkF(0);
            }
            function Pe(f, F) {
                if (1 & f) {
                    const S = a.EpF();
                    a.TgZ(0, "a", 14),
                        a.NdJ("click", function (X) {
                            a.CHM(S);
                            const ee = a.oxw(2);
                            return a.KtG(ee.onClick(X));
                        }),
                        a.YNc(1, Et, 1, 0, "ng-container", 7),
                        a.qZA();
                }
                if (2 & f) {
                    const S = a.oxw(2),
                        k = a.MAs(3);
                    a.Udp("color", S.textColor),
                        a.Q6J("disabled", S.isDisabled)(
                            "href",
                            null == S.button || null == S.button.action
                                ? null
                                : S.button.action.url,
                            a.LSH
                        )("target", S.shouldOpenInNewWindow ? "_blank" : "")(
                            "rel",
                            S.rel
                        )("color", S.themePalette),
                        a.xp6(1),
                        a.Q6J("ngTemplateOutlet", k);
                }
            }
            function It(f, F) {
                1 & f && a.GkF(0);
            }
            function ct(f, F) {
                if (1 & f) {
                    const S = a.EpF();
                    a.TgZ(0, "a", 15),
                        a.NdJ("click", function (X) {
                            a.CHM(S);
                            const ee = a.oxw(2);
                            return a.KtG(ee.onClick(X));
                        }),
                        a.YNc(1, It, 1, 0, "ng-container", 7),
                        a.qZA();
                }
                if (2 & f) {
                    const S = a.oxw(2),
                        k = a.MAs(3);
                    a.Udp("color", S.textColor),
                        a.Q6J("disabled", S.isDisabled)(
                            "href",
                            null == S.button || null == S.button.action
                                ? null
                                : S.button.action.url,
                            a.LSH
                        )("target", S.shouldOpenInNewWindow ? "_blank" : "")(
                            "rel",
                            S.rel
                        )("color", S.themePalette),
                        a.xp6(1),
                        a.Q6J("ngTemplateOutlet", k);
                }
            }
            function Me(f, F) {
                1 & f && a.GkF(0);
            }
            function ft(f, F) {
                if (1 & f) {
                    const S = a.EpF();
                    a.TgZ(0, "a", 16),
                        a.NdJ("click", function (X) {
                            a.CHM(S);
                            const ee = a.oxw(2);
                            return a.KtG(ee.onClick(X));
                        }),
                        a.YNc(1, Me, 1, 0, "ng-container", 7),
                        a.qZA();
                }
                if (2 & f) {
                    const S = a.oxw(2),
                        k = a.MAs(3);
                    a.Udp("color", S.textColor),
                        a.Q6J("disabled", S.isDisabled)(
                            "href",
                            null == S.button || null == S.button.action
                                ? null
                                : S.button.action.url,
                            a.LSH
                        )("target", S.shouldOpenInNewWindow ? "_blank" : "")(
                            "rel",
                            S.rel
                        )("color", S.themePalette),
                        a.xp6(1),
                        a.Q6J("ngTemplateOutlet", k);
                }
            }
            function St(f, F) {
                if ((1 & f && a._UZ(0, "luno-social-button", 17), 2 & f)) {
                    const S = a.oxw(2);
                    a.Q6J("button", S.button)(
                        "projectAssetsUrl",
                        S.projectAssetsUrl
                    );
                }
            }
            function He(f, F) {
                if (
                    (1 & f &&
                        (a.ynx(0, 2),
                        a.YNc(1, Pe, 2, 8, "a", 10),
                        a.YNc(2, ct, 2, 8, "a", 11),
                        a.YNc(3, ft, 2, 8, "a", 12),
                        a.YNc(4, St, 1, 2, "luno-social-button", 13),
                        a.BQk()),
                    2 & f)
                ) {
                    const S = a.oxw();
                    a.Q6J("ngSwitch", S.buttonType),
                        a.xp6(1),
                        a.Q6J("ngSwitchCase", S.buttonTypeEnum.PRIMARY),
                        a.xp6(1),
                        a.Q6J("ngSwitchCase", S.buttonTypeEnum.SECONDARY),
                        a.xp6(1),
                        a.Q6J("ngSwitchCase", S.buttonTypeEnum.TERTIARY),
                        a.xp6(1),
                        a.Q6J("ngSwitchCase", S.buttonTypeEnum.SOCIAL);
                }
            }
            function lt(f, F) {
                1 & f && a.Hsn(0);
            }
            const ke = ["*"];
            let Xe = (() => {
                class f {
                    constructor() {
                        (this.params = {}),
                            (this.isDisabled = !1),
                            (this.isExternalLink = !1),
                            (this.shouldOpenInNewWindow = !1),
                            (this.rel = null),
                            (this.themePalette = "primary"),
                            (this.clicked = new a.vpe()),
                            (this.buttonTypeEnum = z.L$);
                    }
                    onClick(S) {
                        this.clicked.emit(S);
                    }
                }
                return (
                    (f.ɵfac = function (S) {
                        return new (S || f)();
                    }),
                    (f.ɵcmp = a.Xpm({
                        type: f,
                        selectors: [["luno-anchor-with-url-button"]],
                        inputs: {
                            buttonType: "buttonType",
                            button: "button",
                            params: "params",
                            isDisabled: "isDisabled",
                            isExternalLink: "isExternalLink",
                            shouldOpenInNewWindow: "shouldOpenInNewWindow",
                            rel: "rel",
                            textColor: "textColor",
                            themePalette: "themePalette",
                            projectAssetsUrl: "projectAssetsUrl",
                        },
                        outputs: { clicked: "clicked" },
                        ngContentSelectors: ke,
                        decls: 4,
                        vars: 2,
                        consts: [
                            [3, "ngSwitch", 4, "ngIf"],
                            ["buttonContent", ""],
                            [3, "ngSwitch"],
                            [
                                "mat-flat-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "routerLink",
                                "queryParams",
                                "color",
                                "click",
                                4,
                                "ngSwitchCase",
                            ],
                            [
                                "mat-button",
                                "",
                                3,
                                "color",
                                "disabled",
                                "routerLink",
                                "queryParams",
                                "click",
                                4,
                                "ngSwitchCase",
                            ],
                            [
                                "mat-stroked-button",
                                "",
                                3,
                                "color",
                                "disabled",
                                "routerLink",
                                "queryParams",
                                "click",
                                4,
                                "ngSwitchCase",
                            ],
                            [
                                "mat-flat-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "routerLink",
                                "queryParams",
                                "color",
                                "click",
                            ],
                            [4, "ngTemplateOutlet"],
                            [
                                "mat-button",
                                "",
                                3,
                                "color",
                                "disabled",
                                "routerLink",
                                "queryParams",
                                "click",
                            ],
                            [
                                "mat-stroked-button",
                                "",
                                3,
                                "color",
                                "disabled",
                                "routerLink",
                                "queryParams",
                                "click",
                            ],
                            [
                                "mat-flat-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "href",
                                "target",
                                "rel",
                                "color",
                                "click",
                                4,
                                "ngSwitchCase",
                            ],
                            [
                                "mat-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "href",
                                "target",
                                "rel",
                                "color",
                                "click",
                                4,
                                "ngSwitchCase",
                            ],
                            [
                                "mat-stroked-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "href",
                                "target",
                                "rel",
                                "color",
                                "click",
                                4,
                                "ngSwitchCase",
                            ],
                            [
                                3,
                                "button",
                                "projectAssetsUrl",
                                4,
                                "ngSwitchCase",
                            ],
                            [
                                "mat-flat-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "href",
                                "target",
                                "rel",
                                "color",
                                "click",
                            ],
                            [
                                "mat-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "href",
                                "target",
                                "rel",
                                "color",
                                "click",
                            ],
                            [
                                "mat-stroked-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "href",
                                "target",
                                "rel",
                                "color",
                                "click",
                            ],
                            [3, "button", "projectAssetsUrl"],
                        ],
                        template: function (S, k) {
                            1 & S &&
                                (a.F$t(),
                                a.YNc(0, ue, 4, 4, "ng-container", 0),
                                a.YNc(1, He, 5, 5, "ng-container", 0),
                                a.YNc(
                                    2,
                                    lt,
                                    1,
                                    0,
                                    "ng-template",
                                    null,
                                    1,
                                    a.W1O
                                )),
                                2 & S &&
                                    (a.Q6J("ngIf", !k.isExternalLink),
                                    a.xp6(1),
                                    a.Q6J("ngIf", k.isExternalLink));
                        },
                        dependencies: [l.O5, l.tP, l.RF, l.n9, e.zs, I.yS, ve],
                        encapsulation: 2,
                        changeDetection: 0,
                    })),
                    f
                );
            })();
            function Nt(f, F) {
                1 & f && a.GkF(0);
            }
            function At(f, F) {
                if (1 & f) {
                    const S = a.EpF();
                    a.TgZ(0, "a", 5),
                        a.NdJ("click", function (X) {
                            a.CHM(S);
                            const ee = a.oxw();
                            return a.KtG(ee.onClick(X));
                        }),
                        a.YNc(1, Nt, 1, 0, "ng-container", 6),
                        a.qZA();
                }
                if (2 & f) {
                    const S = a.oxw(),
                        k = a.MAs(5);
                    a.Udp("color", S.textColor),
                        a.Q6J("disabled", S.isDisabled)(
                            "color",
                            S.themePalette
                        ),
                        a.xp6(1),
                        a.Q6J("ngTemplateOutlet", k);
                }
            }
            function qe(f, F) {
                1 & f && a.GkF(0);
            }
            function Ot(f, F) {
                if (1 & f) {
                    const S = a.EpF();
                    a.TgZ(0, "a", 7),
                        a.NdJ("click", function (X) {
                            a.CHM(S);
                            const ee = a.oxw();
                            return a.KtG(ee.onClick(X));
                        }),
                        a.YNc(1, qe, 1, 0, "ng-container", 6),
                        a.qZA();
                }
                if (2 & f) {
                    const S = a.oxw(),
                        k = a.MAs(5);
                    a.Udp("color", S.textColor),
                        a.Q6J("disabled", S.isDisabled)(
                            "color",
                            S.themePalette
                        ),
                        a.xp6(1),
                        a.Q6J("ngTemplateOutlet", k);
                }
            }
            function Ce(f, F) {
                1 & f && a.GkF(0);
            }
            function et(f, F) {
                if (1 & f) {
                    const S = a.EpF();
                    a.TgZ(0, "a", 8),
                        a.NdJ("click", function (X) {
                            a.CHM(S);
                            const ee = a.oxw();
                            return a.KtG(ee.onClick(X));
                        }),
                        a.YNc(1, Ce, 1, 0, "ng-container", 6),
                        a.qZA();
                }
                if (2 & f) {
                    const S = a.oxw(),
                        k = a.MAs(5);
                    a.Udp("color", S.textColor),
                        a.Q6J("disabled", S.isDisabled)(
                            "color",
                            S.themePalette
                        ),
                        a.xp6(1),
                        a.Q6J("ngTemplateOutlet", k);
                }
            }
            function tt(f, F) {
                1 & f && a.Hsn(0);
            }
            const vt = ["*"];
            let Ke = (() => {
                class f {
                    constructor() {
                        (this.isDisabled = !1),
                            (this.themePalette = "primary"),
                            (this.clicked = new a.vpe()),
                            (this.ButtonTypeEnum = z.L$);
                    }
                    onClick(S) {
                        this.clicked.emit(S);
                    }
                }
                return (
                    (f.ɵfac = function (S) {
                        return new (S || f)();
                    }),
                    (f.ɵcmp = a.Xpm({
                        type: f,
                        selectors: [["luno-anchor-without-url-button"]],
                        inputs: {
                            buttonType: "buttonType",
                            isDisabled: "isDisabled",
                            textColor: "textColor",
                            themePalette: "themePalette",
                        },
                        outputs: { clicked: "clicked" },
                        ngContentSelectors: vt,
                        decls: 6,
                        vars: 4,
                        consts: [
                            [3, "ngSwitch"],
                            [
                                "mat-flat-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "color",
                                "click",
                                4,
                                "ngSwitchCase",
                            ],
                            [
                                "mat-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "color",
                                "click",
                                4,
                                "ngSwitchCase",
                            ],
                            [
                                "mat-stroked-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "color",
                                "click",
                                4,
                                "ngSwitchCase",
                            ],
                            ["buttonContent", ""],
                            [
                                "mat-flat-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "color",
                                "click",
                            ],
                            [4, "ngTemplateOutlet"],
                            [
                                "mat-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "color",
                                "click",
                            ],
                            [
                                "mat-stroked-button",
                                "",
                                "role",
                                "button",
                                3,
                                "disabled",
                                "color",
                                "click",
                            ],
                        ],
                        template: function (S, k) {
                            1 & S &&
                                (a.F$t(),
                                a.ynx(0, 0),
                                a.YNc(1, At, 2, 5, "a", 1),
                                a.YNc(2, Ot, 2, 5, "a", 2),
                                a.YNc(3, et, 2, 5, "a", 3),
                                a.BQk(),
                                a.YNc(
                                    4,
                                    tt,
                                    1,
                                    0,
                                    "ng-template",
                                    null,
                                    4,
                                    a.W1O
                                )),
                                2 & S &&
                                    (a.Q6J("ngSwitch", k.buttonType),
                                    a.xp6(1),
                                    a.Q6J(
                                        "ngSwitchCase",
                                        k.ButtonTypeEnum.PRIMARY
                                    ),
                                    a.xp6(1),
                                    a.Q6J(
                                        "ngSwitchCase",
                                        k.ButtonTypeEnum.SECONDARY
                                    ),
                                    a.xp6(1),
                                    a.Q6J(
                                        "ngSwitchCase",
                                        k.ButtonTypeEnum.TERTIARY
                                    ));
                        },
                        dependencies: [l.tP, l.RF, l.n9, e.zs],
                        encapsulation: 2,
                        changeDetection: 0,
                    })),
                    f
                );
            })();
            function yt(f, F) {
                1 & f && a.GkF(0);
            }
            function nt(f, F) {
                if (1 & f) {
                    const S = a.EpF();
                    a.TgZ(0, "button", 4),
                        a.NdJ("click", function (X) {
                            a.CHM(S);
                            const ee = a.oxw();
                            return a.KtG(ee.onClick(X));
                        }),
                        a.YNc(1, yt, 1, 0, "ng-container", 5),
                        a.qZA();
                }
                if (2 & f) {
                    const S = a.oxw(),
                        k = a.MAs(4);
                    a.Udp("color", S.textColor),
                        a.Q6J("color", S.themePalette)(
                            "disabled",
                            S.isDisabled
                        ),
                        a.xp6(1),
                        a.Q6J("ngTemplateOutlet", k);
                }
            }
            function Pt(f, F) {
                1 & f && a.GkF(0);
            }
            function xt(f, F) {
                if (1 & f) {
                    const S = a.EpF();
                    a.TgZ(0, "button", 6),
                        a.NdJ("click", function (X) {
                            a.CHM(S);
                            const ee = a.oxw();
                            return a.KtG(ee.onClick(X));
                        }),
                        a.YNc(1, Pt, 1, 0, "ng-container", 5),
                        a.qZA();
                }
                if (2 & f) {
                    const S = a.oxw(),
                        k = a.MAs(4);
                    a.Udp("color", S.textColor),
                        a.Q6J("color", S.themePalette)(
                            "disabled",
                            S.isDisabled
                        ),
                        a.xp6(1),
                        a.Q6J("ngTemplateOutlet", k);
                }
            }
            function Kt(f, F) {
                1 & f && a.Hsn(0);
            }
            const xe = ["*"];
            let Rt = (() => {
                    class f {
                        constructor() {
                            (this.isDisabled = !1),
                                (this.themePalette = "primary"),
                                (this.clicked = new a.vpe()),
                                (this.buttonTypeEnum = z.L$);
                        }
                        onClick(S) {
                            this.clicked.emit(S);
                        }
                    }
                    return (
                        (f.ɵfac = function (S) {
                            return new (S || f)();
                        }),
                        (f.ɵcmp = a.Xpm({
                            type: f,
                            selectors: [["luno-submit-button"]],
                            inputs: {
                                buttonType: "buttonType",
                                isDisabled: "isDisabled",
                                textColor: "textColor",
                                themePalette: "themePalette",
                            },
                            outputs: { clicked: "clicked" },
                            ngContentSelectors: xe,
                            decls: 5,
                            vars: 3,
                            consts: [
                                [3, "ngSwitch"],
                                [
                                    "mat-flat-button",
                                    "",
                                    "type",
                                    "submit",
                                    "role",
                                    "button",
                                    3,
                                    "color",
                                    "disabled",
                                    "click",
                                    4,
                                    "ngSwitchCase",
                                ],
                                [
                                    "mat-button",
                                    "",
                                    "type",
                                    "submit",
                                    "role",
                                    "button",
                                    3,
                                    "color",
                                    "disabled",
                                    "click",
                                    4,
                                    "ngSwitchCase",
                                ],
                                ["buttonContent", ""],
                                [
                                    "mat-flat-button",
                                    "",
                                    "type",
                                    "submit",
                                    "role",
                                    "button",
                                    3,
                                    "color",
                                    "disabled",
                                    "click",
                                ],
                                [4, "ngTemplateOutlet"],
                                [
                                    "mat-button",
                                    "",
                                    "type",
                                    "submit",
                                    "role",
                                    "button",
                                    3,
                                    "color",
                                    "disabled",
                                    "click",
                                ],
                            ],
                            template: function (S, k) {
                                1 & S &&
                                    (a.F$t(),
                                    a.ynx(0, 0),
                                    a.YNc(1, nt, 2, 5, "button", 1),
                                    a.YNc(2, xt, 2, 5, "button", 2),
                                    a.BQk(),
                                    a.YNc(
                                        3,
                                        Kt,
                                        1,
                                        0,
                                        "ng-template",
                                        null,
                                        3,
                                        a.W1O
                                    )),
                                    2 & S &&
                                        (a.Q6J("ngSwitch", k.buttonType),
                                        a.xp6(1),
                                        a.Q6J(
                                            "ngSwitchCase",
                                            k.buttonTypeEnum.PRIMARY
                                        ),
                                        a.xp6(1),
                                        a.Q6J(
                                            "ngSwitchCase",
                                            k.buttonTypeEnum.SECONDARY
                                        ));
                            },
                            dependencies: [l.tP, l.RF, l.n9, e.lW],
                            encapsulation: 2,
                            changeDetection: 0,
                        })),
                        f
                    );
                })(),
                Ve = (() => {
                    class f {}
                    return (
                        (f.ɵfac = function (S) {
                            return new (S || f)();
                        }),
                        (f.ɵmod = a.oAB({ type: f })),
                        (f.ɵinj = a.cJS({
                            imports: [
                                M,
                                l.ez,
                                ie,
                                e.ot,
                                g.Ps,
                                E.Cq,
                                c.ZX,
                                I.Bz,
                                De,
                            ],
                        })),
                        f
                    );
                })();
            a.B6R(z.r0, [l.O5, l.tP, l.RF, l.n9, g.Hw, E.Ou, Ke, Xe, Rt], []);
        },
        1451: (W, x, o) => {
            o.d(x, { Q: () => g });
            var l = o(4666),
                e = o(2560);
            let g = (() => {
                class E {}
                return (
                    (E.ɵfac = function (I) {
                        return new (I || E)();
                    }),
                    (E.ɵmod = e.oAB({ type: E })),
                    (E.ɵinj = e.cJS({ imports: [l.ez] })),
                    E
                );
            })();
        },
        2157: (W, x, o) => {
            o.d(x, { a: () => Ne });
            var l = o(2508),
                e = o(1484),
                g = o(8625),
                E = o(9129),
                c = o(2560),
                I = o(4666),
                O = o(4522),
                T = o(4792),
                m = o(3178);
            function _(H, q) {
                if ((1 & H && c._UZ(0, "img", 6), 2 & H)) {
                    const M = c.oxw();
                    c.Q6J("src", M.headerImageUrl, c.LSH);
                }
            }
            function a(H, q) {
                if ((1 & H && c._UZ(0, "div", 7), 2 & H)) {
                    const M = c.oxw();
                    c.Q6J("innerHTML", M.bodyHtml, c.oJD);
                }
            }
            function R(H, q) {
                if (
                    (1 & H &&
                        (c.TgZ(0, "div", 8)(1, "mat-checkbox", 9),
                        c._UZ(2, "p", 10),
                        c.qZA()()),
                    2 & H)
                ) {
                    const M = c.oxw();
                    c.ekj("error", M.hasAttemptedConfirm && !M.checkbox.value),
                        c.xp6(1),
                        c.Q6J("formControl", M.checkbox),
                        c.xp6(1),
                        c.Q6J("innerHTML", M.checkboxText, c.oJD);
                }
            }
            function P(H, q) {
                if (1 & H) {
                    const M = c.EpF();
                    c.TgZ(0, "button", 12),
                        c.NdJ("click", function () {
                            c.CHM(M);
                            const ie = c.oxw(2);
                            return c.KtG(ie.dismiss(!1));
                        }),
                        c._uU(1),
                        c.qZA();
                }
                if (2 & H) {
                    const M = c.oxw(2);
                    c.uIk("cdkFocusInitial", !!M.focusSecondaryButton || null),
                        c.xp6(1),
                        c.Oqu(M.secondaryActionName);
                }
            }
            function L(H, q) {
                if (1 & H) {
                    const M = c.EpF();
                    c.TgZ(0, "a", 15),
                        c.NdJ("click", function () {
                            c.CHM(M);
                            const ie = c.oxw(3);
                            return c.KtG(ie.dismiss(!1));
                        }),
                        c._uU(1),
                        c.qZA();
                }
                if (2 & H) {
                    const M = c.oxw(3);
                    c.Q6J("routerLink", M.secondaryActionUrl)(
                        "queryParams",
                        M.secondaryActionUrlParams
                    ),
                        c.xp6(1),
                        c.Oqu(M.secondaryActionName);
                }
            }
            function K(H, q) {
                if (1 & H) {
                    const M = c.EpF();
                    c.TgZ(0, "a", 16),
                        c.NdJ("click", function () {
                            c.CHM(M);
                            const ie = c.oxw(3);
                            return c.KtG(
                                ie.dismiss(!1, !ie.closeOnSecondaryButtonClick)
                            );
                        }),
                        c._uU(1),
                        c.qZA();
                }
                if (2 & H) {
                    const M = c.oxw(3);
                    c.Q6J(
                        "href",
                        M.secondaryActionUrl,
                        c.LSH
                    )(
                        "target",
                        M.shouldOpenInNewWindow(M.secondaryActionUrl)
                            ? "_blank"
                            : ""
                    ),
                        c.xp6(1),
                        c.Oqu(M.secondaryActionName);
                }
            }
            function B(H, q) {
                if (
                    (1 & H &&
                        (c.ynx(0),
                        c.YNc(1, L, 2, 3, "a", 13),
                        c.YNc(2, K, 2, 3, "a", 14),
                        c.BQk()),
                    2 & H)
                ) {
                    const M = c.oxw(2);
                    c.xp6(1),
                        c.Q6J(
                            "ngIf",
                            !M.showExternalLink(M.secondaryActionUrl)
                        ),
                        c.xp6(1),
                        c.Q6J("ngIf", M.showExternalLink(M.secondaryActionUrl));
                }
            }
            function j(H, q) {
                if (
                    (1 & H &&
                        (c.ynx(0),
                        c.YNc(1, P, 2, 2, "button", 11),
                        c.YNc(2, B, 3, 2, "ng-container", 5),
                        c.BQk()),
                    2 & H)
                ) {
                    const M = c.oxw();
                    c.xp6(1),
                        c.Q6J("ngIf", M.showSecondaryButton),
                        c.xp6(1),
                        c.Q6J("ngIf", M.showSecondaryLink);
                }
            }
            function v(H, q) {
                if (1 & H) {
                    const M = c.EpF();
                    c.TgZ(0, "button", 12),
                        c.NdJ("click", function () {
                            c.CHM(M);
                            const ie = c.oxw(2);
                            return c.KtG(ie.dismiss(!0));
                        }),
                        c._uU(1),
                        c.qZA();
                }
                if (2 & H) {
                    const M = c.oxw(2);
                    c.uIk("cdkFocusInitial", !M.focusSecondaryButton || null),
                        c.xp6(1),
                        c.Oqu(M.primaryActionName);
                }
            }
            function y(H, q) {
                if (1 & H) {
                    const M = c.EpF();
                    c.TgZ(0, "a", 15),
                        c.NdJ("click", function () {
                            c.CHM(M);
                            const ie = c.oxw(3);
                            return c.KtG(ie.dismiss(!0));
                        }),
                        c._uU(1),
                        c.qZA();
                }
                if (2 & H) {
                    const M = c.oxw(3);
                    c.Q6J("routerLink", M.primaryActionUrl)(
                        "queryParams",
                        M.primaryActionUrlParams
                    ),
                        c.xp6(1),
                        c.Oqu(M.primaryActionName);
                }
            }
            function w(H, q) {
                if (1 & H) {
                    const M = c.EpF();
                    c.TgZ(0, "a", 16),
                        c.NdJ("click", function () {
                            c.CHM(M);
                            const ie = c.oxw(3);
                            return c.KtG(ie.dismiss(!0));
                        }),
                        c._uU(1),
                        c.qZA();
                }
                if (2 & H) {
                    const M = c.oxw(3);
                    c.Q6J(
                        "href",
                        M.primaryActionUrl,
                        c.LSH
                    )(
                        "target",
                        M.shouldOpenInNewWindow(M.primaryActionUrl)
                            ? "_blank"
                            : ""
                    ),
                        c.xp6(1),
                        c.Oqu(M.primaryActionName);
                }
            }
            function Q(H, q) {
                if (
                    (1 & H &&
                        (c.ynx(0),
                        c.YNc(1, y, 2, 3, "a", 13),
                        c.YNc(2, w, 2, 3, "a", 14),
                        c.BQk()),
                    2 & H)
                ) {
                    const M = c.oxw(2);
                    c.xp6(1),
                        c.Q6J("ngIf", !M.showExternalLink(M.primaryActionUrl)),
                        c.xp6(1),
                        c.Q6J("ngIf", M.showExternalLink(M.primaryActionUrl));
                }
            }
            function ce(H, q) {
                if (
                    (1 & H &&
                        (c.ynx(0),
                        c.YNc(1, v, 2, 2, "button", 11),
                        c.YNc(2, Q, 3, 2, "ng-container", 5),
                        c.BQk()),
                    2 & H)
                ) {
                    const M = c.oxw();
                    c.xp6(1),
                        c.Q6J("ngIf", M.showPrimaryButton),
                        c.xp6(1),
                        c.Q6J("ngIf", M.showPrimaryLink);
                }
            }
            let Ne = (() => {
                class H {
                    constructor(M, z, ie, De) {
                        (this.analyticsService = M),
                            (this.dialogRef = z),
                            (this.actionService = ie),
                            (this.config = De),
                            (this.focusSecondaryButton = !1),
                            (this.checkbox = new l.p4()),
                            (this.hasAttemptedConfirm = !1);
                    }
                    get showPrimaryButton() {
                        return !this.primaryActionUrl || !!this.primaryActionId;
                    }
                    get showPrimaryLink() {
                        return !this.showPrimaryButton;
                    }
                    get showSecondaryButton() {
                        return (
                            !this.secondaryActionUrl || !!this.secondaryActionId
                        );
                    }
                    get showSecondaryLink() {
                        return !this.showSecondaryButton;
                    }
                    ngOnInit() {
                        !this.config ||
                            (this.initDialog(),
                            this.analyticsService.trackPage(
                                this.config.screenName,
                                null,
                                null,
                                !0
                            ),
                            (this.checkboxValueSubscription = this.handleCheckboxValueChange()));
                    }
                    ngOnDestroy() {
                        this.config?.screenName &&
                            this.analyticsService.trackMarkedPage(),
                            this.checkboxValueSubscription?.unsubscribe();
                    }
                    handleCheckboxValueChange() {
                        return (
                            (this.dialogRef.disableClose = !!this.checkboxText),
                            this.checkbox.valueChanges.subscribe((M) => {
                                !this.checkboxText ||
                                    (this.dialogRef.disableClose = !M);
                            })
                        );
                    }
                    dismiss(M = !1, z = !1) {
                        M && this.checkboxText && !this.checkbox.value
                            ? (this.hasAttemptedConfirm = !0)
                            : (M &&
                                  this.config.primaryAction?.event &&
                                  this.analyticsService.logEvent(
                                      this.config.primaryAction.event
                                  ),
                              !M &&
                                  this.config.secondaryAction?.event &&
                                  this.analyticsService.logEvent(
                                      this.config.secondaryAction.event
                                  ),
                              !z && this.dialogRef.close(M));
                    }
                    showExternalLink(M) {
                        return !!M && this.actionService.isExternalLink(M);
                    }
                    shouldOpenInNewWindow(M) {
                        return (
                            !!M && this.actionService.shouldOpenInNewWindow(M)
                        );
                    }
                    initDialog() {
                        (this.headerImageUrl =
                            this.config.header && this.config.header.imageUrl),
                            (this.titleHtml = this.config.title),
                            (this.bodyHtml =
                                this.config.bodyHtml || this.config.body),
                            (this.checkboxText = this.config.checkboxLabel),
                            (this.secondaryActionName = this.config.secondaryAction?.name),
                            (this.secondaryActionId = this.config.secondaryAction?.id),
                            (this.secondaryActionUrl = this.getActionUrl(
                                this.config.secondaryAction?.url
                            )),
                            (this.secondaryActionUrlParams = this.actionService.getParams(
                                this.config.secondaryAction?.url || ""
                            )),
                            (this.focusSecondaryButton = !!this.config
                                .focusSecondaryButton),
                            (this.closeOnSecondaryButtonClick = this.config.closeOnSecondaryButtonClick),
                            (this.primaryActionName = this.config.primaryAction?.name),
                            (this.primaryActionId = this.config.primaryAction?.id),
                            (this.primaryActionUrl = this.getActionUrl(
                                this.config.primaryAction?.url
                            )),
                            (this.primaryActionUrlParams = this.actionService.getParams(
                                this.config.primaryAction?.url || ""
                            )),
                            this.trackContextualHelpEvents(this.config.events);
                    }
                    setConfig(M) {
                        (this.config = M), this.initDialog();
                    }
                    getActionUrl(M) {
                        return M
                            ? this.actionService.isExternalLink(M)
                                ? this.actionService.getUrl(M)
                                : this.actionService.getUrlWithoutParams(M)
                            : "";
                    }
                    trackContextualHelpEvents(M) {
                        !M ||
                            M.forEach((z) => this.analyticsService.logEvent(z));
                    }
                }
                return (
                    (H.ɵfac = function (M) {
                        return new (M || H)(
                            c.Y36(E.y),
                            c.Y36(e.so),
                            c.Y36(g.c),
                            c.Y36(e.WI)
                        );
                    }),
                    (H.ɵcmp = c.Xpm({
                        type: H,
                        selectors: [["luno-dialog"]],
                        decls: 8,
                        vars: 6,
                        consts: [
                            [3, "src", 4, "ngIf"],
                            ["mat-dialog-title", "", 3, "innerHtml"],
                            ["class", "body", 3, "innerHTML", 4, "ngIf"],
                            [
                                "class",
                                "checkbox-container",
                                3,
                                "error",
                                4,
                                "ngIf",
                            ],
                            ["align", "end"],
                            [4, "ngIf"],
                            [3, "src"],
                            [1, "body", 3, "innerHTML"],
                            [1, "checkbox-container"],
                            ["color", "primary", 3, "formControl"],
                            [1, "checkbox-label", 3, "innerHTML"],
                            [
                                "mat-button",
                                "",
                                "color",
                                "primary",
                                3,
                                "click",
                                4,
                                "ngIf",
                            ],
                            ["mat-button", "", "color", "primary", 3, "click"],
                            [
                                "mat-button",
                                "",
                                "color",
                                "primary",
                                3,
                                "routerLink",
                                "queryParams",
                                "click",
                                4,
                                "ngIf",
                            ],
                            [
                                "mat-button",
                                "",
                                "color",
                                "primary",
                                "role",
                                "button",
                                3,
                                "href",
                                "target",
                                "click",
                                4,
                                "ngIf",
                            ],
                            [
                                "mat-button",
                                "",
                                "color",
                                "primary",
                                3,
                                "routerLink",
                                "queryParams",
                                "click",
                            ],
                            [
                                "mat-button",
                                "",
                                "color",
                                "primary",
                                "role",
                                "button",
                                3,
                                "href",
                                "target",
                                "click",
                            ],
                        ],
                        template: function (M, z) {
                            1 & M &&
                                (c.YNc(0, _, 1, 1, "img", 0),
                                c._UZ(1, "h3", 1),
                                c.TgZ(2, "mat-dialog-content"),
                                c.YNc(3, a, 1, 1, "div", 2),
                                c.YNc(4, R, 3, 4, "div", 3),
                                c.qZA(),
                                c.TgZ(5, "mat-dialog-actions", 4),
                                c.YNc(6, j, 3, 2, "ng-container", 5),
                                c.YNc(7, ce, 3, 2, "ng-container", 5),
                                c.qZA()),
                                2 & M &&
                                    (c.Q6J("ngIf", z.headerImageUrl),
                                    c.xp6(1),
                                    c.Q6J("innerHtml", z.titleHtml, c.oJD),
                                    c.xp6(2),
                                    c.Q6J("ngIf", z.bodyHtml),
                                    c.xp6(1),
                                    c.Q6J("ngIf", z.checkboxText),
                                    c.xp6(2),
                                    c.Q6J("ngIf", z.secondaryActionName),
                                    c.xp6(1),
                                    c.Q6J("ngIf", z.primaryActionName));
                        },
                        dependencies: [
                            I.O5,
                            O.lW,
                            O.zs,
                            T.oG,
                            e.uh,
                            e.xY,
                            e.H8,
                            l.JJ,
                            l.oH,
                            m.yS,
                        ],
                        styles: [
                            "h2[_ngcontent-%COMP%]{text-align:left;font-size:22px;color:var(--color-primary);font-weight:800}h2.mat-dialog-title[_ngcontent-%COMP%]{font-size:20px;line-height:1.3}.body[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:500}.body[_ngcontent-%COMP%]     a{color:#0091ff;text-decoration:none;font-weight:800}img[_ngcontent-%COMP%]{width:50px;margin:5px 0}.checkbox-container[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:8px}.checkbox-container[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]     label{white-space:normal}.checkbox-container.error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color-error)}.checkbox-container[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]{margin:0 0 0 8px;padding-top:2px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap-reverse}",
                        ],
                    })),
                    H
                );
            })();
        },
        6708: (W, x, o) => {
            o.d(x, { t: () => K });
            var l = o(2560),
                e = o(8625),
                g = o(9129),
                E = o(4666),
                c = o(3178);
            function I(B, j) {
                1 & B && l.GkF(0);
            }
            function O(B, j) {
                if (1 & B) {
                    const v = l.EpF();
                    l.TgZ(0, "a", 5),
                        l.NdJ("click", function (w) {
                            l.CHM(v);
                            const Q = l.oxw(2);
                            return l.KtG(Q.onClick(w));
                        }),
                        l.YNc(1, I, 1, 0, "ng-container", 6),
                        l.qZA();
                }
                if (2 & B) {
                    const v = l.oxw(2),
                        y = l.MAs(3);
                    l.ekj("no-underline", v.isNoUnderline),
                        l.Q6J("href", v.url, l.LSH)("rel", v.rel)(
                            "target",
                            v.shouldOpenInNewWindow ? "_blank" : ""
                        ),
                        l.uIk(
                            "aria-label",
                            null == v.aria ? null : v.aria.label
                        ),
                        l.xp6(1),
                        l.Q6J("ngTemplateOutlet", y);
                }
            }
            function T(B, j) {
                1 & B && l.GkF(0);
            }
            function m(B, j) {
                if (1 & B) {
                    const v = l.EpF();
                    l.TgZ(0, "a", 7),
                        l.NdJ("click", function (w) {
                            l.CHM(v);
                            const Q = l.oxw(2);
                            return l.KtG(Q.onClick(w));
                        }),
                        l.YNc(1, T, 1, 0, "ng-container", 6),
                        l.qZA();
                }
                if (2 & B) {
                    const v = l.oxw(2),
                        y = l.MAs(3);
                    l.ekj("no-underline", v.isNoUnderline),
                        l.Q6J("queryParams", v.params)(
                            "routerLink",
                            v.isDisabled ? null : v.url
                        ),
                        l.uIk(
                            "aria-label",
                            null == v.aria ? null : v.aria.label
                        ),
                        l.xp6(1),
                        l.Q6J("ngTemplateOutlet", y);
                }
            }
            function _(B, j) {
                if (
                    (1 & B &&
                        (l.ynx(0),
                        l.YNc(1, O, 2, 7, "a", 3),
                        l.YNc(2, m, 2, 6, "a", 4),
                        l.BQk()),
                    2 & B)
                ) {
                    const v = l.oxw();
                    l.xp6(1),
                        l.Q6J("ngIf", v.isExternalLink),
                        l.xp6(1),
                        l.Q6J("ngIf", !v.isExternalLink);
                }
            }
            function a(B, j) {
                1 & B && l.GkF(0);
            }
            function R(B, j) {
                if (1 & B) {
                    const v = l.EpF();
                    l.TgZ(0, "a", 8),
                        l.NdJ("click", function (w) {
                            l.CHM(v);
                            const Q = l.oxw();
                            return l.KtG(Q.onClick(w));
                        }),
                        l.YNc(1, a, 1, 0, "ng-container", 6),
                        l.qZA();
                }
                if (2 & B) {
                    const v = l.oxw(),
                        y = l.MAs(3);
                    l.ekj("no-underline", v.isNoUnderline),
                        l.uIk(
                            "aria-label",
                            null == v.aria ? null : v.aria.label
                        ),
                        l.xp6(1),
                        l.Q6J("ngTemplateOutlet", y);
                }
            }
            function P(B, j) {
                1 & B && l.Hsn(0);
            }
            const L = ["*"];
            let K = (() => {
                class B {
                    constructor(v, y) {
                        (this.actionService = v),
                            (this.analyticsService = y),
                            (this.isDisabled = !1),
                            (this.clicked = new l.vpe()),
                            (this.isExternalLink = !1),
                            (this.params = {}),
                            (this.rel = null),
                            (this.shouldOpenInNewWindow = !1),
                            (this._url = "");
                    }
                    set url(v) {
                        v && this.initUrl(v);
                    }
                    set action(v) {
                        !v ||
                            (v.url && this.initUrl(v.url),
                            (this._event = v.event));
                    }
                    get url() {
                        return this._url;
                    }
                    get event() {
                        return this._event;
                    }
                    initUrl(v) {
                        (this.isExternalLink = this.actionService.isExternalLink(
                            v
                        )),
                            (this.shouldOpenInNewWindow = this.actionService.shouldOpenInNewWindow(
                                v
                            )),
                            (this.params = this.actionService.getParams(v)),
                            (this.rel = this.shouldOpenInNewWindow
                                ? "opener"
                                : null),
                            (this._url = this.isExternalLink
                                ? this.actionService.getUrl(v)
                                : this.actionService.getUrlWithoutParams(v));
                    }
                    onClick(v) {
                        this.isDisabled
                            ? v.preventDefault()
                            : (this.analyticsService.logEvent(this.event),
                              this.isExternalLink || v.preventDefault(),
                              this.clicked.emit(v));
                    }
                }
                return (
                    (B.ɵfac = function (v) {
                        return new (v || B)(l.Y36(e.c), l.Y36(g.y));
                    }),
                    (B.ɵcmp = l.Xpm({
                        type: B,
                        selectors: [["luno-hyperlink"]],
                        inputs: {
                            url: "url",
                            action: "action",
                            isDisabled: "isDisabled",
                            aria: "aria",
                            isNoUnderline: "isNoUnderline",
                        },
                        outputs: { clicked: "clicked" },
                        ngContentSelectors: L,
                        decls: 4,
                        vars: 2,
                        consts: [
                            [4, "ngIf"],
                            [3, "no-underline", "click", 4, "ngIf"],
                            ["contentTpl", ""],
                            [
                                3,
                                "no-underline",
                                "href",
                                "rel",
                                "target",
                                "click",
                                4,
                                "ngIf",
                            ],
                            [
                                3,
                                "no-underline",
                                "queryParams",
                                "routerLink",
                                "click",
                                4,
                                "ngIf",
                            ],
                            [3, "href", "rel", "target", "click"],
                            [4, "ngTemplateOutlet"],
                            [3, "queryParams", "routerLink", "click"],
                            [3, "click"],
                        ],
                        template: function (v, y) {
                            1 & v &&
                                (l.F$t(),
                                l.YNc(0, _, 3, 2, "ng-container", 0),
                                l.YNc(1, R, 2, 4, "a", 1),
                                l.YNc(
                                    2,
                                    P,
                                    1,
                                    0,
                                    "ng-template",
                                    null,
                                    2,
                                    l.W1O
                                )),
                                2 & v &&
                                    (l.Q6J("ngIf", y.url),
                                    l.xp6(1),
                                    l.Q6J("ngIf", !y.url));
                        },
                        dependencies: [E.O5, E.tP, c.yS],
                        styles: [
                            "[_nghost-%COMP%]{line-height:normal;line-height:initial}.no-underline[_ngcontent-%COMP%]{text-decoration:none}",
                        ],
                    })),
                    B
                );
            })();
        },
        3468: (W, x, o) => {
            o.d(x, { N: () => c });
            var l = o(4666),
                e = o(3178),
                g = o(2560);
            let E = (() => {
                    class I {}
                    return (
                        (I.ɵfac = function (T) {
                            return new (T || I)();
                        }),
                        (I.ɵmod = g.oAB({ type: I })),
                        (I.ɵinj = g.cJS({ imports: [l.ez] })),
                        I
                    );
                })(),
                c = (() => {
                    class I {}
                    return (
                        (I.ɵfac = function (T) {
                            return new (T || I)();
                        }),
                        (I.ɵmod = g.oAB({ type: I })),
                        (I.ɵinj = g.cJS({ imports: [l.ez, e.Bz, E] })),
                        I
                    );
                })();
        },
        2598: (W, x, o) => {
            o.d(x, { w: () => T });
            var l = o(4210),
                e = o(2560);
            let g = (() => {
                class m {
                    constructor() {
                        (this.findPath = "/static/themes"),
                            (this.replacePath = "/static/web");
                    }
                    imagePath(a, R) {
                        if (!a) return a;
                        a.includes(this.findPath) &&
                            R !== l.X.PNG &&
                            (a = a.replace(this.findPath, this.replacePath));
                        const P = a.lastIndexOf("."),
                            L = a.lastIndexOf("/");
                        return P < 0 || L > P
                            ? `${a}.${R}`
                            : `${a.slice(0, P)}.${R}`;
                    }
                }
                return (
                    (m.ɵfac = function (a) {
                        return new (a || m)();
                    }),
                    (m.ɵprov = e.Yz7({
                        token: m,
                        factory: m.ɵfac,
                        providedIn: "root",
                    })),
                    m
                );
            })();
            var E = o(4666);
            const c = ["luno-picture", "", "srcUrl", ""];
            function I(m, _) {
                if ((1 & m && e._UZ(0, "source", 3), 2 & m)) {
                    const a = _.$implicit,
                        R = e.oxw(2);
                    e.MGl("type", "image/", a, ""),
                        e.Q6J("srcset", R.srcForType(a));
                }
            }
            function O(m, _) {
                if (
                    (1 & m &&
                        (e.TgZ(0, "div"),
                        e.YNc(1, I, 1, 2, "source", 1),
                        e._UZ(2, "img", 2),
                        e.qZA()),
                    2 & m)
                ) {
                    const a = e.oxw();
                    e.Udp("height", a.imgHeight)("width", a.imgWidth)(
                        "max-width",
                        a.imgMaxWidth
                    )("max-height", a.imgMaxHeight)("margin", a.margin),
                        e.xp6(1),
                        e.Q6J("ngForOf", a.imageTypes),
                        e.xp6(1),
                        e.Udp("height", a.imgHeight)("width", a.imgWidth)(
                            "max-width",
                            a.imgMaxWidth
                        )("max-height", a.imgMaxHeight),
                        e.Q6J(
                            "src",
                            a.getFallbackSrc(),
                            e.LSH
                        )("alt", a.altText);
                }
            }
            let T = (() => {
                class m {
                    constructor(a) {
                        (this.fileService = a),
                            (this.imgMaxWidth = ""),
                            (this.imgMaxHeight = ""),
                            (this.imgHeight = "auto"),
                            (this.imgWidth = "100%"),
                            (this.srcUrl = ""),
                            (this.imageTypes = [l.X.AVIF, l.X.WEBP]),
                            (this.altText = ""),
                            (this.margin = "auto");
                    }
                    srcForType(a) {
                        return this.fileService.imagePath(this.srcUrl, a);
                    }
                    getFallbackSrc() {
                        return this.fallbackSrc
                            ? this.fallbackSrc
                            : this.fallbackType
                            ? this.fileService.imagePath(
                                  this.srcUrl,
                                  this.fallbackType
                              )
                            : "";
                    }
                }
                return (
                    (m.ɵfac = function (a) {
                        return new (a || m)(e.Y36(g));
                    }),
                    (m.ɵcmp = e.Xpm({
                        type: m,
                        selectors: [
                            ["picture", "luno-picture", "", "srcUrl", ""],
                        ],
                        inputs: {
                            imgMaxWidth: "imgMaxWidth",
                            imgMaxHeight: "imgMaxHeight",
                            imgHeight: "imgHeight",
                            imgWidth: "imgWidth",
                            srcUrl: "srcUrl",
                            imageTypes: "imageTypes",
                            fallbackSrc: "fallbackSrc",
                            fallbackType: "fallbackType",
                            altText: "altText",
                            margin: "margin",
                        },
                        attrs: c,
                        decls: 1,
                        vars: 1,
                        consts: [
                            [
                                3,
                                "height",
                                "width",
                                "max-width",
                                "max-height",
                                "margin",
                                4,
                                "ngIf",
                            ],
                            [3, "type", "srcset", 4, "ngFor", "ngForOf"],
                            ["loading", "lazy", 3, "src", "alt"],
                            [3, "type", "srcset"],
                        ],
                        template: function (a, R) {
                            1 & a && e.YNc(0, O, 3, 21, "div", 0),
                                2 & a && e.Q6J("ngIf", R.srcUrl);
                        },
                        dependencies: [E.sg, E.O5],
                        changeDetection: 0,
                    })),
                    m
                );
            })();
        },
        1716: (W, x, o) => {
            o.d(x, { K: () => g });
            var l = o(4666),
                e = o(2560);
            let g = (() => {
                class E {}
                return (
                    (E.ɵfac = function (I) {
                        return new (I || E)();
                    }),
                    (E.ɵmod = e.oAB({ type: E })),
                    (E.ɵinj = e.cJS({ imports: [l.ez] })),
                    E
                );
            })();
        },
        241: (W, x, o) => {
            o.d(x, { R: () => g });
            var l = o(4666),
                e = o(2560);
            let g = (() => {
                class E {}
                return (
                    (E.ɵfac = function (I) {
                        return new (I || E)();
                    }),
                    (E.ɵmod = e.oAB({ type: E })),
                    (E.ɵinj = e.cJS({ imports: [l.ez] })),
                    E
                );
            })();
        },
        3022: (W, x, o) => {
            o.d(x, { r5: () => c });
            const c = "website-region-switch";
        },
        5713: (W, x, o) => {
            o.d(x, { M$: () => e, _L: () => g });
            const e = 8e3,
                g = {
                    autofocus: !1,
                    hasBackdrop: !0,
                    panelClass: ["rounded-corners"],
                };
        },
        5095: (W, x, o) => {
            o.d(x, { l: () => O });
            var l = o(4929),
                e = o(6846),
                g = o(423),
                E = o(2536),
                c = o(2815),
                I = o(2560);
            class O {
                constructor(m, _, a) {
                    (this.render = m),
                        (this.elRef = _),
                        (this.colourService = a),
                        (this.displayType = "inline-block");
                }
                ngOnDestroy() {
                    this.badgeElement?.remove();
                }
                updateDisplayType() {
                    this.elRef.nativeElement.style.display = this.displayType;
                }
                updateBadge() {
                    if (this.lunoBadge) {
                        if ("0" === this.lunoBadge.value)
                            return void this.badgeElement?.remove();
                        if (!this.badgeElement)
                            return void (this.badgeElement = this.createBadge(
                                this.lunoBadge
                            ));
                        this.addStyles(this.badgeElement),
                            this.badgeElement?.firstChild?.textContent &&
                                (this.badgeElement.firstChild.textContent = this.lunoBadge.value);
                    }
                }
                createBadge(m) {
                    if ("0" === m.value && !m.icon) return;
                    let _ = this.setUpSpan(m.value);
                    return (
                        m.icon && (_ = this.setUpImage(m.icon)),
                        _
                            ? (this.addStyles(_),
                              this.elRef.nativeElement.appendChild(_),
                              this.elRef.nativeElement.classList.add(
                                  "badge-container"
                              ),
                              _)
                            : void 0
                    );
                }
                setUpSpan(m) {
                    if (!m) return;
                    const _ = this.render.createElement("span"),
                        R =
                            this.getBadgeValue() <= 999
                                ? m
                                : m.substring(0, m.length - 1) + "+";
                    return (_.textContent = R), (_.value = m), _;
                }
                setUpImage(m) {
                    const _ = this.render.createElement("img");
                    return (
                        (_.src = m?.url || ""),
                        (_.name = m?.name || ""),
                        (_.width = m.width ?? "18"),
                        (_.height = m.height ?? "18"),
                        _
                    );
                }
                getBadgeValue() {
                    return Number(this.lunoBadge?.value ?? 0);
                }
                getBaseOffset() {
                    const m = this.getBadgeValue();
                    return m > 9 && m <= 99
                        ? 16
                        : m > 99 && m <= 999
                        ? 18
                        : m > 999
                        ? 22
                        : 7.5;
                }
                addStyles(m) {
                    if (!this.lunoBadge) return;
                    const _ = this.elRef.nativeElement.getBoundingClientRect()
                        .height;
                    m.classList.add("badge");
                    let a = "";
                    const R = this.getBaseOffset(),
                        P = _ / 8 || 7.5;
                    switch ((0, E.I)(e.H0S, this.lunoBadge.position)) {
                        case e.H0S.TOP_LEFT:
                            a = `top: -${P}px; left: -${R}px;`;
                            break;
                        case e.H0S.TOP_CENTER:
                            a =
                                "top: -8px; right: 50%; transform: translate(50%, 0);";
                            break;
                        case e.H0S.TOP_RIGHT:
                            a = `top: -${P}px; right: -${R}px;`;
                            break;
                        case e.H0S.MIDDLE_LEFT:
                            a = `top: 50%; left: -${
                                R + 2
                            }px; transform: translate(0, -50%);`;
                            break;
                        case e.H0S.MIDDLE_CENTER:
                            a =
                                "top: 50%; left: 50%; transform: translate(-50%, -50%);";
                            break;
                        case e.H0S.MIDDLE_RIGHT:
                            a = `top: 50%; right: -${
                                R + 2
                            }px; transform: translate(0, -50%);`;
                            break;
                        case e.H0S.BOTTOM_LEFT:
                            a = `bottom: -${P}px; left: -${R}px;`;
                            break;
                        case e.H0S.BOTTOM_CENTER:
                            a =
                                "bottom: -8px; right: 50%; transform: translate(50%, 0);";
                            break;
                        case e.H0S.BOTTOM_RIGHT:
                            a = `bottom: -${P}px; right: -${R}px;`;
                    }
                    (a += this.lunoBadge.backgroundColour
                        ? `background-color: ${this.lunoBadge.backgroundColour};`
                        : `background-color: ${this.colourService.accent};`),
                        (a += this.lunoBadge.textColour
                            ? `color: ${this.lunoBadge.textColour};`
                            : `color: ${this.colourService.neutral0};`),
                        this.lunoBadge.outlineColour &&
                            (a += `border: 1px solid ${this.lunoBadge.outlineColour};`),
                        this.getBadgeValue() > 9 && (a += "padding: 0 4px;"),
                        m.setAttribute("style", a);
                }
            }
            (O.ɵfac = function (m) {
                return new (m || O)(I.Y36(I.Qsj), I.Y36(I.SBq), I.Y36(g.K));
            }),
                (O.ɵdir = I.lG2({
                    type: O,
                    selectors: [["", "lunoBadge", ""]],
                    inputs: {
                        lunoBadge: "lunoBadge",
                        displayType: "displayType",
                    },
                })),
                (0, l.gn)(
                    [(0, c.G)("updateBadge"), (0, l.w6)("design:type", Object)],
                    O.prototype,
                    "lunoBadge",
                    void 0
                ),
                (0, l.gn)(
                    [
                        (0, c.G)("updateDisplayType"),
                        (0, l.w6)("design:type", String),
                    ],
                    O.prototype,
                    "displayType",
                    void 0
                );
        },
        1867: (W, x, o) => {
            o.d(x, { T: () => g });
            var l = o(4666),
                e = o(2560);
            let g = (() => {
                class E {}
                return (
                    (E.ɵfac = function (I) {
                        return new (I || E)();
                    }),
                    (E.ɵmod = e.oAB({ type: E })),
                    (E.ɵinj = e.cJS({ imports: [l.ez] })),
                    E
                );
            })();
        },
        3275: (W, x, o) => {
            o.d(x, { B: () => e, C: () => l });
            var l = (() => {
                    return (
                        ((g = l || (l = {})).au = "au"),
                        (g.fr = "fr"),
                        (g.eu = "eu"),
                        (g.gb = "gb"),
                        (g.id = "id"),
                        (g.it = "it"),
                        (g.my = "my"),
                        (g.ng = "ng"),
                        (g.sg = "sg"),
                        (g.ug = "ug"),
                        (g.us = "us"),
                        (g.za = "za"),
                        (g.zm = "zm"),
                        l
                    );
                    var g;
                })(),
                e = (() => {
                    return (
                        ((g = e || (e = {})).enAU = "en-AU"),
                        (g.frFR = "fr-FR"),
                        (g.eu = "eu"),
                        (g.enGB = "en-GB"),
                        (g.enID = "en-ID"),
                        (g.idID = "id-ID"),
                        (g.enMY = "en-MY"),
                        (g.msMY = "ms-MY"),
                        (g.enNG = "en-NG"),
                        (g.enSG = "en-SG"),
                        (g.enUG = "en-UG"),
                        (g.enUS = "en-US"),
                        (g.enZA = "en-ZA"),
                        (g.enZM = "en-ZM"),
                        e
                    );
                    var g;
                })();
        },
        4941: (W, x, o) => {
            o.d(x, { NE: () => g, r3: () => l });
            var l = (() => {
                    return (
                        ((c = l || (l = {})).BITCOIN = "bitcoin"),
                        (c.ETHEREUM = "ethereum"),
                        (c.RIPPLE = "ripple"),
                        (c.LITECOIN = "litecoin"),
                        (c.UNISWAP = "uniswap"),
                        (c.CHAINLINK = "chainlink"),
                        l
                    );
                    var c;
                })(),
                g = (() => {
                    return (
                        ((c = g || (g = {})).ADA = "ADA"),
                        (c.AUD = "AUD"),
                        (c.AVAX = "AVAX"),
                        (c.BCH = "BCH"),
                        (c.BTC = "BTC"),
                        (c.ETH = "ETH"),
                        (c.EUR = "EUR"),
                        (c.GBP = "GBP"),
                        (c.IDR = "IDR"),
                        (c.LTC = "LTC"),
                        (c.LINK = "LINK"),
                        (c.MATIC = "MATIC"),
                        (c.MATIC_POLYGON = "MATIC_POLYGON"),
                        (c.MYR = "MYR"),
                        (c.NGN = "NGN"),
                        (c.PLN = "PLN"),
                        (c.SGD = "SGD"),
                        (c.SOL = "SOL"),
                        (c.UGX = "UGX"),
                        (c.UNI = "UNI"),
                        (c.USD = "USD"),
                        (c.USDC = "USDC"),
                        (c.XBT = "XBT"),
                        (c.XRP = "XRP"),
                        (c.ZAR = "ZAR"),
                        (c.ZMW = "ZMW"),
                        g
                    );
                    var c;
                })();
        },
        4210: (W, x, o) => {
            o.d(x, { X: () => l });
            var l = (() => {
                return (
                    ((e = l || (l = {})).AVIF = "avif"),
                    (e.WEBP = "webp"),
                    (e.PNG = "png"),
                    (e.SVG = "svg"),
                    l
                );
                var e;
            })();
        },
        6191: (W, x, o) => {
            o.d(x, { s: () => l });
            var l = (() => {
                return (
                    ((e = l || (l = {})).en = "en"),
                    (e.fr = "fr"),
                    (e.id = "id"),
                    (e.it = "it"),
                    (e.msMY = "ms-MY"),
                    l
                );
                var e;
            })();
        },
        6105: (W, x, o) => {
            o.d(x, { S: () => l });
            var l = (() => {
                return (
                    ((e = l || (l = {})).en = "en"),
                    (e.enUS = "en-US"),
                    (e.fr = "fr"),
                    (e.id = "id"),
                    (e.enGB = "en-GB"),
                    (e.msMY = "ms-MY"),
                    l
                );
                var e;
            })();
        },
        6436: (W, x, o) => {
            o.d(x, { I: () => l });
            var l = (() => {
                return (
                    ((e = l || (l = {}))[(e.external = 0)] = "external"),
                    (e[(e.wallet = 1)] = "wallet"),
                    (e[(e.websiteOld = 2)] = "websiteOld"),
                    (e[(e.helpCentre = 3)] = "helpCentre"),
                    (e[(e.exchange = 4)] = "exchange"),
                    (e[(e.exchangePwa = 5)] = "exchangePwa"),
                    (e[(e.learningPortal = 6)] = "learningPortal"),
                    (e[(e.sandbox = 7)] = "sandbox"),
                    (e[(e.express = 8)] = "express"),
                    (e[(e.website = 9)] = "website"),
                    (e[(e.careers = 10)] = "careers"),
                    (e[(e.auth = 11)] = "auth"),
                    l
                );
                var e;
            })();
        },
        6846: (W, x, o) => {
            o.d(x, {
                Far: () => B,
                FrU: () => l,
                GyU: () => Ge,
                H0S: () => y,
                KzN: () => Ye,
                PAg: () => ot,
                Pvx: () => V,
                Ta6: () => _,
                V0K: () => it,
                XMl: () => c,
                d9x: () => ve,
                fk3: () => I,
                gw3: () => E,
                qdj: () => f,
                wWp: () => Re,
            });
            var l = (() => {
                    return (
                        ((p = l || (l = {}))[(p.UNKNOWN_MATERIAL_STYLE = 0)] =
                            "UNKNOWN_MATERIAL_STYLE"),
                        (p[(p.PRIMARY = 1)] = "PRIMARY"),
                        (p[(p.SECONDARY = 2)] = "SECONDARY"),
                        (p[(p.TERTIARY = 3)] = "TERTIARY"),
                        (p[(p.ACCENT = 4)] = "ACCENT"),
                        (p[(p.GREY = 5)] = "GREY"),
                        l
                    );
                    var p;
                })(),
                E = (() => {
                    return (
                        ((p = E || (E = {}))[(p.UNKNOWN_STYLE = 0)] =
                            "UNKNOWN_STYLE"),
                        (p[(p.PRIMARY = 1)] = "PRIMARY"),
                        (p[(p.SECONDARY = 2)] = "SECONDARY"),
                        (p[(p.PRIMARY_UPGRADE = 3)] = "PRIMARY_UPGRADE"),
                        (p[(p.SECONDARY_UPGRADE = 4)] = "SECONDARY_UPGRADE"),
                        (p[(p.FACEBOOK = 5)] = "FACEBOOK"),
                        (p[(p.GOOGLE = 6)] = "GOOGLE"),
                        (p[(p.APPLE = 7)] = "APPLE"),
                        (p[(p.PRIMARY_GUIDE = 8)] = "PRIMARY_GUIDE"),
                        (p[(p.INLINE = 9)] = "INLINE"),
                        (p[(p.TERTIARY = 10)] = "TERTIARY"),
                        (p[(p.INLINE_REMOVE = 11)] = "INLINE_REMOVE"),
                        (p[(p.INFO_ICON = 12)] = "INFO_ICON"),
                        (p[(p.INLINE_SECONDARY = 13)] = "INLINE_SECONDARY"),
                        (p[(p.INLINE_LABEL = 14)] = "INLINE_LABEL"),
                        (p[(p.SECONDARY_DOWNLOAD = 15)] = "SECONDARY_DOWNLOAD"),
                        E
                    );
                    var p;
                })();
            let c = {
                    0: "UNKNOWN_STYLE",
                    1: "PRIMARY",
                    2: "SECONDARY",
                    3: "PRIMARY_UPGRADE",
                    4: "SECONDARY_UPGRADE",
                    5: "FACEBOOK",
                    6: "GOOGLE",
                    7: "APPLE",
                    8: "PRIMARY_GUIDE",
                    9: "INLINE",
                    10: "TERTIARY",
                    11: "INLINE_REMOVE",
                    12: "INFO_ICON",
                    13: "INLINE_SECONDARY",
                    14: "INLINE_LABEL",
                    15: "SECONDARY_DOWNLOAD",
                },
                I = {
                    UNKNOWN_STYLE: 0,
                    PRIMARY: 1,
                    SECONDARY: 2,
                    PRIMARY_UPGRADE: 3,
                    SECONDARY_UPGRADE: 4,
                    FACEBOOK: 5,
                    GOOGLE: 6,
                    APPLE: 7,
                    PRIMARY_GUIDE: 8,
                    INLINE: 9,
                    TERTIARY: 10,
                    INLINE_REMOVE: 11,
                    INFO_ICON: 12,
                    INLINE_SECONDARY: 13,
                    INLINE_LABEL: 14,
                    SECONDARY_DOWNLOAD: 15,
                };
            var _ = (() => {
                    return (
                        ((p = _ || (_ = {}))[(p.UNKNOWN_TYPE = 0)] =
                            "UNKNOWN_TYPE"),
                        (p[(p.SUBMIT = 1)] = "SUBMIT"),
                        (p[(p.REDIRECT = 2)] = "REDIRECT"),
                        (p[(p.TOKEN_ACTION = 3)] = "TOKEN_ACTION"),
                        (p[(p.AUTH_TOKEN = 4)] = "AUTH_TOKEN"),
                        (p[(p.SHARE = 5)] = "SHARE"),
                        (p[(p.DIALOG = 6)] = "DIALOG"),
                        (p[(p.MODAL = 7)] = "MODAL"),
                        (p[(p.BOTTOM_SHEET = 8)] = "BOTTOM_SHEET"),
                        (p[(p.AUTHENTICATION_APP = 9)] = "AUTHENTICATION_APP"),
                        (p[(p.EMAIL_APP = 10)] = "EMAIL_APP"),
                        (p[(p.ENDPOINT = 11)] = "ENDPOINT"),
                        (p[(p.SOCIAL_SIGN_IN = 12)] = "SOCIAL_SIGN_IN"),
                        (p[(p.CHAT = 13)] = "CHAT"),
                        (p[(p.WEBVIEW = 14)] = "WEBVIEW"),
                        (p[(p.PLAID_LINK = 15)] = "PLAID_LINK"),
                        (p[(p.GEOLOCATION = 16)] = "GEOLOCATION"),
                        (p[(p.SECURITY_PROMPT = 17)] = "SECURITY_PROMPT"),
                        (p[(p.PROVIDER = 18)] = "PROVIDER"),
                        _
                    );
                    var p;
                })(),
                B = (() => {
                    return (
                        ((p = B || (B = {}))[(p.UNKNOWN_TYPE = 0)] =
                            "UNKNOWN_TYPE"),
                        (p[(p.SELECT_CHIP = 1)] = "SELECT_CHIP"),
                        (p[(p.BUTTON_CHIP = 2)] = "BUTTON_CHIP"),
                        B
                    );
                    var p;
                })(),
                y = (() => {
                    return (
                        ((p = y || (y = {}))[(p.UNKNOWN = 0)] = "UNKNOWN"),
                        (p[(p.TOP_LEFT = 1)] = "TOP_LEFT"),
                        (p[(p.TOP_CENTER = 2)] = "TOP_CENTER"),
                        (p[(p.TOP_RIGHT = 3)] = "TOP_RIGHT"),
                        (p[(p.MIDDLE_LEFT = 4)] = "MIDDLE_LEFT"),
                        (p[(p.MIDDLE_CENTER = 5)] = "MIDDLE_CENTER"),
                        (p[(p.MIDDLE_RIGHT = 6)] = "MIDDLE_RIGHT"),
                        (p[(p.BOTTOM_LEFT = 7)] = "BOTTOM_LEFT"),
                        (p[(p.BOTTOM_CENTER = 8)] = "BOTTOM_CENTER"),
                        (p[(p.BOTTOM_RIGHT = 9)] = "BOTTOM_RIGHT"),
                        y
                    );
                    var p;
                })(),
                ve = (() => {
                    return (
                        ((p = ve || (ve = {}))[(p.UNKNOWN_STYLE = 0)] =
                            "UNKNOWN_STYLE"),
                        (p[(p.NORMAL = 1)] = "NORMAL"),
                        (p[(p.GROUPING = 2)] = "GROUPING"),
                        ve
                    );
                    var p;
                })(),
                Ge = (() => {
                    return (
                        ((p = Ge || (Ge = {}))[(p.UNKNOWN_TYPE = 0)] =
                            "UNKNOWN_TYPE"),
                        (p[(p.STANDARD = 1)] = "STANDARD"),
                        (p[(p.CHECKBOX = 2)] = "CHECKBOX"),
                        (p[(p.HEADING = 3)] = "HEADING"),
                        (p[(p.SWITCH_CONTROL = 4)] = "SWITCH_CONTROL"),
                        (p[(p.PAYMENT_METHOD = 5)] = "PAYMENT_METHOD"),
                        (p[(p.EMPTY_STATE = 6)] = "EMPTY_STATE"),
                        (p[(p.INLINE_BUTTON = 7)] = "INLINE_BUTTON"),
                        (p[(p.INLINE_STAR = 8)] = "INLINE_STAR"),
                        (p[(p.INLINE_CHECKBOX = 9)] = "INLINE_CHECKBOX"),
                        Ge
                    );
                    var p;
                })();
            let Ye = {
                UNKNOWN_TYPE: 0,
                STANDARD: 1,
                CHECKBOX: 2,
                HEADING: 3,
                SWITCH_CONTROL: 4,
                PAYMENT_METHOD: 5,
                EMPTY_STATE: 6,
                INLINE_BUTTON: 7,
                INLINE_STAR: 8,
                INLINE_CHECKBOX: 9,
            };
            var f = (() => {
                    return (
                        ((p = f || (f = {}))[(p.UNKNOWN_STYLE = 0)] =
                            "UNKNOWN_STYLE"),
                        (p[(p.PRIMARY = 1)] = "PRIMARY"),
                        (p[(p.SECONDARY = 2)] = "SECONDARY"),
                        (p[(p.TERTIARY = 3)] = "TERTIARY"),
                        (p[(p.ACCENT = 4)] = "ACCENT"),
                        f
                    );
                    var p;
                })(),
                ot = (() => {
                    return (
                        ((p = ot || (ot = {}))[(p.UNKNOWN_TYPE = 0)] =
                            "UNKNOWN_TYPE"),
                        (p[(p.HEADING_1 = 1)] = "HEADING_1"),
                        (p[(p.HEADING_2 = 2)] = "HEADING_2"),
                        (p[(p.SUBTITLE_1 = 3)] = "SUBTITLE_1"),
                        (p[(p.SUBTITLE_2 = 4)] = "SUBTITLE_2"),
                        (p[(p.BODY_1 = 5)] = "BODY_1"),
                        (p[(p.BODY_2 = 6)] = "BODY_2"),
                        (p[(p.BUTTON = 7)] = "BUTTON"),
                        (p[(p.CAPTION = 8)] = "CAPTION"),
                        (p[(p.LABEL = 9)] = "LABEL"),
                        (p[(p.OVERLINE = 10)] = "OVERLINE"),
                        ot
                    );
                    var p;
                })(),
                it = (() => {
                    return (
                        ((p = it || (it = {}))[(p.UNKNOWN_ALIGNMENT = 0)] =
                            "UNKNOWN_ALIGNMENT"),
                        (p[(p.LEFT = 1)] = "LEFT"),
                        (p[(p.CENTER = 2)] = "CENTER"),
                        (p[(p.RIGHT = 3)] = "RIGHT"),
                        it
                    );
                    var p;
                })(),
                Re = (() => {
                    return (
                        ((p = Re || (Re = {}))[(p.UNKNOWN = 0)] = "UNKNOWN"),
                        (p[(p.FIAT = 1)] = "FIAT"),
                        (p[(p.CRYPTO = 2)] = "CRYPTO"),
                        Re
                    );
                    var p;
                })();
            let V = { UNKNOWN: 0, FIAT: 1, CRYPTO: 2 };
        },
        8625: (W, x, o) => {
            o.d(x, { c: () => O, x: () => I });
            var l = o(2560),
                e = o(6436),
                g = o(4878),
                E = o(2901),
                c = o(9316);
            const I = new l.OlP("LUNO_PROJECT");
            let O = (() => {
                class T {
                    constructor(_, a, R, P) {
                        (this.window = _),
                            (this.localeService = a),
                            (this.supportedLanguages = P),
                            (this.authRoutes = [
                                "/authorize",
                                "/confirm_email",
                                "/lock_account",
                                "/login",
                                "/login/oauth2v2",
                                "/recover",
                                "/recovery_web",
                                "/report_fraud",
                                "/secure_account",
                                "/signup",
                                "/verify_email",
                            ]),
                            (this.currentUrl = this.window.location.href),
                            R
                                ? ((this.currentProject = R),
                                  R === e.I.websiteOld &&
                                      this.getProjectFromUrl(
                                          this.currentUrl
                                      ) === e.I.careers &&
                                      (this.currentProject = e.I.careers))
                                : (this.currentProject = this.getProjectFromUrl(
                                      this.currentUrl
                                  ));
                    }
                    getProjectFromUrl(_) {
                        const a = this.getUrlPath(_);
                        return this.hostnameIsTrade(_)
                            ? e.I.exchangePwa
                            : this.pathIsWallet(a)
                            ? e.I.wallet
                            : this.pathIsLearn(a)
                            ? e.I.learningPortal
                            : this.pathIsHelp(a)
                            ? e.I.helpCentre
                            : this.pathIsTrade(a)
                            ? e.I.exchange
                            : this.pathIsSandbox(a)
                            ? e.I.sandbox
                            : this.pathIsExpress(a)
                            ? e.I.express
                            : this.pathIsCareers(a)
                            ? e.I.careers
                            : this.pathIsAuth(a)
                            ? e.I.auth
                            : !this.isAbsoluteUrl(_) ||
                              this.isSameDomain(_, this.window.location.href)
                            ? e.I.websiteOld
                            : e.I.external;
                    }
                    maybeUpdateLanguageFromUrl(_) {
                        if (!_ || !this.supportedLanguages?.length) return null;
                        for (const a of this.supportedLanguages)
                            if (
                                _.toLowerCase().includes(
                                    `/${a.toLowerCase()}/`
                                ) ||
                                _.toLowerCase().endsWith(`/${a.toLowerCase()}`)
                            )
                                return this.localeService.urlPath;
                        return null;
                    }
                    getUrlPath(_) {
                        return this.isAbsoluteUrl(_) ? new URL(_).pathname : _;
                    }
                    getParsedToken(_) {
                        const R = _.match(/token=(.*)$/);
                        return R ? R[1] : _;
                    }
                    isSameDomain(_, a) {
                        if (!_ || !a || "function" != typeof URL) return !1;
                        const P = new URL(_),
                            L = new URL(a);
                        return P.hostname === L.hostname;
                    }
                    isAbsoluteUrl(_) {
                        return !!_?.startsWith("http");
                    }
                    hostnameIsTrade(_) {
                        return (
                            !!this.isAbsoluteUrl(_) &&
                            [
                                "trade.luno.com",
                                "trade.staging.luno.com",
                            ].includes(new URL(_).hostname)
                        );
                    }
                    pathIsAuth(_) {
                        return !!this.authRoutes.find((a) => _?.includes(a));
                    }
                    pathIsBlog(_) {
                        return !!_?.startsWith("/blog");
                    }
                    pathIsCareers(_) {
                        return !!_?.includes("/careers");
                    }
                    pathIsExpress(_) {
                        return !!_?.startsWith("/express");
                    }
                    pathIsHelp(_) {
                        return !!_?.startsWith("/help");
                    }
                    pathIsLearn(_) {
                        return !!_?.startsWith("/learn");
                    }
                    pathIsLogin(_) {
                        return !!_?.includes("/login");
                    }
                    pathIsLogout(_) {
                        return "/logout" === _;
                    }
                    pathIsSandbox(_) {
                        return !!_?.startsWith("/sandbox");
                    }
                    pathIsSignUp(_) {
                        return !!_?.includes("/signup");
                    }
                    pathIsTrade(_) {
                        return !!_?.startsWith("/trade");
                    }
                    pathIsWallet(_) {
                        return !!_?.startsWith("/wallet");
                    }
                    pathIsDeveloperApi(_) {
                        return !!_?.includes("/developers/api");
                    }
                    removeWalletFromUrl(_) {
                        return "/wallet" === _
                            ? "/"
                            : _.replace(/^\/wallet/, "");
                    }
                    getUrl(_) {
                        switch (this.currentProject) {
                            case e.I.wallet:
                                return this.processWalletUrl(_);
                            case e.I.helpCentre:
                                return this.processHelpUrl(_);
                            case e.I.auth:
                                return this.processAuthUrl(_);
                            case e.I.websiteOld:
                                return this.processWebsiteOldUrl(_);
                            case e.I.website:
                                return this.processWebsiteUrl(_);
                        }
                        return _;
                    }
                    getUrlWithoutParams(_) {
                        return (_ = this.getUrl(_)).split("?")[0];
                    }
                    getParams(_) {
                        let a;
                        a = this.isAbsoluteUrl(_)
                            ? new URL(_)
                            : new URL(`https://www.luno.com/${_}`);
                        const R = {};
                        return (
                            a?.searchParams?.forEach((P, L) => {
                                R[L] = P;
                            }),
                            R
                        );
                    }
                    processWalletUrl(_) {
                        const a = this.isAbsoluteUrl(_)
                            ? new URL(_).pathname + new URL(_).search
                            : _;
                        return this.pathIsWallet(a)
                            ? this.removeWalletFromUrl(a)
                            : _;
                    }
                    processHelpUrl(_) {
                        const a = this.isAbsoluteUrl(_)
                                ? new URL(_).pathname + new URL(_).search
                                : _,
                            R = !!this.maybeUpdateLanguageFromUrl(a);
                        if (this.pathIsHelp(a)) {
                            if (R) return a;
                            const P =
                                this.maybeUpdateLanguageFromUrl(
                                    this.currentUrl
                                ) || this.localeService.urlPath;
                            return a.replace("/help/", `/help/${P}/`);
                        }
                        return _;
                    }
                    processAuthUrl(_) {
                        if (!_) return "";
                        const a = this.isAbsoluteUrl(_)
                                ? new URL(_).pathname + new URL(_).search
                                : _,
                            R = !!this.maybeUpdateLanguageFromUrl(a);
                        if (!a) return _;
                        if (this.pathIsAuth(a)) {
                            if (R) return a;
                            const P =
                                    this.maybeUpdateLanguageFromUrl(
                                        this.currentUrl
                                    ) || this.localeService.urlPath,
                                L =
                                    this.authRoutes.find((K) =>
                                        a.includes(K)
                                    ) || "";
                            return a.replace(L, `/${P}${L}`);
                        }
                        return this.processHelpUrl(_);
                    }
                    processWebsiteOldUrl(_) {
                        if (!_) return "";
                        const a = this.isAbsoluteUrl(_)
                                ? new URL(_).pathname + new URL(_).search
                                : _,
                            R = !!this.maybeUpdateLanguageFromUrl(a);
                        if (!a) return _;
                        if (a.includes("/recover")) {
                            if (R) return a;
                            const P =
                                this.maybeUpdateLanguageFromUrl(
                                    this.currentUrl
                                ) || this.localeService.urlPath;
                            return a.replace("/recover", `/${P}/recover`);
                        }
                        return this.processHelpUrl(_);
                    }
                    processWebsiteUrl(_) {
                        return this.isAbsoluteUrl(_) && !this.isExternalLink(_)
                            ? new URL(_).pathname + new URL(_).search
                            : _;
                    }
                    isExternalLink(_) {
                        if (_.startsWith("mailto")) return !0;
                        switch (this.currentProject) {
                            case e.I.auth:
                                return this.isExternalAuthLink(_);
                            case e.I.wallet:
                                return this.isExternalWalletLink(_);
                            case e.I.helpCentre:
                                return this.isExternalHelpLink(_);
                            case e.I.sandbox:
                                return this.isExternalSandboxLink(_);
                            case e.I.exchange:
                                return !0;
                            case e.I.exchangePwa:
                                return this.isExternalExchangePwaLink(_);
                            case e.I.websiteOld:
                                return !0;
                            case e.I.website:
                                return this.isExternalWebsiteLink(_);
                            case e.I.express:
                                return this.isExternalExpressLink(_);
                            case e.I.careers:
                                return this.isExternalCareersLink(_);
                        }
                        return !1;
                    }
                    isExternalWebsiteLink(_) {
                        return (
                            !!(
                                this.pathIsBlog(_) ||
                                this.pathIsCareers(_) ||
                                this.pathIsHelp(_) ||
                                this.pathIsLearn(_) ||
                                this.pathIsLogin(_) ||
                                this.pathIsLogout(_) ||
                                this.pathIsSignUp(_) ||
                                this.pathIsTrade(_) ||
                                this.pathIsWallet(_) ||
                                this.pathIsDeveloperApi(_)
                            ) ||
                            (!!this.isAbsoluteUrl(_) &&
                                !this.isSameDomain(
                                    this.window.location.href,
                                    _
                                ))
                        );
                    }
                    isExternalExpressLink(_) {
                        return this.isAbsoluteUrl(_)
                            ? !this.pathIsExpress(new URL(_).pathname)
                            : this.pathIsLogin(_) ||
                                  this.pathIsLogout(_) ||
                                  this.pathIsSignUp(_) ||
                                  this.pathIsHelp(_);
                    }
                    isExternalCareersLink(_) {
                        return !_.includes("en/careers");
                    }
                    isExternalWalletLink(_) {
                        return this.isAbsoluteUrl(_)
                            ? !this.pathIsWallet(new URL(_).pathname)
                            : this.pathIsHelp(_) ||
                                  this.pathIsLearn(_) ||
                                  this.pathIsTrade(_);
                    }
                    isExternalAuthLink(_) {
                        return this.isAbsoluteUrl(_)
                            ? !this.pathIsAuth(new URL(_).pathname)
                            : !this.pathIsAuth(_);
                    }
                    isExternalHelpLink(_) {
                        return this.isAbsoluteUrl(_)
                            ? !this.pathIsHelp(new URL(_).pathname)
                            : !this.pathIsHelp(_);
                    }
                    isExternalSandboxLink(_) {
                        return this.isAbsoluteUrl(_)
                            ? !this.pathIsSandbox(new URL(_).pathname)
                            : this.pathIsHelp(_) ||
                                  this.pathIsLearn(_) ||
                                  this.pathIsTrade(_) ||
                                  this.pathIsWallet(_);
                    }
                    isExternalExchangePwaLink(_) {
                        return !this.pathIsLogin(_);
                    }
                    isDifferentWindowExchange(_) {
                        return (
                            !!this.isAbsoluteUrl(_) || _.indexOf("signup") >= 0
                        );
                    }
                    isDifferentWindowExpress(_) {
                        return (
                            !!this.pathIsHelp(this.getUrlPath(_)) ||
                            (!(
                                this.isAbsoluteUrl(_) ||
                                this.pathIsLogin(_) ||
                                this.pathIsLogout(_) ||
                                this.pathIsSignUp(_)
                            ) &&
                                this.isExternalExpressLink(_))
                        );
                    }
                    shouldOpenInNewWindow(_) {
                        switch (this.currentProject) {
                            case e.I.wallet:
                                return this.isExternalWalletLink(_);
                            case e.I.exchange:
                            case e.I.exchangePwa:
                                return this.isDifferentWindowExchange(_);
                            case e.I.express:
                                return this.isDifferentWindowExpress(_);
                            case e.I.sandbox:
                            case e.I.helpCentre:
                            case e.I.websiteOld:
                            case e.I.website:
                            case e.I.auth:
                                return (
                                    !!this.isAbsoluteUrl(_) &&
                                    !this.isSameDomain(
                                        this.window.location.href,
                                        _
                                    )
                                );
                        }
                        return !1;
                    }
                }
                return (
                    (T.ɵfac = function (_) {
                        return new (_ || T)(
                            l.LFG(c.m),
                            l.LFG(E.O),
                            l.LFG(I, 8),
                            l.LFG(g.N, 8)
                        );
                    }),
                    (T.ɵprov = l.Yz7({
                        token: T,
                        factory: T.ɵfac,
                        providedIn: "root",
                    })),
                    T
                );
            })();
        },
        9129: (W, x, o) => {
            o.d(x, { y: () => _, v: () => m });
            var l = o(4666),
                e = o(2560),
                g = (() => {
                    return (
                        ((a = g || (g = {})).UNKNOWN = "unknown"),
                        (a.BROWSER = "browser"),
                        (a.STANDALONE = "standalone"),
                        (a.TWA = "twa"),
                        g
                    );
                    var a;
                })(),
                E = (() => {
                    return (
                        ((a = E || (E = {}))[(a.Unknown = 0)] = "Unknown"),
                        (a[(a.Navigation = 1)] = "Navigation"),
                        (a[(a.Location = 2)] = "Location"),
                        (a[(a.Search = 3)] = "Search"),
                        (a[(a.Transaction = 4)] = "Transaction"),
                        (a[(a.UserContent = 5)] = "UserContent"),
                        (a[(a.UserPreference = 6)] = "UserPreference"),
                        (a[(a.Social = 7)] = "Social"),
                        (a[(a.Other = 8)] = "Other"),
                        E
                    );
                    var a;
                })(),
                c = o(8045),
                O = o(8147),
                T = o(8742);
            const m = new e.OlP("GA_MEASUREMENT_IDS");
            let _ = (() => {
                class a {
                    constructor(P, L, K, B, j) {
                        if (
                            ((this.cookiePreferencesService = P),
                            (this.featureFlagsService = L),
                            (this.windowRef = K),
                            (this.platformId = B),
                            (this.gaPropertyIds = j),
                            (this.shouldTrackGtagDate = !0),
                            (this.shouldTrackPerformance = !1),
                            (this.displayMode = g.BROWSER),
                            (0, l.NF)(this.platformId))
                        ) {
                            if (!K.nativeWindow.gtag)
                                return void console.error(
                                    "GaService: Analytics script not loaded properly."
                                );
                            this.cookiePreferencesService.preferences$.subscribe(
                                (v) => {
                                    (this.shouldTrackPerformance =
                                        v.performance),
                                        this.windowRef.nativeWindow.gtag(
                                            "consent",
                                            "default",
                                            {
                                                analytics_storage: v.performance
                                                    ? "granted"
                                                    : "denied",
                                            }
                                        );
                                }
                            );
                        }
                        this.displayMode = ((a) =>
                            a && !(0, l.NF)(a)
                                ? g.UNKNOWN
                                : document.referrer.startsWith("android-app://")
                                ? g.TWA
                                : window.matchMedia(
                                      "(display-mode: standalone)"
                                  ).matches || navigator.standalone
                                ? g.STANDALONE
                                : g.BROWSER)(this.platformId);
                    }
                    get isDebugMode() {
                        return this.isAnalyticsDebuggerEnabled || !1;
                    }
                    get isAnalyticsDebuggerEnabled() {
                        return this.featureFlagsService.isEnabled(
                            "analytics_debugger"
                        );
                    }
                    logEvent(P) {
                        !P?.name ||
                            (this.trackMparticleEvent(P.name, {
                                ...P.parameters,
                                display_mode: this.displayMode,
                            }),
                            this.trackGtagEvent(P.name, {
                                parameters: {
                                    ...P.parameters,
                                    display_mode: this.displayMode,
                                },
                            }));
                    }
                    trackPage(P, L, K, B = !1) {
                        !P ||
                            (B &&
                                P !== this.lastTrackedPage &&
                                (this.markedPage = this.lastTrackedPage),
                            (this.lastTrackedPage = P),
                            (L = L || {}),
                            P && this.trackMparticlePageview(P, L),
                            this.trackGtagPageview(P, K));
                    }
                    trackMarkedPage() {
                        this.markedPage &&
                            this.lastTrackedPage !== this.markedPage &&
                            (this.trackPage(this.markedPage),
                            (this.markedPage = ""));
                    }
                    trackMparticlePageview(P, L) {
                        this.isDebugMode
                            ? console.table({
                                  Service: "mParticle",
                                  Page_name: P,
                                  Attributes: L,
                              })
                            : !this.windowRef.nativeWindow.mParticle ||
                              !this.shouldTrackPerformance ||
                              this.windowRef.nativeWindow.mParticle.logPageView(
                                  P.trim(),
                                  L
                              );
                    }
                    trackMparticleEvent(P, L) {
                        this.lastTrackedPage &&
                            (L || (L = {}),
                            (L.screen_name = this.lastTrackedPage)),
                            this.isDebugMode
                                ? console.table({
                                      Service: "mParticle",
                                      Event_name: P,
                                      Attributes: L,
                                  })
                                : !this.windowRef.nativeWindow.mParticle ||
                                  !this.shouldTrackPerformance ||
                                  this.windowRef.nativeWindow.mParticle.logEvent(
                                      P.trim(),
                                      E.Other,
                                      L
                                  );
                    }
                    trackGtagPageview(P, L) {
                        if (this.isDebugMode)
                            return void console.table({
                                Service: "Gtag",
                                PageName: P,
                                PageUrl: L,
                            });
                        const K = {};
                        (K.page_title = P),
                            L && (K.page_path = L),
                            this.shouldTrackGtagDate &&
                                (this.windowRef.nativeWindow.gtag(
                                    "js",
                                    new Date()
                                ),
                                (this.shouldTrackGtagDate = !1)),
                            this.gaPropertyIds &&
                                this.gaPropertyIds.forEach((B) => {
                                    this.windowRef.nativeWindow.gtag(
                                        "config",
                                        B,
                                        K
                                    );
                                });
                    }
                    trackGtagEvent(P, L) {
                        const K = L?.attributes || {};
                        let B = {
                            event_category: L?.gaCategory,
                            event_label: K.label,
                            value: K.value,
                        };
                        L?.parameters && (B = L.parameters),
                            this.isDebugMode
                                ? console.table({
                                      Service: "Gtag (event)",
                                      action: P,
                                      attributes: B,
                                  })
                                : this.windowRef.nativeWindow.gtag(
                                      "event",
                                      P.trim(),
                                      B
                                  );
                    }
                    logUserIntoGtag(P) {
                        if (P && P > 0) {
                            if (this.isDebugMode)
                                return void console.table({
                                    Service: "Gtag (log user in)",
                                    user_id: P,
                                });
                            this.windowRef.nativeWindow.gtag("set", {
                                user_id: P.toString(),
                            });
                        }
                    }
                    logCustomMetrics(P) {
                        !P ||
                            !P.dimensions ||
                            P.dimensions.forEach((L) => {
                                this.isDebugMode
                                    ? console.table({
                                          Service: "Custom Dimension",
                                          label: L.label,
                                          value: L.value,
                                      })
                                    : this.windowRef.nativeWindow.gtag(
                                          "set",
                                          "user_properties",
                                          { [L.label]: L.value }
                                      );
                            });
                    }
                    trackPageViewAndAnalytics(P) {
                        if (!P) return;
                        let L = [...(P.events || [])];
                        P.event && L.push({ ...P.event }),
                            (L = L.filter((K) => "screen_view" !== K.name)),
                            P.screenName &&
                                (this.trackPage(P.screenName),
                                L.find((K) => "page_view" === K.name) ||
                                    L.push({
                                        name: "page_view",
                                        parameters: {
                                            page_title: P.screenName,
                                        },
                                    })),
                            L.forEach((K) => this.logEvent(K));
                    }
                }
                return (
                    (a.ɵfac = function (P) {
                        return new (P || a)(
                            e.LFG(O.L),
                            e.LFG(c.a),
                            e.LFG(T.X),
                            e.LFG(e.Lbi),
                            e.LFG(m, 8)
                        );
                    }),
                    (a.ɵprov = e.Yz7({
                        token: a,
                        factory: a.ɵfac,
                        providedIn: "root",
                    })),
                    a
                );
            })();
        },
        423: (W, x, o) => {
            o.d(x, { K: () => c });
            var l = o(6846),
                e = o(9244),
                g = o(2536),
                E = o(2560);
            let c = (() => {
                class I {
                    get primary() {
                        return e.Ek.primaryV3;
                    }
                    get secondary() {
                        return e.Ek.secondaryV3;
                    }
                    get secondaryBackground() {
                        return e.Ek.secondaryBackgroundV3;
                    }
                    get tertiary() {
                        return e.Ek.tertiaryV3;
                    }
                    get accent() {
                        return e.Ek.accentV3;
                    }
                    get accent100() {
                        return e.Ek.accent100V3;
                    }
                    get accent250() {
                        return e.Ek.accent250V3;
                    }
                    get lunoCoinLtc() {
                        return e.Ek.lunoCoinLtc;
                    }
                    get neutral0() {
                        return e.Ek.neutral0;
                    }
                    get neutral100() {
                        return e.Ek.neutral100;
                    }
                    get neutral300() {
                        return e.Ek.neutral300;
                    }
                    get background50() {
                        return e.Ek.background50;
                    }
                    get exchangePrimary() {
                        return e.Ek.exchangePrimary;
                    }
                    getAlpha(T, m) {
                        return m
                            ? T +
                                  (
                                      "0" +
                                      Math.round(
                                          255 * Math.min(Math.max(m, 0), 1)
                                      ).toString(16)
                                  )
                                      .slice(-2)
                                      .toUpperCase()
                            : T;
                    }
                    matStyleToColour(T) {
                        if (!T) return "";
                        switch ((0, g.I)(l.FrU, T)) {
                            case l.FrU.ACCENT:
                                return this.accent;
                            case l.FrU.SECONDARY:
                                return this.secondary;
                            case l.FrU.TERTIARY:
                                return this.tertiary;
                            case l.FrU.GREY:
                                return this.neutral100;
                            default:
                                return this.primary;
                        }
                    }
                    colourToMatStyle(T) {
                        if (!T) return l.FrU.PRIMARY;
                        switch (T) {
                            case this.accent:
                                return l.FrU.ACCENT;
                            case this.secondary:
                                return l.FrU.SECONDARY;
                            case this.tertiary:
                                return l.FrU.TERTIARY;
                            case this.neutral100:
                                return l.FrU.GREY;
                            default:
                                return l.FrU.PRIMARY;
                        }
                    }
                }
                return (
                    (I.ɵfac = function (T) {
                        return new (T || I)();
                    }),
                    (I.ɵprov = E.Yz7({
                        token: I,
                        factory: I.ɵfac,
                        providedIn: "root",
                    })),
                    I
                );
            })();
        },
        4878: (W, x, o) => {
            o.d(x, { E: () => B, N: () => K });
            var l = o(2560),
                e = o(4505),
                g = o(2692),
                E = o(6942),
                c = o(6774),
                I = o(3859),
                O = o(3910),
                T = o(4941),
                m = o(2901),
                _ = o(3047),
                a = o(7997),
                R = o(8740),
                P = o(9069),
                L = o(8987);
            const K = new l.OlP("SUPPORTED_LANGUAGES");
            let B = (() => {
                class j {
                    constructor(y, w, Q, ce, Ne) {
                        (this.currencyInfoService = y),
                            (this.errorLogger = w),
                            (this.http = Q),
                            (this.localeService = ce),
                            (this.supportedLanguages = Ne),
                            (this.isCamelCased = !0),
                            (this._hasProcessed = !1),
                            (this.appInfoSubject = new e.X(null)),
                            (this.retryAmount = 3),
                            (this.retryDelay = 1e3);
                    }
                    get hasProcessed() {
                        return this._hasProcessed;
                    }
                    load() {
                        return this.getInitData()
                            .toPromise()
                            .then((y) => this.processAppInfo(y))
                            .catch(
                                (y) => (
                                    this.errorLogger.log({
                                        message: "Failed to get init data",
                                        metadata: { error: y },
                                    }),
                                    Promise.resolve()
                                )
                            );
                    }
                    loadLite() {
                        return this.getInitLiteData()
                            .toPromise()
                            .then((y) => {
                                this.processAppInfo(y);
                            })
                            .catch(
                                (y) => (
                                    this.errorLogger.log({
                                        message: "Failed to get init lite data",
                                        metadata: { error: y },
                                    }),
                                    Promise.resolve()
                                )
                            );
                    }
                    refresh() {
                        return this.getInitData().pipe(
                            (0, g.b)((y) => this.processAppInfo(y)),
                            (0, E.U)((y) => (0, a.i)(y))
                        );
                    }
                    get geoComplyConfig() {
                        let y = this.userInfo?.verifiedCountries?.includes("US")
                            ? "USD_account"
                            : "global_account";
                        return (
                            0 === this.userInfo?.kycLevel &&
                                (y = this.featureFlags.onboardGeoComplyGlobalTag
                                    ? "onboarding"
                                    : "us_onboarding"),
                            {
                                license: this.externalConfig?.geocomply
                                    ?.license,
                                userId: this.externalConfig?.geocomply?.userId,
                                identifierType: y,
                            }
                        );
                    }
                    get hasLoaded() {
                        return this.appInfoSubject
                            .asObservable()
                            .pipe((0, E.U)((y) => !!y));
                    }
                    get userInfo() {
                        return this.appInfoSubject.value?.userInfo;
                    }
                    get userInfo$() {
                        return this.appInfoSubject.asObservable().pipe(
                            (0, _._)(),
                            (0, E.U)((y) => y.userInfo)
                        );
                    }
                    get profileInfo$() {
                        return this.appInfoSubject.asObservable().pipe(
                            (0, _._)(),
                            (0, E.U)((y) => y.profileInfo)
                        );
                    }
                    set profileInfo(y) {
                        this.appInfoSubject.next({
                            ...this.appInfoSubject.value,
                            profileInfo: { ...y },
                        });
                    }
                    get currencyInfo() {
                        const y =
                                this.appInfoSubject.value?.currencyInfo
                                    .currencies ?? {},
                            w = Object.keys(y).reduce(
                                (Q, ce) => ({
                                    ...Q,
                                    [ce.toUpperCase()]: y[ce],
                                }),
                                {}
                            );
                        return {
                            ...this.appInfoSubject.value?.currencyInfo,
                            currencies: { ...w },
                        };
                    }
                    get allowedCurrencies() {
                        return this._hasProcessed
                            ? (
                                  this.appInfoSubject.value
                                      ?.allowedCurrencies ?? []
                              ).map((w) => (w === T.NE.XBT ? T.NE.BTC : w))
                            : [];
                    }
                    get navInfo() {
                        return this.appInfoSubject.value?.navInfo;
                    }
                    get navInfo$() {
                        return this.appInfoSubject.pipe(
                            (0, E.U)((y) => y?.navInfo),
                            (0, _._)()
                        );
                    }
                    get featureFlags() {
                        return { ...this.appInfoSubject.value?.featureFlags };
                    }
                    get isAuthenticated$() {
                        return this.userInfo$.pipe(
                            (0, E.U)((y) => !!Number(y.userId))
                        );
                    }
                    get isAuthenticated() {
                        return !!Number(
                            this.appInfoSubject.value?.userInfo?.userId
                        );
                    }
                    get GoogleSignInClientID() {
                        return this.appInfoSubject.value?.externalConfig
                            .googleSocial.googleSigninClientId;
                    }
                    get FacebookAppID() {
                        return this.appInfoSubject.value?.externalConfig
                            .facebookSocial.facebookAppId;
                    }
                    get googleTagManagerConfig() {
                        return { ...this.externalConfig?.googleTagManager };
                    }
                    get staticAssetsUrl() {
                        return this.appInfoSubject.value?.urls.static;
                    }
                    get assetsUrls() {
                        return this.appInfoSubject.value?.urls;
                    }
                    get locOptions() {
                        return [
                            ...(this.appInfoSubject.value?.locOptions ?? []),
                        ];
                    }
                    set locOptions(y) {
                        this.appInfoSubject.next({
                            ...this.appInfoSubject.value,
                            locOptions: y,
                        });
                    }
                    get externalConfig() {
                        return { ...this.appInfoSubject.value?.externalConfig };
                    }
                    get availableLanguages() {
                        return {
                            ...this.appInfoSubject.value?.availableLanguages,
                        };
                    }
                    get preferences() {
                        return { ...this.appInfoSubject.value?.preferences };
                    }
                    get customMetrics() {
                        if (this.appInfoSubject.value)
                            return {
                                ...this.appInfoSubject.value.customMetrics,
                            };
                    }
                    set preferences(y) {
                        this.appInfoSubject.next({
                            ...this.appInfoSubject.value,
                            preferences: { ...y },
                        });
                    }
                    set language(y) {
                        this.appInfoSubject.next({
                            ...this.appInfoSubject.value,
                            language: y,
                            userInfo: {
                                ...this.appInfoSubject.value?.userInfo,
                                language: y,
                            },
                        });
                    }
                    get language() {
                        return this.appInfoSubject.value?.language;
                    }
                    get language$() {
                        return this.appInfoSubject.asObservable().pipe(
                            (0, _._)(),
                            (0, E.U)((y) => y.language)
                        );
                    }
                    set country(y) {
                        this.appInfoSubject.next({
                            ...this.appInfoSubject.value,
                            userInfo: {
                                ...this.appInfoSubject.value?.userInfo,
                                preferredLocale: y,
                            },
                        });
                    }
                    set name(y) {
                        this.appInfoSubject.next({
                            ...this.appInfoSubject.value,
                            userInfo: {
                                ...this.appInfoSubject.value?.userInfo,
                                givenName: y,
                            },
                        });
                    }
                    set phoneVerified(y) {
                        this.appInfoSubject.next({
                            ...this.appInfoSubject.value,
                            userInfo: {
                                ...this.appInfoSubject.value?.userInfo,
                                phoneNumber: y,
                                phoneVerified: !0,
                            },
                        });
                    }
                    set isOathEnabled(y) {
                        this.appInfoSubject.next({
                            ...this.appInfoSubject.value,
                            userInfo: {
                                ...this.appInfoSubject.value?.userInfo,
                                oathEnabled: y,
                            },
                        });
                    }
                    get siftscienceInfo() {
                        return this.appInfoSubject.value?.siftscienceInfo;
                    }
                    getInitData() {
                        let y = 0;
                        return this.http.get("/ajax/1/init").pipe(
                            (0, c.a)((w) =>
                                w.pipe(
                                    (0, g.b)((Q) => {
                                        (y += 1),
                                            y === this.retryAmount &&
                                                this.errorLogger.log({
                                                    message: "Init call failed",
                                                    metadata: {
                                                        status: Q.status,
                                                        message: Q.message,
                                                    },
                                                });
                                    }),
                                    (0, I.g)(this.retryDelay),
                                    (0, O.q)(this.retryAmount)
                                )
                            )
                        );
                    }
                    getInitLiteData() {
                        let y = 0;
                        return this.http.get("/ajax/1/init_lite").pipe(
                            (0, c.a)((w) =>
                                w.pipe(
                                    (0, g.b)((Q) => {
                                        (y += 1),
                                            y === this.retryAmount &&
                                                this.errorLogger.log({
                                                    message:
                                                        "Init_lite call failed",
                                                    metadata: {
                                                        status: Q.status,
                                                        message: Q.message,
                                                    },
                                                });
                                    }),
                                    (0, I.g)(this.retryDelay),
                                    (0, O.q)(this.retryAmount)
                                )
                            )
                        );
                    }
                    mockAppInfo(y) {
                        if (!y) return;
                        this.appInfoSubject.next({ ...y }),
                            this.localeService.set(y.language);
                        const w = (0, a.i)(y);
                        w.currencyInfo &&
                            (this.currencyInfoService.currencyInfo =
                                w.currencyInfo),
                            (this._hasProcessed = !0);
                    }
                    processAppInfo(y) {
                        if (!y) return;
                        const w = (0, a.i)(y);
                        w.availableLanguages &&
                            (w.availableLanguages = this.processAvailableLanguages(
                                w.availableLanguages
                            )),
                            w.currencyInfo &&
                                (this.currencyInfoService.currencyInfo =
                                    w.currencyInfo),
                            this.appInfoSubject.next({
                                ...w,
                                urls: { ...w.urls },
                            }),
                            (this._hasProcessed = !0);
                    }
                    processAvailableLanguages(y) {
                        if (!this.supportedLanguages) return y;
                        const w = Object.keys(y),
                            Q = { ...y };
                        return (
                            w.forEach((ce) => {
                                this.supportedLanguages.includes(ce) ||
                                    delete Q[ce];
                            }),
                            Q
                        );
                    }
                }
                return (
                    (j.ɵfac = function (y) {
                        return new (y || j)(
                            l.LFG(R.F),
                            l.LFG(P.k),
                            l.LFG(L.eN),
                            l.LFG(m.O),
                            l.LFG(K, 8)
                        );
                    }),
                    (j.ɵprov = l.Yz7({
                        token: j,
                        factory: j.ɵfac,
                        providedIn: "root",
                    })),
                    j
                );
            })();
        },
        8147: (W, x, o) => {
            o.d(x, { L: () => I });
            var l = o(4666),
                e = o(2560),
                g = o(4505),
                E = o(4139),
                c = o(5502);
            let I = (() => {
                class O {
                    constructor(m, _) {
                        (this.cookieService = m),
                            (this.platformId = _),
                            (this.cookieName = "cookie_preferences"),
                            (this.defaultPreferences = {
                                functional: !0,
                                performance: !0,
                                marketing: !0,
                            }),
                            (this._preferences$ = new g.X(
                                this.defaultPreferences
                            )),
                            (this._showPreferences$ = new g.X(!1)),
                            this.checkCookie();
                    }
                    get preferences$() {
                        return this._preferences$.asObservable();
                    }
                    get showPreferences$() {
                        return (0, l.NF)(this.platformId)
                            ? this._showPreferences$.asObservable()
                            : (0, E.of)(!1);
                    }
                    acceptAll() {
                        this.setCookie({
                            functional: !0,
                            performance: !0,
                            marketing: !0,
                        });
                    }
                    acceptSelection(m) {
                        this.setCookie(m);
                    }
                    triggerPreferencesUi() {
                        this._showPreferences$.next(!0);
                    }
                    setCookie(m) {
                        this.cookieService.set(
                            this.cookieName,
                            JSON.stringify(m),
                            365,
                            "/"
                        ),
                            this._preferences$.next(m),
                            this._showPreferences$.next(!1);
                    }
                    checkCookie() {
                        if (!this.cookieService.check(this.cookieName))
                            return void this._showPreferences$.next(!0);
                        const _ = JSON.parse(
                            this.cookieService.get(this.cookieName)
                        );
                        if (!this.isValid(_))
                            return (
                                this.cookieService.delete(this.cookieName),
                                void this._showPreferences$.next(!0)
                            );
                        this._preferences$.next(_);
                    }
                    isValid(m) {
                        const _ = Object.keys(m);
                        return (
                            _.includes("functional") &&
                            "boolean" == typeof m.functional &&
                            _.includes("performance") &&
                            "boolean" == typeof m.performance &&
                            _.includes("marketing") &&
                            "boolean" == typeof m.marketing &&
                            3 === _.length
                        );
                    }
                }
                return (
                    (O.ɵfac = function (m) {
                        return new (m || O)(e.LFG(c.N), e.LFG(e.Lbi));
                    }),
                    (O.ɵprov = e.Yz7({
                        token: O,
                        factory: O.ɵfac,
                        providedIn: "root",
                    })),
                    O
                );
            })();
        },
        8740: (W, x, o) => {
            o.d(x, { F: () => g });
            var l = o(4438),
                e = o(2560);
            let g = (() => {
                class E {
                    set currencyInfo(I) {
                        (this._currencyInfo = I), this.mapCurrencies(I);
                    }
                    mapCurrencies(I) {
                        (this.mappedCurrencies = new Map()),
                            I.currencies &&
                                Object.keys(I.currencies).forEach((O) => {
                                    this.mappedCurrencies?.set(
                                        I.currencies[O].code,
                                        I.currencies[O]
                                    ),
                                        this.mappedCurrencies?.set(
                                            I.currencies[O].displayCode,
                                            I.currencies[O]
                                        );
                                });
                    }
                    getCurrency(I) {
                        return (0, l.Z)(this.mappedCurrencies?.get(I));
                    }
                    getCurrencies() {
                        return (0, l.Z)(this.mappedCurrencies);
                    }
                    standardise(I) {
                        if (!I) return "";
                        const T = /[^0-9]/g,
                            m = I.split(/[,.]/),
                            _ = m.pop()?.replace(T, ""),
                            a = m.join("").replace(T, "");
                        return `${a}${a ? "." : ""}${_}`;
                    }
                    truncate(I, O) {
                        const [T, m] = I.toString().split("."),
                            _ = this.getCurrency(O);
                        return m && _
                            ? `${T}.${m.slice(0, _.scale)}`
                            : I.toString();
                    }
                }
                return (
                    (E.ɵfac = function (I) {
                        return new (I || E)();
                    }),
                    (E.ɵprov = e.Yz7({
                        token: E,
                        factory: E.ɵfac,
                        providedIn: "root",
                    })),
                    E
                );
            })();
        },
        1950: (W, x, o) => {
            o.d(x, { u: () => g });
            var l = o(2560),
                e = o(9107);
            let g = (() => {
                class E {
                    constructor(I) {
                        this.platform = I;
                    }
                    get isIosDevice() {
                        return this.platform.IOS;
                    }
                    get isAndroidDevice() {
                        return this.platform.ANDROID;
                    }
                    get isDesktop() {
                        return !this.isIosDevice && !this.isAndroidDevice;
                    }
                    get iosAppStoreUrl() {
                        return "https://luno.sng.link/Dwi6u/1a0p";
                    }
                    get androidAppStoreUrl() {
                        return "https://luno.sng.link/Dwi6u/89zu";
                    }
                }
                return (
                    (E.ɵfac = function (I) {
                        return new (I || E)(l.LFG(e.t4));
                    }),
                    (E.ɵprov = l.Yz7({
                        token: E,
                        factory: E.ɵfac,
                        providedIn: "root",
                    })),
                    E
                );
            })();
        },
        9287: (W, x, o) => {
            o.d(x, { L: () => g });
            var l = o(9316),
                e = o(2560);
            let g = (() => {
                class E {
                    constructor(I) {
                        this.window = I;
                    }
                    isProd() {
                        return [
                            "www.luno.com",
                            "app.luno.com",
                            "trade.luno.com",
                        ].includes(this.window.location.host);
                    }
                    isStaging() {
                        return [
                            "staging.luno.com",
                            "app.staging.luno.com",
                            "trade.staging.luno.com",
                        ].includes(this.window.location.host);
                    }
                    isDev() {
                        return !this.isStaging() && !this.isProd();
                    }
                }
                return (
                    (E.ɵfac = function (I) {
                        return new (I || E)(e.LFG(l.m));
                    }),
                    (E.ɵprov = e.Yz7({
                        token: E,
                        factory: E.ɵfac,
                        providedIn: "root",
                    })),
                    E
                );
            })();
        },
        501: (W, x, o) => {
            o.d(x, { q: () => g });
            var l = o(4666),
                e = o(2560);
            let g = (() => {
                class E {
                    constructor(I) {
                        (this.platformId = I), (this.debugMode = !1);
                    }
                    useBugsnag() {
                        return (
                            typeof this.useBugsnagCache > "u" &&
                                (this.useBugsnagCache =
                                    (0, l.NF)(this.platformId) &&
                                    (this.debugMode || !(0, e.X6Q)())),
                            this.useBugsnagCache
                        );
                    }
                }
                return (
                    (E.ɵfac = function (I) {
                        return new (I || E)(e.LFG(e.Lbi));
                    }),
                    (E.ɵprov = e.Yz7({
                        token: E,
                        factory: E.ɵfac,
                        providedIn: "root",
                    })),
                    E
                );
            })();
        },
        9069: (W, x, o) => {
            o.d(x, { k: () => l });
            class l {}
        },
        8045: (W, x, o) => {
            o.d(x, { a: () => E, u: () => g });
            var l = o(2560),
                e = o(7997);
            const g = new l.OlP("FeatureFlagDataSource", {
                factory: () => ({ featureFlags: {} }),
            });
            let E = (() => {
                class c {
                    constructor(O) {
                        this.dataProvider = O;
                    }
                    isEnabled(O) {
                        return this.dataProvider.isCamelCased
                            ? !!this.dataProvider.featureFlags[(0, e.L)(O)]
                            : !!this.dataProvider.featureFlags[O];
                    }
                }
                return (
                    (c.ɵfac = function (O) {
                        return new (O || c)(l.LFG(g));
                    }),
                    (c.ɵprov = l.Yz7({
                        token: c,
                        factory: c.ɵfac,
                        providedIn: "root",
                    })),
                    c
                );
            })();
        },
        2901: (W, x, o) => {
            o.d(x, { O: () => c });
            var l = o(3398),
                e = o.n(l),
                g = o(2560),
                E = o(501);
            let c = (() => {
                class I {
                    constructor(T) {
                        (this.errorHandlerService = T),
                            (this.territory = "GB"),
                            (this._defaultLocale = "en-GB"),
                            (this._locale = this._defaultLocale),
                            (this._defaultUrlPath = "en"),
                            (this._urlPath = this._defaultUrlPath);
                    }
                    get defaultUrlPath() {
                        return this._defaultUrlPath;
                    }
                    get locale() {
                        return this._locale;
                    }
                    get defaultLocale() {
                        return this._defaultLocale;
                    }
                    get urlPath() {
                        return this._urlPath;
                    }
                    set(T) {
                        if (!T)
                            return void (
                                this.errorHandlerService.useBugsnag() &&
                                e().notify("No locale received")
                            );
                        const m = T.match(/^([a-z]{2})(?:[-|\/]([a-z]{2}))?$/i);
                        m
                            ? this.processLocale(
                                  m[1].toLowerCase(),
                                  m[2]?.toUpperCase()
                              )
                            : this.errorHandlerService.useBugsnag() &&
                              e().notify("Unable to process locale", (_) => {
                                  _.addMetadata("Locale", { locale: T });
                              });
                    }
                    processLocale(T, m) {
                        switch (T) {
                            case "en":
                                "US" !== m && (m = "GB");
                                break;
                            case "ms":
                                m || (m = T.toUpperCase());
                                break;
                            case "fr":
                            case "id":
                            case "it":
                                m = T.toUpperCase();
                                break;
                            default:
                                (T = "en"), (m = "GB");
                        }
                        (this.territory = m),
                            this.setLocale(T, m),
                            this.setUrlPath(T, m);
                    }
                    setLocale(T, m) {
                        switch (T) {
                            case "en":
                                return "US" === m
                                    ? void (this._locale = `${T}-US`)
                                    : void (this._locale = `${T}-GB`);
                            case "ms":
                                return void (this._locale = `${T}-${m}`);
                        }
                        this._locale = T;
                    }
                    setUrlPath(T, m) {
                        switch (T) {
                            case "en":
                                if ("US" === m?.toUpperCase())
                                    return void (this._urlPath = `${T}-${m}`);
                                break;
                            case "ms":
                                return void (this._urlPath = `${T}-${m}`);
                        }
                        this._urlPath = T;
                    }
                }
                return (
                    (I.ɵfac = function (T) {
                        return new (T || I)(g.LFG(E.q));
                    }),
                    (I.ɵprov = g.Yz7({
                        token: I,
                        factory: I.ɵfac,
                        providedIn: "root",
                    })),
                    I
                );
            })();
        },
        2564: (W, x, o) => {
            o.d(x, { o: () => m });
            var l = o(4505),
                e = o(3022),
                g = o(6846),
                E = o(4878),
                c = o(2901),
                I = o(2560),
                O = o(8147),
                T = o(5502);
            let m = (() => {
                class _ {
                    constructor(R, P, L, K) {
                        (this.cookiePreferencesService = R),
                            (this.cookieService = P),
                            (this.commonInfoService = L),
                            (this.localeService = K),
                            (this.chosenHome$ = new l.X("")),
                            (this.redirectAction = {
                                name: "",
                                style: g.gw3.PRIMARY,
                                type: g.Ta6.REDIRECT,
                                url: "",
                            });
                        const B = this.cookieService.get(e.r5);
                        this.chosenHome$.next(
                            B ??
                                `${K.urlPath}/${this.commonInfoService.navInfo?.loc.code}`
                        );
                    }
                    setSwitch(R) {
                        this.localeService.set(R.replace(/^\//, "")),
                            this.cookiePreferencesService.preferences$.subscribe(
                                (P) => {
                                    !P.functional ||
                                        this.cookieService.set(e.r5, R, {
                                            expires: 365,
                                        });
                                }
                            ),
                            this.chosenHome$.next(R);
                    }
                    currentRegionUrl() {
                        return this.chosenHome$.asObservable();
                    }
                }
                return (
                    (_.ɵfac = function (R) {
                        return new (R || _)(
                            I.LFG(O.L),
                            I.LFG(T.N),
                            I.LFG(E.E),
                            I.LFG(c.O)
                        );
                    }),
                    (_.ɵprov = I.Yz7({
                        token: _,
                        factory: _.ɵfac,
                        providedIn: "root",
                    })),
                    _
                );
            })();
        },
        5053: (W, x, o) => {
            o.d(x, { h: () => I, v: () => O });
            var c,
                l = o(4929),
                e = o(4666),
                g = o(2560),
                E = o(4497);
            const I = "x-default";
            class O {
                constructor(m, _, a, R) {
                    (this.document = m),
                        (this.title = _),
                        (this.meta = a),
                        (this.rendererFactory = R),
                        (this.titleSuffix = ""),
                        (this.addedHrefLangs = []),
                        c.set(this, void 0);
                }
                setTitle(m) {
                    return this.title.setTitle(`${m}${this.titleSuffix}`), this;
                }
                addDescription(m) {
                    return (
                        this.meta.addTag({ name: "description", content: m }),
                        this
                    );
                }
                addKeywords(m) {
                    return (
                        this.meta.addTag({ name: "keywords", content: m }), this
                    );
                }
                updateDescription(m) {
                    return (
                        this.meta.updateTag({
                            name: "description",
                            content: m,
                        }),
                        this
                    );
                }
                addRobots(m = "index, follow") {
                    return (
                        this.meta.addTag({ name: "robots", content: m }), this
                    );
                }
                setOpenGraph(m) {
                    !m ||
                        (m.title &&
                            this.meta.updateTag({
                                property: "og:title",
                                content: m.title,
                            }),
                        m.description &&
                            this.meta.updateTag({
                                property: "og:description",
                                content: m.description,
                            }),
                        m.image &&
                            this.meta.updateTag({
                                property: "og:image",
                                content: m.image,
                            }),
                        m.url &&
                            this.meta.updateTag({
                                property: "og:url",
                                content: m.url,
                            }),
                        m.locale &&
                            this.meta.updateTag({
                                property: "og:locale",
                                content: m.locale,
                            }),
                        m.siteName &&
                            this.meta.updateTag({
                                property: "og:site_name",
                                content: m.siteName,
                            }),
                        m.type &&
                            this.meta.updateTag({
                                property: "og:type",
                                content: m.type,
                            }));
                }
                setHreflangs(m, _) {
                    m.forEach((a) => {
                        this.createHreflangTag(`${_}${a.url}`, a.language);
                    });
                }
                createHreflangTag(m, _) {
                    if ((this.maybeCreateRenderer(), !this.renderer)) return;
                    const a = this.renderer.createElement("link");
                    this.addedHrefLangs.push(a),
                        this.renderer.setAttribute(a, "rel", "alternate"),
                        this.renderer.setAttribute(a, "hreflang", _),
                        this.renderer.setAttribute(a, "href", m),
                        this.renderer.appendChild(this.document.head, a);
                }
                setCanonicalTag(m, _ = !0) {
                    if ((this.maybeCreateRenderer(), !this.renderer)) return;
                    (0, l.Q_)(this, c, "f") &&
                        this.renderer.removeChild(
                            this.document.head,
                            (0, l.Q_)(this, c, "f")
                        ),
                        _ && (m = m.split("?")[0]);
                    const a = this.renderer.createElement("link");
                    (0, l.YH)(this, c, a, "f"),
                        this.renderer.setAttribute(a, "rel", "canonical"),
                        this.renderer.setAttribute(a, "href", m),
                        this.renderer.appendChild(this.document.head, a);
                }
                removeHreflangTags() {
                    !this.addedHrefLangs.length ||
                        (this.maybeCreateRenderer(),
                        this.addedHrefLangs.forEach((m) => {
                            !this.renderer ||
                                this.renderer.removeChild(
                                    this.document.head,
                                    m
                                );
                        }),
                        (this.addedHrefLangs = []));
                }
                maybeCreateRenderer() {
                    this.renderer ||
                        (this.renderer = this.rendererFactory.createRenderer(
                            null,
                            null
                        ));
                }
            }
            (c = new WeakMap()),
                (O.ɵfac = function (m) {
                    return new (m || O)(
                        g.LFG(e.K0),
                        g.LFG(E.Dx),
                        g.LFG(E.h_),
                        g.LFG(g.FYo)
                    );
                }),
                (O.ɵprov = g.Yz7({
                    token: O,
                    factory: O.ɵfac,
                    providedIn: "root",
                }));
        },
        8607: (W, x, o) => {
            o.d(x, { o: () => I });
            var l = o(1769);
            const g_defaultAction_text = "Got it";
            var E = o(2560),
                c = o(930);
            let I = (() => {
                class O {
                    constructor(m, _) {
                        (this.i18n = m), (this.matSnackBar = _);
                    }
                    open(m, _, a) {
                        if (Array.isArray(a?.panelClass))
                            a?.panelClass.push("zero-padding-snackbar-button");
                        else {
                            const P = [];
                            a?.panelClass && P.push(a.panelClass),
                                P.push("zero-padding-snackbar-button"),
                                (a = { ...a, panelClass: P });
                        }
                        const R = this.i18n.translateText(g_defaultAction_text);
                        return this.matSnackBar.open(
                            m,
                            typeof _ < "u" ? _ : R,
                            a
                        );
                    }
                }
                return (
                    (O.ɵfac = function (m) {
                        return new (m || O)(E.LFG(l.K), E.LFG(c.ux));
                    }),
                    (O.ɵprov = E.Yz7({
                        token: O,
                        factory: O.ɵfac,
                        providedIn: "root",
                    })),
                    O
                );
            })();
        },
        9316: (W, x, o) => {
            o.d(x, { m: () => e });
            const e = new (o(2560).OlP)("WINDOW", {
                providedIn: "root",
                factory: () => window,
            });
        },
        8742: (W, x, o) => {
            o.d(x, { X: () => g });
            var l = o(2560);
            let g = (() => {
                class E {
                    get nativeWindow() {
                        return (function e() {
                            return window;
                        })();
                    }
                }
                return (
                    (E.ɵfac = function (I) {
                        return new (I || E)();
                    }),
                    (E.ɵprov = l.Yz7({ token: E, factory: E.ɵfac })),
                    E
                );
            })();
        },
        9244: (W, x, o) => {
            o.d(x, { Ek: () => e }), o(4941);
            const e = {
                primary: "#0091FF",
                primaryV3: "#071278",
                secondaryV3: "#2639F2",
                secondary150V3: "#C7E5FF",
                secondaryBackgroundV3: "#D8EDFF",
                tertiaryV3: "#5C65F6",
                tertiary350V3: "#6C74F7",
                tertiary450V3: "#4C56F5",
                accentV3: "#FF5C5C",
                accent100V3: "#FFCECD",
                accent250V3: "#FF7C77",
                exchangePrimary: "#051025",
                background50: "#E9F5FF",
                neutral0: "#FFFFFF",
                neutral100: "#F2F2F2",
                neutral300: "#777DB5",
                success: "#4CAF50",
                warning: "#FF6F00",
                error: "#B00020",
                redNegative: "#D73B31",
                redNegativeOnDark: "#FF5549",
                greenPositive: "#00874B",
                greenPositiveOnDark: "#2CBE85",
                secondary650: "#162AF1",
                lunoCoinBtc: "#F7931A",
                lunoCoinEth: "#62688F",
                lunoCoinUsdc: "#2775CA",
                lunoCoinLtc: "#8C9091",
                lunoCoinXrp: "#434C54",
                lunoCoinBch: "#07916A",
                lunoCoinLink: "#375BD2",
                lunoCoinUni: "#DD006A",
                lunoCoinAda: "#0033AD",
                lunoCoinSol: "#9945FF",
                lunoCoinAvax: "#E84142",
                lunoCoinMatic: "#8247E5",
                lunoCoinFiat: "#071278",
                accent350: "#FF4B4B",
                primary850: "#061068",
                moonBlue: "#12326B",
                moonBlue50: "#E5E9F0",
                moonBlue200: "#94A3C3",
                rocketWhite200: "#F2F2F220",
                exchangeWhiteInactive: "#9B9FA7",
                exchangeRed: "#EF4236",
                earthBlue50: "#E2F1FF",
                earthBlue700: "#1271DD",
                grey300: "#E0E0E0",
                grey600: "#757575",
                altColour: "#212831",
            };
        },
        2536: (W, x, o) => {
            o.d(x, { G: () => e, I: () => g });
            var l = o(2224);
            const e = (c, I, O) =>
                    ((!!c[I] || 0 === c[I]) && c[I] === O) ||
                    (I === O && E(c).includes(I)),
                g = (c, I) => E(c).find((O) => e(c, I, O)),
                E = (c) => {
                    let I = (0, l.Z)(c);
                    const O = I.filter((T) => "number" == typeof T);
                    return (
                        (I =
                            0 === O.length
                                ? I.filter((T) => "string" == typeof T)
                                : O),
                        I
                    );
                };
        },
        8549: (W, x, o) => {
            o.d(x, { x: () => l });
            const l = () =>
                o
                    .e("node_modules_lottie-web_build_player_lottie_svg_js")
                    .then(o.t.bind(o, 1919, 23));
        },
        2815: (W, x, o) => {
            function l(e) {
                const g = Symbol(),
                    E = Symbol();
                return (c, I) => {
                    const O = "string" == typeof e ? c[e] : e;
                    if (!O)
                        throw new Error(
                            `Cannot find method ${String(e)} in class ${
                                c.constructor.name
                            }`
                        );
                    Object.defineProperty(c, I, {
                        set: function (T) {
                            if (
                                ((this[E] = typeof this[E] > "u"),
                                !this[E] && this[g] === T)
                            )
                                return;
                            const m = this[g];
                            (this[g] = T),
                                O.call(this, this[g], {
                                    firstChange: this[E],
                                    previousValue: m,
                                    currentValue: this[g],
                                    isFirstChange: () => this[E],
                                });
                        },
                        get: function () {
                            return this[g];
                        },
                    });
                };
            }
            o.d(x, { G: () => l });
        },
        3047: (W, x, o) => {
            o.d(x, { _: () => g });
            var l = o(9151);
            const e = (E) => null != E;
            function g() {
                return (E) => E.pipe((0, l.h)(e));
            }
        },
        7997: (W, x, o) => {
            function l(E, c) {
                if (!E) return E;
                if ("object" == typeof E && Array.isArray(E))
                    return E.map((I) => l(I));
                if ("object" == typeof E && Object.keys(E).length) {
                    const I = {};
                    return (
                        Object.keys(E).forEach((O) => {
                            c && -1 !== c.indexOf(O)
                                ? (I[O] = E[O])
                                : O &&
                                  (I[e(O)] = l(
                                      E[O],
                                      (function g(E) {
                                          const c = [];
                                          return (
                                              "event" === E &&
                                                  c.push("parameters"),
                                              c
                                          );
                                      })(O)
                                  ));
                        }),
                        I
                    );
                }
                return E;
            }
            function e(E) {
                return E.split("_").reduce(
                    (c, I) =>
                        I.length
                            ? c
                                ? c + I[0].toUpperCase() + I.slice(1)
                                : I[0].toLowerCase() + I.slice(1)
                            : c,
                    ""
                );
            }
            o.d(x, { L: () => e, i: () => l });
        },
        1769: (W, x, o) => {
            o.d(x, { K: () => l.K, W: () => E });
            var l = o(9336),
                e = o(2560);
            let g = (() => {
                    class c {}
                    return (
                        (c.ɵfac = function (O) {
                            return new (O || c)();
                        }),
                        (c.ɵmod = e.oAB({ type: c })),
                        (c.ɵinj = e.cJS({})),
                        c
                    );
                })(),
                E = (() => {
                    class c {}
                    return (
                        (c.ɵfac = function (O) {
                            return new (O || c)();
                        }),
                        (c.ɵmod = e.oAB({ type: c })),
                        (c.ɵinj = e.cJS({ imports: [g, g] })),
                        c
                    );
                })();
        },
        5421: (W, x, o) => {
            o.d(x, { y: () => g });
            var l = o(9336),
                e = o(2560);
            let g = (() => {
                class E {
                    constructor(I, O) {
                        (this.el = I), (this.i18n = O);
                    }
                    ngOnInit() {
                        this.translate();
                    }
                    ngOnChanges() {
                        this.translate();
                    }
                    translate() {
                        setTimeout(() => {
                            if (
                                this.el.nativeElement.childNodes &&
                                this.el.nativeElement.childNodes[0] &&
                                (this.el.nativeElement.childNodes[0]
                                    .nodeValue ||
                                    this.el.nativeElement.childNodes[0]
                                        .childNodes)
                            ) {
                                const I = this.el.nativeElement.getAttribute(
                                    "data-original"
                                );
                                let O;
                                I
                                    ? (O = I)
                                    : (this.el.nativeElement.setAttribute(
                                          "data-original",
                                          this.el.nativeElement.innerHTML
                                      ),
                                      (O = this.el.nativeElement.innerHTML)),
                                    (this.el.nativeElement.innerHTML = this
                                        .i18nExtended
                                        ? this.i18n.translateText(
                                              O,
                                              this.i18nExtended
                                          )
                                        : this.i18n.translateText(O));
                            }
                        });
                    }
                }
                return (
                    (E.ɵfac = function (I) {
                        return new (I || E)(e.Y36(e.SBq), e.Y36(l.K));
                    }),
                    (E.ɵdir = e.lG2({
                        type: E,
                        selectors: [["", "i18nExtended", ""]],
                        inputs: { i18nExtended: "i18nExtended" },
                        features: [e.TTD],
                    })),
                    E
                );
            })();
        },
        9336: (W, x, o) => {
            o.d(x, { K: () => c });
            var l = o(1670),
                e = o(2901),
                g = o(2560),
                E = o(8987);
            if (typeof global < "u" && typeof global.DOMParser > "u") {
                const { DOMParser: I } = o(9936);
                global.DOMParser = I;
            }
            let c = (() => {
                class I {
                    constructor(T, m) {
                        (this.http = T),
                            (this.localeService = m),
                            (this.anchorRegex = new RegExp(
                                /(<a.*?>)(?:.*?)(<\/\s?a>)/i
                            )),
                            (this.multiSpaceRegex = new RegExp(/\s\s/g)),
                            (this.translationUnits = []);
                    }
                    get defaultLanguage() {
                        return "en";
                    }
                    fetchTranslations(T) {
                        var m = this;
                        return (0, l.Z)(function* () {
                            m.translations = yield m.http.get(T).toPromise();
                        })();
                    }
                    setWebsitePrerenderTranslations(T) {
                        var m = this;
                        return (0, l.Z)(function* () {
                            !T || ((m.translations = T), m.initTranslations());
                        })();
                    }
                    translateText(T, m, _) {
                        return this.localeService.locale ===
                            this.localeService.defaultLocale
                            ? this.processVariables(T, m)
                            : (this.translationUnits?.length ||
                                  this.initTranslations(),
                              this.cottonReplaceAlgorithm(
                                  T,
                                  this.translationUnits,
                                  m
                              ));
                    }
                    translateLater(T, m, _) {
                        return this.processVariables(T, m);
                    }
                    initTranslations() {
                        this.translations && this.initJsonTranslations();
                    }
                    initJsonTranslations() {
                        this.translations &&
                            Object.keys(this.translations).forEach((m) => {
                                !this.translations ||
                                    (this.addTranslationToObject(
                                        m,
                                        this.translations[m]
                                    ),
                                    this.maybeAddUnencodedString(
                                        m,
                                        this.translations[m]
                                    ));
                            });
                    }
                    addTranslationToObject(T, m) {
                        this.translationUnits.push({ source: T, target: m });
                    }
                    maybeAddUnencodedString(T, m) {
                        this.hasEncodedCharacter(T) &&
                            this.addTranslationToObject(this.xmlDecode(T), m);
                    }
                    xmlDecode(T) {
                        return T.replace(/\&amp;/g, "&")
                            .replace(/\&apos;/g, "'")
                            .replace(/\&quot;/g, '"');
                    }
                    hasEncodedCharacter(T) {
                        return new RegExp(/&[a-z]+;/).test(T);
                    }
                    cottonReplaceAlgorithm(T, m, _) {
                        const a = T;
                        if ("string" != typeof T || !T || !m) return T;
                        if (!this.hasTag(a)) {
                            const R = m.find(
                                (P) =>
                                    P.source
                                        .toLowerCase()
                                        .replace(/\s/g, " ") ===
                                    T.toLowerCase().trim().replace(/\s/g, " ")
                            );
                            if (R)
                                return _
                                    ? this.processVariables(R.target, _)
                                    : R.target;
                        }
                        for (const R of m) {
                            let P = R.source;
                            const L = R.target;
                            if (
                                P &&
                                L &&
                                (this.hasTag(a) &&
                                    this.hasTag(P) &&
                                    ((T = this.getPlainText(T)),
                                    (P = this.getPlainText(P))),
                                (P = this.processWhitespaces(P)),
                                (T = this.processWhitespaces(T)),
                                this.isTranslation(T, P, _))
                            )
                                return this.digestTranslation(a, L, _);
                        }
                        return _ ? this.processVariables(a, _) : a;
                    }
                    hasTag(T) {
                        return T.includes("<");
                    }
                    getPlainText(T) {
                        const m = document.createElement("div");
                        return (
                            (m.innerHTML = T), m.textContent || m.innerText || T
                        );
                    }
                    processWhitespaces(T) {
                        for (
                            T = T.replace(/\n/, " ");
                            this.multiSpaceRegex.test(T);

                        )
                            T = T.replace(this.multiSpaceRegex, " ");
                        return T;
                    }
                    isTranslation(T, m, _) {
                        const a = this.breakSentanceIntoChars(T),
                            R = this.breakSentanceIntoChars(
                                this.removeInterpolation(m)
                            );
                        if (!R || !a) return !1;
                        if (_ && m.trim() === T.trim()) return !0;
                        const P = m.replace(/<x\b[^>]*>/g, "");
                        return !(
                            R.length !== a.length ||
                            !P ||
                            !T.includes(P.trim())
                        );
                    }
                    breakSentanceIntoChars(T) {
                        return T.match(/\w+|[^\s\w]+/g);
                    }
                    removeInterpolation(T) {
                        return T.replace(/<x\b[^>]*>/g, "i18nExtendedVariable");
                    }
                    digestTranslation(T, m, _) {
                        return (
                            (m = this.processAnchors(T, m)),
                            (m = this.convertTags(m)),
                            (m = this.restoreBrackets(m)),
                            this.processVariables(m, _)
                        );
                    }
                    processVariables(T, m) {
                        return (
                            m &&
                                Object.keys(m).forEach((a) => {
                                    const R = new RegExp(`{${a}}`, "g");
                                    T = T.replace(R, (m[a] ?? "").toString());
                                }),
                            T
                        );
                    }
                    processAnchors(T, m) {
                        return this.injectAnchors(
                            T,
                            this.unhtmlifyTargetAnchors(m)
                        );
                    }
                    unhtmlifyTargetAnchors(T) {
                        let m = 0;
                        for (; T.match(/<x\sid="START_LINK".*?>/i); ) {
                            if (m > 25) {
                                console.error(
                                    "Number of hyperlinks in translation exceeds limit"
                                );
                                break;
                            }
                            (T = T.replace(
                                /<x\sid="START_LINK".*?>([\s\S]*?)<x id="CLOSE_LINK".*?>/i,
                                "||link" + m + "-$1||"
                            )),
                                m++;
                        }
                        return T;
                    }
                    convertTags(T) {
                        if (
                            !new RegExp(/<x id="(START|CLOSE)_TAG_[a-z]/i).test(
                                T
                            )
                        )
                            return T;
                        const _ = new DOMParser();
                        return T.replace(
                            /<x id="(?:START|CLOSE)_TAG_[a-z]+".*?\/>/gi,
                            (a) => {
                                const R = _.parseFromString(a, "text/xml");
                                if (!R) return a;
                                const P = R.getElementsByTagName("x");
                                return P?.[0]?.attributes?.["equiv-text"]?.value
                                    ? P[0].attributes["equiv-text"].value
                                    : a;
                            }
                        );
                    }
                    restoreBrackets(T) {
                        return T.replace(/&lt;(\/?[a-z]+.*?)&gt;/gi, "<$1>");
                    }
                    injectAnchors(T, m) {
                        for (; this.anchorRegex.test(T); ) {
                            const _ = T.match(this.anchorRegex);
                            (m = m.replace(
                                /\|\|link[0-9]+-([\s\S]*?)\|\|/i,
                                (a, R) => _?.[1] + R + _?.[2]
                            )),
                                (T = T.replace(this.anchorRegex, "replaced"));
                        }
                        return m;
                    }
                }
                return (
                    (I.ɵfac = function (T) {
                        return new (T || I)(g.LFG(E.eN), g.LFG(e.O));
                    }),
                    (I.ɵprov = g.Yz7({
                        token: I,
                        factory: I.ɵfac,
                        providedIn: "root",
                    })),
                    I
                );
            })();
        },
        5756: (W, x, o) => {
            o.d(x, { $m: () => P, o$: () => K });
            var l = o(2218),
                e = o(3910),
                g = o(5921),
                E = o(1670),
                c = o(2560),
                I = o(4139),
                O = o(2692),
                T = o(4661),
                m = o(4043);
            const _ = new c.OlP("ICON_CONFIG");
            var a = o(8987);
            let R = (() => {
                    class B {
                        constructor(v) {
                            if (
                                ((this.http = v),
                                (this.svgIconCache = new Map()),
                                (this.requestCache = new Map()),
                                (this.config = (0, c.f3M)(_)),
                                !this.config)
                            )
                                throw Error(
                                    "[IconRegistryService] No provider for ICON_CONFIG. Did you forget to use 'provideMatterIcons()'?"
                                );
                        }
                        getIconByName$(v) {
                            const y = this.createIconUrl(v);
                            return this.locateIcon(v, y);
                        }
                        getIconByUrl$(v) {
                            return this.locateIcon(v, v);
                        }
                        preloadIcons(v) {
                            var y = this;
                            return (0, E.Z)(function* () {
                                const w = v.map((Q) =>
                                    y
                                        .locateIcon(Q, y.createIconUrl(Q))
                                        .toPromise()
                                );
                                yield Promise.all(w);
                            })();
                        }
                        locateIcon(v, y) {
                            const w = this.svgIconCache.get(v);
                            return w
                                ? (0, I.of)(w)
                                : this.requestCache.get(y) ||
                                      this.fetchIcon(v, y);
                        }
                        fetchIcon(v, y) {
                            const w = this.http
                                .get(y, { responseType: "text" })
                                .pipe(
                                    (0, O.b)((Q) =>
                                        this.svgIconCache.set(v, Q)
                                    ),
                                    (0, T.x)(() => this.requestCache.delete(y)),
                                    (0, m.B)()
                                );
                            return this.requestCache.set(y, w), w;
                        }
                        createIconUrl(v) {
                            return `${this.config.assetUrl}/assets/matter/icons/${v}.svg`;
                        }
                    }
                    return (
                        (B.ɵfac = function (v) {
                            return new (v || B)(c.LFG(a.eN));
                        }),
                        (B.ɵprov = c.Yz7({
                            token: B,
                            factory: B.ɵfac,
                            providedIn: "root",
                        })),
                        B
                    );
                })(),
                P = (() => {
                    class B {
                        constructor(v, y) {
                            (this.el = v),
                                (this.iconRegistry = y),
                                (this.untilDestroyed$ = new l.xQ());
                        }
                        set icon(v) {
                            v.url
                                ? this.loadIcon(
                                      this.iconRegistry.getIconByUrl$(v.url)
                                  )
                                : v.name &&
                                  this.loadIcon(
                                      this.iconRegistry.getIconByName$(v.name)
                                  );
                        }
                        ngOnDestroy() {
                            this.untilDestroyed$.next(null),
                                this.untilDestroyed$.complete();
                        }
                        loadIcon(v) {
                            v.pipe(
                                (0, e.q)(1),
                                (0, g.R)(this.untilDestroyed$)
                            ).subscribe((y) => this.setIcon(y));
                        }
                        setIcon(v) {
                            this.el.nativeElement.innerHTML = v;
                        }
                    }
                    return (
                        (B.ɵfac = function (v) {
                            return new (v || B)(c.Y36(c.SBq), c.Y36(R));
                        }),
                        (B.ɵcmp = c.Xpm({
                            type: B,
                            selectors: [["matter-icon"]],
                            inputs: { icon: "icon" },
                            standalone: !0,
                            features: [c.jDz],
                            decls: 0,
                            vars: 0,
                            template: function (v, y) {},
                            styles: [
                                "[_nghost-%COMP%]{--matter-c-icon-size: 1.5rem;display:inline-block;width:var(--matter-c-icon-size);height:var(--matter-c-icon-size)}",
                            ],
                            changeDetection: 0,
                        })),
                        B
                    );
                })();
            const L = [
                "arrow_left",
                "arrow_right",
                "buy",
                "chevron_right",
                "close",
                "coin_ada",
                "coin_avax",
                "coin_btc",
                "coin_bch",
                "coin_eth",
                "coin_link",
                "coin_ltc",
                "coin_matic",
                "coin_sol",
                "coin_usdc",
                "coin_xrp",
                "exchange",
                "explore",
                "explore_filled",
                "home",
                "home_filled",
                "more_horizontal",
                "profile",
                "profile_filled",
                "rewards",
                "rewards_filled",
                "sell",
                "stake",
                "visibility_off",
                "visibility_on",
                "wallets",
                "wallets_filled",
            ];
            function K(B) {
                return { provide: _, useValue: { icons: [...L], assetUrl: B } };
            }
        },
        1031: (W, x, o) => {
            o.d(x, { A: () => l });
            var l = (() => {
                return (
                    ((e = l || (l = {}))[(e.DEFAULT = 0)] = "DEFAULT"),
                    (e[(e.MOYA = 1)] = "MOYA"),
                    l
                );
                var e;
            })();
        },
        634: (W, x, o) => {
            o.d(x, { Z: () => O });
            var l = o(2560),
                e = o(4666),
                g = o(3012),
                E = o(7822);
            function c(T, m) {
                if (
                    (1 & T &&
                        (l.ynx(0),
                        l.TgZ(
                            1,
                            "mat-expansion-panel",
                            3,
                            4
                        )(3, "mat-expansion-panel-header")(
                            4,
                            "mat-panel-title"
                        ),
                        l._uU(5),
                        l.qZA(),
                        l.TgZ(6, "mat-icon", 5),
                        l._uU(7),
                        l.qZA()(),
                        l._UZ(8, "p", 6),
                        l.qZA(),
                        l.BQk()),
                    2 & T)
                ) {
                    const _ = m.$implicit,
                        a = l.MAs(2),
                        R = l.oxw(2);
                    l.xp6(1),
                        l.Q6J("expanded", R.isExpanded)("hideToggle", !0),
                        l.xp6(4),
                        l.Oqu(_.title),
                        l.xp6(1),
                        l.Q6J(
                            "color",
                            R.darkTheme || R.isTertiary ? "" : "primary"
                        ),
                        l.xp6(1),
                        l.Oqu(a.expanded ? "expand_less" : "expand_more"),
                        l.xp6(1),
                        l.Q6J("innerHTML", _.copyHtml, l.oJD);
                }
            }
            function I(T, m) {
                if (
                    (1 & T &&
                        (l.ynx(0),
                        l.TgZ(1, "mat-accordion")(2, "h2", 2),
                        l._uU(3),
                        l.qZA(),
                        l.YNc(4, c, 9, 6, "ng-container", 1),
                        l.qZA(),
                        l.BQk()),
                    2 & T)
                ) {
                    const _ = m.$implicit;
                    l.xp6(3),
                        l.Oqu(_.subHeading),
                        l.xp6(1),
                        l.Q6J("ngForOf", _.details);
                }
            }
            let O = (() => {
                class T {
                    constructor() {
                        (this.darkTheme = !1),
                            (this.isExpanded = !1),
                            (this.isTertiary = !1);
                    }
                }
                return (
                    (T.ɵfac = function (_) {
                        return new (_ || T)();
                    }),
                    (T.ɵcmp = l.Xpm({
                        type: T,
                        selectors: [["luno-accordion"]],
                        inputs: {
                            accordionConfig: "accordionConfig",
                            darkTheme: "darkTheme",
                            isExpanded: "isExpanded",
                            isTertiary: "isTertiary",
                        },
                        decls: 2,
                        vars: 5,
                        consts: [
                            [1, "accordion"],
                            [4, "ngFor", "ngForOf"],
                            [1, "sub-heading", "mat-subheading-2"],
                            [3, "expanded", "hideToggle"],
                            ["panel", ""],
                            [3, "color"],
                            [1, "mat-body-2", 3, "innerHTML"],
                        ],
                        template: function (_, a) {
                            1 & _ &&
                                (l.TgZ(0, "span", 0),
                                l.YNc(1, I, 5, 2, "ng-container", 1),
                                l.qZA()),
                                2 & _ &&
                                    (l.ekj("dark-theme", a.darkTheme)(
                                        "tertiary-theme",
                                        a.isTertiary
                                    ),
                                    l.xp6(1),
                                    l.Q6J("ngForOf", a.accordionConfig));
                        },
                        dependencies: [e.sg, g.pp, g.ib, g.yz, g.yK, E.Hw],
                        styles: [
                            ".accordion[_ngcontent-%COMP%]{margin:0 auto;background-color:var(--color-neutral-0);max-width:1240px;display:block}.accordion[_ngcontent-%COMP%]   .mat-content[_ngcontent-%COMP%]{padding:1px 0 1px 15px}.accordion[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{margin:0;font-size:18px;font-weight:500}.accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-neutral-100);border-radius:0;box-shadow:none;margin-bottom:0;margin-top:0}.accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{padding:20px;height:100%}.accordion[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%]{margin:40px auto 15px}.accordion.dark-theme[_ngcontent-%COMP%]{background-color:var(--color-primary)}.accordion.dark-theme[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{background-color:var(--color-primary)}.accordion.dark-theme[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .accordion.dark-theme[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%], .accordion.dark-theme[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{color:var(--color-neutral-0)}.accordion.tertiary-theme[_ngcontent-%COMP%]{background-color:var(--color-tertiary)}.accordion.tertiary-theme[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{background-color:var(--color-tertiary)}.accordion.tertiary-theme[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .accordion.tertiary-theme[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%], .accordion.tertiary-theme[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{color:var(--color-neutral-0)}[_nghost-%COMP%]     .mat-expansion-panel-content .mat-expansion-panel-body{padding:0 24px 16px 20px}[_nghost-%COMP%]     .mat-body-2 a{text-decoration:underline;color:var(--color-secondary)}",
                        ],
                    })),
                    T
                );
            })();
        },
        7201: (W, x, o) => {
            o.d(x, { f: () => I });
            var l = o(4666),
                e = o(3012),
                g = o(7822),
                E = o(1769),
                c = o(2560);
            let I = (() => {
                class O {}
                return (
                    (O.ɵfac = function (m) {
                        return new (m || O)();
                    }),
                    (O.ɵmod = c.oAB({ type: O })),
                    (O.ɵinj = c.cJS({ imports: [l.ez, E.W, e.To, g.Ps] })),
                    O
                );
            })();
        },
        5231: (W, x, o) => {
            o.d(x, { _: () => l });
            var l = (() => {
                return (
                    ((e = l || (l = {}))[(e.QRCODE = 0)] = "QRCODE"),
                    (e[(e.ARTICLE = 1)] = "ARTICLE"),
                    (e[(e.CALCULATOR = 2)] = "CALCULATOR"),
                    l
                );
                var e;
            })();
        },
        5912: (W, x, o) => {
            o.d(x, { N: () => l });
            const l = {
                production: !0,
                appVersion: "website-app/2023/06/08/5aee93",
                webAssetsURL:
                    "https://d32exi8v9av3ux.cloudfront.net/website-app/2023/06/08/5aee93",
                bugsnagApiKey: "3cc67afdb6dd450441bc9023b5262f26",
                intoTheBlockApiKey: "5LY0J8Nh4VriS5mEP38BTcJeHciaLi7P3GNsg580",
            };
        },
        9217: (W, x, o) => {
            var l = o(4497),
                e = o(2560),
                g = o(4666),
                E = o(8987),
                c = o(4522),
                I = o(9906),
                O = o(7514);
            let T = (() => {
                class n {}
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵmod = e.oAB({ type: n })),
                    (n.ɵinj = e.cJS({ imports: [O.h, g.ez] })),
                    n
                );
            })();
            var m = o(1451),
                _ = o(2156),
                a = o(4792),
                R = o(207),
                P = o(1484),
                L = o(7822);
            let K = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({
                            imports: [g.ez, P.Is, O.h, _.QW, a.p9, L.Ps, R.si],
                        })),
                        n
                    );
                })(),
                B = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, O.h, K] })),
                        n
                    );
                })();
            var j = o(2508),
                v = o(5074),
                y = o(7371),
                w = o(3178),
                Q = o(3468),
                ce = o(241);
            let Ne = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, L.Ps, w.Bz, Q.N] })),
                        n
                    );
                })(),
                H = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({
                            imports: [
                                g.ez,
                                v.lN,
                                R.Ng,
                                y.LD,
                                Q.N,
                                ce.R,
                                j.UX,
                                w.Bz,
                                Ne,
                            ],
                        })),
                        n
                    );
                })();
            var q = o(6643);
            let M = (() => {
                class n {}
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵmod = e.oAB({ type: n })),
                    (n.ɵinj = e.cJS({ imports: [g.ez] })),
                    n
                );
            })();
            var z = o(1867);
            let ie = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({
                            imports: [z.T, g.ez, R.si, w.Bz, M],
                        })),
                        n
                    );
                })(),
                De = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({
                            imports: [g.ez, R.si, Q.N, L.Ps, c.ot],
                        })),
                        n
                    );
                })();
            var ne = o(1716);
            let re = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({
                            imports: [
                                g.ez,
                                Q.N,
                                L.Ps,
                                O.h,
                                De,
                                R.si,
                                w.Bz,
                                z.T,
                                ne.K,
                            ],
                        })),
                        n
                    );
                })(),
                we = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez] })),
                        n
                    );
                })(),
                Y = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({
                            imports: [
                                z.T,
                                O.h,
                                g.ez,
                                De,
                                Q.N,
                                L.Ps,
                                R.si,
                                ne.K,
                                w.Bz,
                                we,
                            ],
                        })),
                        n
                    );
                })();
            var Z = o(1769);
            const ae_about_text = "About Luno",
                ae_careers_text = "Careers",
                ae_bitcoinPrice_text = "Bitcoin price",
                ae_features_text = "Features",
                ae_wallet_text = "Wallet",
                ae_exchange_text = "Exchange",
                ae_trade_text = "Trade",
                ae_signIn_text = "Sign in",
                ae_signUp_text = "Sign up",
                ae_signOut_text = "Sign out",
                ae_helpCentre_text = "Help Centre";
            let Oe = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({})),
                        n
                    );
                })(),
                Fe = (() => {
                    class n {
                        constructor(t) {
                            (this.i18n = t),
                                (this.textItems = this.getTranslations());
                        }
                        getTranslations() {
                            const t = new Map();
                            let i = this.i18n.translateText(ae_about_text);
                            return (
                                t.set("aboutLuno", i),
                                (i = this.i18n.translateText(ae_careers_text)),
                                t.set("careers", i),
                                (i = this.i18n.translateText(
                                    ae_bitcoinPrice_text
                                )),
                                t.set("bitcoinPrice", i),
                                (i = this.i18n.translateText(ae_features_text)),
                                t.set("featuresText", i),
                                (i = this.i18n.translateText(ae_wallet_text)),
                                t.set("walletText", i),
                                (i = this.i18n.translateText(ae_exchange_text)),
                                t.set("exchangeText", i),
                                (i = this.i18n.translateText(ae_trade_text)),
                                t.set("tradeText", i),
                                (i = this.i18n.translateText(ae_signIn_text)),
                                t.set("signInText", i),
                                (i = this.i18n.translateText(ae_signUp_text)),
                                t.set("signUpText", i),
                                (i = this.i18n.translateText(ae_signOut_text)),
                                t.set("signOutText", i),
                                (i = this.i18n.translateText(
                                    ae_helpCentre_text
                                )),
                                t.set("helpCentre", i),
                                t
                            );
                        }
                        setTranslations() {
                            this.textItems ||
                                (this.textItems = this.getTranslations());
                        }
                        resetTranslations() {
                            this.textItems = this.getTranslations();
                        }
                        getText(t) {
                            return (
                                this.textItems ||
                                    (this.textItems = this.getTranslations()),
                                this.textItems.get(t) || ""
                            );
                        }
                        makeNavigationItem(t, i, C, A) {
                            return {
                                iconUrl: { activeIcon: t, inactiveIcon: i },
                                action: { name: this.getText(C), url: A },
                            };
                        }
                        makeNavigationMatItem(t, i, C, A) {
                            const U = {
                                matIcon: { name: t, theme: "primary" },
                                action: { name: this.getText(i), url: C },
                            };
                            return A && (U.activeForRoutes = A), U;
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.LFG(Z.K));
                        }),
                        (n.ɵprov = e.Yz7({
                            token: n,
                            factory: n.ɵfac,
                            providedIn: Oe,
                        })),
                        n
                    );
                })(),
                Be = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({
                            imports: [g.ez, q.SJ, ie, Y, re, Oe],
                        })),
                        n
                    );
                })(),
                ve = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez] })),
                        n
                    );
                })();
            var he = (() => {
                    return (
                        ((n = he || (he = {})).GeneralGtagId = "G-RPBN9JG6XG"),
                        (n.GeneralUniversalId = "UA-39013173-1"),
                        (n.ExpressGtagId = "G-3BQF1G8ENL"),
                        he
                    );
                    var n;
                })(),
                Ct = o(6436),
                Ge = o(3398),
                ye = o.n(Ge),
                Ye = o(501);
            let Tt = (() => {
                class n {
                    constructor(t) {
                        this.errorHandlerService = t;
                    }
                    intercept(t, i) {
                        if (this.errorHandlerService.useBugsnag()) {
                            const C = {
                                    _note:
                                        "It's not guaranteed that the error relates to this call, it's just an indication",
                                    url: t.url,
                                    method: t.method,
                                },
                                A = (U) => {
                                    U.addMetadata("last api call", C);
                                };
                            ye().addOnError(A);
                        }
                        return i.handle(t);
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.LFG(Ye.q));
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            var ue = o(4878);
            let Et = (() => {
                class n {
                    constructor(t) {
                        this.commonInfoService = t;
                    }
                    intercept(t, i) {
                        if (
                            ["DELETE", "PATCH", "POST", "PUT"].includes(
                                t.method
                            ) &&
                            this.commonInfoService.userInfo?.csrfToken
                        ) {
                            const C = t.clone({
                                headers: t.headers.set(
                                    "X-Xsrf-Token",
                                    this.commonInfoService.userInfo.csrfToken
                                ),
                            });
                            return i.handle(C);
                        }
                        return i.handle(t);
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.LFG(ue.E));
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            var Pe = o(9316);
            let It = (() => {
                class n {
                    constructor(t) {
                        (this.window = t),
                            (this.hostMap = {
                                "new.staging.luno.com":
                                    "https://ajax.staging.luno.com",
                                "staging.luno.com":
                                    "https://ajax.staging.luno.com",
                                "app.staging.luno.com":
                                    "https://ajax.staging.luno.com",
                                "trade.staging.luno.com":
                                    "https://ajax.staging.luno.com",
                                "new-www.luno.com": "https://ajax.luno.com",
                                "www.luno.com": "https://ajax.luno.com",
                                "app.luno.com": "https://ajax.luno.com",
                                "trade.luno.com": "https://ajax.luno.com",
                                "new-staging-lb.luno.com":
                                    "https://ajax-dns-lb.luno.com",
                                "www.staging.luno.com":
                                    "https://ajax.staging.luno.com",
                            }),
                            (this.ajaxRegex = new RegExp(/^\/ajax/));
                    }
                    intercept(t, i) {
                        const C = this.window.location.host;
                        if (!this.isLunoHostAndAjaxRequest(C, t.url))
                            return i.handle(t);
                        const A = t.clone({
                            url: this.hostMap[C] + t.url,
                            withCredentials: !0,
                        });
                        return i.handle(A);
                    }
                    isLunoHostAndAjaxRequest(t, i) {
                        return t in this.hostMap && this.ajaxRegex.test(i);
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.LFG(Pe.m));
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            const ct = new e.OlP("LANGUAGE_CODE");
            let Me = (() => {
                    class n {
                        constructor(t) {
                            this.languageCode$ = t;
                        }
                        intercept(t, i) {
                            let C;
                            return (
                                this.languageCode$?.subscribe((A) => (C = A)),
                                C &&
                                    (t = t.clone({
                                        headers: t.headers.set(
                                            "X-Luno-Override-Language",
                                            C
                                        ),
                                    })),
                                i.handle(t)
                            );
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.LFG(ct, 8));
                        }),
                        (n.ɵprov = e.Yz7({
                            token: n,
                            factory: n.ɵfac,
                            providedIn: "root",
                        })),
                        n
                    );
                })(),
                ft = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, m.Q, c.ot] })),
                        n
                    );
                })();
            var St = o(8625),
                He = o(9129),
                lt = o(2514),
                ke = (() => {
                    return (
                        ((n = ke || (ke = {})).local = "127.0.0.1:9000"),
                        (n.Staging = "staging.luno.com"),
                        (n.Production = "www.luno.com"),
                        ke
                    );
                    var n;
                })();
            function Nt(n) {
                return n.appVersion;
            }
            var Ce = (() => {
                    return (
                        ((n = Ce || (Ce = {})).None = "noop"),
                        (n.Bugsnag = "bugsnag"),
                        Ce
                    );
                    var n;
                })(),
                et = o(9069);
            let tt = (() => {
                    class n extends et.k {
                        constructor() {
                            super(...arguments),
                                (this.defaultSection = "error");
                        }
                        log(t) {
                            const {
                                message: i,
                                section: C = this.defaultSection,
                                metadata: A,
                            } = t;
                            A
                                ? ye().notify(i, (U) => U.addMetadata(C, A))
                                : ye().notify(i);
                        }
                    }
                    return (
                        (n.ɵfac = (function () {
                            let r;
                            return function (i) {
                                return (r || (r = e.n5z(n)))(i || n);
                            };
                        })()),
                        (n.ɵprov = e.Yz7({
                            token: n,
                            factory: n.ɵfac,
                            providedIn: "root",
                        })),
                        n
                    );
                })(),
                vt = (() => {
                    class n extends et.k {
                        log(t) {}
                    }
                    return (
                        (n.ɵfac = (function () {
                            let r;
                            return function (i) {
                                return (r || (r = e.n5z(n)))(i || n);
                            };
                        })()),
                        (n.ɵprov = e.Yz7({
                            token: n,
                            factory: n.ɵfac,
                            providedIn: "root",
                        })),
                        n
                    );
                })();
            var Ke;
            !(function (n) {
                function r(C) {
                    return (0, g.NF)(C) && !(0, e.X6Q)();
                }
                (n.createErrorHandler = function t(C, A) {
                    return {
                        provide: e.qLn,
                        useFactory: (U) =>
                            r(U) || A === Ce.Bugsnag
                                ? new lt.Wb(
                                      (function Xe(n) {
                                          const r = [0, 401],
                                              t = [
                                                  "ChunkLoadError",
                                                  'The animation trigger "transform" has failed',
                                                  "Function statements require a function name",
                                                  "Browser HTML5 geolocation access denied",
                                                  "Browser HTML5 geolocation timed out",
                                              ],
                                              i = ["ChunkLoadError"];
                                          return ye().start({
                                              appVersion: Nt(n),
                                              apiKey: n.bugsnagApiKey,
                                              releaseStage:
                                                  window.location.host ===
                                                  ke.Production
                                                      ? "production"
                                                      : window.location.host.includes(
                                                            ke.Staging
                                                        )
                                                      ? "staging"
                                                      : "dev",
                                              onError: function (C) {
                                                  return !(
                                                      r.includes(
                                                          C?.originalError
                                                              ?.status
                                                      ) ||
                                                      C?.errors.some(
                                                          (A) =>
                                                              t.some((U) =>
                                                                  A.errorMessage.includes(
                                                                      U
                                                                  )
                                                              ) ||
                                                              i.some((U) =>
                                                                  A.errorClass.includes(
                                                                      U
                                                                  )
                                                              )
                                                      )
                                                  );
                                              },
                                          });
                                      })(C)
                                  )
                                : new e.qLn(),
                        deps: [e.Lbi],
                    };
                }),
                    (n.createErrorLoggerService = function i(C) {
                        return {
                            provide: et.k,
                            useFactory: (A) =>
                                r(A) || C === Ce.Bugsnag ? new tt() : new vt(),
                            deps: [e.Lbi],
                        };
                    });
            })(Ke || (Ke = {}));
            let yt = (() => {
                class n {
                    constructor(t) {
                        if (t)
                            throw new Error(
                                "Module is already loaded. Import in AppModule only"
                            );
                    }
                    static forRoot(t) {
                        return {
                            ngModule: n,
                            providers: [
                                Ke.createErrorHandler(
                                    t.environment,
                                    t?.localDebugMode
                                ),
                                Ke.createErrorLoggerService(t?.localDebugMode),
                            ],
                        };
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.LFG(n, 12));
                    }),
                    (n.ɵmod = e.oAB({ type: n })),
                    (n.ɵinj = e.cJS({ imports: [g.ez] })),
                    n
                );
            })();
            var nt = o(8045),
                Pt = o(6587),
                xt = o(7418);
            const xe_authorisationError_text = "Authorisation required",
                xe_notFoundError_text =
                    "Sorry, we couldn't find what you're looking for.",
                xe_tooManyRequestsError_text =
                    "Too many requests. Please try again later.",
                xe_regionError_text =
                    "Sorry, we cannot provide service in your region.",
                xe_serverError_text = "An error occurred. Please try again.",
                xe_generalError_text = "An error occurred. Please try again.",
                xe_defaultError_text = "An error occurred. Please try again.";
            let Rt = (() => {
                class n {
                    constructor(t, i) {
                        (this.i18n = t), (this.errorHandlerService = i);
                    }
                    intercept(t, i) {
                        return i.handle(t).pipe(
                            (0, xt.K)((C, A) => {
                                const U = {};
                                if (((U.status = C.status), 401 === C.status)) {
                                    const $ =
                                            document.location.pathname +
                                            document.location.search,
                                        te = new E.LE().set("redirect", $);
                                    document.location.href =
                                        "/login?" + te.toString();
                                    const le = this.i18n.translateText(
                                        xe_authorisationError_text
                                    );
                                    U.message = le;
                                } else if (404 === C.status) {
                                    const $ = this.i18n.translateText(
                                        xe_notFoundError_text
                                    );
                                    U.message = `${$} (${C.status})`;
                                } else if (429 === C.status) {
                                    const $ = this.i18n.translateText(
                                        xe_tooManyRequestsError_text
                                    );
                                    U.message = `${$} (${C.status})`;
                                } else if (451 === C.status) {
                                    document.location.href =
                                        "/region_unavailable";
                                    const $ = this.i18n.translateText(
                                        xe_regionError_text
                                    );
                                    U.message = `${$} (${C.status})`;
                                } else if (500 === C.status) {
                                    const $ = this.i18n.translateText(
                                            xe_serverError_text
                                        ),
                                        te = C.headers.get("X-Luno-Trace-ID");
                                    U.message = te ? `${$} (${te})` : `${$}`;
                                } else
                                    C.error && C.error.error_code
                                        ? ((U.message =
                                              C.error?.error ||
                                              this.i18n.translateText(
                                                  xe_generalError_text
                                              )),
                                          (U.error = C.error))
                                        : (U.message = this.i18n.translateText(
                                              xe_defaultError_text
                                          ));
                                if (this.errorHandlerService.useBugsnag()) {
                                    const $ = {
                                            url: t.url,
                                            errorMessage: C.message,
                                            errorError: C.error,
                                            errorName: C.name,
                                            errorStatus: C.status,
                                        },
                                        te = (le) => {
                                            le.addMetadata(
                                                "last response error",
                                                $
                                            );
                                        };
                                    ye().addOnError(te);
                                }
                                return (0, Pt._)(U);
                            })
                        );
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.LFG(Z.K), e.LFG(Ye.q));
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            var Ve = o(8742),
                f = o(5756),
                F = o(7201);
            let S = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [O.h, g.ez, R.si, ne.K] })),
                        n
                    );
                })(),
                k = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez] })),
                        n
                    );
                })();
            var X = o(874);
            let ee = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, L.Ps, X.h] })),
                        n
                    );
                })(),
                cn = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, ee, Z.W] })),
                        n
                    );
                })(),
                ln = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({
                            imports: [g.ez, L.Ps, X.h, _.QW, Z.W],
                        })),
                        n
                    );
                })(),
                un = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, Z.W, w.Bz, R.si] })),
                        n
                    );
                })(),
                _n = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, L.Ps] })),
                        n
                    );
                })(),
                pn = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, _.QW] })),
                        n
                    );
                })(),
                mn = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, pn, X.h, Z.W] })),
                        n
                    );
                })(),
                dn = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, O.h] })),
                        n
                    );
                })(),
                Vt = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, Z.W] })),
                        n
                    );
                })(),
                gn = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez] })),
                        n
                    );
                })(),
                Zt = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez] })),
                        n
                    );
                })(),
                hn = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez] })),
                        n
                    );
                })(),
                Cn = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, Vt, hn, Zt, gn] })),
                        n
                    );
                })(),
                ot = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, Z.W] })),
                        n
                    );
                })(),
                Tn = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, X.h, Z.W] })),
                        n
                    );
                })();
            var Te = (() => {
                return (
                    ((n = Te || (Te = {})).blue = "blue"),
                    (n.coral = "coral"),
                    (n.purple = "purple"),
                    Te
                );
                var n;
            })();
            let it = (() => {
                    class n {
                        constructor() {
                            this.Themes = {
                                blue: Te.blue,
                                coral: Te.coral,
                                purple: Te.purple,
                            };
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({ imports: [g.ez, ot, Tn, Z.W] })),
                        n
                    );
                })(),
                En = (() => {
                    class n {}
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵmod = e.oAB({ type: n })),
                        (n.ɵinj = e.cJS({
                            imports: [
                                w.Bz,
                                F.f,
                                S,
                                k,
                                g.ez,
                                _n,
                                dn,
                                Cn,
                                Vt,
                                cn,
                                it,
                                ln,
                                mn,
                                un,
                                Z.W,
                            ],
                        })),
                        n
                    );
                })();
            var Lt = o(5912),
                _e = o(928),
                at = o(9287);
            let In = (() => {
                class n {
                    constructor(t, i) {
                        (this.environmentService = t), (this.router = i);
                    }
                    canLoad(t) {
                        return !this.environmentService.isProd();
                    }
                    canActivate(t, i) {
                        const C = { ...t.data };
                        return this.environmentService.isProd() &&
                            C.fallbackRoute
                            ? this.router.createUrlTree([C.fallbackRoute], {
                                  queryParamsHandling: "merge",
                              })
                            : !this.environmentService.isProd();
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.LFG(at.L), e.LFG(w.F0));
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            var Dt = o(2218),
                Mt = o(5921),
                Jt = o(423),
                Ut = o(9151),
                rt = o(3910),
                d = o(3275),
                pe = o(6846);
            const bt = [
                {
                    name: "Afghanistan",
                    alpha2: "AF",
                    alpha3: "AFG",
                    numeric: "004",
                },
                {
                    name: "Albania",
                    alpha2: "AL",
                    alpha3: "ALB",
                    numeric: "008",
                },
                {
                    name: "Algeria",
                    alpha2: "DZ",
                    alpha3: "DZA",
                    numeric: "012",
                },
                {
                    name: "American Samoa",
                    alpha2: "AS",
                    alpha3: "ASM",
                    numeric: "016",
                },
                {
                    name: "Andorra",
                    alpha2: "AD",
                    alpha3: "AND",
                    numeric: "020",
                },
                { name: "Angola", alpha2: "AO", alpha3: "AGO", numeric: "024" },
                {
                    name: "Anguilla",
                    alpha2: "AI",
                    alpha3: "AIA",
                    numeric: "660",
                },
                {
                    name: "Antarctica",
                    alpha2: "AQ",
                    alpha3: "ATA",
                    numeric: "010",
                },
                {
                    name: "Antigua and Barbuda",
                    alpha2: "AG",
                    alpha3: "ATG",
                    numeric: "028",
                },
                {
                    name: "Argentina",
                    alpha2: "AR",
                    alpha3: "ARG",
                    numeric: "032",
                },
                {
                    name: "Armenia",
                    alpha2: "AM",
                    alpha3: "ARM",
                    numeric: "051",
                },
                { name: "Aruba", alpha2: "AW", alpha3: "ABW", numeric: "533" },
                {
                    name: "Australia",
                    alpha2: "AU",
                    alpha3: "AUS",
                    numeric: "036",
                },
                {
                    name: "Austria",
                    alpha2: "AT",
                    alpha3: "AUT",
                    numeric: "040",
                },
                {
                    name: "Azerbaijan",
                    alpha2: "AZ",
                    alpha3: "AZE",
                    numeric: "031",
                },
                {
                    name: "Bahamas",
                    alpha2: "BS",
                    alpha3: "BHS",
                    numeric: "044",
                },
                {
                    name: "Bahrain",
                    alpha2: "BH",
                    alpha3: "BHR",
                    numeric: "048",
                },
                {
                    name: "Bangladesh",
                    alpha2: "BD",
                    alpha3: "BGD",
                    numeric: "050",
                },
                {
                    name: "Barbados",
                    alpha2: "BB",
                    alpha3: "BRB",
                    numeric: "052",
                },
                {
                    name: "Belarus",
                    alpha2: "BY",
                    alpha3: "BLR",
                    numeric: "112",
                },
                {
                    name: "Belgium",
                    alpha2: "BE",
                    alpha3: "BEL",
                    numeric: "056",
                },
                { name: "Belize", alpha2: "BZ", alpha3: "BLZ", numeric: "084" },
                { name: "Benin", alpha2: "BJ", alpha3: "BEN", numeric: "204" },
                {
                    name: "Bermuda",
                    alpha2: "BM",
                    alpha3: "BMU",
                    numeric: "060",
                },
                { name: "Bhutan", alpha2: "BT", alpha3: "BTN", numeric: "064" },
                {
                    name: "Bolivia",
                    alpha2: "BO",
                    alpha3: "BOL",
                    numeric: "068",
                },
                {
                    name: "Bonaire, Sint Eustatius and Saba",
                    alpha2: "BQ",
                    alpha3: "BES",
                    numeric: "535",
                },
                {
                    name: "Bosnia and Herzegovina",
                    alpha2: "BA",
                    alpha3: "BIH",
                    numeric: "070",
                },
                {
                    name: "Botswana",
                    alpha2: "BW",
                    alpha3: "BWA",
                    numeric: "072",
                },
                {
                    name: "Bouvet Island",
                    alpha2: "BV",
                    alpha3: "BVT",
                    numeric: "074",
                },
                { name: "Brazil", alpha2: "BR", alpha3: "BRA", numeric: "076" },
                {
                    name: "British Indian Ocean Territory",
                    alpha2: "IO",
                    alpha3: "IOT",
                    numeric: "086",
                },
                {
                    name: "Brunei Darussalam",
                    alpha2: "BN",
                    alpha3: "BRN",
                    numeric: "096",
                },
                {
                    name: "Bulgaria",
                    alpha2: "BG",
                    alpha3: "BGR",
                    numeric: "100",
                },
                {
                    name: "Burkina Faso",
                    alpha2: "BF",
                    alpha3: "BFA",
                    numeric: "854",
                },
                {
                    name: "Burundi",
                    alpha2: "BI",
                    alpha3: "BDI",
                    numeric: "108",
                },
                {
                    name: "Cabo Verde",
                    alpha2: "CV",
                    alpha3: "CPV",
                    numeric: "132",
                },
                {
                    name: "Cambodia",
                    alpha2: "KH",
                    alpha3: "KHM",
                    numeric: "116",
                },
                {
                    name: "Cameroon",
                    alpha2: "CM",
                    alpha3: "CMR",
                    numeric: "120",
                },
                { name: "Canada", alpha2: "CA", alpha3: "CAN", numeric: "124" },
                {
                    name: "Cayman Islands",
                    alpha2: "KY",
                    alpha3: "CYM",
                    numeric: "136",
                },
                {
                    name: "Central African Republic",
                    alpha2: "CF",
                    alpha3: "CAF",
                    numeric: "140",
                },
                { name: "Chad", alpha2: "TD", alpha3: "TCD", numeric: "148" },
                { name: "Chile", alpha2: "CL", alpha3: "CHL", numeric: "152" },
                { name: "China", alpha2: "CN", alpha3: "CHN", numeric: "156" },
                {
                    name: "Christmas Island",
                    alpha2: "CX",
                    alpha3: "CXR",
                    numeric: "162",
                },
                {
                    name: "Cocos Islands",
                    alpha2: "CC",
                    alpha3: "CCK",
                    numeric: "166",
                },
                {
                    name: "Colombia",
                    alpha2: "CO",
                    alpha3: "COL",
                    numeric: "170",
                },
                {
                    name: "Comoros",
                    alpha2: "KM",
                    alpha3: "COM",
                    numeric: "174",
                },
                { name: "Congo", alpha2: "CD", alpha3: "COD", numeric: "180" },
                { name: "Congo", alpha2: "CG", alpha3: "COG", numeric: "178" },
                {
                    name: "Cook Islands",
                    alpha2: "CK",
                    alpha3: "COK",
                    numeric: "184",
                },
                {
                    name: "Costa Rica",
                    alpha2: "CR",
                    alpha3: "CRI",
                    numeric: "188",
                },
                {
                    name: "Croatia",
                    alpha2: "HR",
                    alpha3: "HRV",
                    numeric: "191",
                },
                { name: "Cuba", alpha2: "CU", alpha3: "CUB", numeric: "192" },
                {
                    name: "Cura\xc3\xa7ao",
                    alpha2: "CW",
                    alpha3: "CUW",
                    numeric: "531",
                },
                { name: "Cyprus", alpha2: "CY", alpha3: "CYP", numeric: "196" },
                {
                    name: "Czechia",
                    alpha2: "CZ",
                    alpha3: "CZE",
                    numeric: "203",
                },
                {
                    name: "C\xc3\xb4te d'Ivoire",
                    alpha2: "CI",
                    alpha3: "CIV",
                    numeric: "384",
                },
                {
                    name: "Denmark",
                    alpha2: "DK",
                    alpha3: "DNK",
                    numeric: "208",
                },
                {
                    name: "Djibouti",
                    alpha2: "DJ",
                    alpha3: "DJI",
                    numeric: "262",
                },
                {
                    name: "Dominica",
                    alpha2: "DM",
                    alpha3: "DMA",
                    numeric: "212",
                },
                {
                    name: "Dominican Republic",
                    alpha2: "DO",
                    alpha3: "DOM",
                    numeric: "214",
                },
                {
                    name: "Ecuador",
                    alpha2: "EC",
                    alpha3: "ECU",
                    numeric: "218",
                },
                { name: "Egypt", alpha2: "EG", alpha3: "EGY", numeric: "818" },
                {
                    name: "El Salvador",
                    alpha2: "SV",
                    alpha3: "SLV",
                    numeric: "222",
                },
                {
                    name: "Equatorial Guinea",
                    alpha2: "GQ",
                    alpha3: "GNQ",
                    numeric: "226",
                },
                {
                    name: "Eritrea",
                    alpha2: "ER",
                    alpha3: "ERI",
                    numeric: "232",
                },
                {
                    name: "Estonia",
                    alpha2: "EE",
                    alpha3: "EST",
                    numeric: "233",
                },
                {
                    name: "Eswatini",
                    alpha2: "SZ",
                    alpha3: "SWZ",
                    numeric: "748",
                },
                {
                    name: "Ethiopia",
                    alpha2: "ET",
                    alpha3: "ETH",
                    numeric: "231",
                },
                {
                    name: "Falkland Islands [Malvinas]",
                    alpha2: "FK",
                    alpha3: "FLK",
                    numeric: "238",
                },
                {
                    name: "Faroe Islands",
                    alpha2: "FO",
                    alpha3: "FRO",
                    numeric: "234",
                },
                { name: "Fiji", alpha2: "FJ", alpha3: "FJI", numeric: "242" },
                {
                    name: "Finland",
                    alpha2: "FI",
                    alpha3: "FIN",
                    numeric: "246",
                },
                { name: "France", alpha2: "FR", alpha3: "FRA", numeric: "250" },
                {
                    name: "French Guiana",
                    alpha2: "GF",
                    alpha3: "GUF",
                    numeric: "254",
                },
                {
                    name: "French Polynesia",
                    alpha2: "PF",
                    alpha3: "PYF",
                    numeric: "258",
                },
                {
                    name: "French Southern Territories",
                    alpha2: "TF",
                    alpha3: "ATF",
                    numeric: "260",
                },
                { name: "Gabon", alpha2: "GA", alpha3: "GAB", numeric: "266" },
                { name: "Gambia", alpha2: "GM", alpha3: "GMB", numeric: "270" },
                {
                    name: "Georgia",
                    alpha2: "GE",
                    alpha3: "GEO",
                    numeric: "268",
                },
                {
                    name: "Germany",
                    alpha2: "DE",
                    alpha3: "DEU",
                    numeric: "276",
                },
                { name: "Ghana", alpha2: "GH", alpha3: "GHA", numeric: "288" },
                {
                    name: "Gibraltar",
                    alpha2: "GI",
                    alpha3: "GIB",
                    numeric: "292",
                },
                { name: "Greece", alpha2: "GR", alpha3: "GRC", numeric: "300" },
                {
                    name: "Greenland",
                    alpha2: "GL",
                    alpha3: "GRL",
                    numeric: "304",
                },
                {
                    name: "Grenada",
                    alpha2: "GD",
                    alpha3: "GRD",
                    numeric: "308",
                },
                {
                    name: "Guadeloupe",
                    alpha2: "GP",
                    alpha3: "GLP",
                    numeric: "312",
                },
                { name: "Guam", alpha2: "GU", alpha3: "GUM", numeric: "316" },
                {
                    name: "Guatemala",
                    alpha2: "GT",
                    alpha3: "GTM",
                    numeric: "320",
                },
                {
                    name: "Guernsey",
                    alpha2: "GG",
                    alpha3: "GGY",
                    numeric: "831",
                },
                { name: "Guinea", alpha2: "GN", alpha3: "GIN", numeric: "324" },
                {
                    name: "Guinea-Bissau",
                    alpha2: "GW",
                    alpha3: "GNB",
                    numeric: "624",
                },
                { name: "Guyana", alpha2: "GY", alpha3: "GUY", numeric: "328" },
                { name: "Haiti", alpha2: "HT", alpha3: "HTI", numeric: "332" },
                {
                    name: "Heard Island and McDonald Islands",
                    alpha2: "HM",
                    alpha3: "HMD",
                    numeric: "334",
                },
                {
                    name: "Holy See",
                    alpha2: "VA",
                    alpha3: "VAT",
                    numeric: "336",
                },
                {
                    name: "Honduras",
                    alpha2: "HN",
                    alpha3: "HND",
                    numeric: "340",
                },
                {
                    name: "Hong Kong",
                    alpha2: "HK",
                    alpha3: "HKG",
                    numeric: "344",
                },
                {
                    name: "Hungary",
                    alpha2: "HU",
                    alpha3: "HUN",
                    numeric: "348",
                },
                {
                    name: "Iceland",
                    alpha2: "IS",
                    alpha3: "ISL",
                    numeric: "352",
                },
                { name: "India", alpha2: "IN", alpha3: "IND", numeric: "356" },
                {
                    name: "Indonesia",
                    alpha2: "ID",
                    alpha3: "IDN",
                    numeric: "360",
                },
                { name: "Iran", alpha2: "IR", alpha3: "IRN", numeric: "364" },
                { name: "Iraq", alpha2: "IQ", alpha3: "IRQ", numeric: "368" },
                {
                    name: "Ireland",
                    alpha2: "IE",
                    alpha3: "IRL",
                    numeric: "372",
                },
                {
                    name: "Isle of Man",
                    alpha2: "IM",
                    alpha3: "IMN",
                    numeric: "833",
                },
                { name: "Israel", alpha2: "IL", alpha3: "ISR", numeric: "376" },
                { name: "Italy", alpha2: "IT", alpha3: "ITA", numeric: "380" },
                {
                    name: "Jamaica",
                    alpha2: "JM",
                    alpha3: "JAM",
                    numeric: "388",
                },
                { name: "Japan", alpha2: "JP", alpha3: "JPN", numeric: "392" },
                { name: "Jersey", alpha2: "JE", alpha3: "JEY", numeric: "832" },
                { name: "Jordan", alpha2: "JO", alpha3: "JOR", numeric: "400" },
                {
                    name: "Kazakhstan",
                    alpha2: "KZ",
                    alpha3: "KAZ",
                    numeric: "398",
                },
                { name: "Kenya", alpha2: "KE", alpha3: "KEN", numeric: "404" },
                {
                    name: "Kiribati",
                    alpha2: "KI",
                    alpha3: "KIR",
                    numeric: "296",
                },
                { name: "Korea", alpha2: "KP", alpha3: "PRK", numeric: "408" },
                { name: "Korea", alpha2: "KR", alpha3: "KOR", numeric: "410" },
                { name: "Kuwait", alpha2: "KW", alpha3: "KWT", numeric: "414" },
                {
                    name: "Kyrgyzstan",
                    alpha2: "KG",
                    alpha3: "KGZ",
                    numeric: "417",
                },
                {
                    name: "Lao People's Democratic Republic",
                    alpha2: "LA",
                    alpha3: "LAO",
                    numeric: "418",
                },
                { name: "Latvia", alpha2: "LV", alpha3: "LVA", numeric: "428" },
                {
                    name: "Lebanon",
                    alpha2: "LB",
                    alpha3: "LBN",
                    numeric: "422",
                },
                {
                    name: "Lesotho",
                    alpha2: "LS",
                    alpha3: "LSO",
                    numeric: "426",
                },
                {
                    name: "Liberia",
                    alpha2: "LR",
                    alpha3: "LBR",
                    numeric: "430",
                },
                { name: "Libya", alpha2: "LY", alpha3: "LBY", numeric: "434" },
                {
                    name: "Liechtenstein",
                    alpha2: "LI",
                    alpha3: "LIE",
                    numeric: "438",
                },
                {
                    name: "Lithuania",
                    alpha2: "LT",
                    alpha3: "LTU",
                    numeric: "440",
                },
                {
                    name: "Luxembourg",
                    alpha2: "LU",
                    alpha3: "LUX",
                    numeric: "442",
                },
                { name: "Macao", alpha2: "MO", alpha3: "MAC", numeric: "446" },
                {
                    name: "Madagascar",
                    alpha2: "MG",
                    alpha3: "MDG",
                    numeric: "450",
                },
                { name: "Malawi", alpha2: "MW", alpha3: "MWI", numeric: "454" },
                {
                    name: "Malaysia",
                    alpha2: "MY",
                    alpha3: "MYS",
                    numeric: "458",
                },
                {
                    name: "Maldives",
                    alpha2: "MV",
                    alpha3: "MDV",
                    numeric: "462",
                },
                { name: "Mali", alpha2: "ML", alpha3: "MLI", numeric: "466" },
                { name: "Malta", alpha2: "MT", alpha3: "MLT", numeric: "470" },
                {
                    name: "Marshall Islands",
                    alpha2: "MH",
                    alpha3: "MHL",
                    numeric: "584",
                },
                {
                    name: "Martinique",
                    alpha2: "MQ",
                    alpha3: "MTQ",
                    numeric: "474",
                },
                {
                    name: "Mauritania",
                    alpha2: "MR",
                    alpha3: "MRT",
                    numeric: "478",
                },
                {
                    name: "Mauritius",
                    alpha2: "MU",
                    alpha3: "MUS",
                    numeric: "480",
                },
                {
                    name: "Mayotte",
                    alpha2: "YT",
                    alpha3: "MYT",
                    numeric: "175",
                },
                { name: "Mexico", alpha2: "MX", alpha3: "MEX", numeric: "484" },
                {
                    name: "Micronesia",
                    alpha2: "FM",
                    alpha3: "FSM",
                    numeric: "583",
                },
                {
                    name: "Moldova",
                    alpha2: "MD",
                    alpha3: "MDA",
                    numeric: "498",
                },
                { name: "Monaco", alpha2: "MC", alpha3: "MCO", numeric: "492" },
                {
                    name: "Mongolia",
                    alpha2: "MN",
                    alpha3: "MNG",
                    numeric: "496",
                },
                {
                    name: "Montenegro",
                    alpha2: "ME",
                    alpha3: "MNE",
                    numeric: "499",
                },
                {
                    name: "Montserrat",
                    alpha2: "MS",
                    alpha3: "MSR",
                    numeric: "500",
                },
                {
                    name: "Morocco",
                    alpha2: "MA",
                    alpha3: "MAR",
                    numeric: "504",
                },
                {
                    name: "Mozambique",
                    alpha2: "MZ",
                    alpha3: "MOZ",
                    numeric: "508",
                },
                {
                    name: "Myanmar",
                    alpha2: "MM",
                    alpha3: "MMR",
                    numeric: "104",
                },
                {
                    name: "Namibia",
                    alpha2: "NA",
                    alpha3: "NAM",
                    numeric: "516",
                },
                { name: "Nauru", alpha2: "NR", alpha3: "NRU", numeric: "520" },
                { name: "Nepal", alpha2: "NP", alpha3: "NPL", numeric: "524" },
                {
                    name: "Netherlands",
                    alpha2: "NL",
                    alpha3: "NLD",
                    numeric: "528",
                },
                {
                    name: "New Caledonia",
                    alpha2: "NC",
                    alpha3: "NCL",
                    numeric: "540",
                },
                {
                    name: "New Zealand",
                    alpha2: "NZ",
                    alpha3: "NZL",
                    numeric: "554",
                },
                {
                    name: "Nicaragua",
                    alpha2: "NI",
                    alpha3: "NIC",
                    numeric: "558",
                },
                { name: "Niger", alpha2: "NE", alpha3: "NER", numeric: "562" },
                {
                    name: "Nigeria",
                    alpha2: "NG",
                    alpha3: "NGA",
                    numeric: "566",
                },
                { name: "Niue", alpha2: "NU", alpha3: "NIU", numeric: "570" },
                {
                    name: "Norfolk Island",
                    alpha2: "NF",
                    alpha3: "NFK",
                    numeric: "574",
                },
                {
                    name: "North Macedonia",
                    alpha2: "MK",
                    alpha3: "MKD",
                    numeric: "807",
                },
                {
                    name: "Northern Mariana Islands",
                    alpha2: "MP",
                    alpha3: "MNP",
                    numeric: "580",
                },
                { name: "Norway", alpha2: "NO", alpha3: "NOR", numeric: "578" },
                { name: "Oman", alpha2: "OM", alpha3: "OMN", numeric: "512" },
                {
                    name: "Pakistan",
                    alpha2: "PK",
                    alpha3: "PAK",
                    numeric: "586",
                },
                { name: "Palau", alpha2: "PW", alpha3: "PLW", numeric: "585" },
                {
                    name: "Palestine, State of",
                    alpha2: "PS",
                    alpha3: "PSE",
                    numeric: "275",
                },
                { name: "Panama", alpha2: "PA", alpha3: "PAN", numeric: "591" },
                {
                    name: "Papua New Guinea",
                    alpha2: "PG",
                    alpha3: "PNG",
                    numeric: "598",
                },
                {
                    name: "Paraguay",
                    alpha2: "PY",
                    alpha3: "PRY",
                    numeric: "600",
                },
                { name: "Peru", alpha2: "PE", alpha3: "PER", numeric: "604" },
                {
                    name: "Philippines",
                    alpha2: "PH",
                    alpha3: "PHL",
                    numeric: "608",
                },
                {
                    name: "Pitcairn",
                    alpha2: "PN",
                    alpha3: "PCN",
                    numeric: "612",
                },
                { name: "Poland", alpha2: "PL", alpha3: "POL", numeric: "616" },
                {
                    name: "Portugal",
                    alpha2: "PT",
                    alpha3: "PRT",
                    numeric: "620",
                },
                {
                    name: "Puerto Rico",
                    alpha2: "PR",
                    alpha3: "PRI",
                    numeric: "630",
                },
                { name: "Qatar", alpha2: "QA", alpha3: "QAT", numeric: "634" },
                {
                    name: "Romania",
                    alpha2: "RO",
                    alpha3: "ROU",
                    numeric: "642",
                },
                {
                    name: "Russian Federation",
                    alpha2: "RU",
                    alpha3: "RUS",
                    numeric: "643",
                },
                { name: "Rwanda", alpha2: "RW", alpha3: "RWA", numeric: "646" },
                {
                    name: "R\xc3\xa9union",
                    alpha2: "RE",
                    alpha3: "REU",
                    numeric: "638",
                },
                {
                    name: "Saint Barth\xc3\xa9lemy",
                    alpha2: "BL",
                    alpha3: "BLM",
                    numeric: "652",
                },
                {
                    name: "Saint Helena, Ascension and Tristan da Cunha",
                    alpha2: "SH",
                    alpha3: "SHN",
                    numeric: "654",
                },
                {
                    name: "Saint Kitts and Nevis",
                    alpha2: "KN",
                    alpha3: "KNA",
                    numeric: "659",
                },
                {
                    name: "Saint Lucia",
                    alpha2: "LC",
                    alpha3: "LCA",
                    numeric: "662",
                },
                {
                    name: "Saint Martin",
                    alpha2: "MF",
                    alpha3: "MAF",
                    numeric: "663",
                },
                {
                    name: "Saint Pierre and Miquelon",
                    alpha2: "PM",
                    alpha3: "SPM",
                    numeric: "666",
                },
                {
                    name: "Saint Vincent and the Grenadines",
                    alpha2: "VC",
                    alpha3: "VCT",
                    numeric: "670",
                },
                { name: "Samoa", alpha2: "WS", alpha3: "WSM", numeric: "882" },
                {
                    name: "San Marino",
                    alpha2: "SM",
                    alpha3: "SMR",
                    numeric: "674",
                },
                {
                    name: "Sao Tome and Principe",
                    alpha2: "ST",
                    alpha3: "STP",
                    numeric: "678",
                },
                {
                    name: "Saudi Arabia",
                    alpha2: "SA",
                    alpha3: "SAU",
                    numeric: "682",
                },
                {
                    name: "Senegal",
                    alpha2: "SN",
                    alpha3: "SEN",
                    numeric: "686",
                },
                { name: "Serbia", alpha2: "RS", alpha3: "SRB", numeric: "688" },
                {
                    name: "Seychelles",
                    alpha2: "SC",
                    alpha3: "SYC",
                    numeric: "690",
                },
                {
                    name: "Sierra Leone",
                    alpha2: "SL",
                    alpha3: "SLE",
                    numeric: "694",
                },
                {
                    name: "Singapore",
                    alpha2: "SG",
                    alpha3: "SGP",
                    numeric: "702",
                },
                {
                    name: "Sint Maarten",
                    alpha2: "SX",
                    alpha3: "SXM",
                    numeric: "534",
                },
                {
                    name: "Slovakia",
                    alpha2: "SK",
                    alpha3: "SVK",
                    numeric: "703",
                },
                {
                    name: "Slovenia",
                    alpha2: "SI",
                    alpha3: "SVN",
                    numeric: "705",
                },
                {
                    name: "Solomon Islands",
                    alpha2: "SB",
                    alpha3: "SLB",
                    numeric: "090",
                },
                {
                    name: "Somalia",
                    alpha2: "SO",
                    alpha3: "SOM",
                    numeric: "706",
                },
                {
                    name: "South Africa",
                    alpha2: "ZA",
                    alpha3: "ZAF",
                    numeric: "710",
                },
                {
                    name: "South Georgia and the South Sandwich Islands",
                    alpha2: "GS",
                    alpha3: "SGS",
                    numeric: "239",
                },
                {
                    name: "South Sudan",
                    alpha2: "SS",
                    alpha3: "SSD",
                    numeric: "728",
                },
                { name: "Spain", alpha2: "ES", alpha3: "ESP", numeric: "724" },
                {
                    name: "Sri Lanka",
                    alpha2: "LK",
                    alpha3: "LKA",
                    numeric: "144",
                },
                { name: "Sudan", alpha2: "SD", alpha3: "SDN", numeric: "729" },
                {
                    name: "Suriname",
                    alpha2: "SR",
                    alpha3: "SUR",
                    numeric: "740",
                },
                {
                    name: "Svalbard and Jan Mayen",
                    alpha2: "SJ",
                    alpha3: "SJM",
                    numeric: "744",
                },
                { name: "Sweden", alpha2: "SE", alpha3: "SWE", numeric: "752" },
                {
                    name: "Switzerland",
                    alpha2: "CH",
                    alpha3: "CHE",
                    numeric: "756",
                },
                {
                    name: "Syrian Arab Republic",
                    alpha2: "SY",
                    alpha3: "SYR",
                    numeric: "760",
                },
                { name: "Taiwan", alpha2: "TW", alpha3: "TWN", numeric: "158" },
                {
                    name: "Tajikistan",
                    alpha2: "TJ",
                    alpha3: "TJK",
                    numeric: "762",
                },
                {
                    name: "Tanzania, the United Republic of",
                    alpha2: "TZ",
                    alpha3: "TZA",
                    numeric: "834",
                },
                {
                    name: "Thailand",
                    alpha2: "TH",
                    alpha3: "THA",
                    numeric: "764",
                },
                {
                    name: "Timor-Leste",
                    alpha2: "TL",
                    alpha3: "TLS",
                    numeric: "626",
                },
                { name: "Togo", alpha2: "TG", alpha3: "TGO", numeric: "768" },
                {
                    name: "Tokelau",
                    alpha2: "TK",
                    alpha3: "TKL",
                    numeric: "772",
                },
                { name: "Tonga", alpha2: "TO", alpha3: "TON", numeric: "776" },
                {
                    name: "Trinidad and Tobago",
                    alpha2: "TT",
                    alpha3: "TTO",
                    numeric: "780",
                },
                {
                    name: "Tunisia",
                    alpha2: "TN",
                    alpha3: "TUN",
                    numeric: "788",
                },
                { name: "Turkey", alpha2: "TR", alpha3: "TUR", numeric: "792" },
                {
                    name: "Turkmenistan",
                    alpha2: "TM",
                    alpha3: "TKM",
                    numeric: "795",
                },
                {
                    name: "Turks and Caicos Islands",
                    alpha2: "TC",
                    alpha3: "TCA",
                    numeric: "796",
                },
                { name: "Tuvalu", alpha2: "TV", alpha3: "TUV", numeric: "798" },
                { name: "Uganda", alpha2: "UG", alpha3: "UGA", numeric: "800" },
                {
                    name: "Ukraine",
                    alpha2: "UA",
                    alpha3: "UKR",
                    numeric: "804",
                },
                {
                    name: "United Arab Emirates",
                    alpha2: "AE",
                    alpha3: "ARE",
                    numeric: "784",
                },
                {
                    name:
                        "United Kingdom of Great Britain and Northern Ireland",
                    alpha2: "GB",
                    alpha3: "GBR",
                    numeric: "826",
                },
                {
                    name: "United States Minor Outlying Islands",
                    alpha2: "UM",
                    alpha3: "UMI",
                    numeric: "581",
                },
                {
                    name: "United States of America",
                    alpha2: "US",
                    alpha3: "USA",
                    numeric: "840",
                },
                {
                    name: "Uruguay",
                    alpha2: "UY",
                    alpha3: "URY",
                    numeric: "858",
                },
                {
                    name: "Uzbekistan",
                    alpha2: "UZ",
                    alpha3: "UZB",
                    numeric: "860",
                },
                {
                    name: "Vanuatu",
                    alpha2: "VU",
                    alpha3: "VUT",
                    numeric: "548",
                },
                {
                    name: "Venezuela",
                    alpha2: "VE",
                    alpha3: "VEN",
                    numeric: "862",
                },
                {
                    name: "Viet Nam",
                    alpha2: "VN",
                    alpha3: "VNM",
                    numeric: "704",
                },
                {
                    name: "Virgin Islands",
                    alpha2: "VG",
                    alpha3: "VGB",
                    numeric: "092",
                },
                {
                    name: "Virgin Islands",
                    alpha2: "VI",
                    alpha3: "VIR",
                    numeric: "850",
                },
                {
                    name: "Wallis and Futuna",
                    alpha2: "WF",
                    alpha3: "WLF",
                    numeric: "876",
                },
                {
                    name: "Western Sahara*",
                    alpha2: "EH",
                    alpha3: "ESH",
                    numeric: "732",
                },
                { name: "Yemen", alpha2: "YE", alpha3: "YEM", numeric: "887" },
                { name: "Zambia", alpha2: "ZM", alpha3: "ZMB", numeric: "894" },
                {
                    name: "Zimbabwe",
                    alpha2: "ZW",
                    alpha3: "ZWE",
                    numeric: "716",
                },
                {
                    name: "Aland Islands",
                    alpha2: "AX",
                    alpha3: "ALA",
                    numeric: "248",
                },
            ];
            let $t = (() => {
                class n {
                    constructor() {}
                    convertIsoAlpha(t) {
                        if (2 === t?.length || 3 === t.length)
                            return 3 === t.length
                                ? this.getIsoCountryByAlpha3(t)?.alpha2
                                : this.getIsoCountryByAlpha2(t)?.alpha3;
                    }
                    convertIsoAlphaToNumeric(t) {
                        if (t)
                            return 3 === t.length
                                ? this.getIsoCountryByAlpha3(t)?.numeric
                                : this.getIsoCountryByAlpha2(t)?.numeric;
                    }
                    getIsoCountryByAlpha3(t) {
                        return bt.find((i) => i.alpha3 === t.toUpperCase());
                    }
                    getIsoCountryByAlpha2(t) {
                        return bt.find((i) => i.alpha2 === t.toUpperCase());
                    }
                    convertNumericToAlpha2(t) {
                        if (t) return this.getIsoCountryByNumeric(t)?.alpha2;
                    }
                    convertNumericToAlpha3(t) {
                        if (t) return this.getIsoCountryByNumeric(t)?.alpha3;
                    }
                    getIsoCountryByNumeric(t) {
                        return bt.find((i) => i.numeric === t);
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            var Ue = o(2564),
                oe = o(6105);
            const ut = {
                    [oe.S.en]: [
                        d.C.au,
                        d.C.gb,
                        d.C.my,
                        d.C.ng,
                        d.C.sg,
                        d.C.ug,
                        d.C.za,
                        d.C.zm,
                    ],
                    [oe.S.fr]: [d.C.fr],
                    [oe.S.id]: [],
                    [oe.S.enUS]: [],
                    [oe.S.msMY]: [],
                },
                wt = {
                    [d.C.au]: oe.S.en,
                    [d.C.gb]: oe.S.en,
                    [d.C.my]: oe.S.en,
                    [d.C.my]: oe.S.msMY,
                    [d.C.ng]: oe.S.en,
                    [d.C.sg]: oe.S.en,
                    [d.C.ug]: oe.S.en,
                    [d.C.za]: oe.S.en,
                    [d.C.zm]: oe.S.en,
                    [d.C.fr]: oe.S.fr,
                },
                Ft = {
                    [d.C.us]: oe.S.enUS,
                    [d.C.my]: oe.S.msMY,
                    [d.C.id]: oe.S.id,
                },
                Qt_dismissAction_text = "No Thanks",
                Qt_regionSwitch_text =
                    "We have a page more specific to your region. Would you like to see this?";
            var Ee = o(4505),
                _t = o(8147);
            let Bt = (() => {
                class n {
                    constructor(t) {
                        (this.cookiePreferencesService = t),
                            (this.config = new Ee.X(null)),
                            (this.visible = new Ee.X(!1)),
                            (this.action = new Ee.X(null)),
                            (this.cookiePreferencesShowing = !1),
                            (this.bannerStack = []),
                            this.cookiePreferencesService.showPreferences$.subscribe(
                                (i) => {
                                    (this.cookiePreferencesShowing = i),
                                        this.showCurrentBanner();
                                }
                            ),
                            this.action.subscribe((i) => {
                                this.onBannerActionClicked(i);
                            });
                    }
                    showBanner(t) {
                        this.bannerStack.filter((i) => i.text === t.text)
                            .length > 0 ||
                            (this.bannerStack.push(t),
                            1 === this.bannerStack.length &&
                                this.showCurrentBanner());
                    }
                    closeCurrentBanner() {
                        !this.bannerStack.length || this.showNextBanner();
                    }
                    showCurrentBanner() {
                        this.cookiePreferencesShowing ||
                            !this.bannerStack.length ||
                            (this.config.next(this.bannerStack[0]),
                            this.visible.next(!0));
                    }
                    onBannerActionClicked(t) {
                        (t && this.bannerStack[0]?.persistOnButtonClick) ||
                            this.showNextBanner();
                    }
                    showNextBanner() {
                        this.visible.next(!1),
                            this.bannerStack.shift(),
                            this.showCurrentBanner();
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.LFG(_t.L));
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            var jt = o(3278);
            let Sn = (() => {
                class n {
                    constructor(t, i, C, A, U, $, te, le, Le, st, sn) {
                        (this.bannerService = t),
                            (this.breakpointObserver = i),
                            (this.commonInfoService = C),
                            (this.featureFlagService = A),
                            (this.i18n = U),
                            (this.isoCountryService = $),
                            (this.location = te),
                            (this.regionService = le),
                            (this.router = Le),
                            (this.websiteInfoService = st),
                            (this.window = sn),
                            (this.dismissAction = {
                                name: this.i18n.translateText(
                                    Qt_dismissAction_text
                                ),
                                style: pe.gw3.SECONDARY,
                                type: pe.Ta6.REDIRECT,
                            }),
                            (this.redirectAction = {
                                name: "",
                                style: pe.gw3.PRIMARY,
                                type: pe.Ta6.REDIRECT,
                                url: "",
                            }),
                            (this.regionSwitchConfig = {
                                text: this.i18n.translateText(
                                    Qt_regionSwitch_text
                                ),
                                buttons: [{ action: this.dismissAction }],
                                customClass: "website-banner region-switch",
                            }),
                            (this.desktopMediaQuery = "(min-width: 960px)"),
                            this.setupBannerActionListeners();
                    }
                    setupBannerActionListeners() {
                        this.bannerService.action.subscribe((t) => {
                            t === this.redirectAction &&
                                this.regionService.setSwitch(
                                    this.redirectAction.url
                                );
                        }),
                            this.breakpointObserver
                                .observe(this.desktopMediaQuery)
                                .subscribe((t) => {
                                    this.bannerService.config.value ===
                                        this.regionSwitchConfig &&
                                        ((this.regionSwitchConfig = {
                                            ...this.regionSwitchConfig,
                                            reverseButtons: t.matches,
                                        }),
                                        this.bannerService.config.next(
                                            this.regionSwitchConfig
                                        ));
                                });
                    }
                    maybeShowRegionSwitchBanner() {
                        const t = this.commonInfoService.navInfo?.loc?.code?.toLowerCase(),
                            i = this.websiteInfoService.pathCountry,
                            C = this.websiteInfoService.pathLanguage;
                        if (!t) return;
                        const A = ((n) => {
                            if (n === d.C.my) return `/${wt[n]}`;
                            if (Ft[n] && 0 === ut[Ft[n]]?.length)
                                return `/${Ft[n]}`;
                            const r = wt[n];
                            return r ? `/${r}/${n}` : null;
                        })(t);
                        if (
                            `/${C}` === A ||
                            `/${C}/${i}` === A ||
                            !A ||
                            this.window?.location?.pathname?.includes(A)
                        )
                            return;
                        const U = this.getRegionSwitchConfig(t, A);
                        U &&
                            (this.bannerService.showBanner(U),
                            this.maybeRefreshPageOnLocaleChange());
                    }
                    maybeRefreshPageOnLocaleChange() {
                        const t = this.location.path();
                        this.router.events
                            .pipe(
                                (0, Ut.h)((i) => i instanceof w.m2),
                                (0, rt.q)(1)
                            )
                            .subscribe((i) => {
                                i.url.startsWith(t) ||
                                    this.window.location.reload();
                            });
                    }
                    getRegionSwitchConfig(t, i) {
                        return (
                            (this.redirectAction.url = i),
                            (this.redirectAction.name = this.getRegionSwitchRedirectCountryButtonName(
                                t
                            )),
                            (this.regionSwitchConfig.image = {
                                url: this.getRegionSwitchCountryIconUrl(t),
                                height: 32,
                                width: 32,
                                name: "Flag icon",
                            }),
                            (this.regionSwitchConfig.buttons = [
                                { action: this.dismissAction },
                                { action: this.redirectAction },
                            ]),
                            (this.regionSwitchConfig.reverseButtons = this.breakpointObserver.isMatched(
                                this.desktopMediaQuery
                            )),
                            this.regionSwitchConfig
                        );
                    }
                    getRegionSwitchCountryIconUrl(t) {
                        return `${
                            this.commonInfoService.staticAssetsUrl
                        }/icons/countries/${t.toUpperCase()}.png`;
                    }
                    getRegionSwitchRedirectCountryButtonName(t) {
                        switch (t) {
                            case d.C.gb:
                                return "United Kingdom";
                            case d.C.us:
                                return "United States";
                            default:
                                return (
                                    this.isoCountryService.getIsoCountryByAlpha2(
                                        t.toUpperCase()
                                    )?.name || t
                                );
                        }
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(
                            e.LFG(Bt),
                            e.LFG(jt.Yg),
                            e.LFG(ue.E),
                            e.LFG(nt.a),
                            e.LFG(Z.K),
                            e.LFG($t),
                            e.LFG(g.Ye),
                            e.LFG(Ue.o),
                            e.LFG(w.F0),
                            e.LFG(_e.x),
                            e.LFG(Pe.m)
                        );
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            var Nn = o(1670),
                Ze = o(2901),
                pt = o(5053),
                ge = o(6942),
                zt = o(7997);
            let An = (() => {
                class n {
                    constructor(t, i) {
                        (this.client = t),
                            (this.datePipe = i),
                            (this.defaultFields =
                                "slug,tags,id,title,date,description,excerpt,categories,featured_image,_links"),
                            (this.discoverUrl = "https://discover.luno.com"),
                            (this.baseUrl = `${this.discoverUrl}/wp-json/wp/v2/posts`);
                    }
                    retrievePostsByTag(t, i = 1, C = 10) {
                        const A = new E.LE()
                            .set("_embed", "author,wp:featuredmedia")
                            .set("_fields", this.defaultFields)
                            .set("tags", t)
                            .set("per_page", C)
                            .set("page", i);
                        return this.client
                            .get(this.baseUrl, { params: A })
                            .pipe(
                                (0, ge.U)((U) => (0, zt.i)(U) || []),
                                (0, ge.U)(
                                    (U) => (
                                        U.forEach(($) => {
                                            if (
                                                (($.discoverPostUrl = `${this.discoverUrl}/${$.slug}`),
                                                $.featuredImage)
                                            ) {
                                                const te =
                                                    $.embedded[
                                                        "wp:featuredmedia"
                                                    ][0];
                                                $.featuredImage.altText = te?.altText
                                                    ? te?.altText
                                                    : te?.caption?.rendered ||
                                                      "";
                                            }
                                        }),
                                        U
                                    )
                                )
                            );
                    }
                    mapPostsToCopyAndArticleCards(t) {
                        return t.pipe(
                            (0, ge.U)((i) =>
                                i.map((C) => ({
                                    body: C.excerpt,
                                    storyUrl: C.discoverPostUrl,
                                    imageUrl: C.featuredImage.url,
                                    imageAlt: C.featuredImage.altText,
                                }))
                            )
                        );
                    }
                    mapPostsToArticles(t, i) {
                        return t.pipe(
                            (0, ge.U)((C) =>
                                C.map((A) => ({
                                    body: A.title,
                                    imageUrl: A.featuredImage.url,
                                    imageAlt: A.featuredImage.altText,
                                    button: i,
                                    buttonUrl: A.discoverPostUrl,
                                    dateAndReadTime: this.datePipe.transform(
                                        A?.date,
                                        "MMM d, y"
                                    ),
                                }))
                            )
                        );
                    }
                    mapPostsToBlogTiles(t) {
                        return t.pipe(
                            (0, ge.U)((i) =>
                                i.map((C) => ({
                                    body: C.title,
                                    heading: C.tags[0].name,
                                    blogUrl: C.discoverPostUrl,
                                    authorAndDate: `By ${
                                        C?.embedded?.author[0]?.name
                                    } | ${this.datePipe.transform(
                                        C?.date,
                                        "MMM d, y"
                                    )}`,
                                }))
                            )
                        );
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.LFG(E.eN), e.LFG(g.uU));
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            function Gt() {
                return (Gt = (0, Nn.Z)(function* (n, r) {
                    let t;
                    switch (n) {
                        case d.B.enAU:
                            t = yield Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_home-v4_homepage-data_en-AU_ts"
                                ),
                            ])
                                .then(o.bind(o, 2885))
                                .then((i) => i.home);
                            break;
                        case d.B.idID:
                            t = yield Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_home-v4_homepage-data_id-ID_ts"
                                ),
                            ])
                                .then(o.bind(o, 5257))
                                .then((i) => i.home);
                            break;
                        case d.B.enSG:
                            t = yield Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_home-v4_homepage-data_en-SG_ts"
                                ),
                            ])
                                .then(o.bind(o, 4229))
                                .then((i) => i.home);
                            break;
                        case d.B.enMY:
                            t = yield Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_home-v4_homepage-data_en-MY_ts"
                                ),
                            ])
                                .then(o.bind(o, 7143))
                                .then((i) => i.home);
                            break;
                        case d.B.msMY:
                            t = yield Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_home-v4_homepage-data_ms-MY_ts"
                                ),
                            ])
                                .then(o.bind(o, 398))
                                .then((i) => i.home);
                            break;
                        case d.B.enNG:
                            t = yield Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_home-v4_homepage-data_en-NG_ts"
                                ),
                            ])
                                .then(o.bind(o, 9689))
                                .then((i) => i.home);
                            break;
                        case d.B.enUG:
                            t = yield Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_home-v4_homepage-data_en-UG_ts"
                                ),
                            ])
                                .then(o.bind(o, 9728))
                                .then((i) => i.home);
                            break;
                        case d.B.enZA:
                            t = yield Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_home-v4_homepage-data_en-ZA_ts"
                                ),
                            ])
                                .then(o.bind(o, 9367))
                                .then((i) => i.home);
                            break;
                        case d.B.frFR:
                            t = yield Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_home-v4_homepage-data_fr-FR_ts"
                                ),
                            ])
                                .then(o.bind(o, 9271))
                                .then((i) => i.home);
                            break;
                        case d.B.enUS:
                            t = yield Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_home-v4_homepage-data_en-US_ts"
                                ),
                            ])
                                .then(o.bind(o, 3597))
                                .then((i) => i.home);
                            break;
                        default:
                            t = yield Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_home-v4_homepage-data_en-GB_ts"
                                ),
                            ])
                                .then(o.bind(o, 6986))
                                .then((i) => i.home);
                    }
                    return t(r);
                })).apply(this, arguments);
            }
            let vn = (() => {
                class n {
                    constructor(t, i, C, A, U) {
                        (this.discoverService = t),
                            (this.localeService = i),
                            (this.router = C),
                            (this.seoService = A),
                            (this.websiteInfoService = U),
                            (this.locale = this.localeService.locale),
                            (this.projectBaseUrl = this.websiteInfoService.projectBaseUrl),
                            (this.educationContent = new Ee.X(void 0)),
                            (this.testimonialContent = new Ee.X(void 0)),
                            (this.educationContent$ = this.educationContent.asObservable()),
                            (this.testimonialContent$ = this.testimonialContent.asObservable()),
                            (this.data = new Ee.X(void 0)),
                            (this.data$ = this.data.asObservable());
                    }
                    setupHomepage(t) {
                        (function On(n, r) {
                            return Gt.apply(this, arguments);
                        })(t, this.projectBaseUrl).then((i) => {
                            i.education &&
                                this.getEducationContent(i.education.tagId)
                                    .pipe((0, rt.q)(1))
                                    .subscribe((C) =>
                                        this.educationContent.next(C)
                                    ),
                                i.testimonials &&
                                    (this.getTestimonialContent(
                                        i.testimonials.tagId
                                    )
                                        .pipe((0, rt.q)(1))
                                        .subscribe((C) =>
                                            this.testimonialContent.next(C)
                                        ),
                                    this.configureSeo(i.metaData)),
                                this.data.next(i);
                        });
                    }
                    getEducationContent(t) {
                        return this.discoverService.mapPostsToArticles(
                            this.discoverService.retrievePostsByTag(t),
                            "READ MORE"
                        );
                    }
                    getTestimonialContent(t) {
                        return this.discoverService.mapPostsToCopyAndArticleCards(
                            this.discoverService.retrievePostsByTag(t)
                        );
                    }
                    configureSeo(t) {
                        this.seoService
                            .setTitle(t.title)
                            .addRobots()
                            .addDescription(t.description),
                            this.seoService.setOpenGraph({
                                title: t.title,
                                description: t.description,
                                locale: this.locale,
                                url: this.router.url,
                                image: `${this.projectBaseUrl}/assets/common/favicon/generic_opengraph_EN.jpg`,
                            });
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(
                            e.LFG(An),
                            e.LFG(Ze.O),
                            e.LFG(w.F0),
                            e.LFG(pt.v),
                            e.LFG(_e.x)
                        );
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            var yn = o(634);
            let kt = (() => {
                class n {
                    constructor(t) {
                        this.observer = t;
                    }
                    get isLessOrEqualToSmall$() {
                        return this.observer
                            .observe(["(max-width:959.98px)"])
                            .pipe((0, ge.U)((t) => t.matches));
                    }
                    get isLessOrEqualToTablet$() {
                        return this.observer
                            .observe(["(max-width:767px)"])
                            .pipe((0, ge.U)((t) => t.matches));
                    }
                    get isDesktop$() {
                        return this.observer
                            .observe(["(max-width:1239px)"])
                            .pipe((0, ge.U)((t) => t.matches));
                    }
                    get isStandalone$() {
                        return this.observer
                            .observe(["(display-mode: standalone)"])
                            .pipe((0, ge.U)((t) => t.matches));
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.LFG(jt.Yg));
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            const Pn = {
                cryptoCurrency: {
                    text: "Cryptocurrency is for everyone",
                    description: "",
                },
                signUp: { text: "Sign up", description: "" },
                lunoHasMadeInvesting: {
                    text:
                        "Luno has made investing simple for millions around the world. Join the other 10 million users.",
                    description: "Hero title.",
                },
            };
            var Je = o(5599);
            const xn = ["luno-hero", ""];
            let Rn = (() => {
                class n {
                    constructor(t, i) {
                        (this.screenLayoutService = t),
                            (this.websiteInfoService = i),
                            (this.strings = Pn),
                            (this.projectBaseUrl = this.websiteInfoService.projectBaseUrl),
                            (this.backgroundImage = `url(${this.projectBaseUrl}/assets/v4/homepage/lines-hero.svg)`);
                    }
                    ngOnInit() {
                        (this.isLessOrEqualToTablet$ = this.screenLayoutService.isLessOrEqualToTablet$),
                            (this.isDesktop$ = this.screenLayoutService.isDesktop$);
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(kt), e.Y36(_e.x));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["header", "luno-hero", ""]],
                        inputs: { heroConfig: "heroConfig" },
                        attrs: xn,
                        decls: 10,
                        vars: 7,
                        consts: [
                            [1, "hero", "c24"],
                            [1, "c12", "hero-text"],
                            [1, "mat-display-4"],
                            [1, "mat-subheading-2"],
                            [1, "hero-form"],
                            ["themePalette", "accent", 3, "button"],
                            [1, "c12", "hero-image", "h100"],
                            [3, "src", "alt"],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.TgZ(0, "section", 0)(1, "div", 1)(
                                    2,
                                    "h1",
                                    2
                                ),
                                e._uU(3),
                                e.qZA(),
                                e.TgZ(4, "h2", 3),
                                e._uU(5),
                                e.qZA(),
                                e.TgZ(6, "div", 4),
                                e._UZ(7, "luno-button", 5),
                                e.qZA()(),
                                e.TgZ(8, "div", 6),
                                e._UZ(9, "img", 7),
                                e.qZA()()),
                                2 & t &&
                                    (e.Udp(
                                        "background-image",
                                        i.backgroundImage
                                    ),
                                    e.xp6(3),
                                    e.Oqu(
                                        null == i.heroConfig
                                            ? null
                                            : i.heroConfig.title
                                    ),
                                    e.xp6(2),
                                    e.Oqu(
                                        null == i.heroConfig
                                            ? null
                                            : i.heroConfig.subtitle
                                    ),
                                    e.xp6(2),
                                    e.Q6J(
                                        "button",
                                        null == i.heroConfig
                                            ? null
                                            : i.heroConfig.button
                                    ),
                                    e.xp6(2),
                                    e.Q6J(
                                        "src",
                                        null == i.heroConfig ||
                                            null == i.heroConfig.image
                                            ? null
                                            : i.heroConfig.image.url,
                                        e.LSH
                                    )(
                                        "alt",
                                        null == i.heroConfig ||
                                            null == i.heroConfig.image
                                            ? null
                                            : i.heroConfig.image.name
                                    ));
                        },
                        dependencies: [Je.r0],
                        styles: [
                            "section.hero[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;max-width:1240px;margin:auto;background-color:#d7ecff;border-radius:8px;background-size:contain;background-position-x:right;background-position-y:bottom;background-repeat:no-repeat;align-items:center}@media screen and (min-width: 768px){section.hero[_ngcontent-%COMP%]{flex-direction:row;align-items:flex-end}}section.hero[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0;box-sizing:border-box}section.hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:50px 20px 0;height:100%}@media screen and (min-width: 768px){section.hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]{padding:100px 50px;align-items:flex-start}}section.hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:500;letter-spacing:-.02em;margin-bottom:20px}section.hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], section.hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{max-width:320px}@media screen and (min-width: 768px){section.hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], section.hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{max-width:475px}}section.hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-form[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;width:100%}section.hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:30px;border:1px solid #001e88;border-radius:15px;box-shadow:inset 4px 4px 5px #0000001a;margin:10px 10px 10px 0;min-width:200px}section.hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-form[_ngcontent-%COMP%]   .hero-signup[_ngcontent-%COMP%]{display:flex;align-items:center;border:1px solid;background-color:#ff7c77;border-radius:22.5px;color:#fff;cursor:pointer;height:40px;justify-content:center;margin:10px;min-width:150px;padding:15px 30px;text-transform:uppercase;line-height:18px;font-size:15px;font-weight:700}section.hero[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]{height:100%;display:flex;align-self:flex-end}section.hero[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;width:100%;max-width:400px;border-radius:8px}@media screen and (min-width: 768px){section.hero[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:48vw}}section.hero[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;align-items:center;color:#001e88}section.hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#001e88}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            var Ln = o(5231),
                Xt = o(1950),
                We = o(5421);
            const Dn = ["luno-step-card", ""];
            function Ie(n, r) {
                if ((1 & n && e._UZ(0, "img", 15), 2 & n)) {
                    const t = e.oxw(3);
                    e.Q6J(
                        "src",
                        null == t.stepCardConfig ||
                            null == t.stepCardConfig.image
                            ? null
                            : t.stepCardConfig.image.url,
                        e.LSH
                    )(
                        "alt",
                        null == t.stepCardConfig ||
                            null == t.stepCardConfig.image
                            ? null
                            : t.stepCardConfig.image.name
                    );
                }
            }
            function fe(n, r) {
                if ((1 & n && e._UZ(0, "img", 15), 2 & n)) {
                    const t = e.oxw(3);
                    e.Q6J(
                        "src",
                        null == t.stepCardConfig ||
                            null == t.stepCardConfig.mobileImage
                            ? null
                            : t.stepCardConfig.mobileImage.url,
                        e.LSH
                    )(
                        "alt",
                        null == t.stepCardConfig ||
                            null == t.stepCardConfig.mobileImage
                            ? null
                            : t.stepCardConfig.mobileImage.name
                    );
                }
            }
            function dt(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "a", 13),
                        e.YNc(1, Ie, 1, 2, "img", 14),
                        e.YNc(2, fe, 1, 2, "img", 14),
                        e.qZA()),
                    2 & n)
                ) {
                    const t = e.oxw(2);
                    e.Q6J("href", t.redirectActionLink, e.LSH),
                        e.xp6(1),
                        e.Q6J("ngIf", t.isWeb || !t.stepCardConfig.mobileImage),
                        e.xp6(1),
                        e.Q6J("ngIf", !t.isWeb && t.stepCardConfig.mobileImage);
                }
            }
            function $e(n, r) {
                if ((1 & n && e._UZ(0, "img", 15), 2 & n)) {
                    const t = e.oxw(3);
                    e.Q6J(
                        "src",
                        null == t.stepCardConfig ||
                            null == t.stepCardConfig.iOSImage
                            ? null
                            : t.stepCardConfig.iOSImage.url,
                        e.LSH
                    )(
                        "alt",
                        null == t.stepCardConfig ||
                            null == t.stepCardConfig.iOSImage
                            ? null
                            : t.stepCardConfig.iOSImage.name
                    );
                }
            }
            function u(n, r) {
                if ((1 & n && e._UZ(0, "img", 15), 2 & n)) {
                    const t = e.oxw(3);
                    e.Q6J(
                        "src",
                        null == t.stepCardConfig ||
                            null == t.stepCardConfig.mobileImage
                            ? null
                            : t.stepCardConfig.mobileImage.url,
                        e.LSH
                    )(
                        "alt",
                        null == t.stepCardConfig ||
                            null == t.stepCardConfig.mobileImage
                            ? null
                            : t.stepCardConfig.mobileImage.name
                    );
                }
            }
            function h(n, r) {
                if ((1 & n && e._UZ(0, "img", 15), 2 & n)) {
                    const t = e.oxw(3);
                    e.Q6J(
                        "src",
                        null == t.stepCardConfig ||
                            null == t.stepCardConfig.image
                            ? null
                            : t.stepCardConfig.image.url,
                        e.LSH
                    )(
                        "alt",
                        null == t.stepCardConfig ||
                            null == t.stepCardConfig.image
                            ? null
                            : t.stepCardConfig.image.name
                    );
                }
            }
            function s(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "a", 13),
                        e.YNc(1, $e, 1, 2, "img", 14),
                        e.YNc(2, u, 1, 2, "img", 14),
                        e.YNc(3, h, 1, 2, "img", 14),
                        e.qZA()),
                    2 & n)
                ) {
                    const t = e.oxw(2);
                    e.Q6J(
                        "href",
                        null == t.stepCardConfig
                            ? null
                            : t.stepCardConfig.stepLink,
                        e.LSH
                    ),
                        e.xp6(1),
                        e.Q6J(
                            "ngIf",
                            t.stepCardConfig.iOSImage && t.useiOSImage
                        ),
                        e.xp6(1),
                        e.Q6J("ngIf", t.stepCardConfig.mobileImage && !t.isWeb),
                        e.xp6(1),
                        e.Q6J("ngIf", t.isWeb && !t.useiOSImage);
                }
            }
            function N(n, r) {
                if ((1 & n && e._UZ(0, "img", 15), 2 & n)) {
                    const t = e.oxw(2);
                    e.Q6J(
                        "src",
                        null == t.stepCardConfig ||
                            null == t.stepCardConfig.image
                            ? null
                            : t.stepCardConfig.image.url,
                        e.LSH
                    )(
                        "alt",
                        null == t.stepCardConfig ||
                            null == t.stepCardConfig.image
                            ? null
                            : t.stepCardConfig.image.name
                    );
                }
            }
            function D(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "div", 8),
                        e.GkF(1, 9),
                        e.YNc(2, dt, 3, 3, "ng-template", null, 10, e.W1O),
                        e.YNc(4, s, 4, 4, "ng-template", null, 11, e.W1O),
                        e.YNc(6, N, 1, 2, "ng-template", null, 12, e.W1O),
                        e.qZA()),
                    2 & n)
                ) {
                    const t = e.MAs(3),
                        i = e.MAs(5),
                        C = e.MAs(7),
                        A = e.oxw();
                    e.MGl(
                        "ngClass",
                        "step-",
                        null == A.stepCardConfig
                            ? null
                            : A.stepCardConfig.stepNumber,
                        ""
                    ),
                        e.xp6(1),
                        e.Q6J(
                            "ngTemplateOutlet",
                            1 ===
                                (null == A.stepCardConfig
                                    ? null
                                    : A.stepCardConfig.stepNumber)
                                ? t
                                : A.stepCardConfig.stepLink
                                ? i
                                : C
                        );
                }
            }
            let G = (() => {
                class n {
                    constructor(t, i) {
                        (this.deviceRecognitionService = t),
                            (this.websiteInfoService = i),
                            (this.stepStyle = Ln._),
                            (this.signupLink = "/signup"),
                            (this.useiOSImage = !1),
                            (this.isWeb = !0);
                    }
                    ngOnInit() {
                        (this.useiOSImage = this.deviceRecognitionService.isIosDevice),
                            (this.isWeb = this.deviceRecognitionService.isDesktop),
                            (this.projectBaseUrl = this.websiteInfoService.projectBasePath),
                            (this.signupLink = `${this.websiteInfoService.pathLanguage}/signup`),
                            (this.redirectActionLink = this.isWeb
                                ? this.signupLink
                                : this.websiteInfoService
                                      .appDownloadUniversalUrl);
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(Xt.u), e.Y36(_e.x));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["article", "luno-step-card", ""]],
                        inputs: { stepCardConfig: "stepCardConfig" },
                        attrs: Dn,
                        decls: 10,
                        vars: 3,
                        consts: function () {
                            let r;
                            return (
                                (r = $localize`:Component\: HeadingâŸ041620337eaebda87971d345d05697639dfe78e4âŸ8980375993935541237:Step`),
                                [
                                    [1, "box"],
                                    [1, "content"],
                                    [1, "step"],
                                    ["i18nExtended", "", 1, "mat-body-1"],
                                    r,
                                    [1, "mat-body-1"],
                                    [1, "title"],
                                    [3, "ngClass", 4, "ngIf"],
                                    [3, "ngClass"],
                                    [3, "ngTemplateOutlet"],
                                    ["stepWithUniversalLink", ""],
                                    ["stepWithSpecifiedLink", ""],
                                    ["stepWithoutLink", ""],
                                    [3, "href"],
                                    [
                                        "loading",
                                        "lazy",
                                        3,
                                        "src",
                                        "alt",
                                        4,
                                        "ngIf",
                                    ],
                                    ["loading", "lazy", 3, "src", "alt"],
                                ]
                            );
                        },
                        template: function (t, i) {
                            1 & t &&
                                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(
                                    3,
                                    "p",
                                    3
                                ),
                                e.SDv(4, 4),
                                e.qZA(),
                                e.TgZ(5, "p", 5),
                                e._uU(6),
                                e.qZA()(),
                                e.TgZ(7, "h3", 6),
                                e._uU(8),
                                e.qZA(),
                                e.YNc(9, D, 8, 2, "div", 7),
                                e.qZA()()),
                                2 & t &&
                                    (e.xp6(6),
                                    e.hij(
                                        "\xa0",
                                        null == i.stepCardConfig
                                            ? null
                                            : i.stepCardConfig.stepNumber,
                                        ""
                                    ),
                                    e.xp6(2),
                                    e.Oqu(
                                        null == i.stepCardConfig
                                            ? null
                                            : i.stepCardConfig.title
                                    ),
                                    e.xp6(1),
                                    e.Q6J(
                                        "ngIf",
                                        i.stepCardConfig &&
                                            (null == i.stepCardConfig
                                                ? null
                                                : i.stepCardConfig.image)
                                    ));
                        },
                        dependencies: [g.mk, g.O5, g.tP, We.y],
                        styles: [
                            ".box[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;box-sizing:border-box;flex-direction:column;color:#001e88;padding-bottom:50px}.box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;background-color:#f9f9f9;height:100%;padding:25px 50px;border-radius:8px;overflow:visible}.box[_ngcontent-%COMP%]   .boxy[_ngcontent-%COMP%]{min-height:300px;width:100%;margin:65px auto auto;text-align:center;display:flex;flex-direction:column;align-items:center;border-radius:8px}.box[_ngcontent-%COMP%]   .boxy[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:32px auto 0}.box[_ngcontent-%COMP%]   .boxy[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;text-align:left}.box[_ngcontent-%COMP%]   .boxy[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]{height:40px}.box[_ngcontent-%COMP%]   .boxy[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:auto;min-width:250px;text-align:center}.box[_ngcontent-%COMP%]   .boxy[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px}.box[_ngcontent-%COMP%]   .boxy[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1)   img[_ngcontent-%COMP%]{margin:20px auto 5px}.box[_ngcontent-%COMP%]   .boxy[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2)   img[_ngcontent-%COMP%]{margin:5px auto 20px}.box[_ngcontent-%COMP%]   .step-1[_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   .step-2[_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   .step-3[_ngcontent-%COMP%]{width:100%;height:auto;max-width:350px;margin:0 auto}.box[_ngcontent-%COMP%]   .step-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   .step-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   .step-3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;box-shadow:0 7px 9px -4px #00000013,0 14px 21px 2px #0000000e,0 5px 26px 4px #0000000c}.box[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{border:1px solid #001e88;width:-moz-fit-content;width:fit-content;padding:8px 25px;border-radius:48px;line-height:0}.box[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;margin:0}.box[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:lang(fr)   .title[_ngcontent-%COMP%]{white-space:nowrap}@media screen and (min-width: 768px) and (max-width: 992px){.box[_ngcontent-%COMP%]   .boxy[_ngcontent-%COMP%]{margin:40px auto 0}h3[_ngcontent-%COMP%]{margin-top:5px}}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            function be(n, r) {
                1 & n && e._UZ(0, "article", 2),
                    2 & n && e.Q6J("stepCardConfig", r.$implicit);
            }
            let mo = (() => {
                class n {
                    constructor(t) {
                        (this.websiteInfoService = t),
                            (this.stepCards = []),
                            (this.imgUrl = "");
                    }
                    ngOnInit() {
                        (this.projectBaseUrl = this.websiteInfoService.projectBaseUrl),
                            (this.imgUrl = `${this.projectBaseUrl}/assets/v4/homepage/empty.png`);
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(_e.x));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-steps"]],
                        inputs: { stepCards: "stepCards" },
                        decls: 2,
                        vars: 1,
                        consts: [
                            [1, "steps"],
                            [
                                "luno-step-card",
                                "",
                                "class",
                                "step",
                                3,
                                "stepCardConfig",
                                4,
                                "ngFor",
                                "ngForOf",
                            ],
                            [
                                "luno-step-card",
                                "",
                                1,
                                "step",
                                3,
                                "stepCardConfig",
                            ],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.TgZ(0, "div", 0),
                                e.YNc(1, be, 1, 1, "article", 1),
                                e.qZA()),
                                2 & t &&
                                    (e.xp6(1), e.Q6J("ngForOf", i.stepCards));
                        },
                        dependencies: [g.sg, G],
                        styles: [
                            ".steps[_ngcontent-%COMP%]{width:91.6666666667%;max-width:1240px;margin:auto;gap:20px;display:flex;flex-direction:column}@media screen and (min-width: 768px){.steps[_ngcontent-%COMP%]{flex-direction:row}}.steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{display:block;width:100%}.steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}@media screen and (min-width: 768px){.steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{width:33.3333333333%}}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            const go = {
                whyLuno: {
                    text: "Why Luno?",
                    description: "Question. Why should you use Luno to invest.",
                },
                youreInSafe: {
                    text: "You\u2019re in safe hands",
                    description: "Title.",
                },
                weValueYourTrust: {
                    text:
                        "We value your trust above all else and always make your security our top priority.",
                    description: "Title.",
                },
                secure: {
                    text: "Secure",
                    description: "Adjective. A reference to security.",
                },
                yourCrypto: {
                    text:
                        "Your crypto is kept safe by industry-leading security",
                    description: "Title.",
                },
                moreOnOurSecurity: {
                    text: "More on our compliance",
                    description:
                        "Additional information regarding security standards.",
                },
                backgroundImg: {
                    text: "Hand holding mobile with Luno app",
                    description: "Image alt tag content",
                },
            };
            var qt = o(1595);
            const ho = ["luno-billboard-card", ""];
            let Co = (() => {
                class n {
                    constructor(t) {
                        (this.websiteInfoService = t),
                            (this.projectBaseUrl = this.websiteInfoService.projectBaseUrl),
                            (this.backgroundImgUrl = `${this.projectBaseUrl}/assets/v4/homepage/hand2.svg`);
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(_e.x));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["article", "luno-billboard-card", ""]],
                        inputs: { card: "card" },
                        attrs: ho,
                        decls: 11,
                        vars: 7,
                        consts: [
                            [1, "billboard-card"],
                            [1, "billboard-copy"],
                            [3, "href"],
                            [
                                "themeColor",
                                "primary",
                                "matIcon",
                                "arrow_forward",
                                "useSurroundingCircle",
                                "true",
                                "isSmallerIcon",
                                "true",
                                1,
                                "theme-secondary",
                            ],
                            ["loading", "lazy", 3, "src", "alt", "width"],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "h2"),
                                e._uU(3),
                                e.qZA(),
                                e.TgZ(4, "p"),
                                e._uU(5),
                                e.qZA(),
                                e.TgZ(6, "a", 2)(7, "span"),
                                e._uU(8),
                                e.qZA(),
                                e._UZ(9, "luno-icon-background", 3),
                                e.qZA()(),
                                e._UZ(10, "img", 4),
                                e.qZA()),
                                2 & t &&
                                    (e.xp6(3),
                                    e.Oqu(null == i.card ? null : i.card.title),
                                    e.xp6(2),
                                    e.Oqu(
                                        null == i.card ? null : i.card.subtitle
                                    ),
                                    e.xp6(1),
                                    e.Q6J(
                                        "href",
                                        null == i.card || null == i.card.link
                                            ? null
                                            : i.card.link.linkUrl,
                                        e.LSH
                                    ),
                                    e.xp6(2),
                                    e.Oqu(
                                        null == i.card || null == i.card.link
                                            ? null
                                            : i.card.link.linkText
                                    ),
                                    e.xp6(2),
                                    e.Q6J(
                                        "src",
                                        null == i.card || null == i.card.image
                                            ? null
                                            : i.card.image.url,
                                        e.LSH
                                    )(
                                        "alt",
                                        null == i.card || null == i.card.image
                                            ? null
                                            : i.card.image.name
                                    )(
                                        "width",
                                        null == i.card || null == i.card.image
                                            ? null
                                            : i.card.image.width
                                    ));
                        },
                        dependencies: [qt.D],
                        styles: [
                            ".billboard-card[_ngcontent-%COMP%]{display:flex;padding:10px 30px 50px;color:#001e88;background-color:#f9f9f9;position:relative;border-radius:8px;align-items:flex-start;justify-content:space-between;height:100%}.billboard-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:20px 0 0 20px}@media screen and (min-width: 1150px){.billboard-card[_ngcontent-%COMP%]{border-radius:0}.billboard-card[_ngcontent-%COMP%]:first-of-type{border-bottom-left-radius:8px}.billboard-card[_ngcontent-%COMP%]:last-of-type{border-bottom-right-radius:8px}}.billboard-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.billboard-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-flex;justify-content:flex-start;align-items:center;width:-webkit-fill-available;width:-moz-available;width:fill-available}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            function To(n, r) {
                1 & n && e._UZ(0, "article", 11),
                    2 & n && e.Q6J("card", r.$implicit);
            }
            function Eo(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "section", 1)(1, "div", 2)(2, "div", 3)(
                            3,
                            "h2",
                            4
                        ),
                        e.SDv(4, 5),
                        e.qZA(),
                        e.TgZ(5, "h3", 6),
                        e._uU(6),
                        e.qZA(),
                        e.TgZ(7, "h4", 7),
                        e._uU(8),
                        e.qZA()(),
                        e._UZ(9, "img", 8),
                        e.qZA(),
                        e.TgZ(10, "div", 9),
                        e.YNc(11, To, 1, 1, "article", 10),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.xp6(1),
                        e.Udp("background-image", t.backgroundImgUrl),
                        e.xp6(5),
                        e.Oqu(null == t.whyLuno ? null : t.whyLuno.title),
                        e.xp6(2),
                        e.Oqu(null == t.whyLuno ? null : t.whyLuno.subtitle),
                        e.xp6(1),
                        e.Q6J(
                            "src",
                            null == t.whyLuno ||
                                null == t.whyLuno.backgroundImage
                                ? null
                                : t.whyLuno.backgroundImage.url,
                            e.LSH
                        )(
                            "alt",
                            null == t.whyLuno ||
                                null == t.whyLuno.backgroundImage
                                ? null
                                : t.whyLuno.backgroundImage.name
                        ),
                        e.xp6(2),
                        e.Q6J(
                            "ngForOf",
                            null == t.whyLuno ? null : t.whyLuno.cards
                        );
                }
            }
            let Io = (() => {
                    class n {
                        constructor(t, i) {
                            (this.screenLayoutService = t),
                                (this.websiteInfoService = i),
                                (this.projectBaseUrl = this.websiteInfoService.projectBaseUrl),
                                (this.backgroundImgUrl = `url('${this.projectBaseUrl}/assets/v4/homepage/lines.png')`),
                                (this.strings = go);
                        }
                        ngOnInit() {
                            this.isLessOrEqualToTablet$ = this.screenLayoutService.isLessOrEqualToTablet$;
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.Y36(kt), e.Y36(_e.x));
                        }),
                        (n.ɵcmp = e.Xpm({
                            type: n,
                            selectors: [["luno-billboard"]],
                            inputs: { whyLuno: "whyLuno" },
                            decls: 1,
                            vars: 1,
                            consts: function () {
                                let r;
                                return (
                                    (r = $localize`:Component\: HeadingâŸ5c81ec19a7171df844d10775d84fa2aac7e33c68âŸ874137304824435416:Why Luno?`),
                                    [
                                        ["class", "billboard", 4, "ngIf"],
                                        [1, "billboard"],
                                        [1, "banner"],
                                        [1, "banner-content"],
                                        ["i18nExtended", "", 1, "mat-headline"],
                                        r,
                                        [1, "mat-title"],
                                        [1, "mat-subheading-2"],
                                        ["loading", "lazy", 3, "src", "alt"],
                                        [1, "cards"],
                                        [
                                            "luno-billboard-card",
                                            "",
                                            3,
                                            "card",
                                            4,
                                            "ngFor",
                                            "ngForOf",
                                        ],
                                        ["luno-billboard-card", "", 3, "card"],
                                    ]
                                );
                            },
                            template: function (t, i) {
                                1 & t && e.YNc(0, Eo, 12, 7, "section", 0),
                                    2 & t && e.Q6J("ngIf", i.whyLuno);
                            },
                            dependencies: [g.sg, g.O5, Co, We.y],
                            styles: [
                                '.billboard[_ngcontent-%COMP%]{font-family:Fracktif,Helvetica Neue,Helvetica,Arial,sans-serif;display:flex;flex-direction:column;margin:auto;width:91.6666666667%;max-width:1240px}.billboard[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]{width:100%;margin:20px auto 0;background-color:#001e88;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover;border-radius:8px 8px 8px 0;position:relative;overflow:hidden}.billboard[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;height:50%;width:auto}@media screen and (min-width: 768px){.billboard[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:90%;left:auto;max-height:375px}}@media screen and (min-width: 1150px){.billboard[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]{border-radius:8px 8px 0 0;background-position-x:right;background-position-y:bottom;background-size:contain}}.billboard[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:transparent;color:var(--color-neutral-0);padding:48px 25px 375px;background-size:500px;background-position-x:right;background-position-y:bottom;background-repeat:no-repeat}@media screen and (min-width: 768px){.billboard[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]{height:472px;padding:48px 30px 0;background-size:contain}}@media screen and (min-width: 1150px){.billboard[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]{padding:48px 52px}}.billboard[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:500;letter-spacing:-.02em;margin-bottom:20px}.billboard[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{max-width:360px}@media screen and (min-width: 768px){.billboard[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{width:50%}}.billboard[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;width:100%;margin:40px auto 0}@media screen and (min-width: 1150px){.billboard[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{flex-direction:row;margin:auto}.billboard[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{height:100%;width:33.3333333333%}}.billboard[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] > article[_ngcontent-%COMP%]{position:relative;margin:15px auto;width:100%}@media screen and (min-width: 1150px){.billboard[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] > article[_ngcontent-%COMP%]{margin:0;height:auto}.billboard[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] > article[_ngcontent-%COMP%]:not(:first-of-type):before{content:"";position:absolute;background-color:#8c9091;height:60%;width:1px;z-index:1;top:20%}}',
                            ],
                            changeDetection: 0,
                        })),
                        n
                    );
                })(),
                fo = (() => {
                    class n {
                        constructor() {}
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵcmp = e.Xpm({
                            type: n,
                            selectors: [["luno-testimonial-title"]],
                            inputs: { testimonialTitles: "testimonialTitles" },
                            decls: 7,
                            vars: 2,
                            consts: function () {
                                let r;
                                return (
                                    (r = $localize`:Component\: HeadingâŸ9a996d1b2b39755a3cd013f89ae3c8026d2040f3âŸ7100508900545127127:Testimonials`),
                                    [
                                        [1, "testimonial-title"],
                                        ["i18nExtended", "", 1, "mat-headline"],
                                        r,
                                        [1, "mat-title"],
                                        [1, "mat-subheading-2"],
                                    ]
                                );
                            },
                            template: function (t, i) {
                                1 & t &&
                                    (e.TgZ(0, "section", 0)(1, "h1", 1),
                                    e.SDv(2, 2),
                                    e.qZA(),
                                    e.TgZ(3, "h2", 3),
                                    e._uU(4),
                                    e.qZA(),
                                    e.TgZ(5, "p", 4),
                                    e._uU(6),
                                    e.qZA()()),
                                    2 & t &&
                                        (e.xp6(4),
                                        e.Oqu(
                                            null == i.testimonialTitles
                                                ? null
                                                : i.testimonialTitles.title
                                        ),
                                        e.xp6(2),
                                        e.Oqu(
                                            null == i.testimonialTitles
                                                ? null
                                                : i.testimonialTitles.subtitle
                                        ));
                            },
                            dependencies: [We.y],
                            styles: [
                                "section.testimonial-title[_ngcontent-%COMP%]{margin-top:78px;display:flex;flex-direction:column;color:#001e88;text-align:center;min-height:250px;padding:0 calc((100vw - 1240px)/2) 30px}h1[_ngcontent-%COMP%]{padding:0 36.5px}p[_ngcontent-%COMP%]{padding:0 43px}",
                            ],
                            changeDetection: 0,
                        })),
                        n
                    );
                })();
            function So(n, r) {
                1 & n && e.GkF(0);
            }
            function No(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "div", 4),
                        e._UZ(1, "img", 5),
                        e.qZA(),
                        e.TgZ(2, "div", 6)(3, "h2", 7),
                        e.SDv(4, 8),
                        e.qZA(),
                        e.TgZ(5, "h3", 9),
                        e._uU(6),
                        e.qZA(),
                        e.TgZ(7, "a", 10)(8, "span", 11),
                        e.SDv(9, 12),
                        e.qZA(),
                        e._UZ(10, "luno-icon-background", 13),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.xp6(1),
                        e.Q6J("src", t.imageUrl, e.LSH),
                        e.xp6(1),
                        e.Q6J("ngClass", t.themeColour),
                        e.xp6(4),
                        e.Oqu(
                            null == t.testimonial ? null : t.testimonial.body
                        ),
                        e.xp6(1),
                        e.Q6J(
                            "href",
                            null == t.testimonial
                                ? null
                                : t.testimonial.storyUrl,
                            e.LSH
                        ),
                        e.xp6(3),
                        e.Q6J("backgroundColour", t.colourCode);
                }
            }
            function Ao(n, r) {
                if (
                    (1 & n && (e.TgZ(0, "div", 4), e._UZ(1, "img", 5), e.qZA()),
                    2 & n)
                ) {
                    const t = e.oxw(2);
                    e.xp6(1), e.Q6J("src", t.imageUrl, e.LSH);
                }
            }
            function Oo(n, r) {
                if (
                    (1 & n && (e.TgZ(0, "div", 4), e._UZ(1, "img", 5), e.qZA()),
                    2 & n)
                ) {
                    const t = e.oxw(2);
                    e.xp6(1), e.Q6J("src", t.imageUrl, e.LSH);
                }
            }
            function vo(n, r) {
                if (
                    (1 & n &&
                        (e.YNc(0, Ao, 2, 1, "div", 14),
                        e.TgZ(1, "div", 6)(2, "h2", 7),
                        e.SDv(3, 15),
                        e.qZA(),
                        e.TgZ(4, "h3", 9),
                        e._uU(5),
                        e.qZA(),
                        e.TgZ(6, "a", 10)(7, "span", 11),
                        e.SDv(8, 16),
                        e.qZA(),
                        e._UZ(9, "luno-icon-background", 13),
                        e.qZA()(),
                        e.YNc(10, Oo, 2, 1, "div", 14)),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.Q6J("ngIf", "right" === t.align),
                        e.xp6(1),
                        e.Q6J("ngClass", t.themeColour),
                        e.xp6(4),
                        e.Oqu(
                            null == t.testimonial ? null : t.testimonial.body
                        ),
                        e.xp6(1),
                        e.Q6J(
                            "href",
                            null == t.testimonial
                                ? null
                                : t.testimonial.storyUrl,
                            e.LSH
                        ),
                        e.xp6(3),
                        e.Q6J("backgroundColour", t.colourCode),
                        e.xp6(1),
                        e.Q6J("ngIf", "left" === t.align);
                }
            }
            let yo = (() => {
                class n {
                    constructor(t) {
                        (this.screenLayoutService = t),
                            (this.themeColour = Te.blue),
                            (this.childClass = "photo1"),
                            (this.align = "left"),
                            (this.colourCode = "white");
                    }
                    ngOnInit() {
                        (this.colourCode = this.getThemeColor(
                            this.themeColour
                        )),
                            (this.isLessOrEqualToTablet$ = this.screenLayoutService.isLessOrEqualToTablet$),
                            (this.imageUrl = this.testimonial?.imageUrl),
                            (this.body = this.testimonial?.body),
                            (this.storyUrl = this.testimonial?.storyUrl);
                    }
                    getThemeColor(t) {
                        switch (t) {
                            case "blue":
                                return "#2639f2";
                            case "coral":
                                return "#ff9c9a";
                            case "purple":
                                return "#6c74f7";
                            default:
                                return "white";
                        }
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(kt));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-testimonial"]],
                        inputs: {
                            testimonial: "testimonial",
                            themeColour: "themeColour",
                            childClass: "childClass",
                            align: "align",
                        },
                        decls: 7,
                        vars: 5,
                        consts: function () {
                            let r, t, i, C;
                            return (
                                (r = $localize`:Component\: HeadingâŸ82973f1d2b40441cc6d5a564bff23b0d40840a40âŸ1812702542284161578:Luno Customer`),
                                (t = $localize`:Button\: link to testimonial storyâŸ62a103accfe3758f414171f745f77f441bab26acâŸ8445599168210697853:Read the story`),
                                (i = $localize`:Component\: HeadingâŸ82973f1d2b40441cc6d5a564bff23b0d40840a40âŸ1812702542284161578:Luno Customer`),
                                (C = $localize`:Button\: link to testimonial storyâŸ62a103accfe3758f414171f745f77f441bab26acâŸ8445599168210697853:Read the story`),
                                [
                                    [1, "testimonial"],
                                    [4, "ngIf", "ngIfThen", "ngIfElse"],
                                    ["mobileView", ""],
                                    ["desktopView", ""],
                                    [1, "testimonial-photo"],
                                    [
                                        "alt",
                                        "Photo of customer",
                                        "loading",
                                        "lazy",
                                        3,
                                        "src",
                                    ],
                                    [1, "testimonial-text", 3, "ngClass"],
                                    ["i18nExtended", "", 1, "mat-headline"],
                                    r,
                                    [1, "mat-display-2"],
                                    [1, "read-cta", 3, "href"],
                                    ["i18nExtended", "", 1, "mat-body-2"],
                                    t,
                                    [
                                        "themeColor",
                                        "white",
                                        "matIcon",
                                        "arrow_forward",
                                        "useSurroundingCircle",
                                        "true",
                                        "isSmallerIcon",
                                        "true",
                                        3,
                                        "backgroundColour",
                                    ],
                                    ["class", "testimonial-photo", 4, "ngIf"],
                                    i,
                                    C,
                                ]
                            );
                        },
                        template: function (t, i) {
                            if (
                                (1 & t &&
                                    (e.TgZ(0, "section", 0),
                                    e.YNc(1, So, 1, 0, "ng-container", 1),
                                    e.ALo(2, "async"),
                                    e.YNc(
                                        3,
                                        No,
                                        11,
                                        5,
                                        "ng-template",
                                        null,
                                        2,
                                        e.W1O
                                    ),
                                    e.YNc(
                                        5,
                                        vo,
                                        11,
                                        6,
                                        "ng-template",
                                        null,
                                        3,
                                        e.W1O
                                    ),
                                    e.qZA()),
                                2 & t)
                            ) {
                                const C = e.MAs(4),
                                    A = e.MAs(6);
                                e.xp6(1),
                                    e.Q6J(
                                        "ngIf",
                                        e.lcZ(2, 3, i.isLessOrEqualToTablet$)
                                    )("ngIfThen", C)("ngIfElse", A);
                            }
                        },
                        dependencies: [g.mk, g.O5, qt.D, We.y, g.Ov],
                        styles: [
                            ".testimonial[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;justify-content:center;align-items:flex-end;width:100%;height:100%;max-width:1240px;margin:16px auto}@media screen and (min-width: 768px){.testimonial[_ngcontent-%COMP%]{flex-direction:row;align-items:stretch}}.testimonial[_ngcontent-%COMP%]   luno-icon-background[_ngcontent-%COMP%]{margin-left:25px;display:inline-block;vertical-align:bottom}.testimonial[_ngcontent-%COMP%]   .testimonial-text[_ngcontent-%COMP%]{font-family:Fracktif,Helvetica Neue,Helvetica,Arial,sans-serif;width:91.6666666667%;color:#fff;margin:0;height:100%;padding:30px;box-sizing:border-box;display:flex;flex-direction:column;min-height:330px;border-radius:8px 8px 0 0}@media screen and (min-width: 768px){.testimonial[_ngcontent-%COMP%]   .testimonial-text[_ngcontent-%COMP%]{border-radius:8px 0 0 8px;margin:0 auto}.testimonial[_ngcontent-%COMP%]   .testimonial-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{max-width:67%;min-width:245px}.testimonial[_ngcontent-%COMP%]   .testimonial-text[_ngcontent-%COMP%]:nth-of-type(even){border-radius:0 8px 8px 0}}@media screen and (min-width: 1150px){.testimonial[_ngcontent-%COMP%]   .testimonial-text[_ngcontent-%COMP%]{width:60%;min-height:472px}}.testimonial[_ngcontent-%COMP%]   .testimonial-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0}.testimonial[_ngcontent-%COMP%]   .testimonial-text.blue[_ngcontent-%COMP%]{background-color:#2639f2}.testimonial[_ngcontent-%COMP%]   .testimonial-text.purple[_ngcontent-%COMP%]{background-color:#6c74f7}.testimonial[_ngcontent-%COMP%]   .testimonial-text.coral[_ngcontent-%COMP%]{background-color:#ff9c9a}.testimonial[_ngcontent-%COMP%]   .testimonial-text[_ngcontent-%COMP%]   .read-cta[_ngcontent-%COMP%]{color:#fff;margin-top:auto}.testimonial[_ngcontent-%COMP%]   .testimonial-text[_ngcontent-%COMP%]   .read-cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:auto 0}.testimonial[_ngcontent-%COMP%]   .testimonial-photo[_ngcontent-%COMP%]{padding:0;width:91.6666666667%;height:auto;border-radius:0 0 8px 8px;min-height:300px;margin:0}@media screen and (min-width: 768px){.testimonial[_ngcontent-%COMP%]   .testimonial-photo[_ngcontent-%COMP%]{background-position-x:center;border-radius:8px 0 0 8px;width:50%;margin:0 auto}.testimonial[_ngcontent-%COMP%]   .testimonial-photo[_ngcontent-%COMP%]:nth-of-type(even){border-radius:0 8px 8px 0}}.testimonial[_ngcontent-%COMP%]   .testimonial-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:100%;width:100%;-o-object-fit:cover;object-fit:cover}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            function Po(n, r) {
                if ((1 & n && e._UZ(0, "luno-testimonial", 6), 2 & n)) {
                    const t = e.oxw();
                    e.Q6J(
                        "testimonial",
                        null == t.testimonials ? null : t.testimonials[0]
                    )("themeColour", t.Themes.blue);
                }
            }
            function xo(n, r) {
                if ((1 & n && e._UZ(0, "luno-testimonial", 7), 2 & n)) {
                    const t = e.oxw();
                    e.Q6J(
                        "testimonial",
                        null == t.testimonials ? null : t.testimonials[1]
                    )("themeColour", t.Themes.coral);
                }
            }
            function Ro(n, r) {
                if ((1 & n && e._UZ(0, "luno-testimonial", 8), 2 & n)) {
                    const t = e.oxw();
                    e.Q6J(
                        "testimonial",
                        null == t.testimonials ? null : t.testimonials[2]
                    )("themeColour", t.Themes.purple);
                }
            }
            let Lo = (() => {
                class n {
                    constructor() {
                        (this.testimonials = []),
                            (this.Themes = {
                                blue: Te.blue,
                                coral: Te.coral,
                                purple: Te.purple,
                            });
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-testimonials"]],
                        inputs: {
                            testimonials: "testimonials",
                            testimonialTitles: "testimonialTitles",
                        },
                        decls: 6,
                        vars: 4,
                        consts: [
                            [1, "testimonials"],
                            [3, "testimonialTitles"],
                            [1, "testimonial-cards"],
                            [
                                "class",
                                "testimonial-wrapper",
                                "childClass",
                                "photo1",
                                "align",
                                "left",
                                3,
                                "testimonial",
                                "themeColour",
                                4,
                                "ngIf",
                            ],
                            [
                                "class",
                                "testimonial-wrapper",
                                "childClass",
                                "photo2",
                                "align",
                                "right",
                                3,
                                "testimonial",
                                "themeColour",
                                4,
                                "ngIf",
                            ],
                            [
                                "class",
                                "testimonial-wrapper",
                                "childClass",
                                "photo3",
                                "align",
                                "left",
                                3,
                                "testimonial",
                                "themeColour",
                                4,
                                "ngIf",
                            ],
                            [
                                "childClass",
                                "photo1",
                                "align",
                                "left",
                                1,
                                "testimonial-wrapper",
                                3,
                                "testimonial",
                                "themeColour",
                            ],
                            [
                                "childClass",
                                "photo2",
                                "align",
                                "right",
                                1,
                                "testimonial-wrapper",
                                3,
                                "testimonial",
                                "themeColour",
                            ],
                            [
                                "childClass",
                                "photo3",
                                "align",
                                "left",
                                1,
                                "testimonial-wrapper",
                                3,
                                "testimonial",
                                "themeColour",
                            ],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.TgZ(0, "section", 0),
                                e._UZ(1, "luno-testimonial-title", 1),
                                e.TgZ(2, "div", 2),
                                e.YNc(3, Po, 1, 2, "luno-testimonial", 3),
                                e.YNc(4, xo, 1, 2, "luno-testimonial", 4),
                                e.YNc(5, Ro, 1, 2, "luno-testimonial", 5),
                                e.qZA()()),
                                2 & t &&
                                    (e.xp6(1),
                                    e.Q6J(
                                        "testimonialTitles",
                                        i.testimonialTitles
                                    ),
                                    e.xp6(2),
                                    e.Q6J(
                                        "ngIf",
                                        null == i.testimonials
                                            ? null
                                            : i.testimonials[0]
                                    ),
                                    e.xp6(1),
                                    e.Q6J(
                                        "ngIf",
                                        null == i.testimonials
                                            ? null
                                            : i.testimonials[1]
                                    ),
                                    e.xp6(1),
                                    e.Q6J(
                                        "ngIf",
                                        null == i.testimonials
                                            ? null
                                            : i.testimonials[2]
                                    ));
                        },
                        dependencies: [g.O5, fo, yo],
                        styles: [
                            "section.testimonials[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:91.6666666667%;margin:auto}section.testimonials[_ngcontent-%COMP%]   .testimonial-cards[_ngcontent-%COMP%]{min-height:100px;display:flex;flex-direction:row;width:100%;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none}section.testimonials[_ngcontent-%COMP%]   .testimonial-cards[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}@media screen and (min-width: 768px){section.testimonials[_ngcontent-%COMP%]   .testimonial-cards[_ngcontent-%COMP%]{min-height:1100px;flex-direction:column}}.testimonial-wrapper[_ngcontent-%COMP%]{display:block;min-width:100%;margin-left:-25px;overflow-y:hidden;text-align:left}@media screen and (min-width: 768px){.testimonial-wrapper[_ngcontent-%COMP%]{width:100%;margin:auto}}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            function Do(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "mat-card", 10),
                        e._UZ(1, "img", 11),
                        e.TgZ(2, "article")(3, "small", 12),
                        e._uU(4),
                        e.qZA(),
                        e.TgZ(5, "h4", 13),
                        e._uU(6),
                        e.qZA(),
                        e.TgZ(7, "a", 14)(8, "span"),
                        e._uU(9),
                        e.qZA(),
                        e._UZ(10, "luno-icon-background", 7),
                        e.qZA()()()),
                    2 & n)
                ) {
                    const t = r.$implicit;
                    e.xp6(1),
                        e.Q6J("src", t.imageUrl, e.LSH)("alt", t.imageAlt),
                        e.xp6(3),
                        e.Oqu(t.dateAndReadTime),
                        e.xp6(2),
                        e.hij('"', t.body, '"'),
                        e.xp6(1),
                        e.Q6J("href", t.buttonUrl, e.LSH),
                        e.xp6(2),
                        e.Oqu(t.button);
                }
            }
            let Mo = (() => {
                    class n {
                        constructor(t) {
                            (this.websiteInfoService = t),
                                (this.cryptoEducationCards = []),
                                (this.linkUrl =
                                    "https://discover.luno.com/category/analysis/insights/research/");
                        }
                        ngOnInit() {
                            (this.projectBaseUrl = this.websiteInfoService.projectBaseUrl),
                                (this.webAssetsUrl = `${this.projectBaseUrl}/assets`);
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.Y36(_e.x));
                        }),
                        (n.ɵcmp = e.Xpm({
                            type: n,
                            selectors: [["luno-crypto-education-block"]],
                            inputs: {
                                cryptoEducationCards: "cryptoEducationCards",
                                education: "education",
                            },
                            decls: 15,
                            vars: 4,
                            consts: function () {
                                let r, t;
                                return (
                                    (r = $localize`:Component\: HeadingâŸae66d66e659b154b8324a9553d9eccd0eb91dd75âŸ1174424073827363387:Crypto Education`),
                                    (t = $localize`:Component\: buttonâŸ92b1666e015b46a0d8445d09aa6de01a48868fffâŸ4161787532510546347:Explore More`),
                                    [
                                        [1, "crypto-education-hero"],
                                        ["i18nExtended", "", 1, "mat-headline"],
                                        r,
                                        [1, "mat-title"],
                                        [1, "mat-subheading-2"],
                                        [3, "href"],
                                        t,
                                        [
                                            "themeColor",
                                            "primary",
                                            "matIcon",
                                            "arrow_forward",
                                            "useSurroundingCircle",
                                            "true",
                                            "isSmallerIcon",
                                            "true",
                                        ],
                                        [1, "crypto-education-cards"],
                                        [
                                            "class",
                                            "crypto-education-card",
                                            4,
                                            "ngFor",
                                            "ngForOf",
                                        ],
                                        [1, "crypto-education-card"],
                                        ["loading", "lazy", 3, "src", "alt"],
                                        [1, "mat-body-1"],
                                        [1, "mat-display-1"],
                                        [
                                            1,
                                            "mat-subheading-1",
                                            "tiny-icon",
                                            3,
                                            "href",
                                        ],
                                    ]
                                );
                            },
                            template: function (t, i) {
                                1 & t &&
                                    (e.ynx(0),
                                    e.TgZ(1, "section", 0)(2, "div")(
                                        3,
                                        "h2",
                                        1
                                    ),
                                    e.SDv(4, 2),
                                    e.qZA(),
                                    e.TgZ(5, "h3", 3),
                                    e._uU(6),
                                    e.qZA(),
                                    e.TgZ(7, "p", 4),
                                    e._uU(8),
                                    e.qZA()(),
                                    e.TgZ(9, "a", 5)(10, "span", 1),
                                    e.SDv(11, 6),
                                    e.qZA(),
                                    e._UZ(12, "luno-icon-background", 7),
                                    e.qZA()(),
                                    e.TgZ(13, "section", 8),
                                    e.YNc(14, Do, 11, 6, "mat-card", 9),
                                    e.qZA(),
                                    e.BQk()),
                                    2 & t &&
                                        (e.xp6(6),
                                        e.Oqu(
                                            null == i.education
                                                ? null
                                                : i.education.title
                                        ),
                                        e.xp6(2),
                                        e.Oqu(
                                            null == i.education
                                                ? null
                                                : i.education.subtitle
                                        ),
                                        e.xp6(1),
                                        e.Q6J("href", i.linkUrl, e.LSH),
                                        e.xp6(5),
                                        e.Q6J(
                                            "ngForOf",
                                            i.cryptoEducationCards
                                        ));
                            },
                            dependencies: [g.sg, qt.D, _.a8, We.y],
                            styles: [
                                "[_nghost-%COMP%]{background-color:var(--color-neutral-0);display:block;padding:40px 0}a[_ngcontent-%COMP%]{margin:0 0 12px;display:flex;align-items:center;text-decoration:none;width:-moz-fit-content;width:fit-content}a[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:15px;margin-bottom:0;color:var(--color-primary)}a[_ngcontent-%COMP%]:visited{color:var(--color-primary)}.tiny-icon[_ngcontent-%COMP%]{transform:scale(.8);margin-left:-15px}.crypto-education-hero[_ngcontent-%COMP%]{display:flex;margin:0 auto 40px;align-items:center;justify-content:space-between;flex-direction:column;width:91.6666666667%;max-width:1240px}@media screen and (min-width: 768px){.crypto-education-hero[_ngcontent-%COMP%]{margin:0 auto 80px;align-items:stretch}}@media screen and (min-width: 1150px){.crypto-education-hero[_ngcontent-%COMP%]{flex-direction:row;align-items:flex-end}}.crypto-education-hero[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{text-align:left;max-width:830px;margin-bottom:30px}@media screen and (min-width: 1150px){.crypto-education-hero[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:0}}.crypto-education-hero[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:20px 0}.crypto-education-cards[_ngcontent-%COMP%]{list-style:none;padding:0;display:grid;grid-template-columns:repeat(1,1fr);width:91.6666666667%;max-width:1240px;margin:0 auto}@media screen and (min-width: 768px){.crypto-education-cards[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);grid-auto-rows:1fr;grid-column-gap:12px;grid-row-gap:12px}}.crypto-education-cards[_ngcontent-%COMP%]   .crypto-education-card[_ngcontent-%COMP%]{box-shadow:0 4px 5px -2px #00000013,0 7px 10px 1px #0000000e,0 2px 16px 1px #0000000c;background-color:var(--color-neutral-0);padding:0!important;text-align:left}.crypto-education-cards[_ngcontent-%COMP%]   .crypto-education-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:4px 4px 0 0}.crypto-education-cards[_ngcontent-%COMP%]   .crypto-education-card[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding:24px 34px}.crypto-education-cards[_ngcontent-%COMP%]   .crypto-education-card[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:10px 0 25px;font-weight:400}",
                            ],
                            changeDetection: 0,
                        })),
                        n
                    );
                })(),
                Uo = (() => {
                    class n {
                        constructor(t) {
                            (this.websiteInfoService = t),
                                (this.projectBaseUrl = this.websiteInfoService.projectBaseUrl),
                                (this.blueBackground = `url('${this.projectBaseUrl}/assets/v4/homepage/cube_lilac.png')`),
                                (this.coralBackground = `url('${this.projectBaseUrl}/assets/v4/homepage/cube-coral-corner.png')`),
                                (this.featuresBannerBackground = `url('${this.projectBaseUrl}/assets/v4/homepage/lines-light.png')`);
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.Y36(_e.x));
                        }),
                        (n.ɵcmp = e.Xpm({
                            type: n,
                            selectors: [["luno-features"]],
                            inputs: { featureConfig: "featureConfig" },
                            decls: 33,
                            vars: 22,
                            consts: function () {
                                let r;
                                return (
                                    (r = $localize`:Component\: HeadingâŸ6cdb1fea93d77c07950c0c76c6e0ad79ebbef084âŸ6599364831830861985:Features`),
                                    [
                                        [1, "features"],
                                        [1, "features-title"],
                                        ["i18nExtended", "", 1, "mat-headline"],
                                        r,
                                        [1, "mat-title"],
                                        [1, "mat-subheading-2"],
                                        [1, "features-banner"],
                                        [1, "features-content"],
                                        ["loading", "lazy", 3, "src", "alt"],
                                        [1, "features-text"],
                                        [1, "mat-display-2"],
                                        [1, "mat-subheading-1"],
                                        [
                                            1,
                                            "mat-subheading-1",
                                            "features-link",
                                        ],
                                        [
                                            "rel",
                                            "noreferrer nofollow",
                                            3,
                                            "href",
                                        ],
                                        [
                                            "themeColor",
                                            "white",
                                            "backgroundColour",
                                            "blue",
                                            "matIcon",
                                            "arrow_forward",
                                            "useSurroundingCircle",
                                            "true",
                                            "isSmallerIcon",
                                            "true",
                                        ],
                                        [1, "features-cards"],
                                        [1, "feature-card", "blue"],
                                        [1, "feature-card", "coral"],
                                    ]
                                );
                            },
                            template: function (t, i) {
                                1 & t &&
                                    (e.TgZ(0, "section", 0)(1, "div", 1)(
                                        2,
                                        "h2",
                                        2
                                    ),
                                    e.SDv(3, 3),
                                    e.qZA(),
                                    e.TgZ(4, "h3", 4),
                                    e._uU(5),
                                    e.qZA(),
                                    e.TgZ(6, "p", 5),
                                    e._uU(7),
                                    e.qZA()(),
                                    e.TgZ(8, "div", 6)(9, "div", 7),
                                    e._UZ(10, "img", 8),
                                    e.TgZ(11, "div", 9)(12, "h3", 10),
                                    e._uU(13),
                                    e.qZA(),
                                    e.TgZ(14, "h4", 11),
                                    e._uU(15),
                                    e.qZA()(),
                                    e.TgZ(16, "h4", 12)(17, "a", 13),
                                    e._uU(18),
                                    e._UZ(19, "luno-icon-background", 14),
                                    e.qZA()()()(),
                                    e.TgZ(20, "div", 15)(21, "div", 16)(
                                        22,
                                        "h3",
                                        10
                                    ),
                                    e._uU(23),
                                    e.qZA(),
                                    e.TgZ(24, "h4", 11),
                                    e._uU(25),
                                    e.qZA(),
                                    e._UZ(26, "img", 8),
                                    e.qZA(),
                                    e.TgZ(27, "div", 17)(28, "h3", 10),
                                    e._uU(29),
                                    e.qZA(),
                                    e.TgZ(30, "h4", 11),
                                    e._uU(31),
                                    e.qZA(),
                                    e._UZ(32, "img", 8),
                                    e.qZA()()()),
                                    2 & t &&
                                        (e.xp6(5),
                                        e.Oqu(
                                            null == i.featureConfig
                                                ? null
                                                : i.featureConfig.title
                                        ),
                                        e.xp6(2),
                                        e.Oqu(
                                            null == i.featureConfig
                                                ? null
                                                : i.featureConfig.subtitle
                                        ),
                                        e.xp6(1),
                                        e.Udp(
                                            "background-image",
                                            i.featuresBannerBackground
                                        ),
                                        e.xp6(2),
                                        e.Q6J(
                                            "src",
                                            null == i.featureConfig ||
                                                null ==
                                                    i.featureConfig
                                                        .backgroundImage
                                                ? null
                                                : i.featureConfig
                                                      .backgroundImage.url,
                                            e.LSH
                                        )(
                                            "alt",
                                            null == i.featureConfig ||
                                                null ==
                                                    i.featureConfig
                                                        .backgroundImage
                                                ? null
                                                : i.featureConfig
                                                      .backgroundImage.name
                                        ),
                                        e.xp6(3),
                                        e.Oqu(
                                            null == i.featureConfig
                                                ? null
                                                : i.featureConfig.cards[0].title
                                        ),
                                        e.xp6(2),
                                        e.Oqu(
                                            null == i.featureConfig
                                                ? null
                                                : i.featureConfig.cards[0]
                                                      .subtitle
                                        ),
                                        e.xp6(2),
                                        e.Q6J(
                                            "href",
                                            null == i.featureConfig ||
                                                null ==
                                                    i.featureConfig.cards[0] ||
                                                null ==
                                                    i.featureConfig.cards[0]
                                                        .link
                                                ? null
                                                : i.featureConfig.cards[0].link
                                                      .linkUrl,
                                            e.LSH
                                        ),
                                        e.xp6(1),
                                        e.hij(
                                            "",
                                            null == i.featureConfig ||
                                                null ==
                                                    i.featureConfig.cards[0] ||
                                                null ==
                                                    i.featureConfig.cards[0]
                                                        .link
                                                ? null
                                                : i.featureConfig.cards[0].link
                                                      .linkText,
                                            " "
                                        ),
                                        e.xp6(3),
                                        e.Udp(
                                            "background-image",
                                            i.blueBackground
                                        ),
                                        e.xp6(2),
                                        e.Oqu(
                                            null == i.featureConfig
                                                ? null
                                                : i.featureConfig.cards[1].title
                                        ),
                                        e.xp6(2),
                                        e.Oqu(
                                            null == i.featureConfig
                                                ? null
                                                : i.featureConfig.cards[1]
                                                      .subtitle
                                        ),
                                        e.xp6(1),
                                        e.Q6J(
                                            "src",
                                            null == i.featureConfig ||
                                                null ==
                                                    i.featureConfig.cards[1] ||
                                                null ==
                                                    i.featureConfig.cards[1]
                                                        .image
                                                ? null
                                                : i.featureConfig.cards[1].image
                                                      .url,
                                            e.LSH
                                        )(
                                            "alt",
                                            null == i.featureConfig ||
                                                null ==
                                                    i.featureConfig.cards[1] ||
                                                null ==
                                                    i.featureConfig.cards[1]
                                                        .image
                                                ? null
                                                : i.featureConfig.cards[1].image
                                                      .name
                                        ),
                                        e.xp6(1),
                                        e.Udp(
                                            "background-image",
                                            i.coralBackground
                                        ),
                                        e.xp6(2),
                                        e.Oqu(
                                            null == i.featureConfig
                                                ? null
                                                : i.featureConfig.cards[2].title
                                        ),
                                        e.xp6(2),
                                        e.Oqu(
                                            null == i.featureConfig
                                                ? null
                                                : i.featureConfig.cards[2]
                                                      .subtitle
                                        ),
                                        e.xp6(1),
                                        e.Q6J(
                                            "src",
                                            null == i.featureConfig ||
                                                null ==
                                                    i.featureConfig.cards[2] ||
                                                null ==
                                                    i.featureConfig.cards[2]
                                                        .image
                                                ? null
                                                : i.featureConfig.cards[2].image
                                                      .url,
                                            e.LSH
                                        )(
                                            "alt",
                                            null == i.featureConfig ||
                                                null ==
                                                    i.featureConfig.cards[2] ||
                                                null ==
                                                    i.featureConfig.cards[2]
                                                        .image
                                                ? null
                                                : i.featureConfig.cards[2].image
                                                      .name
                                        ));
                            },
                            dependencies: [qt.D, We.y],
                            styles: [
                                ".c24[_ngcontent-%COMP%]{box-sizing:content-box;width:100%;padding:30px}.c12[_ngcontent-%COMP%]{box-sizing:content-box;width:50%;padding:30px}.h100[_ngcontent-%COMP%]{height:100%}.features[_ngcontent-%COMP%]{width:91.6666666667%;max-width:1240px;margin:auto;display:flex;justify-content:center;flex-direction:column;align-items:center}.features[_ngcontent-%COMP%]   .features-title[_ngcontent-%COMP%]{font-family:Fracktif,Helvetica Neue,Helvetica,Arial,sans-serif;color:#001e88;text-align:center;padding-top:50px;padding-bottom:30px;margin:0 36px}.features[_ngcontent-%COMP%]   .features-banner[_ngcontent-%COMP%]{display:flex;position:relative;overflow:hidden;width:100%;background-color:#162af1;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover;box-sizing:border-box;border-radius:8px;padding:0}@media screen and (min-width: 768px){.features[_ngcontent-%COMP%]   .features-banner[_ngcontent-%COMP%]{background-position-x:right;background-position-y:bottom;background-size:contain}}.features[_ngcontent-%COMP%]   .features-banner[_ngcontent-%COMP%]   .features-content[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;height:100%;min-height:500px;background-repeat:no-repeat;background-position-x:right;background-position-y:bottom;background-size:contain;text-align:left;color:#fff;font-family:Fracktif,Helvetica Neue,Helvetica,Arial,sans-serif;padding:50px;margin:0}.features[_ngcontent-%COMP%]   .features-banner[_ngcontent-%COMP%]   .features-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;bottom:0;right:-25px;width:auto;height:100%;z-index:0;min-width:100%;max-height:300px}@media screen and (min-width: 1150px){.features[_ngcontent-%COMP%]   .features-banner[_ngcontent-%COMP%]   .features-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{right:-50px}}@media screen and (min-width: 1150px){.features[_ngcontent-%COMP%]   .features-banner[_ngcontent-%COMP%]   .features-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:500px;right:-75px}}.features[_ngcontent-%COMP%]   .features-banner[_ngcontent-%COMP%]   .features-content[_ngcontent-%COMP%]   .features-link[_ngcontent-%COMP%]{margin-bottom:20px;z-index:1}.features[_ngcontent-%COMP%]   .features-banner[_ngcontent-%COMP%]   .features-content[_ngcontent-%COMP%]   .features-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;max-width:50%;display:flex;align-items:center}.features[_ngcontent-%COMP%]   .features-banner[_ngcontent-%COMP%]   .features-content[_ngcontent-%COMP%]   .features-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   luno-icon-background[_ngcontent-%COMP%]{margin-left:15px;align-self:flex-end}.features[_ngcontent-%COMP%]   .features-banner[_ngcontent-%COMP%]   .features-content[_ngcontent-%COMP%]   .features-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:0}@media screen and (min-width: 768px){.features[_ngcontent-%COMP%]   .features-banner[_ngcontent-%COMP%]   .features-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;background-position-x:right;min-height:350px}.features[_ngcontent-%COMP%]   .features-banner[_ngcontent-%COMP%]   .features-content[_ngcontent-%COMP%]   .features-text[_ngcontent-%COMP%]{width:50%}}.features[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%]{display:table-column;justify-content:space-between;padding:30px 0;width:100%;margin:auto}@media screen and (min-width: 768px){.features[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%]{display:flex}}.features[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]{width:100%;background-color:#fff;border-radius:8px;font-family:Fracktif,Helvetica Neue,Helvetica,Arial,sans-serif;padding:50px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-start;background-repeat:no-repeat;background-position-y:bottom;background-size:cover;color:#001e88;margin:16px auto 0;box-shadow:0 12px 20px #00000026}.features[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;margin:0% auto auto}@media screen and (min-width: 768px){.features[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]{width:calc(50% - 20px);margin:0}}.features[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:0}.features[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%]   .feature-card.blue[_ngcontent-%COMP%]{background-color:#f9f9f9;background-position-x:21%;background-position-y:9em}.features[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%]   .feature-card.blue[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;max-width:350px;margin:0 auto;border-radius:12px}.features[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%]   .feature-card.coral[_ngcontent-%COMP%]{background-color:#f9f9f9;background-position-x:31%;background-position-y:13em}.features[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-card-mini[_ngcontent-%COMP%]{margin:auto auto 30px;height:calc(100% - 200px);border-radius:8px;max-width:100%;display:flex;justify-content:center}@media screen and (min-width: 768px){.features[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-card-mini[_ngcontent-%COMP%]{display:block;max-width:80%}}.features[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-card-mini[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}",
                            ],
                            changeDetection: 0,
                        })),
                        n
                    );
                })();
            const en_title_text =
                    "Luno will no longer be available in Singapore",
                en_mainCopy_text =
                    "From 20 June 2023, Luno will no longer be available in Singapore. Customers have received communications from us about what steps they need to take.",
                en_callToActionText_text = "Read more in our blog",
                en_imageAlt_text =
                    "Proof of reserve icon showing purple and pink shields stacked";
            let bo = (() => {
                class n {
                    constructor(t, i, C) {
                        (this.i18n = t),
                            (this.websiteInfoService = i),
                            (this.localeService = C),
                            (this.imageUrl = `${this.websiteInfoService.projectBaseUrl}/assets/v4/decommissioned-region-banner/decommissioned-region.svg`),
                            (this.imageAlt = this.i18n.translateText(
                                en_imageAlt_text
                            )),
                            (this.title = this.i18n.translateText(
                                en_title_text
                            )),
                            (this.callToActionText = this.i18n.translateText(
                                en_callToActionText_text
                            )),
                            (this.mainCopy = this.i18n.translateText(
                                en_mainCopy_text
                            ));
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(
                            e.Y36(Z.K),
                            e.Y36(_e.x),
                            e.Y36(Ze.O)
                        );
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-decommissioned-region-banner"]],
                        decls: 9,
                        vars: 5,
                        consts: [
                            ["loading", "lazy", 3, "src", "alt"],
                            [1, "title"],
                            [
                                "href",
                                "https://discover.luno.com/thank-you-singapore",
                            ],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.TgZ(0, "figure"),
                                e._UZ(1, "img", 0),
                                e.TgZ(2, "figcaption")(3, "p", 1),
                                e._uU(4),
                                e.qZA(),
                                e.TgZ(5, "small"),
                                e._uU(6),
                                e.qZA(),
                                e.TgZ(7, "a", 2),
                                e._uU(8),
                                e.qZA()()()),
                                2 & t &&
                                    (e.xp6(1),
                                    e.Q6J(
                                        "src",
                                        i.imageUrl,
                                        e.LSH
                                    )("alt", i.imageAlt),
                                    e.xp6(3),
                                    e.Oqu(i.title),
                                    e.xp6(2),
                                    e.Oqu(i.mainCopy),
                                    e.xp6(2),
                                    e.Oqu(i.callToActionText));
                        },
                        styles: [
                            'figure[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;margin:0 auto;width:91.6666666667%;max-width:1240px;background-color:var(--color-tertiary);border-radius:8px;color:var(--color-neutral-0);padding:10px}figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{scale:1.1}figure[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{width:100%}figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;height:100%;width:auto;max-width:60px;transition:all .3s ease;scale:1}figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-left:90px}figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:0;font-size:20px}figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-bottom:10px}figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-neutral-0);transition:all .3s ease;position:relative;width:-moz-fit-content;width:fit-content}figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";width:0;height:1px;bottom:-3px;left:0;background-color:var(--color-neutral-0);position:absolute;transition:all .3s ease}',
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            function wo(n, r) {
                1 & n && e._UZ(0, "luno-decommissioned-region-banner");
            }
            function Fo(n, r) {
                if ((1 & n && e._UZ(0, "luno-testimonials", 13), 2 & n)) {
                    const t = r.ngIf,
                        i = e.oxw().ngIf;
                    e.Q6J(
                        "testimonialTitles",
                        null == i ? null : i.testimonials
                    )("testimonials", t);
                }
            }
            function Bo(n, r) {
                if (
                    (1 & n && e._UZ(0, "luno-crypto-education-block", 14),
                    2 & n)
                ) {
                    const t = r.ngIf,
                        i = e.oxw().ngIf;
                    e.Q6J("education", i.education)("cryptoEducationCards", t);
                }
            }
            function Go(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "main", 1),
                        e.YNc(
                            1,
                            wo,
                            1,
                            0,
                            "luno-decommissioned-region-banner",
                            2
                        ),
                        e._UZ(2, "header", 3)(3, "luno-steps", 4)(
                            4,
                            "luno-billboard",
                            5
                        ),
                        e.YNc(5, Fo, 1, 2, "luno-testimonials", 6),
                        e.ALo(6, "async"),
                        e._UZ(7, "luno-features", 7),
                        e.YNc(8, Bo, 1, 2, "luno-crypto-education-block", 8),
                        e.ALo(9, "async"),
                        e.TgZ(10, "section", 9)(11, "h1", 10),
                        e.SDv(12, 11),
                        e.qZA(),
                        e._UZ(13, "luno-accordion", 12),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = r.ngIf,
                        i = e.oxw();
                    e.xp6(1),
                        e.Q6J("ngIf", i.isSingapore),
                        e.xp6(1),
                        e.Q6J("heroConfig", null == t ? null : t.hero),
                        e.xp6(1),
                        e.Q6J("stepCards", null == t ? null : t.stepCards),
                        e.xp6(1),
                        e.Q6J("whyLuno", null == t ? null : t.whyLuno),
                        e.xp6(1),
                        e.Q6J("ngIf", e.lcZ(6, 10, i.testimonials$)),
                        e.xp6(2),
                        e.Q6J("featureConfig", null == t ? null : t.features),
                        e.xp6(1),
                        e.Q6J("ngIf", e.lcZ(9, 12, i.educationContent$)),
                        e.xp6(2),
                        e.Udp("background-color", i.faqBackground),
                        e.xp6(3),
                        e.Q6J("accordionConfig", null == t ? null : t.faqData);
                }
            }
            let Vn = (() => {
                class n {
                    constructor(t, i, C, A, U) {
                        (this.colourService = t),
                            (this.homepageDataService = i),
                            (this.route = C),
                            (this.websiteBannerService = A),
                            (this.websiteInfoService = U),
                            (this.homepage$ = this.homepageDataService.data$),
                            (this.educationContent$ = this.homepageDataService.educationContent$),
                            (this.testimonials$ = this.homepageDataService.testimonialContent$),
                            (this.isProd = !1),
                            (this.untilDestroyed = new Dt.xQ()),
                            (this.isSingapore = !1),
                            (this.isProd = this.websiteInfoService.isProd);
                    }
                    ngOnInit() {
                        this.route.params
                            .pipe((0, Mt.R)(this.untilDestroyed))
                            .subscribe((t) => {
                                const i = this.websiteInfoService.createLocaleFromUrl(
                                    t.lang,
                                    t.country
                                );
                                this.homepageDataService.setupHomepage(i),
                                    this.websiteBannerService.maybeShowRegionSwitchBanner();
                            }),
                            (this.faqBackground = this.colourService.neutral0),
                            (this.projectBaseUrl = this.websiteInfoService.projectBaseUrl),
                            this.checkIfIsSingapore();
                    }
                    checkIfIsSingapore() {
                        "sg" === this.websiteInfoService.customerCountry &&
                            (this.isSingapore = !0);
                    }
                    ngOnDestroy() {
                        this.untilDestroyed.next(),
                            this.untilDestroyed.complete();
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(
                            e.Y36(Jt.K),
                            e.Y36(vn),
                            e.Y36(w.gz),
                            e.Y36(Sn),
                            e.Y36(_e.x)
                        );
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-home-v4"]],
                        decls: 2,
                        vars: 3,
                        consts: function () {
                            let r;
                            return (
                                (r = $localize`:Component\: HeadingâŸ8db253c0a29b5f46dd1ed8f52bdce7b2db5f0f06âŸ1608965556513237077:Frequently asked questions`),
                                [
                                    [
                                        "class",
                                        "home custom-home-typography home_v4",
                                        4,
                                        "ngIf",
                                    ],
                                    [
                                        1,
                                        "home",
                                        "custom-home-typography",
                                        "home_v4",
                                    ],
                                    [4, "ngIf"],
                                    ["luno-hero", "", 3, "heroConfig"],
                                    [3, "stepCards"],
                                    [3, "whyLuno"],
                                    [
                                        3,
                                        "testimonialTitles",
                                        "testimonials",
                                        4,
                                        "ngIf",
                                    ],
                                    [3, "featureConfig"],
                                    [
                                        3,
                                        "education",
                                        "cryptoEducationCards",
                                        4,
                                        "ngIf",
                                    ],
                                    [1, "faq-section"],
                                    [
                                        "i18nExtended",
                                        "",
                                        1,
                                        "faq-heading",
                                        "mat-title",
                                    ],
                                    r,
                                    [3, "accordionConfig"],
                                    [3, "testimonialTitles", "testimonials"],
                                    [3, "education", "cryptoEducationCards"],
                                ]
                            );
                        },
                        template: function (t, i) {
                            1 & t &&
                                (e.YNc(0, Go, 14, 14, "main", 0),
                                e.ALo(1, "async")),
                                2 & t &&
                                    e.Q6J("ngIf", e.lcZ(1, 1, i.homepage$));
                        },
                        dependencies: [
                            yn.Z,
                            g.O5,
                            Rn,
                            mo,
                            Io,
                            Lo,
                            Mo,
                            Uo,
                            bo,
                            We.y,
                            g.Ov,
                        ],
                        styles: [
                            "main.home[_ngcontent-%COMP%]{padding:15px 0 0;margin:0;border:0;background-color:#fff}main.home[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0}main.home[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:15px 0;width:91.6666666667%;max-width:1240px;margin:0 auto}@media screen and (min-width: 1150px){main.home[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:15px 0 56px}}main.home[_ngcontent-%COMP%]   .faq-heading[_ngcontent-%COMP%]{text-align:center}main.home[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]{padding-bottom:40px;width:91.6666666667%;max-width:1240px;margin:auto}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            var Zn = o(1031),
                Mn = o(3022),
                ko = o(5502);
            const se = (n) => (r) => {
                    if (!r?.length) return null;
                    let t = r[0].path;
                    const i = [r[0]];
                    if (r.length > 1)
                        for (let C = 1; C < r.length; C++)
                            t = `${t}/${r[C].path}`;
                    if (r[0].path === n)
                        return {
                            consumed: i,
                            posParams: { path: new w.bq(t, {}) },
                        };
                    if (r.length < 2) return null;
                    if (r[1].path === n) {
                        const C = (function Ho(n) {
                            return !!n && !!n.match(/^(en|en-us|ms-my|fr|id)$/);
                        })(r[0].path)
                            ? r[0].path
                            : "";
                        if (((t = r[1].path), i.push(r[1]), r.length > 2))
                            for (let A = 2; A < r.length; A++)
                                t = `${t}/${r[A].path}`;
                        return {
                            consumed: i,
                            posParams: {
                                lang: new w.bq(C, {}),
                                path: new w.bq(t, {}),
                            },
                        };
                    }
                    return null;
                },
                Ko = [
                    {
                        path: "",
                        component: Vn,
                        canActivate: [
                            (() => {
                                class n {
                                    constructor(t, i) {
                                        (this.cookieService = t),
                                            (this.router = i);
                                    }
                                    canActivate() {
                                        return (
                                            !this.cookieService.check(Mn.r5) ||
                                            !this.cookieService.get(Mn.r5) ||
                                            this.router.parseUrl(
                                                this.cookieService.get(Mn.r5)
                                            )
                                        );
                                    }
                                }
                                return (
                                    (n.ɵfac = function (t) {
                                        return new (t || n)(
                                            e.LFG(ko.N),
                                            e.LFG(w.F0)
                                        );
                                    }),
                                    (n.ɵprov = e.Yz7({
                                        token: n,
                                        factory: n.ɵfac,
                                        providedIn: "root",
                                    })),
                                    n
                                );
                            })(),
                        ],
                    },
                    { path: "en-US/business", redirectTo: "en-US" },
                    { path: "en-US/exchange", redirectTo: "en-US" },
                    { path: "fr/exchange", redirectTo: "fr" },
                    { path: "en-US/developers", redirectTo: "en-US" },
                    {
                        matcher: (n) => {
                            if (!n?.length) return { consumed: n };
                            const r = Object.values(d.B).some(
                                (i) => i === n[0].path
                            );
                            return ut[n[0].path] || r
                                ? 1 === n.length
                                    ? {
                                          consumed: n,
                                          posParams: {
                                              lang: new w.bq(n[0].path, {}),
                                          },
                                      }
                                    : 2 === n.length &&
                                      wt[n[1].path.toLocaleLowerCase()]
                                    ? {
                                          consumed: n,
                                          posParams: {
                                              lang: new w.bq(
                                                  n[0].path.toLocaleLowerCase(),
                                                  {}
                                              ),
                                              country: new w.bq(
                                                  n[1].path.toLocaleLowerCase(),
                                                  {}
                                              ),
                                          },
                                      }
                                    : null
                                : null;
                        },
                        component: Vn,
                    },
                    {
                        matcher: se("bundles"),
                        loadChildren: () =>
                            Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_bundles_bundles_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 3283))
                                .then((n) => n.BundlesModule),
                    },
                    {
                        matcher: se("staking"),
                        loadChildren: () =>
                            Promise.all([
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_staking_staking_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 9907))
                                .then((n) => n.StakingModule),
                        canActivate: [In],
                    },
                    {
                        matcher: se("about"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_about_about_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 6938))
                                .then((n) => n.AboutModule),
                    },
                    {
                        matcher: se("business"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_business_business_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 6061))
                                .then((n) => n.BusinessModule),
                    },
                    {
                        matcher: se("careers"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_careers_careers_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 3508))
                                .then((n) => n.CareersModule),
                    },
                    {
                        matcher: se("manifesto"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e(
                                    "projects_website_src_app_containers_manifesto_manifesto_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 4570))
                                .then((n) => n.ManifestoModule),
                    },
                    {
                        matcher: se("countries"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_countries_countries_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 17))
                                .then((n) => n.CountriesModule),
                    },
                    {
                        matcher: se("developers"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_developers_developers_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 7471))
                                .then((n) => n.DevelopersModule),
                    },
                    {
                        matcher: se("exchange"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_exchange_exchange_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 780))
                                .then((n) => n.ExchangeModule),
                    },
                    {
                        matcher: se("features"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_features_features_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 5911))
                                .then((n) => n.FeaturesModule),
                    },
                    {
                        matcher: se("countrylist"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_country-list_country-list_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 9719))
                                .then((n) => n.CountryListModule),
                    },
                    {
                        matcher: se("proof-of-reserves"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_proof-of-reserves_proof-of-reserves_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 9961))
                                .then((n) => n.ProofOfReservesModule),
                    },
                    {
                        path: "en-US/legal/privacy",
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e(
                                    "default-projects_common_src_lib_components_partials_header_header_component_ts-projects_commo-893bbb"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_legal_en_privacy-policy_privacy-policy-en_routing_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 5786))
                                .then((n) => n.PrivacyPolicyEnRoutingModule),
                    },
                    {
                        path: "en/legal/privacy",
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e(
                                    "default-projects_common_src_lib_components_partials_header_header_component_ts-projects_commo-893bbb"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_legal_en_privacy-policy_privacy-policy-en_routing_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 5786))
                                .then((n) => n.PrivacyPolicyEnRoutingModule),
                    },
                    {
                        path: "fr/legal/privacy",
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e(
                                    "default-projects_common_src_lib_components_partials_header_header_component_ts-projects_commo-893bbb"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_legal_fr_privacy-policy_privacy-policy-fr_routing_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 370))
                                .then((n) => n.PrivacyPolicyFrRoutingModule),
                    },
                    {
                        path: "id/legal/privacy",
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e(
                                    "default-projects_common_src_lib_components_partials_header_header_component_ts-projects_commo-893bbb"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_legal_id_privacy-policy_privacy-policy-id_routing_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 216))
                                .then((n) => n.PrivacyPolicyIdRoutingModule),
                    },
                    {
                        path: "ms-MY/legal/privacy",
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e(
                                    "default-projects_common_src_lib_components_partials_header_header_component_ts-projects_commo-893bbb"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_legal_my_privacy-policy_privacy-policy-my_routing_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 7005))
                                .then((n) => n.PrivacyPolicyMyRoutingModule),
                    },
                    {
                        matcher: se("legal"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e(
                                    "default-projects_common_src_lib_components_partials_header_header_component_ts-projects_commo-893bbb"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_legal_legal-routerv2_legal-routerv2_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 5001))
                                .then((n) => n.LegalRouterv2Module),
                    },
                    {
                        path: "page-not-found",
                        loadChildren: () =>
                            o
                                .e(
                                    "projects_website_src_app_containers_angular-load_angular-load_module_ts"
                                )
                                .then(o.bind(o, 1837))
                                .then((n) => n.AngularLoadModule),
                    },
                    {
                        matcher: se("press"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_press_press_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 2919))
                                .then((n) => n.PressModule),
                    },
                    {
                        matcher: se("price"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_price_price_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 2933))
                                .then((n) => n.PriceModule),
                        data: { variance: Zn.A.DEFAULT },
                    },
                    {
                        matcher: se("moya"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_price_price_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 2933))
                                .then((n) => n.PriceModule),
                        data: { variance: Zn.A.MOYA },
                    },
                    {
                        matcher: se("security"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_security_security_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 8931))
                                .then((n) => n.SecurityModule),
                    },
                    {
                        matcher: se("store"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_store_store_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 225))
                                .then((n) => n.StoreModule),
                    },
                    {
                        matcher: se("uk"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e(
                                    "projects_website_src_app_containers_landing-pages_great-britain_koko_koko_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 25))
                                .then((n) => n.KokoModule),
                    },
                    {
                        matcher: se("move"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e(
                                    "projects_website_src_app_containers_landing-pages_great-britain_gophercon_gophercon_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 8687))
                                .then((n) => n.GopherconModule),
                    },
                    {
                        matcher: se("invite"),
                        loadChildren: () =>
                            Promise.all([
                                o.e(
                                    "default-projects_common_src_lib_components_partials_call-to-action-banner_call-to-action-bann-21aece"
                                ),
                                o.e("common"),
                                o.e(
                                    "projects_website_src_app_containers_invite_invite_module_ts"
                                ),
                            ])
                                .then(o.bind(o, 2130))
                                .then((n) => n.InviteModule),
                    },
                    {
                        path: "**",
                        loadChildren: () =>
                            o
                                .e("common")
                                .then(o.bind(o, 3202))
                                .then((n) => n.PageNotFoundModule),
                    },
                ];
            let Vo = (() => {
                class n {}
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵmod = e.oAB({ type: n })),
                    (n.ɵinj = e.cJS({
                        imports: [
                            w.Bz.forRoot(Ko, {
                                initialNavigation: "enabledBlocking",
                                scrollPositionRestoration: "enabled",
                                anchorScrolling: "enabled",
                                scrollOffset: [0, 64],
                                onSameUrlNavigation: "reload",
                            }),
                            w.Bz,
                        ],
                    })),
                    n
                );
            })();
            var Qe = (() => {
                    return (
                        ((n = Qe || (Qe = {}))[(n.DESKTOP = 0)] = "DESKTOP"),
                        (n[(n.TABLET = 1)] = "TABLET"),
                        (n[(n.MOBILE = 2)] = "MOBILE"),
                        Qe
                    );
                    var n;
                })(),
                Wt = (() => {
                    return (
                        ((n = Wt || (Wt = {})).BUY_SUCCESS = "buy_success"),
                        (n.BUY_CANCELLED = "buy_cancelled"),
                        (n.SELL_SUCCESS = "sell_success"),
                        (n.SELL_CANCELLED = "sell_cancelled"),
                        (n.SEND_SUCCESS = "send_success"),
                        (n.SEND_CANCELLED = "send_cancelled"),
                        (n.VERIFY_PHONE_SUCCESS = "verfiy_phone_success"),
                        (n.SIGNUP_SUCCESS = "signup_success"),
                        (n.VERIFY_EMAIL_SUCCESS = "verify_email_success"),
                        (n.LOGIN = "login"),
                        (n.LOGOUT = "logout"),
                        Wt
                    );
                    var n;
                })();
            let Zo = (() => {
                class n {
                    constructor(t, i) {
                        (this.cookiePreferencesService = t),
                            (this.windowRef = i),
                            (this.windowRef.nativeWindow.dataLayer =
                                this.windowRef.nativeWindow.dataLayer || []);
                    }
                    pushEvent(t) {
                        this.pushTag({ event: t });
                    }
                    pushRevenueEvent(t, i) {
                        this.pushTag({ event: t, rval: i });
                    }
                    pushLoginEvent(t) {
                        this.pushTag({ event: Wt.LOGIN, user_id: t });
                    }
                    pushLogoutEvent() {
                        this.pushTag({ event: Wt.LOGOUT });
                    }
                    pushOnDataLayer(t) {
                        this.getDataLayer().push(t);
                    }
                    getDataLayer() {
                        return this.windowRef.nativeWindow.dataLayer;
                    }
                    addGtmToDom(t) {
                        this.cookiePreferencesService.preferences$.subscribe(
                            (i) => {
                                !i.marketing || this.loadScript(t);
                            }
                        );
                    }
                    loadScript(t) {
                        if (!t || !Object.keys(t).length)
                            return void ye().notify("No GTM config received");
                        if (this.isLoaded()) return;
                        const i = `https://www.googletagmanager.com/gtm.js?id=${t.environmentId}&gtm_auth=${t.auth}&gtm_preview=${t.preview}&gtm_cookies_win=x`,
                            C = document.createElement("script");
                        (C.id = n.SCRIPT_ID),
                            (C.async = !0),
                            (C.src = i),
                            document.head.insertBefore(
                                C,
                                document.head.firstChild
                            );
                        const A = document.createElement("iframe");
                        A.setAttribute("src", i),
                            (A.style.width = "0"),
                            (A.style.height = "0"),
                            (A.style.display = "none"),
                            (A.style.visibility = "hidden");
                        const U = document.createElement("noscript");
                        (U.id = n.NO_SCRIPT_ID),
                            U.appendChild(A),
                            document.body.insertBefore(
                                U,
                                document.body.firstChild
                            ),
                            this.pushOnDataLayer({
                                "gtm.start": new Date().getTime(),
                                event: "gtm.js",
                            });
                    }
                    pushTag(t) {
                        !this.isLoaded() || this.pushOnDataLayer(t);
                    }
                    isLoaded() {
                        return !!document.getElementById(n.SCRIPT_ID);
                    }
                }
                return (
                    (n.SCRIPT_ID = "GTMscript"),
                    (n.NO_SCRIPT_ID = "GTMiframe"),
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.LFG(_t.L), e.LFG(Ve.X));
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            const Jo = new e.OlP("MPARTICLE_CONFIG");
            let $o = (() => {
                class n {
                    constructor(t, i, C, A) {
                        (this.commonInfoService = t),
                            (this.cookiePreferencesService = i),
                            (this.environmentService = C),
                            (this.mParticleConfig = A),
                            (this.shouldTrack = !1),
                            this.cookiePreferencesService.preferences$.subscribe(
                                (U) => {
                                    this.shouldTrack = U.performance;
                                }
                            );
                    }
                    login() {
                        this.commonInfoService.isAuthenticated$
                            .pipe((0, rt.q)(1))
                            .subscribe((t) => {
                                t
                                    ? mParticle.Identity.login({
                                          userIdentities: {
                                              email: this.commonInfoService
                                                  .userInfo?.email,
                                              customerid: this.commonInfoService.userInfo?.userId.toString(),
                                          },
                                      })
                                    : this.logout();
                            });
                    }
                    addmParticleToDom() {
                        if (!this.shouldTrack) return;
                        const t = document.createElement("script");
                        (t.async = !0),
                            (t.type = "text/javascript"),
                            t.append(
                                `window.mParticle = {config: {isDevelopmentMode: ${!this.environmentService.isProd()}, dataPlan: {planId: '${
                                    this.mParticleConfig.planId
                                }', planVersion: ${
                                    this.mParticleConfig.planVersion
                                }}}};`
                            ),
                            t.append(
                                `(\n        function(t){window.mParticle=window.mParticle||{};window.mParticle.EventType={Unknown:0,Navigation:1,Location:2,Search:3,Transaction:4,UserContent:5,UserPreference:6,Social:7,Other:8};window.mParticle.eCommerce={Cart:{}};window.mParticle.Identity={};window.mParticle.config=window.mParticle.config||{};window.mParticle.config.rq=[];window.mParticle.config.snippetVersion=2.3;window.mParticle.ready=function(t){window.mParticle.config.rq.push(t)};var e=["endSession","logError","logBaseEvent","logEvent","logForm","logLink","logPageView","setSessionAttribute","setAppName","setAppVersion","setOptOut","setPosition","startNewSession","startTrackingLocation","stopTrackingLocation"];var o=["setCurrencyCode","logCheckout"];var i=["identify","login","logout","modify"];e.forEach(function(t){window.mParticle[t]=n(t)});o.forEach(function(t){window.mParticle.eCommerce[t]=n(t,"eCommerce")});i.forEach(function(t){window.mParticle.Identity[t]=n(t,"Identity")});function n(e,o){return function(){if(o){e=o+"."+e}var t=Array.prototype.slice.call(arguments);t.unshift(e);window.mParticle.config.rq.push(t)}}var dpId,dpV,config=window.mParticle.config,env=config.isDevelopmentMode?1:0,dbUrl="?env="+env,dataPlan=window.mParticle.config.dataPlan;dataPlan&&(dpId=dataPlan.planId,dpV=dataPlan.planVersion,dpId&&(dpV&&(dpV<1||dpV>1e3)&&(dpV=null),dbUrl+="&plan_id="+dpId+(dpV?"&plan_version="+dpV:"")));var mp=document.createElement("script");mp.type="text/javascript";mp.async=true;mp.src=("https:"==document.location.protocol?"https://jssdkcdns":"http://jssdkcdn")+".mparticle.com/js/v2/"+t+"/mparticle.js" + dbUrl;var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(mp,c)}\n      )("${this.mParticleConfig.api_key}");`
                            ),
                            document.head.insertBefore(
                                t,
                                document.head.firstChild
                            );
                    }
                    logout() {
                        !this.shouldTrack ||
                            (this.isMparticleIdentityLoaded() &&
                                mParticle.Identity.getCurrentUser() &&
                                mParticle.Identity.getCurrentUser().isLoggedIn() &&
                                mParticle.Identity.logout());
                    }
                    syncUserAuthenticationStatus() {
                        if (!this.shouldTrack) return;
                        if (this.isMparticleIdentityLoaded())
                            return void this.login();
                        let t = 0;
                        const i = setInterval(() => {
                            ++t > 30
                                ? clearInterval(i)
                                : this.isMparticleIdentityLoaded() &&
                                  (this.login(), clearInterval(i));
                        }, 2e3);
                    }
                    isMparticleIdentityLoaded() {
                        return (
                            this.isMparticleDefined() &&
                            mParticle.Identity &&
                            mParticle.Identity.getCurrentUser
                        );
                    }
                    isMparticleDefined() {
                        return typeof mParticle < "u";
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(
                            e.LFG(ue.E),
                            e.LFG(_t.L),
                            e.LFG(at.L),
                            e.LFG(Jo, 8)
                        );
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            var Qo = o(7716);
            const J = [
                { countryCode: d.C.au },
                { countryCode: d.C.fr },
                { countryCode: d.C.eu },
                { countryCode: d.C.gb },
                { countryCode: d.C.id },
                { countryCode: d.C.it },
                { countryCode: d.C.my },
                { countryCode: d.C.ng },
                { countryCode: d.C.sg },
                { countryCode: d.C.ug },
                { countryCode: d.C.us },
                { countryCode: d.C.za },
                { countryCode: d.C.zm },
            ];
            var Re = o(6191);
            const V_aboutHeader_text = "About",
                V_accountHeader_text = "Account",
                V_api_text = "Luno API",
                V_bundles_text = "Bundles",
                V_business_text = "Business",
                V_chartAda_text = "Cardano price",
                V_chartAvax_text = "Avalanche price",
                V_chartBitcoin_text = "Bitcoin price",
                V_chartEthereum_text = "Ethereum price",
                V_chartLink_text = "Chainlink price",
                V_chartMatic_text = "Polygon price",
                V_chartSol_text = "Solana price",
                V_chartUniswap_text = "Uniswap price",
                V_coFounder_text = "Co-founder of",
                V_complaints_text = "Complaints policy",
                V_compliance_text = "Compliance information",
                V_complianceHeader_text = "Compliance",
                V_cookiepolicy_text = "Cookie Policy",
                V_discover_text = "Discover",
                V_exchange_text = "Exchange",
                V_features_text = "Features",
                V_fees_text = "Fees",
                V_helpCentre_text = "Help Centre",
                V_hiringprivacy_text = "Hiring privacy policy",
                V_legalHeader_text = "Legal",
                V_licenses_text = "Licenses and registrations",
                V_paia_text = "PAIA Manual",
                V_priceCharts_text = "Price charts",
                V_privacy_text = "Privacy policy",
                V_productsHeading_text = "Products",
                V_proofOfReserves_text = "Proof of Reserves",
                V_proofOfReservesHeader_text = "Reserves",
                V_protection_text = "Customer protection",
                V_resourcesHeading_text = "Resources",
                V_rewards_text = "Rewards and promotions",
                V_risks_text = "Risk warning",
                V_security_text = "Security",
                V_signIn_text = "Sign in",
                V_signOut_text = "Sign out",
                V_signUp_text = "Sign up",
                V_status_text = "Status",
                V_terms_text = "Terms of use",
                V_wallet_text = "Wallet",
                b_aboutHeader_text = "About",
                b_accountHeader_text = "Account",
                b_api_text = "Luno API",
                b_bundles_text = "Bundles",
                b_business_text = "Business",
                b_careers_text = "Careers",
                b_chartAda_text = "Cardano price",
                b_chartAvax_text = "Avalanche price",
                b_chartBitcoin_text = "Bitcoin price",
                b_chartEtherium_text = "Ethereum price",
                b_chartLink_text = "Chainlink price",
                b_chartMatic_text = "Polygon price",
                b_chartSol_text = "Solana price",
                b_chartUniswap_text = "Uniswap price",
                b_coFounder_text = "Co-founder of",
                b_company_text = "Company",
                b_complaints_text = "Complaints policy",
                b_compliance_text = "Compliance information",
                b_complianceHeader_text = "Compliance",
                b_cookiepolicy_text = "Cookie Policy",
                b_depositsAndWithdrawals_text = "Deposits and withdrawals",
                b_discover_text = "Discover",
                b_exchange_text = "Exchange",
                b_exchangeUse_text = "Using the exchange",
                b_features_text = "Features",
                b_fees_text = "Fees",
                b_gettingStarted_text = "Getting started",
                b_helpCentre_text = "Help Centre",
                b_helpHome_text = "Help Home",
                b_helpTopicsHeader_text = "Help topics",
                b_hiringprivacy_text = "Hiring privacy policy",
                b_home_text = "Home",
                b_languageHeader_text = "Language",
                b_legalHeader_text = "Legal",
                b_licenses_text = "Licenses and registrations",
                b_messages_text = "Your messages",
                b_mobileAboutHeader_text = "About",
                b_otherResources_text = "Other resources",
                b_press_text = "Press",
                b_pressKit_text = "Press Kit",
                b_priceCharts_text = "Price charts",
                b_privacy_text = "Privacy policy",
                b_productsHeading_text = "Products",
                b_proofOfReserves_text = "Proof of Reserves",
                b_proofOfReservesHeader_text = "Reserves",
                b_protection_text = "Customer protection",
                b_resourcesBitcoin_text = "Bitcoin price",
                b_resourcesHeading_text = "Resources",
                b_rewards_text = "Rewards and promotions",
                b_risks_text = "Risk warning",
                b_security_text = "Security",
                b_signIn_text = "Sign in",
                b_signOut_text = "Sign out",
                b_signUp_text = "Sign up",
                b_staking_text = "Staking",
                b_status_text = "Status",
                b_statusPage_text = "Luno status page",
                b_supportInbox_text = "Your support inbox",
                b_terms_text = "Terms of use",
                b_verification_text = "Identity verification",
                b_wallet_text = "Wallet",
                b_walletUse_text = "Using the wallet",
                b_website_text = "Luno website",
                Jn = (n, r, t = !1) => ({
                    iconUrl: {
                        activeIcon: `${n.staticAssetsUrl}/icons/sidenav/ic_fees_activated.svg`,
                        inactiveIcon: `${n.staticAssetsUrl}/icons/sidenav/ic_fees_inactive.svg`,
                    },
                    action: {
                        name: n.i18nService.translateText(V_fees_text),
                        url: `/${n.localeUrl}/countries`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                $n = (n, r, t = !1) => ({
                    matIcon: { name: "local_library", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(V_discover_text),
                        url: Ii(n.countryCode),
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                Un = (n, r, t = !1) => ({
                    matIcon: { name: "help", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(V_helpCentre_text),
                        url: `/help/${n.countryCode}/`,
                    },
                    activeForRoutes: ["help"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                Qn = (n, r, t = !1) => ({
                    matIcon: { name: "update", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(V_status_text),
                        url: "https://status.luno.com/",
                    },
                    activeForRoutes: ["status"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                jn = (n, r, t = !1) => ({
                    iconUrl: {
                        activeIcon: `${n.staticAssetsUrl}/v3/icons/sidenav/highlight/reserves.png`,
                    },
                    action: {
                        name: n.i18nService.translateText(
                            V_proofOfReserves_text
                        ),
                        url: `/${n.localeUrl}/proof-of-reserves`,
                    },
                    activeForRoutes: ["/proof-of-reserves"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                zn = (n, r, t = !1) => ({
                    matIcon: { name: "person_outline", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(V_signUp_text),
                        url: `${window.location.origin}/${n.localeUrl}/signup`,
                        style: pe.gw3.PRIMARY,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                Xn = (n, r, t = !1) => ({
                    matIcon: { name: "person", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(V_signIn_text),
                        url: `${window.location.origin}/${n.localeUrl}/login`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                qn = (n, r, t = !1) => ({
                    iconUrl: {
                        activeIcon: `${n.staticAssetsUrl}/icons/sidenav/ic_signout_activated.svg`,
                        inactiveIcon: `${n.staticAssetsUrl}/icons/sidenav/ic_signout_inactive.svg`,
                    },
                    action: {
                        name: n.i18nService.translateText(V_signOut_text),
                        url: `${window.location.origin}/logout`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                eo = (n, r, t = !1) => ({
                    iconUrl: {
                        activeIcon: `${n.staticAssetsUrl}/v3/icons/sidenav/coins/bitcoin.svg`,
                    },
                    action: {
                        name: n.i18nService.translateText(V_chartBitcoin_text),
                        url: `/${n.localeUrl}/price/BTC`,
                    },
                    activeForRoutes: ["/price/BTC"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                jo = (n, r, t = !1) => ({
                    iconUrl: {
                        activeIcon: `${n.staticAssetsUrl}/v3/icons/sidenav/coins/ethereum.svg`,
                    },
                    action: {
                        name: n.i18nService.translateText(V_chartEthereum_text),
                        url: `/${n.localeUrl}/price/ETH`,
                    },
                    activeForRoutes: ["/price/ETH"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                zo = (n, r, t = !1) => ({
                    iconUrl: {
                        activeIcon: `${n.staticAssetsUrl}/v3/icons/sidenav/coins/uniswap.svg`,
                    },
                    action: {
                        name: n.i18nService.translateText(V_chartUniswap_text),
                        url: `/${n.localeUrl}/price/UNI`,
                    },
                    activeForRoutes: ["/price/UNI"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                Xo = (n, r, t = !1) => ({
                    iconUrl: {
                        activeIcon: `${n.staticAssetsUrl}/v3/icons/sidenav/coins/chainlink.svg`,
                    },
                    action: {
                        name: n.i18nService.translateText(V_chartLink_text),
                        url: `/${n.localeUrl}/price/LINK`,
                    },
                    activeForRoutes: ["/price/LINK"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                qo = (n, r, t = !1) => ({
                    iconUrl: {
                        activeIcon: `${n.staticAssetsUrl}/v3/icons/sidenav/coins/cardano.svg`,
                    },
                    action: {
                        name: n.i18nService.translateText(V_chartAda_text),
                        url: `/${n.localeUrl}/price/ADA`,
                    },
                    activeForRoutes: ["/price/ADA"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                ei = (n, r, t = !1) => ({
                    iconUrl: {
                        activeIcon: `${n.staticAssetsUrl}/v3/icons/sidenav/coins/solana.svg`,
                    },
                    action: {
                        name: n.i18nService.translateText(V_chartSol_text),
                        url: `/${n.localeUrl}/price/SOL`,
                    },
                    activeForRoutes: ["/price/SOL"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                ti = (n, r, t = !1) => ({
                    iconUrl: {
                        activeIcon: `${n.staticAssetsUrl}/v3/icons/sidenav/coins/avalanche.svg`,
                    },
                    action: {
                        name: n.i18nService.translateText(V_chartAvax_text),
                        url: `/${n.localeUrl}/price/AVAX`,
                    },
                    activeForRoutes: ["/price/AVAX"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                ni = (n, r, t = !1) => ({
                    iconUrl: {
                        activeIcon: `${n.staticAssetsUrl}/v3/icons/sidenav/coins/polygon.svg`,
                    },
                    action: {
                        name: n.i18nService.translateText(V_chartMatic_text),
                        url: `/${n.localeUrl}/price/MATIC`,
                    },
                    activeForRoutes: ["/price/MATIC"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                bn = (n, r, t = !1) => ({
                    matIcon: { name: "phone_android", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(V_features_text),
                        url: `/${n.localeUrl}/features`,
                    },
                    activeForRoutes: ["/features"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                to = (n, r, t = !1) => ({
                    matIcon: {
                        name: "account_balance_wallet",
                        theme: "primary",
                    },
                    action: {
                        name: n.i18nService.translateText(V_wallet_text),
                        url: `/${n.localeUrl}/wallet`,
                    },
                    activeForRoutes: ["/wallet"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                oi = (n, r, t = !1) => ({
                    matIcon: { name: "sell", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(V_fees_text),
                        url: `/${n.localeUrl}/countries`,
                    },
                    activeForRoutes: ["/countries"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                wn = (n, r, t = !1) => ({
                    matIcon: { name: "bar_chart", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(V_exchange_text),
                        url: `/${n.localeUrl}/exchange`,
                    },
                    activeForRoutes: ["/exchange"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                no = (n, r, t = !1) => ({
                    matIcon: { name: "work", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(V_business_text),
                        url: `/${n.localeUrl}/business`,
                    },
                    activeForRoutes: ["/business"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                ii = (n, r, t = !1) => ({
                    matIcon: { name: "cloud", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(V_api_text),
                        url: `/${n.localeUrl}/developers`,
                    },
                    activeForRoutes: ["/developers"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                ai = (n, r, t = !1) => ({
                    iconUrl: {
                        activeIcon: `${n.webAssetUrl}/sidenav-icons/products/bundles.svg`,
                    },
                    action: {
                        name: n.i18nService.translateText(V_bundles_text),
                        url: `/${n.localeUrl}/bundles`,
                    },
                    activeForRoutes: ["/bundles"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                oo = (n, r, t = !1) => ({
                    matIcon: { name: "maps_home_work", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(b_company_text),
                        url: `/${n.localeUrl}/about`,
                    },
                    activeForRoutes: ["/about"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                io = (n, r, t = !1) => ({
                    matIcon: { name: "groups", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(b_careers_text),
                        url: "/careers",
                    },
                    activeForRoutes: ["/careers"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                ri = (n, r, t = !1) => ({
                    matIcon: { name: "newspaper", theme: "primary" },
                    action: {
                        name: n.i18nService.translateText(b_press_text),
                        url: `/${n.localeUrl}/press`,
                    },
                    activeForRoutes: ["/press"],
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                si = (n, r, t = !1) => ({
                    action: { url: "https://asosiasiblockchain.co.id" },
                    iconUrl: {
                        inactiveIcon: `${n.webAssetUrl}/website/common/img/asosiasi.png`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                ci = (n, r, t = !1) => {
                    const i = (function fi(n) {
                        const r = [
                            d.C.au,
                            d.C.my,
                            d.C.ng,
                            d.C.sg,
                            d.C.ug,
                            d.C.za,
                            d.C.zm,
                            d.C.us,
                        ];
                        return [d.B.msMY, Re.s.fr, Re.s.id].includes(
                            n.localeUrl
                        )
                            ? "terms"
                            : n.countryCode && r.includes(n.countryCode)
                            ? `terms-of-use-${n.countryCode}`
                            : "terms";
                    })(n);
                    return {
                        action: {
                            name: n.i18nService.translateText(V_terms_text),
                            url: `/${n.localeUrl}/legal/${i}`,
                        },
                        allowedCountries: r,
                        requiresAuth: t,
                    };
                },
                ao = (n, r, t = !1) => ({
                    action: {
                        name: n.i18nService.translateText(V_privacy_text),
                        url: `/${n.localeUrl}/legal/privacy`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                li = (n, r, t = !1) => ({
                    action: {
                        name: n.i18nService.translateText(V_hiringprivacy_text),
                        url: `/${n.localeUrl}/legal/hiring`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                ui = (n, r, t = !1) => ({
                    action: {
                        name: n.i18nService.translateText(V_cookiepolicy_text),
                        url: `/${n.localeUrl}/legal/cookie-policy`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                _i = (n, r, t = !1) => ({
                    action: {
                        name: n.i18nService.translateText(V_rewards_text),
                        url: `/${n.localeUrl}/legal/rewards-and-promotions`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                pi = (n, r, t = !1) => ({
                    action: {
                        name: n.i18nService.translateText(V_licenses_text),
                        url: `/${n.localeUrl}/legal/licenses`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                mi = (n, r, t = !1) => ({
                    action: {
                        name: n.i18nService.translateText(V_paia_text),
                        url: `${n.staticAssetsUrl}/legal/PAIA-Manual.pdf`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                di = (n, r, t = !1) => ({
                    action: {
                        name: n.i18nService.translateText(V_security_text),
                        url: `/${n.localeUrl}/security`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                gi = (n, r, t = !1) => ({
                    action: {
                        name: n.i18nService.translateText(V_compliance_text),
                        url: `/${n.localeUrl}/legal/compliance`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                hi = (n, r, t = !1) => ({
                    action: {
                        name: n.i18nService.translateText(V_protection_text),
                        url: `/${n.localeUrl}/legal/safe`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                Ci = (n, r, t = !1) => ({
                    action: {
                        name: n.i18nService.translateText(V_complaints_text),
                        url: `/${n.localeUrl}/legal/complaints`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                Ti = (n, r, t = !1) => ({
                    action: {
                        name: n.i18nService.translateText(V_risks_text),
                        url: `/${n.localeUrl}/legal/risks`,
                    },
                    allowedCountries: r,
                    requiresAuth: t,
                }),
                Ei = (n, r, t = !1, i) => ({
                    action: { name: i, url: `/${n.localeUrl}/price/BTC` },
                    hideOnMobile: !0,
                    activeForRoutes: ["/price/BTC"],
                    allowedCountries: r,
                    requiresAuth: t,
                });
            function Ii(n) {
                switch (n) {
                    case d.C.id:
                        return "https://discover.luno.com/id";
                    case d.C.my:
                        return "https://discover.luno.com/my";
                    case d.C.fr:
                        return "https://discover.luno.com/fr";
                    default:
                        return "https://discover.luno.com/";
                }
            }
            const ro = (n) => ({
                    heading: n.i18nService.translateText(V_aboutHeader_text),
                    navigationItems: [oo(n, J), io(n, J), ri(n, J)],
                }),
                Si = (n) => ({
                    navigationItems: [oo(n, J), io(n, J), Un(n, J)],
                }),
                Ni = (n) => ({
                    heading: n.i18nService.translateText(V_accountHeader_text),
                    navigationItems: [qn(n, J, !0)],
                }),
                Ai = (n) => ({
                    heading: n.i18nService.translateText(V_accountHeader_text),
                    navigationItems: [zn(n, J), Xn(n, J)],
                }),
                so = (n) => [qn(n, J, !0)],
                co = (n) => [Xn(n, J), zn(n, J)],
                Oi = (n) => ({
                    heading: n.i18nService.translateText(V_coFounder_text),
                    navigationItems: [si(n, [{ countryCode: d.C.id }])],
                }),
                vi = (n) => ({
                    heading: n.i18nService.translateText(
                        V_complianceHeader_text
                    ),
                    navigationItems: [
                        di(n, J),
                        gi(n, J),
                        hi(n, J),
                        Ci(n, J),
                        Ti(n, J),
                    ],
                }),
                yi = (n) => ({
                    heading: n.i18nService.translateText(V_legalHeader_text),
                    navigationItems: [
                        ci(n, J),
                        ao(n, J),
                        li(n, J),
                        ui(n, J),
                        _i(n, J),
                        pi(n, J),
                        mi(n, [{ countryCode: d.C.za }]),
                    ],
                }),
                Pi = (n) => ({
                    heading: n.i18nService.translateText(V_priceCharts_text),
                    navigationItems: [
                        eo(n, J),
                        jo(n, J),
                        zo(n, [
                            { countryCode: d.C.za },
                            { countryCode: d.C.ng },
                            { countryCode: d.C.my },
                            { countryCode: d.C.gb },
                            { countryCode: d.C.fr },
                            { countryCode: d.C.id },
                            { countryCode: d.C.au },
                            { countryCode: d.C.eu },
                            { countryCode: d.C.ug },
                            { countryCode: d.C.sg },
                        ]),
                        Xo(n, [
                            { countryCode: d.C.za },
                            { countryCode: d.C.ng },
                            { countryCode: d.C.my },
                            { countryCode: d.C.gb },
                            { countryCode: d.C.fr },
                            { countryCode: d.C.id },
                            { countryCode: d.C.au },
                            { countryCode: d.C.eu },
                            { countryCode: d.C.ug },
                            { countryCode: d.C.sg },
                        ]),
                        qo(n, [
                            { countryCode: d.C.za },
                            { countryCode: d.C.ng },
                            { countryCode: d.C.my },
                            { countryCode: d.C.gb },
                            { countryCode: d.C.fr },
                            { countryCode: d.C.id },
                            { countryCode: d.C.au },
                            { countryCode: d.C.eu },
                            { countryCode: d.C.ug },
                            { countryCode: d.C.sg },
                        ]),
                        ei(n, [
                            { countryCode: d.C.za },
                            { countryCode: d.C.ng },
                            { countryCode: d.C.my },
                            { countryCode: d.C.gb },
                            { countryCode: d.C.fr },
                            { countryCode: d.C.id },
                            { countryCode: d.C.au },
                            { countryCode: d.C.eu },
                            { countryCode: d.C.ug },
                            { countryCode: d.C.sg },
                        ]),
                        ti(n, [
                            { countryCode: d.C.za },
                            { countryCode: d.C.ng },
                            { countryCode: d.C.my },
                            { countryCode: d.C.gb },
                            { countryCode: d.C.fr },
                            { countryCode: d.C.id },
                            { countryCode: d.C.au },
                            { countryCode: d.C.eu },
                            { countryCode: d.C.ug },
                        ]),
                        ni(n, []),
                    ],
                }),
                lo = (n) => ({
                    heading: n.i18nService.translateText(
                        V_productsHeading_text
                    ),
                    navigationItems: [
                        bn(n, J),
                        ai(n, [
                            { countryCode: d.C.ng },
                            { countryCode: d.C.za },
                        ]),
                        to(n, [
                            { countryCode: d.C.au },
                            { countryCode: d.C.eu },
                            { countryCode: d.C.gb },
                            { countryCode: d.C.id },
                            { countryCode: d.C.it },
                            { countryCode: d.C.my },
                            { countryCode: d.C.ng },
                            { countryCode: d.C.sg },
                            { countryCode: d.C.ug },
                            { countryCode: d.C.za },
                            { countryCode: d.C.zm },
                        ]),
                        oi(n, J),
                        wn(n, [
                            { countryCode: d.C.au },
                            { countryCode: d.C.eu },
                            { countryCode: d.C.gb },
                            { countryCode: d.C.id },
                            { countryCode: d.C.it },
                            { countryCode: d.C.my },
                            { countryCode: d.C.ng },
                            { countryCode: d.C.sg },
                            { countryCode: d.C.ug },
                            { countryCode: d.C.za },
                            { countryCode: d.C.zm },
                        ]),
                        no(n, [
                            { countryCode: d.C.au },
                            { countryCode: d.C.fr },
                            { countryCode: d.C.eu },
                            { countryCode: d.C.gb },
                            { countryCode: d.C.id },
                            { countryCode: d.C.it },
                            { countryCode: d.C.my },
                            { countryCode: d.C.ng },
                            { countryCode: d.C.sg },
                            { countryCode: d.C.ug },
                            { countryCode: d.C.za },
                            { countryCode: d.C.zm },
                        ]),
                        ii(n, [
                            { countryCode: d.C.au },
                            { countryCode: d.C.fr },
                            { countryCode: d.C.eu },
                            { countryCode: d.C.gb },
                            { countryCode: d.C.id },
                            { countryCode: d.C.it },
                            { countryCode: d.C.my },
                            { countryCode: d.C.ng },
                            { countryCode: d.C.sg },
                            { countryCode: d.C.ug },
                            { countryCode: d.C.za },
                            { countryCode: d.C.zm },
                        ]),
                    ],
                }),
                xi = (n) => ({
                    navigationItems: [
                        bn(n, J),
                        Jn(n, J),
                        wn(n, [
                            { countryCode: d.C.au },
                            { countryCode: d.C.eu },
                            { countryCode: d.C.gb },
                            { countryCode: d.C.id },
                            { countryCode: d.C.it },
                            { countryCode: d.C.my },
                            { countryCode: d.C.ng },
                            { countryCode: d.C.sg },
                            { countryCode: d.C.ug },
                            { countryCode: d.C.za },
                            { countryCode: d.C.zm },
                        ]),
                        no(n, [
                            { countryCode: d.C.au },
                            { countryCode: d.C.fr },
                            { countryCode: d.C.eu },
                            { countryCode: d.C.gb },
                            { countryCode: d.C.id },
                            { countryCode: d.C.it },
                            { countryCode: d.C.my },
                            { countryCode: d.C.ng },
                            { countryCode: d.C.sg },
                            { countryCode: d.C.ug },
                            { countryCode: d.C.za },
                            { countryCode: d.C.zm },
                        ]),
                        ao(n, J),
                    ],
                }),
                Ri = (n) => ({
                    heading: n.i18nService.translateText(
                        V_proofOfReservesHeader_text
                    ),
                    navigationItems: [jn(n, J)],
                }),
                Li = (n) => ({
                    heading: n.i18nService.translateText(
                        V_resourcesHeading_text
                    ),
                    navigationItems: [Jn(n, J), $n(n, J), Un(n, J), Qn(n, J)],
                }),
                Di = (n) => ({
                    heading: n.i18nService.translateText(
                        V_resourcesHeading_text
                    ),
                    navigationItems: [
                        eo(n, J),
                        jn(n, J),
                        $n(n, J),
                        Un(n, J),
                        Qn(n, J),
                    ],
                });
            let Ui = (() => {
                class n {
                    constructor(t, i, C, A) {
                        (this.i18n = t),
                            (this.localeService = i),
                            (this.commonInfoService = C),
                            (this.environmentService = A),
                            (this._sideNavigationGroupsSubject$ = new Ee.X(
                                null
                            )),
                            (this._footerNavigationGroupsSubject$ = new Ee.X(
                                null
                            )),
                            (this._topNavigationItemsSubject$ = new Ee.X(null)),
                            (this.customerCountry = d.C.gb),
                            (this.sideNavigationGroups$ = this._sideNavigationGroupsSubject$.asObservable()),
                            (this.footerNavigationGroups$ = this._footerNavigationGroupsSubject$.asObservable()),
                            (this.topNavigationItems$ = this._topNavigationItemsSubject$.asObservable()),
                            (this.navigation$ = (0, Qo.aj)([
                                this.topNavigationItems$,
                                this.sideNavigationGroups$,
                            ]).pipe(
                                (0, ge.U)(([U, $]) => ({
                                    navigationTop: {
                                        navigationItems: U || [],
                                        isFullWidth: this
                                            .navigationServiceConfig
                                            ?.isFullWidth,
                                    },
                                    navigationSide: {
                                        navigationGroups: $ || [],
                                    },
                                    webAssetsUrl: this.navigationServiceConfig
                                        ?.webAssetsUrl,
                                }))
                            ));
                    }
                    setupNavigation(t, i) {
                        (this.customerCountry = this.getCustomerCountry(!0)),
                            (this.navigationServiceConfig = t),
                            (this.btcPrice = i),
                            this.setupTopNavigation(t, i),
                            this.setupSideNavigation(t),
                            this.setupFooterNavigation(t);
                    }
                    updateBtcPrice(t) {
                        (this.btcPrice = t),
                            this.navigationServiceConfig &&
                                this.setupTopNavigation(
                                    this.navigationServiceConfig,
                                    t
                                );
                    }
                    toggleMobileNavigation(t) {
                        if (this.navigationServiceConfig) {
                            if (t)
                                return (
                                    this.setupMobileTopNavigation(
                                        {
                                            localeUrl: this.localeService
                                                .urlPath,
                                            countryCode: this.customerCountry,
                                            i18nService: this.i18n,
                                            webAssetUrl: this
                                                .navigationServiceConfig
                                                .staticAssetsPath,
                                        },
                                        this.navigationServiceConfig
                                            .isAuthenticated || !1
                                    ),
                                    void this.setupMobileFooterNavigation(
                                        this.navigationServiceConfig
                                    )
                                );
                            this.setupTopNavigation(
                                this.navigationServiceConfig,
                                this.btcPrice || ""
                            ),
                                this.setupFooterNavigation(
                                    this.navigationServiceConfig
                                );
                        }
                    }
                    setupSideNavigation(t) {
                        const i = [
                            this.filterNavigationGroup(Li, t),
                            this.filterNavigationGroup(Ri, t),
                            this.filterNavigationGroup(
                                t.isAuthenticated ? Ni : Ai,
                                t
                            ),
                            this.filterNavigationGroup(Pi, t),
                            this.filterNavigationGroup(lo, t),
                            this.filterNavigationGroup(ro, t),
                        ];
                        this._sideNavigationGroupsSubject$.next(i);
                    }
                    setupFooterNavigation(t) {
                        if (t.isMobile)
                            return void this.setupMobileFooterNavigation(t);
                        const i = [
                            this.filterNavigationGroup(ro, t),
                            this.filterNavigationGroup(Di, t),
                            this.filterNavigationGroup(lo, t),
                            this.filterNavigationGroup(yi, t),
                            this.filterNavigationGroup(vi, t),
                        ];
                        this.customerCountry === d.C.id &&
                            i.push(this.filterNavigationGroup(Oi, t)),
                            this._footerNavigationGroupsSubject$.next(i);
                    }
                    setupTopNavigation(t, i) {
                        const C = {
                            localeUrl: this.localeService.urlPath,
                            countryCode: this.customerCountry,
                            i18nService: this.i18n,
                            webAssetUrl: t.webAssetsUrl,
                            staticAssetsUrl: t.staticAssetsPath,
                        };
                        if (t.isMobile)
                            return void this.setupMobileTopNavigation(
                                C,
                                t.isAuthenticated || !1
                            );
                        const A = ((n, r) => ({
                                navigationItems: [
                                    Ei(n, J, !1, r),
                                    bn(n, J, !1),
                                    to(n, [
                                        { countryCode: d.C.au },
                                        { countryCode: d.C.fr },
                                        { countryCode: d.C.eu },
                                        { countryCode: d.C.gb },
                                        { countryCode: d.C.id },
                                        { countryCode: d.C.it },
                                        { countryCode: d.C.my },
                                        { countryCode: d.C.ng },
                                        { countryCode: d.C.sg },
                                        { countryCode: d.C.ug },
                                        { countryCode: d.C.za },
                                        { countryCode: d.C.zm },
                                    ]),
                                    wn(n, [
                                        { countryCode: d.C.au },
                                        { countryCode: d.C.eu },
                                        { countryCode: d.C.gb },
                                        { countryCode: d.C.id },
                                        { countryCode: d.C.it },
                                        { countryCode: d.C.my },
                                        { countryCode: d.C.ng },
                                        { countryCode: d.C.sg },
                                        { countryCode: d.C.ug },
                                        { countryCode: d.C.za },
                                        { countryCode: d.C.zm },
                                    ]),
                                ],
                            }))(C, i),
                            U = t.isAuthenticated ? so(C) : co(C),
                            te = this.filterNavigationGroup(
                                () => ({ navigationItems: A.navigationItems }),
                                t
                            ).navigationItems.concat(U),
                            le = this.removeNavigationItemIcon(te);
                        this._topNavigationItemsSubject$.next(le);
                    }
                    setupMobileTopNavigation(t, i) {
                        const C = i ? so(t) : co(t),
                            A = this.removeNavigationItemIcon(C);
                        this._topNavigationItemsSubject$.next(A);
                    }
                    setupMobileFooterNavigation(t) {
                        const i = [
                            this.filterNavigationGroup(Si, t),
                            this.filterNavigationGroup(xi, t),
                        ];
                        this._footerNavigationGroupsSubject$.next(i);
                    }
                    filterNavigationGroup(t, i) {
                        const A = i.isAuthenticated || !1,
                            U = t({
                                localeUrl: this.localeService.urlPath,
                                countryCode: this.customerCountry,
                                i18nService: this.i18n,
                                webAssetUrl: i.webAssetsUrl,
                                staticAssetsUrl: i.staticAssetsPath,
                            }),
                            $ = U.navigationItems.filter((te) => {
                                if (typeof te.allowedCountries > "u") return !1;
                                const le = te.allowedCountries.find(
                                    (Le) =>
                                        Le.countryCode === this.customerCountry
                                );
                                return (
                                    !!le &&
                                    (A || A === te.requiresAuth) &&
                                    (!le.onlyStaging ||
                                        this.environmentService.isStaging() ||
                                        this.environmentService.isDev())
                                );
                            });
                        return {
                            heading: U.heading,
                            navigationItems: $.map((te) => te),
                        };
                    }
                    removeNavigationItemIcon(t) {
                        return t.map(
                            (i) => (delete i.iconUrl, delete i.matIcon, i)
                        );
                    }
                    getCustomerCountry(t = !0) {
                        return t
                            ? this.mapLocaleToCountry(
                                  this.localeService.urlPath
                              )
                            : `${this.commonInfoService.navInfo?.loc.code}`.toLowerCase();
                    }
                    mapLocaleToCountry(t) {
                        const i = d.C.gb;
                        return t.includes("-")
                            ? (t.split("-")[1].toLowerCase() ?? null) || i
                            : "en" === t
                            ? `${this.commonInfoService.navInfo?.loc.code}`.toLocaleLowerCase() ||
                              i
                            : Object.values(d.C).includes(t.toString())
                            ? t
                            : i;
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(
                            e.LFG(Z.K),
                            e.LFG(Ze.O),
                            e.LFG(ue.E),
                            e.LFG(at.L)
                        );
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            var tn = (() => (
                    ((tn || (tn = {})).HELP_INBOX = "help-inbox"), tn
                ))(),
                me = o(4941),
                de = (() => {
                    return (
                        ((n = de || (de = {}))[(n.FACEBOOK = 0)] = "FACEBOOK"),
                        (n[(n.TWITTER = 1)] = "TWITTER"),
                        (n[(n.LINKEDIN = 2)] = "LINKEDIN"),
                        (n[(n.YOUTUBE = 3)] = "YOUTUBE"),
                        (n[(n.MEDIUM = 4)] = "MEDIUM"),
                        (n[(n.INSTAGRAM = 5)] = "INSTAGRAM"),
                        (n[(n.TELEGRAM = 6)] = "TELEGRAM"),
                        de
                    );
                    var n;
                })(),
                je = (() => {
                    return (
                        ((n = je || (je = {})).DEFAULT = "default"),
                        (n.SINGAPORE = "sg"),
                        (n.INDONESIA = "id"),
                        je
                    );
                    var n;
                })();
            function Fn(n, r, t) {
                const i = (function wi(n, r) {
                    if (!r) return null;
                    const t = r.join("(?!-)|"),
                        i = new RegExp(`/(${t})\\b`);
                    if (!n) return null;
                    const C = n.match(i);
                    return C ? C[1] : null;
                })(n, t);
                if (!i) return n;
                const C = new RegExp(`/${i}\\b`);
                return n.replace(C, `/${r}`);
            }
            const uo = {
                [je.DEFAULT]: [
                    {
                        action: {
                            id: de.TWITTER.toString(),
                            url: "https://twitter.com/LunoGlobal",
                            name: "Twitter",
                        },
                    },
                    {
                        action: {
                            id: de.YOUTUBE.toString(),
                            url:
                                "https://www.youtube.com/channel/UCdKv3ViymZkRiBPh2ogSnKA",
                            name: "YouTube",
                        },
                    },
                    {
                        action: {
                            id: de.LINKEDIN.toString(),
                            url: "https://www.linkedin.com/company/lunoglobal",
                            name: "LinkedIn",
                        },
                    },
                ],
                [je.SINGAPORE]: [
                    {
                        action: {
                            id: de.TWITTER.toString(),
                            url: "https://twitter.com/LunoGlobal",
                            name: "Twitter",
                        },
                    },
                    {
                        action: {
                            id: de.YOUTUBE.toString(),
                            url:
                                "https://www.youtube.com/channel/UCdKv3ViymZkRiBPh2ogSnKA",
                            name: "YouTube",
                        },
                    },
                    {
                        action: {
                            id: de.LINKEDIN.toString(),
                            url: "https://www.linkedin.com/company/lunoglobal",
                            name: "LinkedIn",
                        },
                    },
                    {
                        action: {
                            id: de.TELEGRAM.toString(),
                            url: "https://t.me/lunosingapore",
                            name: "Telegram",
                        },
                    },
                ],
                [je.INDONESIA]: [
                    {
                        action: {
                            id: de.INSTAGRAM.toString(),
                            url: "https://www.instagram.com/lunoindonesia",
                            name: "Instagram",
                        },
                    },
                    {
                        action: {
                            id: de.TWITTER.toString(),
                            url: "https://twitter.com/LunoGlobal",
                            name: "Twitter",
                        },
                    },
                    {
                        action: {
                            id: de.YOUTUBE.toString(),
                            url: "https://www.youtube.com/@LunoIndonesia",
                            name: "YouTube",
                        },
                    },
                    {
                        action: {
                            id: de.LINKEDIN.toString(),
                            url: "https://www.linkedin.com/company/lunoglobal",
                            name: "LinkedIn",
                        },
                    },
                    {
                        action: {
                            id: de.TELEGRAM.toString(),
                            url: "https://t.me/OfficialLunoIndonesia",
                            name: "Telegram",
                        },
                    },
                ],
            };
            let Fi = (() => {
                class n {
                    constructor(t, i, C, A, U) {
                        (this.commonInfoService = t),
                            (this.i18n = i),
                            (this.localeService = C),
                            (this.navigationLogicalService = A),
                            (this.environmentService = U),
                            (this.hideTradeSection = !1),
                            this.setCustomerCountry(!0),
                            (this.hideTradeSection =
                                this.hideTradeSection ||
                                this.customerCountry === d.C.us ||
                                this.customerCountry === d.C.fr);
                    }
                    getSideNavigationGroups(t) {
                        const i = [];
                        return (
                            i.push(this.getHomeNavigation(t.staticAssetsPath)),
                            i.push(
                                this.getResourcesNavigation(
                                    t.staticAssetsPath,
                                    !!t.isAuthenticated,
                                    !1,
                                    !1
                                )
                            ),
                            i.push(
                                this.getProofOfReservesNavigation(
                                    t.staticAssetsPath
                                )
                            ),
                            i.push(
                                this.getAccountNavigation(
                                    !!t.isAuthenticated,
                                    t.staticAssetsPath
                                )
                            ),
                            i.push(
                                this.getPriceChartsNavigation(
                                    t.staticAssetsPath
                                )
                            ),
                            i.push(this.getProductsNavigation(t.webAssetsUrl)),
                            i.push(
                                this.getAboutNavigation(t.staticAssetsPath, !1)
                            ),
                            i
                        );
                    }
                    getFooterNavigationGroups(t) {
                        return t?.webAssetsUrl && t.staticAssetsPath
                            ? [
                                  this.getCoFounderNavigation(
                                      t.preferredLocale || null,
                                      t.webAssetsUrl
                                  ),
                                  this.getAboutNavigation(
                                      t.staticAssetsPath,
                                      !1
                                  ),
                                  this.getResourcesNavigation(
                                      t.staticAssetsPath,
                                      !1,
                                      !0,
                                      !0
                                  ),
                                  this.getProductsNavigation(t.webAssetsUrl),
                                  this.getLegalNavigation(),
                                  this.getComplianceNavigation(),
                              ].filter(Boolean)
                            : [null];
                    }
                    getMobileFooterNavigationGroups(t) {
                        return [
                            this.getMobileAboutNavigation(t.staticAssetsPath),
                            this.getMobileProductsNavigation(),
                        ].filter(Boolean);
                    }
                    getPriceChartsItems(t) {
                        const i = {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/sidenav/coins/bitcoin.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_chartBitcoin_text
                                    ),
                                    url: `/${this.localeService.urlPath}/price/BTC`,
                                },
                                activeForRoutes: ["/price/BTC"],
                            },
                            C = {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/sidenav/coins/ethereum.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_chartEtherium_text
                                    ),
                                    url: `/${this.localeService.urlPath}/price/ETH`,
                                },
                                activeForRoutes: ["/price/ETH"],
                            },
                            A = {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/sidenav/coins/uniswap.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_chartUniswap_text
                                    ),
                                    url: `/${this.localeService.urlPath}/price/UNI`,
                                },
                                activeForRoutes: ["/price/UNI"],
                            },
                            U = {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/sidenav/coins/chainlink.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_chartLink_text
                                    ),
                                    url: `/${this.localeService.urlPath}/price/LINK`,
                                },
                                activeForRoutes: ["/price/LINK"],
                            },
                            $ = {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/sidenav/coins/cardano.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_chartAda_text
                                    ),
                                    url: `/${this.localeService.urlPath}/price/ADA`,
                                },
                                activeForRoutes: ["/price/ADA"],
                            },
                            te = {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/sidenav/coins/solana.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_chartSol_text
                                    ),
                                    url: `/${this.localeService.urlPath}/price/SOL`,
                                },
                                activeForRoutes: ["/price/SOL"],
                            },
                            le = {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/sidenav/coins/avalanche.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_chartAvax_text
                                    ),
                                    url: `/${this.localeService.urlPath}/price/AVAX`,
                                },
                                activeForRoutes: ["/price/AVAX"],
                            },
                            Le = {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/sidenav/coins/polygon.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_chartMatic_text
                                    ),
                                    url: `/${this.localeService.urlPath}/price/MATIC`,
                                },
                                activeForRoutes: ["/price/MATIC"],
                            },
                            st = new Map([
                                [me.NE.BTC, i],
                                [me.NE.ETH, C],
                                [me.NE.ADA, $],
                                [me.NE.LINK, U],
                                [me.NE.UNI, A],
                                [me.NE.SOL, te],
                                [me.NE.AVAX, le],
                                [me.NE.MATIC_POLYGON, Le],
                            ]),
                            Gn = [];
                        return (
                            [
                                me.NE.BTC,
                                me.NE.ETH,
                                me.NE.ADA,
                                me.NE.LINK,
                                me.NE.SOL,
                                me.NE.UNI,
                                me.NE.AVAX,
                                me.NE.MATIC_POLYGON,
                            ].forEach((kn) => {
                                if (
                                    this.commonInfoService?.allowedCurrencies.includes(
                                        kn
                                    )
                                ) {
                                    const Wn = st.get(kn);
                                    if (!Wn) return;
                                    Gn.push(Wn);
                                }
                            }),
                            Gn
                        );
                    }
                    getPriceChartsNavigation(t) {
                        return {
                            heading: this.i18n.translateText(
                                b_priceCharts_text
                            ),
                            navigationItems: this.getPriceChartsItems(t),
                        };
                    }
                    getResourcesItems() {
                        return [
                            {
                                matIcon: {
                                    name: "local_library",
                                    theme: "primary",
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_discover_text
                                    ),
                                    url: this.getDiscoverUrl(
                                        this.customerCountry
                                    ),
                                },
                            },
                            {
                                matIcon: { name: "help", theme: "primary" },
                                action: {
                                    name: this.i18n.translateText(
                                        b_helpCentre_text
                                    ),
                                    url: `/help/${this.localeService.urlPath}/`,
                                },
                                activeForRoutes: ["help"],
                            },
                            {
                                matIcon: { name: "update", theme: "primary" },
                                action: {
                                    name: this.i18n.translateText(
                                        b_status_text
                                    ),
                                    url: "https://status.luno.com/",
                                },
                                activeForRoutes: ["status"],
                            },
                        ];
                    }
                    getDiscoverUrl(t) {
                        return [d.C.fr, d.C.my, d.C.id].includes(t)
                            ? `https://discover.luno.com/${t}`
                            : "https://discover.luno.com";
                    }
                    getResourcesNavigation(t, i, C, A) {
                        const U = [];
                        return (
                            i &&
                                U.push({
                                    iconUrl: {
                                        activeIcon: `${t}/icons/sidenav/ic_fees_activated.svg`,
                                        inactiveIcon: `${t}/icons/sidenav/ic_fees_inactive.svg`,
                                    },
                                    action: {
                                        name: this.i18n.translateText(
                                            b_fees_text
                                        ),
                                        url: `/${this.localeService.urlPath}/countries`,
                                    },
                                }),
                            C &&
                                U.push({
                                    iconUrl: {
                                        activeIcon: `${t}/icons/sidenav/ic_bitcoin_activated.svg`,
                                        inactiveIcon: `${t}/icons/sidenav/ic_bitcoin_inactive.svg`,
                                    },
                                    action: {
                                        name: this.i18n.translateText(
                                            b_resourcesBitcoin_text
                                        ),
                                        url: `/${this.localeService.urlPath}/price/BTC`,
                                    },
                                }),
                            A &&
                                U.push({
                                    iconUrl: {
                                        activeIcon: `${t}/v3/icons/sidenav/highlight/reserves.png`,
                                    },
                                    action: {
                                        name: this.i18n.translateText(
                                            b_proofOfReserves_text
                                        ),
                                        url: `/${this.localeService.urlPath}/proof-of-reserves`,
                                    },
                                    activeForRoutes: ["/proof-of-reserves"],
                                }),
                            {
                                heading: this.i18n.translateText(
                                    b_resourcesHeading_text
                                ),
                                navigationItems: [
                                    ...U,
                                    ...this.getResourcesItems(),
                                ],
                            }
                        );
                    }
                    getProductsItems(t) {
                        const i = {
                                matIcon: {
                                    name: "phone_android",
                                    theme: "primary",
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_features_text
                                    ),
                                    url: `/${this.localeService.urlPath}/features`,
                                },
                                activeForRoutes: ["/features"],
                            },
                            C = {
                                matIcon: {
                                    name: "account_balance_wallet",
                                    theme: "primary",
                                },
                                action: {
                                    name: this.navigationLogicalService.getText(
                                        "walletText"
                                    ),
                                    url: "/wallet",
                                },
                                activeForRoutes: ["/wallet"],
                            },
                            A = {
                                matIcon: { name: "sell", theme: "primary" },
                                action: {
                                    name: this.i18n.translateText(b_fees_text),
                                    url: `/${this.localeService.urlPath}/countries`,
                                },
                                activeForRoutes: ["/countries"],
                            },
                            U = {
                                matIcon: {
                                    name: "bar_chart",
                                    theme: "primary",
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_exchange_text
                                    ),
                                    url: `/${this.localeService.urlPath}/exchange`,
                                },
                                activeForRoutes: ["/exchange"],
                            },
                            $ = {
                                iconUrl: {
                                    activeIcon: `${t}/sidenav-icons/products/bundles.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_bundles_text
                                    ),
                                    url: `/${this.localeService.urlPath}/bundles`,
                                },
                                activeForRoutes: ["/bundles"],
                            },
                            te = {
                                iconUrl: {
                                    activeIcon: `${t}/sidenav-icons/products/staking.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_staking_text
                                    ),
                                    url: `/${this.localeService.urlPath}/staking`,
                                },
                                activeForRoutes: ["/staking"],
                            },
                            le = {
                                matIcon: { name: "work", theme: "primary" },
                                action: {
                                    name: this.i18n.translateText(
                                        b_business_text
                                    ),
                                    url: `/${this.localeService.urlPath}/business`,
                                },
                                activeForRoutes: ["/business"],
                            },
                            Le = {
                                matIcon: { name: "cloud", theme: "primary" },
                                action: {
                                    name: this.i18n.translateText(b_api_text),
                                    url: `/${this.localeService.urlPath}/developers`,
                                },
                                activeForRoutes: ["/developers"],
                            };
                        if (this.customerCountry === d.C.us) return [i, A];
                        if (this.hideTradeSection) return [i, A, le, Le];
                        if (this.customerCountry === d.C.za) {
                            const st = [i, $, C, A, U, le, Le];
                            return (
                                this.environmentService.isProd() ||
                                    st.splice(2, 0, te),
                                st
                            );
                        }
                        return this.customerCountry === d.C.ng
                            ? [i, $, C, A, U, le, Le]
                            : [i, C, A, U, le, Le];
                    }
                    getProductsNavigation(t) {
                        return {
                            heading: this.i18n.translateText(
                                b_productsHeading_text
                            ),
                            navigationItems: this.getProductsItems(t),
                        };
                    }
                    getLegalItems() {
                        const t = this.getTermUrl(this.customerCountry),
                            i = {
                                action: {
                                    name: this.i18n.translateText(
                                        "PAIA Manual"
                                    ),
                                    url: `${this.commonInfoService.staticAssetsUrl}/legal/PAIA-Manual.pdf`,
                                },
                            },
                            C = [
                                {
                                    action: {
                                        name: this.i18n.translateText(
                                            b_terms_text
                                        ),
                                        url: `/${this.localeService.urlPath}/legal/${t}`,
                                    },
                                },
                                {
                                    action: {
                                        name: this.i18n.translateText(
                                            b_privacy_text
                                        ),
                                        url: `/${this.localeService.urlPath}/legal/privacy`,
                                    },
                                },
                                {
                                    action: {
                                        name: this.i18n.translateText(
                                            b_hiringprivacy_text
                                        ),
                                        url: `/${this.localeService.urlPath}/legal/hiring`,
                                    },
                                },
                                {
                                    action: {
                                        name: this.i18n.translateText(
                                            b_cookiepolicy_text
                                        ),
                                        url: `/${this.localeService.urlPath}/legal/cookie-policy`,
                                    },
                                },
                                {
                                    action: {
                                        name: this.i18n.translateText(
                                            b_rewards_text
                                        ),
                                        url: `/${this.localeService.urlPath}/legal/rewards-and-promotions`,
                                    },
                                },
                                {
                                    action: {
                                        name: this.i18n.translateText(
                                            b_licenses_text
                                        ),
                                        url: `/${this.localeService.urlPath}/legal/licenses`,
                                    },
                                },
                            ];
                        return this.customerCountry === d.C.za && C.push(i), C;
                    }
                    getLegalNavigation() {
                        return {
                            heading: this.i18n.translateText(
                                b_legalHeader_text
                            ),
                            navigationItems: this.getLegalItems(),
                        };
                    }
                    getComplianceNavigation() {
                        return {
                            heading: this.i18n.translateText(
                                b_complianceHeader_text
                            ),
                            navigationItems: this.getComplianceItems(),
                        };
                    }
                    getComplianceItems() {
                        return [
                            {
                                action: {
                                    name: this.i18n.translateText(
                                        b_security_text
                                    ),
                                    url: `/${this.localeService.urlPath}/security`,
                                },
                            },
                            {
                                action: {
                                    name: this.i18n.translateText(
                                        b_compliance_text
                                    ),
                                    url: `/${this.localeService.urlPath}/legal/compliance`,
                                },
                            },
                            {
                                action: {
                                    name: this.i18n.translateText(
                                        b_protection_text
                                    ),
                                    url: `/${this.localeService.urlPath}/legal/safe`,
                                },
                            },
                            {
                                action: {
                                    name: this.i18n.translateText(
                                        b_complaints_text
                                    ),
                                    url: `/${this.localeService.urlPath}/legal/complaints`,
                                },
                            },
                            {
                                action: {
                                    name: this.i18n.translateText(b_risks_text),
                                    url: `/${this.localeService.urlPath}/legal/risks`,
                                },
                            },
                        ];
                    }
                    getAboutItems(t, i) {
                        const C = [
                            {
                                matIcon: {
                                    name: "maps_home_work",
                                    theme: "primary",
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_company_text
                                    ),
                                    url: `/${this.localeService.urlPath}/about`,
                                },
                                activeForRoutes: ["/about"],
                            },
                            {
                                matIcon: { name: "groups", theme: "primary" },
                                action: {
                                    name: this.i18n.translateText(
                                        b_careers_text
                                    ),
                                    url: "/careers",
                                },
                                activeForRoutes: ["/careers"],
                            },
                            {
                                matIcon: {
                                    name: "newspaper",
                                    theme: "primary",
                                },
                                action: {
                                    name: this.i18n.translateText(b_press_text),
                                    url: `/${this.localeService.urlPath}/press`,
                                },
                                activeForRoutes: ["/press"],
                            },
                        ];
                        return (
                            i &&
                                C.push({
                                    iconUrl: {
                                        activeIcon: `${t}/icons/sidenav/ic_press_activated.svg`,
                                        inactiveIcon: `${t}/icons/sidenav/ic_press_inactive.svg`,
                                    },
                                    action: {
                                        name: this.i18n.translateText(
                                            b_pressKit_text
                                        ),
                                        url: `${t}/docs/press_kit_global_v4.pdf`,
                                    },
                                }),
                            C
                        );
                    }
                    getAboutNavigation(t, i) {
                        return {
                            heading: this.i18n.translateText(
                                b_aboutHeader_text
                            ),
                            navigationItems: this.getAboutItems(t, i),
                        };
                    }
                    getMobileAboutItems(t) {
                        return [
                            this.navigationLogicalService.makeNavigationItem(
                                `${t}/icons/sidenav/ic_company_activated.svg`,
                                `${t}/icons/sidenav/ic_company_inactive.svg`,
                                "aboutLuno",
                                `/${this.localeService.urlPath}/about`
                            ),
                            this.navigationLogicalService.makeNavigationItem(
                                `${t}/icons/sidenav/ic_careers_activated.svg`,
                                `${t}/icons/sidenav/ic_careers_inactive.svg`,
                                "careers",
                                `/${this.localeService.urlPath}/careers`
                            ),
                            this.navigationLogicalService.makeNavigationMatItem(
                                "local_library",
                                "discover",
                                "https://discover.luno.com"
                            ),
                            this.navigationLogicalService.makeNavigationMatItem(
                                "help",
                                "helpCentre",
                                `/help/${this.localeService.urlPath}`,
                                ["help"]
                            ),
                        ];
                    }
                    getMobileAboutNavigation(t) {
                        return {
                            heading: this.i18n.translateText(
                                b_mobileAboutHeader_text
                            ),
                            navigationItems: this.getMobileAboutItems(t),
                        };
                    }
                    getMobileProductsItems() {
                        const t = {
                                action: {
                                    name: this.i18n.translateText(
                                        b_features_text
                                    ),
                                    url: `/${this.localeService.urlPath}/features`,
                                },
                            },
                            i = {
                                action: {
                                    name: this.i18n.translateText(
                                        b_exchange_text
                                    ),
                                    url: `/${this.localeService.urlPath}/exchange`,
                                },
                            },
                            C = {
                                action: {
                                    name: this.i18n.translateText(b_fees_text),
                                    url: `/${this.localeService.urlPath}/countries`,
                                },
                            },
                            A = {
                                action: {
                                    name: this.i18n.translateText(
                                        b_business_text
                                    ),
                                    url: `/${this.localeService.urlPath}/business`,
                                },
                            },
                            U = {
                                action: {
                                    name: this.i18n.translateText(
                                        b_privacy_text
                                    ),
                                    url: `/${this.localeService.urlPath}/legal/privacy`,
                                },
                            };
                        return this.customerCountry === d.C.us
                            ? [C, A, U]
                            : this.customerCountry === d.C.fr
                            ? [t, C, A, U]
                            : [t, C, i, A, U];
                    }
                    getMobileProductsNavigation() {
                        return {
                            heading: this.i18n.translateText(
                                b_productsHeading_text
                            ),
                            navigationItems: this.getMobileProductsItems(),
                        };
                    }
                    getLanguageItems(t, i, C) {
                        const A = [];
                        if (!t) return A;
                        const U = Object.keys(t);
                        return (
                            Object.keys(t).forEach(($) => {
                                A.push({
                                    iconUrl: {
                                        inactiveIcon: `${C}/icons/languages/${$}.png`,
                                    },
                                    action: {
                                        name: t[$],
                                        url: Fn(i, $, U),
                                        id: $,
                                    },
                                });
                            }),
                            A
                        );
                    }
                    getLanguageNavigation(t, i, C) {
                        if (t)
                            return {
                                heading: this.i18n.translateText(
                                    b_languageHeader_text
                                ),
                                navigationItems: this.getLanguageItems(t, i, C),
                            };
                    }
                    getCoFounderItems(t) {
                        return [
                            {
                                action: {
                                    url: "https://asosiasiblockchain.co.id",
                                },
                                iconUrl: {
                                    inactiveIcon: `${t}/website/common/img/asosiasi.png`,
                                },
                            },
                        ];
                    }
                    getCoFounderNavigation(t, i) {
                        return "ID" !== t
                            ? null
                            : {
                                  heading: this.i18n.translateText(
                                      b_coFounder_text
                                  ),
                                  navigationItems: this.getCoFounderItems(i),
                              };
                    }
                    getAccountItems(t, i) {
                        const C = [];
                        return (
                            t
                                ? C.push({
                                      iconUrl: {
                                          activeIcon: `${i}/icons/sidenav/ic_signout_activated.svg`,
                                          inactiveIcon: `${i}/icons/sidenav/ic_signout_inactive.svg`,
                                      },
                                      action: {
                                          name: this.i18n.translateText(
                                              b_signOut_text
                                          ),
                                          url: `${window.location.origin}/logout`,
                                      },
                                  })
                                : C.push(
                                      {
                                          matIcon: {
                                              name: "person_outline",
                                              theme: "primary",
                                          },
                                          action: {
                                              name: this.i18n.translateText(
                                                  b_signUp_text
                                              ),
                                              url: `${window.location.origin}/${this.localeService.urlPath}/signup`,
                                              style: pe.gw3.PRIMARY,
                                          },
                                      },
                                      {
                                          matIcon: {
                                              name: "person",
                                              theme: "primary",
                                          },
                                          action: {
                                              name: this.i18n.translateText(
                                                  b_signIn_text
                                              ),
                                              url: `${window.location.origin}/${this.localeService.urlPath}/login`,
                                          },
                                      }
                                  ),
                            C
                        );
                    }
                    getAccountNavigation(t, i) {
                        return {
                            heading: this.i18n.translateText(
                                b_accountHeader_text
                            ),
                            navigationItems: this.getAccountItems(t, i),
                        };
                    }
                    getSocialIcons(t, i) {
                        return uo[i ?? t ?? je.DEFAULT] ?? uo[je.DEFAULT];
                    }
                    getWebsiteTopNavigationItems(t, i) {
                        const C = [];
                        return (
                            i && C.push(this.getTickerItem(i)),
                            C.push(this.featuresItem),
                            this.customerCountry !== d.C.us &&
                                C.push(this.walletItem),
                            this.hideTradeSection || C.push(this.exchangeItem),
                            t
                                ? C.push(this.signOutItem)
                                : C.push(this.signInItem, this.signUpItem),
                            C
                        );
                    }
                    getHelpCentreTopNavigationItems(t, i, C) {
                        const A = [];
                        return (
                            i &&
                                A.push({
                                    action: {
                                        name: i,
                                        url: `/${this.localeService.urlPath}/price/BTC`,
                                    },
                                }),
                            t
                                ? (A.push({
                                      action: {
                                          name: this.i18n.translateText(
                                              b_wallet_text
                                          ),
                                          url: "/wallet",
                                      },
                                  }),
                                  C &&
                                      A.push({
                                          action: {
                                              name: this.i18n.translateText(
                                                  b_messages_text
                                              ),
                                              url: `${window.location.origin}/help/${this.localeService.urlPath}/tickets`,
                                              id: tn.HELP_INBOX,
                                          },
                                      }),
                                  A.push({
                                      action: {
                                          name: this.i18n.translateText(
                                              b_signOut_text
                                          ),
                                          url: `${window.location.origin}/logout`,
                                          style: pe.gw3.PRIMARY,
                                      },
                                  }))
                                : (A.push({
                                      action: {
                                          name: this.i18n.translateText(
                                              b_wallet_text
                                          ),
                                          url: "/wallet",
                                      },
                                      hideOnTablet: !0,
                                  }),
                                  this.hideTradeSection ||
                                      A.push({
                                          action: {
                                              name: this.i18n.translateText(
                                                  b_exchange_text
                                              ),
                                              url: `/${this.localeService.urlPath}/exchange`,
                                          },
                                          hideOnTablet: !0,
                                      }),
                                  this.customerCountry !== d.C.us &&
                                      A.push({
                                          action: {
                                              name: this.i18n.translateText(
                                                  b_features_text
                                              ),
                                              url: "/features",
                                          },
                                          hideOnLaptopScreen: !0,
                                      }),
                                  A.push(
                                      {
                                          action: {
                                              name: this.i18n.translateText(
                                                  b_signIn_text
                                              ),
                                              url: `${window.location.origin}/${this.localeService.urlPath}/login?redirect=${window.location.pathname}`,
                                          },
                                      },
                                      {
                                          action: {
                                              name: this.i18n.translateText(
                                                  b_signUp_text
                                              ),
                                              url: `${window.location.origin}/${this.localeService.urlPath}/signup`,
                                              style: pe.gw3.PRIMARY,
                                          },
                                      }
                                  )),
                            A
                        );
                    }
                    getHelpCentreSideNavigationGroups(t, i, C) {
                        if (!t) return null;
                        const A = [];
                        return (
                            A.push(
                                this.getHelpCentreHomeNavigation(
                                    t.staticAssetsPath,
                                    !!t.isAuthenticated,
                                    i,
                                    C
                                )
                            ),
                            A.push(
                                this.getHelpTopicsNavigation(t.staticAssetsPath)
                            ),
                            A.push(
                                this.getHelpOtherResourcesNavigation(
                                    t.staticAssetsPath
                                )
                            ),
                            A
                        );
                    }
                    getHomeNavigation(t) {
                        return { navigationItems: this.getHomeItems(t) };
                    }
                    getHomeItems(t) {
                        return [
                            {
                                matIcon: { name: "home", theme: "primary" },
                                action: {
                                    name: this.i18n.translateText(b_home_text),
                                    url: `${window.location.origin}/${this.localeService.urlPath}/`,
                                },
                                activeForRouteRegex:
                                    "^/([a-z]{2})?/?([a-z]{2})?$",
                            },
                        ];
                    }
                    getProofOfReservesNavigation(t) {
                        return {
                            heading: this.i18n.translateText(
                                b_proofOfReservesHeader_text
                            ),
                            navigationItems: this.getProofOfReservesItems(t),
                        };
                    }
                    getProofOfReservesItems(t) {
                        return [
                            {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/sidenav/highlight/reserves.png`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_proofOfReserves_text
                                    ),
                                    url: `/${this.localeService.urlPath}/proof-of-reserves`,
                                },
                                activeForRoutes: ["/proof-of-reserves"],
                            },
                        ];
                    }
                    getTermUrl(t) {
                        const i = [
                            d.C.au,
                            d.C.my,
                            d.C.ng,
                            d.C.sg,
                            d.C.ug,
                            d.C.za,
                            d.C.zm,
                            d.C.us,
                        ];
                        return [d.B.msMY, Re.s.fr, Re.s.id].includes(
                            this.localeService.urlPath
                        )
                            ? "terms"
                            : t && i.includes(t)
                            ? `terms-of-use-${t}`
                            : "terms";
                    }
                    getHelpCentreHomeNavigation(t, i, C, A) {
                        return {
                            navigationItems: this.getHelpCentreHomeItems(
                                t,
                                i,
                                C,
                                A
                            ),
                        };
                    }
                    getHelpCentreHomeItems(t, i, C, A) {
                        const U = [];
                        return (
                            U.push({
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/help/ic_help_home.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_helpHome_text
                                    ),
                                    url: `/help/${this.localeService.urlPath}/`,
                                },
                                activeForRouteRegex: "^/help/([a-z]{2})/?$",
                            }),
                            i &&
                                C &&
                                U.push({
                                    iconUrl: {
                                        activeIcon: `${t}/v3/icons/help/ic_support_inbox.svg`,
                                    },
                                    action: {
                                        name: this.i18n.translateText(
                                            b_supportInbox_text
                                        ),
                                        url: `/help/${this.localeService.urlPath}/tickets`,
                                    },
                                    activeForRouteRegex:
                                        "^/help/([a-z]{2})/tickets/?$",
                                    badgeConfig$: A,
                                }),
                            U
                        );
                    }
                    getHelpTopicsNavigation(t) {
                        return {
                            heading: this.i18n.translateText(
                                b_helpTopicsHeader_text
                            ),
                            navigationItems: this.getHelpTopicsItems(t),
                        };
                    }
                    getHelpTopicsItems(t) {
                        return [
                            {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/help/ic_getting_started.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_gettingStarted_text
                                    ),
                                    url: `/help/${this.localeService.urlPath}/categories/1000000384`,
                                },
                                activeForRouteRegex:
                                    "^/help/([a-z]{2})/categories/1000000384/?$",
                            },
                            {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/help/ic_identity_verification.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_verification_text
                                    ),
                                    url: `/help/${this.localeService.urlPath}/categories/1000126762`,
                                },
                                activeForRouteRegex:
                                    "^/help/([a-z]{2})/categories/1000126762/?$",
                            },
                            {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/help/ic_deposits_withdrawls.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_depositsAndWithdrawals_text
                                    ),
                                    url: `/help/${this.localeService.urlPath}/categories/1000126763`,
                                },
                                activeForRouteRegex:
                                    "^/help/([a-z]{2})/categories/1000126763/?$",
                            },
                            {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/help/ic_wallet.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_walletUse_text
                                    ),
                                    url: `/help/${this.localeService.urlPath}/categories/11000001462`,
                                },
                                activeForRouteRegex:
                                    "^/help/([a-z]{2})/categories/11000001462/?$",
                            },
                            {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/help/ic_exchange.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_exchangeUse_text
                                    ),
                                    url: `/help/${this.localeService.urlPath}/categories/11000001463`,
                                },
                                activeForRouteRegex:
                                    "^/help/([a-z]{2})/categories/11000001463/?$",
                            },
                            {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/help/ic_security.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_security_text
                                    ),
                                    url: `/help/${this.localeService.urlPath}/categories/11000001464`,
                                },
                                activeForRouteRegex:
                                    "^/help/([a-z]{2})/categories/11000001464/?$",
                            },
                        ];
                    }
                    getHelpOtherResourcesNavigation(t) {
                        return {
                            heading: this.i18n.translateText(
                                b_otherResources_text
                            ),
                            navigationItems: this.getHelpOtherResourcesItems(t),
                        };
                    }
                    getHelpOtherResourcesItems(t) {
                        return [
                            {
                                matIcon: {
                                    name: "local_library",
                                    theme: "primary",
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_discover_text
                                    ),
                                    url: this.getDiscoverUrl(
                                        this.customerCountry
                                    ),
                                },
                            },
                            {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/help/ic_home.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_website_text
                                    ),
                                    url: `/${this.localeService.urlPath}/`,
                                },
                            },
                            {
                                iconUrl: {
                                    activeIcon: `${t}/v3/icons/help/ic_status_page.svg`,
                                },
                                action: {
                                    name: this.i18n.translateText(
                                        b_statusPage_text
                                    ),
                                    url: "https://luno.statuspage.io/",
                                },
                            },
                        ];
                    }
                    getTickerItem(t) {
                        return {
                            action: {
                                name: t,
                                url: `/${this.localeService.urlPath}/price/BTC`,
                            },
                            hideOnMobile: !0,
                            activeForRoutes: ["/price/BTC"],
                        };
                    }
                    setTranslations() {
                        this.navigationLogicalService.setTranslations();
                    }
                    get featuresItem() {
                        return {
                            action: {
                                name: this.navigationLogicalService.getText(
                                    "featuresText"
                                ),
                                url: `/${this.localeService.urlPath}/features`,
                            },
                            hideOnMobile: !0,
                            activeForRoutes: ["/features"],
                        };
                    }
                    get walletItem() {
                        return {
                            action: {
                                name: this.navigationLogicalService.getText(
                                    "walletText"
                                ),
                                url: "/wallet",
                            },
                            hideOnMobile: !0,
                            hideOnTablet: !0,
                            activeForRoutes: ["/wallet"],
                        };
                    }
                    get exchangeItem() {
                        return {
                            action: {
                                name: this.navigationLogicalService.getText(
                                    "exchangeText"
                                ),
                                url: `/${this.localeService.urlPath}/exchange`,
                            },
                            hideOnMobile: !0,
                            hideOnTablet: !0,
                            activeForRoutes: ["/exchange"],
                        };
                    }
                    get tradeItem() {
                        return {
                            action: {
                                name: this.navigationLogicalService.getText(
                                    "tradeText"
                                ),
                                url: "/trade",
                            },
                            hideOnMobile: !0,
                            hideOnTablet: !0,
                            activeForRoutes: ["/trade"],
                        };
                    }
                    get signInItem() {
                        return {
                            action: {
                                name: this.navigationLogicalService.getText(
                                    "signInText"
                                ),
                                url: `/${this.localeService.urlPath}/login`,
                            },
                            hideOnMobile: !0,
                        };
                    }
                    get signUpItem() {
                        return {
                            action: {
                                name: this.navigationLogicalService.getText(
                                    "signUpText"
                                ),
                                url: `/${this.localeService.urlPath}/signup`,
                                style: pe.gw3.PRIMARY,
                            },
                        };
                    }
                    get signOutItem() {
                        return {
                            action: {
                                name: this.navigationLogicalService.getText(
                                    "signOutText"
                                ),
                                url: "/logout",
                            },
                        };
                    }
                    androidAppUrl() {
                        return `https://play.google.com/store/apps/details?hl=${this.commonInfoService.language}&id=co.bitx.android.wallet`;
                    }
                    iosAppUrl() {
                        return "https://itunes.apple.com/app/bitx-wallet/id927362479?mt=8";
                    }
                    setCustomerCountry(t = !0) {
                        this.customerCountry = t
                            ? this.mapLocaleToCountry(
                                  this.localeService.urlPath
                              )
                            : `${this.commonInfoService.navInfo?.loc.code}`.toLowerCase();
                    }
                    mapLocaleToCountry(t) {
                        const i = d.C.gb;
                        return t.includes("-")
                            ? (t.split("-")[1].toLowerCase() ?? null) || i
                            : "en" === t
                            ? `${this.commonInfoService.navInfo?.loc.code}`.toLocaleLowerCase() ||
                              i
                            : Object.values(d.C).includes(t.toString())
                            ? t
                            : i;
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(
                            e.LFG(ue.E),
                            e.LFG(Z.K),
                            e.LFG(Ze.O),
                            e.LFG(Fe),
                            e.LFG(at.L)
                        );
                    }),
                    (n.ɵprov = e.Yz7({
                        token: n,
                        factory: n.ɵfac,
                        providedIn: "root",
                    })),
                    n
                );
            })();
            var Yt = (() => {
                    return (
                        ((n = Yt || (Yt = {}))[(n.TABLET = 768)] = "TABLET"),
                        (n[(n.DESKTOP = 1024)] = "DESKTOP"),
                        Yt
                    );
                    var n;
                })(),
                Bi = o(9980);
            const ki_riskWarningUk_text =
                "Cryptocurrency is an unregulated high risk investment. The value of cryptocurrency can fluctuate and capital may be lost, without recourse to financial regulators. Fees apply to transactions on Luno and tax (including Capital Gains Tax) may be payable on any profits.";
            let Wi = (() => {
                    class n {
                        constructor(t) {
                            this.http = t;
                        }
                        fetchDisplayTicker() {
                            return this.http.get("/ajax/1/display_ticker");
                        }
                        fetchTickers() {
                            return this.http
                                .get("/ajax/1/tickers")
                                .pipe((0, ge.U)((t) => (0, zt.i)(t)));
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.LFG(E.eN));
                        }),
                        (n.ɵprov = e.Yz7({
                            token: n,
                            factory: n.ɵfac,
                            providedIn: "root",
                        })),
                        n
                    );
                })(),
                _o = (() => {
                    class n {
                        constructor(t) {
                            (this.rendererFactory = t),
                                (this.isFullCard = !1),
                                (this.fullCardClass = "full-card"),
                                (this.renderer = t.createRenderer(null, null));
                        }
                        setIsFullCard(t) {
                            (this.isFullCard = t),
                                this.isFullCard
                                    ? this.addClass(this.fullCardClass)
                                    : this.removeClass(this.fullCardClass);
                        }
                        isFullCardApplied() {
                            return this.isFullCard;
                        }
                        addClass(t) {
                            this.renderer.addClass(document.body, t);
                        }
                        removeClass(t) {
                            this.renderer.removeClass(document.body, t);
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.LFG(e.FYo));
                        }),
                        (n.ɵprov = e.Yz7({
                            token: n,
                            factory: n.ɵfac,
                            providedIn: "root",
                        })),
                        n
                    );
                })();
            function Yi(n, r) {
                if ((1 & n && e._UZ(0, "img", 4), 2 & n)) {
                    const t = e.oxw(2);
                    e.Q6J("src", t.image.url, e.LSH)("alt", t.image.name)(
                        "width",
                        t.image.width || null
                    )("height", t.image.height || null);
                }
            }
            function Hi(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "luno-button", 5),
                        e.NdJ("clicked", function () {
                            const A = e.CHM(t).$implicit,
                                U = e.oxw(2);
                            return e.KtG(U.onButtonClicked(A.action));
                        }),
                        e.qZA();
                }
                2 & n && e.Q6J("button", r.$implicit);
            }
            function Ki(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "article")(1, "div"),
                        e.YNc(2, Yi, 1, 4, "img", 1),
                        e._UZ(3, "span", 2),
                        e.qZA(),
                        e.TgZ(4, "div"),
                        e.YNc(5, Hi, 1, 1, "luno-button", 3),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.xp6(2),
                        e.Q6J("ngIf", t.image),
                        e.xp6(1),
                        e.Q6J("innerHTML", t.text, e.oJD),
                        e.xp6(1),
                        e.ekj("reverse-buttons", t.reverseButtons),
                        e.xp6(1),
                        e.Q6J("ngForOf", t.buttons);
                }
            }
            let Vi = (() => {
                class n {
                    constructor(t, i) {
                        (this.bannerService = t),
                            (this.changeDetection = i),
                            (this.text = ""),
                            (this.buttons = []),
                            (this.reverseButtons = !1),
                            (this.customClass = ""),
                            (this.buttonClicked = new e.vpe()),
                            (this.showBanner$ = this.bannerService.visible.asObservable()),
                            (this.unsubscribe$ = new Dt.xQ());
                    }
                    ngOnInit() {
                        this.bannerService.config
                            .pipe((0, Mt.R)(this.unsubscribe$))
                            .subscribe((t) => {
                                !t ||
                                    ((this.text = t.text),
                                    (this.buttons = t.buttons),
                                    (this.customClass = t.customClass),
                                    (this.image = t.image),
                                    (this.reverseButtons = !!t.reverseButtons),
                                    this.changeDetection.markForCheck());
                            });
                    }
                    ngOnDestroy() {
                        this.unsubscribe$.next(), this.unsubscribe$.complete();
                    }
                    onButtonClicked(t) {
                        this.buttonClicked.emit(t),
                            this.bannerService.action.next(t);
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(Bt), e.Y36(e.sBO));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-banner"]],
                        hostVars: 2,
                        hostBindings: function (t, i) {
                            2 & t && e.Tol(i.customClass);
                        },
                        inputs: {
                            text: "text",
                            buttons: "buttons",
                            reverseButtons: "reverseButtons",
                            image: "image",
                            customClass: "customClass",
                        },
                        outputs: { buttonClicked: "buttonClicked" },
                        decls: 2,
                        vars: 3,
                        consts: [
                            [4, "ngIf"],
                            [3, "src", "alt", "width", "height", 4, "ngIf"],
                            [3, "innerHTML"],
                            [3, "button", "clicked", 4, "ngFor", "ngForOf"],
                            [3, "src", "alt", "width", "height"],
                            [3, "button", "clicked"],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.YNc(0, Ki, 6, 5, "article", 0),
                                e.ALo(1, "async")),
                                2 & t &&
                                    e.Q6J("ngIf", e.lcZ(1, 1, i.showBanner$));
                        },
                        dependencies: [Je.r0, g.sg, g.O5, g.Ov],
                        styles: [
                            "article[_ngcontent-%COMP%]{display:flex;padding:.75rem .5rem;justify-content:center;align-items:center;height:100%;background:var(--color-neutral-100);white-space:normal;box-shadow:0 4px 4px #0000001a}article[_ngcontent-%COMP%]   luno-button[_ngcontent-%COMP%]{padding-left:.5rem}article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center}article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{margin:0 1rem 0 0}article[_ngcontent-%COMP%] > div.reverse-buttons[_ngcontent-%COMP%]{flex-direction:row-reverse}@media screen and (max-width: 480px){article[_ngcontent-%COMP%]{line-height:1.25;flex-direction:column;justify-content:space-between}article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding-left:0;align-self:flex-end}article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-of-type(1){padding-top:.5rem}article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-of-type(2){padding-bottom:.5rem}article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{align-self:flex-start}}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            const Bn_title_text = "Please refresh your browser",
                Bn_subtitle_text =
                    "Sorry for the inconvenience, something is not working. Refreshing should solve this.",
                Bn_button_text = "Refresh";
            var ze = o(4929),
                nn = o(2815);
            class gt {
                constructor(r) {
                    (this.windowBodyService = r), (this.isFullPageCard = !1);
                }
                ngOnDestroy() {
                    this.isFullPageCard &&
                        this.windowBodyService.setIsFullCard(!1);
                }
                setFullPageCard() {
                    this.windowBodyService.setIsFullCard(!!this.isFullPageCard);
                }
            }
            function Ji(n, r) {
                if ((1 & n && (e.TgZ(0, "h3"), e._uU(1), e.qZA()), 2 & n)) {
                    const t = e.oxw();
                    e.xp6(1), e.Oqu(t.config.title);
                }
            }
            function $i(n, r) {
                if ((1 & n && (e.TgZ(0, "p"), e._uU(1), e.qZA()), 2 & n)) {
                    const t = e.oxw();
                    e.xp6(1), e.Oqu(t.config.subtitle);
                }
            }
            function Qi(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "a", 3),
                        e.NdJ("click", function () {
                            e.CHM(t);
                            const C = e.oxw();
                            return e.KtG(C.onReloadClick());
                        }),
                        e._uU(1),
                        e.qZA();
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.xp6(1), e.Oqu(t.config.buttonText);
                }
            }
            (gt.ɵfac = function (r) {
                return new (r || gt)(e.Y36(_o));
            }),
                (gt.ɵcmp = e.Xpm({
                    type: gt,
                    selectors: [["luno-content"]],
                    inputs: { isFullPageCard: "isFullPageCard" },
                    ngContentSelectors: ["*"],
                    decls: 1,
                    vars: 0,
                    template: function (r, t) {
                        1 & r && (e.F$t(), e.Hsn(0));
                    },
                    styles: [
                        "[_nghost-%COMP%]{overflow:hidden;display:block;padding-top:24px;margin:0 auto 20px}.narrow[_nghost-%COMP%]{max-width:540px;overflow:visible}@media only screen and (max-width: 480px){[_nghost-%COMP%]{padding-top:16px}}",
                    ],
                })),
                (0, ze.gn)(
                    [
                        (0, nn.G)("setFullPageCard"),
                        (0, ze.w6)("design:type", Boolean),
                    ],
                    gt.prototype,
                    "isFullPageCard",
                    void 0
                );
            let ji = (() => {
                class n {
                    constructor(t, i) {
                        (this.i18n = t),
                            (this.window = i),
                            (this.config = {
                                title: this.i18n.translateText(Bn_title_text),
                                subtitle: this.i18n.translateText(
                                    Bn_subtitle_text
                                ),
                                buttonText: this.i18n.translateText(
                                    Bn_button_text
                                ),
                            });
                    }
                    onReloadClick() {
                        this.window.location.reload();
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(Z.K), e.Y36(Pe.m));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-browser-refresh"]],
                        inputs: { config: "config" },
                        decls: 6,
                        vars: 3,
                        consts: [
                            [1, "narrow"],
                            [4, "ngIf"],
                            [
                                "mat-flat-button",
                                "",
                                "color",
                                "primary",
                                3,
                                "click",
                                4,
                                "ngIf",
                            ],
                            [
                                "mat-flat-button",
                                "",
                                "color",
                                "primary",
                                3,
                                "click",
                            ],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.TgZ(0, "luno-content", 0)(1, "article")(
                                    2,
                                    "header"
                                ),
                                e.YNc(3, Ji, 2, 1, "h3", 1),
                                e.YNc(4, $i, 2, 1, "p", 1),
                                e.qZA(),
                                e.YNc(5, Qi, 2, 1, "a", 2),
                                e.qZA()()),
                                2 & t &&
                                    (e.xp6(3),
                                    e.Q6J("ngIf", i.config.title),
                                    e.xp6(1),
                                    e.Q6J("ngIf", i.config.subtitle),
                                    e.xp6(1),
                                    e.Q6J("ngIf", i.config.buttonText));
                        },
                        dependencies: [g.O5, gt, c.zs],
                        styles: [
                            "luno-content[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;padding:0}luno-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;height:auto;padding:264px 16px 0;color:var(--color-neutral-0);text-align:center}@media screen and (max-width: 768px){luno-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{justify-content:center;height:calc(100vh - 16px);padding:0 16px}}luno-content[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{flex-grow:0;margin-bottom:20px}@media screen and (max-width: 768px){luno-content[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{flex-grow:1}}luno-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], luno-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color-neutral-0)}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            const on_imageAlt_text = "cookie icon",
                on_text_text =
                    "We use cookies to make your experience with us better. By continuing to use our website without changing the settings, you are agreeing to our use of cookies, which include marketing cookies.",
                on_primaryButtons_text = "Allow all",
                on_secondaryButtons_text = "Manage settings",
                Se_title_text = "Cookie preferences",
                Se_bodyHtml_text =
                    'When you visit our website, we may store cookies on your browser. We use cookies to create a personalised web experience and understand user behaviour on our website. We respect your right to privacy so you can choose not to allow some types of cookies. For more information see our <a href="{locationOrigin}/legal/cookie-policy" target="_blank">Cookie Policy</a>.',
                Se_preferencesTitle_text = "Manage cookies:",
                Se_saveButton_text = "Save",
                Se_strictlyNecessaryText_text = "Strictly necessary cookies",
                Se_functionalText_text = "Functional cookies",
                Se_performanceText_text = "Performance cookies",
                Se_marketingText_text = "Marketing cookies",
                Se_strictlyNecessaryDetailsText_text =
                    "These cookies are necessary for our sites to function.",
                Se_functionalDetailsText_text =
                    "These cookies allow us to remember your preferences.",
                Se_performanceDetailsText_text =
                    "These cookies help us improve the performance of our sites.",
                Se_marketingDetailsText_text =
                    "Luno uses third party service providers to tailor advertising to you or your interests.";
            let zi = (() => {
                class n {
                    constructor(t, i, C) {
                        (this.dialogRef = t),
                            (this.window = i),
                            (this.i18n = C),
                            (this.functionalCheckbox = !1),
                            (this.performanceCheckbox = !1),
                            (this.marketingCheckbox = !1);
                    }
                    ngOnInit() {
                        this.processConfigs();
                    }
                    processConfigs() {
                        (this.title = this.i18n.translateText(Se_title_text)),
                            (this.bodyHtml = this.i18n.translateText(
                                Se_bodyHtml_text,
                                { locationOrigin: this.window.location.origin }
                            )),
                            (this.preferencesTitle = this.i18n.translateText(
                                Se_preferencesTitle_text
                            )),
                            (this.saveButton = {
                                action: {
                                    name: this.i18n.translateText(
                                        Se_saveButton_text
                                    ),
                                    style: pe.gw3.PRIMARY,
                                },
                            }),
                            (this.strictlyNecessaryText = this.i18n.translateText(
                                Se_strictlyNecessaryText_text
                            )),
                            (this.functionalText = this.i18n.translateText(
                                Se_functionalText_text
                            )),
                            (this.performanceText = this.i18n.translateText(
                                Se_performanceText_text
                            )),
                            (this.marketingText = this.i18n.translateText(
                                Se_marketingText_text
                            )),
                            (this.strictlyNecessaryDetailsText = this.i18n.translateText(
                                Se_strictlyNecessaryDetailsText_text
                            )),
                            (this.functionalDetailsText = this.i18n.translateText(
                                Se_functionalDetailsText_text
                            )),
                            (this.performanceDetailsText = this.i18n.translateText(
                                Se_performanceDetailsText_text
                            )),
                            (this.marketingDetailsText = this.i18n.translateText(
                                Se_marketingDetailsText_text
                            ));
                    }
                    onFunctionalCheckboxClick(t) {
                        this.functionalCheckbox = t.checked;
                    }
                    onPerformanceCheckboxClick(t) {
                        this.performanceCheckbox = t.checked;
                    }
                    onMarketingCheckboxClick(t) {
                        this.marketingCheckbox = t.checked;
                    }
                    onSave() {
                        this.dialogRef.close({
                            functional: this.functionalCheckbox,
                            performance: this.performanceCheckbox,
                            marketing: this.marketingCheckbox,
                        });
                    }
                    onClose() {
                        this.dialogRef.close();
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(
                            e.Y36(P.so),
                            e.Y36(Pe.m),
                            e.Y36(Z.K)
                        );
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-cookie-preferences-dialog"]],
                        decls: 34,
                        vars: 13,
                        consts: [
                            ["matRipple", "", 1, "cross-icon", 3, "click"],
                            [1, "title-container"],
                            [1, "divider"],
                            [1, "body-container"],
                            [1, "body-text", 3, "innerHTML"],
                            [1, "checkboxes-container"],
                            ["disabled", "", 3, "checked"],
                            ["color", "primary", 3, "change"],
                            [1, "button-container"],
                            [3, "button", "clicked"],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.TgZ(0, "a", 0),
                                e.NdJ("click", function () {
                                    return i.onClose();
                                }),
                                e.TgZ(1, "mat-icon"),
                                e._uU(2, "close"),
                                e.qZA()(),
                                e.TgZ(3, "div", 1)(4, "h3"),
                                e._uU(5),
                                e.qZA(),
                                e._UZ(6, "div", 2),
                                e.qZA(),
                                e.TgZ(7, "div", 3),
                                e._UZ(8, "p", 4),
                                e.TgZ(9, "h4"),
                                e._uU(10),
                                e.qZA(),
                                e.TgZ(11, "div", 5)(12, "div")(
                                    13,
                                    "mat-checkbox",
                                    6
                                ),
                                e._uU(14),
                                e.qZA(),
                                e.TgZ(15, "p"),
                                e._uU(16),
                                e.qZA()(),
                                e.TgZ(17, "div")(18, "mat-checkbox", 7),
                                e.NdJ("change", function (A) {
                                    return i.onFunctionalCheckboxClick(A);
                                }),
                                e._uU(19),
                                e.qZA(),
                                e.TgZ(20, "p"),
                                e._uU(21),
                                e.qZA()(),
                                e.TgZ(22, "div")(23, "mat-checkbox", 7),
                                e.NdJ("change", function (A) {
                                    return i.onPerformanceCheckboxClick(A);
                                }),
                                e._uU(24),
                                e.qZA(),
                                e.TgZ(25, "p"),
                                e._uU(26),
                                e.qZA()(),
                                e.TgZ(27, "div")(28, "mat-checkbox", 7),
                                e.NdJ("change", function (A) {
                                    return i.onMarketingCheckboxClick(A);
                                }),
                                e._uU(29),
                                e.qZA(),
                                e.TgZ(30, "p"),
                                e._uU(31),
                                e.qZA()()(),
                                e.TgZ(32, "div", 8)(33, "luno-button", 9),
                                e.NdJ("clicked", function () {
                                    return i.onSave();
                                }),
                                e.qZA()()()),
                                2 & t &&
                                    (e.xp6(5),
                                    e.Oqu(i.title),
                                    e.xp6(3),
                                    e.Q6J("innerHTML", i.bodyHtml, e.oJD),
                                    e.xp6(2),
                                    e.Oqu(i.preferencesTitle),
                                    e.xp6(3),
                                    e.Q6J("checked", !0),
                                    e.xp6(1),
                                    e.Oqu(i.strictlyNecessaryText),
                                    e.xp6(2),
                                    e.Oqu(i.strictlyNecessaryDetailsText),
                                    e.xp6(3),
                                    e.Oqu(i.functionalText),
                                    e.xp6(2),
                                    e.Oqu(i.functionalDetailsText),
                                    e.xp6(3),
                                    e.Oqu(i.performanceText),
                                    e.xp6(2),
                                    e.Oqu(i.performanceDetailsText),
                                    e.xp6(3),
                                    e.Oqu(i.marketingText),
                                    e.xp6(2),
                                    e.Oqu(i.marketingDetailsText),
                                    e.xp6(2),
                                    e.Q6J("button", i.saveButton));
                        },
                        dependencies: [Je.r0, a.oG, L.Hw, R.wG],
                        styles: [
                            "[_nghost-%COMP%]{color:var(--color-primary)}[_nghost-%COMP%]     .mat-checkbox-inner-container{margin-top:4px}h3[_ngcontent-%COMP%]{margin:0}luno-button[_ngcontent-%COMP%]{max-width:344px;width:100%}luno-button[_ngcontent-%COMP%]     a{width:100%}.checkboxes-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.checkboxes-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50%;box-sizing:border-box;padding:14px}.checkboxes-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(odd){padding-left:0}.checkboxes-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(even){padding-right:0}@media screen and (max-width: 768px){.checkboxes-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:14px 0;width:100%}}.checkboxes-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:24px;margin-bottom:0;margin-top:8px;font-size:14px;opacity:.75}  .mat-dialog-cookie-preferences mat-dialog-container.mat-dialog-container{width:618px;padding:0;max-height:80vh}.divider[_ngcontent-%COMP%]{margin-right:-24px;margin-left:-24px;margin-top:20px;border-bottom:1px solid var(--color-neutral-100)!important}.button-container[_ngcontent-%COMP%]{display:flex;margin-top:22px;justify-content:center}.body-container[_ngcontent-%COMP%]{padding:0 24px 24px;margin-top:8px;overflow:auto}@media screen and (max-width: 768px){.body-container[_ngcontent-%COMP%]{margin-top:0}}.title-container[_ngcontent-%COMP%]{padding:24px 24px 0}.body-text[_ngcontent-%COMP%]{line-height:1.75}.cross-icon[_ngcontent-%COMP%]{float:right;cursor:pointer;border-radius:24px;margin:20px 12px 0}mat-icon[_ngcontent-%COMP%]{color:var(--color-secondary);margin:4px}[_nghost-%COMP%]     a{color:var(--color-primary);text-decoration:underline}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            function Xi(n, r) {
                if ((1 & n && e._UZ(0, "img", 6), 2 & n)) {
                    const t = e.oxw(2);
                    e.Q6J("src", t.imageUrl, e.LSH)("alt", t.imageAlt)(
                        "width",
                        40
                    )("height", 40);
                }
            }
            function qi(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "luno-button", 7),
                        e.NdJ("clicked", function () {
                            const A = e.CHM(t).$implicit,
                                U = e.oxw(2);
                            return e.KtG(U.onButtonClicked(A.action));
                        }),
                        e.qZA();
                }
                2 & n && e.Q6J("button", r.$implicit);
            }
            function ea(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "article")(1, "div", 1)(2, "div"),
                        e.YNc(3, Xi, 1, 4, "img", 2),
                        e._UZ(4, "span", 3),
                        e.qZA(),
                        e.TgZ(5, "div", 4),
                        e.YNc(6, qi, 1, 1, "luno-button", 5),
                        e.qZA()()()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.xp6(3),
                        e.Q6J("ngIf", t.imageUrl),
                        e.xp6(1),
                        e.Q6J("innerHTML", t.text, e.oJD),
                        e.xp6(2),
                        e.Q6J("ngForOf", t.buttons);
                }
            }
            let ta = (() => {
                class n {
                    constructor(t, i, C, A, U, $) {
                        (this.bannerService = t),
                            (this.commonInfoService = i),
                            (this.cookiePreferencesService = C),
                            (this.dialog = A),
                            (this.environmentService = U),
                            (this.i18n = $),
                            (this.imageUrl = this.commonInfoService
                                .staticAssetsUrl
                                ? `${this.commonInfoService.staticAssetsUrl}/icons/common/ic_cookie_v3.svg`
                                : null),
                            (this.showPreferences$ = this.cookiePreferencesService.showPreferences$);
                    }
                    ngOnInit() {
                        (this.showPreferences$ = this.cookiePreferencesService.showPreferences$),
                            this.initConfig();
                    }
                    initConfig() {
                        (this.imageAlt = this.i18n.translateText(
                            on_imageAlt_text
                        )),
                            (this.text = this.i18n.translateText(on_text_text)),
                            (this.buttons = [
                                {
                                    action: {
                                        id: "manage_settings",
                                        name: this.i18n.translateText(
                                            on_secondaryButtons_text
                                        ),
                                        style: pe.gw3.SECONDARY,
                                    },
                                },
                                {
                                    action: {
                                        id: "allow_all",
                                        name: this.i18n.translateText(
                                            on_primaryButtons_text
                                        ),
                                        style: pe.gw3.PRIMARY,
                                    },
                                },
                            ]);
                    }
                    onButtonClicked(t) {
                        switch (t?.id) {
                            case "manage_settings":
                                this.dialog
                                    .open(zi, {
                                        panelClass:
                                            "mat-dialog-cookie-preferences",
                                        height: "auto",
                                    })
                                    .afterClosed()
                                    .subscribe((i) => {
                                        !i ||
                                            this.cookiePreferencesService.acceptSelection(
                                                i
                                            );
                                    });
                                break;
                            case "allow_all":
                                this.cookiePreferencesService.acceptAll();
                        }
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(
                            e.Y36(Bt),
                            e.Y36(ue.E),
                            e.Y36(_t.L),
                            e.Y36(P.uw),
                            e.Y36(at.L),
                            e.Y36(Z.K)
                        );
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-cookie-preferences"]],
                        decls: 2,
                        vars: 3,
                        consts: [
                            [4, "ngIf"],
                            [1, "container"],
                            [3, "src", "alt", "width", "height", 4, "ngIf"],
                            [3, "innerHTML"],
                            [
                                1,
                                "button-container",
                                "white-space-no-wrap-button",
                            ],
                            [3, "button", "clicked", 4, "ngFor", "ngForOf"],
                            [3, "src", "alt", "width", "height"],
                            [3, "button", "clicked"],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.YNc(0, ea, 7, 3, "article", 0),
                                e.ALo(1, "async")),
                                2 & t &&
                                    e.Q6J(
                                        "ngIf",
                                        e.lcZ(1, 1, i.showPreferences$)
                                    );
                        },
                        dependencies: [g.sg, g.O5, Je.r0, g.Ov],
                        styles: [
                            "[_nghost-%COMP%]{width:100%}article[_ngcontent-%COMP%]{background:var(--color-neutral-0)}.container[_ngcontent-%COMP%]{display:flex;max-width:1200px;margin:auto;padding:.75rem .5rem;justify-content:center;align-items:center;height:100%;white-space:normal}.container[_ngcontent-%COMP%]   luno-button[_ngcontent-%COMP%]{flex-grow:1;padding-left:.5rem}.container[_ngcontent-%COMP%]   luno-button[_ngcontent-%COMP%]     a{width:100%}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:flex-start;color:var(--color-primary)}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{margin:0 1rem 0 .5rem}@media screen and (max-width: 768px){.container[_ngcontent-%COMP%]{line-height:1.25;flex-direction:column;justify-content:space-between}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding-left:0;align-items:flex-start;align-self:flex-end}.container[_ngcontent-%COMP%] > div.button-container[_ngcontent-%COMP%]{justify-content:center;flex-wrap:wrap;row-gap:8px;padding-top:.5rem;padding-right:.5rem}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.button-container){padding-bottom:.5rem}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{align-self:flex-start}}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            var p = o(4139),
                rn = o(6708);
            function da(n, r) {
                if ((1 & n && e.GkF(0, 9), 2 & n)) {
                    e.oxw();
                    const t = e.MAs(9);
                    e.Q6J("ngTemplateOutlet", t);
                }
            }
            function ga(n, r) {
                if ((1 & n && e.GkF(0, 9), 2 & n)) {
                    e.oxw();
                    const t = e.MAs(11);
                    e.Q6J("ngTemplateOutlet", t);
                }
            }
            function ha(n, r) {
                if ((1 & n && e.GkF(0, 9), 2 & n)) {
                    e.oxw();
                    const t = e.MAs(13);
                    e.Q6J("ngTemplateOutlet", t);
                }
            }
            function Ca(n, r) {
                if ((1 & n && e.GkF(0, 9), 2 & n)) {
                    e.oxw();
                    const t = e.MAs(15);
                    e.Q6J("ngTemplateOutlet", t);
                }
            }
            function Ta(n, r) {
                if ((1 & n && e.GkF(0, 9), 2 & n)) {
                    e.oxw();
                    const t = e.MAs(17);
                    e.Q6J("ngTemplateOutlet", t);
                }
            }
            function Ea(n, r) {
                if ((1 & n && e.GkF(0, 9), 2 & n)) {
                    e.oxw();
                    const t = e.MAs(19);
                    e.Q6J("ngTemplateOutlet", t);
                }
            }
            function Ia(n, r) {
                if ((1 & n && e.GkF(0, 9), 2 & n)) {
                    e.oxw();
                    const t = e.MAs(21);
                    e.Q6J("ngTemplateOutlet", t);
                }
            }
            function fa(n, r) {
                1 & n &&
                    (e.O4$(),
                    e.TgZ(0, "svg", 10)(1, "g", 11),
                    e._UZ(2, "path", 12),
                    e.qZA()());
            }
            function Sa(n, r) {
                1 & n &&
                    (e.O4$(),
                    e.TgZ(0, "svg", 10)(1, "g", 11),
                    e._UZ(2, "path", 13),
                    e.qZA()());
            }
            function Na(n, r) {
                1 & n &&
                    (e.O4$(),
                    e.TgZ(0, "svg", 10)(1, "g", 11),
                    e._UZ(2, "path", 14),
                    e.qZA()());
            }
            function Aa(n, r) {
                1 & n &&
                    (e.O4$(),
                    e.TgZ(0, "svg", 15),
                    e._UZ(1, "path", 16),
                    e.qZA());
            }
            function Oa(n, r) {
                1 & n &&
                    (e.O4$(),
                    e.TgZ(0, "svg", 10)(1, "g", 11),
                    e._UZ(2, "path", 17),
                    e.qZA()());
            }
            function va(n, r) {
                1 & n &&
                    (e.O4$(),
                    e.TgZ(0, "svg", 10)(1, "g", 11),
                    e._UZ(2, "path", 18),
                    e.qZA()());
            }
            function ya(n, r) {
                1 & n &&
                    (e.O4$(),
                    e.TgZ(0, "svg", 10)(1, "g", 11),
                    e._UZ(2, "path", 19),
                    e.qZA()());
            }
            let Pa = (() => {
                    class n {
                        constructor() {
                            this.socialIcon = de;
                        }
                        ngOnInit() {
                            this.socialAria = { label: `${this.name} icon` };
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)();
                        }),
                        (n.ɵcmp = e.Xpm({
                            type: n,
                            selectors: [["luno-social-icon"]],
                            inputs: { url: "url", icon: "icon", name: "name" },
                            decls: 22,
                            vars: 10,
                            consts: [
                                [
                                    "target",
                                    "_blank",
                                    "rel",
                                    "noopener",
                                    3,
                                    "ngSwitch",
                                    "href",
                                ],
                                [3, "ngTemplateOutlet", 4, "ngSwitchCase"],
                                ["facebook", ""],
                                ["twitter", ""],
                                ["linkedin", ""],
                                ["youtube", ""],
                                ["medium", ""],
                                ["instagram", ""],
                                ["telegram", ""],
                                [3, "ngTemplateOutlet"],
                                [
                                    "width",
                                    "24",
                                    "height",
                                    "24",
                                    "viewBox",
                                    "0 0 24 24",
                                ],
                                ["fill", "none", "fill-rule", "evenodd"],
                                [
                                    "d",
                                    "M23 4.667C23 2.74 21.26 1 19.333 1H4.667C2.739 1 1 2.74 1 4.667v14.666C1 21.26 2.74 23 4.667 23H12v-8.311H9.311v-3.667H12V9.594c0-2.464 1.85-4.683 4.125-4.683h2.964v3.667h-2.964c-.324 0-.703.394-.703.983v1.461h3.667v3.667h-3.667V23h3.911C21.261 23 23 21.26 23 19.333V4.667z",
                                ],
                                [
                                    "d",
                                    "M23.661 5.196a9.197 9.197 0 01-2.67.737 4.688 4.688 0 002.044-2.591 9.265 9.265 0 01-2.952 1.137A4.627 4.627 0 0016.689 3c-2.567 0-4.649 2.098-4.649 4.685 0 .367.041.724.12 1.067-3.863-.195-7.29-2.06-9.582-4.894-.4.692-.63 1.496-.63 2.355 0 1.625.821 3.058 2.068 3.899a4.6 4.6 0 01-2.105-.587v.06a4.678 4.678 0 003.73 4.592 4.623 4.623 0 01-2.1.08c.591 1.86 2.308 3.215 4.342 3.253A9.284 9.284 0 011 19.449a13.089 13.089 0 007.127 2.104c8.552 0 13.228-7.137 13.228-13.326 0-.203-.005-.406-.013-.606a9.474 9.474 0 002.319-2.425",
                                ],
                                [
                                    "d",
                                    "M19.436 19.489h-3.284v-5.211c0-1.309-.476-2.202-1.665-2.202-.907 0-1.447.602-1.685 1.184-.087.208-.108.499-.108.79v5.439H9.41s.044-8.826 0-9.74h3.285v1.38c.437-.664 1.217-1.61 2.96-1.61 2.162 0 3.782 1.393 3.782 4.385v5.585zM5.95 8.419h-.022c-1.102 0-1.815-.747-1.815-1.682 0-.955.735-1.683 1.858-1.683 1.124 0 1.815.728 1.837 1.683 0 .935-.713 1.683-1.858 1.683zM4.307 19.49h3.285v-9.74H4.307v9.74zM21.14 1.434H2.607C1.72 1.434 1 2.126 1 2.979v18.478c0 .853.72 1.546 1.607 1.546h18.532c.888 0 1.608-.693 1.608-1.546V2.979c0-.853-.72-1.545-1.608-1.545z",
                                ],
                                [
                                    "width",
                                    "30",
                                    "height",
                                    "24",
                                    "viewBox",
                                    "0 0 34 24",
                                ],
                                [
                                    "fill",
                                    "#12326B",
                                    "d",
                                    "M13.4643769,16.4258231 L13.4633181,6.83840584 L22.6179064,11.6486426 L13.4643769,16.4258231 Z M33.5650828,5.17705602 C33.5650828,5.17705602 33.2336711,2.82578753 32.2182593,1.79037632 C30.9296711,0.430799307 29.4854358,0.424401298 28.8236711,0.345492514 C24.0822593,0 16.9701416,0 16.9701416,0 L16.9553181,0 C16.9553181,0 9.84320047,0 5.10178871,0.345492514 C4.43896518,0.424401298 2.99578871,0.430799307 1.70614165,1.79037632 C0.690729882,2.82578753 0.360376941,5.17705602 0.360376941,5.17705602 C0.360376941,5.17705602 0.0215534118,7.93886346 0.0215534118,10.6996046 L0.0215534118,13.2886658 C0.0215534118,16.0504732 0.360376941,18.8112143 0.360376941,18.8112143 C0.360376941,18.8112143 0.690729882,21.1624828 1.70614165,22.1978939 C2.99578871,23.5574711 4.68884753,23.5148176 5.44272988,23.6566402 C8.15331812,23.9189585 16.9627299,24 16.9627299,24 C16.9627299,24 24.0822593,23.9893367 28.8236711,23.6438441 C29.4854358,23.563869 30.9296711,23.5574711 32.2182593,22.1978939 C33.2336711,21.1624828 33.5650828,18.8112143 33.5650828,18.8112143 C33.5650828,18.8112143 33.9039064,16.0504732 33.9039064,13.2886658 L33.9039064,10.6996046 C33.9039064,7.93886346 33.5650828,5.17705602 33.5650828,5.17705602 L33.5650828,5.17705602 Z",
                                ],
                                [
                                    "d",
                                    "M22.994 6.445H21.78c-.316 0-1.143.352-1.143.653V18c0 .301.827.548 1.143.548h1.214v2.421h-7.855v-2.42h1.571V7.25h-.273L12.655 20.97H9.728L5.996 7.251h-.283V18.55h1.57v2.421H1v-2.42h.871c.343 0 .7-.248.7-.549V7.098c0-.3-.357-.653-.7-.653H1V4.024h8.143l2.66 9.683h.07l2.686-9.683h8.435v2.42z",
                                ],
                                [
                                    "d",
                                    "M16.42 1a6.55 6.55 0 016.541 6.542v8.877a6.55 6.55 0 01-6.542 6.543H7.542A6.55 6.55 0 011 16.419V7.542A6.55 6.55 0 017.542 1zm0 2.21H7.541A4.333 4.333 0 003.21 7.541v8.877a4.333 4.333 0 004.333 4.333h8.877a4.333 4.333 0 004.333-4.333V7.542A4.333 4.333 0 0016.42 3.21zM11.98 6.3a5.686 5.686 0 015.68 5.68 5.686 5.686 0 01-5.68 5.68 5.686 5.686 0 01-5.68-5.68 5.686 5.686 0 015.68-5.68zm0 2.21a3.47 3.47 0 100 6.941 3.47 3.47 0 000-6.94zm5.692-3.528a1.361 1.361 0 110 2.722 1.361 1.361 0 010-2.722z",
                                ],
                                [
                                    "d",
                                    "M 10.675781 0.0703125 C 8.546875 0.3125 6.367188 1.191406 4.695312 2.46875 C 4.132812 2.902344 3.203125 3.804688 2.746094 4.363281 C -0.214844 7.984375 -0.832031 12.941406 1.171875 17.128906 C 1.761719 18.359375 2.398438 19.285156 3.339844 20.265625 C 7.277344 24.375 13.492188 25.152344 18.328125 22.152344 C 19.074219 21.6875 19.578125 21.292969 20.265625 20.632812 C 24.375 16.695312 25.152344 10.480469 22.152344 5.644531 C 20.457031 2.921875 17.585938 0.910156 14.46875 0.261719 C 13.230469 0.0117188 11.84375 -0.0585938 10.675781 0.0703125 Z M 17.382812 7.394531 C 17.507812 7.519531 17.523438 7.605469 17.507812 8.140625 C 17.503906 8.796875 17.273438 10.386719 16.769531 13.429688 C 16.121094 17.320312 16.035156 17.640625 15.628906 17.886719 C 15.375 18.046875 15.152344 18.046875 14.757812 17.894531 C 14.382812 17.75 10.492188 15.132812 10.335938 14.914062 C 10.132812 14.640625 10.132812 14.460938 10.328125 14.167969 C 10.429688 14.023438 11.324219 13.132812 12.320312 12.195312 C 13.316406 11.253906 14.175781 10.414062 14.238281 10.324219 C 14.488281 9.941406 14.273438 9.804688 13.828125 10.066406 C 13.664062 10.160156 12.386719 10.996094 10.996094 11.929688 C 8.0625 13.878906 8.101562 13.859375 7.144531 13.664062 C 6.242188 13.480469 4.828125 12.996094 4.65625 12.8125 C 4.46875 12.609375 4.507812 12.378906 4.773438 12.191406 C 5.238281 11.855469 14.46875 7.945312 16.015625 7.421875 C 16.761719 7.171875 17.148438 7.164062 17.382812 7.394531 Z M 17.382812 7.394531 ",
                                ],
                            ],
                            template: function (t, i) {
                                1 & t &&
                                    (e.TgZ(0, "a", 0),
                                    e.YNc(1, da, 1, 1, "ng-container", 1),
                                    e.YNc(2, ga, 1, 1, "ng-container", 1),
                                    e.YNc(3, ha, 1, 1, "ng-container", 1),
                                    e.YNc(4, Ca, 1, 1, "ng-container", 1),
                                    e.YNc(5, Ta, 1, 1, "ng-container", 1),
                                    e.YNc(6, Ea, 1, 1, "ng-container", 1),
                                    e.YNc(7, Ia, 1, 1, "ng-container", 1),
                                    e.qZA(),
                                    e.YNc(
                                        8,
                                        fa,
                                        3,
                                        0,
                                        "ng-template",
                                        null,
                                        2,
                                        e.W1O
                                    ),
                                    e.YNc(
                                        10,
                                        Sa,
                                        3,
                                        0,
                                        "ng-template",
                                        null,
                                        3,
                                        e.W1O
                                    ),
                                    e.YNc(
                                        12,
                                        Na,
                                        3,
                                        0,
                                        "ng-template",
                                        null,
                                        4,
                                        e.W1O
                                    ),
                                    e.YNc(
                                        14,
                                        Aa,
                                        2,
                                        0,
                                        "ng-template",
                                        null,
                                        5,
                                        e.W1O
                                    ),
                                    e.YNc(
                                        16,
                                        Oa,
                                        3,
                                        0,
                                        "ng-template",
                                        null,
                                        6,
                                        e.W1O
                                    ),
                                    e.YNc(
                                        18,
                                        va,
                                        3,
                                        0,
                                        "ng-template",
                                        null,
                                        7,
                                        e.W1O
                                    ),
                                    e.YNc(
                                        20,
                                        ya,
                                        3,
                                        0,
                                        "ng-template",
                                        null,
                                        8,
                                        e.W1O
                                    )),
                                    2 & t &&
                                        (e.Q6J("ngSwitch", i.icon)(
                                            "href",
                                            i.url,
                                            e.LSH
                                        ),
                                        e.uIk("aria-label", i.socialAria.label),
                                        e.xp6(1),
                                        e.Q6J(
                                            "ngSwitchCase",
                                            i.socialIcon.FACEBOOK
                                        ),
                                        e.xp6(1),
                                        e.Q6J(
                                            "ngSwitchCase",
                                            i.socialIcon.TWITTER
                                        ),
                                        e.xp6(1),
                                        e.Q6J(
                                            "ngSwitchCase",
                                            i.socialIcon.LINKEDIN
                                        ),
                                        e.xp6(1),
                                        e.Q6J(
                                            "ngSwitchCase",
                                            i.socialIcon.YOUTUBE
                                        ),
                                        e.xp6(1),
                                        e.Q6J(
                                            "ngSwitchCase",
                                            i.socialIcon.MEDIUM
                                        ),
                                        e.xp6(1),
                                        e.Q6J(
                                            "ngSwitchCase",
                                            i.socialIcon.INSTAGRAM
                                        ),
                                        e.xp6(1),
                                        e.Q6J(
                                            "ngSwitchCase",
                                            i.socialIcon.TELEGRAM
                                        ));
                            },
                            dependencies: [g.tP, g.RF, g.n9],
                            styles: [
                                "a[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--color-primary);transition:fill .3s ease}a[_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:var(--color-secondary)}",
                            ],
                        })),
                        n
                    );
                })(),
                xa = (() => {
                    class n {
                        constructor(t, i) {
                            (this.isoCountryService = t),
                                (this.commonInfoService = i);
                        }
                        getCountryFullName(t) {
                            switch (
                                (t ||
                                    (t =
                                        this.commonInfoService.navInfo?.loc
                                            .code ?? "Rest of World"),
                                t)
                            ) {
                                case d.C.gb:
                                    return "United Kingdom";
                                case d.C.us:
                                    return "United States";
                                default:
                                    return (
                                        this.isoCountryService?.getIsoCountryByAlpha2(
                                            t.toUpperCase()
                                        )?.name || t
                                    );
                            }
                        }
                    }
                    return (
                        (n.ɵfac = function (t) {
                            return new (t || n)(e.Y36($t), e.Y36(ue.E));
                        }),
                        (n.ɵcmp = e.Xpm({
                            type: n,
                            selectors: [["luno-selected-country"]],
                            inputs: { selectedCountry: "selectedCountry" },
                            decls: 5,
                            vars: 2,
                            consts: [
                                [1, "container"],
                                [3, "url"],
                                [3, "innerHtml"],
                            ],
                            template: function (t, i) {
                                1 & t &&
                                    (e.TgZ(0, "div", 0)(1, "mat-icon"),
                                    e._uU(2, "public"),
                                    e.qZA(),
                                    e.TgZ(3, "luno-hyperlink", 1),
                                    e._UZ(4, "span", 2),
                                    e.qZA()()),
                                    2 & t &&
                                        (e.xp6(3),
                                        e.Q6J("url", "/countrylist"),
                                        e.xp6(1),
                                        e.Q6J(
                                            "innerHtml",
                                            i.getCountryFullName(
                                                i.selectedCountry
                                            ),
                                            e.oJD
                                        ));
                            },
                            dependencies: [L.Hw, rn.t],
                            styles: [
                                ".container[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-left:10px}",
                            ],
                            changeDetection: 0,
                        })),
                        n
                    );
                })();
            function Ra(n, r) {
                1 & n && (e.O4$(), e.kcU(), e._UZ(0, "div"));
            }
            function La(n, r) {
                1 & n && e._UZ(0, "p", 23),
                    2 & n && e.Q6J("innerHtml", r.$implicit, e.oJD);
            }
            function Da(n, r) {
                if (
                    (1 & n &&
                        (e.O4$(),
                        e.kcU(),
                        e.TgZ(0, "section", 20)(1, "div", 21),
                        e.YNc(2, La, 1, 1, "p", 22),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.xp6(2), e.Q6J("ngForOf", t.disclaimerParagraphs);
                }
            }
            function Ma(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "mat-option", 28)(1, "a", 29),
                        e._UZ(2, "img", 30),
                        e._uU(3),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = r.$implicit,
                        i = e.oxw(2);
                    e.ekj(
                        "hide-selected-language",
                        i.languageDropdownFormControl.value === t
                    ),
                        e.Q6J("value", t),
                        e.xp6(1),
                        e.s9C("href", t.action.url, e.LSH),
                        e.xp6(1),
                        e.Q6J(
                            "src",
                            null == t.iconUrl ? null : t.iconUrl.inactiveIcon,
                            e.LSH
                        )("alt", t.action.name),
                        e.xp6(1),
                        e.hij(" ", t.action.name, " ");
                }
            }
            function Ua(n, r) {
                if (
                    (1 & n &&
                        (e.O4$(),
                        e.kcU(),
                        e.TgZ(0, "mat-form-field", 24)(1, "mat-label"),
                        e._uU(2),
                        e.qZA(),
                        e.TgZ(3, "mat-select", 25)(4, "mat-select-trigger"),
                        e._UZ(5, "img", 26),
                        e.TgZ(6, "span"),
                        e._uU(7),
                        e.qZA()(),
                        e.YNc(8, Ma, 4, 7, "mat-option", 27),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.xp6(2),
                        e.Oqu(t.languageDropdown.heading),
                        e.xp6(1),
                        e.Q6J("formControl", t.languageDropdownFormControl),
                        e.xp6(2),
                        e.Q6J(
                            "src",
                            null == t.languageDropdownFormControl.value ||
                                null ==
                                    t.languageDropdownFormControl.value.iconUrl
                                ? null
                                : t.languageDropdownFormControl.value.iconUrl
                                      .inactiveIcon,
                            e.LSH
                        )(
                            "alt",
                            null == t.languageDropdownFormControl.value ||
                                null ==
                                    t.languageDropdownFormControl.value.action
                                ? null
                                : t.languageDropdownFormControl.value.action
                                      .name
                        ),
                        e.xp6(2),
                        e.Oqu(
                            null == t.languageDropdownFormControl.value ||
                                null ==
                                    t.languageDropdownFormControl.value.action
                                ? null
                                : t.languageDropdownFormControl.value.action
                                      .name
                        ),
                        e.xp6(1),
                        e.Q6J("ngForOf", t.languageDropdown.navigationItems);
                }
            }
            function ba(n, r) {
                if ((1 & n && e._UZ(0, "span", 23), 2 & n)) {
                    const t = e.oxw(2).$implicit;
                    e.Q6J("innerHtml", t.action.name, e.oJD);
                }
            }
            function wa(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "luno-hyperlink", 42),
                        e.NdJ("clicked", function () {
                            e.CHM(t);
                            const C = e.oxw().$implicit,
                                A = e.oxw(4);
                            return e.KtG(A.onItemClicked(C.action));
                        }),
                        e.YNc(1, ba, 1, 1, "span", 43),
                        e.qZA();
                }
                if (2 & n) {
                    const t = e.oxw().$implicit;
                    e.Q6J("url", t.action.url),
                        e.xp6(1),
                        e.Q6J("ngIf", t.action.name);
                }
            }
            function Fa(n, r) {
                if (
                    (1 & n &&
                        (e.ynx(0),
                        e.YNc(1, wa, 2, 2, "luno-hyperlink", 41),
                        e.BQk()),
                    2 & n)
                ) {
                    const t = r.$implicit;
                    e.xp6(1), e.Q6J("ngIf", t.action);
                }
            }
            function Ba(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "div", 39)(1, "h4"),
                        e._uU(2),
                        e.qZA(),
                        e.TgZ(3, "div", 40),
                        e.YNc(4, Fa, 2, 1, "ng-container", 31),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = e.oxw().$implicit;
                    e.xp6(2),
                        e.Oqu(t.heading),
                        e.xp6(2),
                        e.Q6J("ngForOf", t.navigationItems);
                }
            }
            function Ga(n, r) {
                if (
                    (1 & n &&
                        (e.O4$(),
                        e.kcU(),
                        e.ynx(0),
                        e.YNc(1, Ba, 5, 2, "div", 38),
                        e.BQk()),
                    2 & n)
                ) {
                    const t = r.$implicit;
                    e.xp6(1), e.Q6J("ngIf", t);
                }
            }
            function ka(n, r) {
                1 & n && e.GkF(0);
            }
            function Wa(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "div", 44),
                        e.YNc(1, ka, 1, 0, "ng-container", 45),
                        e.qZA()),
                    2 & n)
                ) {
                    e.oxw(2);
                    const t = e.MAs(20);
                    e.xp6(1), e.Q6J("ngTemplateOutlet", t);
                }
            }
            function Ya(n, r) {
                if ((1 & n && e._UZ(0, "luno-social-icon", 46), 2 & n)) {
                    const t = r.$implicit;
                    e.Q6J("url", t.action.url)("icon", t.action.id)(
                        "name",
                        t.action.name
                    );
                }
            }
            function Ha(n, r) {
                if (
                    (1 & n &&
                        (e.O4$(),
                        e.YNc(0, Ga, 2, 1, "ng-container", 31),
                        e.kcU(),
                        e.TgZ(1, "div", 32),
                        e.YNc(2, Wa, 2, 1, "div", 33),
                        e.TgZ(3, "div", 1),
                        e._UZ(4, "luno-selected-country", 34),
                        e.ALo(5, "async"),
                        e.TgZ(6, "div", 35),
                        e.YNc(7, Ya, 1, 3, "luno-social-icon", 36),
                        e.qZA(),
                        e.TgZ(8, "p", 37),
                        e._uU(9),
                        e.qZA()()()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.Q6J("ngForOf", t.navigationGroups),
                        e.xp6(2),
                        e.Q6J("ngIf", t.languageDropdown),
                        e.xp6(1),
                        e.ekj("ignore-padding", t.ignoreMobilePadding),
                        e.xp6(1),
                        e.Q6J(
                            "selectedCountry",
                            e.lcZ(5, 9, t.currentCountry$)
                        ),
                        e.xp6(2),
                        e.ekj("ignore-padding", t.ignoreMobilePadding),
                        e.xp6(1),
                        e.Q6J("ngForOf", t.socialIcons),
                        e.xp6(2),
                        e.Oqu(t.copyrightText);
                }
            }
            function Ka(n, r) {
                1 & n && e.GkF(0);
            }
            function Va(n, r) {
                if ((1 & n && e._UZ(0, "span", 23), 2 & n)) {
                    const t = e.oxw(3).$implicit;
                    e.Q6J("innerHtml", t.action.name, e.oJD);
                }
            }
            function Za(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "luno-hyperlink", 42),
                        e.NdJ("clicked", function () {
                            e.CHM(t);
                            const C = e.oxw(2).$implicit,
                                A = e.oxw(3);
                            return e.KtG(A.onItemClicked(C.action));
                        }),
                        e.YNc(1, Va, 1, 1, "span", 43),
                        e.qZA();
                }
                if (2 & n) {
                    const t = e.oxw(2).$implicit;
                    e.Q6J("url", t.action.url),
                        e.xp6(1),
                        e.Q6J("ngIf", t.action.name);
                }
            }
            function Ja(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "li", 55),
                        e.YNc(1, Za, 2, 2, "luno-hyperlink", 41),
                        e.qZA()),
                    2 & n)
                ) {
                    const t = e.oxw().$implicit;
                    e.xp6(1), e.Q6J("ngIf", t.action);
                }
            }
            function $a(n, r) {
                if (
                    (1 & n && (e.ynx(0), e.YNc(1, Ja, 2, 1, "li", 54), e.BQk()),
                    2 & n)
                ) {
                    const t = r.$implicit;
                    e.xp6(1), e.Q6J("ngIf", t);
                }
            }
            function Qa(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "div", 52)(1, "ul", 53),
                        e.YNc(2, $a, 2, 1, "ng-container", 31),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = r.$implicit;
                    e.xp6(2), e.Q6J("ngForOf", t.navigationItems);
                }
            }
            function ja(n, r) {
                if ((1 & n && e._UZ(0, "luno-social-icon", 56), 2 & n)) {
                    const t = r.$implicit;
                    e.Q6J("url", t.action.url)("icon", t.action.id);
                }
            }
            function za(n, r) {
                if (
                    (1 & n &&
                        (e.O4$(),
                        e.kcU(),
                        e.TgZ(0, "div", 47)(1, "div", 1),
                        e.YNc(2, Ka, 1, 0, "ng-container", 45),
                        e.TgZ(3, "div", 48),
                        e.YNc(4, Qa, 3, 1, "div", 49),
                        e.qZA(),
                        e._UZ(5, "luno-selected-country", 50),
                        e.ALo(6, "async"),
                        e.TgZ(7, "div", 35),
                        e.YNc(8, ja, 1, 2, "luno-social-icon", 51),
                        e.qZA(),
                        e.TgZ(9, "p", 37),
                        e._uU(10),
                        e.qZA()()()),
                    2 & n)
                ) {
                    const t = e.oxw(),
                        i = e.MAs(20);
                    e.xp6(2),
                        e.Q6J("ngTemplateOutlet", i),
                        e.xp6(2),
                        e.Q6J("ngForOf", t.mobileNavigationGroups),
                        e.xp6(1),
                        e.Q6J(
                            "selectedCountry",
                            e.lcZ(6, 5, t.currentCountry$)
                        ),
                        e.xp6(3),
                        e.Q6J("ngForOf", t.socialIcons),
                        e.xp6(2),
                        e.Oqu(t.copyrightText);
                }
            }
            class ht {
                constructor(r, t, i) {
                    (this.colourService = r),
                        (this.commonInfoService = t),
                        (this.regionService = i),
                        (this.isMobile = !1),
                        (this.ignoreMobilePadding = !1),
                        (this.itemClicked = new e.vpe()),
                        (this.languageDropdownFormControl = new j.p4()),
                        (this.currentCountry$ = (0, p.of)("za")),
                        (this.isCustomerLanguageFR = !1),
                        (this.isCustomerLanguageEN = !1),
                        (this.lunoLicenseUS = "Luno US, Inc. | NMLS #2146174"),
                        (this.lunoLicenseFR =
                            "Luno France SAS I RCS paris 895 068 708 I Enregistrement PSAN AMF: E2022-045");
                }
                ngOnInit() {
                    (this.isCustomerLanguageFR =
                        this.commonInfoService.language === Re.s.fr),
                        (this.isCustomerLanguageEN =
                            this.commonInfoService.language === Re.s.en),
                        this.commonInfoService.language &&
                            this.setDisclaimer(
                                this.commonInfoService.language,
                                this.commonInfoService.navInfo?.loc.code.toLowerCase()
                            ),
                        (this.colourPrimary = this.colourService.primary),
                        this.languageDropdown &&
                            this.onLanguageDropdownChange(),
                        (this.currentCountry$ = this.regionService
                            .currentRegionUrl()
                            .pipe(
                                (0, ge.U)((r) =>
                                    r.startsWith("/")
                                        ? r.substring(1).split("/")[1]
                                        : r.split("/")[1]
                                )
                            )),
                        (this.copyrightText = this.copyrightContent());
                }
                onLanguageDropdownChange() {
                    if (
                        !this.languageDropdownFormControl ||
                        !this.currentUrl ||
                        !this.languageDropdown
                    )
                        return;
                    const r = this.languageDropdown.navigationItems.find(
                        (t) => t.action.url === this.currentUrl
                    );
                    r && this.languageDropdownFormControl.setValue(r);
                }
                onItemClicked(r) {
                    this.itemClicked.emit(r);
                }
                copyrightContent() {
                    const r = `\xa9 Copyright ${new Date()
                        .getFullYear()
                        .toString()}`;
                    switch (
                        this.commonInfoService.navInfo?.loc?.code?.toLowerCase()
                    ) {
                        case d.C.us:
                            return `${this.lunoLicenseUS} | ${r}`;
                        case d.C.fr:
                            return `${this.lunoLicenseFR} | ${r}`;
                        default:
                            return r;
                    }
                }
                setDisclaimer(r, t) {
                    t && t === d.C.gb
                        ? (this.disclaimerParagraphs = [
                              "<strong>Cryptocurrency is an unregulated high risk investment. The value of cryptocurrency can fluctuate and capital may be lost, without recourse to financial regulators. Fees apply to transactions on Luno and tax (including Capital Gains Tax) may be payable on any profits.</strong>",
                          ])
                        : "fr" !== r
                        ? "en" === r &&
                          (this.disclaimerParagraphs = [
                              "<strong>Investing in digital assets (Crypto-currencies) presents risks of volatility and partial or total capital loss.</strong>",
                              "<strong>The information and data on this site is provided for informational purposes only, although it has been compiled from reliable sources. This information does not constitute an offer by Luno to buy or sell crypto-currencies and does not constitute advice, inducement or recommendation to invest in crypto-currencies.</strong>",
                          ])
                        : (this.disclaimerParagraphs = [
                              "<strong>Investir dans les actifs num\xe9riques ( Cryptomonnaies) pr\xe9sente des risques de volatilit\xe9 et de perte en capital partielle ou totale.</strong>",
                              "<strong>Les informations et les donn\xe9es sur ce site sont fournies \xe0 titre indicatif, m\xeame si elles ont \xe9t\xe9 \xe9tablies \xe0 partir de sources fiables. Ces informations ne constituent de la part de Luno, ni une offre d'achat ou de vente sur les cryptomonnaies et ne peuvent \xeatre assimil\xe9es \xe0 un conseil, une incitation ou une recommandation \xe0 investir dans les cryptomonnaies.</strong>",
                              "Luno France SAS : SASU au capital de 1000 euros, RCS paris 895 068 708, Si\xe8ge social: 9 rue des colonnes, 75002 Paris.",
                              "Luno France est enregistr\xe9e aupr\xe8s de l\u2019AMF au titre de l'activit\xe9 de conservation d\u2019actifs num\xe9riques, de l\u2019activit\xe9 d\u2019achat/ vente d\u2019actifs num\xe9riques contre monnaie ayant cours l\xe9gal et de l\u2019activit\xe9 d'\xe9change d\u2019actifs num\xe9riques contre d\u2019autres actifs num\xe9riques, sous le num\xe9ro : E2022-045. / Luno France SAS : SASU with a capital of 1000 euros, RCS Paris 895 068 708, Registered office: 9 rue des colonnes, 75002 Paris.",
                          ]);
                }
            }
            (ht.ɵfac = function (r) {
                return new (r || ht)(e.Y36(Jt.K), e.Y36(ue.E), e.Y36(Ue.o));
            }),
                (ht.ɵcmp = e.Xpm({
                    type: ht,
                    selectors: [["luno-footer"]],
                    inputs: {
                        navigationGroups: "navigationGroups",
                        mobileNavigationGroups: "mobileNavigationGroups",
                        socialIcons: "socialIcons",
                        currentUrl: "currentUrl",
                        languageDropdown: "languageDropdown",
                        isMobile: "isMobile",
                        ignoreMobilePadding: "ignoreMobilePadding",
                    },
                    outputs: { itemClicked: "itemClicked" },
                    decls: 25,
                    vars: 6,
                    consts: [
                        [1, "footer-wrapper"],
                        [1, "icons-group-container"],
                        [
                            "width",
                            "120",
                            "height",
                            "38",
                            "viewBox",
                            "0 0 120 38",
                            "fill",
                            "none",
                            "xmlns",
                            "http://www.w3.org/2000/svg",
                        ],
                        ["clip-path", "url(#clip0_1461_2321)"],
                        [
                            "d",
                            "M105.841 17.7239C105.841 17.7239 105.841 17.7239 105.856 17.7085Z",
                            "fill",
                            "#001F83",
                        ],
                        [
                            "d",
                            "M73.0316 9.2041H72.2198C71.9331 9.2041 71.6581 9.31799 71.4554 9.52072C71.2526 9.72345 71.1387 9.99841 71.1387 10.2851V20.3539C71.1079 23.3167 68.7782 25.4677 65.597 25.4677H65.5815C62.3385 25.4677 60.0552 23.2461 60.0243 20.0671V10.2851C60.0243 10.1431 59.9963 10.0026 59.942 9.87142C59.8877 9.74027 59.808 9.6211 59.7077 9.52072C59.6073 9.42034 59.4881 9.34071 59.357 9.28639C59.2258 9.23206 59.0852 9.2041 58.9433 9.2041H58.127C57.8407 9.20469 57.5663 9.31883 57.3641 9.5215C57.1618 9.72416 57.0482 9.99879 57.0482 10.2851V20.1994C57.0482 22.7012 57.8954 24.8014 59.497 26.2773C60.9244 27.5833 62.9297 28.3467 65.1557 28.4239H65.8176C68.0899 28.3864 70.146 27.6385 71.6064 26.3192C73.2434 24.8433 74.1082 22.7232 74.1082 20.1928V10.2851C74.1082 9.99917 73.9949 9.72488 73.7932 9.52228C73.5914 9.31967 73.3176 9.20527 73.0316 9.2041V9.2041Z",
                            "fill",
                            "#001F83",
                        ],
                        [
                            "d",
                            "M52.0999 25.2647H48.0737C44.855 25.2647 42.5804 23.0343 42.5451 19.8663V10.2851C42.5445 9.99858 42.4305 9.72396 42.2279 9.52136C42.0253 9.31876 41.7506 9.20468 41.4641 9.2041H40.6545C40.3678 9.2041 40.0928 9.31799 39.8901 9.52072C39.6874 9.72345 39.5735 9.99841 39.5735 10.2851V20.0053C39.5735 22.5357 40.4383 24.6558 42.0752 26.1317C43.5357 27.4554 45.5918 28.1988 47.8663 28.2363H52.0999C52.3864 28.2358 52.661 28.1217 52.8636 27.9191C53.0662 27.7165 53.1803 27.4419 53.1809 27.1553V26.3457C53.1809 26.059 53.067 25.784 52.8642 25.5813C52.6615 25.3786 52.3866 25.2647 52.0999 25.2647V25.2647Z",
                            "fill",
                            "#001F83",
                        ],
                        [
                            "d",
                            "M117.337 11.9131C115.467 10.0552 112.936 9.01451 110.3 9.01906C107.664 9.02361 105.137 10.073 103.273 11.9374C101.527 13.7659 100.563 16.2038 100.586 18.7323V18.7808C100.565 20.0576 100.802 21.3255 101.282 22.5088C101.761 23.6921 102.475 24.7666 103.379 25.6681C104.284 26.5696 105.36 27.2796 106.545 27.7557C107.73 28.2318 108.999 28.4643 110.275 28.4392H110.386C111.657 28.4428 112.917 28.1935 114.091 27.7058C115.265 27.2181 116.33 26.5018 117.225 25.5985C118.12 24.6951 118.826 23.6229 119.302 22.4441C119.779 21.2653 120.016 20.0036 120 18.7323V18.6815C120.028 16.1647 119.072 13.7365 117.337 11.9131V11.9131ZM116.931 18.7323V18.783C116.931 22.6856 114.094 25.622 110.328 25.622C109.438 25.6296 108.556 25.4549 107.736 25.1084C106.916 24.762 106.176 24.2513 105.561 23.6078C104.326 22.2846 103.649 20.5356 103.672 18.7256V18.6749C103.672 14.7723 106.512 11.8359 110.275 11.8359H110.335C111.214 11.8371 112.084 12.0162 112.892 12.3624C113.7 12.7085 114.429 13.2146 115.036 13.8501C116.275 15.1712 116.955 16.9211 116.931 18.7323Z",
                            "fill",
                            "#001F83",
                        ],
                        [
                            "d",
                            "M93.8067 11.1651C92.3816 9.85909 90.374 9.09577 88.148 9.01855H87.4862C85.2139 9.05606 83.16 9.80393 81.6995 11.1232C80.0604 12.5991 79.1956 14.7192 79.1956 17.2518V27.1617C79.1961 27.4479 79.3099 27.7222 79.512 27.9247C79.7142 28.1272 79.9882 28.2416 80.2744 28.2427H81.0862C81.2282 28.2427 81.3687 28.2148 81.4999 28.1604C81.6311 28.1061 81.7502 28.0265 81.8506 27.9261C81.951 27.8257 82.0306 27.7066 82.0849 27.5754C82.1393 27.4443 82.1672 27.3037 82.1672 27.1617V17.093C82.1981 14.1301 84.5278 11.9792 87.7112 11.9792H87.7267C90.9675 11.9792 93.242 14.2007 93.2817 17.3798V27.1617C93.2813 27.304 93.3092 27.4449 93.3637 27.5764C93.4183 27.7078 93.4984 27.827 93.5994 27.9273C93.8039 28.1278 94.0784 28.241 94.3649 28.2427H95.1789C95.4652 28.2421 95.7396 28.128 95.9419 27.9253C96.1441 27.7227 96.2577 27.448 96.2577 27.1617V17.243C96.2555 14.7412 95.4084 12.641 93.8067 11.1651Z",
                            "fill",
                            "#001F83",
                        ],
                        [
                            "d",
                            "M14.2494 9.00537C11.431 9.00493 8.67585 9.84027 6.33226 11.4057C3.98868 12.9712 2.16194 15.1965 1.0831 17.8002C0.00426084 20.4039 -0.278224 23.269 0.271342 26.0333C0.820907 28.7975 2.17785 31.3367 4.17057 33.3298C6.16329 35.3228 8.70229 36.6801 11.4665 37.2301C14.2306 37.7801 17.0958 37.4981 19.6997 36.4196C22.3035 35.3412 24.5291 33.5148 26.0949 31.1715C27.6608 28.8281 28.4966 26.0731 28.4966 23.2547C28.4966 19.476 26.9956 15.8519 24.3238 13.1797C21.652 10.5075 18.0282 9.00596 14.2494 9.00537V9.00537ZM14.2494 33.4757C12.2272 33.4761 10.2504 32.8769 8.56885 31.7537C6.88731 30.6305 5.57664 29.0339 4.8026 27.1658C4.02856 25.2977 3.82592 23.2419 4.22031 21.2586C4.61471 19.2753 5.58841 17.4535 7.01828 16.0236C8.44815 14.5938 10.27 13.6201 12.2533 13.2257C14.2366 12.8313 16.2923 13.0339 18.1604 13.808C20.0286 14.582 21.6252 15.8927 22.7484 17.5742C23.8715 19.2557 24.4708 21.2326 24.4704 23.2547C24.4698 25.9653 23.3927 28.5647 21.4761 30.4814C19.5594 32.3981 16.96 33.4751 14.2494 33.4757Z",
                            "fill",
                            "#ACD0F7",
                        ],
                        [
                            "d",
                            "M14.2494 5.99194C11.4309 5.99151 8.67565 6.8269 6.33201 8.39248C3.98838 9.95805 2.16168 12.1835 1.08291 14.7873C0.00413124 17.3911 -0.278247 20.2564 0.271497 23.0207C0.821242 25.785 2.1784 28.3242 4.17135 30.3171C6.16429 32.3101 8.70349 33.6672 11.4678 34.217C14.2321 34.7667 17.0974 34.4844 19.7012 33.4056C22.305 32.3268 24.5304 30.5001 26.096 28.1565C27.6616 25.8128 28.497 23.0575 28.4965 20.2391C28.4965 16.4605 26.9955 12.8367 24.3236 10.1648C21.6518 7.49298 18.028 5.99194 14.2494 5.99194V5.99194ZM14.2494 30.4623C12.2273 30.4627 10.2506 29.8635 8.56908 28.7404C6.8876 27.6174 5.57691 26.0209 4.80281 24.1529C4.0287 22.2849 3.82593 20.2293 4.22014 18.246C4.61436 16.2628 5.58785 14.441 7.0175 13.011C8.44715 11.581 10.2687 10.6072 12.2519 10.2125C14.2351 9.81787 16.2907 10.0202 18.1589 10.7939C20.0271 11.5676 21.6239 12.8779 22.7473 14.5592C23.8707 16.2404 24.4704 18.2171 24.4704 20.2391C24.4704 22.9501 23.3936 25.5501 21.4768 27.4672C19.5601 29.3844 16.9603 30.4617 14.2494 30.4623V30.4623Z",
                            "fill",
                            "#6EAAF5",
                        ],
                        [
                            "d",
                            "M14.2494 2.97607C11.431 2.97564 8.67585 3.81098 6.33226 5.37645C3.98868 6.94193 2.16194 9.16722 1.0831 11.7709C0.00426084 14.3746 -0.278224 17.2397 0.271342 20.004C0.820907 22.7682 2.17785 25.3075 4.17057 27.3005C6.16329 29.2935 8.70229 30.6509 11.4665 31.2008C14.2306 31.7508 17.0958 31.4688 19.6997 30.3903C22.3035 29.3119 24.5291 27.4855 26.0949 25.1422C27.6608 22.7989 28.4966 20.0438 28.4966 17.2254C28.4966 13.4467 26.9956 9.82261 24.3238 7.1504C21.652 4.47819 18.0282 2.97666 14.2494 2.97607V2.97607ZM14.2494 27.4464C12.2272 27.4469 10.2504 26.8476 8.56885 25.7244C6.88731 24.6012 5.57664 23.0046 4.8026 21.1365C4.02856 19.2684 3.82592 17.2126 4.22031 15.2293C4.61471 13.246 5.58841 11.4242 7.01828 9.99435C8.44815 8.56448 10.27 7.59077 12.2533 7.19638C14.2366 6.80198 16.2923 7.00462 18.1604 7.77866C20.0286 8.5527 21.6252 9.86338 22.7484 11.5449C23.8715 13.2264 24.4708 15.2033 24.4704 17.2254C24.4698 19.936 23.3927 22.5354 21.4761 24.4521C19.5594 26.3688 16.96 27.4458 14.2494 27.4464V27.4464Z",
                            "fill",
                            "#2F6DDA",
                        ],
                        [
                            "d",
                            "M14.2494 -0.0375975C11.4309 -0.0380338 8.67565 0.797362 6.33201 2.36293C3.98838 3.92851 2.16168 6.15393 1.08291 8.75775C0.00413124 11.3616 -0.278247 14.2268 0.271497 16.9911C0.821242 19.7555 2.1784 22.2947 4.17135 24.2876C6.16429 26.2805 8.70349 27.6377 11.4678 28.1874C14.2321 28.7372 17.0974 28.4548 19.7012 27.376C22.305 26.2973 24.5304 24.4705 26.096 22.1269C27.6616 19.7833 28.497 17.028 28.4965 14.2096C28.4965 10.431 26.9955 6.80716 24.3236 4.1353C21.6518 1.46344 18.028 -0.0375975 14.2494 -0.0375975V-0.0375975ZM14.2494 24.4327C12.2273 24.4332 10.2506 23.834 8.56908 22.7109C6.8876 21.5878 5.57691 19.9913 4.80281 18.1233C4.0287 16.2553 3.82593 14.1997 4.22014 12.2165C4.61436 10.2332 5.58785 8.41142 7.0175 6.98146C8.44715 5.5515 10.2687 4.57762 12.2519 4.18297C14.2351 3.78833 16.2907 3.99065 18.1589 4.76436C20.0271 5.53806 21.6239 6.84839 22.7473 8.52963C23.8707 10.2109 24.4704 12.1875 24.4704 14.2096C24.4704 16.9205 23.3936 19.5205 21.4768 21.4377C19.5601 23.3548 16.9603 24.4322 14.2494 24.4327V24.4327Z",
                            "fill",
                            "#001E87",
                        ],
                        ["id", "clip0_1461_2321"],
                        ["width", "120", "height", "37.5416", "fill", "white"],
                        [4, "ngIf", "ngIfThen", "ngIfElse"],
                        ["class", "disclaimer-section", 4, "ngIf"],
                        ["languageSelector", ""],
                        ["desktopView", ""],
                        ["mobileView", ""],
                        [1, "disclaimer-section"],
                        [1, "disclaimer-container"],
                        [3, "innerHtml", 4, "ngFor", "ngForOf"],
                        [3, "innerHtml"],
                        ["appearance", "outline", 1, "language-selector"],
                        [3, "formControl"],
                        [
                            "height",
                            "25",
                            "width",
                            "25",
                            "loading",
                            "lazy",
                            1,
                            "language-selector-img",
                            3,
                            "src",
                            "alt",
                        ],
                        [
                            "class",
                            "language-select-option",
                            3,
                            "hide-selected-language",
                            "value",
                            4,
                            "ngFor",
                            "ngForOf",
                        ],
                        [1, "language-select-option", 3, "value"],
                        [3, "href"],
                        [
                            "loading",
                            "lazy",
                            1,
                            "language-selector-img",
                            3,
                            "src",
                            "alt",
                        ],
                        [4, "ngFor", "ngForOf"],
                        [1, "language-selector-container"],
                        ["class", "language-selector-desktop", 4, "ngIf"],
                        [3, "selectedCountry"],
                        [1, "social-icons-container"],
                        [3, "url", "icon", "name", 4, "ngFor", "ngForOf"],
                        [1, "copyright"],
                        ["class", "nav-group-container", 4, "ngIf"],
                        [1, "nav-group-container"],
                        [1, "links-container"],
                        [3, "url", "clicked", 4, "ngIf"],
                        [3, "url", "clicked"],
                        [3, "innerHtml", 4, "ngIf"],
                        [1, "language-selector-desktop"],
                        [4, "ngTemplateOutlet"],
                        [3, "url", "icon", "name"],
                        [1, "language-selector-mobile"],
                        [1, "footer-links-container"],
                        ["class", "footer-links", 4, "ngFor", "ngForOf"],
                        [1, "selected-country-mobile", 3, "selectedCountry"],
                        [3, "url", "icon", 4, "ngFor", "ngForOf"],
                        [1, "footer-links"],
                        [1, "nav"],
                        ["class", "nav-item", 4, "ngIf"],
                        [1, "nav-item"],
                        [3, "url", "icon"],
                    ],
                    template: function (r, t) {
                        if (
                            (1 & r &&
                                (e.TgZ(0, "footer")(1, "div", 0)(2, "div", 1),
                                e.O4$(),
                                e.TgZ(3, "svg", 2)(4, "g", 3),
                                e._UZ(5, "path", 4)(6, "path", 5)(7, "path", 6)(
                                    8,
                                    "path",
                                    7
                                )(9, "path", 8)(10, "path", 9)(11, "path", 10)(
                                    12,
                                    "path",
                                    11
                                )(13, "path", 12),
                                e.qZA(),
                                e.TgZ(14, "defs")(15, "clipPath", 13),
                                e._UZ(16, "rect", 14),
                                e.qZA()()()(),
                                e.YNc(17, Ra, 1, 0, "div", 15),
                                e.qZA()(),
                                e.YNc(18, Da, 3, 1, "section", 16),
                                e.YNc(
                                    19,
                                    Ua,
                                    9,
                                    6,
                                    "ng-template",
                                    null,
                                    17,
                                    e.W1O
                                ),
                                e.YNc(
                                    21,
                                    Ha,
                                    10,
                                    11,
                                    "ng-template",
                                    null,
                                    18,
                                    e.W1O
                                ),
                                e.YNc(
                                    23,
                                    za,
                                    11,
                                    7,
                                    "ng-template",
                                    null,
                                    19,
                                    e.W1O
                                )),
                            2 & r)
                        ) {
                            const i = e.MAs(22),
                                C = e.MAs(24);
                            e.ekj("ignore-padding", t.ignoreMobilePadding),
                                e.xp6(17),
                                e.Q6J("ngIf", t.isMobile && t.languageDropdown)(
                                    "ngIfThen",
                                    C
                                )("ngIfElse", i),
                                e.xp6(1),
                                e.Q6J(
                                    "ngIf",
                                    (null == t.disclaimerParagraphs
                                        ? null
                                        : t.disclaimerParagraphs.length) > 0
                                );
                        }
                    },
                    dependencies: [
                        g.sg,
                        g.O5,
                        g.tP,
                        v.KE,
                        v.hX,
                        R.ey,
                        y.gD,
                        y.$L,
                        rn.t,
                        Pa,
                        j.JJ,
                        j.oH,
                        xa,
                        g.Ov,
                    ],
                    styles: [
                        "footer[_ngcontent-%COMP%]{padding:60px 10%;background:var(--color-neutral-100);z-index:3;position:relative}footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]{max-width:1400px;margin:auto;display:flex;justify-content:space-around}@media screen and (max-width: 992px){footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]{flex-direction:column}footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]:not(.ignore-padding){padding:16px}}footer[_ngcontent-%COMP%]   .footer-wrapper.ignore-padding[_ngcontent-%COMP%]{flex-direction:column;align-items:center}footer[_ngcontent-%COMP%]   .footer-wrapper.ignore-padding[_ngcontent-%COMP%] > .icons-group-container[_ngcontent-%COMP%]{width:inherit;margin:inherit}section[_ngcontent-%COMP%]{margin:auto;box-sizing:border-box;padding-bottom:20px}section[_ngcontent-%COMP%]   .disclaimer-container[_ngcontent-%COMP%]{border:2px solid var(--color-primary);padding:24px;margin:auto auto 48px;width:90%;max-width:1220px}@media screen and (min-width: 1150px){section[_ngcontent-%COMP%]   .disclaimer-container[_ngcontent-%COMP%]{width:100%}}[_nghost-%COMP%]     a{display:block;margin:8px 0;line-height:1.6;text-decoration:none;transition:color .4s ease;color:var(--color-primary)}[_nghost-%COMP%]     a:hover{color:var(--color-secondary)}h4[_ngcontent-%COMP%]{text-transform:uppercase;margin-top:0;margin-bottom:10px;color:var(--color-primary);font-weight:800;line-height:1.1;font-size:16px;line-height:1.428571429;color:inherit}luno-social-icon[_ngcontent-%COMP%]{margin:0}.icons-group-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:column wrap;max-width:205px}.icons-group-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:inherit;margin-top:8px;font-size:14px}@media screen and (max-width: 992px){.icons-group-container[_ngcontent-%COMP%]{width:150px;margin:20px auto;flex-direction:row;justify-content:center}}.icons-group-container.ignore-padding[_ngcontent-%COMP%]{width:150px;margin:20px auto;flex-direction:row;justify-content:center}.social-icons-container[_ngcontent-%COMP%]{width:100%;height:-moz-max-content;height:max-content;display:flex;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width: 768px){.social-icons-container[_ngcontent-%COMP%]:not(.ignore-padding){padding-top:30px}}.nav-group-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 8px;max-width:250px}.nav-group-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:130px}@media screen and (max-width: 992px){.nav-group-container[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between;width:100%;padding:16px 0;border-top:1px solid var(--color-neutral-300)}.nav-group-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:8px 0}}.links-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media screen and (max-width: 992px){.links-container[_ngcontent-%COMP%]{width:50%}}.language-selector-img[_ngcontent-%COMP%]{width:25px;margin-right:10px;vertical-align:middle}.language-selector[_ngcontent-%COMP%]     .mat-form-field-wrapper{margin:0}@media screen and (max-width: 768px){.language-selector[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding:0}}.language-selector[_ngcontent-%COMP%]     .mat-form-field-outline, .language-selector[_ngcontent-%COMP%]     .mat-form-field-label{color:var(--color-primary)}.language-selector[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{transform:translateY(0)}  .language-select-option.mat-option{padding:0}  .language-select-option a{display:block;color:var(--color-primary);padding:0 16px}.hide-selected-language[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 768px){.language-selector-desktop[_ngcontent-%COMP%]{display:none}}.language-selector-mobile[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 768px){.language-selector-mobile[_ngcontent-%COMP%]{display:block;margin-top:30px}.language-selector-mobile[_ngcontent-%COMP%]     .mat-form-field-wrapper{min-width:320px}}.language-selector-mobile[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]{width:100%}.language-selector-mobile[_ngcontent-%COMP%]   .footer-links-container[_ngcontent-%COMP%]{margin:20px auto 0;display:flex;flex-direction:row;justify-content:space-around;text-align:left;padding-bottom:30px;border-bottom:1px solid var(--color-neutral-300)}.language-selector-mobile[_ngcontent-%COMP%]   .footer-links-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{padding-left:0;margin:0;list-style:none;min-width:130px}.language-selector-mobile[_ngcontent-%COMP%]   .footer-links-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:5px 0}.selected-country-mobile[_ngcontent-%COMP%]{margin-top:30px}",
                    ],
                    changeDetection: 0,
                })),
                (0, ze.gn)(
                    [
                        (0, nn.G)("onLanguageDropdownChange"),
                        (0, ze.w6)("design:type", String),
                    ],
                    ht.prototype,
                    "currentUrl",
                    void 0
                ),
                (0, ze.gn)(
                    [
                        (0, nn.G)("onLanguageDropdownChange"),
                        (0, ze.w6)("design:type", Object),
                    ],
                    ht.prototype,
                    "languageDropdown",
                    void 0
                );
            var po = o(5095);
            let Xa = (() => {
                class n {
                    transform(t, i) {
                        if (!t.activeForRoutes?.length || typeof i > "u")
                            return !1;
                        for (const C of t.activeForRoutes)
                            if (
                                (t.isActiveForRoutesExact && i === C) ||
                                (!t.isActiveForRoutesExact && i.includes(C))
                            )
                                return !0;
                        return !1;
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵpipe = e.Yjl({
                        name: "routeIsActive",
                        type: n,
                        pure: !0,
                    })),
                    n
                );
            })();
            function qa(n, r) {
                if ((1 & n && e._UZ(0, "div", 7), 2 & n)) {
                    const t = r.ngIf;
                    e.Udp("-webkit-mask-image", "url(" + t + ")")(
                        "mask-image",
                        "url(" + t + ")"
                    );
                }
            }
            function er(n, r) {
                if (
                    (1 & n &&
                        (e.ynx(0),
                        e.TgZ(1, "li", 2)(2, "a", 3),
                        e.ALo(3, "routeIsActive"),
                        e.TgZ(4, "div", 4),
                        e.ALo(5, "async"),
                        e.YNc(6, qa, 1, 4, "div", 5),
                        e.qZA(),
                        e.TgZ(7, "span", 6),
                        e._uU(8),
                        e.qZA()()(),
                        e.BQk()),
                    2 & n)
                ) {
                    const t = r.$implicit,
                        i = e.oxw(2);
                    e.xp6(2),
                        e.ekj("active", e.xi3(3, 6, t, i.activeUrl)),
                        e.Q6J("routerLink", t.action.url),
                        e.xp6(2),
                        e.Q6J("lunoBadge", e.lcZ(5, 9, t.badgeConfig$)),
                        e.xp6(2),
                        e.Q6J(
                            "ngIf",
                            null == t || null == t.matIcon
                                ? null
                                : t.matIcon.name
                        ),
                        e.xp6(2),
                        e.Oqu(t.action.name);
                }
            }
            function tr(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "nav")(1, "ul"),
                        e.YNc(2, er, 9, 11, "ng-container", 1),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.xp6(2),
                        e.Q6J("ngForOf", t.navigationBottom.navigationItems)(
                            "ngForTrackBy",
                            t.trackNavItemFn
                        );
                }
            }
            let nr = (() => {
                class n {
                    constructor() {
                        this.trackNavItemFn = (t, i) => i.action?.id;
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-navigation-bottom"]],
                        inputs: {
                            navigationBottom: "navigationBottom",
                            activeUrl: "activeUrl",
                        },
                        decls: 1,
                        vars: 1,
                        consts: [
                            [4, "ngIf"],
                            [4, "ngFor", "ngForOf", "ngForTrackBy"],
                            ["matRipple", "", 1, "list-item"],
                            [1, "list-item-content", 3, "routerLink"],
                            [1, "icon-wrapper", 3, "lunoBadge"],
                            [
                                "class",
                                "icon",
                                3,
                                "-webkit-mask-image",
                                "mask-image",
                                4,
                                "ngIf",
                            ],
                            [1, "list-item-label"],
                            [1, "icon"],
                        ],
                        template: function (t, i) {
                            1 & t && e.YNc(0, tr, 3, 2, "nav", 0),
                                2 & t && e.Q6J("ngIf", i.navigationBottom);
                        },
                        dependencies: [po.l, g.sg, g.O5, R.wG, w.yS, g.Ov, Xa],
                        styles: [
                            "[_nghost-%COMP%]{position:fixed;bottom:0;left:0;right:0;height:56px;width:100vw;overflow:hidden;z-index:99;display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;background:var(--color-neutral-0);box-shadow:0 0 10px #0000001a}nav[_ngcontent-%COMP%]{width:100%}ul[_ngcontent-%COMP%]{display:flex;padding:0}a[_ngcontent-%COMP%]{text-decoration:none;outline:none;color:inherit}.icon[_ngcontent-%COMP%]{height:30px;width:30px;background-color:var(--color-primary);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.list-item[_ngcontent-%COMP%]{height:56px;flex:1}.list-item-content[_ngcontent-%COMP%]{opacity:.55;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:500}.list-item-content.active[_ngcontent-%COMP%]{opacity:1;font-weight:800}.list-item-label[_ngcontent-%COMP%]{font-weight:inherit;line-height:18px}@media only screen and (max-width: 650px){.list-item-label[_ngcontent-%COMP%]{font-size:12px;line-height:15px}}@media only screen and (max-width: 320px){.list-item-label[_ngcontent-%COMP%]{font-size:12px;line-height:12px}}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            const or_logoDescription_text = "Luno logo";
            function ir(n, r) {
                if (
                    (1 & n && (e.O4$(), e.kcU(), e._UZ(0, "span", 10)), 2 & n)
                ) {
                    const t = e.oxw();
                    e.Q6J("innerHTML", t.wordMark, e.oJD);
                }
            }
            let na = (() => {
                class n {
                    constructor(t) {
                        (this.i18n = t),
                            (this.isOpaque = !1),
                            (this.hamburgerIconClick = new e.vpe());
                    }
                    ngOnInit() {
                        const t = this.i18n.translateText(
                            or_logoDescription_text
                        );
                        this.logoAria = { label: t };
                    }
                    onMenuClick() {
                        this.hamburgerIconClick.emit();
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(Z.K));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-hamburger"]],
                        inputs: { wordMark: "wordMark", isOpaque: "isOpaque" },
                        outputs: { hamburgerIconClick: "hamburgerIconClick" },
                        decls: 11,
                        vars: 4,
                        consts: [
                            [
                                "mat-mini-fab",
                                "",
                                "aria-label",
                                "The hamburger button that opens the menu",
                                1,
                                "mat-elevation-z",
                                3,
                                "color",
                                "click",
                            ],
                            [1, "material-icons-round"],
                            ["url", "/", 3, "aria"],
                            [
                                "width",
                                "120",
                                "height",
                                "38",
                                "fill",
                                "none",
                                "xmlns",
                                "http://www.w3.org/2000/svg",
                            ],
                            [
                                "id",
                                "text",
                                "d",
                                "m105.841 17.762.016-.014ZM73.032 9.241h-.812a1.081 1.081 0 0 0-1.081 1.082V20.39c-.031 2.963-2.36 5.114-5.544 5.114h-.013c-3.243 0-5.53-2.221-5.558-5.4v-9.783a1.081 1.081 0 0 0-1.08-1.078h-.817a1.081 1.081 0 0 0-1.079 1.08v9.915c0 2.502.847 4.602 2.449 6.078 1.425 1.306 3.433 2.07 5.659 2.146h.662c2.272-.037 4.326-.785 5.786-2.104 1.633-1.474 2.515-3.594 2.515-6.127v-9.91a1.084 1.084 0 0 0-1.087-1.08ZM52.1 25.304h-4.026c-3.22 0-5.494-2.23-5.529-5.398v-9.581a1.083 1.083 0 0 0-1.08-1.081h-.813a1.083 1.083 0 0 0-1.08 1.08v9.708c0 2.532.866 4.652 2.503 6.128 1.46 1.324 3.517 2.067 5.791 2.105H52.1a1.083 1.083 0 0 0 1.08-1.081v-.81a1.086 1.086 0 0 0-1.08-1.08v.01ZM117.335 11.953a9.601 9.601 0 0 0-7.015-2.888 9.57 9.57 0 0 0-9.727 9.707v.05a9.506 9.506 0 0 0 5.953 8.97 9.504 9.504 0 0 0 3.727.687h.113a9.588 9.588 0 0 0 9.621-9.707v-.049a9.668 9.668 0 0 0-2.672-6.77Zm-.404 6.819v.053c0 3.902-2.839 6.839-6.605 6.839a6.511 6.511 0 0 1-4.765-2.014 7.014 7.014 0 0 1-1.88-4.878v-.05c0-3.904 2.84-6.84 6.603-6.84h.06a6.513 6.513 0 0 1 4.701 2.014 6.997 6.997 0 0 1 1.886 4.876ZM93.807 11.205c-1.428-1.306-3.433-2.07-5.659-2.147h-.662c-2.272.038-4.328.786-5.787 2.105-1.639 1.476-2.504 3.596-2.504 6.126v9.91a1.081 1.081 0 0 0 1.08 1.081h.811a1.081 1.081 0 0 0 1.081-1.08V17.132c.031-2.963 2.36-5.114 5.542-5.114h.015c3.243 0 5.527 2.222 5.558 5.4v9.78a1.07 1.07 0 0 0 .669 1c.131.054.272.082.414.081h.814a1.08 1.08 0 0 0 1.079-1.08v-9.917c-.002-2.502-.85-4.602-2.451-6.078Z",
                            ],
                            [
                                "id",
                                "fourth-layer",
                                "d",
                                "M14.25 9.045a14.25 14.25 0 1 0-.005 28.498 14.25 14.25 0 0 0 .004-28.498Zm0 24.47a10.223 10.223 0 1 1 .016-20.445 10.223 10.223 0 0 1-.017 20.445Z",
                            ],
                            [
                                "id",
                                "third-layer",
                                "d",
                                "M14.25 6.032a14.25 14.25 0 1 0-.005 28.498 14.25 14.25 0 0 0 .004-28.498Zm0 24.47a10.223 10.223 0 1 1 .017-20.446 10.223 10.223 0 0 1-.018 20.446Z",
                            ],
                            [
                                "id",
                                "second-layer",
                                "d",
                                "M14.25 3.016a14.25 14.25 0 1 0-.005 28.498 14.25 14.25 0 0 0 .004-28.498Zm0 24.47a10.224 10.224 0 1 1 .017-20.447 10.224 10.224 0 0 1-.018 20.447Z",
                            ],
                            [
                                "id",
                                "first-layer",
                                "d",
                                "M14.25 0a14.25 14.25 0 1 0-.005 28.499A14.25 14.25 0 0 0 14.249 0Zm0 24.473a10.224 10.224 0 1 1 .018-20.448 10.224 10.224 0 0 1-.019 20.448Z",
                            ],
                            ["class", "word-mark", 3, "innerHTML", 4, "ngIf"],
                            [1, "word-mark", 3, "innerHTML"],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.TgZ(0, "button", 0),
                                e.NdJ("click", function () {
                                    return i.onMenuClick();
                                }),
                                e.TgZ(1, "mat-icon", 1),
                                e._uU(2, "menu"),
                                e.qZA()(),
                                e.TgZ(3, "luno-hyperlink", 2),
                                e.O4$(),
                                e.TgZ(4, "svg", 3),
                                e._UZ(5, "path", 4)(6, "path", 5)(7, "path", 6)(
                                    8,
                                    "path",
                                    7
                                )(9, "path", 8),
                                e.qZA()(),
                                e.YNc(10, ir, 1, 1, "span", 9)),
                                2 & t &&
                                    (e.Q6J(
                                        "color",
                                        i.isOpaque ? "" : "primary"
                                    ),
                                    e.xp6(3),
                                    e.Q6J("aria", i.logoAria),
                                    e.xp6(1),
                                    e.uIk(
                                        "class",
                                        i.isOpaque
                                            ? "opaque-logo"
                                            : "bright-logo"
                                    ),
                                    e.xp6(6),
                                    e.Q6J("ngIf", i.wordMark));
                        },
                        dependencies: [g.O5, rn.t, L.Hw, c.lW],
                        styles: [
                            "[_nghost-%COMP%]{padding:0;display:flex;align-items:center}[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:auto}.word-mark[_ngcontent-%COMP%]{margin-left:16px;line-height:16px}luno-hyperlink[_ngcontent-%COMP%]{height:38px;margin-left:20px}.bright-logo[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{fill:#fff}.bright-logo[_ngcontent-%COMP%]   #fourth-layer[_ngcontent-%COMP%]{fill:#001e88}.bright-logo[_ngcontent-%COMP%]   #third-layer[_ngcontent-%COMP%]{fill:#2f6dda}.bright-logo[_ngcontent-%COMP%]   #second-layer[_ngcontent-%COMP%]{fill:#82b8f5}.bright-logo[_ngcontent-%COMP%]   #first-layer[_ngcontent-%COMP%]{fill:#fff}.opaque-logo[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{fill:#001f83}.opaque-logo[_ngcontent-%COMP%]   #fourth-layer[_ngcontent-%COMP%]{fill:#acd0f7}.opaque-logo[_ngcontent-%COMP%]   #third-layer[_ngcontent-%COMP%]{fill:#6eaaf5}.opaque-logo[_ngcontent-%COMP%]   #second-layer[_ngcontent-%COMP%]{fill:#2f6dda}.opaque-logo[_ngcontent-%COMP%]   #first-layer[_ngcontent-%COMP%]{fill:#001e88}",
                        ],
                    })),
                    n
                );
            })();
            var oa = o(2598);
            function ar(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "luno-hamburger", 3),
                        e.NdJ("hamburgerIconClick", function () {
                            e.CHM(t);
                            const C = e.oxw();
                            return e.KtG(C.onMenuClick());
                        }),
                        e.qZA();
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.Q6J("isOpaque", t.isOpaque);
                }
            }
            function rr(n, r) {
                if ((1 & n && e._UZ(0, "picture", 11), 2 & n)) {
                    const t = e.oxw(2).$implicit;
                    let i, C;
                    e.Q6J("imgWidth", "14px")("imgHeight", "14px")(
                        "srcUrl",
                        null !==
                            (i =
                                null == t || null == t.iconUrl
                                    ? null
                                    : t.iconUrl.activeIcon) && void 0 !== i
                            ? i
                            : ""
                    )("altText", t.action.name)(
                        "fallbackSrc",
                        null !==
                            (C =
                                null == t || null == t.iconUrl
                                    ? null
                                    : t.iconUrl.activeIcon) && void 0 !== C
                            ? C
                            : ""
                    );
                }
            }
            function sr(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "span", 12)(1, "mat-icon", 13),
                        e._uU(2),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = e.oxw(2).$implicit;
                    e.xp6(1),
                        e.Q6J("color", t.matIcon.theme),
                        e.xp6(1),
                        e.hij(" ", t.matIcon.name, " ");
                }
            }
            function cr(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "luno-hyperlink", 8),
                        e.ALo(1, "async"),
                        e.YNc(2, rr, 1, 5, "picture", 9),
                        e.YNc(3, sr, 3, 2, "span", 10),
                        e._uU(4),
                        e.qZA()),
                    2 & n)
                ) {
                    const t = e.oxw().$implicit,
                        i = e.oxw(2);
                    e.ekj("active", i.isRouteActive(t))(
                        "hide-on-mobile",
                        t.hideOnMobile
                    )("hide-on-tablet", t.hideOnTablet)(
                        "hide-on-laptop-screen",
                        t.hideOnLaptopScreen
                    )("hide-on-desktop", t.hideOnDesktop),
                        e.Q6J("action", t.action)(
                            "lunoBadge",
                            e.lcZ(1, 15, t.badgeConfig$)
                        ),
                        e.xp6(2),
                        e.Q6J("ngIf", t.iconUrl),
                        e.xp6(1),
                        e.Q6J("ngIf", t.matIcon),
                        e.xp6(1),
                        e.hij(" ", t.action.name, " ");
                }
            }
            function lr(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "luno-button", 14),
                        e.NdJ("clicked", function (C) {
                            e.CHM(t);
                            const A = e.oxw(3);
                            return e.KtG(A.onButtonClicked(C));
                        }),
                        e.ALo(1, "async"),
                        e.ALo(2, "async"),
                        e.qZA();
                }
                if (2 & n) {
                    const t = e.oxw().$implicit;
                    e.ekj("has-badge", e.lcZ(1, 5, t.badgeConfig$)),
                        e.Q6J("button", t)("themePalette", t.themePalette)(
                            "lunoBadge",
                            e.lcZ(2, 7, t.badgeConfig$)
                        );
                }
            }
            function ur(n, r) {
                if (
                    (1 & n &&
                        (e.ynx(0),
                        e.YNc(1, cr, 5, 17, "luno-hyperlink", 6),
                        e.YNc(2, lr, 3, 9, "luno-button", 7),
                        e.BQk()),
                    2 & n)
                ) {
                    const t = r.$implicit;
                    e.xp6(1),
                        e.Q6J("ngIf", !t.action.style),
                        e.xp6(1),
                        e.Q6J("ngIf", t.action.style);
                }
            }
            function _r(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "menu", 4),
                        e.YNc(1, ur, 3, 2, "ng-container", 5),
                        e.qZA()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.xp6(1), e.Q6J("ngForOf", t.navigationTop.navigationItems);
                }
            }
            class Ht {
                constructor(r, t) {
                    (this.changeDetectorRef = r),
                        (this.window = t),
                        (this.isOpaque = !1),
                        (this.itemClicked = new e.vpe()),
                        (this.buttonClicked = new e.vpe()),
                        (this.toggleSidenav = new e.vpe()),
                        (this.navBarHeight = 30);
                }
                ngOnInit() {
                    this.setOpaque(!1),
                        this.window.addEventListener("scroll", () =>
                            this.scrollEventListener(this.window.scrollY)
                        );
                }
                onOffsetChanged(r) {}
                scrollEventListener(r) {
                    this.setOpaque(r > this.navBarHeight + this.offset);
                }
                setOpaque(r) {
                    r !== this.isOpaque &&
                        ((this.isOpaque = r),
                        this.changeDetectorRef.markForCheck());
                }
                isRouteActive(r) {
                    if (!r.activeForRoutes || !this.activeUrl) return !1;
                    for (const t of r.activeForRoutes)
                        if (
                            (r.isActiveForRoutesExact &&
                                this.activeUrl === t) ||
                            (!r.isActiveForRoutesExact &&
                                this.activeUrl.includes(t))
                        )
                            return !0;
                    return !1;
                }
                onMenuClick() {
                    this.toggleSidenav.emit(!0);
                }
                onButtonClicked(r) {
                    this.buttonClicked.emit(r.action);
                }
            }
            (Ht.ɵfac = function (r) {
                return new (r || Ht)(e.Y36(e.sBO), e.Y36(Pe.m));
            }),
                (Ht.ɵcmp = e.Xpm({
                    type: Ht,
                    selectors: [["luno-navigation-top"]],
                    hostVars: 2,
                    hostBindings: function (r, t) {
                        2 & r && e.ekj("opaque", t.isOpaque);
                    },
                    inputs: {
                        navigationTop: "navigationTop",
                        activeUrl: "activeUrl",
                        hasSideNav: "hasSideNav",
                        webAssetsUrl: "webAssetsUrl",
                        offset: "offset",
                    },
                    outputs: {
                        itemClicked: "itemClicked",
                        buttonClicked: "buttonClicked",
                        toggleSidenav: "toggleSidenav",
                    },
                    decls: 3,
                    vars: 4,
                    consts: [
                        [1, "nav-top"],
                        [
                            "class",
                            "theme-primary",
                            3,
                            "isOpaque",
                            "hamburgerIconClick",
                            4,
                            "ngIf",
                        ],
                        ["class", "links", 4, "ngIf"],
                        [
                            1,
                            "theme-primary",
                            3,
                            "isOpaque",
                            "hamburgerIconClick",
                        ],
                        [1, "links"],
                        [4, "ngFor", "ngForOf"],
                        [
                            3,
                            "action",
                            "active",
                            "hide-on-mobile",
                            "hide-on-tablet",
                            "hide-on-laptop-screen",
                            "hide-on-desktop",
                            "lunoBadge",
                            4,
                            "ngIf",
                        ],
                        [
                            "class",
                            "theme-tertiary",
                            3,
                            "has-badge",
                            "button",
                            "themePalette",
                            "lunoBadge",
                            "clicked",
                            4,
                            "ngIf",
                        ],
                        [3, "action", "lunoBadge"],
                        [
                            "luno-picture",
                            "",
                            "loading",
                            "lazy",
                            3,
                            "imgWidth",
                            "imgHeight",
                            "srcUrl",
                            "altText",
                            "fallbackSrc",
                            4,
                            "ngIf",
                        ],
                        ["class", "icon-wrapper", 4, "ngIf"],
                        [
                            "luno-picture",
                            "",
                            "loading",
                            "lazy",
                            3,
                            "imgWidth",
                            "imgHeight",
                            "srcUrl",
                            "altText",
                            "fallbackSrc",
                        ],
                        [1, "icon-wrapper"],
                        [3, "color"],
                        [
                            1,
                            "theme-tertiary",
                            3,
                            "button",
                            "themePalette",
                            "lunoBadge",
                            "clicked",
                        ],
                    ],
                    template: function (r, t) {
                        1 & r &&
                            (e.TgZ(0, "nav", 0),
                            e.YNc(1, ar, 1, 1, "luno-hamburger", 1),
                            e.YNc(2, _r, 2, 1, "menu", 2),
                            e.qZA()),
                            2 & r &&
                                (e.ekj(
                                    "fullwidth",
                                    null == t.navigationTop
                                        ? null
                                        : t.navigationTop.isFullWidth
                                ),
                                e.xp6(1),
                                e.Q6J("ngIf", t.hasSideNav),
                                e.xp6(1),
                                e.Q6J(
                                    "ngIf",
                                    t.navigationTop &&
                                        t.navigationTop.navigationItems
                                ));
                    },
                    dependencies: [
                        po.l,
                        Je.r0,
                        g.sg,
                        g.O5,
                        na,
                        rn.t,
                        L.Hw,
                        oa.w,
                        g.Ov,
                    ],
                    styles: [
                        '.opaque[_nghost-%COMP%], .opaque   [_nghost-%COMP%]{background:var(--color-neutral-0);box-shadow:0 2px 2px #0000003d,0 0 2px #0000001f}.opaque[_nghost-%COMP%]   .links[_ngcontent-%COMP%]   luno-hyperlink[_ngcontent-%COMP%]     a, .opaque   [_nghost-%COMP%]   .links[_ngcontent-%COMP%]   luno-hyperlink[_ngcontent-%COMP%]     a{color:var(--color-primary)}[_nghost-%COMP%]{top:0;left:0;right:0;height:63px;position:fixed;background:var(--color-primary);transition:.4s cubic-bezier(.35,0,.25,1);z-index:99}.nav-top[_ngcontent-%COMP%]{max-width:992px;margin:0 auto;height:63px;display:flex;justify-content:space-between;align-items:center;padding:0 20px}.nav-top.fullwidth[_ngcontent-%COMP%]{max-width:none;margin:0}[_nghost-%COMP%]     luno-hyperlink a{outline:none}.links[_ngcontent-%COMP%]{padding-left:5px}.links[_ngcontent-%COMP%]   luno-hyperlink[_ngcontent-%COMP%], .links[_ngcontent-%COMP%]   luno-button[_ngcontent-%COMP%]{margin-left:10px}.links[_ngcontent-%COMP%]   luno-hyperlink[_ngcontent-%COMP%]{font-size:16px;font-weight:800;text-transform:capitalize}.links[_ngcontent-%COMP%]   luno-hyperlink[_ngcontent-%COMP%]     a{position:relative;display:inline-block;padding:7px;color:var(--color-neutral-0);text-decoration:none;border-bottom:2px solid transparent;transition:all .3s cubic-bezier(.77,.2,.05,1)}.links[_ngcontent-%COMP%]   luno-hyperlink[_ngcontent-%COMP%]     a:before{position:absolute;transition:all .3s cubic-bezier(.77,.2,.05,1);z-index:-1;content:"";inset:100% 0 0;background-color:var(--color-secondary-background);border-top-right-radius:8px}.links[_ngcontent-%COMP%]   luno-hyperlink[_ngcontent-%COMP%]     a:hover{color:var(--color-primary);border-color:var(--color-tertiary)}.links[_ngcontent-%COMP%]   luno-hyperlink[_ngcontent-%COMP%]     a:hover:before{top:0}.links[_ngcontent-%COMP%]   luno-hyperlink[_ngcontent-%COMP%]     a:active{color:var(--color-neutral-0)}.links[_ngcontent-%COMP%]   luno-hyperlink[_ngcontent-%COMP%]     a:active:before{top:100%}.links[_ngcontent-%COMP%]   luno-hyperlink.active[_ngcontent-%COMP%]     a{border-color:var(--color-tertiary)}@media screen and (max-width: 768px){.links[_ngcontent-%COMP%]   luno-hyperlink.hide-on-mobile[_ngcontent-%COMP%]{display:none!important}}@media screen and (max-width: 1150px){.links[_ngcontent-%COMP%]   luno-hyperlink.hide-on-laptop-screen[_ngcontent-%COMP%]{display:none!important}}@media screen and (min-width: 768px) and (max-width: 992px){.links[_ngcontent-%COMP%]   luno-hyperlink.hide-on-tablet[_ngcontent-%COMP%]{display:none!important}}@media screen and (min-width: 992px){.links[_ngcontent-%COMP%]   luno-hyperlink.hide-on-desktop[_ngcontent-%COMP%]{display:none!important}}.links[_ngcontent-%COMP%]   luno-button.has-badge[_ngcontent-%COMP%]{margin-right:10px}.links[_ngcontent-%COMP%]   luno-button[_ngcontent-%COMP%]     a{padding:0 20px;font-size:clamp(.7rem,1vw,1rem)}',
                    ],
                })),
                (0, ze.gn)(
                    [
                        (0, nn.G)("onOffsetChanged"),
                        (0, ze.w6)("design:type", Number),
                    ],
                    Ht.prototype,
                    "offset",
                    void 0
                );
            const ia_signUpButton_text = "Sign up",
                ia_getStartedButton_text = "Get started";
            function pr(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "luno-hamburger", 2),
                        e.NdJ("hamburgerIconClick", function () {
                            e.CHM(t);
                            const C = e.oxw();
                            return e.KtG(C.onMenuClick());
                        }),
                        e.qZA();
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.Q6J("isOpaque", !0)(
                        "wordMark",
                        null == t.navigationSide
                            ? null
                            : t.navigationSide.wordMark
                    );
                }
            }
            function mr(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "luno-button", 10),
                        e.NdJ("clicked", function () {
                            e.CHM(t);
                            const C = e.oxw(2);
                            return e.KtG(C.onNavigationItemClick());
                        }),
                        e.qZA();
                }
                2 & n && e.Q6J("button", r.$implicit);
            }
            function dr(n, r) {
                if (
                    (1 & n && (e._UZ(0, "picture", 19), e.ALo(1, "async")),
                    2 & n)
                ) {
                    const t = e.oxw().$implicit,
                        i = e.oxw(4);
                    let C, A;
                    e.Q6J("imgWidth", "24px")("imgHeight", "24px")(
                        "srcUrl",
                        null !== (C = i.getImageUrl(t)) && void 0 !== C ? C : ""
                    )("altText", t.action.name)(
                        "fallbackSrc",
                        null !== (A = i.getImageUrl(t)) && void 0 !== A ? A : ""
                    )("lunoBadge", e.lcZ(1, 6, t.badgeConfig$));
                }
            }
            function gr(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "span", 20),
                        e.ALo(1, "async"),
                        e.TgZ(2, "mat-icon", 21),
                        e._uU(3),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = e.oxw().$implicit;
                    e.Q6J("lunoBadge", e.lcZ(1, 3, t.badgeConfig$)),
                        e.xp6(2),
                        e.Q6J("color", t.matIcon.theme),
                        e.xp6(1),
                        e.hij(" ", t.matIcon.name, " ");
                }
            }
            function hr(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "li", 15)(1, "luno-hyperlink", 16),
                        e.NdJ("clicked", function () {
                            e.CHM(t);
                            const C = e.oxw(4);
                            return e.KtG(C.onNavigationItemClick());
                        }),
                        e.ALo(2, "async"),
                        e.YNc(3, dr, 2, 8, "picture", 17),
                        e.YNc(4, gr, 4, 5, "span", 18),
                        e._uU(5),
                        e.qZA()();
                }
                if (2 & n) {
                    const t = r.$implicit,
                        i = e.oxw(4);
                    e.ekj("active-menu-item", i.isRouteActive(t)),
                        e.xp6(1),
                        e.Q6J("action", t.action)(
                            "lunoBadge",
                            t.iconUrl || t.matIcon
                                ? null
                                : e.lcZ(2, 7, t.badgeConfig$)
                        ),
                        e.xp6(2),
                        e.Q6J("ngIf", t.iconUrl),
                        e.xp6(1),
                        e.Q6J("ngIf", t.matIcon),
                        e.xp6(1),
                        e.hij(" ", t.action.name, " ");
                }
            }
            function Cr(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "div", 13)(1, "h6"),
                        e._uU(2),
                        e.qZA(),
                        e.TgZ(3, "ul"),
                        e.YNc(4, hr, 6, 9, "li", 14),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = r.$implicit;
                    e.xp6(2),
                        e.Oqu(t.heading),
                        e.xp6(2),
                        e.Q6J("ngForOf", t.navigationItems);
                }
            }
            function Tr(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "div", 11),
                        e.YNc(1, Cr, 5, 2, "div", 12),
                        e.qZA()),
                    2 & n)
                ) {
                    const t = e.oxw(2);
                    e.xp6(1),
                        e.Q6J("ngForOf", t.navigationSide.navigationGroups);
                }
            }
            function Er(n, r) {
                if ((1 & n && e._UZ(0, "img", 26), 2 & n)) {
                    const t = e.oxw(3);
                    e.Q6J(
                        "src",
                        t.playStoreImageUrl[0],
                        e.LSH
                    )("srcset", t.playStoreImageUrl[1]);
                }
            }
            function Ir(n, r) {
                if ((1 & n && e._UZ(0, "img", 27), 2 & n)) {
                    const t = e.oxw(3);
                    e.Q6J(
                        "src",
                        t.appStoreImageUrl[0],
                        e.LSH
                    )("srcset", t.appStoreImageUrl[1]);
                }
            }
            function fr(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "div", 22)(1, "a", 23),
                        e.YNc(2, Er, 1, 2, "img", 24),
                        e.qZA(),
                        e.TgZ(3, "a", 23),
                        e.YNc(4, Ir, 1, 2, "img", 25),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = e.oxw(2);
                    e.xp6(1),
                        e.Q6J("href", t.androidAppUrl, e.LSH),
                        e.xp6(1),
                        e.Q6J("ngIf", t.isOpen),
                        e.xp6(1),
                        e.Q6J("href", t.iosAppUrl, e.LSH),
                        e.xp6(1),
                        e.Q6J("ngIf", t.isOpen);
                }
            }
            function Sr(n, r) {
                if ((1 & n && e._UZ(0, "luno-button", 28), 2 & n)) {
                    const t = e.oxw(2);
                    e.Q6J("button", t.getStartedButton);
                }
            }
            function Nr(n, r) {
                1 & n && e._UZ(0, "luno-button", 28),
                    2 & n && e.Q6J("button", r.$implicit);
            }
            function Ar(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "div", 3),
                        e.YNc(1, mr, 1, 1, "luno-button", 4),
                        e.YNc(2, Tr, 2, 1, "div", 5),
                        e.YNc(3, fr, 5, 4, "div", 6),
                        e.TgZ(4, "div", 7),
                        e.YNc(5, Sr, 1, 1, "luno-button", 8),
                        e.YNc(6, Nr, 1, 1, "luno-button", 9),
                        e.qZA()()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.xp6(1),
                        e.Q6J("ngForOf", t.navigationSide.buttons),
                        e.xp6(1),
                        e.Q6J("ngIf", t.navigationSide.navigationGroups),
                        e.xp6(1),
                        e.Q6J("ngIf", !t.navigationSide.hideAppIcons),
                        e.xp6(2),
                        e.Q6J(
                            "ngIf",
                            !(
                                null != t.navigationSide.footerButtons &&
                                t.navigationSide.footerButtons.length
                            )
                        ),
                        e.xp6(1),
                        e.Q6J("ngForOf", t.navigationSide.footerButtons);
                }
            }
            let Or = (() => {
                class n {
                    constructor(t, i, C) {
                        (this.deviceRecognitionService = t),
                            (this.i18n = i),
                            (this.localeService = C),
                            (this.hasSideNav = !1),
                            (this.isOpen = !1),
                            (this.itemClicked = new e.vpe()),
                            (this.toggleSidenav = new e.vpe()),
                            (this.signUpButtonText = this.i18n.translateText(
                                ia_signUpButton_text
                            )),
                            (this.getStartedButtonText = this.i18n.translateText(
                                ia_getStartedButton_text
                            ));
                    }
                    ngOnInit() {
                        (this.androidAppUrl = this.deviceRecognitionService.androidAppStoreUrl),
                            (this.iosAppUrl = this.deviceRecognitionService.iosAppStoreUrl);
                    }
                    onCloseSidenav() {
                        this.toggleSidenav.emit(!1);
                    }
                    onNavigationItemClick() {
                        this.toggleSidenav.emit(!1);
                    }
                    get playStoreImageUrl() {
                        return [
                            `${this.webAssetsUrl}/img/store_buttons/btn_googleplay.png`,
                            `${this.webAssetsUrl}/img/store_buttons/btn_googleplay@2x.png`,
                        ];
                    }
                    get appStoreImageUrl() {
                        return [
                            `${this.webAssetsUrl}/img/store_buttons/btn_appstore.png`,
                            `${this.webAssetsUrl}/img/store_buttons/btn_appstore@2x.png`,
                        ];
                    }
                    isRouteActive(t) {
                        if (
                            (!t.activeForRoutes && !t.activeForRouteRegex) ||
                            !this.activeUrl
                        )
                            return !1;
                        if (t.activeForRouteRegex)
                            return new RegExp(t.activeForRouteRegex).test(
                                this.activeUrl
                            );
                        if (!t.activeForRoutes) return !1;
                        for (const i of t.activeForRoutes)
                            if (
                                (t.isActiveForRoutesExact &&
                                    this.activeUrl === i) ||
                                (!t.isActiveForRoutesExact &&
                                    this.activeUrl.includes(i))
                            )
                                return !0;
                        return !1;
                    }
                    getImageUrl(t) {
                        return t?.iconUrl?.activeIcon;
                    }
                    get getStartedButton() {
                        return this.isAuthenticated
                            ? {
                                  action: {
                                      name: this.getStartedButtonText,
                                      url: "/wallet",
                                      style: pe.gw3.PRIMARY,
                                      event: {
                                          name: "button_click",
                                          parameters: {
                                              name: "Get started",
                                              product_group: "Onboard",
                                          },
                                      },
                                  },
                              }
                            : {
                                  action: {
                                      name: this.signUpButtonText,
                                      url: `${window.location.origin}/${this.localeService.urlPath}/signup`,
                                      style: pe.gw3.PRIMARY,
                                      event: {
                                          name: "button_click",
                                          parameters: {
                                              name: "Sign up",
                                              product_group: "Onboard",
                                          },
                                      },
                                  },
                              };
                    }
                    onMenuClick() {
                        this.toggleSidenav.emit();
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(
                            e.Y36(Xt.u),
                            e.Y36(Z.K),
                            e.Y36(Ze.O)
                        );
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-navigation-side"]],
                        inputs: {
                            navigationSide: "navigationSide",
                            activeUrl: "activeUrl",
                            hasSideNav: "hasSideNav",
                            webAssetsUrl: "webAssetsUrl",
                            isAuthenticated: "isAuthenticated",
                            isOpen: "isOpen",
                        },
                        outputs: {
                            itemClicked: "itemClicked",
                            toggleSidenav: "toggleSidenav",
                        },
                        decls: 2,
                        vars: 2,
                        consts: [
                            [
                                "class",
                                "side-nav-hamburger",
                                3,
                                "isOpaque",
                                "wordMark",
                                "hamburgerIconClick",
                                4,
                                "ngIf",
                            ],
                            ["class", "navigation-links", 4, "ngIf"],
                            [
                                1,
                                "side-nav-hamburger",
                                3,
                                "isOpaque",
                                "wordMark",
                                "hamburgerIconClick",
                            ],
                            [1, "navigation-links"],
                            [
                                "class",
                                "side-nav-button",
                                3,
                                "button",
                                "clicked",
                                4,
                                "ngFor",
                                "ngForOf",
                            ],
                            ["class", "links", 4, "ngIf"],
                            ["class", "app-links", 4, "ngIf"],
                            [1, "button-container"],
                            [3, "button", 4, "ngIf"],
                            [3, "button", 4, "ngFor", "ngForOf"],
                            [1, "side-nav-button", 3, "button", "clicked"],
                            [1, "links"],
                            ["class", "group", 4, "ngFor", "ngForOf"],
                            [1, "group"],
                            [
                                "matRipple",
                                "",
                                3,
                                "active-menu-item",
                                4,
                                "ngFor",
                                "ngForOf",
                            ],
                            ["matRipple", ""],
                            [3, "action", "lunoBadge", "clicked"],
                            [
                                "class",
                                "side-nav-img",
                                "luno-picture",
                                "",
                                "loading",
                                "lazy",
                                3,
                                "imgWidth",
                                "imgHeight",
                                "srcUrl",
                                "altText",
                                "fallbackSrc",
                                "lunoBadge",
                                4,
                                "ngIf",
                            ],
                            [
                                "class",
                                "icon-wrapper",
                                3,
                                "lunoBadge",
                                4,
                                "ngIf",
                            ],
                            [
                                "luno-picture",
                                "",
                                "loading",
                                "lazy",
                                1,
                                "side-nav-img",
                                3,
                                "imgWidth",
                                "imgHeight",
                                "srcUrl",
                                "altText",
                                "fallbackSrc",
                                "lunoBadge",
                            ],
                            [1, "icon-wrapper", 3, "lunoBadge"],
                            [3, "color"],
                            [1, "app-links"],
                            [
                                "rel",
                                "noopener noreferrer",
                                "matRipple",
                                "",
                                3,
                                "href",
                            ],
                            [
                                "alt",
                                "Google Play Store Logo",
                                "loading",
                                "lazy",
                                3,
                                "src",
                                "srcset",
                                4,
                                "ngIf",
                            ],
                            [
                                "alt",
                                "Apple App Store Logo",
                                "loading",
                                "lazy",
                                3,
                                "src",
                                "srcset",
                                4,
                                "ngIf",
                            ],
                            [
                                "alt",
                                "Google Play Store Logo",
                                "loading",
                                "lazy",
                                3,
                                "src",
                                "srcset",
                            ],
                            [
                                "alt",
                                "Apple App Store Logo",
                                "loading",
                                "lazy",
                                3,
                                "src",
                                "srcset",
                            ],
                            [3, "button"],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.YNc(0, pr, 1, 2, "luno-hamburger", 0),
                                e.YNc(1, Ar, 7, 5, "div", 1)),
                                2 & t &&
                                    (e.Q6J("ngIf", !i.hasSideNav),
                                    e.xp6(1),
                                    e.Q6J("ngIf", i.navigationSide));
                        },
                        dependencies: [
                            g.sg,
                            g.O5,
                            rn.t,
                            L.Hw,
                            Je.r0,
                            na,
                            R.wG,
                            po.l,
                            oa.w,
                            g.Ov,
                        ],
                        styles: [
                            "[_nghost-%COMP%]{display:block;padding:15px 20px 20px}[_nghost-%COMP%]     .side-nav-button a{width:100%}[_nghost-%COMP%]     mat-sidenav{min-width:300px}.navigation-links[_ngcontent-%COMP%]{padding-top:20px}.navigation-links[_ngcontent-%COMP%]   luno-hyperlink[_ngcontent-%COMP%]{width:100%}.links[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{margin-bottom:16px}.links[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]     .active-menu-item a{background-color:var(--color-neutral-100);font-weight:800;border:1px solid var(--color-neutral-100);border-radius:4px;padding-left:35px}.links[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:var(--color-neutral-300);margin:0 0 4px;font-size:10px;font-weight:500;text-transform:uppercase}.links[_ngcontent-%COMP%]     ul{list-style:none;padding:0;margin:0}.links[_ngcontent-%COMP%]     ul li a{display:flex;align-items:center;justify-content:flex-start;padding:10px 20px;margin-left:-10px;margin-right:-10px;font-size:16px;font-weight:400;line-height:28px;color:var(--color-primary);text-decoration:none;outline:none;transition:all .2s ease}.links[_ngcontent-%COMP%]     ul li a:hover{background-color:var(--color-neutral-100);padding-left:35px}.links[_ngcontent-%COMP%]   .side-nav-img[_ngcontent-%COMP%]{width:20px;vertical-align:middle}.links[_ngcontent-%COMP%]   .side-nav-img[_ngcontent-%COMP%], .links[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{margin-right:20px;line-height:0}luno-button[_ngcontent-%COMP%] + .links[_ngcontent-%COMP%]{margin-top:20px}.app-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;max-width:133px;max-height:40px;border-radius:5px}.app-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{margin-right:9px}.app-links[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.button-container[_ngcontent-%COMP%]{max-width:344px;padding-bottom:16px}.button-container[_ngcontent-%COMP%]     luno-button{width:344px}.button-container[_ngcontent-%COMP%]     luno-button a{width:100%;margin:16px 0 0}",
                        ],
                    })),
                    n
                );
            })();
            const vr = ["sidenav"];
            function yr(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "luno-navigation-side", 7),
                        e.NdJ("toggleSidenav", function (C) {
                            e.CHM(t);
                            const A = e.oxw();
                            return e.KtG(A.onToggleSidenav(C));
                        }),
                        e.ALo(1, "async"),
                        e.qZA();
                }
                if (2 & n) {
                    const t = e.oxw(),
                        i = e.MAs(2);
                    e.Q6J("navigationSide", t.navigation.navigationSide)(
                        "activeUrl",
                        e.lcZ(1, 5, t.activeUrl$)
                    )("webAssetsUrl", t.navigation.webAssetsUrl)(
                        "isAuthenticated",
                        t.isAuthenticated
                    )("isOpen", i.opened);
                }
            }
            function Pr(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "luno-navigation-top", 8),
                        e.NdJ("toggleSidenav", function (C) {
                            e.CHM(t);
                            const A = e.oxw();
                            return e.KtG(A.onToggleSidenav(C));
                        })("buttonClicked", function (C) {
                            e.CHM(t);
                            const A = e.oxw();
                            return e.KtG(A.onButtonClicked(C));
                        }),
                        e.ALo(1, "async"),
                        e.qZA();
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.Q6J("navigationTop", t.navigation.navigationTop)(
                        "webAssetsUrl",
                        t.navigation.webAssetsUrl
                    )("activeUrl", e.lcZ(1, 5, t.activeUrl$))(
                        "hasSideNav",
                        !!t.navigation.navigationSide
                    )("offset", t.navigationTopOffset);
                }
            }
            function xr(n, r) {
                if (
                    (1 & n &&
                        (e._UZ(0, "luno-navigation-bottom", 9),
                        e.ALo(1, "async")),
                    2 & n)
                ) {
                    const t = r.ngIf,
                        i = e.oxw();
                    e.Q6J("navigationBottom", t)(
                        "activeUrl",
                        e.lcZ(1, 2, i.activeUrl$)
                    );
                }
            }
            const Rr = ["*"];
            let Lr = (() => {
                class n {
                    constructor(t) {
                        (this.router = t),
                            (this.navigationTopOffset = 0),
                            (this.itemClicked = new e.vpe()),
                            (this.buttonClicked = new e.vpe()),
                            (this.activeUrl = new Ee.X("")),
                            (this.untilDestroyed$ = new Dt.xQ()),
                            (this.activeUrl$ = this.activeUrl.asObservable());
                    }
                    ngOnInit() {
                        this.activeUrl.next(this.router.url),
                            this.router.events
                                .pipe(
                                    (0, Mt.R)(this.untilDestroyed$),
                                    (0, Ut.h)((t) => t instanceof w.m2)
                                )
                                .subscribe((t) => this.onNavigationEnd(t));
                    }
                    ngOnDestroy() {
                        this.untilDestroyed$.next(),
                            this.untilDestroyed$.complete();
                    }
                    onNavigationEnd(t) {
                        this.activeUrl.next(t.url);
                    }
                    onToggleSidenav(t) {
                        this.sidenav.opened = t;
                    }
                    onButtonClicked(t) {
                        this.buttonClicked.emit(t);
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(e.Y36(w.F0));
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-navigation"]],
                        viewQuery: function (t, i) {
                            if ((1 & t && e.Gf(vr, 5), 2 & t)) {
                                let C;
                                e.iGM((C = e.CRH())) && (i.sidenav = C.first);
                            }
                        },
                        inputs: {
                            navigation: "navigation",
                            isAuthenticated: "isAuthenticated",
                            navigationTopOffset: "navigationTopOffset",
                            contentBackgroundColour: "contentBackgroundColour",
                        },
                        outputs: {
                            itemClicked: "itemClicked",
                            buttonClicked: "buttonClicked",
                        },
                        ngContentSelectors: Rr,
                        decls: 9,
                        vars: 10,
                        consts: [
                            [1, "luno-sidenav-container"],
                            [
                                "mode",
                                "side",
                                "mode",
                                "over",
                                3,
                                "fixedInViewport",
                            ],
                            ["sidenav", ""],
                            [
                                3,
                                "navigationSide",
                                "activeUrl",
                                "webAssetsUrl",
                                "isAuthenticated",
                                "isOpen",
                                "toggleSidenav",
                                4,
                                "ngIf",
                            ],
                            [1, "luno-sidenav-content"],
                            [
                                3,
                                "navigationTop",
                                "webAssetsUrl",
                                "activeUrl",
                                "hasSideNav",
                                "offset",
                                "toggleSidenav",
                                "buttonClicked",
                                4,
                                "ngIf",
                            ],
                            [3, "navigationBottom", "activeUrl", 4, "ngIf"],
                            [
                                3,
                                "navigationSide",
                                "activeUrl",
                                "webAssetsUrl",
                                "isAuthenticated",
                                "isOpen",
                                "toggleSidenav",
                            ],
                            [
                                3,
                                "navigationTop",
                                "webAssetsUrl",
                                "activeUrl",
                                "hasSideNav",
                                "offset",
                                "toggleSidenav",
                                "buttonClicked",
                            ],
                            [3, "navigationBottom", "activeUrl"],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.F$t(),
                                e.TgZ(0, "mat-sidenav-container", 0)(
                                    1,
                                    "mat-sidenav",
                                    1,
                                    2
                                ),
                                e.YNc(3, yr, 2, 7, "luno-navigation-side", 3),
                                e.qZA(),
                                e.TgZ(4, "mat-sidenav-content", 4),
                                e.YNc(5, Pr, 2, 7, "luno-navigation-top", 5),
                                e.YNc(6, xr, 2, 4, "luno-navigation-bottom", 6),
                                e.TgZ(7, "main"),
                                e.Hsn(8),
                                e.qZA()()()),
                                2 & t &&
                                    (e.xp6(1),
                                    e.Q6J("fixedInViewport", !0),
                                    e.xp6(2),
                                    e.Q6J(
                                        "ngIf",
                                        i.navigation &&
                                            i.navigation.navigationSide
                                    ),
                                    e.xp6(1),
                                    e.Udp(
                                        "background-color",
                                        i.contentBackgroundColour
                                    ),
                                    e.xp6(1),
                                    e.Q6J(
                                        "ngIf",
                                        null == i.navigation
                                            ? null
                                            : i.navigation.navigationTop
                                    ),
                                    e.xp6(1),
                                    e.Q6J(
                                        "ngIf",
                                        null == i.navigation
                                            ? null
                                            : i.navigation.navigationBottom
                                    ),
                                    e.xp6(1),
                                    e.ekj(
                                        "navigation-top-spacer",
                                        !(
                                            null == i.navigation ||
                                            !i.navigation.navigationTop
                                        )
                                    )(
                                        "navigation-bottom-spacer",
                                        !(
                                            null == i.navigation ||
                                            !i.navigation.navigationBottom
                                        )
                                    ));
                        },
                        dependencies: [
                            g.O5,
                            q.JX,
                            q.TM,
                            q.Rh,
                            nr,
                            Ht,
                            Or,
                            g.Ov,
                        ],
                        styles: [
                            "mat-sidenav[_ngcontent-%COMP%]{min-width:300px}.navigation-top-spacer[_ngcontent-%COMP%]{padding-top:63px}.navigation-bottom-spacer[_ngcontent-%COMP%]{padding-bottom:64px}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            function Dr(n, r) {
                if ((1 & n && (e.TgZ(0, "p"), e._uU(1), e.qZA()), 2 & n)) {
                    const t = r.$implicit;
                    e.xp6(1), e.Oqu(t);
                }
            }
            let Mr = (() => {
                class n {
                    constructor() {
                        this.text = [];
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["luno-top-banner"]],
                        inputs: { text: "text" },
                        decls: 2,
                        vars: 1,
                        consts: [[4, "ngFor", "ngForOf"]],
                        template: function (t, i) {
                            1 & t &&
                                (e.TgZ(0, "article"),
                                e.YNc(1, Dr, 2, 1, "p", 0),
                                e.qZA()),
                                2 & t && (e.xp6(1), e.Q6J("ngForOf", i.text));
                        },
                        dependencies: [g.sg],
                        styles: [
                            "[_nghost-%COMP%]{--top-banner-font-size: 1.125rem;--top-banner-line-height: 1.5rem;--top-banner-background-color: #acd0f7;--top-banner-copy-color: #001e87;--top-banner-min-height: 62px;--top-banner-max-width: 1240px;--top-banner-padding-inline: 1.25rem;--top-banner-padding-block: .75rem}[_nghost-%COMP%]{background-color:var(--top-banner-background-color);display:flex;flex-wrap:wrap;align-items:center;justify-content:center;z-index:2;min-height:var(--top-banner-min-height);padding:var(--top-banner-padding-block) var(--top-banner-padding-inline)}[_nghost-%COMP%]   article[_ngcontent-%COMP%]{color:var(--top-banner-copy-color);align-items:center;flex-direction:column;width:100%;max-width:var(--top-banner-max-width);text-align:center;font-size:var(--top-banner-font-size);line-height:var(--top-banner-line-height)}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            const Ur = ["luno-website-app", ""];
            function br(n, r) {
                if ((1 & n && e._UZ(0, "luno-top-banner", 6), 2 & n)) {
                    const t = e.oxw(2);
                    e.Q6J("text", t.topBannerText);
                }
            }
            function wr(n, r) {
                if ((1 & n && e._UZ(0, "luno-footer", 7), 2 & n)) {
                    const t = e.oxw(2);
                    e.Q6J("socialIcons", t.socialIcons)(
                        "languageDropdown",
                        t.languageDropdownGroup
                    )("navigationGroups", t.footerNavigationGroups)(
                        "mobileNavigationGroups",
                        t.mobileFooterNavigationGroups
                    )("currentUrl", t.currentUrl)(
                        "isMobile",
                        t.screenType === t.screenTypeEnum.MOBILE
                    );
                }
            }
            function Fr(n, r) {
                if (
                    (1 & n &&
                        (e.TgZ(0, "luno-navigation", 2)(1, "div", 3),
                        e.YNc(2, br, 1, 1, "luno-top-banner", 4),
                        e._UZ(3, "luno-banner")(4, "router-outlet"),
                        e.qZA(),
                        e.YNc(5, wr, 1, 6, "luno-footer", 5),
                        e.qZA()),
                    2 & n)
                ) {
                    const t = e.oxw();
                    e.Q6J("navigation", t.navigation),
                        e.xp6(2),
                        e.Q6J("ngIf", t.showTopBanner),
                        e.xp6(3),
                        e.Q6J("ngIf", t.showFooter && t.footerNavigationGroups);
                }
            }
            function Br(n, r) {
                1 & n && e._UZ(0, "luno-browser-refresh");
            }
            let Gr = (() => {
                class n {
                    constructor(
                        t,
                        i,
                        C,
                        A,
                        U,
                        $,
                        te,
                        le,
                        Le,
                        st,
                        sn,
                        Gn,
                        kn,
                        Wn,
                        Yr,
                        Hr,
                        Kr,
                        Vr,
                        Zr
                    ) {
                        (this.cd = t),
                            (this.commonInfoService = i),
                            (this.errorHandlerService = C),
                            (this.featureFlagsService = A),
                            (this.gtmService = U),
                            (this.i18n = $),
                            (this.localeService = te),
                            (this.mParticleService = le),
                            (this.navigationService = Le),
                            (this.tickerService = st),
                            (this.router = sn),
                            (this.seoService = Gn),
                            (this.websiteInfoService = kn),
                            (this.windowBodyService = Wn),
                            (this.windowRef = Yr),
                            (this.navigationV2Service = Hr),
                            (this.window = Kr),
                            (this.document = Vr),
                            (this.supportedLanguages = Zr),
                            (this.screenTypeEnum = Qe),
                            (this.currentUrl = ""),
                            (this.isLoaded = !1),
                            (this.showFooter = !0),
                            (this.topBannerText = []),
                            (this.navigationV2$ = this.navigationV2Service.navigation$),
                            (this.navigationV2Side$ = this.navigationV2Service.sideNavigationGroups$),
                            (this.navigationV2Footer$ = this.navigationV2Service.footerNavigationGroups$);
                    }
                    ngOnInit() {
                        (this.seoService.titleSuffix = " | Luno"),
                            (this.canLoadApp = this.commonInfoService.hasProcessed),
                            this.canLoadApp
                                ? (this.maybeSetLunoV3(),
                                  this.loadApp(),
                                  this.setupNavigationV2())
                                : this.loadAppErrorFallback();
                    }
                    ngOnDestroy() {
                        this.routerSubscription?.unsubscribe();
                    }
                    setupNavigationV2() {
                        this.navigationV2Service.setupNavigation(
                            {
                                webAssetsUrl: this.webAssetsUrl,
                                staticAssetsPath: this.commonInfoService
                                    .staticAssetsUrl,
                                currentUrl: this.currentUrl,
                                availableLanguages: this.commonInfoService
                                    .availableLanguages,
                                preferredLocale: this.localeService.urlPath,
                                isMobile:
                                    this.screenType ===
                                    this.screenTypeEnum.MOBILE,
                                isAuthenticated: this.commonInfoService
                                    .isAuthenticated,
                                isFullWidth: !0,
                            },
                            this.btcPrice || ""
                        );
                    }
                    get showTopBanner() {
                        return this.topBannerText.length > 0;
                    }
                    checkTopBanner() {
                        if (
                            this.commonInfoService.navInfo?.loc?.code?.toUpperCase() !==
                                d.C.gb.toUpperCase() &&
                            this.navigationService.customerCountry !== d.C.gb
                        )
                            return void (this.topBannerText = []);
                        const t = this.i18n.translateText(
                            ki_riskWarningUk_text
                        );
                        this.topBannerText = [t];
                    }
                    loadApp() {
                        (this.iOSAppUrl = this.navigationService.iosAppUrl()),
                            (this.androidAppUrl = this.navigationService.androidAppUrl()),
                            this.initRemoteData(),
                            this.setLocaleInfo(),
                            this.setHtmlLang(),
                            this.checkTopBanner(),
                            this.websiteInfoService.isBrowser &&
                                this.initAnalytics(),
                            this.websiteInfoService.setShowFooter$.subscribe(
                                (t) => {
                                    this.showFooter = t;
                                    try {
                                        this.cd.detectChanges();
                                    } catch {}
                                }
                            ),
                            this.cd.detectChanges();
                    }
                    loadAppErrorFallback() {
                        this.errorHandlerService.useBugsnag() &&
                            ye().notify("Website app load failed");
                    }
                    initRemoteData() {
                        this.websiteInfoService.isBrowser &&
                            ((this.commonInfoService.locOptions = Bi.I),
                            this.tickerService
                                .fetchDisplayTicker()
                                .subscribe((t) => {
                                    !t?.btc_price ||
                                        ((this.btcPrice = t.btc_price),
                                        this.navigationV2Service.updateBtcPrice(
                                            this.btcPrice
                                        ),
                                        this.updateNavigation());
                                })),
                            (this.webAssetsUrl = `${this.websiteInfoService.projectBaseUrl}/assets`),
                            (this.projectBaseUrl = this.websiteInfoService.projectBaseUrl);
                    }
                    setLocaleInfo() {
                        this.initRouteChangeListener(),
                            (this.urlPath = this.localeService.urlPath),
                            this.navigationService.setTranslations(),
                            this.initFooter(),
                            this.setNavServiceConfig(),
                            this.setSize(),
                            (this.isLoaded = !0),
                            this.commonInfoService.isAuthenticated$.subscribe(
                                (t) => {
                                    (this.isAuthenticated = t),
                                        this.updateNavigation();
                                }
                            );
                    }
                    setSize() {
                        const t = this.screenType;
                        this.websiteInfoService.isBrowser
                            ? ((this.screenType =
                                  this.window.innerWidth < Yt.TABLET
                                      ? Qe.MOBILE
                                      : this.window.innerWidth < Yt.DESKTOP
                                      ? Qe.TABLET
                                      : Qe.DESKTOP),
                              t !== this.screenType && this.updateNavigation())
                            : (this.screenType = Qe.MOBILE);
                    }
                    updateNavigation() {
                        !this.isLoaded ||
                            (this.navServiceConfig &&
                                (this.navServiceConfig.isAuthenticated = this.isAuthenticated),
                            (this.navigation = {
                                webAssetsUrl: this.webAssetsUrl,
                                navigationTop: {
                                    isFullWidth: !0,
                                    navigationItems: this.navigationService.getWebsiteTopNavigationItems(
                                        !!this.isAuthenticated,
                                        this.btcPrice
                                    ),
                                },
                                navigationSide: {
                                    navigationGroups: this.sideNavigationGroups,
                                },
                            }),
                            this.cd.detectChanges());
                    }
                    get sideNavigationGroups() {
                        return this.navServiceConfig
                            ? this.navigationService.getSideNavigationGroups(
                                  this.navServiceConfig
                              )
                            : [];
                    }
                    get footerNavigationGroups() {
                        return this.navServiceConfig
                            ? this.navigationService.getFooterNavigationGroups(
                                  this.navServiceConfig
                              )
                            : null;
                    }
                    get mobileFooterNavigationGroups() {
                        return this.navServiceConfig
                            ? this.navigationService.getMobileFooterNavigationGroups(
                                  this.navServiceConfig
                              )
                            : [];
                    }
                    setLanguageDropdown() {
                        !this.commonInfoService.staticAssetsUrl ||
                            (this.languageDropdownGroup = this.navigationService.getLanguageNavigation(
                                this.commonInfoService.availableLanguages || {},
                                this.currentUrl,
                                this.commonInfoService.staticAssetsUrl
                            ));
                    }
                    get socialIcons() {
                        return this.navigationService.getSocialIcons(
                            this.commonInfoService.userInfo?.preferredLocale ||
                                this.websiteInfoService.customerCountry,
                            this.websiteInfoService.pathCountry
                        );
                    }
                    initFooter() {
                        (this.iOSAppUrl = this.navigationService.iosAppUrl()),
                            (this.androidAppUrl = this.navigationService.androidAppUrl());
                    }
                    setNavServiceConfig() {
                        this.navServiceConfig = {
                            webAssetsUrl: this.webAssetsUrl,
                            staticAssetsPath: this.commonInfoService
                                .staticAssetsUrl,
                            currentUrl: this.currentUrl,
                            availableLanguages: this.commonInfoService
                                .availableLanguages,
                            preferredLocale: this.localeService.urlPath,
                            isMobile:
                                this.screenType === this.screenTypeEnum.MOBILE,
                        };
                    }
                    initRouteChangeListener() {
                        this.routerSubscription = this.router.events
                            .pipe((0, Ut.h)((t) => t instanceof w.m2))
                            .subscribe((t) => {
                                this.updateState(t), this.trackPage(t);
                            });
                    }
                    trackPage(t) {
                        !this.websiteInfoService.isBrowser ||
                            this.windowRef.nativeWindow.gtag(
                                "config",
                                he.GeneralGtagId,
                                { page_path: t.urlAfterRedirects }
                            );
                    }
                    updateState(t) {
                        !t ||
                            (this.setHreflangAndCanonical(t.urlAfterRedirects),
                            this.updateNavigation(),
                            this.localeService.urlPath !== this.urlPath &&
                                this.navigationService.setTranslations(),
                            (this.currentUrl =
                                "/" === t.urlAfterRedirects
                                    ? `/${this.urlPath}`
                                    : t.urlAfterRedirects),
                            (this.navServiceConfig = {
                                ...this.navServiceConfig,
                                currentUrl: this.currentUrl,
                            }),
                            this.setLanguageDropdown());
                    }
                    setHreflangAndCanonical(t) {
                        const i = "https://www.luno.com";
                        this.seoService.removeHreflangTags(),
                            this.seoService.setCanonicalTag(`${i}${t}`),
                            (function Gi(n) {
                                let r = !1;
                                if (!n) return !1;
                                const t = n
                                    .replace(/^\/*/, "")
                                    .replace(/\/*$/, "");
                                if ("" === t) return !0;
                                const i = t.split("/");
                                return (
                                    2 === i.length &&
                                        ut[i[0]]?.length &&
                                        (r = ut[i[0]].some((C) => C === i[1])),
                                    Object.values(d.B).some((C) => C === t) ||
                                        Object.values(Re.s).some(
                                            (C) => C === t
                                        ) ||
                                        r
                                );
                            })(t)
                                ? this.setHomepageHreflangs(i)
                                : this.setPageHreflangs(i, t);
                    }
                    setHomepageHreflangs(t) {
                        this.seoService.setHreflangs(
                            [
                                { url: "/", language: pt.h },
                                { url: "/en", language: "en" },
                                { url: "/au", language: "en-au" },
                                { url: "/gb", language: "en-gb" },
                                { url: "/my", language: "en-my" },
                                { url: "/ng", language: "en-ng" },
                                { url: "/sg", language: "en-sg" },
                                { url: "/ug", language: "en-ug" },
                                { url: "/en-US", language: "en-us" },
                                { url: "/ms-MY", language: "ms-my" },
                                { url: "/za", language: "en-za" },
                                { url: "/fr", language: "fr" },
                                { url: "/fr/fr", language: "fr-fr" },
                                { url: "/id", language: "id" },
                                { url: "/ms-MY", language: "ms-my" },
                            ],
                            t
                        );
                    }
                    setPageHreflangs(t, i) {
                        if (!this.commonInfoService.availableLanguages) return;
                        const C = Object.keys(
                                this.commonInfoService.availableLanguages
                            ),
                            A = [],
                            U = Fn(i, this.localeService.defaultUrlPath, C);
                        A.push({ url: U, language: pt.h }),
                            C.forEach(($) => {
                                const te = Fn(i, $, this.supportedLanguages);
                                A.push({ url: te, language: $.toLowerCase() });
                            }),
                            this.seoService.setHreflangs(A, t);
                    }
                    initAnalytics() {
                        this.mParticleService.syncUserAuthenticationStatus(),
                            this.gtmService.addGtmToDom(
                                this.commonInfoService.googleTagManagerConfig
                            ),
                            this.commonInfoService.isAuthenticated$
                                .pipe((0, rt.q)(1))
                                .subscribe((t) => {
                                    t && this.commonInfoService.userInfo?.userId
                                        ? this.gtmService.pushLoginEvent(
                                              this.commonInfoService.userInfo
                                                  .userId
                                          )
                                        : this.gtmService.pushLogoutEvent();
                                });
                    }
                    get currentYear() {
                        return new Date().getFullYear().toString();
                    }
                    setHtmlLang() {
                        const t = this.websiteInfoService.pathLanguage,
                            i = this.websiteInfoService.pathCountry?.toUpperCase();
                        this.document.documentElement.lang = t
                            ? 5 !== t.length
                                ? i
                                    ? `${t.toLowerCase()}-${i}`
                                    : `${t.toLowerCase()}`
                                : t
                            : this.localeService.defaultUrlPath;
                    }
                    onReloadClick() {
                        this.window.location.reload();
                    }
                    maybeSetLunoV3() {
                        !this.featureFlagsService.isEnabled("luno_v3") ||
                            this.windowBodyService.addClass("luno_v3");
                    }
                }
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)(
                            e.Y36(e.sBO),
                            e.Y36(ue.E),
                            e.Y36(Ye.q),
                            e.Y36(nt.a),
                            e.Y36(Zo),
                            e.Y36(Z.K),
                            e.Y36(Ze.O),
                            e.Y36($o),
                            e.Y36(Fi),
                            e.Y36(Wi),
                            e.Y36(w.F0),
                            e.Y36(pt.v),
                            e.Y36(_e.x),
                            e.Y36(_o),
                            e.Y36(Ve.X),
                            e.Y36(Ui),
                            e.Y36(Pe.m),
                            e.Y36(g.K0),
                            e.Y36(ue.N, 8)
                        );
                    }),
                    (n.ɵcmp = e.Xpm({
                        type: n,
                        selectors: [["main", "luno-website-app", ""]],
                        hostBindings: function (t, i) {
                            1 & t &&
                                e.NdJ(
                                    "resize",
                                    function () {
                                        return i.setSize();
                                    },
                                    !1,
                                    e.Jf7
                                );
                        },
                        attrs: Ur,
                        decls: 3,
                        vars: 2,
                        consts: [
                            [3, "navigation", 4, "ngIf"],
                            [4, "ngIf"],
                            [3, "navigation"],
                            [1, "placeholder-container"],
                            [3, "text", 4, "ngIf"],
                            [
                                3,
                                "socialIcons",
                                "languageDropdown",
                                "navigationGroups",
                                "mobileNavigationGroups",
                                "currentUrl",
                                "isMobile",
                                4,
                                "ngIf",
                            ],
                            [3, "text"],
                            [
                                3,
                                "socialIcons",
                                "languageDropdown",
                                "navigationGroups",
                                "mobileNavigationGroups",
                                "currentUrl",
                                "isMobile",
                            ],
                        ],
                        template: function (t, i) {
                            1 & t &&
                                (e.YNc(0, Fr, 6, 3, "luno-navigation", 0),
                                e._UZ(1, "luno-cookie-preferences"),
                                e.YNc(2, Br, 1, 0, "luno-browser-refresh", 1)),
                                2 & t &&
                                    (e.Q6J("ngIf", i.canLoadApp),
                                    e.xp6(2),
                                    e.Q6J("ngIf", !i.canLoadApp));
                        },
                        dependencies: [w.lC, Vi, g.O5, ji, ta, ht, Lr, Mr],
                        styles: [
                            "luno-banner[_ngcontent-%COMP%]{position:sticky}.placeholder-container[_ngcontent-%COMP%]{min-height:50vh}.not-loaded-message[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;padding:0}.not-loaded-message[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:calc(100vh - 16px);padding:0 16px;color:var(--color-neutral-0);text-align:center}@media all and (min-width: 480px){.not-loaded-message[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{justify-content:start;height:auto;padding:264px 16px 0}}.not-loaded-message[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{flex-grow:1;margin-bottom:20px}@media all and (min-width: 480px){.not-loaded-message[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{flex-grow:0}}.not-loaded-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .not-loaded-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color-neutral-0)}luno-cookie-preferences[_ngcontent-%COMP%]{position:fixed;z-index:100;bottom:0}",
                        ],
                        changeDetection: 0,
                    })),
                    n
                );
            })();
            const kr = ["en", "en-US", "fr", "id", "ms-MY"];
            let Wr = (() => {
                class n {}
                return (
                    (n.ɵfac = function (t) {
                        return new (t || n)();
                    }),
                    (n.ɵmod = e.oAB({ type: n, bootstrap: [Gr] })),
                    (n.ɵinj = e.cJS({
                        providers: [
                            (0, f.o$)(Lt.N.webAssetsURL + "/website-app"),
                            {
                                provide: e.ip1,
                                useFactory: (r) => () => r.load(),
                                deps: [_e.x],
                                multi: !0,
                            },
                            { provide: Ve.X, useClass: Ve.X, multi: !1 },
                            { provide: St.x, useValue: Ct.I.website },
                            { provide: E.TP, useClass: Et, multi: !0 },
                            { provide: E.TP, useClass: Rt, multi: !0 },
                            { provide: E.TP, useClass: It, multi: !0 },
                            { provide: E.TP, useClass: Tt, multi: !0 },
                            { provide: E.TP, useClass: Me, multi: !0 },
                            {
                                provide: ct,
                                useFactory: (r) => r.currentLanguage$,
                                deps: [_e.x],
                            },
                            {
                                provide: He.v,
                                useValue: [
                                    he.GeneralGtagId,
                                    he.GeneralUniversalId,
                                ],
                            },
                            { provide: ue.N, useValue: kr },
                            {
                                provide: nt.u,
                                useFactory: (r) => r,
                                deps: [ue.E],
                            },
                            g.JJ,
                            g.uU,
                            g.H9,
                        ],
                        imports: [
                            Vo,
                            T,
                            I.PW,
                            l.b2.withServerTransition({ appId: "serverApp" }),
                            ft,
                            m.Q,
                            B,
                            yt.forRoot({ environment: Lt.N }),
                            H,
                            E.JF,
                            En,
                            c.ot,
                            Be,
                            ve,
                        ],
                    })),
                    n
                );
            })();
            Lt.N.production && (0, e.G48)(),
                document.addEventListener("DOMContentLoaded", () => {
                    l.q6()
                        .bootstrapModule(Wr)
                        .catch((n) => console.error(n));
                });
        },
        9980: (W, x, o) => {
            o.d(x, { I: () => l });
            const l = [
                { code: "AU", name: "Australia" },
                { code: "FR", name: "France" },
                { code: "ID", name: "Indonesia" },
                { code: "IT", name: "Italy" },
                { code: "MY", name: "Malaysia" },
                { code: "NG", name: "Nigeria" },
                { code: "SG", name: "Singapore" },
                { code: "UG", name: "Uganda" },
                { code: "ZA", name: "South Africa" },
                { code: "ZM", name: "Zambia" },
            ];
        },
        928: (W, x, o) => {
            o.d(x, { x: () => ne });
            var l = o(1670),
                e = o(4666),
                g = o(9137),
                E = o(9917),
                c = o(7881),
                I = o(4392),
                O = o(31),
                T = o(9912),
                m = o(8237),
                _ = o(3575),
                a = o(8384),
                R = o(2606),
                P = o(2176),
                L = o(2560),
                K = o(3398),
                B = o.n(K),
                j = o(4505),
                v = o(3275),
                y = o(4941),
                w = o(6191),
                Q = o(4878),
                ce = o(9287),
                Ne = o(2901),
                H = o(8607),
                q = o(9316),
                M = o(1769),
                z = o(5912),
                ie = o(9980);
            let De = (() => {
                    class re {
                        transform(Y, Z) {
                            if (!Y) return Y;
                            const Ae = Y.match(
                                /^(?<fileName>.+?)\.(?<fileExtension>[a-z]+)$/
                            )?.groups;
                            if (!Ae) return Y;
                            const { fileName: ae, fileExtension: Oe } = Ae;
                            return ae && Oe ? ae + "_v3." + (Z ?? Oe) : Y;
                        }
                    }
                    return (
                        (re.ɵfac = function (Y) {
                            return new (Y || re)();
                        }),
                        (re.ɵpipe = L.Yjl({
                            name: "themedAsset",
                            type: re,
                            pure: !0,
                        })),
                        (re.ɵprov = L.Yz7({
                            token: re,
                            factory: re.ɵfac,
                            providedIn: "root",
                        })),
                        re
                    );
                })(),
                ne = (() => {
                    class re {
                        constructor(Y, Z, Ae, ae, Oe, Fe, Be, ve, he) {
                            (this.platformId = Y),
                                (this.commonInfoService = Z),
                                (this.environmentService = Ae),
                                (this.i18n = ae),
                                (this.location = Oe),
                                (this.localeService = Fe),
                                (this.snackbarService = Be),
                                (this.themedAssetPipe = ve),
                                (this.window = he),
                                (this.simpleFooter = !1),
                                (this.appDownloadUniversalUrl =
                                    "https://c.singular.net/api/v1/ad?st=137684134621&h=0e3667fe21b7c049eb9af6ebee52c372d6d70acb"),
                                (this.isProd = !1),
                                (this.pathLocaleRegex = new RegExp(
                                    /^\/([a-z]{2}(?:-[a-zA-Z]{2})?)\/?([a-z]{2})?\b/i
                                )),
                                (this._showFooterSubject$ = new j.X(!0)),
                                (this._currentLanguage = new j.X(
                                    this.localeService.locale
                                )),
                                (this.currentLanguage$ = this._currentLanguage.asObservable()),
                                (this.isProd =
                                    this.environmentService.isProd() &&
                                    (0, e.NF)(this.platformId)),
                                (this._isBrowser = (0, e.NF)(this.platformId)),
                                this.setAssetUrls();
                        }
                        get setShowFooter$() {
                            return this._showFooterSubject$.asObservable();
                        }
                        get projectBasePath() {
                            return `${this.webAssetsUrl}/website-app`;
                        }
                        set showFooter(Y) {
                            this._showFooterSubject$.next(Y);
                        }
                        get isBrowser() {
                            return this._isBrowser;
                        }
                        get homePageCheckMarkUrl() {
                            return this.themedAssetPipe.transform(
                                `${this.projectBaseUrl}/assets/common/list-styles/checkmark.svg`
                            );
                        }
                        load() {
                            var Y = this;
                            return (0, l.Z)(function* () {
                                Y.initLocale(),
                                    Y._isBrowser
                                        ? yield Y.commonInfoService.loadLite()
                                        : Y.mockCommonInfo(),
                                    Y.setCountry(),
                                    yield Y.maybeFetchTranslations(),
                                    Y.registerLocales();
                            })();
                        }
                        registerLocales() {
                            (0, e.qS)(E.Z, v.B.enAU),
                                (0, e.qS)(O.Z, v.B.enNG),
                                (0, e.qS)(T.Z, v.B.enSG),
                                (0, e.qS)(R.Z, "id"),
                                (0, e.qS)(a.Z, "fr"),
                                (0, e.qS)(I.Z, v.B.enMY),
                                (0, e.qS)(P.Z, v.B.msMY),
                                (0, e.qS)(c.Z, v.B.enGB),
                                (0, e.qS)(g.Z, v.B.enUS),
                                (0, e.qS)(_.Z, v.B.enZA),
                                (0, e.qS)(m.Z, "ug");
                        }
                        updateLocale() {
                            this.initLocale();
                        }
                        createLocaleFromUrl(Y, Z) {
                            return Y && Y.includes("-")
                                ? Y
                                : Y && Y !== w.s.en
                                ? `${Y.toLowerCase()}-${Y.toUpperCase()}`
                                : Z
                                ? `${Y.toLowerCase()}-${Z?.toUpperCase()}`
                                : v.B.enGB;
                        }
                        getAllowedSavingsWallets() {
                            const Y = [y.NE.ETH, y.NE.BTC, y.NE.USDC];
                            return new Map([
                                [v.C.au, Y],
                                [v.C.fr, []],
                                [v.C.eu, Y],
                                [v.C.gb, []],
                                [v.C.id, Y],
                                [v.C.it, Y],
                                [v.C.my, []],
                                [v.C.ng, Y],
                                [v.C.sg, [y.NE.ETH, y.NE.BTC]],
                                [v.C.ug, Y],
                                [v.C.us, []],
                                [v.C.za, Y],
                                [v.C.zm, Y],
                            ]).get(this.customerCountry);
                        }
                        isExchangeAllowed() {
                            return !!new Map([
                                [v.C.au, !0],
                                [v.C.fr, !1],
                                [v.C.eu, !0],
                                [v.C.gb, !0],
                                [v.C.id, !0],
                                [v.C.it, !0],
                                [v.C.my, !0],
                                [v.C.ng, !0],
                                [v.C.sg, !1],
                                [v.C.ug, !0],
                                [v.C.us, !1],
                                [v.C.za, !0],
                                [v.C.zm, !0],
                            ]).get(this.customerCountry);
                        }
                        initLocale() {
                            const Z = this.location
                                .path()
                                .match(this.pathLocaleRegex);
                            Z &&
                                ((this.pathLanguage = Z[1]),
                                (this.pathCountry = Z[2]?.toLocaleLowerCase())),
                                this._currentLanguage.next(this.pathLanguage),
                                this.setLanguage();
                        }
                        mockCommonInfo() {
                            this.commonInfoService.mockAppInfo({
                                urls: {
                                    static:
                                        "https://d32exi8v9av3ux.cloudfront.net/static",
                                    webAssets: "[WEB_ASSETS_URL]",
                                },
                                language: this.localeService.locale,
                                availableLanguages: {
                                    en: "English (UK)",
                                    fr: "Fran\xe7ais",
                                    id: "Indonesia",
                                    it: "Italiano",
                                    "en-US": "English (US)",
                                    "ms-MY": "Melayu",
                                },
                                locOptions: ie.I,
                                userInfo: {
                                    userId: 0,
                                    preferredLocale: this.localeService.locale,
                                },
                                featureFlags: { lunoV3: !0 },
                            });
                        }
                        isCustomerUS() {
                            return (
                                this.customerCountry === v.C.us ||
                                "en-US" === this.localeService.urlPath
                            );
                        }
                        setLanguage() {
                            const Y =
                                this.pathLanguage || this.localeService.urlPath;
                            this.localeService.set(Y),
                                this._currentLanguage.next(Y);
                        }
                        setCountry() {
                            this.customerCountry = this.commonInfoService?.navInfo?.loc?.code?.toLowerCase();
                        }
                        setAssetUrls() {
                            (this.webAssetsUrl = z.N.webAssetsURL),
                                (this.projectBaseUrl = `${this.webAssetsUrl}/website-app`),
                                (this.projectAssetsUrl = `${this.webAssetsUrl}/website-app/assets`);
                        }
                        maybeFetchTranslations() {
                            var Y = this;
                            return (0, l.Z)(function* () {
                                if (
                                    Y.localeService.locale !==
                                    Y.localeService.defaultLocale
                                )
                                    if (Y.isBrowser) {
                                        const Z = `${Y.webAssetsUrl}/website-app/locale/${Y.localeService.locale}.json`;
                                        try {
                                            yield Y.i18n.fetchTranslations(Z);
                                        } catch (Ae) {
                                            Y.snackbarService.open(
                                                "Unable to load translations"
                                            ),
                                                B().notify(
                                                    "Unable to load translations",
                                                    (ae) => {
                                                        ae.addMetadata(
                                                            "Translation error",
                                                            { error: Ae }
                                                        );
                                                    }
                                                );
                                        }
                                    } else {
                                        const Z =
                                            Y.window.translations?.[
                                                Y.localeService.locale
                                            ];
                                        Z &&
                                            (yield Y.i18n.setWebsitePrerenderTranslations(
                                                Z
                                            ));
                                    }
                            })();
                        }
                    }
                    return (
                        (re.ɵfac = function (Y) {
                            return new (Y || re)(
                                L.LFG(L.Lbi),
                                L.LFG(Q.E),
                                L.LFG(ce.L),
                                L.LFG(M.K),
                                L.LFG(e.Ye),
                                L.LFG(Ne.O),
                                L.LFG(H.o),
                                L.LFG(De),
                                L.LFG(q.m)
                            );
                        }),
                        (re.ɵprov = L.Yz7({
                            token: re,
                            factory: re.ɵfac,
                            providedIn: "root",
                        })),
                        re
                    );
                })();
        },
    },
    (W) => {
        W.O(0, ["vendor"], () => W((W.s = 9217))), W.O();
    },
]);
