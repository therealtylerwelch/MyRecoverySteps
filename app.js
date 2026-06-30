function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var W = function W(a) {
  return "rgba(255,255,255,".concat(a, ")");
};
var GOLD = '#F6B40E';
var GOLD_LIGHT = '#FBDA6A';
var BLUE_LIGHT = '#E8F4FF';
var BLUE_MID = '#74ACDF';
var BLUE_DIM = 'rgba(160, 210, 255, 0.80)';
var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/* ── Modern monoline badge / UI icons ── */
var Icon = function Icon(_ref) {
  var name = _ref.name,
    _ref$c = _ref.c,
    c = _ref$c === void 0 ? '#fff' : _ref$c,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 30 : _ref$size,
    _ref$sw = _ref.sw,
    sw = _ref$sw === void 0 ? 1.8 : _ref$sw;
  var base = {
    width: size,
    height: size,
    display: 'block'
  };
  var s = {
    fill: 'none',
    stroke: c,
    strokeWidth: sw,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  var t = {
    fill: c,
    stroke: 'none'
  };
  switch (name) {
    case 'footprints':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("ellipse", _objectSpread(_objectSpread({}, t), {}, {
        cx: "8",
        cy: "15",
        rx: "2.4",
        ry: "3.4"
      })), /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, t), {}, {
        cx: "5.8",
        cy: "10.2",
        r: "0.95"
      })), /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, t), {}, {
        cx: "8",
        cy: "9.1",
        r: "1.05"
      })), /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, t), {}, {
        cx: "10.1",
        cy: "10",
        r: "0.9"
      })), /*#__PURE__*/React.createElement("ellipse", _objectSpread(_objectSpread({}, t), {}, {
        cx: "16",
        cy: "11",
        rx: "2.4",
        ry: "3.4"
      })), /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, t), {}, {
        cx: "13.9",
        cy: "6.2",
        r: "0.9"
      })), /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, t), {}, {
        cx: "16",
        cy: "5.1",
        r: "1.05"
      })), /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, t), {}, {
        cx: "18.1",
        cy: "6",
        r: "0.95"
      })));
    case 'shield':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M12 3l7 2.6v4.9c0 4.4-3 7.4-7 8.9-4-1.5-7-4.5-7-8.9V5.6L12 3Z"
      })), /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M12.6 8.2l-2.4 4h2.4l-1.2 3.6 3.4-4.6h-2.4L12.6 8.2Z"
      })));
    case 'crown':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M4 8.5l3.4 3 4.6-6 4.6 6 3.4-3v9.5H4V8.5Z"
      })), /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M4 18.5h16"
      })), /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, t), {}, {
        cx: "12",
        cy: "9.6",
        r: "1"
      })));
    case 'flame':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M12.5 3c.5 2.6 2.3 3.6 3.2 5.4.7 1.4.8 3 .2 4.4A4.7 4.7 0 0 1 7 12.4c0-1.5.6-2.6 1.4-3.5.3 1 .9 1.6 1.7 1.7-.7-2.6.4-5.3 2.4-7.6Z"
      })));
    case 'sparkles':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M8 4l1.1 3L12 8l-2.9 1L8 12l-1.1-3L4 8l2.9-1L8 4Z"
      })), /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M16.5 12l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"
      })));
    case 'flag':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M6 3v18"
      })), /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M6 4.5h12l-2.4 3.3L18 11H6"
      })), /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M9 4.5v6.5M12 4.5v6.5"
      })));
    case 'medal':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M8.5 3l2 5M15.5 3l-2 5"
      })), /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, s), {}, {
        cx: "12",
        cy: "14.5",
        r: "6"
      })));
    case 'arrow':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M5 12h14M13 6l6 6-6 6"
      })));
    case 'chevron':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: {
          width: size,
          height: size,
          display: 'block'
        }
      }, /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M9 6l6 6-6 6"
      })));
    case 'bolt':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M13 3l-7 9h5l-1 9 7-10h-5l1-8Z"
      })));
    case 'mtb':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, s), {}, {
        cx: "5.5",
        cy: "17",
        r: "3.4"
      })), /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, s), {}, {
        cx: "18.5",
        cy: "17",
        r: "3.4"
      })), /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M5.5 17 L12 17 L9.5 9 L16 9 L12 17"
      })), /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M5.5 17 L9.5 9"
      })), /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M16 9 L18.5 17"
      })), /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M8.6 9 H10.6"
      })), /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M16 9 L17.7 7.7"
      })));
    case 'target':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, s), {}, {
        cx: "12",
        cy: "12",
        r: "8"
      })), /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, s), {}, {
        cx: "12",
        cy: "12",
        r: "4"
      })), /*#__PURE__*/React.createElement("circle", _objectSpread(_objectSpread({}, t), {}, {
        cx: "12",
        cy: "12",
        r: "1.3"
      })));
    case 'layers':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M12 4l8 4-8 4-8-4 8-4Z"
      })), /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M4 12l8 4 8-4M4 16l8 4 8-4"
      })));
    case 'calendar':
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        style: base
      }, /*#__PURE__*/React.createElement("rect", _objectSpread(_objectSpread({}, s), {}, {
        x: "4",
        y: "5",
        width: "16",
        height: "15",
        rx: "2.5"
      })), /*#__PURE__*/React.createElement("path", _objectSpread(_objectSpread({}, s), {}, {
        d: "M4 9h16M8 3v4M16 3v4"
      })));
    default:
      return null;
  }
};

