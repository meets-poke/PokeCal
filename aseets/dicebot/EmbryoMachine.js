/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $gvars = Opal.gvars, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$gsub', '$checkRoll', '$debug', '$==', '$<=', '$>=', '$=~', '$to_i', '$parren_killer', '$roll', '$&', '$sortType', '$collect', '$split', '$[]', '$+', '$>', '$<', '$get_hit_level_table', '$get_hit_location_table', '$===', '$get_shoot_fumble_table', '$get_melee_fumble_table', '$!=', '$get_table_by_number', '$-']);
  return (function($base, $super, $parent_nesting) {
    function $EmbryoMachine(){};
    var self = $EmbryoMachine = $klass($base, $super, 'EmbryoMachine', $EmbryoMachine);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_EmbryoMachine_initialize_1, TMP_EmbryoMachine_gameName_2, TMP_EmbryoMachine_gameType_3, TMP_EmbryoMachine_getHelpMessage_4, TMP_EmbryoMachine_changeText_13, TMP_EmbryoMachine_dice_command_xRn_14, TMP_EmbryoMachine_check_nD10_15, TMP_EmbryoMachine_checkRoll_17, TMP_EmbryoMachine_rollDiceCommand_18, TMP_EmbryoMachine_get_hit_location_table_19, TMP_EmbryoMachine_get_shoot_fumble_table_20, TMP_EmbryoMachine_get_melee_fumble_table_21, TMP_EmbryoMachine_get_hit_level_table_22;

    def.nick_e = nil;
    
    self.$setPrefixes(["(EM\\t+|HLT|MFT|SFT)"]);
    
    Opal.defn(self, '$initialize', TMP_EmbryoMachine_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_EmbryoMachine_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_EmbryoMachine_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_EmbryoMachine_initialize_1, false), $zuper, $iter);
      self.sendMode = 2;
      return (self.sortType = 1);
    }, TMP_EmbryoMachine_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_EmbryoMachine_gameName_2 = function $$gameName() {
      var self = this;

      return "エムブリオマシン"
    }, TMP_EmbryoMachine_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_EmbryoMachine_gameType_3 = function $$gameType() {
      var self = this;

      return "EmbryoMachine"
    }, TMP_EmbryoMachine_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_EmbryoMachine_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定ロール(EMt+m@c#f)\n" + "　目標値t、修正値m、クリティカル値c(省略時は20)、ファンブル値f(省略時は2)で攻撃判定を行います。\n" + "　命中した場合は命中レベルと命中部位も自動出力します。\n" + "　Rコマンドに読み替えされます。\n" + "・各種表\n" + "　・命中部位表　HLT\n" + "　・白兵攻撃ファンブル表　MFT\n" + "　・射撃攻撃ファンブル表　SFT\n"
    }, TMP_EmbryoMachine_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$changeText', TMP_EmbryoMachine_changeText_13 = function $$changeText(string) {
      var TMP_5, TMP_6, TMP_7, TMP_8, TMP_9, TMP_10, TMP_11, TMP_12, self = this;

      
      string = $send(string, 'gsub', [/EM(\d+)([\+\-][\+\-\d]+)(@(\d+))(\#(\d+))/i], (TMP_5 = function(){var self = TMP_5.$$s || this, $a;

      return "" + "2R10" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](2))) + ">=" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "[" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](4))) + "," + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](6))) + "]"}, TMP_5.$$s = self, TMP_5.$$arity = 0, TMP_5));
      string = $send(string, 'gsub', [/EM(\d+)([\+\-][\+\-\d]+)(\#(\d+))/i], (TMP_6 = function(){var self = TMP_6.$$s || this, $a;

      return "" + "2R10" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](2))) + ">=" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "[20," + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](4))) + "]"}, TMP_6.$$s = self, TMP_6.$$arity = 0, TMP_6));
      string = $send(string, 'gsub', [/EM(\d+)([\+\-][\+\-\d]+)(@(\d+))/i], (TMP_7 = function(){var self = TMP_7.$$s || this, $a;

      return "" + "2R10" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](2))) + ">=" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "[" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](4))) + ",2]"}, TMP_7.$$s = self, TMP_7.$$arity = 0, TMP_7));
      string = $send(string, 'gsub', [/EM(\d+)([\+\-][\+\-\d]+)/i], (TMP_8 = function(){var self = TMP_8.$$s || this, $a;

      return "" + "2R10" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](2))) + ">=" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "[20,2]"}, TMP_8.$$s = self, TMP_8.$$arity = 0, TMP_8));
      string = $send(string, 'gsub', [/EM(\d+)(@(\d+))(\#(\d+))/i], (TMP_9 = function(){var self = TMP_9.$$s || this, $a;

      return "" + "2R10>=" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "[" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](3))) + "," + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](5))) + "]"}, TMP_9.$$s = self, TMP_9.$$arity = 0, TMP_9));
      string = $send(string, 'gsub', [/EM(\d+)(\#(\d+))/i], (TMP_10 = function(){var self = TMP_10.$$s || this, $a;

      return "" + "2R10>=" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "[20," + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](3))) + "]"}, TMP_10.$$s = self, TMP_10.$$arity = 0, TMP_10));
      string = $send(string, 'gsub', [/EM(\d+)(@(\d+))/i], (TMP_11 = function(){var self = TMP_11.$$s || this, $a;

      return "" + "2R10>=" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "[" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](3))) + ",2]"}, TMP_11.$$s = self, TMP_11.$$arity = 0, TMP_11));
      return (string = $send(string, 'gsub', [/EM(\d+)/i], (TMP_12 = function(){var self = TMP_12.$$s || this, $a;

      return "" + "2R10>=" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "[20,2]"}, TMP_12.$$s = self, TMP_12.$$arity = 0, TMP_12)));
    }, TMP_EmbryoMachine_changeText_13.$$arity = 1);
    
    Opal.defn(self, '$dice_command_xRn', TMP_EmbryoMachine_dice_command_xRn_14 = function $$dice_command_xRn(string, nick_e) {
      var self = this;

      return self.$checkRoll(string, nick_e)
    }, TMP_EmbryoMachine_dice_command_xRn_14.$$arity = 2);
    
    Opal.defn(self, '$check_nD10', TMP_EmbryoMachine_check_nD10_15 = function $$check_nD10(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this;

      
      self.$debug("EmbryoMachine check_nD10 begin");
      if ($truthy(signOfInequality['$=='](">="))) {
        } else {
        return ""
      };
      if ($truthy($rb_le(dice_n, 2))) {
        return " ＞ ファンブル"
      } else if ($truthy($rb_ge(dice_n, 20))) {
        return " ＞ クリティカル"
      } else if ($truthy($rb_ge(total_n, diff))) {
        return " ＞ 成功"
        } else {
        return " ＞ 失敗"
      };
    }, TMP_EmbryoMachine_check_nD10_15.$$arity = 8);
    
    Opal.defn(self, '$checkRoll', TMP_EmbryoMachine_checkRoll_17 = function $$checkRoll(string, nick_e) {
      var $a, $b, TMP_16, self = this, output = nil, diff = nil, crit = nil, fumble = nil, mod = nil, total_n = nil, modText = nil, dice_now = nil, dice_str = nil, dice_loc = nil, dice_arr = nil, big_dice = nil;

      
      output = "1";
      if ($truthy(/(^|\s)S?(2[rR]10([\+\-\d]+)?([>=]+(\d+))(\[(\d+),(\d+)\]))(\s|$)/i['$=~'](string))) {
        } else {
        return output
      };
      string = (($a = $gvars['~']) === nil ? nil : $a['$[]'](2));
      diff = 0;
      crit = 20;
      fumble = 2;
      mod = 0;
      total_n = 0;
      modText = (($a = $gvars['~']) === nil ? nil : $a['$[]'](3));
      if ($truthy((($a = $gvars['~']) === nil ? nil : $a['$[]'](5)))) {
        diff = (($a = $gvars['~']) === nil ? nil : $a['$[]'](5)).$to_i()};
      if ($truthy((($a = $gvars['~']) === nil ? nil : $a['$[]'](7)))) {
        crit = (($a = $gvars['~']) === nil ? nil : $a['$[]'](7)).$to_i()};
      if ($truthy((($a = $gvars['~']) === nil ? nil : $a['$[]'](8)))) {
        fumble = (($a = $gvars['~']) === nil ? nil : $a['$[]'](8)).$to_i()};
      if ($truthy(modText)) {
        mod = self.$parren_killer("" + "(0" + (modText) + ")").$to_i()};
      $b = self.$roll(2, 10, self.$sortType()['$&'](1)), $a = Opal.to_ary($b), (dice_now = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
      $b = self.$roll(2, 10), $a = Opal.to_ary($b), (dice_loc = ($a[0] == null ? nil : $a[0])), $b;
      dice_arr = $send(dice_str.$split(/,/), 'collect', [], (TMP_16 = function(i){var self = TMP_16.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_16.$$s = self, TMP_16.$$arity = 1, TMP_16));
      big_dice = dice_arr['$[]'](1);
      output = "" + (dice_now) + "[" + (dice_str) + "]";
      total_n = $rb_plus(dice_now, mod);
      if ($truthy($rb_gt(mod, 0))) {
        output = $rb_plus(output, "" + "+" + (mod))
      } else if ($truthy($rb_lt(mod, 0))) {
        output = $rb_plus(output, "" + (mod))};
      if ($truthy(output['$=~'](/[^\d\[\]]+/))) {
        output = "" + (self.nick_e) + ": (" + (string) + ") ＞ " + (output) + " ＞ " + (total_n)
        } else {
        output = "" + (self.nick_e) + ": (" + (string) + ") ＞ " + (output)
      };
      if ($truthy($rb_le(dice_now, fumble))) {
        output = $rb_plus(output, " ＞ ファンブル")
      } else if ($truthy($rb_ge(dice_now, crit))) {
        output = $rb_plus(output, $rb_plus($rb_plus(" ＞ クリティカル ＞ ", self.$get_hit_level_table(big_dice)), "" + "(ダメージ+10) ＞ [" + (dice_loc) + "]" + (self.$get_hit_location_table(dice_loc))))
      } else if ($truthy($rb_ge(total_n, diff))) {
        output = $rb_plus(output, $rb_plus($rb_plus(" ＞ 成功 ＞ ", self.$get_hit_level_table(big_dice)), "" + " ＞ [" + (dice_loc) + "]" + (self.$get_hit_location_table(dice_loc))))
        } else {
        output = $rb_plus(output, " ＞ 失敗")
      };
      return output;
    }, TMP_EmbryoMachine_checkRoll_17.$$arity = 2);
    
    Opal.defn(self, '$rollDiceCommand', TMP_EmbryoMachine_rollDiceCommand_18 = function $$rollDiceCommand(command) {
      var $a, $b, self = this, output = nil, type = nil, number = nil, $case = nil;

      
      self.$debug("rollDiceCommand command", command);
      output = "1";
      type = "";
      number = 0;
      $case = command;
      if (/HLT/i['$===']($case)) {
      type = "命中部位";
      $b = self.$roll(2, 10), $a = Opal.to_ary($b), (number = ($a[0] == null ? nil : $a[0])), $b;
      output = self.$get_hit_location_table(number);}
      else if (/SFT/i['$===']($case)) {
      type = "射撃ファンブル";
      $b = self.$roll(2, 10), $a = Opal.to_ary($b), (number = ($a[0] == null ? nil : $a[0])), $b;
      output = self.$get_shoot_fumble_table(number);}
      else if (/MFT/i['$===']($case)) {
      type = "白兵ファンブル";
      $b = self.$roll(2, 10), $a = Opal.to_ary($b), (number = ($a[0] == null ? nil : $a[0])), $b;
      output = self.$get_melee_fumble_table(number);};
      if ($truthy(output['$!=']("1"))) {
        output = "" + (type) + "表(" + (number) + ") ＞ " + (output)};
      return output;
    }, TMP_EmbryoMachine_rollDiceCommand_18.$$arity = 1);
    
    Opal.defn(self, '$get_hit_location_table', TMP_EmbryoMachine_get_hit_location_table_19 = function $$get_hit_location_table(num) {
      var self = this, table = nil;

      
      table = [[4, "頭"], [7, "左脚"], [9, "左腕"], [12, "胴"], [14, "右腕"], [17, "右脚"], [20, "頭"]];
      return self.$get_table_by_number(num, table);
    }, TMP_EmbryoMachine_get_hit_location_table_19.$$arity = 1);
    
    Opal.defn(self, '$get_shoot_fumble_table', TMP_EmbryoMachine_get_shoot_fumble_table_20 = function $$get_shoot_fumble_table(num) {
      var self = this, output = nil, table = nil, dc = nil;

      
      output = "1";
      table = ["暴発した。使用した射撃武器が搭載されている部位に命中レベルAで命中する。", "あまりに無様な誤射をした。パイロットの精神的負傷が2段階上昇する。", "誤射をした。自機に最も近い味方機体に命中レベルAで命中する。", "誤射をした。対象に最も近い味方機体に命中レベルAで命中する。", "武装が暴発した。使用した射撃武器が破損する。ダメージは発生しない。", "転倒した。次のセグメントのアクションが待機に変更される。", "弾詰まりを起こした。使用した射撃武器は戦闘終了まで使用できなくなる。", "砲身が大きく歪んだ。使用した射撃武器による射撃攻撃の命中値が戦闘終了まで-3される。", "熱量が激しく増大した。使用した射撃武器の消費弾薬が戦闘終了まで+3される。", "暴発した。使用した射撃武器が搭載されている部位に命中レベルBで命中する。", "弾薬が劣化した。使用した射撃武器の全てのダメージが戦闘終了まで-2される。", "無様な誤射をした。パイロットの精神的負傷が1段階上昇する。", "誤射をした。対象に最も近い味方機体に命中レベルBで命中する。", "誤射をした。自機に最も近い味方機体に命中レベルBで命中する。", "砲身が歪んだ。使用した射撃武器による射撃攻撃の命中値が戦闘終了まで-2される。", "熱量が増大した。使用した射撃武器の消費弾薬が戦闘終了まで+2される。", "砲身がわずかに歪んだ。使用した射撃武器による射撃攻撃の命中値が戦闘終了まで-1される。", "熱量がやや増大した。使用した射撃武器の消費弾薬が戦闘終了まで+1される。", "何も起きなかった。"];
      dc = 2;
      if ($truthy(table['$[]']($rb_minus(num, dc)))) {
        output = table['$[]']($rb_minus(num, dc))};
      return output;
    }, TMP_EmbryoMachine_get_shoot_fumble_table_20.$$arity = 1);
    
    Opal.defn(self, '$get_melee_fumble_table', TMP_EmbryoMachine_get_melee_fumble_table_21 = function $$get_melee_fumble_table(num) {
      var self = this, output = nil, table = nil, dc = nil;

      
      output = "1";
      table = ["大振りしすぎた。使用した白兵武器が搭載されている部位の反対の部位(右腕に搭載されているなら左側)に命中レベルAで命中する。", "激しく頭を打った。パイロットの肉体的負傷が2段階上昇する。", "過負荷で部位が爆発した。使用した白兵武器が搭載されている部位が全壊する。ダメージは発生せず、搭載されている武装も破損しない。", "大振りしすぎた。使用した白兵武器が搭載されている部位の反対の部位(右腕に搭載されているなら左側)に命中レベルBで命中する。", "武装が爆発した。使用した白兵武器が破損する。ダメージは発生しない。", "部分的に機能停止した。使用した白兵武器は戦闘終了まで使用できなくなる。", "転倒した。次のセグメントのアクションが待機に変更される。", "激しい刃こぼれを起こした。使用した白兵武器の全てのダメージが戦闘終了まで-3される。", "地面の凹凸にはまった。次の2セグメントは移動を行うことができない。", "刃こぼれを起こした。使用した白兵武器の全てのダメージが戦闘終了まで-2される。", "大振りしすぎた。使用した白兵武器が搭載されている部位の反対の部位(右腕に搭載されているなら左側)に命中レベルCで命中する。", "頭を打った。パイロットの肉体的負傷が1段階上昇する。", "駆動系が損傷した。移動力が戦闘終了まで-2される(最低1)。", "間合いを取り損ねた。隣接している機体(複数の場合は1機をランダムに決定)に激突する。", "機体ごと突っ込んだ。機体が向いている方角へ移動力をすべて消費するまで移動する。", "制御系が損傷した。回避値が戦闘終了まで-1される(最低1)。", "踏み誤った。機体が向いている方角へ移動力の半分を消費するまで移動する。", "たたらを踏んだ。機体が向いている方角へ1の移動力で移動する。", "何も起きなかった。"];
      dc = 2;
      if ($truthy(table['$[]']($rb_minus(num, dc)))) {
        output = table['$[]']($rb_minus(num, dc))};
      return output;
    }, TMP_EmbryoMachine_get_melee_fumble_table_21.$$arity = 1);
    return (Opal.defn(self, '$get_hit_level_table', TMP_EmbryoMachine_get_hit_level_table_22 = function $$get_hit_level_table(num) {
      var self = this, table = nil;

      
      table = [[6, "命中レベルC"], [9, "命中レベルB"], [10, "命中レベルA"]];
      return self.$get_table_by_number(num, table);
    }, TMP_EmbryoMachine_get_hit_level_table_22.$$arity = 1), nil) && 'get_hit_level_table';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
