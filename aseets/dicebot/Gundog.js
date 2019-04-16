/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$==', '$>=', '$<=', '$to_i', '$/', '$-', '$*', '$+']);
  return (function($base, $super, $parent_nesting) {
    function $Gundog(){};
    var self = $Gundog = $klass($base, $super, 'Gundog', $Gundog);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Gundog_gameName_1, TMP_Gundog_gameType_2, TMP_Gundog_getHelpMessage_3, TMP_Gundog_check_1D100_4, TMP_Gundog_isD9_5;

    
    
    Opal.defn(self, '$gameName', TMP_Gundog_gameName_1 = function $$gameName() {
      var self = this;

      return "ガンドッグ"
    }, TMP_Gundog_gameName_1.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_Gundog_gameType_2 = function $$gameType() {
      var self = this;

      return "Gundog"
    }, TMP_Gundog_gameType_2.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_Gundog_getHelpMessage_3 = function $$getHelpMessage() {
      var self = this;

      return "" + "失敗、成功、クリティカル、ファンブルとロールの達成値の自動判定を行います。\n" + "nD9ロールも対応。\n"
    }, TMP_Gundog_getHelpMessage_3.$$arity = 0);
    
    Opal.defn(self, '$check_1D100', TMP_Gundog_check_1D100_4 = function $$check_1D100(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this, dig10 = nil, dig1 = nil;

      
      if ($truthy(signOfInequality['$==']("<="))) {
        } else {
        return ""
      };
      if ($truthy($rb_ge(total_n, 100))) {
        return " ＞ ファンブル"};
      if ($truthy($rb_le(total_n, 1))) {
        return " ＞ 絶対成功(達成値1+SL)"};
      if ($truthy($rb_le(total_n, diff))) {
        
        dig10 = $rb_divide(total_n, 10).$to_i();
        dig1 = $rb_minus(total_n, $rb_times(dig10, 10));
        if ($truthy($rb_ge(dig10, 10))) {
          dig10 = 0};
        if ($truthy($rb_ge(dig1, 10))) {
          dig1 = 0};
        if ($truthy($rb_le(dig1, 0))) {
          return " ＞ クリティカル(達成値20+SL)"};
        return "" + " ＞ 成功(達成値" + ($rb_plus(dig10, dig1)) + "+SL)";};
      return " ＞ 失敗";
    }, TMP_Gundog_check_1D100_4.$$arity = 8);
    return (Opal.defn(self, '$isD9', TMP_Gundog_isD9_5 = function $$isD9() {
      var self = this;

      return true
    }, TMP_Gundog_isD9_5.$$arity = 0), nil) && 'isD9';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);