/* ── Medal icon with a number baked in (mile clubs) ── */
var MileIcon = function MileIcon(_ref2) {
  var value = _ref2.value,
    c = _ref2.c,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 30 : _ref2$size;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: size,
      height: size,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3l2 5M15.5 3l-2 5",
    fill: "none",
    stroke: c,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "14.5",
    r: "6.3",
    fill: "none",
    stroke: c,
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("text", {
    x: "12",
    y: "16.6",
    textAnchor: "middle",
    fontSize: value >= 100 ? 5 : 6.4,
    fontWeight: "700",
    fill: c,
    stroke: "none",
    fontFamily: "-apple-system, sans-serif"
  }, value));
};
var BadgeArt = function BadgeArt(_ref3) {
  var icon = _ref3.icon,
    value = _ref3.value,
    color = _ref3.color,
    size = _ref3.size;
  return value != null ? /*#__PURE__*/React.createElement(MileIcon, {
    value: value,
    c: color,
    size: size
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    c: color,
    size: size
  });
};
var StatCard = function StatCard(_ref4) {
  var label = _ref4.label,
    value = _ref4.value,
    unit = _ref4.unit,
    variant = _ref4.variant;
  var isGold = variant === 'gold';
  return /*#__PURE__*/React.createElement("div", {
    className: isGold ? 'glass-gold' : 'glass-blue',
    style: {
      padding: 'clamp(14px, 3vw, 22px)',
      textAlign: 'center',
      borderRadius: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(10px, 2vw, 12px)',
      color: isGold ? 'rgba(251,218,106,0.80)' : BLUE_DIM,
      fontWeight: 600,
      letterSpacing: '0.5px',
      marginBottom: '8px',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(30px, 6vw, 40px)',
      fontWeight: 200,
      color: isGold ? GOLD_LIGHT : BLUE_LIGHT,
      letterSpacing: '-1.5px',
      lineHeight: 1,
      marginBottom: '6px'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(10px, 1.8vw, 12px)',
      color: isGold ? 'rgba(251,218,106,0.90)' : BLUE_MID,
      fontWeight: 500
    }
  }, unit));
};
var SectionTitle = function SectionTitle(_ref5) {
  var icon = _ref5.icon,
    children = _ref5.children,
    right = _ref5.right;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    c: BLUE_MID,
    size: 18,
    sw: 2
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(12px, 2.5vw, 15px)',
      fontWeight: 600,
      color: BLUE_LIGHT,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }
  }, children)), right);
};

