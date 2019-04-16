/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $gvars = Opal.gvars;

  Opal.add_stubs(['$setPrefixes', '$bcdice', '$set1Deck2Jokers', '$cardTrader', '$card_place=', '$-', '$canTapCard=', '$debug', '$gsub', '$check_barna_kronika', '$=~', '$collect', '$split', '$to_i', '$==', '$roll_barna_kronika', '$+', '$>', '$times', '$rand', '$[]', '$[]=', '$isCriticalCall', '$getAttackStringWhenCriticalCall', '$isNomalAtack', '$getAttackStringWhenNomal', '$!=', '$*', '$<', '$sub', '$getAtackHitLocation', '$get_table_by_number']);
  return (function($base, $super, $parent_nesting) {
    function $BarnaKronika(){};
    var self = $BarnaKronika = $klass($base, $super, 'BarnaKronika', $BarnaKronika);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_BarnaKronika_initialize_1, TMP_BarnaKronika_postSet_2, TMP_BarnaKronika_gameName_3, TMP_BarnaKronika_gameType_4, TMP_BarnaKronika_getHelpMessage_5, TMP_BarnaKronika_changeText_10, TMP_BarnaKronika_dice_command_xRn_11, TMP_BarnaKronika_check_barna_kronika_13, TMP_BarnaKronika_roll_barna_kronika_17, TMP_BarnaKronika_isCriticalCall_18, TMP_BarnaKronika_isNomalAtack_19, TMP_BarnaKronika_getAttackStringWhenCriticalCall_20, TMP_BarnaKronika_getAttackStringWhenNomal_21, TMP_BarnaKronika_getAtackHitLocation_22;

    def.isBattleMode = def.nick_e = nil;
    
    self.$setPrefixes(["\\d+BK", "\\d+BA", "\\d+BKC\\d+", "\\d+BAC\\d+"]);
    
    Opal.defn(self, '$initialize', TMP_BarnaKronika_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_BarnaKronika_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_BarnaKronika_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_BarnaKronika_initialize_1, false), $zuper, $iter);
      self.sendMode = 2;
      return (self.sortType = 3);
    }, TMP_BarnaKronika_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$postSet', TMP_BarnaKronika_postSet_2 = function $$postSet() {
      var self = this, $writer = nil;

      if ($truthy(self.$bcdice())) {
        
        self.$bcdice().$cardTrader().$set1Deck2Jokers();
        
        $writer = [0];
        $send(self.$bcdice().$cardTrader(), 'card_place=', Opal.to_a($writer));
        $writer[$rb_minus($writer["length"], 1)];;
        
        $writer = [false];
        $send(self.$bcdice().$cardTrader(), 'canTapCard=', Opal.to_a($writer));
        return $writer[$rb_minus($writer["length"], 1)];;
        } else {
        return nil
      }
    }, TMP_BarnaKronika_postSet_2.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_BarnaKronika_gameName_3 = function $$gameName() {
      var self = this;

      return "バルナ・クロニカ"
    }, TMP_BarnaKronika_gameName_3.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_BarnaKronika_gameType_4 = function $$gameType() {
      var self = this;

      return "BarnaKronika"
    }, TMP_BarnaKronika_gameType_4.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_BarnaKronika_getHelpMessage_5 = function $$getHelpMessage() {
      var self = this;

      return "" + "・通常判定　nBK\n" + "　ダイス数nで判定ロールを行います。\n" + "　セット数が1以上の時はセット数も表示します。\n" + "・攻撃判定　nBA\n" + "　ダイス数nで判定ロールを行い、攻撃値と命中部位も表示します。\n" + "・クリティカルコール　nBKCt　nBACt\n" + "　判定コマンドの後ろに「Ct」を付けるとクリティカルコールです。\n" + "　ダイス数n,コール数tで判定ロールを行います。\n" + "　ダイス数nで判定ロールを行います。\n" + "　セット数が1以上の時はセット数も表示し、攻撃判定の場合は命中部位も表示します。\n"
    }, TMP_BarnaKronika_getHelpMessage_5.$$arity = 0);
    
    Opal.defn(self, '$changeText', TMP_BarnaKronika_changeText_10 = function $$changeText(string) {
      var TMP_6, TMP_7, TMP_8, TMP_9, self = this;

      
      self.$debug("parren_killer_add begin string", string);
      string = $send(string, 'gsub', [/(\d+)BKC(\d)/], (TMP_6 = function(){var self = TMP_6.$$s || this, $a;

      return "" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "R6[0," + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](2))) + "]"}, TMP_6.$$s = self, TMP_6.$$arity = 0, TMP_6));
      string = $send(string, 'gsub', [/(\d+)BAC(\d)/], (TMP_7 = function(){var self = TMP_7.$$s || this, $a;

      return "" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "R6[1," + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](2))) + "]"}, TMP_7.$$s = self, TMP_7.$$arity = 0, TMP_7));
      string = $send(string, 'gsub', [/(\d+)BK/], (TMP_8 = function(){var self = TMP_8.$$s || this, $a;

      return "" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "R6[0,0]"}, TMP_8.$$s = self, TMP_8.$$arity = 0, TMP_8));
      string = $send(string, 'gsub', [/(\d+)BA/], (TMP_9 = function(){var self = TMP_9.$$s || this, $a;

      return "" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "R6[1,0]"}, TMP_9.$$s = self, TMP_9.$$arity = 0, TMP_9));
      self.$debug("parren_killer_add end string", string);
      return string;
    }, TMP_BarnaKronika_changeText_10.$$arity = 1);
    
    Opal.defn(self, '$dice_command_xRn', TMP_BarnaKronika_dice_command_xRn_11 = function $$dice_command_xRn(string, nick_e) {
      var self = this;

      
      self.nick_e = nick_e;
      return self.$check_barna_kronika(string);
    }, TMP_BarnaKronika_dice_command_xRn_11.$$arity = 2);
    
    Opal.defn(self, '$check_barna_kronika', TMP_BarnaKronika_check_barna_kronika_13 = function $$check_barna_kronika(string) {
      var $a, $b, TMP_12, self = this, output = nil, option = nil, dice_n = nil, criticalCallDice = nil, battleModeText = nil, dice_str = nil, suc = nil, set = nil, at_str = nil;

      
      output = "1";
      if ($truthy(/(^|\s)S?((\d+)[rR]6(\[([,\d]+)\])?)(\s|$)/i['$=~'](string))) {
        } else {
        return output
      };
      string = (($a = $gvars['~']) === nil ? nil : $a['$[]'](2));
      option = (($a = $gvars['~']) === nil ? nil : $a['$[]'](5));
      dice_n = (($a = $gvars['~']) === nil ? nil : $a['$[]'](3));
      dice_n = ($truthy($a = dice_n) ? $a : 1);
      self.isBattleMode = false;
      criticalCallDice = 0;
      if ($truthy(option)) {
        
        $b = $send(option.$split(","), 'collect', [], (TMP_12 = function(i){var self = TMP_12.$$s || this;
if (i == null) i = nil;
        return i.$to_i()}, TMP_12.$$s = self, TMP_12.$$arity = 1, TMP_12)), $a = Opal.to_ary($b), (battleModeText = ($a[0] == null ? nil : $a[0])), (criticalCallDice = ($a[1] == null ? nil : $a[1])), $b;
        self.isBattleMode = battleModeText['$=='](1);};
      self.$debug("@isBattleMode", self.isBattleMode);
      $b = self.$roll_barna_kronika(dice_n, criticalCallDice), $a = Opal.to_ary($b), (dice_str = ($a[0] == null ? nil : $a[0])), (suc = ($a[1] == null ? nil : $a[1])), (set = ($a[2] == null ? nil : $a[2])), (at_str = ($a[3] == null ? nil : $a[3])), $b;
      output = "" + (self.nick_e) + ": (" + (string) + ") ＞ [" + (dice_str) + "] ＞ ";
      if ($truthy(self.isBattleMode)) {
        output = $rb_plus(output, at_str)
        } else {
        
        self.$debug("suc", suc);
        if ($truthy($rb_gt(suc, 1))) {
          output = $rb_plus(output, "" + "成功数" + (suc))
          } else {
          output = $rb_plus(output, "失敗")
        };
        self.$debug("set", set);
        if ($truthy($rb_gt(set, 0))) {
          output = $rb_plus(output, "" + ",セット" + (set))};
      };
      return output;
    }, TMP_BarnaKronika_check_barna_kronika_13.$$arity = 1);
    
    Opal.defn(self, '$roll_barna_kronika', TMP_BarnaKronika_roll_barna_kronika_17 = function $$roll_barna_kronika(dice_n, criticalCallDice) {
      var TMP_14, TMP_15, $a, self = this, output = nil, suc = nil, set = nil, at_str = nil, diceCountList = nil, c_cnt = nil;

      
      dice_n = dice_n.$to_i();
      output = "";
      suc = 0;
      set = 0;
      at_str = "";
      diceCountList = [0, 0, 0, 0, 0, 0];
      $send(dice_n, 'times', [], (TMP_14 = function(i){var self = TMP_14.$$s || this, index = nil, $writer = nil;
if (i == null) i = nil;
      
        index = self.$rand(6);
        
        $writer = [index, $rb_plus(diceCountList['$[]'](index), 1)];
        $send(diceCountList, '[]=', Opal.to_a($writer));
        $writer[$rb_minus($writer["length"], 1)];;
        if ($truthy($rb_gt(diceCountList['$[]'](index), suc))) {
          return (suc = diceCountList['$[]'](index))
          } else {
          return nil
        };}, TMP_14.$$s = self, TMP_14.$$arity = 1, TMP_14));
      $send((6), 'times', [], (TMP_15 = function(i){var self = TMP_15.$$s || this, TMP_16, diceCount = nil;
if (i == null) i = nil;
      
        diceCount = diceCountList['$[]'](i);
        if ($truthy(diceCount['$=='](0))) {
          return nil;};
        $send(diceCount, 'times', [], (TMP_16 = function(j){var self = TMP_16.$$s || this;
if (j == null) j = nil;
        return (output = $rb_plus(output, "" + ($rb_plus(i, 1)) + ","))}, TMP_16.$$s = self, TMP_16.$$arity = 1, TMP_16));
        if ($truthy(self.$isCriticalCall(i, criticalCallDice))) {
          
          self.$debug("isCriticalCall");
          at_str = $rb_plus(at_str, self.$getAttackStringWhenCriticalCall(i, diceCount));
        } else if ($truthy(self.$isNomalAtack(criticalCallDice, diceCount))) {
          
          self.$debug("isNomalAtack");
          at_str = $rb_plus(at_str, self.$getAttackStringWhenNomal(i, diceCount));};
        if ($truthy($rb_gt(diceCount, 1))) {
          return (set = $rb_plus(set, 1))
          } else {
          return nil
        };}, TMP_15.$$s = self, TMP_15.$$arity = 1, TMP_15));
      if ($truthy(criticalCallDice['$!='](0))) {
        
        c_cnt = diceCountList['$[]']($rb_minus(criticalCallDice, 1));
        suc = $rb_times(c_cnt, 2);
        if ($truthy(c_cnt['$!='](0))) {
          set = 1
          } else {
          set = 0
        };};
      if ($truthy(($truthy($a = self.isBattleMode) ? $rb_lt(suc, 2) : $a))) {
        at_str = "失敗"};
      output = output.$sub(/,$/, "");
      at_str = at_str.$sub(/,$/, "");
      return [output, suc, set, at_str];
    }, TMP_BarnaKronika_roll_barna_kronika_17.$$arity = 2);
    
    Opal.defn(self, '$isCriticalCall', TMP_BarnaKronika_isCriticalCall_18 = function $$isCriticalCall(index, criticalCallDice) {
      var self = this;

      
      if ($truthy(self.isBattleMode)) {
        } else {
        return false
      };
      if ($truthy(criticalCallDice['$=='](0))) {
        return false};
      return criticalCallDice['$==']($rb_plus(index, 1));
    }, TMP_BarnaKronika_isCriticalCall_18.$$arity = 2);
    
    Opal.defn(self, '$isNomalAtack', TMP_BarnaKronika_isNomalAtack_19 = function $$isNomalAtack(criticalCallDice, diceCount) {
      var self = this;

      
      if ($truthy(self.isBattleMode)) {
        } else {
        return false
      };
      if ($truthy(criticalCallDice['$!='](0))) {
        return false};
      return $rb_gt(diceCount, 1);
    }, TMP_BarnaKronika_isNomalAtack_19.$$arity = 2);
    
    Opal.defn(self, '$getAttackStringWhenCriticalCall', TMP_BarnaKronika_getAttackStringWhenCriticalCall_20 = function $$getAttackStringWhenCriticalCall(index, diceCount) {
      var self = this, hitLocation = nil, atackValue = nil, result = nil;

      
      hitLocation = self.$getAtackHitLocation($rb_plus(index, 1));
      atackValue = $rb_times(diceCount, 2);
      result = $rb_plus(hitLocation, "" + ":攻撃値" + (atackValue) + ",");
      return result;
    }, TMP_BarnaKronika_getAttackStringWhenCriticalCall_20.$$arity = 2);
    
    Opal.defn(self, '$getAttackStringWhenNomal', TMP_BarnaKronika_getAttackStringWhenNomal_21 = function $$getAttackStringWhenNomal(index, diceCount) {
      var self = this, hitLocation = nil, atackValue = nil, result = nil;

      
      hitLocation = self.$getAtackHitLocation($rb_plus(index, 1));
      atackValue = diceCount;
      result = $rb_plus(hitLocation, "" + ":攻撃値" + (atackValue) + ",");
      return result;
    }, TMP_BarnaKronika_getAttackStringWhenNomal_21.$$arity = 2);
    return (Opal.defn(self, '$getAtackHitLocation', TMP_BarnaKronika_getAtackHitLocation_22 = function $$getAtackHitLocation(num) {
      var self = this, table = nil;

      
      table = [[1, "頭部"], [2, "右腕"], [3, "左腕"], [4, "右脚"], [5, "左脚"], [6, "胴体"]];
      return self.$get_table_by_number(num, table);
    }, TMP_BarnaKronika_getAtackHitLocation_22.$$arity = 1), nil) && 'getAtackHitLocation';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