/* ── Monthly calendar ── */
var Calendar = function Calendar(_ref6) {
  var year = _ref6.year,
    monthIndex = _ref6.monthIndex,
    activeMap = _ref6.activeMap,
    twiceDays = _ref6.twiceDays,
    today = _ref6.today;
  var firstDow = new Date(year, monthIndex, 1).getDay();
  var daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  var cells = [];
  for (var i = 0; i < firstDow; i++) cells.push(null);
  for (var d = 1; d <= daysInMonth; d++) cells.push(d);
  return /*#__PURE__*/React.createElement("div", {
    className: "glass-panel",
    style: {
      padding: 'clamp(14px, 3vw, 20px)',
      marginBottom: 'clamp(14px, 3vw, 22px)',
      borderRadius: '18px'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    icon: "calendar",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        fontWeight: 600,
        color: GOLD_LIGHT
      }
    }, MONTHS[monthIndex], " ", year)
  }, "Activity Calendar"), /*#__PURE__*/React.createElement("div", {
    className: "cal-grid",
    style: {
      marginBottom: '8px'
    }
  }, ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(function (d, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "cal-dow"
    }, d);
  })), /*#__PURE__*/React.createElement("div", {
    className: "cal-grid"
  }, cells.map(function (d, i) {
    if (d === null) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    var dist = activeMap[d];
    var active = dist != null;
    var twice = twiceDays.includes(d);
    var isToday = d === today;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: 'cal-cell ' + (active ? 'glass-gold' : 'glass-dim') + (isToday ? ' cal-today' : ''),
      style: {
        opacity: active ? 1 : 0.5
      }
    }, twice && /*#__PURE__*/React.createElement("span", {
      className: "cal-twice"
    }, "\u2726"), /*#__PURE__*/React.createElement("span", {
      className: "cal-num",
      style: {
        color: active ? GOLD_LIGHT : BLUE_DIM
      }
    }, d), active && /*#__PURE__*/React.createElement("span", {
      className: "cal-dist",
      style: {
        color: 'rgba(251,218,106,0.85)'
      }
    }, dist.toFixed(1)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      marginTop: '14px',
      fontSize: '10px',
      color: BLUE_DIM,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '3px',
      background: 'rgba(246,180,14,0.55)',
      border: '1px solid rgba(246,180,14,0.7)'
    }
  }), " Walked"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: GOLD_LIGHT,
      fontSize: '11px'
    }
  }, "\u2726"), " Two walks")));
};
var MiniStat = function MiniStat(_ref7) {
  var icon = _ref7.icon,
    label = _ref7.label,
    value = _ref7.value,
    unit = _ref7.unit;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: '11px',
      padding: '12px 14px',
      borderRadius: '14px',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(116,172,223,0.22)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '34px',
      height: '34px',
      flex: '0 0 auto',
      borderRadius: '10px',
      background: 'rgba(116,172,223,0.16)',
      border: '1px solid rgba(116,172,223,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    c: BLUE_LIGHT,
    size: 18,
    sw: 2
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      color: BLUE_DIM,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.4px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(16px, 3vw, 19px)',
      fontWeight: 300,
      color: BLUE_LIGHT,
      lineHeight: 1.1
    }
  }, value, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: BLUE_MID,
      fontWeight: 500
    }
  }, unit))));
};
var WalkTracker = function WalkTracker() {
  var realData = {
    year: 2026,
    monthIndex: 5,
    // June (0-based)
    today: 29,
    updated: 'June 29, 2026',
    currentStreak: 1,
    longestStreak: 5,
    longestStreakLabel: 'Jun 7–11',
    totalWalks: 19,
    activeDays: 18,
    totalDistance: 10.7,
    twiceDailyDays: [11],
    lastActivity: {
      date: '2026-06-29',
      distance: 0.89,
      duration: 1567,
      pace: 29.3
    },
    dailyData: [{
      date: 'Jun 3',
      distance: 0.33
    }, {
      date: 'Jun 4',
      distance: 0.33
    }, {
      date: 'Jun 5',
      distance: 0.30
    }, {
      date: 'Jun 7',
      distance: 0.36
    }, {
      date: 'Jun 8',
      distance: 1.02
    }, {
      date: 'Jun 9',
      distance: 0.33
    }, {
      date: 'Jun 10',
      distance: 0.36
    }, {
      date: 'Jun 11',
      distance: 0.69
    }, {
      date: 'Jun 13',
      distance: 0.81
    }, {
      date: 'Jun 15',
      distance: 0.59
    }, {
      date: 'Jun 16',
      distance: 0.61
    }, {
      date: 'Jun 17',
      distance: 0.39
    }, {
      date: 'Jun 18',
      distance: 0.59
    }, {
      date: 'Jun 23',
      distance: 0.62
    }, {
      date: 'Jun 24',
      distance: 0.55
    }, {
      date: 'Jun 25',
      distance: 1.01
    }, {
      date: 'Jun 27',
      distance: 0.93
    }, {
      date: 'Jun 29',
      distance: 0.89
    }],
    badges: [{
      id: 1,
      name: 'First Steps',
      description: 'Complete your first walk',
      unlocked: true,
      icon: 'footprints'
    }, {
      id: 2,
      name: '5-Day Warrior',
      description: '5 consecutive days walked',
      unlocked: true,
      icon: 'shield'
    }, {
      id: 3,
      name: 'Twice Daily',
      description: '2 walks in one day',
      unlocked: true,
      icon: 'sparkles'
    }, {
      id: 4,
      name: '10-Day Legend',
      description: '10 consecutive days walked',
      unlocked: false,
      icon: 'crown'
    }, {
      id: 5,
      name: '14-Day Streak',
      description: '14 consecutive days walked',
      unlocked: false,
      icon: 'flame'
    }, {
      id: 6,
      name: '25 Mile Club',
      description: 'Walk 25+ miles total',
      unlocked: false,
      mile: 25
    }, {
      id: 7,
      name: '50 Mile Club',
      description: 'Walk 50+ miles total',
      unlocked: false,
      mile: 50
    }, {
      id: 8,
      name: 'Marathon Master',
      description: 'Walk 26.2 miles total',
      unlocked: false,
      icon: 'flag'
    }, {
      id: 9,
      name: '100 Mile Club',
      description: 'Walk 100+ miles total',
      unlocked: false,
      mile: 100
    }, {
      id: 10,
      name: 'Send It',
      description: 'Log a Mountain Bike activity',
      unlocked: false,
      icon: 'mtb'
    }]
  };
  var data = realData;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    badgesOpen = _React$useState2[0],
    setBadgesOpen = _React$useState2[1];
  var _React$useState3 = React.useState('all'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    badgeFilter = _React$useState4[0],
    setBadgeFilter = _React$useState4[1];
  var scrollRef = React.useRef(null);
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    overflow = _React$useState6[0],
    setOverflow = _React$useState6[1];
  React.useEffect(function () {
    var check = function check() {
      var e = scrollRef.current;
      if (e) setOverflow(e.scrollWidth > e.clientWidth + 4);
    };
    check();
    window.addEventListener('resize', check);
    return function () {
      return window.removeEventListener('resize', check);
    };
  }, []);
  var unlockedBadges = data.badges.filter(function (b) {
    return b.unlocked;
  });
  var unlockedCount = unlockedBadges.length;
  var latestBadge = unlockedBadges[unlockedBadges.length - 1];
  var filteredBadges = badgeFilter === 'earned' ? data.badges.filter(function (b) {
    return b.unlocked;
  }) : badgeFilter === 'unearned' ? data.badges.filter(function (b) {
    return !b.unlocked;
  }) : data.badges;
  var dists = data.dailyData.map(function (d) {
    return d.distance;
  });
  var maxDistance = Math.max.apply(Math, _toConsumableArray(dists));
  var avgDistance = dists.reduce(function (a, b) {
    return a + b;
  }, 0) / dists.length;
  var GOAL_MILES = 100;
  var pct = data.totalDistance / GOAL_MILES * 100;
  var activeMap = {};
  data.dailyData.forEach(function (d) {
    activeMap[parseInt(d.date.split(' ')[1], 10)] = d.distance;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "glass-shell",
    style: {
      padding: 'clamp(20px, 4vw, 40px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(20px, 4vw, 36px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wordmark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wordmark-badge"
  }, /*#__PURE__*/React.createElement("img", {
    src: "android-chrome-192x192.png",
    alt: "My Recovery Steps",
    style: {
      width: '100%',
      height: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wordmark-eyebrow"
  }, "My Recovery"), /*#__PURE__*/React.createElement("span", {
    className: "wordmark-title"
  }, "STEPS"), /*#__PURE__*/React.createElement("span", {
    className: "beta-pill"
  }, "BETA"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(12px, 2.5vw, 14px)',
      color: BLUE_MID,
      fontWeight: 400,
      lineHeight: 1.55,
      marginTop: '12px'
    }
  }, "Tracking daily walking progress \xB7 Powered by Strava MCP + Claude Opus 4.8")), /*#__PURE__*/React.createElement("div", {
    className: "stat-grid",
    style: {
      marginBottom: 'clamp(14px, 3vw, 22px)'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Current Streak",
    value: data.currentStreak,
    unit: "days in a row",
    variant: "blue"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Total Distance",
    value: data.totalDistance.toFixed(1),
    unit: "miles since Jun 1",
    variant: "blue"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "To 100 Miles",
    value: (100 - data.totalDistance).toFixed(1),
    unit: "miles away",
    variant: "gold"
  })), /*#__PURE__*/React.createElement("div", {
    className: "glass-panel",
    style: {
      padding: 'clamp(14px, 3vw, 20px)',
      marginBottom: 'clamp(14px, 3vw, 22px)',
      borderRadius: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(11px, 2vw, 13px)',
      color: BLUE_LIGHT,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }
  }, "100-Mile Goal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(11px, 2vw, 13px)',
      color: GOLD_LIGHT,
      fontWeight: 600
    }
  }, pct.toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '8px',
      borderRadius: '100px',
      background: 'rgba(255,255,255,0.10)',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: "".concat(pct, "%"),
      borderRadius: '100px',
      background: "linear-gradient(90deg, rgba(116,172,223,0.85) 0%, rgba(246,180,14,0.92) 100%)",
      boxShadow: '0 0 14px rgba(246,180,14,0.45)',
      transition: 'width 0.6s ease'
    }
  }))), /*#__PURE__*/React.createElement(Calendar, {
    year: data.year,
    monthIndex: data.monthIndex,
    activeMap: activeMap,
    twiceDays: data.twiceDailyDays,
    today: data.today
  }), /*#__PURE__*/React.createElement("div", {
    className: "glass-panel",
    style: {
      padding: 'clamp(14px, 3vw, 20px)',
      marginBottom: 'clamp(14px, 3vw, 22px)',
      borderRadius: '18px'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    icon: "bolt"
  }, "Daily Distance Trend"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(8px, 2vw, 12px)',
      marginBottom: '16px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(MiniStat, {
    icon: "target",
    label: "Average / day",
    value: avgDistance.toFixed(2),
    unit: "mi"
  }), /*#__PURE__*/React.createElement(MiniStat, {
    icon: "medal",
    label: "Longest walk",
    value: maxDistance.toFixed(2),
    unit: "mi"
  })), /*#__PURE__*/React.createElement("div", {
    className: 'chart-wrap' + (overflow ? ' has-overflow' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "chart-scroll",
    ref: scrollRef
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '6px',
      height: '160px',
      minWidth: 'min-content',
      padding: '0 4px'
    }
  }, data.dailyData.map(function (day, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '0 0 auto',
        minWidth: '34px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '8px',
        color: day.distance === maxDistance ? GOLD_LIGHT : BLUE_LIGHT,
        fontWeight: 700,
        marginBottom: '3px',
        height: '12px',
        textAlign: 'center'
      }
    }, day.distance), /*#__PURE__*/React.createElement("div", {
      className: 'bar' + (day.distance === maxDistance ? ' is-max' : ''),
      style: {
        width: '18px',
        height: "".concat(day.distance / maxDistance * 120, "px"),
        minHeight: '6px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '8px',
        color: BLUE_DIM,
        marginTop: '5px',
        fontWeight: 500,
        textAlign: 'center'
      }
    }, day.date.split(' ')[1]));
  })))), overflow && /*#__PURE__*/React.createElement("div", {
    className: "scroll-hint"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    c: "rgba(160,210,255,0.65)",
    size: 13,
    sw: 2.4
  })), "Scroll to see all ", data.dailyData.length, " days", /*#__PURE__*/React.createElement("span", {
    className: "r"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    c: "rgba(160,210,255,0.65)",
    size: 13,
    sw: 2.4
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(14px, 3vw, 22px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-toggle",
    onClick: function onClick() {
      return setBadgesOpen(function (o) {
        return !o;
      });
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: badgesOpen ? '14px' : '12px',
      padding: '4px 2px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "crown",
    c: BLUE_MID,
    size: 18,
    sw: 2
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(12px, 2.5vw, 15px)',
      fontWeight: 600,
      color: BLUE_LIGHT,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }
  }, "Badges Earned")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontWeight: 500,
      color: GOLD,
      background: 'rgba(203,161,53,0.15)',
      border: '1px solid rgba(203,161,53,0.32)',
      borderRadius: '20px',
      padding: '3px 11px'
    }
  }, unlockedCount, " / ", data.badges.length), /*#__PURE__*/React.createElement("span", {
    className: 'chevron-icon' + (badgesOpen ? ' open' : '')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    c: BLUE_MID,
    size: 18,
    sw: 2.2
  })))), !badgesOpen && latestBadge && /*#__PURE__*/React.createElement("div", {
    className: "latest-badge-spotlight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "latest-badge-icon"
  }, /*#__PURE__*/React.createElement(BadgeArt, {
    icon: latestBadge.icon,
    value: latestBadge.mile,
    color: GOLD_LIGHT,
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "badge-latest-pill"
  }, "Latest earned"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(13px, 2.5vw, 15px)',
      fontWeight: 700,
      color: GOLD_LIGHT,
      lineHeight: 1.2
    }
  }, latestBadge.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'rgba(251,218,106,0.70)',
      marginTop: '2px'
    }
  }, latestBadge.description)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setBadgesOpen(true);
    },
    style: {
      flexShrink: 0,
      fontSize: '11px',
      fontWeight: 600,
      color: GOLD_LIGHT,
      background: 'rgba(246,180,14,0.14)',
      border: '1px solid rgba(246,180,14,0.38)',
      borderRadius: '10px',
      padding: '6px 12px',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "See all \u2192")), badgesOpen && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "badge-filters"
  }, [{
    key: 'all',
    label: "All (".concat(data.badges.length, ")")
  }, {
    key: 'earned',
    label: "Earned (".concat(unlockedCount, ")")
  }, {
    key: 'unearned',
    label: "Unearned (".concat(data.badges.length - unlockedCount, ")")
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("button", {
      key: f.key,
      className: 'badge-filter-tab' + (badgeFilter === f.key ? ' active' : ''),
      onClick: function onClick() {
        return setBadgeFilter(f.key);
      }
    }, f.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "badge-grid"
  }, filteredBadges.map(function (badge) {
    var isLatest = badge.id === (latestBadge === null || latestBadge === void 0 ? void 0 : latestBadge.id);
    var col = badge.unlocked ? GOLD_LIGHT : BLUE_DIM;
    return /*#__PURE__*/React.createElement("div", {
      key: badge.id,
      className: badge.unlocked ? 'glass-gold badge-glow' : 'glass-dim',
      style: {
        padding: 'clamp(10px, 2.5vw, 16px)',
        borderRadius: '16px',
        textAlign: 'center',
        opacity: badge.unlocked ? 1 : 0.6,
        position: 'relative',
        outline: isLatest ? "2px solid rgba(246,180,14,0.70)" : 'none',
        outlineOffset: '2px'
      }
    }, isLatest && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '-8px',
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "badge-latest-pill",
      style: {
        whiteSpace: 'nowrap'
      }
    }, "Latest")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '8px',
        marginTop: isLatest ? '4px' : 0
      }
    }, /*#__PURE__*/React.createElement(BadgeArt, {
      icon: badge.icon,
      value: badge.mile,
      color: col,
      size: 30
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'clamp(10px, 1.8vw, 12px)',
        fontWeight: 700,
        color: col,
        marginBottom: '4px',
        lineHeight: 1.2
      }
    }, badge.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '10px',
        color: badge.unlocked ? 'rgba(251,218,106,0.75)' : BLUE_DIM,
        lineHeight: 1.35
      }
    }, badge.description), badge.unlocked && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '7px',
        fontSize: '10px',
        color: GOLD,
        fontWeight: 600,
        letterSpacing: '0.3px'
      }
    }, "\u2713 Unlocked"));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "glass-blue",
    style: {
      padding: 'clamp(16px, 3vw, 24px)',
      borderRadius: '20px'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    icon: "target"
  }, "Recovery Insights"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(12px, 2vw, 14px)',
      color: BLUE_LIGHT,
      lineHeight: 1.75,
      fontWeight: 400
    }
  }, "Strong, steady recovery so far. You've logged ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: GOLD_LIGHT
    }
  }, "19 walks across 18 days"), " for ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: GOLD_LIGHT
    }
  }, "10.7 miles"), " since June 1, and the trend is clearly upward: your typical walk has grown from about ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: GOLD_LIGHT
    }
  }, "0.33 mi"), " early on to roughly ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: GOLD_LIGHT
    }
  }, "0.9\u20131.0 mi"), " in your last three outings, while your pace has improved from ~38 to ~31 min/mi \u2014 about ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: GOLD_LIGHT
    }
  }, "18% faster"), ". Your best stretch was a 5-day streak (Jun 7\u201311)."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(12px, 2vw, 14px)',
      color: BLUE_LIGHT,
      lineHeight: 1.75,
      fontWeight: 400,
      marginTop: '12px'
    }
  }, "The single biggest lever now is ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: GOLD_LIGHT
    }
  }, "consistency, not distance"), ". The gaps on Jun 6, 12, 14, 19\u201322, 26 and 28 are what keep resetting your streak \u2014 the four-day pause (Jun 19\u201322) alone broke what could have been a 3-week run. Here's how to convert your rising fitness into bigger milestones:"), /*#__PURE__*/React.createElement("ul", {
    className: "insight-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    c: GOLD_LIGHT,
    size: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Set a daily floor."), " On low-energy days, do a 0.3\u20130.4 mi \"minimum walk\" instead of skipping. That one habit would have turned your 5-day streak into 20+ and is the fastest route to the 14-Day Streak badge.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    c: GOLD_LIGHT,
    size: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Lock in 1 mile."), " Your last three walks already average ~0.9 mi \u2014 round that up to a steady ", /*#__PURE__*/React.createElement("b", null, "1.0 mi/day"), " as your new baseline.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    c: GOLD_LIGHT,
    size: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Stack a second short walk."), " You did it once (Jun 11). Adding a 0.3 mi second walk on 2\u20133 days a week adds ~3 miles a month with almost no extra fatigue.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "medal",
    c: GOLD_LIGHT,
    size: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Next milestone: 25-Mile Club."), " You're ", /*#__PURE__*/React.createElement("b", null, "14.3 miles away"), ". At a steady 1.0 mi/day that's about 2 weeks; at your current ~0.6 mi/day average it's closer to 3.5 weeks.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bolt",
    c: GOLD_LIGHT,
    size: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Keep one brisk walk weekly."), " Your pace is trending faster \u2014 protect that gain with one slightly quicker walk each week while keeping the rest easy and recovery-paced.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(20px, 4vw, 32px)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'rgba(116,172,223,0.55)',
      fontWeight: 400,
      letterSpacing: '0.3px'
    }
  }, "Data updated \xB7 ", data.updated)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(12px, 2vw, 18px)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/watch?v=q_q3hg7KXWM",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "AFA Selecci\xF3n Argentina",
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px',
      textDecoration: 'none',
      opacity: 0.85,
      transition: 'opacity 0.2s'
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.opacity = '1';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.opacity = '0.85';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600",
    width: "48",
    height: "32",
    style: {
      display: 'block',
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.35)'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "900",
    height: "600",
    fill: "#74ACDF"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "200",
    width: "900",
    height: "200",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "450",
    cy: "300",
    r: "60",
    fill: "#F6B40E"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#F6B40E",
    stroke: "#CD8B00",
    strokeWidth: "2"
  }, [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map(function (deg, i) {
    var rad = deg * Math.PI / 180;
    var x1 = 450 + 62 * Math.cos(rad);
    var y1 = 300 + 62 * Math.sin(rad);
    var x2 = 450 + 90 * Math.cos(rad);
    var y2 = 300 + 90 * Math.sin(rad);
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      strokeWidth: "6",
      stroke: "#F6B40E"
    });
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "450",
    cy: "300",
    r: "42",
    fill: "#F6B40E"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "450",
    cy: "300",
    r: "30",
    fill: "#CD8B00"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "450",
    cy: "300",
    r: "22",
    fill: "#F6B40E"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.05em',
      color: 'rgba(255,255,255,0.6)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }
  }, "Dale Albiceleste"))));
};
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(WalkTracker, null));
