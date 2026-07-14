// ======================
// PLK_Window.js
// ======================
/*:
 * @plugindesc (v1.5.6)
 * Create Window Rpg Maker MV
 * @author Palatkorn
 
 * @param windowImageInfo
 * @text Window image information
 * @desc Information about the window that replaces the background image.
 * @default
 * @type struct<WindowImages>[] 

 * @param -> default <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window selec
 * @desc true-false
 * @default true
 * @type boolean
 * @parent -> default <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window choice
 * @desc true-false
 * @default true
 * @type boolean
 * @parent -> default <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window choice1-15 
 * @desc 1-15
 * @default 15
 * @max 15
 * @min 1
 * @type Number
 * @parent -> default <<<<<<<<<<<<<<<<<<<<<<<
  
 * @param -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<< 
 * @param iconx
 * @desc position x
 * @default 40 
 * @type Number 
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param icony
 * @desc position y
 * @default 40  
 * @type Number 
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<< 
 
 * @param Icon1
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window1 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Icon2
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window2 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<

 * @param Icon3
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window3 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<

 * @param Icon4
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window4 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<< 
 
 * @param Icon5
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window5 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<

 * @param Icon6
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window6 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Icon7
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<< 
 
 * @param Window7 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<< 
 
 * @param Icon8
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window8 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<< 
 
 * @param Icon9
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window9 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<< 
 
 * @param Icon10
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window10 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<< 
 
 * @param Icon11
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window11 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  
 
 * @param Icon12
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window12 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  
 
 * @param Icon13
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window13 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  
 
 * @param Icon14
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window14 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  
 
 * @param Icon15
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window15 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  
 
 * @param Icon16
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window16 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  
 
 * @param Icon17
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window17 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  

 * @param Icon18
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window18 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon19
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window19 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon20
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window20 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon21
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window21 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon22
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window22 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon23
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window23 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon24
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window24 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon25
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window25 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon26
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window26 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon27
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window27 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon28
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window28 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon29
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window29 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon30
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window30 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon31
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window31 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon32
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window32 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon33
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window33 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon34
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window34 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon35
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window35 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon36
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window36 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon37
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window37 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon38
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window38 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon39
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window39 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon40
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window40 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon41
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window41 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon42
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window42 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon43
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window43 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon44
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window44 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon45
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window45 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon46
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window46 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon47
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window47 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon48
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window48 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon49
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window49 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon50
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window50 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon51
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window51 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon52
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window52 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon53
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window53 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon54
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window54 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon55
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window55 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon56
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window56 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon57
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window57 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon58
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window58 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon59
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window59 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon60
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window60 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon61
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window61 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon62
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window62 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon63
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window63 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon64
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window64 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon65
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window65 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon66
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window66 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon67
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window67 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon68
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window68 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon69
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window69 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon70
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window70 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon71
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window71 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon72
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window72 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon73
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window73 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon74
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window74 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon75
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window75 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    
 
 * @param Icon76
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window76 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  

 * @param Icon77
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window77 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon78
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window78 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon79
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window79 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  

 * @param Icon80
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window80 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon81
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window81 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  

 * @param Icon82
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window82 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<< 

 * @param Icon83
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window83 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  

 * @param Icon84
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window84 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  

 * @param Icon85
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window85 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  

 * @param Icon86
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window86 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon87
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window87 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon88
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window88 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon89
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window89 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon90
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window90 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon91
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window91 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon92
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window92 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon93
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window93 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon94
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window94 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon95
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window95 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon96
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window96 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<  

 * @param Icon97
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window97 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon98
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window98 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon99
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window99 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon100
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window100 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon101
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window101 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon102
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window102 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon103
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window103 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon104
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window104 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon105
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window105 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon106
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window106 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon107
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window107 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon108
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window108 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon109
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window109 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     

 * @param Icon110
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window110 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon111
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window111 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   
 
 * @param Icon112
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window112 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon113
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window113 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon114
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window114 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon115
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window115 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Icon116
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window116 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon117
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window117 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     

 * @param Icon118
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window118 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<   

 * @param Icon119
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window119 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<    

 * @param Icon120
   @type number
 * @desc Icon number
 * @default 192
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param Window120 Captions
 * @desc Write your message here
 * @type note
 * @parent -> WindowCaptions <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param -> WindowTone <<<<<<<<<<<<<<<<<<<<<<< 
 * @param ->->-> 1 <-<-<-<
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window1ToneR
 * @desc R 
 * @default 68
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window1ToneG
 * @desc G 
 * @default 187
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window1ToneB
 * @desc B
 * @default 238
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<

 * @param ->->-> 2 <-<-<-<
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window2ToneR
 * @desc R 
 * @default 255
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window2ToneG
 * @desc G 
 * @default 0
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window2ToneB
 * @desc B
 * @default 0
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param ->->-> 3 <-<-<-<
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window3ToneR
 * @desc R 
 * @default 255
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window3ToneG
 * @desc G 
 * @default 255
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window3ToneB
 * @desc B
 * @default 102
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<

 * @param ->->-> 4 <-<-<-<
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window4ToneR
 * @desc R 
 * @default 102
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window4ToneG
 * @desc G 
 * @default 255
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window4ToneB
 * @desc B
 * @default 153
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<

 * @param ->->-> 5 <-<-<-<
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window5ToneR
 * @desc R 
 * @default 255
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window5ToneG
 * @desc G 
 * @default 153
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<
 * @param Window5ToneB
 * @desc B
 * @default 255
 * @parent -> WindowTone <<<<<<<<<<<<<<<<<<<<<<<

 

 * @param -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc

 * @param page1 X
 * @desc X
 * @default 0
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param page1 Y
 * @desc X
 * @default 250
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param pageEX1 X
 * @desc X
 * @default 660
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param pageEX1 Y
 * @desc X
 * @default 250
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window Skin1
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<    
 
 * @param Window1 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window name1 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window name1
 * @desc window name
 * @default 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size1
 * @desc window font size1
 * @default 14
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<< 
 
 * @param window1 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window1 X
 * @desc X
 * @default 0
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window1 Y
 * @desc Y
 * @default 0
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window1 W
 * @desc Width
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window1 H
 * @desc Height
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window Skin2
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<    
 
 * @param Window2 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window name2 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size2
 * @desc window font size2
 * @default 14
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param window name2
 * @desc window name
 * @default 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window2 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window2 X
 * @desc X
 * @default 200
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window2 Y
 * @desc Y
 * @default 0
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window2 W
 * @desc Width
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window2 H
 * @desc Height
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window Skin3
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<   
 
 * @param Window3 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name3 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name3
 * @desc window name
 * @default 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size3
 * @desc window font size3
 * @default 14
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<  
 * 
 * @param window3 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window3 X
 * @desc X
 * @default 400
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window3 Y
 * @desc Y
 * @default 0
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window3 W
 * @desc Width
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window3 H
 * @desc Height
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin4
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window4 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name4 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name4
 * @desc window name
 * @default 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size4
 * @desc window font size4
 * @default 14
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window4 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window4 X
 * @desc X
 * @default 600
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window4 Y
 * @desc Y
 * @default 0
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window4 W
 * @desc Width
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window4 H
 * @desc Height
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin5
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<  
 * 
 * @param Window5 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name5 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name5
 * @desc window name
 * @default 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size5
 * @desc window font size5
 * @default 14
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window5 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window5 X
 * @desc X
 * @default 0
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window5 Y
 * @desc Y
 * @default 400
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window5 W
 * @desc Width
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window5 H
 * @desc Height
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin6
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<  
 * 
 * @param Window6 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name6 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name6
 * @desc window name
 * @default 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size6
 * @desc window font size6
 * @default 14
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window6 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window6 X
 * @desc X
 * @default 200
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window6 Y
 * @desc Y
 * @default 400
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window6 W
 * @desc Width
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window6 H
 * @desc Height
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin7
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<  
 * 
 * @param Window7 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name7 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name7
 * @desc window name
 * @default 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size7
 * @desc window font size7
 * @default 14
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window7 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window7 X
 * @desc X
 * @default 400
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window7 Y
 * @desc Y
 * @default 400
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window7 W
 * @desc Width
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window7 H
 * @desc Height
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin8
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<  
 * 
 * @param Window8 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name8 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name8
 * @desc window name
 * @default 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size8
 * @desc window font size8
 * @default 14
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window8 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window8 X
 * @desc X
 * @default 600
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window8 Y
 * @desc Y
 * @default 400
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window8 W
 * @desc Width
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window8 H
 * @desc Height
 * @default 150
 * @parent -> page1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page2 X
 * @desc X
 * @default 0
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param page2 Y
 * @desc X
 * @default 250
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param pageEX2 X
 * @desc X
 * @default 660
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param pageEX2 Y
 * @desc X
 * @default 250
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window Skin9
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<  
 
 * @param Window9 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window name9 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window name9
 * @desc window name
 * @default 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size9
 * @desc window font size9
 * @default 14
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 *
 * @param window9 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window9 X
 * @desc X
 * @default 0
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window9 Y
 * @desc Y
 * @default 0
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window9 W
 * @desc Width
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window9 H
 * @desc Height
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin10
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 *
 * @param Window10 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name10 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window name10
 * @desc window name
 * @default 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size10
 * @desc window font size10
 * @default 14
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 *
 * @param window10 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window10 X
 * @desc X
 * @default 200
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window10 Y
 * @desc Y
 * @default 0
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window10 W
 * @desc Width
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window10 H
 * @desc Height
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin11
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window11 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name11 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name11
 * @desc window name
 * @default 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size11
 * @desc window font size11
 * @default 14
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window11 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window11 X
 * @desc X
 * @default 400
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window11 Y
 * @desc Y
 * @default 0
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window11 W
 * @desc Width
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window11 H
 * @desc Height
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin12
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window12 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name12 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name12
 * @desc window name
 * @default 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size12
 * @desc window font size12
 * @default 14
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window12 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window12 X
 * @desc X
 * @default 600
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window12 Y
 * @desc Y
 * @default 0
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window12 W
 * @desc Width
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window12 H
 * @desc Height
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin13
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window13 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name13 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name13
 * @desc window name
 * @default 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size13
 * @desc window font size13
 * @default 14
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window13 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window13 X
 * @desc X
 * @default 0
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window13 Y
 * @desc Y
 * @default 400
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window13 W
 * @desc Width
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window13 H
 * @desc Height
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin14
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window14 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name14 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name14
 * @desc window name
 * @default 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size14
 * @desc window font size14
 * @default 14
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window14 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window14 X
 * @desc X
 * @default 200
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window14 Y
 * @desc Y
 * @default 400
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window14 W
 * @desc Width
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window14 H
 * @desc Height
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin15
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window15 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name15 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name15
 * @desc window name
 * @default 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size15
 * @desc window font size15
 * @default 14
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window15 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window15 X
 * @desc X
 * @default 400
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window15 Y
 * @desc Y
 * @default 400
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window15 W
 * @desc Width
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window15 H
 * @desc Height
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin16
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window16 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name16 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name16
 * @desc window name
 * @default 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size16
 * @desc window font size16
 * @default 14
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<  
 * 
 * @param window16 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window16 X
 * @desc X
 * @default 600
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window16 Y
 * @desc Y
 * @default 400
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window16 W
 * @desc Width
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param window16 H
 * @desc Height
 * @default 150
 * @parent -> page2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page3 X
 * @desc X
 * @default 0
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param page3 Y
 * @desc X
 * @default 250
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX3 X
 * @desc X
 * @default 660
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX3 Y
 * @desc X
 * @default 250
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin17
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window17 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name17 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name17
 * @desc window name
 * @default 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size17
 * @desc window font size17
 * @default 14
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<  
 * 
 * @param window17 Commonevent
 * @desc common events
   @type common_event
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window17 X
 * @desc X
 * @default 0
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window17 Y
 * @desc Y
 * @default 0
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window17 W
 * @desc Width
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window17 H
 * @desc Height
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin18
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window18 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name18 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name18
 * @desc window name
 * @default 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size18
 * @desc window font size18
 * @default 14
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<  
 * 
 * @param window18 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window18 X
 * @desc X
 * @default 200
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window18 Y
 * @desc Y
 * @default 0
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window18 W
 * @desc Width
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window18 H
 * @desc Height
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin19
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param Window19 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name19 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name19
 * @desc window name
 * @default 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size19
 * @desc window font size19
 * @default 14
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param window19 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window19 X
 * @desc X
 * @default 400
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window19 Y
 * @desc Y
 * @default 0
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window19 W
 * @desc Width
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window19 H
 * @desc Height
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin20
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param Window20 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name20 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name20
 * @desc window name
 * @default 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size20
 * @desc window font size20
 * @default 14
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param window20 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window20 X
 * @desc X
 * @default 600
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window20 Y
 * @desc Y
 * @default 0
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window20 W
 * @desc Width
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window20 H
 * @desc Height
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin21
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param Window21 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name21 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name21
 * @desc window name
 * @default 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size21
 * @desc window font size21
 * @default 14
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param window21 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window21 X
 * @desc X
 * @default 0
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window21 Y
 * @desc Y
 * @default 400
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window21 W
 * @desc Width
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window21 H
 * @desc Height
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin22
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param Window22 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name22 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name22
 * @desc window name
 * @default 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size22
 * @desc window font size22
 * @default 14
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param window22 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window22 X
 * @desc X
 * @default 200
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window22 Y
 * @desc Y
 * @default 400
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window22 W
 * @desc Width
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window22 H
 * @desc Height
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin23
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param Window23 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name23 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name23
 * @desc window name
 * @default 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size23
 * @desc window font size23
 * @default 14
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param window23 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window23 X
 * @desc X
 * @default 400
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window23 Y
 * @desc Y
 * @default 400
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window23 W
 * @desc Width
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window23 H
 * @desc Height
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin24
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param Window24 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name24 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name24
 * @desc window name
 * @default 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size24
 * @desc window font size24
 * @default 14
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param window24 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window24 X
 * @desc X
 * @default 600
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window24 Y
 * @desc Y
 * @default 400
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window24 W
 * @desc Width
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window24 H
 * @desc Height
 * @default 150
 * @parent -> page3 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page4 X
 * @desc X
 * @default 0
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param page4 Y
 * @desc X
 * @default 250
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param pageEX4 X
 * @desc X
 * @default 660
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param pageEX4 Y
 * @desc X
 * @default 250
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin25
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param Window25 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name25 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name25
 * @desc window name
 * @default 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size25
 * @desc window font size25
 * @default 14
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param window25 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window25 X
 * @desc X
 * @default 0
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window25 Y
 * @desc Y
 * @default 0
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window25 W
 * @desc Width
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window25 H
 * @desc Height
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin26
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window26 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name26 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name26
 * @desc window name
 * @default 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size26
 * @desc window font size26
 * @default 14
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param window26 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window26 X
 * @desc X
 * @default 200
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window26 Y
 * @desc Y
 * @default 0
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window26 W
 * @desc Width
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window26 H
 * @desc Height
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin27
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<  
 *   
 * @param Window27 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name27 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name27
 * @desc window name
 * @default 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size27
 * @desc window font size27
 * @default 14
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<   
 *   
 * @param window27 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window27 X
 * @desc X
 * @default 400
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window27 Y
 * @desc Y
 * @default 0
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window27 W
 * @desc Width
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window27 H
 * @desc Height
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin28
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<  
 *   
 * @param Window28 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name28 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name28
 * @desc window name
 * @default 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size28
 * @desc window font size28
 * @default 14
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<   
 *   
 * @param window28 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window28 X
 * @desc X
 * @default 600
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window28 Y
 * @desc Y
 * @default 0
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window28 W
 * @desc Width
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window28 H
 * @desc Height
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin29
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<  
 *   
 * @param Window29 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name29 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name29
 * @desc window name
 * @default 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size29
 * @desc window font size29
 * @default 14
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<   
 *   
 * @param window29 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window29 X
 * @desc X
 * @default 0
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window29 Y
 * @desc Y
 * @default 400
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window29 W
 * @desc Width
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window29 H
 * @desc Height
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin30
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<  
 *   
 * @param Window30 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name30 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name30
 * @desc window name
 * @default 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size30
 * @desc window font size30
 * @default 14
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<   
 *   
 * @param window30 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window30 X
 * @desc X
 * @default 200
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window30 Y
 * @desc Y
 * @default 400
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window30 W
 * @desc Width
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window30 H
 * @desc Height
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin31
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<  
 *   
 * @param Window31 ON-OOF
 * @desc switch ID
 * @default 0
 * @type switch
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name31 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name31
 * @desc window name
 * @default 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size31
 * @desc window font size31
 * @default 14
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<   
 *   
 * @param window31 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window31 X
 * @desc X
 * @default 400
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window31 Y
 * @desc Y
 * @default 400
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window31 W
 * @desc Width
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window31 H
 * @desc Height
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin32
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<  
 *   
 * @param Window32 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name32 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name32
 * @desc window name
 * @default 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size32
 * @desc window font size32
 * @default 14
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<  
 *   
 * @param window32 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window32 X
 * @desc X
 * @default 600
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window32 Y
 * @desc Y
 * @default 400
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window32 W
 * @desc Width
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window32 H
 * @desc Height
 * @default 150
 * @parent -> page4 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page5 X
 * @desc X
 * @default 0
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param page5 Y
 * @desc X
 * @default 250
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX5 X
 * @desc X
 * @default 660
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX5 Y
 * @desc X
 * @default 250
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin33
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window33 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name33 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name33
 * @desc window name
 * @default 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size33
 * @desc window font size33
 * @default 14
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<  
 * 
 * @param window33 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window33 X
 * @desc X
 * @default 0
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window33 Y
 * @desc Y
 * @default 0
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window33 W
 * @desc Width
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window33 H
 * @desc Height
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin34
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<< 
 * 
 * @param Window34 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name34 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name34
 * @desc window name
 * @default 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size34
 * @desc window font size34
 * @default 14
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window34 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window34 X
 * @desc X
 * @default 200
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window34 Y
 * @desc Y
 * @default 0
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window34 W
 * @desc Width
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window34 H
 * @desc Height
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin35
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window35 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name35 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name35
 * @desc window name
 * @default 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size35
 * @desc window font size35
 * @default 14
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window35 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window35 X
 * @desc X
 * @default 400
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window35 Y
 * @desc Y
 * @default 0
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window35 W
 * @desc Width
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window35 H
 * @desc Height
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin36
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window36 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name36 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name36
 * @desc window name
 * @default 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size36
 * @desc window font size36
 * @default 14
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window36 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window36 X
 * @desc X
 * @default 600
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window36 Y
 * @desc Y
 * @default 0
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window36 W
 * @desc Width
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window36 H
 * @desc Height
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin37
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window37 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name37 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name37
 * @desc window name
 * @default 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size37
 * @desc window font size37
 * @default 14
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window37 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window37 X
 * @desc X
 * @default 0
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window37 Y
 * @desc Y
 * @default 400
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window37 W
 * @desc Width
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window37 H
 * @desc Height
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin38
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window38 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name38 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name38
 * @desc window name
 * @default 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size38
 * @desc window font size38
 * @default 14
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window38 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window38 X
 * @desc X
 * @default 200
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window38 Y
 * @desc Y
 * @default 400
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window38 W
 * @desc Width
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window38 H
 * @desc Height
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin39
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window39 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name40 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name39
 * @desc window name
 * @default 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size39
 * @desc window font size39
 * @default 14
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window39 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window39 X
 * @desc X
 * @default 400
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window39 Y
 * @desc Y
 * @default 400
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window39 W
 * @desc Width
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window39 H
 * @desc Height
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin40
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window40 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name40 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name40
 * @desc window name
 * @default 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size40
 * @desc window font size40
 * @default 14
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window40 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window40 X
 * @desc X
 * @default 600
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window40 Y
 * @desc Y
 * @default 400
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window40 W
 * @desc Width
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window40 H
 * @desc Height
 * @default 150
 * @parent -> page5 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page6 X
 * @desc X
 * @default 0
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param page6 Y
 * @desc X
 * @default 250
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX6 X
 * @desc X
 * @default 660
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX6 Y
 * @desc X
 * @default 250
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window Skin41
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<  
  
 * @param Window41 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name41 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name41
 * @desc window name
 * @default 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size41
 * @desc window font size41
 * @default 14
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window41 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window41 X
 * @desc X
 * @default 0
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window41 Y
 * @desc Y
 * @default 0
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window41 W
 * @desc Width
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window41 H
 * @desc Height
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin42
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window42 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name42 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name42
 * @desc window name
 * @default 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size42
 * @desc window font size42
 * @default 14
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<    
 * 
 * @param window42 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window42 X
 * @desc X
 * @default 200
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window42 Y
 * @desc Y
 * @default 0
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window42 W
 * @desc Width
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window42 H
 * @desc Height
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin43
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window43 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name43 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name43
 * @desc window name
 * @default 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size43
 * @desc window font size43
 * @default 14
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window43 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window43 X
 * @desc X
 * @default 400
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window43 Y
 * @desc Y
 * @default 0
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window43 W
 * @desc Width
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window43 H
 * @desc Height
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin44
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window44 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name44 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name44
 * @desc window name
 * @default 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size44
 * @desc window font size44
 * @default 14
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window44 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window44 X
 * @desc X
 * @default 600
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window44 Y
 * @desc Y
 * @default 0
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window44 W
 * @desc Width
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window44 H
 * @desc Height
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin45
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window45 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name45 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name45
 * @desc window name
 * @default 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size45
 * @desc window font size45
 * @default 14
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window45 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window45 X
 * @desc X
 * @default 0
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window45 Y
 * @desc Y
 * @default 400
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window45 W
 * @desc Width
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window45 H
 * @desc Height
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin46
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window46 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name46 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name46
 * @desc window name
 * @default 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size46
 * @desc window font size46
 * @default 14
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window46 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window46 X
 * @desc X
 * @default 200
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window46 Y
 * @desc Y
 * @default 400
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window46 W
 * @desc Width
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window46 H
 * @desc Height
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin47
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window47 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name47 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name47
 * @desc window name
 * @default 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size47
 * @desc window font size47
 * @default 14
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window47 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window47 X
 * @desc X
 * @default 400
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window47 Y
 * @desc Y
 * @default 400
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window47 W
 * @desc Width
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window47 H
 * @desc Height
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin48
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window48 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name48 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name48
 * @desc window name
 * @default 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size48
 * @desc window font size48
 * @default 14
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window48 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window48 X
 * @desc X
 * @default 600
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window48 Y
 * @desc Y
 * @default 400
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window48 W
 * @desc Width
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window48 H
 * @desc Height
 * @default 150
 * @parent -> page6 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page7 X
 * @desc X
 * @default 0
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param page7 Y
 * @desc X
 * @default 250
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param pageEX7 X
 * @desc X
 * @default 660
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param pageEX7 Y
 * @desc X
 * @default 250
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin49
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<   
 *   
 * @param Window49 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name49 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name49
 * @desc window name
 * @default 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size49
 * @desc window font size49
 * @default 14
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window49 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window49 X
 * @desc X
 * @default 0
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window49 Y
 * @desc Y
 * @default 0
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window49 W
 * @desc Width
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window49 H
 * @desc Height
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin50
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window50 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name50 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name50
 * @desc window name
 * @default 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size50
 * @desc window font size50
 * @default 14
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window50 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window50 X
 * @desc X
 * @default 200
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window50 Y
 * @desc Y
 * @default 0
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window50 W
 * @desc Width
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window50 H
 * @desc Height
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin51
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param Window51 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name51 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name51
 * @desc window name
 * @default 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size51
 * @desc window font size51
 * @default 14
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window51 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window51 X
 * @desc X
 * @default 400
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window51 Y
 * @desc Y
 * @default 0
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window51 W
 * @desc Width
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window51 H
 * @desc Height
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin52
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param Window52 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name52 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name52
 * @desc window name
 * @default 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size52
 * @desc window font size52
 * @default 14
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<     
 *  
 * @param window52 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window52 X
 * @desc X
 * @default 600
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window52 Y
 * @desc Y
 * @default 0
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window52 W
 * @desc Width
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window52 H
 * @desc Height
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin53
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param Window53 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name53 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name53
 * @desc window name
 * @default 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size53
 * @desc window font size53
 * @default 14
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<     
 *   
 * @param window53 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window53 X
 * @desc X
 * @default 0
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window53 Y
 * @desc Y
 * @default 400
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window53 W
 * @desc Width
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window53 H
 * @desc Height
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin54
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param Window54 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name54 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name54
 * @desc window name
 * @default 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size54
 * @desc window font size54
 * @default 14
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<     
 *   
 * @param window54 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window54 X
 * @desc X
 * @default 200
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window54 Y
 * @desc Y
 * @default 400
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window54 W
 * @desc Width
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window54 H
 * @desc Height
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin55
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param Window55 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name55 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name55
 * @desc window name
 * @default 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size55
 * @desc window font size55
 * @default 14
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<     
 *   
 * @param window55 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window55 X
 * @desc X
 * @default 400
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window55 Y
 * @desc Y
 * @default 400
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window55 W
 * @desc Width
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window55 H
 * @desc Height
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin56
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param Window56 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name56 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name56
 * @desc window name
 * @default 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size56
 * @desc window font size56
 * @default 14
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<     
 *   
 * @param window56 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window56 X
 * @desc X
 * @default 600
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window56 Y
 * @desc Y
 * @default 400
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window56 W
 * @desc Width
 * @default 150
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window56 H
 * @desc Height
 * @default 150 
 * @parent -> page7 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page8 X
 * @desc X
 * @default 0
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param page8 Y
 * @desc X
 * @default 250
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param pageEX8 X
 * @desc X
 * @default 660
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param pageEX8 Y
 * @desc X
 * @default 250
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin57
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<    
 *    
 * @param Window57 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name57 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name57
 * @desc window name
 * @default 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size57
 * @desc window font size57
 * @default 14
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<     
 *   
 * @param window57 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window57 X
 * @desc X
 * @default 0
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window57 Y
 * @desc Y
 * @default 0
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window57 W
 * @desc Width
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window57 H
 * @desc Height
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin58
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<     
 *   
 * @param Window58 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name58 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name58
 * @desc window name
 * @default 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size58
 * @desc window font size58
 * @default 14
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<     
 *   
 * @param window58 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window58 X
 * @desc X
 * @default 200
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window58 Y
 * @desc Y
 * @default 0
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window58 W
 * @desc Width
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window58 H
 * @desc Height
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin59
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<  
 *    
 * @param Window59 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name59 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name59
 * @desc window name
 * @default 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size59
 * @desc window font size59
 * @default 14
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<     
 *    
 * @param window59 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window59 X
 * @desc X
 * @default 400
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window59 Y
 * @desc Y
 * @default 0
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window59 W
 * @desc Width
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window59 H
 * @desc Height
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin60
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<   
 *    
 * @param Window60 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name60 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name60
 * @desc window name
 * @default 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size60
 * @desc window font size60
 * @default 14
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<     
 *    
 * @param window60 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window60 X
 * @desc X
 * @default 600
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window60 Y
 * @desc Y
 * @default 0
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window60 W
 * @desc Width
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window60 H
 * @desc Height
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin61
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<  
 *    
 * @param Window61 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name61 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name61
 * @desc window name
 * @default 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size61
 * @desc window font size61
 * @default 14
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<    
 *    
 * @param window61 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window61 X
 * @desc X
 * @default 0
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window61 Y
 * @desc Y
 * @default 400
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window61 W
 * @desc Width
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window61 H
 * @desc Height
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin62
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<  
 *    
 * @param Window62 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name62 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name62
 * @desc window name
 * @default 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size62
 * @desc window font size62
 * @default 14
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<    
 *    
 * @param window62 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window62 X
 * @desc X
 * @default 200
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window62 Y
 * @desc Y
 * @default 400
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window62 W
 * @desc Width
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window62 H
 * @desc Height
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin63
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<  
 *    
 * @param Window63 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name63 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name63
 * @desc window name
 * @default 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size63
 * @desc window font size63
 * @default 14
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<    
 *    
 * @param window63 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window63 X
 * @desc X
 * @default 400
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window63 Y
 * @desc Y
 * @default 400
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window63 W
 * @desc Width
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window63 H
 * @desc Height
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window Skin64
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<< 
 
 * @param Window64 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name64 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window name64
 * @desc window name
 * @default 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size64
 * @desc window font size64
 * @default 14
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<    
 *    
 * @param window64 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window64 X
 * @desc X
 * @default 600
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param window64 Y
 * @desc Y
 * @default 400
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window64 W
 * @desc Width
 * @default 150
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window64 H
 * @desc Height
 * @default 150 
 * @parent -> page8 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page9 X
 * @desc X
 * @default 0
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param page9 Y
 * @desc X
 * @default 250
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX9 X
 * @desc X
 * @default 660
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX9 Y
 * @desc X
 * @default 250
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin65
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window65 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name65 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name65
 * @desc window name
 * @default 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size65
 * @desc window font size65
 * @default 14
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<    
 * 
 * @param window65 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window65 X
 * @desc X
 * @default 0
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window65 Y
 * @desc Y
 * @default 0
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window65 W
 * @desc Width
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window65 H
 * @desc Height
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin66
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<  
 * 
 * @param Window66 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name66 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name66
 * @desc window name
 * @default 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size66
 * @desc window font size66
 * @default 14
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window66 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window66 X
 * @desc X
 * @default 200
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window66 Y
 * @desc Y
 * @default 0
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window66 W
 * @desc Width
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window66 H
 * @desc Height
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin67
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window67 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name67 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name67
 * @desc window name
 * @default 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size67
 * @desc window font size67
 * @default 14
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window67 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window67 X
 * @desc X
 * @default 400
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window67 Y
 * @desc Y
 * @default 0
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window67 W
 * @desc Width
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window67 H
 * @desc Height
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin68
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window68 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name68 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name68
 * @desc window name
 * @default 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size68
 * @desc window font size68
 * @default 14
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window68 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window68 X
 * @desc X
 * @default 600
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window68 Y
 * @desc Y
 * @default 0
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window68 W
 * @desc Width
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window68 H
 * @desc Height
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin69
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<< 
 *  
 * @param Window69 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name69 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name69
 * @desc window name
 * @default 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size69
 * @desc window font size69
 * @default 14
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window69 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window69 X
 * @desc X
 * @default 0
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window69 Y
 * @desc Y
 * @default 400
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window69 W
 * @desc Width
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window69 H
 * @desc Height
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window Skin70
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<  
 
 * @param Window70 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name70 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name70
 * @desc window name
 * @default 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size70
 * @desc window font size70
 * @default 14
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param window70 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window70 X
 * @desc X
 * @default 200
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window70 Y
 * @desc Y
 * @default 400
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window70 W
 * @desc Width
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window70 H
 * @desc Height
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin71
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window71 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name71 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name71
 * @desc window name
 * @default 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size71
 * @desc window font size71
 * @default 14
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window71 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window71 X
 * @desc X
 * @default 400
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window71 Y
 * @desc Y
 * @default 400
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window71 W
 * @desc Width
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window71 H
 * @desc Height
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin72
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window72 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name72 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name72
 * @desc window name
 * @default 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size72
 * @desc window font size72
 * @default 14
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window72 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window72 X
 * @desc X
 * @default 600
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window72 Y
 * @desc Y
 * @default 400
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window72 W
 * @desc Width
 * @default 150
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window72 H
 * @desc Height
 * @default 150 
 * @parent -> page9 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page10 X
 * @desc X
 * @default 0
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param page10 Y
 * @desc X
 * @default 250
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX10 X
 * @desc X
 * @default 660
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX10 Y
 * @desc X
 * @default 250
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin73
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window73 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name73 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name73
 * @desc window name
 * @default 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size73
 * @desc window font size73
 * @default 14
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window73 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window73 X
 * @desc X
 * @default 0
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window73 Y
 * @desc Y
 * @default 0
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window73 W
 * @desc Width
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window73 H
 * @desc Height
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin74
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<  
 * 
 * @param Window74 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name74 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name74
 * @desc window name
 * @default 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size74
 * @desc window font size74
 * @default 14
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window74 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window74 X
 * @desc X
 * @default 200
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window74 Y
 * @desc Y
 * @default 0
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window74 W
 * @desc Width
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window74 H
 * @desc Height
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window Skin75
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<< 
 
 * @param Window75 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name75 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name75
 * @desc window name
 * @default 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size75
 * @desc window font size75
 * @default 14
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window75 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window75 X
 * @desc X
 * @default 400
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window75 Y
 * @desc Y
 * @default 0
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window75 W
 * @desc Width
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window75 H
 * @desc Height
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window Skin76
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<  
 
 * @param Window76 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name76 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name76
 * @desc window name
 * @default 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size76
 * @desc window font size76
 * @default 14
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window76 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window76 X
 * @desc X
 * @default 600
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window76 Y
 * @desc Y
 * @default 0
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window76 W
 * @desc Width
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window76 H
 * @desc Height
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin77
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window77 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name77 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name77
 * @desc window name
 * @default 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size77
 * @desc window font size77
 * @default 14
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window77 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window77 X
 * @desc X
 * @default 0
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window77 Y
 * @desc Y
 * @default 400
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window77 W
 * @desc Width
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window77 H
 * @desc Height
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin78
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window78 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name78 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name78
 * @desc window name
 * @default 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size78
 * @desc window font size78
 * @default 14
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window78 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window78 X
 * @desc X
 * @default 200
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window78 Y
 * @desc Y
 * @default 400
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window78 W
 * @desc Width
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window78 H
 * @desc Height
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin79
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window79 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name79 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name79
 * @desc window name
 * @default 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size79
 * @desc window font size79
 * @default 14
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window79 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window79 X
 * @desc X
 * @default 400
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window79 Y
 * @desc Y
 * @default 400
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window79 W
 * @desc Width
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window79 H
 * @desc Height
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin80
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window80 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name80 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name80
 * @desc window name
 * @default 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size80
 * @desc window font size80
 * @default 14
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window80 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window80 X
 * @desc X
 * @default 600
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window80 Y
 * @desc Y
 * @default 400
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window80 W
 * @desc Width
 * @default 150
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window80 H
 * @desc Height
 * @default 150  
 * @parent -> page10 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page11 X
 * @desc X
 * @default 0
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param page11 Y
 * @desc X
 * @default 250
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX11 X
 * @desc X
 * @default 660
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX11 Y
 * @desc X
 * @default 250
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin81
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window81 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name81 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name81
 * @desc window name
 * @default 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size81
 * @desc window font size81
 * @default 14
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window81 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window81 X
 * @desc X
 * @default 0
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window81 Y
 * @desc Y
 * @default 0
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window81 W
 * @desc Width
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window81 H
 * @desc Height
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin82
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window82 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name82 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name82
 * @desc window name
 * @default 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size82
 * @desc window font size82
 * @default 14
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window82 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window82 X
 * @desc X
 * @default 200
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window82 Y
 * @desc Y
 * @default 0
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window82 W
 * @desc Width
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window82 H
 * @desc Height
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window Skin83
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<  
 
 * @param Window83 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name83 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name83
 * @desc window name
 * @default 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size83
 * @desc window font size83
 * @default 14
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window83 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window83 X
 * @desc X
 * @default 400
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window83 Y
 * @desc Y
 * @default 0
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window83 W
 * @desc Width
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window83 H
 * @desc Height
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin84
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window84 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name84 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name84
 * @desc window name
 * @default 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size84
 * @desc window font size84
 * @default 14
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window84 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window84 X
 * @desc X
 * @default 600
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window84 Y
 * @desc Y
 * @default 0
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window84 W
 * @desc Width
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window84 H
 * @desc Height
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin85
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window85 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name85 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name85
 * @desc window name
 * @default 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size85
 * @desc window font size85
 * @default 14
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window85 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window85 X
 * @desc X
 * @default 0
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window85 Y
 * @desc Y
 * @default 400
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window85 W
 * @desc Width
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window85 H
 * @desc Height
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin86
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window86 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name86 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name86
 * @desc window name
 * @default 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size86
 * @desc window font size86
 * @default 14
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window86 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window86 X
 * @desc X
 * @default 200
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window86 Y
 * @desc Y
 * @default 400
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window86 W
 * @desc Width
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window86 H
 * @desc Height
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin87
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window87 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name87 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name87
 * @desc window name
 * @default 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size87
 * @desc window font size87
 * @default 14
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window87 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window87 X
 * @desc X
 * @default 400
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window87 Y
 * @desc Y
 * @default 400
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window87 W
 * @desc Width
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window87 H
 * @desc Height
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin88
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<  
 *  
 * @param Window88 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name88 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name88
 * @desc window name
 * @default 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size88
 * @desc window font size88
 * @default 14
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window88 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window88 X
 * @desc X
 * @default 600
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window88 Y
 * @desc Y
 * @default 400
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window88 W
 * @desc Width
 * @default 150
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window88 H
 * @desc Height
 * @default 150  
 * @parent -> page11 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page12 X
 * @desc X
 * @default 0
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param page12 Y
 * @desc X
 * @default 250
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX12 X
 * @desc X
 * @default 660
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX12 Y
 * @desc X
 * @default 250
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin89
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<  
 * 
 * @param Window89 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name89 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name89
 * @desc window name
 * @default 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size89
 * @desc window font size89
 * @default 14
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window89 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window89 X
 * @desc X
 * @default 0
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window89 Y
 * @desc Y
 * @default 0
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window89 W
 * @desc Width
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window89 H
 * @desc Height
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin90
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window90 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name90 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name90
 * @desc window name
 * @default 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size90
 * @desc window font size90
 * @default 14
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window90 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window90 X
 * @desc X
 * @default 200
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window90 Y
 * @desc Y
 * @default 0
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window90 W
 * @desc Width
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window90 H
 * @desc Height
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin91
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window91 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name91 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name91
 * @desc window name
 * @default 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size91
 * @desc window font size91
 * @default 14
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window91 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window91 X
 * @desc X
 * @default 400
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window91 Y
 * @desc Y
 * @default 0
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window91 W
 * @desc Width
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window91 H
 * @desc Height
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin92
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window92 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name92 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name92
 * @desc window name
 * @default 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size92
 * @desc window font size92
 * @default 14
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window92 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window92 X
 * @desc X
 * @default 600
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window92 Y
 * @desc Y
 * @default 0
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window92 W
 * @desc Width
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window92 H
 * @desc Height
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin93
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window93 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name93 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name93
 * @desc window name
 * @default 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size93
 * @desc window font size93
 * @default 14
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window93 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window93 X
 * @desc X
 * @default 0
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window93 Y
 * @desc Y
 * @default 400
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window93 W
 * @desc Width
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window93 H
 * @desc Height
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin94
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window94 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name94 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name94
 * @desc window name
 * @default 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size94
 * @desc window font size94
 * @default 14
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window94 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window94 X
 * @desc X
 * @default 200
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window94 Y
 * @desc Y
 * @default 400
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window94 W
 * @desc Width
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window94 H
 * @desc Height
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin95
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window95 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name95 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name95
 * @desc window name
 * @default 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size95
 * @desc window font size95
 * @default 14
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window95 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window95 X
 * @desc X
 * @default 400
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window95 Y
 * @desc Y
 * @default 400
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window95 W
 * @desc Width
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window95 H
 * @desc Height
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin96
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window96 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name96 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name96
 * @desc window name
 * @default 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size96
 * @desc window font size96
 * @default 14
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window96 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window96 X
 * @desc X
 * @default 600
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window96 Y
 * @desc Y
 * @default 400
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window96 W
 * @desc Width
 * @default 150
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window96 H
 * @desc Height
 * @default 150   
 * @parent -> page12 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page13 X
 * @desc X
 * @default 0
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param page13 Y
 * @desc X
 * @default 250
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX13 X
 * @desc X
 * @default 660
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param pageEX13 Y
 * @desc X
 * @default 250
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin97
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window97 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name97 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name97
 * @desc window name
 * @default 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size97
 * @desc window font size97
 * @default 14
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param window97 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window97 X
 * @desc X
 * @default 0
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window97 Y
 * @desc Y
 * @default 0
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window97 W
 * @desc Width
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window97 H
 * @desc Height
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin98
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 * 
 * @param Window98 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name98 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name98
 * @desc window name
 * @default 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size98
 * @desc window font size98
 * @default 14
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<    
 * 
 * @param window98 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window98 X
 * @desc X
 * @default 200
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window98 Y
 * @desc Y
 * @default 0
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window98 W
 * @desc Width
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window98 H
 * @desc Height
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin99
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window99 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name99 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name99
 * @desc window name
 * @default 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size99
 * @desc window font size99
 * @default 14
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window99 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window99 X
 * @desc X
 * @default 400
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window99 Y
 * @desc Y
 * @default 0
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window99 W
 * @desc Width
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window99 H
 * @desc Height
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin100
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window100 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name100 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name100
 * @desc window name
 * @default 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size100
 * @desc window font size100
 * @default 14
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window100 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window100 X
 * @desc X
 * @default 600
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window100 Y
 * @desc Y
 * @default 0
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window100 W
 * @desc Width
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window100 H
 * @desc Height
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin101
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window101 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name101 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name101
 * @desc window name
 * @default 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size101
 * @desc window font size101
 * @default 14
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window101 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window101 X
 * @desc X
 * @default 0
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window101 Y
 * @desc Y
 * @default 400
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window101 W
 * @desc Width
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window101 H
 * @desc Height
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin102
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window102 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name102 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window name102
 * @desc window name
 * @default 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size102
 * @desc window font size102
 * @default 14
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window102 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window102 X
 * @desc X
 * @default 200
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window102 Y
 * @desc Y
 * @default 400
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window102 W
 * @desc Width
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window102 H
 * @desc Height
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin103
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window103 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name103 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name103
 * @desc window name
 * @default 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size103
 * @desc window font size103
 * @default 14
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window103 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window103 X
 * @desc X
 * @default 400
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window103 Y
 * @desc Y
 * @default 400
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window103 W
 * @desc Width
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window103 H
 * @desc Height
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin104
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param Window104 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name104 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name104
 * @desc window name
 * @default 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size104
 * @desc window font size104
 * @default 14
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window104 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window104 X
 * @desc X
 * @default 600
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window104 Y
 * @desc Y
 * @default 400
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window104 W
 * @desc Width
 * @default 150
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param window104 H
 * @desc Height
 * @default 150   
 * @parent -> page13 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page14 X
 * @desc X
 * @default 0
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param page14 Y
 * @desc X
 * @default 250
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param pageEX14 X
 * @desc X
 * @default 660
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param pageEX14 Y
 * @desc X
 * @default 250
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin105
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<   
 *   
 * @param Window105 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name105 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name105
 * @desc window name
 * @default 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size105
 * @desc window font size105
 * @default 14
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<   
 *  
 * @param window105 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window105 X
 * @desc X
 * @default 0
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window105 Y
 * @desc Y
 * @default 0
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window105 W
 * @desc Width
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window105 H
 * @desc Height
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin106
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param Window106 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name106 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name106
 * @desc window name
 * @default 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size106
 * @desc window font size106
 * @default 14
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window106 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window106 X
 * @desc X
 * @default 200
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window106 Y
 * @desc Y
 * @default 0
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window106 W
 * @desc Width
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window106 H
 * @desc Height
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin107
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param Window107 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name107 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name107
 * @desc window name
 * @default 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size107
 * @desc window font size107
 * @default 14
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window107 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window107 X
 * @desc X
 * @default 400
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window107 Y
 * @desc Y
 * @default 0
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window107 W
 * @desc Width
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window107 H
 * @desc Height
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin108
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param Window108 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name108 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name108
 * @desc window name
 * @default 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size108
 * @desc window font size108
 * @default 14
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window108 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window108 X
 * @desc X
 * @default 600
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window108 Y
 * @desc Y
 * @default 0
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window108 W
 * @desc Width
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window108 H
 * @desc Height
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window Skin109
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<   
 
 * @param Window109 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name109 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name109
 * @desc window name
 * @default 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size109
 * @desc window font size109
 * @default 14
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window109 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window109 X
 * @desc X
 * @default 0
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window109 Y
 * @desc Y
 * @default 400
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window109 W
 * @desc Width
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window109 H
 * @desc Height
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window Skin110
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<    
 
 * @param Window110 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name110 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name110
 * @desc window name
 * @default 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size110
 * @desc window font size110
 * @default 14
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window110 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window110 X
 * @desc X
 * @default 200
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window110 Y
 * @desc Y
 * @default 400
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window110 W
 * @desc Width
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window110 H
 * @desc Height
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window Skin111
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<   
 
 * @param Window111 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name111 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name111
 * @desc window name
 * @default 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size111
 * @desc window font size111
 * @default 14
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window111 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window111 X
 * @desc X
 * @default 400
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window111 Y
 * @desc Y
 * @default 400
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window111 W
 * @desc Width
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window111 H
 * @desc Height
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window Skin112
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<   
 
 * @param Window112 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name112 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name112
 * @desc window name
 * @default 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size112
 * @desc window font size112
 * @default 14
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window112 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window112 X
 * @desc X
 * @default 600
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window112 Y
 * @desc Y
 * @default 400
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window112 W
 * @desc Width
 * @default 150
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window112 H
 * @desc Height
 * @default 150   
 * @parent -> page14 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 
 * @param page15 X
 * @desc X
 * @default 0
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param page15 Y
 * @desc X
 * @default 250
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param pageEX15 X
 * @desc X
 * @default 660
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param pageEX15 Y
 * @desc X
 * @default 250
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin113
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param Window113 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name113 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name113
 * @desc window name
 * @default 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size113
 * @desc window font size113
 * @default 14
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window113 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window113 X
 * @desc X
 * @default 0
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window113 Y
 * @desc Y
 * @default 0
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window113 W
 * @desc Width
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window113 H
 * @desc Height
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin114
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<     
 *  
 * @param Window114 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name114 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name114
 * @desc window name
 * @default 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window font size114
 * @desc window font size114
 * @default 14
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<    
 *  
 * @param window114 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window114 X
 * @desc X
 * @default 200
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window114 Y
 * @desc Y
 * @default 0
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window114 W
 * @desc Width
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window114 H
 * @desc Height
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window Skin115
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Window115 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name115 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name115
 * @desc window name
 * @default 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size115
 * @desc window font size115
 * @default 14
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window115 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window115 X
 * @desc X
 * @default 400
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window115 Y
 * @desc Y
 * @default 0
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window115 W
 * @desc Width
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window115 H
 * @desc Height
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window Skin116
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<    
 
 * @param Window116 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name116 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name116
 * @desc window name
 * @default 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size116
 * @desc window font size116
 * @default 14
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window116 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window116 X
 * @desc X
 * @default 600
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window116 Y
 * @desc Y
 * @default 0
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window116 W
 * @desc Width
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window116 H
 * @desc Height
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<

 * @param window Skin117
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<     
 *   
 * @param Window117 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name117 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name117
 * @desc window name
 * @default 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size117
 * @desc window font size117
 * @default 14
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window117 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window117 X
 * @desc X
 * @default 0
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window117 Y
 * @desc Y
 * @default 400
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window117 W
 * @desc Width
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window117 H
 * @desc Height
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window Skin118
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Window118 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name118 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name118
 * @desc window name
 * @default 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size118
 * @desc window font size118
 * @default 14
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window118 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window118 X
 * @desc X
 * @default 200
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window118 Y
 * @desc Y
 * @default 400
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window118 W
 * @desc Width
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window118 H
 * @desc Height
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window Skin119
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<     
 *   
 * @param Window119 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name119 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name119
 * @desc window name
 * @default 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size119
 * @desc window font size119
 * @default 14
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window119 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window119 X
 * @desc X
 * @default 400
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window119 Y
 * @desc Y
 * @default 400
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window119 W
 * @desc Width
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window119 H
 * @desc Height
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window Skin120
 * @type file
 * @dir img/system/
 * @desc Image 
 * @default Window
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<     
 
 * @param Window120 ON-OOF
 * @desc switch ID Use it repeatedly to turn all on and off.
 * @default 0
 * @type switch
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window name120 color
 * @desc 0-32
 * @default 0
 * @max 32
 * @min 0
 * @type Number  
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window name120
 * @desc window name
 * @default 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 
 * @param window font size120
 * @desc window font size120
 * @default 14
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<    
 *   
 * @param window120 Commonevent
 * @desc common events
   @type common_event
 * @default 0 
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window120 X
 * @desc X
 * @default 600
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param window120 Y
 * @desc Y
 * @default 400
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window120 W
 * @desc Width
 * @default 150
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *  
 * @param window120 H
 * @desc Height
 * @default 150   
 * @parent -> page15 <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @help
 * Plugin Command:

  If you want, change the color every time before entering. Window to paste
  In order like this
   PLK_Window Color1
    PLK_Window Buy1
 # open Gallery screen.
 
   Press the B button Open PLK_Window Buy1

   PLK_Window Color1 
   PLK_Window Color2
   PLK_Window Color3
   PLK_Window Color4
   PLK_Window Color5
   PLK_Window Buy1
   PLK_Window Buy2
   PLK_Window Buy3
   PLK_Window Buy4
   PLK_Window Buy5
   PLK_Window Buy6
   PLK_Window Buy7
   PLK_Window Buy8
   PLK_Window Buy9
   PLK_Window Buy10
   PLK_Window Buy11
   PLK_Window Buy12
   PLK_Window Buy13
   PLK_Window Buy14
   PLK_Window Buy15   
   

 */

/*~struct~WindowImages:
 *
 * @param WindowClass
 * @desc This is the window to replace with the dedicated image. If it is not in the list, enter it directly.
 * @type select
 * @default
 * @option Window_Buy1
 * @value Window_ServanBuy1
 * @option Window_Buy2
 * @value Window_ServanBuy2
 * @option Window_Buy3
 * @value Window_ServanBuy3
 * @option Window_Buy4
 * @value Window_ServanBuy4
 * @option Window_Buy5
 * @value Window_ServanBuy5
 * @option Window_Buy6
 * @value Window_ServanBuy6
 * @option Window_Buy7
 * @value Window_ServanBuy7
 * @option Window_Buy8
 * @value Window_ServanBuy8
 * @option Window_Buy9
 * @value Window_ServanBuy9
 * @option Window_Buy10
 * @value Window_ServanBuy10
 * @option Window_Buy11
 * @value Window_ServanBuy11
 * @option Window_Buy12
 * @value Window_ServanBuy12
 * @option Window_Buy13
 * @value Window_ServanBuy13
 * @option Window_Buy14
 * @value Window_ServanBuy14
 * @option Window_Buy15
 * @value Window_ServanBuy15
 * @option Window_Buy16
 * @value Window_ServanBuy16
 * @option Window_Buy17
 * @value Window_ServanBuy17
 * @option Window_Buy18
 * @value Window_ServanBuy18
 * @option Window_Buy19
 * @value Window_ServanBuy19
 * @option Window_Buy20
 * @value Window_ServanBuy20
 * @option Window_Buy21
 * @value Window_ServanBuy21
 * @option Window_Buy22
 * @value Window_ServanBuy22
 * @option Window_Buy23
 * @value Window_ServanBuy23
 * @option Window_Buy24
 * @value Window_ServanBuy24
 * @option Window_Buy25
 * @value Window_ServanBuy25
 * @option Window_Buy26
 * @value Window_ServanBuy26
 * @option Window_Buy27
 * @value Window_ServanBuy27
 * @option Window_Buy28
 * @value Window_ServanBuy28
 * @option Window_Buy29
 * @value Window_ServanBuy29
 * @option Window_Buy30
 * @value Window_ServanBuy30
 * @option Window_Buy31
 * @value Window_ServanBuy31
 * @option Window_Buy32
 * @value Window_ServanBuy32
 * @option Window_Buy33
 * @value Window_ServanBuy33
 * @option Window_Buy34
 * @value Window_ServanBuy34
 * @option Window_Buy35
 * @value Window_ServanBuy35
 * @option Window_Buy36
 * @value Window_ServanBuy36
 * @option Window_Buy37
 * @value Window_ServanBuy37
 * @option Window_Buy38
 * @value Window_ServanBuy38
 * @option Window_Buy39
 * @value Window_ServanBuy39
 * @option Window_Buy40
 * @value Window_ServanBuy40
 * @option Window_Buy41
 * @value Window_ServanBuy41
 * @option Window_Buy42
 * @value Window_ServanBuy42
 * @option Window_Buy43
 * @value Window_ServanBuy43
 * @option Window_Buy44
 * @value Window_ServanBuy44
 * @option Window_Buy45
 * @value Window_ServanBuy45
 * @option Window_Buy46
 * @value Window_ServanBuy46
 * @option Window_Buy47
 * @value Window_ServanBuy47
 * @option Window_Buy48
 * @value Window_ServanBuy48
 * @option Window_Buy49
 * @value Window_ServanBuy49
 * @option Window_Buy50
 * @value Window_ServanBuy50
 * @option Window_Buy51
 * @value Window_ServanBuy51
 * @option Window_Buy52
 * @value Window_ServanBuy52
 * @option Window_Buy53
 * @value Window_ServanBuy53
 * @option Window_Buy54
 * @value Window_ServanBuy54
 * @option Window_Buy55
 * @value Window_ServanBuy55
 * @option Window_Buy56
 * @value Window_ServanBuy56
 * @option Window_Buy57
 * @value Window_ServanBuy57
 * @option Window_Buy58
 * @value Window_ServanBuy58
 * @option Window_Buy59
 * @value Window_ServanBuy59
 * @option Window_Buy60
 * @value Window_ServanBuy60
 * @option Window_Buy61
 * @value Window_ServanBuy61
 * @option Window_Buy62
 * @value Window_ServanBuy62
 * @option Window_Buy63
 * @value Window_ServanBuy63
 * @option Window_Buy64
 * @value Window_ServanBuy64
 * @option Window_Buy65
 * @value Window_ServanBuy65
 * @option Window_Buy66
 * @value Window_ServanBuy66
 * @option Window_Buy67
 * @value Window_ServanBuy67
 * @option Window_Buy68
 * @value Window_ServanBuy68
 * @option Window_Buy69
 * @value Window_ServanBuy69
 * @option Window_Buy70
 * @value Window_ServanBuy70
 * @option Window_Buy71
 * @value Window_ServanBuy71
 * @option Window_Buy72
 * @value Window_ServanBuy72
 * @option Window_Buy73
 * @value Window_ServanBuy73
 * @option Window_Buy74
 * @value Window_ServanBuy74
 * @option Window_Buy75
 * @value Window_ServanBuy75
 * @option Window_Buy76
 * @value Window_ServanBuy76
 * @option Window_Buy77
 * @value Window_ServanBuy77
 * @option Window_Buy78
 * @value Window_ServanBuy78
 * @option Window_Buy79
 * @value Window_ServanBuy79
 * @option Window_Buy80
 * @value Window_ServanBuy80
 * @option Window_Buy81
 * @value Window_ServanBuy81
 * @option Window_Buy82
 * @value Window_ServanBuy82
 * @option Window_Buy83
 * @value Window_ServanBuy83
 * @option Window_Buy84
 * @value Window_ServanBuy84
 * @option Window_Buy85
 * @value Window_ServanBuy85
 * @option Window_Buy86
 * @value Window_ServanBuy86
 * @option Window_Buy87
 * @value Window_ServanBuy87
 * @option Window_Buy88
 * @value Window_ServanBuy88
 * @option Window_Buy89
 * @value Window_ServanBuy89
 * @option Window_Buy90
 * @value Window_ServanBuy90
 * @option Window_Buy91
 * @value Window_ServanBuy91
 * @option Window_Buy92
 * @value Window_ServanBuy92
 * @option Window_Buy93
 * @value Window_ServanBuy93
 * @option Window_Buy94
 * @value Window_ServanBuy94
 * @option Window_Buy95
 * @value Window_ServanBuy95
 * @option Window_Buy96
 * @value Window_ServanBuy96
 * @option Window_Buy97
 * @value Window_ServanBuy97
 * @option Window_Buy98
 * @value Window_ServanBuy98
 * @option Window_Buy99
 * @value Window_ServanBuy99
 * @option Window_Buy100
 * @value Window_ServanBuy100
 * @option Window_Buy101
 * @value Window_ServanBuy101
 * @option Window_Buy102
 * @value Window_ServanBuy102
 * @option Window_Buy103
 * @value Window_ServanBuy103
 * @option Window_Buy104
 * @value Window_ServanBuy104
 * @option Window_Buy105
 * @value Window_ServanBuy105
 * @option Window_Buy106
 * @value Window_ServanBuy106
 * @option Window_Buy107
 * @value Window_ServanBuy107
 * @option Window_Buy108
 * @value Window_ServanBuy108
 * @option Window_Buy109
 * @value Window_ServanBuy109
 * @option Window_Buy110
 * @value Window_ServanBuy110
 * @option Window_Buy111
 * @value Window_ServanBuy111
 * @option Window_Buy112
 * @value Window_ServanBuy112
 * @option Window_Buy113
 * @value Window_ServanBuy113
 * @option Window_Buy114
 * @value Window_ServanBuy114
 * @option Window_Buy115
 * @value Window_ServanBuy115
 * @option Window_Buy116
 * @value Window_ServanBuy116
 * @option Window_Buy117
 * @value Window_ServanBuy117
 * @option Window_Buy118
 * @value Window_ServanBuy118
 * @option Window_Buy119
 * @value Window_ServanBuy119
 * @option Window_Buy120
 * @value Window_ServanBuy120 
 * @option Window_IconCaption 
 * @value Window_IconCaption
 * @option Window_MenuActor
 * @value Window_MenuSt
 * @option Window_Time_Status
 * @value Window_Time_Status
 * @option Window_VictoryExp
 * @value Window_VictoryExp
 * @option Window_ServantActor
 * @value Window_EmployActorIndex
 * @option Window_Help
 * @value Window_Help
 * @option Window_Gold
 * @value Window_Gold
 * @option Window Window_ChoiceList
 * @value Window Window_ChoiceList
 * @option Window_CommonEventMenu
 * @value Window_CommonEventMenu
 * @option Window_CommonEventMenuPicture
 * @value Window_CommonEventMenuPicture
 * @option Window_MenuCommand
 * @value Window_MenuCommand
 * @option Window_MenuStatus
 * @value Window_MenuStatus
 * @option Window_ItemCategory
 * @value Window_ItemCategory
 * @option Window_ItemList
 * @value Window_ItemList
 * @option Window_ItemInfo
 * @value Window_ItemInfo
 * @option Window_MenuActor
 * @value Window_MenuActor
 * @option Window_StatCompare
 * @value Window_StatCompare
 * @option Window_SkillType
 * @value Window_SkillType
 * @option Window_SkillStatus
 * @value Window_SkillStatus
 * @option Window_SkillList
 * @value Window_SkillList
 * @option Window_EquipRequirement
 * @value Window_EquipRequirement
 * @option Window_EquipStatus
 * @value Window_EquipStatus
 * @option Window_EquipCommand
 * @value Window_EquipCommand
 * @option Window_EquipSlot
 * @value Window_EquipSlot
 * @option Window_EquipItem
 * @value Window_EquipItem
 * @option Window_Status
 * @value Window_Status
 * @option Window_Options
 * @value Window_Options
 * @option Window_SavefileList
 * @value Window_SavefileList
 * @option Window_ShopCommand
 * @value Window_ShopCommand
 * @option Window_ShopBuy
 * @value Window_ShopBuy
 * @option Window_ShopSell
 * @value Window_ShopSell
 * @option Window_ShopNumber
 * @value Window_ShopNumber
 * @option Window_ShopStatus
 * @value Window_ShopStatus
 * @option Window_NameEdit
 * @value Window_NameEdit
 * @option Window_NameInp
 * @value Window_NameInput
 * @option Window_ChoiceList
 * @value Window_ChoiceList
 * @option Window_NumberInput
 * @value Window_NumberInput
 * @option Window_EventItem
 * @value Window_EventItem
 * @option Window_Message
 * @value Window_Message
 * @option Window_ScrollText
 * @value Window_ScrollText
 * @option Window_MapName
 * @value Window_MapName
 * @option Window_BattleLog
 * @value Window_BattleLog
 * @option Window_PartyCommand
 * @value Window_PartyCommand
 * @option Window_ActorCommand
 * @value Window_ActorCommand
 * @option Window_BattleStatus
 * @value Window_BattleStatus
 * @option Window_BattleActor
 * @value Window_BattleActor
 * @option Window_BattleEnemy
 * @value Window_BattleEnemy
 * @option Window_BattleSkill
 * @value Window_BattleSkill
 * @option Window_BattleItem
 * @value Window_BattleItem
 * @option Window_TitleCommand
 * @value Window_TitleCommand
 * @option Window_GameEnd
 * @value Window_GameEnd
 * @option Window_DebugRange
 * @value Window_DebugRange
 * @option Window_DebugEdit
 * @value Window_DebugEdit
 * @option Window_Destination
 * @value Window_Destination
 * @option Window_DestinationMenu
 * @value Window_DestinationMenu
 * @option Window_Chronus
 * @value Window_Chronus
 * @option Window_Gacha
 * @value Window_Gacha
 * @option Window_GachaCommand
 * @value Window_GachaCommand
 * @option Window_GachaGetCommand
 * @value Window_GachaGetCommand
 * @option Window_GachaGet
 * @value Window_GachaGet
 * @option Window_Cost
 * @value Window_Cost
 * @option Window_NovelChoiceList
 * @value Window_NovelChoiceList
 * @option Window_NovelMessage
 * @value Window_NovelMessage
 * @option Window_NovelTitleCommand
 * @value Window_NovelTitleCommand
 * @option Window_NovelNumberInput
 * @value Window_NovelNumberInput
 * @option Window_PauseMenu
 * @value Window_PauseMenu
 * @option Window_PasswordInput
 * @value Window_PasswordInput
 * @option Window_PasswordEdit
 * @value Window_PasswordEdit
 * @option Window_GlossaryCategory
 * @value Window_GlossaryCategory
 * @option Window_GlossaryList
 * @value Window_GlossaryList
 * @option Window_GlossaryConfirm
 * @value Window_GlossaryConfirm
 * @option Window_GlossaryComplete
 * @value Window_GlossaryComplete
 * @option Window_Glossary
 * @value Window_Glossary
 * @option Window_AudioCategory
 * @value Window_AudioCategory
 * @option Window_AudioList
 * @value Window_AudioList
 * @option Window_AudioSetting
 * @value Window_AudioSetting
 * @option Window_NumberInput
 * @value Window_NumberInput
 * @option Window_NumberEdit
 * @value Window_NumberEdit
 *
 * @param ImageFile
 * @desc The file name of the image to be replaced (selected from img / image). If you specify that it is blank, only the frame will be hidden.
 * @default
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param OffsetX
 * @desc OffsetX
 * @default 0
 * @type number
 * @min -2000
 * @max 2000
 *
 * @param OffsetY
 * @desc OffsetY
 * @default 0
 * @type number
 * @min -2000
 * @max 2000
 *
 * @param ScaleX
 * @desc ScaleX。
 * @default 100
 * @type number
 * @min -2000
 * @max 2000
 *
 * @param ScaleY
 * @desc ScaleY
 * @default 100
 * @type number
 * @min -2000
 * @max 2000
 *
 * @param WindowShow
 * @desc WindowShow
 * @default false
 * @type boolean
 *
 * @param SwitchId
 * @desc The window is replaced only when the specified switch is ON.
 * @default 0
 * @type switch
 */

 
(function(){
    'use strict';
   

	
    var pluginName = "PLK_Window";


	//window name <<<<<<<<<<<<<<<<<<<<<<<
	 
	var params = PluginManager.parameters(pluginName);
	var choice = String(params['Window choice1-15'] || 5);
	
	var params = PluginManager.parameters(pluginName);
	var color1 = String(params['window name1 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color2 = String(params['window name2 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color3 = String(params['window name3 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color4 = String(params['window name4 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color5 = String(params['window name5 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color6 = String(params['window name6 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color7 = String(params['window name7 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color8 = String(params['window name8 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color9 = String(params['window name9 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color10 = String(params['window name10 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color11 = String(params['window name11 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color12 = String(params['window name12 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color13 = String(params['window name13 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color14 = String(params['window name14 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color15 = String(params['window name15 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color16 = String(params['window name16 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color17 = String(params['window name17 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color18 = String(params['window name18 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color19 = String(params['window name19 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color20 = String(params['window name20 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color21 = String(params['window name21 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color22 = String(params['window name22 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color23 = String(params['window name23 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color24 = String(params['window name24 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color25 = String(params['window name25 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color26 = String(params['window name26 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color27 = String(params['window name27 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color28 = String(params['window name28 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color29 = String(params['window name29 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color30 = String(params['window name30 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color31 = String(params['window name31 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color32 = String(params['window name32 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color33 = String(params['window name33 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color34 = String(params['window name34 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color35 = String(params['window name35 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color36 = String(params['window name36 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color37 = String(params['window name37 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color38 = String(params['window name38 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color39 = String(params['window name39 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color40 = String(params['window name40 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color41 = String(params['window name41 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color42 = String(params['window name42 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color43 = String(params['window name43 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color44 = String(params['window name44 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color45 = String(params['window name45 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color46 = String(params['window name46 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color47 = String(params['window name47 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color48 = String(params['window name48 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color49 = String(params['window name49 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color50 = String(params['window name50 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color51 = String(params['window name51 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color52 = String(params['window name52 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color53 = String(params['window name53 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color54 = String(params['window name54 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color55 = String(params['window name55 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color56 = String(params['window name56 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color57 = String(params['window name57 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color58 = String(params['window name58 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color59 = String(params['window name59 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color60 = String(params['window name60 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color61 = String(params['window name61 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color62 = String(params['window name62 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color63 = String(params['window name63 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color64 = String(params['window name64 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color65 = String(params['window name65 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color66 = String(params['window name66 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color67 = String(params['window name67 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color68 = String(params['window name68 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color69 = String(params['window name69 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color70 = String(params['window name70 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color71 = String(params['window name71 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color72 = String(params['window name72 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color73 = String(params['window name73 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color74 = String(params['window name74 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color75 = String(params['window name75 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color76 = String(params['window name76 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color77 = String(params['window name77 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color78 = String(params['window name78 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color79 = String(params['window name79 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color80 = String(params['window name80 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color81 = String(params['window name81 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color82 = String(params['window name82 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color83 = String(params['window name83 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color84 = String(params['window name84 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color85 = String(params['window name85 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color86 = String(params['window name86 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color87 = String(params['window name87 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color88 = String(params['window name88 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color89 = String(params['window name89 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color90 = String(params['window name90 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color91 = String(params['window name91 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color92 = String(params['window name92 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color93 = String(params['window name93 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color94 = String(params['window name94 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color95 = String(params['window name95 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color96 = String(params['window name96 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color97 = String(params['window name97 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color98 = String(params['window name98 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color99 = String(params['window name99 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color100 = String(params['window name100 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color101 = String(params['window name101 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color102 = String(params['window name102 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color103 = String(params['window name103 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color104 = String(params['window name104 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color105 = String(params['window name105 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color106 = String(params['window name106 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color107 = String(params['window name107 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color108 = String(params['window name108 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color109 = String(params['window name109 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color110 = String(params['window name110 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color111 = String(params['window name111 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color112 = String(params['window name112 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color113 = String(params['window name113 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color114 = String(params['window name114 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color115 = String(params['window name115 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color116 = String(params['window name116 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color117 = String(params['window name117 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color118 = String(params['window name118 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color119 = String(params['window name119 color'] || 0);
	var params = PluginManager.parameters(pluginName);
	var color120 = String(params['window name120 color'] || 0);
	
	var params = PluginManager.parameters(pluginName);
	var name1 = String(params['window name1']);
	var params = PluginManager.parameters(pluginName);
	var name2 = String(params['window name2']);
	var params = PluginManager.parameters(pluginName);
	var name3 = String(params['window name3']);
	var params = PluginManager.parameters(pluginName);
	var name4 = String(params['window name4']);
	var params = PluginManager.parameters(pluginName);
	var name5 = String(params['window name5']);
	var params = PluginManager.parameters(pluginName);
	var name6 = String(params['window name6']);
	var params = PluginManager.parameters(pluginName);
	var name7 = String(params['window name7']);
	var params = PluginManager.parameters(pluginName);
	var name8 = String(params['window name8']);
	var params = PluginManager.parameters(pluginName);
	var name9 = String(params['window name9']);
	var params = PluginManager.parameters(pluginName);
	var name10 = String(params['window name10']);
	var params = PluginManager.parameters(pluginName);
	var name11 = String(params['window name11']);
	var params = PluginManager.parameters(pluginName);
	var name12 = String(params['window name12']);
	var params = PluginManager.parameters(pluginName);
	var name13 = String(params['window name13']);
	var params = PluginManager.parameters(pluginName);
	var name14 = String(params['window name14']);
	var params = PluginManager.parameters(pluginName);
	var name15 = String(params['window name15']);
	var params = PluginManager.parameters(pluginName);
	var name16 = String(params['window name16']);
	var params = PluginManager.parameters(pluginName);
	var name17 = String(params['window name17']);
	var params = PluginManager.parameters(pluginName);
	var name18 = String(params['window name18']);
	var params = PluginManager.parameters(pluginName);
	var name19 = String(params['window name19']);
	var params = PluginManager.parameters(pluginName);
	var name20 = String(params['window name20']);
	var params = PluginManager.parameters(pluginName);
	var name21 = String(params['window name21']);
	var params = PluginManager.parameters(pluginName);
	var name22 = String(params['window name22']);
	var params = PluginManager.parameters(pluginName);
	var name23 = String(params['window name23']);
	var params = PluginManager.parameters(pluginName);
	var name24 = String(params['window name24']);
	var params = PluginManager.parameters(pluginName);
	var name25 = String(params['window name25']);
	var params = PluginManager.parameters(pluginName);
	var name26 = String(params['window name26']);
	var params = PluginManager.parameters(pluginName);
	var name27 = String(params['window name27']);
	var params = PluginManager.parameters(pluginName);
	var name28 = String(params['window name28']);
	var params = PluginManager.parameters(pluginName);
	var name29 = String(params['window name29']);
	var params = PluginManager.parameters(pluginName);
	var name30 = String(params['window name30']);
	var params = PluginManager.parameters(pluginName);
	var name31 = String(params['window name31']);
	var params = PluginManager.parameters(pluginName);
	var name32 = String(params['window name32']);
	var params = PluginManager.parameters(pluginName);
	var name33 = String(params['window name33']);
	var params = PluginManager.parameters(pluginName);
	var name34 = String(params['window name34']);
	var params = PluginManager.parameters(pluginName);
	var name35 = String(params['window name35']);
	var params = PluginManager.parameters(pluginName);
	var name36 = String(params['window name36']);
	var params = PluginManager.parameters(pluginName);
	var name37 = String(params['window name37']);
	var params = PluginManager.parameters(pluginName);
	var name38 = String(params['window name38']);
	var params = PluginManager.parameters(pluginName);
	var name39 = String(params['window name39']);
	var params = PluginManager.parameters(pluginName);
	var name40 = String(params['window name40']);
	
	var params = PluginManager.parameters(pluginName);
	var name41 = String(params['window name41']);
	var params = PluginManager.parameters(pluginName);
	var name42 = String(params['window name42']);
	var params = PluginManager.parameters(pluginName);
	var name43 = String(params['window name43']);
	var params = PluginManager.parameters(pluginName);
	var name44 = String(params['window name44']);
	var params = PluginManager.parameters(pluginName);
	var name45 = String(params['window name45']);
	var params = PluginManager.parameters(pluginName);
	var name46 = String(params['window name46']);
	var params = PluginManager.parameters(pluginName);
	var name47 = String(params['window name47']);
	var params = PluginManager.parameters(pluginName);
	var name48 = String(params['window name48']);
	var params = PluginManager.parameters(pluginName);
	var name49 = String(params['window name49']);
	var params = PluginManager.parameters(pluginName);
	var name50 = String(params['window name50']);
	var params = PluginManager.parameters(pluginName);
	var name51 = String(params['window name51']);
	var params = PluginManager.parameters(pluginName);
	var name52 = String(params['window name52']);
	var params = PluginManager.parameters(pluginName);
	var name53 = String(params['window name53']);
	var params = PluginManager.parameters(pluginName);
	var name54 = String(params['window name54']);
	var params = PluginManager.parameters(pluginName);
	var name55 = String(params['window name55']);
	var params = PluginManager.parameters(pluginName);
	var name56 = String(params['window name56']);
	var params = PluginManager.parameters(pluginName);
	var name57 = String(params['window name57']);
	var params = PluginManager.parameters(pluginName);
	var name58 = String(params['window name58']);
	var params = PluginManager.parameters(pluginName);
	var name59 = String(params['window name59']);
	var params = PluginManager.parameters(pluginName);
	var name60 = String(params['window name60']);
	var params = PluginManager.parameters(pluginName);
	var name61 = String(params['window name61']);
	var params = PluginManager.parameters(pluginName);
	var name62 = String(params['window name62']);
	var params = PluginManager.parameters(pluginName);
	var name63 = String(params['window name63']);
	var params = PluginManager.parameters(pluginName);
	var name64 = String(params['window name64']);
	var params = PluginManager.parameters(pluginName);
	var name65 = String(params['window name65']);
	var params = PluginManager.parameters(pluginName);
	var name66 = String(params['window name66']);
	var params = PluginManager.parameters(pluginName);
	var name67 = String(params['window name67']);
	var params = PluginManager.parameters(pluginName);
	var name68 = String(params['window name68']);
	var params = PluginManager.parameters(pluginName);
	var name69 = String(params['window name69']);
	var params = PluginManager.parameters(pluginName);
	var name70 = String(params['window name70']);
	var params = PluginManager.parameters(pluginName);
	var name71 = String(params['window name71']);
	var params = PluginManager.parameters(pluginName);
	var name72 = String(params['window name72']);
	var params = PluginManager.parameters(pluginName);
	var name73 = String(params['window name73']);
	var params = PluginManager.parameters(pluginName);
	var name74 = String(params['window name74']);
	var params = PluginManager.parameters(pluginName);
	var name75 = String(params['window name75']);
	var params = PluginManager.parameters(pluginName);
	var name76 = String(params['window name76']);
	var params = PluginManager.parameters(pluginName);
	var name77 = String(params['window name77']);
	var params = PluginManager.parameters(pluginName);
	var name78 = String(params['window name78']);
	var params = PluginManager.parameters(pluginName);
	var name79 = String(params['window name79']);
	var params = PluginManager.parameters(pluginName);
	var name80 = String(params['window name80']);
	
	var params = PluginManager.parameters(pluginName);
	var name81 = String(params['window name81']);
	var params = PluginManager.parameters(pluginName);
	var name82 = String(params['window name82']);
	var params = PluginManager.parameters(pluginName);
	var name83 = String(params['window name83']);
	var params = PluginManager.parameters(pluginName);
	var name84 = String(params['window name84']);
	var params = PluginManager.parameters(pluginName);
	var name85 = String(params['window name85']);
	var params = PluginManager.parameters(pluginName);
	var name86 = String(params['window name86']);
	var params = PluginManager.parameters(pluginName);
	var name87 = String(params['window name87']);
	var params = PluginManager.parameters(pluginName);
	var name88 = String(params['window name88']);
	var params = PluginManager.parameters(pluginName);
	var name89 = String(params['window name89']);
	var params = PluginManager.parameters(pluginName);
	var name90 = String(params['window name90']);
	var params = PluginManager.parameters(pluginName);
	var name91 = String(params['window name91']);
	var params = PluginManager.parameters(pluginName);
	var name92 = String(params['window name92']);
	var params = PluginManager.parameters(pluginName);
	var name93 = String(params['window name93']);
	var params = PluginManager.parameters(pluginName);
	var name94 = String(params['window name94']);
	var params = PluginManager.parameters(pluginName);
	var name95 = String(params['window name95']);
	var params = PluginManager.parameters(pluginName);
	var name96 = String(params['window name96']);
	var params = PluginManager.parameters(pluginName);
	var name97 = String(params['window name97']);
	var params = PluginManager.parameters(pluginName);
	var name98 = String(params['window name98']);
	var params = PluginManager.parameters(pluginName);
	var name99 = String(params['window name99']);
	var params = PluginManager.parameters(pluginName);
	var name100 = String(params['window name100']);
	var params = PluginManager.parameters(pluginName);
	var name101 = String(params['window name101']);
	var params = PluginManager.parameters(pluginName);
	var name102 = String(params['window name102']);
	var params = PluginManager.parameters(pluginName);
	var name103 = String(params['window name103']);
	var params = PluginManager.parameters(pluginName);
	var name104 = String(params['window name104']);
	var params = PluginManager.parameters(pluginName);
	var name105 = String(params['window name105']);
	var params = PluginManager.parameters(pluginName);
	var name106 = String(params['window name106']);
	var params = PluginManager.parameters(pluginName);
	var name107 = String(params['window name107']);
	var params = PluginManager.parameters(pluginName);
	var name108 = String(params['window name108']);
	var params = PluginManager.parameters(pluginName);
	var name109 = String(params['window name109']);
	var params = PluginManager.parameters(pluginName);
	var name110 = String(params['window name110']);
	var params = PluginManager.parameters(pluginName);
	var name111 = String(params['window name111']);
	var params = PluginManager.parameters(pluginName);
	var name112 = String(params['window name112']);
	var params = PluginManager.parameters(pluginName);
	var name113 = String(params['window name113']);
	var params = PluginManager.parameters(pluginName);
	var name114 = String(params['window name114']);
	var params = PluginManager.parameters(pluginName);
	var name115 = String(params['window name115']);
	var params = PluginManager.parameters(pluginName);
	var name116 = String(params['window name116']);
	var params = PluginManager.parameters(pluginName);
	var name117 = String(params['window name117']);
	var params = PluginManager.parameters(pluginName);
	var name118 = String(params['window name118']);
	var params = PluginManager.parameters(pluginName);
	var name119 = String(params['window name119']);
	var params = PluginManager.parameters(pluginName);
	var name120 = String(params['window name120']);
	//page1-15 <<<<<<<<<<<<<<<<<<<<<<<
	var params = PluginManager.parameters(pluginName);
	var windowP1X = Number(params['page1 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP1Y = Number(params['page1 Y'] || 300);
	var params = PluginManager.parameters(pluginName);
	var windowP2X = Number(params['page2 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP2Y = Number(params['page2 Y'] || 300);
	var params = PluginManager.parameters(pluginName);
	var windowP3X = Number(params['page3 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP3Y = Number(params['page3 Y'] || 300);
	var params = PluginManager.parameters(pluginName);
	var windowP4X = Number(params['page4 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP4Y = Number(params['page4 Y'] || 300);
	var params = PluginManager.parameters(pluginName);
	var windowP5X = Number(params['page5 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP5Y = Number(params['page5 Y'] || 300);
	
	var params = PluginManager.parameters(pluginName);
	var windowP6X = Number(params['page6 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP6Y = Number(params['page6 Y'] || 300);
	var params = PluginManager.parameters(pluginName);
	var windowP7X = Number(params['page7 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP7Y = Number(params['page7 Y'] || 300);
	var params = PluginManager.parameters(pluginName);
	var windowP8X = Number(params['page8 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP8Y = Number(params['page8 Y'] || 300);
	var params = PluginManager.parameters(pluginName);
	var windowP9X = Number(params['page9 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP9Y = Number(params['page9 Y'] || 300);
	var params = PluginManager.parameters(pluginName);
	var windowP10X = Number(params['page10 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP10Y = Number(params['page10 Y'] || 300);
	
	var params = PluginManager.parameters(pluginName);
	var windowP11X = Number(params['page11 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP11Y = Number(params['page11 Y'] || 300);
	var params = PluginManager.parameters(pluginName);
	var windowP12X = Number(params['page12 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP12Y = Number(params['page12 Y'] || 300);
	var params = PluginManager.parameters(pluginName);
	var windowP13X = Number(params['page13 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP13Y = Number(params['page13 Y'] || 300);
	var params = PluginManager.parameters(pluginName);
	var windowP14X = Number(params['page14 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP14Y = Number(params['page14 Y'] || 300);
	var params = PluginManager.parameters(pluginName);
	var windowP15X = Number(params['page15 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP15Y = Number(params['page15 Y'] || 300);
	//page EX 1-15 <<<<<<<<<<<<<<<<<<<<<<<
	var params = PluginManager.parameters(pluginName);
	var windowP1EX = Number(params['pageEX1 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP1EY = Number(params['pageEX1 Y'] || 400);
	var params = PluginManager.parameters(pluginName);
	var windowP2EX = Number(params['pageEX2 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP2EY = Number(params['pageEX2 Y'] || 400);
	var params = PluginManager.parameters(pluginName);
	var windowP3EX = Number(params['pageEX3 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP3EY = Number(params['pageEX3 Y'] || 400);
	var params = PluginManager.parameters(pluginName);
	var windowP4EX = Number(params['pageEX4 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP4EY = Number(params['pageEX4 Y'] || 400);
	var params = PluginManager.parameters(pluginName);
	var windowP5EX = Number(params['pageEX5 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP5EY = Number(params['pageEX5 Y'] || 400);
	
	var params = PluginManager.parameters(pluginName);
	var windowP6EX = Number(params['pageEX6 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP6EY = Number(params['pageEX6 Y'] || 400);
	var params = PluginManager.parameters(pluginName);
	var windowP7EX = Number(params['pageEX7 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP7EY = Number(params['pageEX7 Y'] || 400);
	var params = PluginManager.parameters(pluginName);
	var windowP8EX = Number(params['pageEX8 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP8EY = Number(params['pageEX8 Y'] || 400);
	var params = PluginManager.parameters(pluginName);
	var windowP9EX = Number(params['pageEX9 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP9EY = Number(params['pageEX9 Y'] || 400);
	var params = PluginManager.parameters(pluginName);
	var windowP10EX = Number(params['pageEX10 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP10EY = Number(params['pageEX10 Y'] || 400);
	
	var params = PluginManager.parameters(pluginName);
	var windowP11EX = Number(params['pageEX11 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP11EY = Number(params['pageEX11 Y'] || 400);
	var params = PluginManager.parameters(pluginName);
	var windowP12EX = Number(params['pageEX12 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP12EY = Number(params['pageEX12 Y'] || 400);
	var params = PluginManager.parameters(pluginName);
	var windowP13EX = Number(params['pageEX13 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP13EY = Number(params['pageEX13 Y'] || 400);
	var params = PluginManager.parameters(pluginName);
	var windowP14EX = Number(params['pageEX14 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP14EY = Number(params['pageEX14 Y'] || 400);
	var params = PluginManager.parameters(pluginName);
	var windowP15EX = Number(params['pageEX15 X'] || 200);
	var params = PluginManager.parameters(pluginName);
	var windowP15EY = Number(params['pageEX15 Y'] || 400);
	
	var params = PluginManager.parameters(pluginName);
	var WindowSL1 = String(params['Window choice'] || true);
	
	var params = PluginManager.parameters(pluginName);
	var Windowselec = String(params['Window selec'] || false);	
	
	var params = PluginManager.parameters(pluginName);
	var Window1OF = String(params['Window1 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window2OF = String(params['Window2 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window3OF = String(params['Window3 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window4OF = String(params['Window4 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window5OF = String(params['Window5 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window6OF = String(params['Window6 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window7OF = String(params['Window7 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window8OF = String(params['Window8 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window9OF = String(params['Window9 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window10OF = String(params['Window10 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window11OF = String(params['Window11 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window12OF = String(params['Window12 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window13OF = String(params['Window13 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window14OF = String(params['Window14 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window15OF = String(params['Window15 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window16OF = String(params['Window16 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window17OF = String(params['Window17 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window18OF = String(params['Window18 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window19OF = String(params['Window19 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window20OF = String(params['Window20 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window21OF = String(params['Window21 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window22OF = String(params['Window22 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window23OF = String(params['Window23 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window24OF = String(params['Window24 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window25OF = String(params['Window25 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window26OF = String(params['Window26 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window27OF = String(params['Window27 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window28OF = String(params['Window28 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window29OF = String(params['Window29 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window30OF = String(params['Window30 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window31OF = String(params['Window31 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window32OF = String(params['Window32 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window33OF = String(params['Window33 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window34OF = String(params['Window34 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window35OF = String(params['Window35 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window36OF = String(params['Window36 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window37OF = String(params['Window37 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window38OF = String(params['Window38 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window39OF = String(params['Window39 ON-OOF'] );

	var params = PluginManager.parameters(pluginName);
	var Window40OF = String(params['Window40 ON-OOF'] );	
	
	
	var params = PluginManager.parameters(pluginName);
	var Window41OF = String(params['Window41 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window42OF = String(params['Window42 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window43OF = String(params['Window43 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window44OF = String(params['Window44 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window45OF = String(params['Window45 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window46OF = String(params['Window46 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window47OF = String(params['Window47 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window48OF = String(params['Window48 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window49OF = String(params['Window49 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window50OF = String(params['Window50 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window51OF = String(params['Window51 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window52OF = String(params['Window52 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window53OF = String(params['Window53 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window54OF = String(params['Window54 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window55OF = String(params['Window55 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window56OF = String(params['Window56 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window57OF = String(params['Window57 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window58OF = String(params['Window58 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window59OF = String(params['Window59 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window60OF = String(params['Window60 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window61OF = String(params['Window61 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window62OF = String(params['Window62 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window63OF = String(params['Window63 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window64OF = String(params['Window64 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window65OF = String(params['Window65 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window66OF = String(params['Window66 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window67OF = String(params['Window67 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window68OF = String(params['Window68 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window69OF = String(params['Window69 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window70OF = String(params['Window70 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window71OF = String(params['Window71 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window72OF = String(params['Window72 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window73OF = String(params['Window73 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window74OF = String(params['Window74 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window75OF = String(params['Window75 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window76OF = String(params['Window76 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window77OF = String(params['Window77 ON-OOF'] );
	
	var params = PluginManager.parameters(pluginName);
	var Window78OF = String(params['Window78 ON-OOF'] );
	var params = PluginManager.parameters(pluginName);
	var Window79OF = String(params['Window79 ON-OOF'] );

	var params = PluginManager.parameters(pluginName);
	var Window80OF = String(params['Window80 ON-OOF'] );	
	var params = PluginManager.parameters(pluginName);
	var Window81OF = String(params['Window81 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window82OF = String(params['Window82 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window83OF = String(params['Window83 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window84OF = String(params['Window84 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window85OF = String(params['Window85 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window86OF = String(params['Window86 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window87OF = String(params['Window87 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window88OF = String(params['Window88 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window89OF = String(params['Window89 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window90OF = String(params['Window90 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window91OF = String(params['Window91 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window92OF = String(params['Window92 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window93OF = String(params['Window93 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window94OF = String(params['Window94 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window95OF = String(params['Window95 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window96OF = String(params['Window96 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window97OF = String(params['Window97 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window98OF = String(params['Window98 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window99OF = String(params['Window99 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window100OF = String(params['Window100 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window101OF = String(params['Window101 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window102OF = String(params['Window102 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window103OF = String(params['Window103 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window104OF = String(params['Window104 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window105OF = String(params['Window105 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window106OF = String(params['Window106 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window107OF = String(params['Window107 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window108OF = String(params['Window108 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window109OF = String(params['Window109 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window110OF = String(params['Window110 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window111OF = String(params['Window111 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window112OF = String(params['Window112 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window113OF = String(params['Window113 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window114OF = String(params['Window114 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window115OF = String(params['Window115 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window116OF = String(params['Window116 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window117OF = String(params['Window117 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window118OF = String(params['Window118 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window119OF = String(params['Window119 ON-OOF'] );	
		var params = PluginManager.parameters(pluginName);
	var Window120OF = String(params['Window120 ON-OOF'] );	
	
	var params = PluginManager.parameters(pluginName);
	var window1X = Number(params['window1 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window1Y = Number(params['window1 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window1W = Number(params['window1 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window1H = Number(params['window1 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window2X = Number(params['window2 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window2Y = Number(params['window2 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window2W = Number(params['window2 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window2H = Number(params['window2 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window3X = Number(params['window3 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window3Y = Number(params['window3 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window3W = Number(params['window3 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window3H = Number(params['window3 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window4X = Number(params['window4 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window4Y = Number(params['window4 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window4W = Number(params['window4 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window4H = Number(params['window4 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window5X = Number(params['window5 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window5Y = Number(params['window5 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window5W = Number(params['window5 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window5H = Number(params['window5 H'] || 300);
	
	var params = PluginManager.parameters(pluginName);
	var window6X = Number(params['window6 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window6Y = Number(params['window6 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window6W = Number(params['window6 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window6H = Number(params['window6 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window7X = Number(params['window7 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window7Y = Number(params['window7 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window7W = Number(params['window7 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window7H = Number(params['window7 H'] || 300);
	
	var params = PluginManager.parameters(pluginName);
	var window8X = Number(params['window8 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window8Y = Number(params['window8 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window8W = Number(params['window8 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window8H = Number(params['window8 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window9X = Number(params['window9 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window9Y = Number(params['window9 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window9W = Number(params['window9 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window9H = Number(params['window9 H'] || 300);
	
	//page2 <<<<<<<<<<<<<<<<<<<<<<<
	
	var params = PluginManager.parameters(pluginName);
	var window10X = Number(params['window10 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window10Y = Number(params['window10 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window10W = Number(params['window10 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window10H = Number(params['window10 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window11X = Number(params['window11 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window11Y = Number(params['window11 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window11W = Number(params['window11 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window11H = Number(params['window11 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window12X = Number(params['window12 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window12Y = Number(params['window12 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window12W = Number(params['window12 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window12H = Number(params['window12 H'] || 300);
	
	var params = PluginManager.parameters(pluginName);
	var window13X = Number(params['window13 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window13Y = Number(params['window13 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window13W = Number(params['window13 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window13H = Number(params['window13 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window14X = Number(params['window14 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window14Y = Number(params['window14 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window14W = Number(params['window14 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window14H = Number(params['window14 H'] || 300);
	
	var params = PluginManager.parameters(pluginName);
	var window15X = Number(params['window15 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window15Y = Number(params['window15 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window15W = Number(params['window15 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window15H = Number(params['window15 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window16X = Number(params['window16 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window16Y = Number(params['window16 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window16W = Number(params['window16 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window16H = Number(params['window16 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window17X = Number(params['window17 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window17Y = Number(params['window17 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window17W = Number(params['window17 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window17H = Number(params['window17 H'] || 300);
	
	var params = PluginManager.parameters(pluginName);
	var window18X = Number(params['window18 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window18Y = Number(params['window18 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window18W = Number(params['window18 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window18H = Number(params['window18 H'] || 200);
	
	//page3 <<<<<<<<<<<<<<<<<<<<<<<
	
	var params = PluginManager.parameters(pluginName);
	var window19X = Number(params['window19 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window19Y = Number(params['window19 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window19W = Number(params['window19 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window19H = Number(params['window19 H'] || 300);
	
	var params = PluginManager.parameters(pluginName);
	var window20X = Number(params['window20 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window20Y = Number(params['window20 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window20W = Number(params['window20 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window20H = Number(params['window20 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window21X = Number(params['window21 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window21Y = Number(params['window21 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window21W = Number(params['window21 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window21H = Number(params['window21 H'] || 300);
	
	var params = PluginManager.parameters(pluginName);
	var window22X = Number(params['window22 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window22Y = Number(params['window22 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window22W = Number(params['window22 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window22H = Number(params['window22 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window23X = Number(params['window23 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window23Y = Number(params['window23 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window23W = Number(params['window23 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window23H = Number(params['window23 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window24X = Number(params['window24 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window24Y = Number(params['window24 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window24W = Number(params['window24 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window24H = Number(params['window24 H'] || 300);
	
	var params = PluginManager.parameters(pluginName);
	var window25X = Number(params['window25 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window25Y = Number(params['window25 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window25W = Number(params['window25 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window25H = Number(params['window25 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window26X = Number(params['window26 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window26Y = Number(params['window26 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window26W = Number(params['window26 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window26H = Number(params['window26 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window27X = Number(params['window27 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window27Y = Number(params['window27 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window27W = Number(params['window27 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window27H = Number(params['window27 H'] || 200);
	
	//page4 <<<<<<<<<<<<<<<<<<<<<<<
		
	var params = PluginManager.parameters(pluginName);
	var window28X = Number(params['window28 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window28Y = Number(params['window28 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window28W = Number(params['window28 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window28H = Number(params['window28 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window29X = Number(params['window29 X'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window29Y = Number(params['window29 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window29W = Number(params['window29 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window29H = Number(params['window29 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window30X = Number(params['window30 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window30Y = Number(params['window30 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window30W = Number(params['window30 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window30H = Number(params['window30 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window31X = Number(params['window31 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window31Y = Number(params['window31 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window31W = Number(params['window31 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window31H = Number(params['window31 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window32X = Number(params['window32 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window32Y = Number(params['window32 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window32W = Number(params['window32 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window32H = Number(params['window32 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window33X = Number(params['window33 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window33Y = Number(params['window33 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window33W = Number(params['window33 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window33H = Number(params['window33 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window34X = Number(params['window34 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window34Y = Number(params['window34 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window34W = Number(params['window34 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window34H = Number(params['window34 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window35X = Number(params['window35 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window35Y = Number(params['window35 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window35W = Number(params['window35 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window35H = Number(params['window35 H'] || 200);
	
	//page5 <<<<<<<<<<<<<<<<<<<<<<<
	
	var params = PluginManager.parameters(pluginName);
	var window36X = Number(params['window36 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window36Y = Number(params['window36 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window36W = Number(params['window36 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window36H = Number(params['window36 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window37X = Number(params['window37 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window37Y = Number(params['window37 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window37W = Number(params['window37 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window37H = Number(params['window37 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window38X = Number(params['window38 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window38Y = Number(params['window38 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window38W = Number(params['window38 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window38H = Number(params['window38 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window39X = Number(params['window39 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window39Y = Number(params['window39 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window39W = Number(params['window39 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window39H = Number(params['window39 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window40X = Number(params['window40 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window40Y = Number(params['window40 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window40W = Number(params['window40 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window40H = Number(params['window40 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window41X = Number(params['window41 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window41Y = Number(params['window41 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window41W = Number(params['window41 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window41H = Number(params['window41 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window42X = Number(params['window42 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window42Y = Number(params['window42 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window42W = Number(params['window42 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window42H = Number(params['window42 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window43X = Number(params['window43 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window43Y = Number(params['window43 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window43W = Number(params['window43 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window43H = Number(params['window43 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window44X = Number(params['window44 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window44Y = Number(params['window44 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window44W = Number(params['window44 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window44H = Number(params['window44 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window45X = Number(params['window45 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window45Y = Number(params['window45 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window45W = Number(params['window45 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window45H = Number(params['window45 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window46X = Number(params['window46 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window46Y = Number(params['window46 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window46W = Number(params['window46 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window46H = Number(params['window46 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window47X = Number(params['window47 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window47Y = Number(params['window47 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window47W = Number(params['window47 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window47H = Number(params['window47 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window48X = Number(params['window48 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window48Y = Number(params['window48 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window48W = Number(params['window48 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window48H = Number(params['window48 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window49X = Number(params['window49 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window49Y = Number(params['window49 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window49W = Number(params['window49 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window49H = Number(params['window49 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window50X = Number(params['window50 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window50Y = Number(params['window50 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window50W = Number(params['window50 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window50H = Number(params['window50 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window51X = Number(params['window51 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window51Y = Number(params['window51 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window51W = Number(params['window51 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window51H = Number(params['window51 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window52X = Number(params['window52 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window52Y = Number(params['window52 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window52W = Number(params['window52 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window52H = Number(params['window52 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window53X = Number(params['window53 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window53Y = Number(params['window53 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window53W = Number(params['window53 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window53H = Number(params['window53 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window54X = Number(params['window54 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window54Y = Number(params['window54 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window54W = Number(params['window54 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window54H = Number(params['window54 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window55X = Number(params['window55 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window55Y = Number(params['window55 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window55W = Number(params['window55 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window55H = Number(params['window55 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window56X = Number(params['window56 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window56Y = Number(params['window56 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window56W = Number(params['window56 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window56H = Number(params['window56 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window57X = Number(params['window57 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window57Y = Number(params['window57 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window57W = Number(params['window57 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window57H = Number(params['window57 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window58X = Number(params['window58 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window58Y = Number(params['window58 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window58W = Number(params['window58 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window58H = Number(params['window58 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window59X = Number(params['window59 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window59Y = Number(params['window59 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window59W = Number(params['window52 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window59H = Number(params['window59 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window60X = Number(params['window60 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window60Y = Number(params['window60 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window60W = Number(params['window60 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window60H = Number(params['window60 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window61X = Number(params['window61 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window61Y = Number(params['window61 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window61W = Number(params['window61 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window61H = Number(params['window61 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window62X = Number(params['window62 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window62Y = Number(params['window62 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window62W = Number(params['window62 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window62H = Number(params['window62 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window63X = Number(params['window63 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window63Y = Number(params['window63 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window63W = Number(params['window63 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window63H = Number(params['window63 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window64X = Number(params['window64 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window64Y = Number(params['window64 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window64W = Number(params['window64 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window64H = Number(params['window64 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window65X = Number(params['window65 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window65Y = Number(params['window65 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window65W = Number(params['window65 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window65H = Number(params['window65 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window66X = Number(params['window66 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window66Y = Number(params['window66 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window66W = Number(params['window66 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window66H = Number(params['window66 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window67X = Number(params['window67 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window67Y = Number(params['window67 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window67W = Number(params['window67 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window67H = Number(params['window67 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window68X = Number(params['window68 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window68Y = Number(params['window68 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window68W = Number(params['window68 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window68H = Number(params['window68 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window69X = Number(params['window69 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window69Y = Number(params['window69 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window69W = Number(params['window69 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window69H = Number(params['window69 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window70X = Number(params['window70 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window70Y = Number(params['window70 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window70W = Number(params['window70 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window70H = Number(params['window70 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window71X = Number(params['window71 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window71Y = Number(params['window71 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window71W = Number(params['window71 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window71H = Number(params['window71 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window72X = Number(params['window72 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window72Y = Number(params['window72 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window72W = Number(params['window72 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window72H = Number(params['window72 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window73X = Number(params['window73 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window73Y = Number(params['window73 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window73W = Number(params['window73 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window73H = Number(params['window73 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window74X = Number(params['window74 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window74Y = Number(params['window74 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window74W = Number(params['window74 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window74H = Number(params['window74 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window75X = Number(params['window75 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window75Y = Number(params['window75 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window75W = Number(params['window75 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window75H = Number(params['window75 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window76X = Number(params['window76 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window76Y = Number(params['window76 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window76W = Number(params['window76 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window76H = Number(params['window76 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window77X = Number(params['window77 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window77Y = Number(params['window77 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window77W = Number(params['window77 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window77H = Number(params['window77 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window78X = Number(params['window78 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window78Y = Number(params['window78 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window78W = Number(params['window78 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window78H = Number(params['window78 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window79X = Number(params['window79 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window79Y = Number(params['window79 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window79W = Number(params['window79 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window79H = Number(params['window79 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window80X = Number(params['window80 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window80Y = Number(params['window80 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window80W = Number(params['window80 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window80H = Number(params['window80 H'] || 200);
	
	var params = PluginManager.parameters(pluginName);
	var window81X = Number(params['window81 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window81Y = Number(params['window81 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window81W = Number(params['window81 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window81H = Number(params['window81 H'] || 200);

	var params = PluginManager.parameters(pluginName);
	var window82X = Number(params['window82 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window82Y = Number(params['window82 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window82W = Number(params['window82 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window82H = Number(params['window82 H'] || 200);

	var params = PluginManager.parameters(pluginName);
	var window83X = Number(params['window83 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window83Y = Number(params['window83 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window83W = Number(params['window83 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window83H = Number(params['window83 H'] || 200); 

	var params = PluginManager.parameters(pluginName);
	var window84X = Number(params['window84 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window84Y = Number(params['window84 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window84W = Number(params['window84 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window84H = Number(params['window84 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window85X = Number(params['window85 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window85Y = Number(params['window85 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window85W = Number(params['window85 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window85H = Number(params['window85 H'] || 200);	
	
	var params = PluginManager.parameters(pluginName);
	var window86X = Number(params['window86 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window86Y = Number(params['window86 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window86W = Number(params['window86 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window86H = Number(params['window86 H'] || 200);

	var params = PluginManager.parameters(pluginName);
	var window87X = Number(params['window87 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window87Y = Number(params['window87 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window87W = Number(params['window87 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window87H = Number(params['window87 H'] || 200);

	var params = PluginManager.parameters(pluginName);
	var window88X = Number(params['window88 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window88Y = Number(params['window88 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window88W = Number(params['window88 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window88H = Number(params['window88 H'] || 200);	
	
	var params = PluginManager.parameters(pluginName);
	var window89X = Number(params['window89 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window89Y = Number(params['window89 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window89W = Number(params['window89 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window89H = Number(params['window89 H'] || 200);

	var params = PluginManager.parameters(pluginName);
	var window90X = Number(params['window90 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window90Y = Number(params['window90 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window90W = Number(params['window90 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window90H = Number(params['window90 H'] || 200);

	var params = PluginManager.parameters(pluginName);
	var window91X = Number(params['window91 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window91Y = Number(params['window91 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window91W = Number(params['window91 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window91H = Number(params['window91 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window92X = Number(params['window92 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window92Y = Number(params['window92 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window92W = Number(params['window92 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window92H = Number(params['window92 H'] || 200);

	var params = PluginManager.parameters(pluginName);
	var window93X = Number(params['window93 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window93Y = Number(params['window93 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window93W = Number(params['window93 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window93H = Number(params['window93 H'] || 200);

	var params = PluginManager.parameters(pluginName);
	var window94X = Number(params['window94 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window94Y = Number(params['window94 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window94W = Number(params['window94 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window94H = Number(params['window94 H'] || 200);	
	
	var params = PluginManager.parameters(pluginName);
	var window95X = Number(params['window95 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window95Y = Number(params['window95 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window95W = Number(params['window95 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window95H = Number(params['window95 H'] || 200);

	var params = PluginManager.parameters(pluginName);
	var window96X = Number(params['window96 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window96Y = Number(params['window96 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window96W = Number(params['window96 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window96H = Number(params['window96 H'] || 200);	
	
	var params = PluginManager.parameters(pluginName);
	var window97X = Number(params['window97 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window97Y = Number(params['window97 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window97W = Number(params['window97 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window97H = Number(params['window97 H'] || 200);	
	
	var params = PluginManager.parameters(pluginName);
	var window98X = Number(params['window98 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window98Y = Number(params['window98 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window98W = Number(params['window98 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window98H = Number(params['window98 H'] || 200);	
	
	var params = PluginManager.parameters(pluginName);
	var window99X = Number(params['window99 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window99Y = Number(params['window99 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window99W = Number(params['window99 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window99H = Number(params['window99 H'] || 200);	
	
	var params = PluginManager.parameters(pluginName);
	var window100X = Number(params['window100 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window100Y = Number(params['window100 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window100W = Number(params['window100 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window100H = Number(params['window100 H'] || 200);	
	
	var params = PluginManager.parameters(pluginName);
	var window101X = Number(params['window101 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window101Y = Number(params['window101 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window101W = Number(params['window101 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window101H = Number(params['window101 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window102X = Number(params['window102 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window102Y = Number(params['window102 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window102W = Number(params['window102 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window102H = Number(params['window102 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window103X = Number(params['window103 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window103Y = Number(params['window103 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window103W = Number(params['window103 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window103H = Number(params['window103 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window104X = Number(params['window104 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window104Y = Number(params['window104 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window104W = Number(params['window104 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window104H = Number(params['window104 H'] || 200);		
	
	var params = PluginManager.parameters(pluginName);
	var window105X = Number(params['window105 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window105Y = Number(params['window105 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window105W = Number(params['window105 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window105H = Number(params['window105 H'] || 200);

	var params = PluginManager.parameters(pluginName);
	var window106X = Number(params['window106 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window106Y = Number(params['window106 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window106W = Number(params['window106 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window106H = Number(params['window106 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window107X = Number(params['window107 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window107Y = Number(params['window107 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window107W = Number(params['window107 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window107H = Number(params['window107 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window108X = Number(params['window108 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window108Y = Number(params['window108 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window108W = Number(params['window108 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window108H = Number(params['window108 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window109X = Number(params['window109 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window109Y = Number(params['window109 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window109W = Number(params['window109 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window109H = Number(params['window109 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window110X = Number(params['window110 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window110Y = Number(params['window110 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window110W = Number(params['window110 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window110H = Number(params['window110 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window111X = Number(params['window111 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window111Y = Number(params['window111 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window111W = Number(params['window111 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window111H = Number(params['window111 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window112X = Number(params['window112 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window112Y = Number(params['window112 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window112W = Number(params['window112 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window112H = Number(params['window112 H'] || 200);

	var params = PluginManager.parameters(pluginName);
	var window113X = Number(params['window113 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window113Y = Number(params['window113 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window113W = Number(params['window113 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window113H = Number(params['window113 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window114X = Number(params['window114 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window114Y = Number(params['window114 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window114W = Number(params['window114 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window114H = Number(params['window114 H'] || 200);		
	
	var params = PluginManager.parameters(pluginName);
	var window115X = Number(params['window115 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window115Y = Number(params['window115 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window115W = Number(params['window115 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window115H = Number(params['window115 H'] || 200);		
	
	var params = PluginManager.parameters(pluginName);
	var window116X = Number(params['window116 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window116Y = Number(params['window116 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window116W = Number(params['window116 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window116H = Number(params['window116 H'] || 200);	
	
	var params = PluginManager.parameters(pluginName);
	var window117X = Number(params['window117 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window117Y = Number(params['window117 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window117W = Number(params['window117 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window117H = Number(params['window117 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window118X = Number(params['window118 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window118Y = Number(params['window118 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window118W = Number(params['window118 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window118H = Number(params['window118 H'] || 200);	

	var params = PluginManager.parameters(pluginName);
	var window119X = Number(params['window119 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window119Y = Number(params['window119 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window119W = Number(params['window119 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window119H = Number(params['window119 H'] || 200);

	var params = PluginManager.parameters(pluginName);
	var window120X = Number(params['window120 X'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window120Y = Number(params['window120 Y'] || 0);
	var params = PluginManager.parameters(pluginName);
	var window120W = Number(params['window120 W'] || 300);
	var params = PluginManager.parameters(pluginName);
	var window120H = Number(params['window120 H'] || 200);		
	

	
	var parameters = PluginManager.parameters(pluginName);
    var window1 = String(parameters['window1 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window2 = String(parameters['window2 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window3 = String(parameters['window3 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window4 = String(parameters['window4 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window5 = String(parameters['window5 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window6 = String(parameters['window6 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window7 = String(parameters['window7 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window8 = String(parameters['window8 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window9 = String(parameters['window9 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window10 = String(parameters['window10 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window11 = String(parameters['window11 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window12 = String(parameters['window12 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window13 = String(parameters['window13 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window14 = String(parameters['window14 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window15 = String(parameters['window15 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window16 = String(parameters['window16 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window17 = String(parameters['window17 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window18 = String(parameters['window18 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window19 = String(parameters['window19 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window20 = String(parameters['window20 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window21 = String(parameters['window21 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window22 = String(parameters['window22 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window23 = String(parameters['window23 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window24 = String(parameters['window24 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window25 = String(parameters['window25 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window26 = String(parameters['window26 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window27 = String(parameters['window27 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window28 = String(parameters['window28 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window29 = String(parameters['window29 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window30 = String(parameters['window30 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window31 = String(parameters['window31 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window32 = String(parameters['window32 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window33 = String(parameters['window33 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window34 = String(parameters['window34 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window35 = String(parameters['window35 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window36 = String(parameters['window36 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window37 = String(parameters['window37 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window38 = String(parameters['window38 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window39 = String(parameters['window39 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window40 = String(parameters['window40 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window41 = String(parameters['window41 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window42 = String(parameters['window42 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window43 = String(parameters['window43 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window44 = String(parameters['window44 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window45 = String(parameters['window45 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window46 = String(parameters['window46 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window47 = String(parameters['window47 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window48 = String(parameters['window48 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window49 = String(parameters['window49 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window50 = String(parameters['window50 Commonevent'] || 0);	
	var parameters = PluginManager.parameters(pluginName);
    var window51 = String(parameters['window51 Commonevent'] || 0);	
	var parameters = PluginManager.parameters(pluginName);
    var window52 = String(parameters['window52 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window53 = String(parameters['window53 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window54 = String(parameters['window54 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window55 = String(parameters['window55 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window56 = String(parameters['window56 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window57 = String(parameters['window57 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window58 = String(parameters['window58 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window59 = String(parameters['window59 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window60 = String(parameters['window60 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window61 = String(parameters['window61 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window62 = String(parameters['window62 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window63 = String(parameters['window63 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window64 = String(parameters['window64 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window65 = String(parameters['window65 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window66 = String(parameters['window66 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window67 = String(parameters['window67 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window68 = String(parameters['window68 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window69 = String(parameters['window69 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window70 = String(parameters['window70 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window71 = String(parameters['window71 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window72 = String(parameters['window72 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window73 = String(parameters['window73 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window74 = String(parameters['window74 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window75 = String(parameters['window75 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window76 = String(parameters['window76 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window77 = String(parameters['window77 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window78 = String(parameters['window78 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window79 = String(parameters['window79 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window80 = String(parameters['window80 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window81 = String(parameters['window81 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window82 = String(parameters['window82 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window83 = String(parameters['window83 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window84 = String(parameters['window84 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window85 = String(parameters['window85 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window86 = String(parameters['window86 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window87 = String(parameters['window87 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window88 = String(parameters['window88 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window89 = String(parameters['window89 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window90 = String(parameters['window90 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window91 = String(parameters['window91 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window92 = String(parameters['window92 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window93 = String(parameters['window93 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window94 = String(parameters['window94 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window95 = String(parameters['window95 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window96 = String(parameters['window96 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window97 = String(parameters['window97 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window98 = String(parameters['window98 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window99 = String(parameters['window99 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window100 = String(parameters['window100 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window101 = String(parameters['window101 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window102 = String(parameters['window102 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window103 = String(parameters['window103 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window104 = String(parameters['window104 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window105 = String(parameters['window105 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window106 = String(parameters['window106 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window107 = String(parameters['window107 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window108 = String(parameters['window108 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window109 = String(parameters['window109 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window110 = String(parameters['window110 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window111 = String(parameters['window111 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window112 = String(parameters['window112 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window113 = String(parameters['window113 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window114 = String(parameters['window114 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window115 = String(parameters['window115 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window116 = String(parameters['window116 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window117 = String(parameters['window117 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window118 = String(parameters['window118 Commonevent'] || 0);
	var parameters = PluginManager.parameters(pluginName);
    var window119 = String(parameters['window119 Commonevent'] || 0);	
	var parameters = PluginManager.parameters(pluginName);
    var window120 = String(parameters['window120 Commonevent'] || 0);	
	
	
	var PLKCol1 = Number(params['Window1ToneR'] );
	var PLKCol2 = Number(params['Window1ToneG'] );	
	var PLKCol3 = Number(params['Window1ToneB'] );
    var PLKCol = [PLKCol1,PLKCol2,PLKCol3]
	
	var PLKCol4 = Number(params['Window2ToneR'] );
	var PLKCol5 = Number(params['Window2ToneG'] );	
	var PLKCol6 = Number(params['Window2ToneB'] );
    var PLKCo2 = [PLKCol4,PLKCol5,PLKCol6]
	
	var PLKCol7 = Number(params['Window3ToneR'] );
	var PLKCol8 = Number(params['Window3ToneG'] );	
	var PLKCol9 = Number(params['Window3ToneB'] );
    var PLKCo3 = [PLKCol7,PLKCol8,PLKCol9]

	var PLKCol10 = Number(params['Window4ToneR'] );
	var PLKCol11 = Number(params['Window4ToneG'] );	
	var PLKCol12 = Number(params['Window4ToneB'] );
    var PLKCo4 = [PLKCol10,PLKCol11,PLKCol12]

	var PLKCol13 = Number(params['Window5ToneR'] );
	var PLKCol14 = Number(params['Window5ToneG'] );	
	var PLKCol15 = Number(params['Window5ToneB'] );
    var PLKCo5 = [PLKCol13,PLKCol14,PLKCol15]
	var KeyB = String(params['Button KeyB Open'] || true);
	
    var PLKFN1 = Number(params['window font size1'] );
	var PLKFN2 = Number(params['window font size2'] );
	var PLKFN3 = Number(params['window font size3'] );
	var PLKFN4 = Number(params['window font size4'] );
	var PLKFN5 = Number(params['window font size5'] );
	var PLKFN6 = Number(params['window font size6'] );
	var PLKFN7 = Number(params['window font size7'] );
	var PLKFN8 = Number(params['window font size8'] );
	var PLKFN9 = Number(params['window font size9'] );
	var PLKFN10 = Number(params['window font size10'] );
	var PLKFN11 = Number(params['window font size11'] );
	var PLKFN12 = Number(params['window font size12'] );
	var PLKFN13 = Number(params['window font size13'] );
	var PLKFN14 = Number(params['window font size14'] );
	var PLKFN15 = Number(params['window font size15'] );
	var PLKFN16 = Number(params['window font size16'] );
	var PLKFN17 = Number(params['window font size17'] );
	var PLKFN18 = Number(params['window font size18'] );
	var PLKFN19 = Number(params['window font size19'] );
	var PLKFN20 = Number(params['window font size20'] );
	var PLKFN21 = Number(params['window font size21'] );
	var PLKFN22 = Number(params['window font size22'] );
	var PLKFN23 = Number(params['window font size23'] );
	var PLKFN24 = Number(params['window font size24'] );
	var PLKFN25 = Number(params['window font size25'] );
	var PLKFN26 = Number(params['window font size26'] );
	var PLKFN27 = Number(params['window font size27'] );
	var PLKFN28 = Number(params['window font size28'] );
	var PLKFN29 = Number(params['window font size29'] );
	var PLKFN30 = Number(params['window font size30'] );
	var PLKFN31 = Number(params['window font size31'] );
	var PLKFN32 = Number(params['window font size32'] );
	var PLKFN33 = Number(params['window font size33'] );
	var PLKFN34 = Number(params['window font size34'] );
	var PLKFN35 = Number(params['window font size35'] );
	var PLKFN36 = Number(params['window font size36'] );
	var PLKFN37 = Number(params['window font size37'] );
	var PLKFN38 = Number(params['window font size38'] );
	var PLKFN39 = Number(params['window font size39'] );
	var PLKFN40 = Number(params['window font size40'] );
    var PLKFN41 = Number(params['window font size41'] );
	var PLKFN42 = Number(params['window font size42'] );
	var PLKFN43 = Number(params['window font size43'] );
	var PLKFN44 = Number(params['window font size44'] );
	var PLKFN45 = Number(params['window font size45'] );
	var PLKFN46 = Number(params['window font size46'] );
	var PLKFN47 = Number(params['window font size47'] );
	var PLKFN48 = Number(params['window font size48'] );
	var PLKFN49 = Number(params['window font size49'] );
	var PLKFN50 = Number(params['window font size50'] );
	var PLKFN51 = Number(params['window font size51'] );
	var PLKFN52 = Number(params['window font size52'] );
	var PLKFN53 = Number(params['window font size53'] );
	var PLKFN54 = Number(params['window font size54'] );
	var PLKFN55 = Number(params['window font size55'] );
	var PLKFN56 = Number(params['window font size56'] );
	var PLKFN57 = Number(params['window font size57'] );
	var PLKFN58 = Number(params['window font size58'] );
	var PLKFN59 = Number(params['window font size59'] );
	var PLKFN60 = Number(params['window font size60'] );
	var PLKFN61 = Number(params['window font size61'] );
	var PLKFN62 = Number(params['window font size62'] );
	var PLKFN63 = Number(params['window font size63'] );
	var PLKFN64 = Number(params['window font size64'] );
	var PLKFN65 = Number(params['window font size65'] );
	var PLKFN66 = Number(params['window font size66'] );
	var PLKFN67 = Number(params['window font size67'] );
	var PLKFN68 = Number(params['window font size68'] );
	var PLKFN69 = Number(params['window font size69'] );
	var PLKFN70 = Number(params['window font size70'] );
	var PLKFN71 = Number(params['window font size71'] );
	var PLKFN72 = Number(params['window font size72'] );
	var PLKFN73 = Number(params['window font size73'] );
	var PLKFN74 = Number(params['window font size74'] );
	var PLKFN75 = Number(params['window font size75'] );
	var PLKFN76 = Number(params['window font size76'] );
	var PLKFN77 = Number(params['window font size77'] );
	var PLKFN78 = Number(params['window font size78'] );
	var PLKFN79 = Number(params['window font size79'] );
	var PLKFN80 = Number(params['window font size80'] );
	var PLKFN81 = Number(params['window font size81'] );
	var PLKFN82 = Number(params['window font size82'] );
	var PLKFN83 = Number(params['window font size83'] );
	var PLKFN84 = Number(params['window font size84'] );
	var PLKFN85 = Number(params['window font size85'] );
	var PLKFN86 = Number(params['window font size86'] );
	var PLKFN87 = Number(params['window font size87'] );
	var PLKFN88 = Number(params['window font size88'] );
	var PLKFN89 = Number(params['window font size89'] );
	var PLKFN90 = Number(params['window font size90'] );
	var PLKFN91 = Number(params['window font size91'] );
	var PLKFN92 = Number(params['window font size92'] );
	var PLKFN93 = Number(params['window font size93'] );
	var PLKFN94 = Number(params['window font size94'] );
	var PLKFN95 = Number(params['window font size95'] );
	var PLKFN96 = Number(params['window font size96'] );
	var PLKFN97 = Number(params['window font size97'] );
	var PLKFN98 = Number(params['window font size98'] );
	var PLKFN99 = Number(params['window font size99'] );
	var PLKFN100 = Number(params['window font size100'] );
	var PLKFN101 = Number(params['window font size101'] );
	var PLKFN102 = Number(params['window font size102'] );
	var PLKFN103 = Number(params['window font size103'] );
	var PLKFN104 = Number(params['window font size104'] );
	var PLKFN105 = Number(params['window font size105'] );
	var PLKFN106 = Number(params['window font size106'] );
	var PLKFN107 = Number(params['window font size107'] );
	var PLKFN108 = Number(params['window font size108'] );
	var PLKFN109 = Number(params['window font size109'] );
	var PLKFN110 = Number(params['window font size110'] );
	var PLKFN111 = Number(params['window font size111'] );
	var PLKFN112 = Number(params['window font size112'] );
	var PLKFN113 = Number(params['window font size113'] );
	var PLKFN114 = Number(params['window font size114'] );
	var PLKFN115 = Number(params['window font size115'] );
	var PLKFN116 = Number(params['window font size116'] );
	var PLKFN117 = Number(params['window font size117'] );
	var PLKFN118 = Number(params['window font size118'] );
	var PLKFN119 = Number(params['window font size119'] );
	var PLKFN120 = Number(params['window font size120'] );
	
	var SKWindow1 = String(params['window Skin1'] );
	var SKWindow2 = String(params['window Skin2'] );
	var SKWindow3 = String(params['window Skin3'] );
	var SKWindow4 = String(params['window Skin4'] );
	var SKWindow5 = String(params['window Skin5'] );
	var SKWindow6 = String(params['window Skin6'] );
	var SKWindow7 = String(params['window Skin7'] );
	var SKWindow8 = String(params['window Skin8'] );
	var SKWindow9 = String(params['window Skin9'] );
	var SKWindow10 = String(params['window Skin10'] );
	var SKWindow11 = String(params['window Skin11'] );
	var SKWindow12 = String(params['window Skin12'] );
	var SKWindow13 = String(params['window Skin13'] );
	var SKWindow14 = String(params['window Skin14'] );
	var SKWindow15 = String(params['window Skin15'] );
	var SKWindow16 = String(params['window Skin16'] );
	var SKWindow17 = String(params['window Skin17'] );
	var SKWindow18 = String(params['window Skin18'] );
	var SKWindow19 = String(params['window Skin19'] );
	var SKWindow20 = String(params['window Skin20'] );
	var SKWindow21 = String(params['window Skin21'] );
	var SKWindow22 = String(params['window Skin22'] );
	var SKWindow23 = String(params['window Skin23'] );
	var SKWindow24 = String(params['window Skin24'] );
	var SKWindow25 = String(params['window Skin25'] );
	var SKWindow26 = String(params['window Skin26'] );
	var SKWindow27 = String(params['window Skin27'] );
	var SKWindow28 = String(params['window Skin28'] );
	var SKWindow29 = String(params['window Skin29'] );
	var SKWindow30 = String(params['window Skin30'] );
	var SKWindow31 = String(params['window Skin31'] );
	var SKWindow32 = String(params['window Skin32'] );
	var SKWindow33 = String(params['window Skin33'] );
	var SKWindow34 = String(params['window Skin34'] );
	var SKWindow35 = String(params['window Skin35'] );
	var SKWindow36 = String(params['window Skin36'] );
	var SKWindow37 = String(params['window Skin37'] );
	var SKWindow38 = String(params['window Skin38'] );
	var SKWindow39 = String(params['window Skin39'] );
	var SKWindow40 = String(params['window Skin40'] );
	var SKWindow41 = String(params['window Skin41'] );
	var SKWindow42 = String(params['window Skin42'] );
	var SKWindow43 = String(params['window Skin43'] );
	var SKWindow44 = String(params['window Skin44'] );
	var SKWindow45 = String(params['window Skin45'] );
	var SKWindow46 = String(params['window Skin46'] );
	var SKWindow47 = String(params['window Skin47'] );
	var SKWindow48 = String(params['window Skin48'] );
	var SKWindow49 = String(params['window Skin49'] );
	var SKWindow50 = String(params['window Skin50'] );
	var SKWindow51 = String(params['window Skin51'] );
	var SKWindow52 = String(params['window Skin52'] );
	var SKWindow53 = String(params['window Skin53'] );
	var SKWindow54 = String(params['window Skin54'] );
	var SKWindow55 = String(params['window Skin55'] );
	var SKWindow56 = String(params['window Skin56'] );
	var SKWindow57 = String(params['window Skin57'] );
	var SKWindow58 = String(params['window Skin58'] );
	var SKWindow59 = String(params['window Skin59'] );
	var SKWindow60 = String(params['window Skin60'] );
	var SKWindow61 = String(params['window Skin61'] );
	var SKWindow62 = String(params['window Skin62'] );
	var SKWindow63 = String(params['window Skin63'] );
	var SKWindow64 = String(params['window Skin64'] );
	var SKWindow65 = String(params['window Skin65'] );
	var SKWindow66 = String(params['window Skin66'] );
	var SKWindow67 = String(params['window Skin67'] );
	var SKWindow68 = String(params['window Skin68'] );
	var SKWindow69 = String(params['window Skin69'] );
	var SKWindow70 = String(params['window Skin70'] );
	var SKWindow71 = String(params['window Skin71'] );
	var SKWindow72 = String(params['window Skin72'] );
	var SKWindow73 = String(params['window Skin73'] );
	var SKWindow74 = String(params['window Skin74'] );
	var SKWindow75 = String(params['window Skin75'] );
	var SKWindow76 = String(params['window Skin76'] );
	var SKWindow77 = String(params['window Skin77'] );
	var SKWindow78 = String(params['window Skin78'] );
	var SKWindow79 = String(params['window Skin79'] );
	var SKWindow80 = String(params['window Skin80'] );
	var SKWindow81 = String(params['window Skin81'] );
	var SKWindow82 = String(params['window Skin82'] );
	var SKWindow83 = String(params['window Skin83'] );
	var SKWindow84 = String(params['window Skin84'] );
	var SKWindow85 = String(params['window Skin85'] );
	var SKWindow86 = String(params['window Skin86'] );
	var SKWindow87 = String(params['window Skin87'] );
	var SKWindow88 = String(params['window Skin88'] );
	var SKWindow89 = String(params['window Skin89'] );
	var SKWindow90 = String(params['window Skin90'] );
	var SKWindow91 = String(params['window Skin91'] );
	var SKWindow92 = String(params['window Skin92'] );
	var SKWindow93 = String(params['window Skin93'] );
	var SKWindow94 = String(params['window Skin94'] );
	var SKWindow95 = String(params['window Skin95'] );
	var SKWindow96 = String(params['window Skin96'] );
	var SKWindow97 = String(params['window Skin97'] );
	var SKWindow98 = String(params['window Skin98'] );
	var SKWindow99 = String(params['window Skin99'] );
	var SKWindow100 = String(params['window Skin100'] );
	var SKWindow101 = String(params['window Skin101'] );
	var SKWindow102 = String(params['window Skin102'] );
	var SKWindow103 = String(params['window Skin103'] );
	var SKWindow104 = String(params['window Skin104'] );
	var SKWindow105 = String(params['window Skin105'] );
	var SKWindow106 = String(params['window Skin106'] );
	var SKWindow107 = String(params['window Skin107'] );
	var SKWindow108 = String(params['window Skin108'] );
	var SKWindow109 = String(params['window Skin109'] );
	var SKWindow110 = String(params['window Skin110'] );
	var SKWindow111 = String(params['window Skin111'] );
	var SKWindow112 = String(params['window Skin112'] );
	var SKWindow113 = String(params['window Skin113'] );
	var SKWindow114 = String(params['window Skin114'] );
	var SKWindow115 = String(params['window Skin115'] );
	var SKWindow116 = String(params['window Skin116'] );
	var SKWindow117 = String(params['window Skin117'] );
	var SKWindow118 = String(params['window Skin118'] );
	var SKWindow119 = String(params['window Skin119'] );
	var SKWindow120 = String(params['window Skin120'] );
	
	var Windowiconx = Number(params['iconx'] );
	var Windowicony = Number(params['icony'] );
	
	var IconCap1 = Number(params['Icon1'] );
	var IconCap2 = Number(params['Icon2'] );
	var IconCap3 = Number(params['Icon3'] );
	var IconCap4 = Number(params['Icon4'] );
	var IconCap5 = Number(params['Icon5'] );
	var IconCap6 = Number(params['Icon6'] );
	var IconCap7 = Number(params['Icon7'] );
	var IconCap8 = Number(params['Icon8'] );
	var IconCap9 = Number(params['Icon9'] );
	var IconCap10 = Number(params['Icon10'] );
	var IconCap11 = Number(params['Icon11'] );
	var IconCap12 = Number(params['Icon12'] );
	var IconCap13 = Number(params['Icon13'] );
	var IconCap14 = Number(params['Icon14'] );
	var IconCap15 = Number(params['Icon15'] );
	var IconCap16 = Number(params['Icon16'] );
	var IconCap17 = Number(params['Icon17'] );
	var IconCap18 = Number(params['Icon18'] );
	var IconCap19 = Number(params['Icon19'] );
	var IconCap20 = Number(params['Icon20'] );
	var IconCap21 = Number(params['Icon21'] );
	var IconCap22 = Number(params['Icon22'] );
	var IconCap23 = Number(params['Icon23'] );
	var IconCap24 = Number(params['Icon24'] );
	var IconCap25 = Number(params['Icon25'] );
	var IconCap26 = Number(params['Icon26'] );
	var IconCap27 = Number(params['Icon27'] );
	var IconCap28 = Number(params['Icon28'] );
	var IconCap29 = Number(params['Icon29'] );
	var IconCap30 = Number(params['Icon30'] );
	var IconCap31 = Number(params['Icon31'] );
	var IconCap32 = Number(params['Icon32'] );
	var IconCap33 = Number(params['Icon33'] );
	var IconCap34 = Number(params['Icon34'] );
	var IconCap35 = Number(params['Icon35'] );
	var IconCap36 = Number(params['Icon36'] );
	var IconCap37 = Number(params['Icon37'] );
	var IconCap38 = Number(params['Icon38'] );
	var IconCap39 = Number(params['Icon39'] );
	var IconCap40 = Number(params['Icon40'] );
	var IconCap41 = Number(params['Icon41'] );
	var IconCap42 = Number(params['Icon42'] );
	var IconCap43 = Number(params['Icon43'] );
	var IconCap44 = Number(params['Icon44'] );
	var IconCap45 = Number(params['Icon45'] );
	var IconCap46 = Number(params['Icon46'] );
	var IconCap47 = Number(params['Icon47'] );
	var IconCap48 = Number(params['Icon48'] );
	var IconCap49 = Number(params['Icon49'] );
	var IconCap50 = Number(params['Icon50'] );
	var IconCap51 = Number(params['Icon51'] );
	var IconCap52 = Number(params['Icon52'] );
	var IconCap53 = Number(params['Icon53'] );
	var IconCap54 = Number(params['Icon54'] );
	var IconCap55 = Number(params['Icon55'] );
	var IconCap56 = Number(params['Icon56'] );
	var IconCap57 = Number(params['Icon57'] );
	var IconCap58 = Number(params['Icon58'] );
	var IconCap59 = Number(params['Icon59'] );
	var IconCap60 = Number(params['Icon60'] );
	var IconCap61 = Number(params['Icon61'] );
	var IconCap62 = Number(params['Icon62'] );
	var IconCap63 = Number(params['Icon63'] );
	var IconCap64 = Number(params['Icon64'] );
	var IconCap65 = Number(params['Icon65'] );
	var IconCap66 = Number(params['Icon66'] );
	var IconCap67 = Number(params['Icon67'] );
	var IconCap68 = Number(params['Icon68'] );
	var IconCap69 = Number(params['Icon69'] );
	var IconCap70 = Number(params['Icon70'] );
	var IconCap71 = Number(params['Icon71'] );
	var IconCap72 = Number(params['Icon72'] );
	var IconCap73 = Number(params['Icon73'] );
	var IconCap74 = Number(params['Icon74'] );
	var IconCap75 = Number(params['Icon75'] );
	var IconCap76 = Number(params['Icon76'] );
	var IconCap77 = Number(params['Icon77'] );
	var IconCap78 = Number(params['Icon78'] );
	var IconCap79 = Number(params['Icon79'] );
	var IconCap80 = Number(params['Icon80'] );
	var IconCap81 = Number(params['Icon81'] );
	var IconCap82 = Number(params['Icon82'] );
	var IconCap83 = Number(params['Icon83'] );
	var IconCap84 = Number(params['Icon84'] );
	var IconCap85 = Number(params['Icon85'] );
	var IconCap86 = Number(params['Icon86'] );
	var IconCap87 = Number(params['Icon87'] );
	var IconCap88 = Number(params['Icon88'] );
	var IconCap89 = Number(params['Icon89'] );
	var IconCap90 = Number(params['Icon90'] );
	var IconCap91 = Number(params['Icon91'] );
	var IconCap92 = Number(params['Icon92'] );
	var IconCap93 = Number(params['Icon93'] );
	var IconCap94 = Number(params['Icon94'] );
	var IconCap95 = Number(params['Icon95'] );
	var IconCap96 = Number(params['Icon96'] );
	var IconCap97 = Number(params['Icon97'] );
	var IconCap98 = Number(params['Icon98'] );
	var IconCap99 = Number(params['Icon99'] );
	var IconCap100 = Number(params['Icon100'] );
	var IconCap101 = Number(params['Icon101'] );
	var IconCap102 = Number(params['Icon102'] );
	var IconCap103 = Number(params['Icon103'] );
	var IconCap104 = Number(params['Icon104'] );
	var IconCap105 = Number(params['Icon105'] );
	var IconCap106 = Number(params['Icon106'] );
	var IconCap107 = Number(params['Icon107'] );
	var IconCap108 = Number(params['Icon108'] );
	var IconCap109 = Number(params['Icon109'] );
	var IconCap110 = Number(params['Icon110'] );
	var IconCap111 = Number(params['Icon111'] );
	var IconCap112 = Number(params['Icon112'] );
	var IconCap113 = Number(params['Icon113'] );
	var IconCap114 = Number(params['Icon114'] );
	var IconCap115 = Number(params['Icon115'] );
	var IconCap116 = Number(params['Icon116'] );
	var IconCap117 = Number(params['Icon117'] );
	var IconCap118 = Number(params['Icon118'] );
	var IconCap119 = Number(params['Icon119'] );
	var IconCap120 = Number(params['Icon120'] );

	
	
   var Captions1 = eval(params['Window1 Captions'] );
   var Captions2 = eval(params['Window2 Captions'] );
   var Captions3 = eval(params['Window3 Captions'] );
   var Captions4 = eval(params['Window4 Captions'] );
   var Captions5 = eval(params['Window5 Captions'] );
   var Captions6 = eval(params['Window6 Captions'] );
   var Captions7 = eval(params['Window7 Captions'] );
   var Captions8 = eval(params['Window8 Captions'] );
   var Captions9 = eval(params['Window9 Captions'] );
   var Captions10 = eval(params['Window10 Captions'] );
   var Captions11 = eval(params['Window11 Captions'] );
   var Captions12 = eval(params['Window12 Captions'] );
   var Captions13 = eval(params['Window13 Captions'] );
   var Captions14 = eval(params['Window14 Captions'] );
   var Captions15 = eval(params['Window15 Captions'] );
   var Captions16 = eval(params['Window16 Captions'] );
   var Captions17 = eval(params['Window17 Captions'] );
   var Captions18 = eval(params['Window18 Captions'] );
   var Captions19 = eval(params['Window19 Captions'] );
   var Captions20 = eval(params['Window20 Captions'] );   
   var Captions21 = eval(params['Window21 Captions'] );
   var Captions22 = eval(params['Window22 Captions'] );
   var Captions23 = eval(params['Window23 Captions'] );
   var Captions24 = eval(params['Window24 Captions'] );
   var Captions25 = eval(params['Window25 Captions'] );
   var Captions26 = eval(params['Window26 Captions'] );
   var Captions27 = eval(params['Window27 Captions'] );
   var Captions28 = eval(params['Window28 Captions'] );
   var Captions29 = eval(params['Window29 Captions'] );
   var Captions30 = eval(params['Window30 Captions'] );   
   var Captions31 = eval(params['Window31 Captions'] );
   var Captions32 = eval(params['Window32 Captions'] );
   var Captions33 = eval(params['Window33 Captions'] );
   var Captions34 = eval(params['Window34 Captions'] );
   var Captions35 = eval(params['Window35 Captions'] );
   var Captions36 = eval(params['Window36 Captions'] );
   var Captions37 = eval(params['Window37 Captions'] );
   var Captions38 = eval(params['Window38 Captions'] );
   var Captions39 = eval(params['Window39 Captions'] );
   var Captions40 = eval(params['Window40 Captions'] );   
   var Captions41 = eval(params['Window41 Captions'] );
   var Captions42 = eval(params['Window42 Captions'] );
   var Captions43 = eval(params['Window43 Captions'] );
   var Captions44 = eval(params['Window44 Captions'] );
   var Captions45 = eval(params['Window45 Captions'] );
   var Captions46 = eval(params['Window46 Captions'] );
   var Captions47 = eval(params['Window47 Captions'] );
   var Captions48 = eval(params['Window48 Captions'] );
   var Captions49 = eval(params['Window49 Captions'] );
   var Captions50 = eval(params['Window50 Captions'] );   
   var Captions51 = eval(params['Window51 Captions'] );
   var Captions52 = eval(params['Window52 Captions'] );
   var Captions53 = eval(params['Window53 Captions'] );
   var Captions54 = eval(params['Window54 Captions'] );
   var Captions55 = eval(params['Window55 Captions'] );
   var Captions56 = eval(params['Window56 Captions'] );
   var Captions57 = eval(params['Window57 Captions'] );
   var Captions58 = eval(params['Window58 Captions'] );
   var Captions59 = eval(params['Window59 Captions'] );
   var Captions60 = eval(params['Window60 Captions'] );   
   var Captions61 = eval(params['Window61 Captions'] );
   var Captions62 = eval(params['Window62 Captions'] );
   var Captions63 = eval(params['Window63 Captions'] );
   var Captions64 = eval(params['Window64 Captions'] );
   var Captions65 = eval(params['Window65 Captions'] );
   var Captions66 = eval(params['Window66 Captions'] );
   var Captions67 = eval(params['Window67 Captions'] );
   var Captions68 = eval(params['Window68 Captions'] );
   var Captions69 = eval(params['Window69 Captions'] );
   var Captions70 = eval(params['Window70 Captions'] );   
   var Captions71 = eval(params['Window71 Captions'] );
   var Captions72 = eval(params['Window72 Captions'] );
   var Captions73 = eval(params['Window73 Captions'] );
   var Captions74 = eval(params['Window74 Captions'] );
   var Captions75 = eval(params['Window75 Captions'] );
   var Captions76 = eval(params['Window76 Captions'] );
   var Captions77 = eval(params['Window77 Captions'] );
   var Captions78 = eval(params['Window78 Captions'] );
   var Captions79 = eval(params['Window79 Captions'] );
   var Captions80 = eval(params['Window80 Captions'] );   
   var Captions81 = eval(params['Window81 Captions'] );
   var Captions82 = eval(params['Window82 Captions'] );
   var Captions83 = eval(params['Window83 Captions'] );
   var Captions84 = eval(params['Window84 Captions'] );
   var Captions85 = eval(params['Window85 Captions'] );
   var Captions86 = eval(params['Window86 Captions'] );
   var Captions87 = eval(params['Window87 Captions'] );
   var Captions88 = eval(params['Window88 Captions'] );
   var Captions89 = eval(params['Window89 Captions'] );
   var Captions90 = eval(params['Window90 Captions'] );   
   var Captions91 = eval(params['Window91 Captions'] );
   var Captions92 = eval(params['Window92 Captions'] );
   var Captions93 = eval(params['Window93 Captions'] );
   var Captions94 = eval(params['Window94 Captions'] );
   var Captions95 = eval(params['Window95 Captions'] );
   var Captions96 = eval(params['Window96 Captions'] );
   var Captions97 = eval(params['Window97 Captions'] );
   var Captions98 = eval(params['Window98 Captions'] );
   var Captions99 = eval(params['Window99 Captions'] );
   var Captions100 = eval(params['Window100 Captions'] );   
   var Captions101 = eval(params['Window101 Captions'] );
   var Captions102 = eval(params['Window102 Captions'] );
   var Captions103 = eval(params['Window103 Captions'] );
   var Captions104 = eval(params['Window104 Captions'] );
   var Captions105 = eval(params['Window105 Captions'] );
   var Captions106 = eval(params['Window106 Captions'] );
   var Captions107 = eval(params['Window107 Captions'] );
   var Captions108 = eval(params['Window108 Captions'] );
   var Captions109 = eval(params['Window109 Captions'] );
   var Captions110 = eval(params['Window110 Captions'] );   
   var Captions111 = eval(params['Window111 Captions'] );
   var Captions112 = eval(params['Window112 Captions'] );
   var Captions113 = eval(params['Window113 Captions'] );
   var Captions114 = eval(params['Window114 Captions'] );
   var Captions115 = eval(params['Window115 Captions'] );
   var Captions116 = eval(params['Window116 Captions'] );
   var Captions117 = eval(params['Window117 Captions'] );
   var Captions118 = eval(params['Window118 Captions'] );
   var Captions119 = eval(params['Window119 Captions'] );
   var Captions120 = eval(params['Window120 Captions'] );      
 
 
if (KeyB === "true") {Input.keyMapper ["66"] = "Open1";};

var PLK_Window_Scene_Map = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
    PLK_Window_Scene_Map.call(this);
 if (Input.isTriggered ("Open1")) SceneManager.push(Scene_ServanBuy);
 
};




    // ---------- Plugin command definition From here ----------
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    
    Game_Interpreter.prototype.pluginCommand = function(command, args){
	_Game_Interpreter_pluginCommand.call(this, command, args);

	if(command === pluginName){
	    switch(args[0]){
	    case 'open':
                SceneManager.push(Scene_ServantActor);
                break;
		case 'Buy1':
                SceneManager.push(Scene_ServanBuy);
                break;
		case 'Buy2':
                SceneManager.push(Scene_ServanBuy2);
                break;	
        case 'Buy3':
                SceneManager.push(Scene_ServanBuy3);
                break;	
        case 'Buy4':
                SceneManager.push(Scene_ServanBuy4);
                break;
        case 'Buy5':
                SceneManager.push(Scene_ServanBuy5);
                break;	
        case 'Buy6':
                SceneManager.push(Scene_ServanBuy6);
                break;
        case 'Buy7':
                SceneManager.push(Scene_ServanBuy7);
                break;
        case 'Buy8':
                SceneManager.push(Scene_ServanBuy8);
                break;
        case 'Buy9':
                SceneManager.push(Scene_ServanBuy9);
                break;
        case 'Buy10':
                SceneManager.push(Scene_ServanBuy10);
                break;
        case 'Buy11':
                SceneManager.push(Scene_ServanBuy11);
                break;
        case 'Buy12':
                SceneManager.push(Scene_ServanBuy12);
                break;
        case 'Buy13':
                SceneManager.push(Scene_ServanBuy13);
                break;
        case 'Buy14':
                SceneManager.push(Scene_ServanBuy14);
                break;
        case 'Buy15':
                SceneManager.push(Scene_ServanBuy15);
                break;		
        case 'Color1':
                $gameSystem.setWindowTone(PLKCol)	
                break;	
        case 'Color2':
                $gameSystem.setWindowTone(PLKCo2)	
                break;	
        case 'Color3':
                $gameSystem.setWindowTone(PLKCo3)	
                break;	
        case 'Color4':
                $gameSystem.setWindowTone(PLKCo4)	
                break;	
        case 'Color5':
                $gameSystem.setWindowTone(PLKCo5)	
                break;					
			
	    }		
	}
    };
   // ---------- Definition of plugin command Up to here ----------

    var getClassName = function(object) {
        return object.constructor.toString().replace(/function\s+(.*)\s*\([\s\S]*/m, '$1');
    };

    //=============================================================================
    // Local function
    // Format and check plugin parameters and plugin command parameters
    //=============================================================================
    /**
     * Create plugin parameter. param[paramName] ex. param.commandPrefix
     * @param pluginName plugin name(EncounterSwitchConditions)
     * @returns {Object} Created parameter
     */
    var createPluginParameter = function(pluginName) {
        var paramReplacer = function(key, value) {
            if (value === 'null') {
                return value;
            }
            if (value[0] === '"' && value[value.length - 1] === '"') {
                return value;
            }
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        };
        var parameter     = JSON.parse(JSON.stringify(PluginManager.parameters(pluginName), paramReplacer));
        PluginManager.setParameters(pluginName, parameter);
        return parameter;
    };

    var param = createPluginParameter('PLK_Window');
    if (!param.windowImageInfo) {
        param.windowImageInfo = [];
    }

    //=============================================================================
    // Window
    //  Set a dedicated background image.
    //=============================================================================
    var _Window__createAllParts      = Window.prototype._createAllParts;
    Window.prototype._createAllParts = function() {
        _Window__createAllParts.apply(this, arguments);
        this._backImageDataList = this.initBackImageData();
        if (this._backImageDataList.length >= 0) {
            this._createBackImage();
        }
    };

    Window.prototype._setBackImageProperty = function(backImageData) {
        this._backImageDx                   = parseInt(backImageData['OffsetX']) || 0;
        this._backImageDy                   = parseInt(backImageData['OffsetY']) || 0;
        this._windowBackImageSprite.scale.x = (parseInt(backImageData['ScaleX']) || 100) / 100;
        this._windowBackImageSprite.scale.y = (parseInt(backImageData['ScaleY']) || 100) / 100;
    };

    /**
     * Create a background image.
     * @private
     */
    Window.prototype._createBackImage = function() {
        this._windowBackSprite.visible  = false;
        this._windowFrameSprite.visible = false;
        this._windowBackImageSprites    = [];
        this._backImageDataList.forEach(function(backImageData) {
            var bitmap     = ImageManager.loadPicture(backImageData['ImageFile']);
            var sprite     = new Sprite_WindowBackImage(bitmap);
            sprite.scale.x = (backImageData['ScaleX'] || 100) / 100;
            sprite.scale.y = (backImageData['ScaleY'] || 100) / 100;
            this._windowBackImageSprites.push(sprite);
            this._windowSpriteContainer.addChild(sprite);
        }, this);
    };

    Window.prototype.initBackImageData = function() {
        var className = getClassName(this);
        return param.windowImageInfo.filter(function(data) {
            return data['WindowClass'] === className;
        }, this);
    };

    Window.prototype.getBackImageDataItem = function(index, propName) {
        return this._backImageDataList[index][propName];
    };

    var _Window__refreshAllParts      = Window.prototype._refreshAllParts;
    Window.prototype._refreshAllParts = function() {
        if (this._windowBackImageSprites) {
            this._refreshBackImage();
        }
        _Window__refreshAllParts.apply(this, arguments);
    };

    /**
     * Refresh the background image.
     * @private
     */
    Window.prototype._refreshBackImage = function() {
        this._windowBackImageSprites.forEach(function(sprite, index) {
            sprite.x = this.width / 2 + this.getBackImageDataItem(index, 'OffsetX');
            sprite.y = this.height / 2 + this.getBackImageDataItem(index, 'OffsetY');
        }, this);
    };

    var _Window_update      = Window.prototype.update;
    Window.prototype.update = function() {
        _Window_update.apply(this, arguments);
        if (!this._windowBackImageSprites) {
            return;
        }
        var defaultVisible = true;
        this._windowBackImageSprites.forEach(function(sprite, index) {
            var switchId = this.getBackImageDataItem(index, 'SwitchId');
            sprite.visible = !switchId || $gameSwitches.value(switchId);
            if (sprite.visible && !this.getBackImageDataItem(index, 'WindowShow')) {
                defaultVisible = false;
            }
        }, this);
        this._windowBackSprite.visible  = defaultVisible;
        this._windowFrameSprite.visible = defaultVisible;
    };

    //=============================================================================
    // Sprite_WindowBackImage
    //  Sprite for window background image.
    //=============================================================================
    function Sprite_WindowBackImage() {
        this.initialize.apply(this, arguments);
    }

    Sprite_WindowBackImage.prototype             = Object.create(Sprite.prototype);
    Sprite_WindowBackImage.prototype.constructor = Sprite_WindowBackImage;

    Sprite_WindowBackImage.prototype.initialize = function(bitmap) {
        Sprite.prototype.initialize.call(this);
        this.bitmap   = bitmap;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
    };

     
  


//===========================================================================set Scene_ServanBuyScene


function Scene_ServanBuy(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy.prototype.constructor = Scene_ServanBuy;

    Scene_ServanBuy.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);

    };






Scene_ServanBuy.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
    
	this.createWindowLayer();
	if ($gameSwitches.value(Window1OF)) {this.createServanBuy1();};
	if ($gameSwitches.value(Window2OF)) {this.createServanBuy2();};
	if ($gameSwitches.value(Window3OF)) {this.createServanBuy3();};
	if ($gameSwitches.value(Window4OF)) {this.createServanBuy4();};
	if ($gameSwitches.value(Window5OF)) {this.createServanBuy5();};
	if ($gameSwitches.value(Window6OF)) {this.createServanBuy6();};
	if ($gameSwitches.value(Window7OF)) {this.createServanBuy7();};
	if ($gameSwitches.value(Window8OF)) {this.createServanBuy8();};
	if (WindowSL1 === "true") {this.createServanBuyL1();};	
	this.createMainWindow();
	if ($gameSwitches.value(Window1OF)) {this._mainWindow.drawIcon(IconCap1, window1X+Windowiconx, window1Y+Windowicony, this._mainWindow.width);};
	if ($gameSwitches.value(Window2OF)) {this._mainWindow.drawIcon(IconCap2, window2X+Windowiconx, window2Y+Windowicony, this._mainWindow.width);};
	if ($gameSwitches.value(Window3OF)) {this._mainWindow.drawIcon(IconCap3, window3X+Windowiconx, window3Y+Windowicony, this._mainWindow.width);};
	if ($gameSwitches.value(Window4OF)) {this._mainWindow.drawIcon(IconCap4, window4X+Windowiconx, window4Y+Windowicony, this._mainWindow.width);};
	if ($gameSwitches.value(Window5OF)) {this._mainWindow.drawIcon(IconCap5, window5X+Windowiconx, window5Y+Windowicony, this._mainWindow.width);};
	if ($gameSwitches.value(Window6OF)) {this._mainWindow.drawIcon(IconCap6, window6X+Windowiconx, window6Y+Windowicony, this._mainWindow.width);};
	if ($gameSwitches.value(Window7OF)) {this._mainWindow.drawIcon(IconCap7, window7X+Windowiconx, window7Y+Windowicony, this._mainWindow.width);};
	if ($gameSwitches.value(Window8OF)) {this._mainWindow.drawIcon(IconCap8, window8X+Windowiconx, window8Y+Windowicony, this._mainWindow.width);};

//รูป icon
    

	this._mainWindow.opacity = 0;

	this.createServanBuyEx();
    this.createMessageWindow();
	
	

};



	
// สร้างหน้าต่างรายการ

Scene_ServanBuy.prototype.createMessageWindow = function() {
    this._messageWindow = new Window_Message();
    this.addWindow(this._messageWindow);
    this._messageWindow.subWindows().forEach(function(window) {
        this.addWindow(window);
    }, this);
};

	
Scene_ServanBuy.prototype.createServanBuy1 = function(){ 
        this._ServanBuy1 = new Window_ServanBuy1(0, 0);	
		this._ServanBuy1.move(window1X, window1Y, window1W, window1H);
		this._ServanBuy1.setHandler('ok1', this.onIndexOkBuy1.bind(this));
        this.addWindow(this._ServanBuy1);
		if (Windowselec === "false") {this._ServanBuy1.select(-1);};
        
    };

Scene_ServanBuy.prototype.createServanBuy2 = function(){
        this._ServanBuy2 = new Window_ServanBuy2(0, 0);
		this._ServanBuy2.move(window2X, window2Y, window2W, window2H);
		this._ServanBuy2.setHandler('ok2', this.onIndexOkBuy2.bind(this));	
        this.addWindow(this._ServanBuy2);
        if (Windowselec === "false") {this._ServanBuy2.select(-1);};
    }
		
	

Scene_ServanBuy.prototype.createServanBuy3 = function(){
        this._ServanBuy3 = new Window_ServanBuy3(0, 0);
		this._ServanBuy3.move(window3X, window3Y, window3W, window3H);
		this._ServanBuy3.setHandler('ok3', this.onIndexOkBuy3.bind(this));	
        this.addWindow(this._ServanBuy3);
		if (Windowselec === "false") {this._ServanBuy3.select(-1);};
		
    };
Scene_ServanBuy.prototype.createServanBuy4 = function(){
        this._ServanBuy4 = new Window_ServanBuy4(0, 0);
		this._ServanBuy4.move(window4X, window4Y, window4W, window4H);
		this._ServanBuy4.setHandler('ok4', this.onIndexOkBuy4.bind(this));	
        this.addWindow(this._ServanBuy4);
		if (Windowselec === "false") {this._ServanBuy4.select(-1);};
		
    };	
Scene_ServanBuy.prototype.createServanBuy5 = function(){
        this._ServanBuy5 = new Window_ServanBuy5(0, 0);
		this._ServanBuy5.move(window5X, window5Y, window5W, window5H);
		this._ServanBuy5.setHandler('ok5', this.onIndexOkBuy5.bind(this));	
        this.addWindow(this._ServanBuy5);
		if (Windowselec === "false") {this._ServanBuy5.select(-1);};
		
    };
Scene_ServanBuy.prototype.createServanBuy6 = function(){
        this._ServanBuy6 = new Window_ServanBuy6(0, 0);	
		this._ServanBuy6.move(window6X, window6Y, window6W, window6H);
		this._ServanBuy6.setHandler('ok6', this.onIndexOkBuy6.bind(this));	
        this.addWindow(this._ServanBuy6);
		if (Windowselec === "false") {this._ServanBuy6.select(-1);};
		
    };
Scene_ServanBuy.prototype.createServanBuy7 = function(){
        this._ServanBuy7 = new Window_ServanBuy7(0, 0);
		this._ServanBuy7.move(window7X, window7Y, window7W, window7H);
		this._ServanBuy7.setHandler('ok7', this.onIndexOkBuy7.bind(this));	
        this.addWindow(this._ServanBuy7);
		if (Windowselec === "false") {this._ServanBuy7.select(-1);};
		
    };
Scene_ServanBuy.prototype.createServanBuy8 = function(){
        this._ServanBuy8 = new Window_ServanBuy8(0, 0);
		this._ServanBuy8.move(window8X, window8Y, window8W, window8H);
		this._ServanBuy8.setHandler('ok8', this.onIndexOkBuy8.bind(this));	
        this.addWindow(this._ServanBuy8);
		if (Windowselec === "false") {this._ServanBuy8.select(-1);};
    };
	



Scene_ServanBuy.prototype.createMainWindow = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow);
		
    };

	
Scene_ServanBuy.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP1X, windowP1Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP1X, windowP1Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP1X, windowP1Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP1X, windowP1Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP1X, windowP1Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP1X, windowP1Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP1X, windowP1Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP1X, windowP1Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP1X, windowP1Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP1X, windowP1Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP1X, windowP1Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP1X, windowP1Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP1X, windowP1Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP1X, windowP1Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP1X, windowP1Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
    };
Scene_ServanBuy.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP1EX, windowP1EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);	
		if (Windowselec === "false") {this._ServanBuyEx.select(-1);};
		
    };
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy.prototype.onIndexOkBuy1 = function(){
	
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window1);
};	
Scene_ServanBuy.prototype.onIndexOkBuy2 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window2);
};
Scene_ServanBuy.prototype.onIndexOkBuy3 = function(){	
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window3);
};
Scene_ServanBuy.prototype.onIndexOkBuy4 = function(){	
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window4);
};
Scene_ServanBuy.prototype.onIndexOkBuy5 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window5);
};
Scene_ServanBuy.prototype.onIndexOkBuy6 = function(){	
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window6);
};
Scene_ServanBuy.prototype.onIndexOkBuy7 = function(){	
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window7);
};
Scene_ServanBuy.prototype.onIndexOkBuy8 = function(){	
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window8);
};

Scene_ServanBuy.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
};
 

// หน้าต่าง


    function Window_ServanBuy1(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy1.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy1.prototype.constructor = Window_ServanBuy1;
    Window_ServanBuy1.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	//คำอธิบายจริงตามid
	this.drawIcon(1001, window1X+Windowiconx, window1Y+Windowicony);
	this.drawIcon(1002, window2X+Windowiconx, window2Y+Windowicony);
	this.drawIcon(1003, window3X+Windowiconx, window3Y+Windowicony);
	this.drawIcon(1004, window4X+Windowiconx, window4Y+Windowicony);
	this.drawIcon(1005, window5X+Windowiconx, window5Y+Windowicony);
	this.drawIcon(1006, window6X+Windowiconx, window6Y+Windowicony);
	this.drawIcon(1007, window7X+Windowiconx, window7Y+Windowicony);
	this.drawIcon(1008, window8X+Windowiconx, window8Y+Windowicony);
    };	

	
	function Window_ServanBuy2(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy2.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy2.prototype.constructor = Window_ServanBuy2;
    Window_ServanBuy2.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);	
    };
	
	function Window_ServanBuy3(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy3.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy3.prototype.constructor = Window_ServanBuy3;
    Window_ServanBuy3.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy4(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy4.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy4.prototype.constructor = Window_ServanBuy4;
    Window_ServanBuy4.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy5(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy5.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy5.prototype.constructor = Window_ServanBuy5;
    Window_ServanBuy5.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy6(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy6.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy6.prototype.constructor = Window_ServanBuy6;
    Window_ServanBuy6.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	
	
	function Window_ServanBuy7(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy7.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy7.prototype.constructor = Window_ServanBuy7;
    Window_ServanBuy7.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy8(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy8.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy8.prototype.constructor = Window_ServanBuy8;
    Window_ServanBuy8.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	function Window_ServanBuyL1(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuyL1.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuyL1.prototype.constructor = Window_ServanBuyL1;
    Window_ServanBuyL1.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	};
	

	function Window_ServanBuyEx(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuyEx.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuyEx.prototype.constructor = Window_ServanBuyEx;
    Window_ServanBuyEx.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
			
   // set command
   
    Window_ServanBuy1.prototype.makeCommandList = function(){
	this.addCommand(name1, 'ok1', true);
    };

    Window_ServanBuy2.prototype.makeCommandList = function(){
	this.addCommand(name2, 'ok2', true);
    };
	
    Window_ServanBuy3.prototype.makeCommandList = function(){
	this.addCommand(name3, 'ok3', true);
    };
	
    Window_ServanBuy4.prototype.makeCommandList = function(){
	this.addCommand(name4, 'ok4', true);
    };
	
	Window_ServanBuy5.prototype.makeCommandList = function(){
	this.addCommand(name5, 'ok5', true);
    };

	Window_ServanBuy6.prototype.makeCommandList = function(){
	this.addCommand(name6, 'ok6', true);
    };
	
	Window_ServanBuy7.prototype.makeCommandList = function(){
	this.addCommand(name7, 'ok7', true);
    };
	Window_ServanBuy8.prototype.makeCommandList = function(){
	this.addCommand(name8, 'ok8', true);
    };
	Window_ServanBuyL1.prototype.makeCommandList = function(){
		
	if (choice === "1") {	
	this.addCommand('1', 'okL1', true);
	};	
	if (choice === "2") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	};	
	if (choice === "3") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	};	
	if (choice === "4") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	this.addCommand('4', 'okL4', true);
	};	
	if (choice === "5") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	this.addCommand('4', 'okL4', true);
	this.addCommand('5', 'okL5', true);
	};	
	if (choice === "6") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	this.addCommand('4', 'okL4', true);
	this.addCommand('5', 'okL5', true);
	this.addCommand('6', 'okL6', true);
	};	
	if (choice === "7") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	this.addCommand('4', 'okL4', true);
	this.addCommand('5', 'okL5', true);
	this.addCommand('6', 'okL6', true);
	this.addCommand('7', 'okL7', true);
	};	
	if (choice === "8") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	this.addCommand('4', 'okL4', true);
	this.addCommand('5', 'okL5', true);
	this.addCommand('6', 'okL6', true);
	this.addCommand('7', 'okL7', true);
	this.addCommand('8', 'okL8', true);
	};	
	if (choice === "9") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	this.addCommand('4', 'okL4', true);
	this.addCommand('5', 'okL5', true);
	this.addCommand('6', 'okL6', true);
	this.addCommand('7', 'okL7', true);
	this.addCommand('8', 'okL8', true);
	this.addCommand('9', 'okL9', true);
	};	
	if (choice === "10") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	this.addCommand('4', 'okL4', true);
	this.addCommand('5', 'okL5', true);
	this.addCommand('6', 'okL6', true);
	this.addCommand('7', 'okL7', true);
	this.addCommand('8', 'okL8', true);
	this.addCommand('9', 'okL9', true);
	this.addCommand('10', 'okL10', true);
	};	
	if (choice === "11") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	this.addCommand('4', 'okL4', true);
	this.addCommand('5', 'okL5', true);
	this.addCommand('6', 'okL6', true);
	this.addCommand('7', 'okL7', true);
	this.addCommand('8', 'okL8', true);
	this.addCommand('9', 'okL9', true);
	this.addCommand('10', 'okL10', true);
	this.addCommand('11', 'okL11', true);
	};	
	if (choice === "12") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	this.addCommand('4', 'okL4', true);
	this.addCommand('5', 'okL5', true);
	this.addCommand('6', 'okL6', true);
	this.addCommand('7', 'okL7', true);
	this.addCommand('8', 'okL8', true);
	this.addCommand('9', 'okL9', true);
	this.addCommand('10', 'okL10', true);
	this.addCommand('11', 'okL11', true);
	this.addCommand('12', 'okL12', true);
	};	
	if (choice === "13") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	this.addCommand('4', 'okL4', true);
	this.addCommand('5', 'okL5', true);
	this.addCommand('6', 'okL6', true);
	this.addCommand('7', 'okL7', true);
	this.addCommand('8', 'okL8', true);
	this.addCommand('9', 'okL9', true);
	this.addCommand('10', 'okL10', true);
	this.addCommand('11', 'okL11', true);
	this.addCommand('12', 'okL12', true);
	this.addCommand('13', 'okL13', true);
	};	
	if (choice === "14") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	this.addCommand('4', 'okL4', true);
	this.addCommand('5', 'okL5', true);
	this.addCommand('6', 'okL6', true);
	this.addCommand('7', 'okL7', true);
	this.addCommand('8', 'okL8', true);
	this.addCommand('9', 'okL9', true);
	this.addCommand('10', 'okL10', true);
	this.addCommand('11', 'okL11', true);
	this.addCommand('12', 'okL12', true);
	this.addCommand('13', 'okL13', true);
	this.addCommand('14', 'okL14', true);
	};	
	if (choice === "15") {
	this.addCommand('1', 'okL1', true);
	this.addCommand('2', 'okL2', true);
	this.addCommand('3', 'okL3', true);
	this.addCommand('4', 'okL4', true);
	this.addCommand('5', 'okL5', true);
	this.addCommand('6', 'okL6', true);
	this.addCommand('7', 'okL7', true);
	this.addCommand('8', 'okL8', true);
	this.addCommand('9', 'okL9', true);
	this.addCommand('10', 'okL10', true);
	this.addCommand('11', 'okL11', true);
	this.addCommand('12', 'okL12', true);
	this.addCommand('13', 'okL13', true);
	this.addCommand('14', 'okL14', true);
	this.addCommand('15', 'okL15', true);
	};	
	
    };
    Window_ServanBuyEx.prototype.makeCommandList = function(){
	this.addCommand('Exit', 'Ex', true);
    };

Window_ServanBuy1.prototype.normalColor = function() {return this.textColor(color1);};
Window_ServanBuy2.prototype.normalColor = function() {return this.textColor(color2);};
Window_ServanBuy3.prototype.normalColor = function() {return this.textColor(color3);};
Window_ServanBuy4.prototype.normalColor = function() {return this.textColor(color4);};
Window_ServanBuy5.prototype.normalColor = function() {return this.textColor(color5);};
Window_ServanBuy6.prototype.normalColor = function() {return this.textColor(color6);};
Window_ServanBuy7.prototype.normalColor = function() {return this.textColor(color7);};
Window_ServanBuy8.prototype.normalColor = function() {return this.textColor(color8);};





Window_ServanBuyL1.prototype.itemHeight = function() {return 38;}
Window_ServanBuyL1.prototype.itemWidth = function() {return 30;}
Window_ServanBuyL1.prototype.maxCols = function(){return 5;}
Window_ServanBuyL1.prototype.lineHeight = function() {return 38;};


Window_ServanBuyEx.prototype.itemHeight = function() {return 32;}
Window_ServanBuyEx.prototype.itemWidth = function() {return 85;}


//===========================================================================set Scene2

function Scene_ServanBuy2(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy2.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy2.prototype.constructor = Scene_ServanBuy2;

    Scene_ServanBuy2.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy2.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window9OF)) {this.createServanBuy9();};
	if ($gameSwitches.value(Window10OF)) {this.createServanBuy10();};
	if ($gameSwitches.value(Window11OF)) {this.createServanBuy11();};
	if ($gameSwitches.value(Window12OF)) {this.createServanBuy12();};
	if ($gameSwitches.value(Window13OF)) {this.createServanBuy13();};
	if ($gameSwitches.value(Window14OF)) {this.createServanBuy14();};
	if ($gameSwitches.value(Window15OF)) {this.createServanBuy15();};
	if ($gameSwitches.value(Window16OF)) {this.createServanBuy16();};

	if (WindowSL1 === "true") {this.createServanBuyL1();};
    this.createMainWindow2();
	if ($gameSwitches.value(Window9OF)) {this._mainWindow2.drawIcon(IconCap9, window9X+Windowiconx, window9Y+Windowicony, this._mainWindow2.width);};
	if ($gameSwitches.value(Window10OF)) {this._mainWindow2.drawIcon(IconCap10, window10X+Windowiconx, window10Y+Windowicony, this._mainWindow2.width);};
	if ($gameSwitches.value(Window11OF)) {this._mainWindow2.drawIcon(IconCap11, window11X+Windowiconx, window11Y+Windowicony, this._mainWindow2.width);};
	if ($gameSwitches.value(Window12OF)) {this._mainWindow2.drawIcon(IconCap12, window12X+Windowiconx, window12Y+Windowicony, this._mainWindow2.width);};
	if ($gameSwitches.value(Window13OF)) {this._mainWindow2.drawIcon(IconCap13, window13X+Windowiconx, window13Y+Windowicony, this._mainWindow2.width);};
	if ($gameSwitches.value(Window14OF)) {this._mainWindow2.drawIcon(IconCap14, window14X+Windowiconx, window14Y+Windowicony, this._mainWindow2.width);};
	if ($gameSwitches.value(Window15OF)) {this._mainWindow2.drawIcon(IconCap15, window15X+Windowiconx, window15Y+Windowicony, this._mainWindow2.width);};
	if ($gameSwitches.value(Window16OF)) {this._mainWindow2.drawIcon(IconCap16, window16X+Windowiconx, window16Y+Windowicony, this._mainWindow2.width);};

	
//รูป icon

	this._mainWindow2.opacity = 0;
	
	this.createServanBuyEx();
};



// สร้างหน้าต่างรายการ
Scene_ServanBuy2.prototype.createServanBuy9 = function(){
        this._ServanBuy9 = new Window_ServanBuy9(0, 0);
		this._ServanBuy9.move(window9X, window9Y, window9W, window9H);
		this._ServanBuy9.setHandler('ok9', this.onIndexOkBuy9.bind(this));
        this.addWindow(this._ServanBuy9);	
		if (Windowselec === "false") {this._ServanBuy9.select(-1);};
    };
Scene_ServanBuy2.prototype.createServanBuy10 = function(){
        this._ServanBuy10 = new Window_ServanBuy10(0, 0);
		this._ServanBuy10.move(window10X, window10Y, window10W, window10H);
		this._ServanBuy10.setHandler('ok10', this.onIndexOkBuy10.bind(this));	
        this.addWindow(this._ServanBuy10);
		if (Windowselec === "false") {this._ServanBuy10.select(-1);};
    };
Scene_ServanBuy2.prototype.createServanBuy11 = function(){
        this._ServanBuy11 = new Window_ServanBuy11(0, 0);
		this._ServanBuy11.move(window11X, window11Y, window11W, window11H);
		this._ServanBuy11.setHandler('ok11', this.onIndexOkBuy11.bind(this));	
        this.addWindow(this._ServanBuy11);
		if (Windowselec === "false") {this._ServanBuy11.select(-1);};
    };
Scene_ServanBuy2.prototype.createServanBuy12 = function(){
        this._ServanBuy12 = new Window_ServanBuy12(0, 0);
		this._ServanBuy12.move(window12X, window12Y, window12W, window12H);
		this._ServanBuy12.setHandler('ok12', this.onIndexOkBuy12.bind(this));	
        this.addWindow(this._ServanBuy12);
		if (Windowselec === "false") {this._ServanBuy12.select(-1);};
    };	
Scene_ServanBuy2.prototype.createServanBuy13 = function(){
        this._ServanBuy13 = new Window_ServanBuy13(0, 0);
		this._ServanBuy13.move(window13X, window13Y, window13W, window13H);
		this._ServanBuy13.setHandler('ok13', this.onIndexOkBuy13.bind(this));	
        this.addWindow(this._ServanBuy13);
		if (Windowselec === "false") {this._ServanBuy13.select(-1);};
    };
Scene_ServanBuy2.prototype.createServanBuy14 = function(){
        this._ServanBuy14 = new Window_ServanBuy14(0, 0);
		this._ServanBuy14.move(window14X, window14Y, window14W, window14H);
		this._ServanBuy14.setHandler('ok14', this.onIndexOkBuy14.bind(this));	
        this.addWindow(this._ServanBuy14);
		if (Windowselec === "false") {this._ServanBuy14.select(-1);};
    };
Scene_ServanBuy2.prototype.createServanBuy15 = function(){
        this._ServanBuy15 = new Window_ServanBuy15(0, 0);
		this._ServanBuy15.move(window15X, window15Y, window15W, window15H);
		this._ServanBuy15.setHandler('ok15', this.onIndexOkBuy15.bind(this));	
        this.addWindow(this._ServanBuy15);
		if (Windowselec === "false") {this._ServanBuy15.select(-1);};
    };
Scene_ServanBuy2.prototype.createServanBuy16 = function(){
        this._ServanBuy16 = new Window_ServanBuy16(0, 0);
		this._ServanBuy16.move(window16X, window16Y, window16W, window16H);
		this._ServanBuy16.setHandler('ok16', this.onIndexOkBuy16.bind(this));	
        this.addWindow(this._ServanBuy16);
		if (Windowselec === "false") {this._ServanBuy16.select(-1);};
    };
	
Scene_ServanBuy2.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP2X, windowP2Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP2X, windowP2Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP2X, windowP2Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP2X, windowP2Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP2X, windowP2Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP2X, windowP2Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP2X, windowP2Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP2X, windowP2Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP2X, windowP2Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP2X, windowP2Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP2X, windowP2Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP2X, windowP2Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP2X, windowP2Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP2X, windowP2Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP2X, windowP2Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
		this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
		this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));	
        this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(1);
    };
Scene_ServanBuy2.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP2EX, windowP2EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);
	if (Windowselec === "false") {this._ServanBuyEx.select(-1);};		
    };
	
Scene_ServanBuy2.prototype.createMainWindow2 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow2 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow2);
		
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy2.prototype.onIndexOkBuy9 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window9);
};	
Scene_ServanBuy2.prototype.onIndexOkBuy10 = function(){	
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window10);
};
Scene_ServanBuy2.prototype.onIndexOkBuy11 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window11);
};
Scene_ServanBuy2.prototype.onIndexOkBuy12 = function(){	
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window12);
};
Scene_ServanBuy2.prototype.onIndexOkBuy13 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window13);
};
Scene_ServanBuy2.prototype.onIndexOkBuy14 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window14);
};
Scene_ServanBuy2.prototype.onIndexOkBuy15 = function(){	
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window15);
};
Scene_ServanBuy2.prototype.onIndexOkBuy16 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window16);
};

Scene_ServanBuy2.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy2.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy2.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 

// หน้าต่าง
    function Window_ServanBuy9(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy9.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy9.prototype.constructor = Window_ServanBuy9;
    Window_ServanBuy9.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1009, window9X+Windowiconx, window9Y+Windowicony);
	this.drawIcon(1010, window10X+Windowiconx, window10Y+Windowicony);
	this.drawIcon(1011, window11X+Windowiconx, window11Y+Windowicony);
	this.drawIcon(1012, window12X+Windowiconx, window12Y+Windowicony);
	this.drawIcon(1013, window13X+Windowiconx, window13Y+Windowicony);
	this.drawIcon(1014, window14X+Windowiconx, window14Y+Windowicony);
	this.drawIcon(1015, window15X+Windowiconx, window15Y+Windowicony);
	this.drawIcon(1016, window16X+Windowiconx, window16Y+Windowicony);
    };	
	
	function Window_ServanBuy10(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy10.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy10.prototype.constructor = Window_ServanBuy10;
    Window_ServanBuy10.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy11(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy11.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy11.prototype.constructor = Window_ServanBuy11;
    Window_ServanBuy11.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy12(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy12.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy12.prototype.constructor = Window_ServanBuy12;
    Window_ServanBuy12.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy13(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy13.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy13.prototype.constructor = Window_ServanBuy13;
    Window_ServanBuy13.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy14(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy14.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy14.prototype.constructor = Window_ServanBuy14;
    Window_ServanBuy14.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy15(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy15.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy15.prototype.constructor = Window_ServanBuy15;
    Window_ServanBuy15.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy16(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy16.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy16.prototype.constructor = Window_ServanBuy16;
    Window_ServanBuy16.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy9.prototype.makeCommandList = function(){
	this.addCommand(name9, 'ok9', true);
    };

    Window_ServanBuy10.prototype.makeCommandList = function(){
	this.addCommand(name10, 'ok10', true);
    };
	
    Window_ServanBuy11.prototype.makeCommandList = function(){
	this.addCommand(name11, 'ok11', true);
    };
	
    Window_ServanBuy12.prototype.makeCommandList = function(){
	this.addCommand(name12, 'ok12', true);
    };
	
	Window_ServanBuy13.prototype.makeCommandList = function(){
	this.addCommand(name13, 'ok13', true);
    };

	Window_ServanBuy14.prototype.makeCommandList = function(){
	this.addCommand(name14, 'ok14', true);
    };
	
	Window_ServanBuy15.prototype.makeCommandList = function(){
	this.addCommand(name15, 'ok15', true);
    };
	Window_ServanBuy16.prototype.makeCommandList = function(){
	this.addCommand(name16, 'ok16', true);
    };


Window_ServanBuy9.prototype.normalColor = function() {return this.textColor(color9);};
Window_ServanBuy10.prototype.normalColor = function() {return this.textColor(color10);};
Window_ServanBuy11.prototype.normalColor = function() {return this.textColor(color11);};
Window_ServanBuy12.prototype.normalColor = function() {return this.textColor(color12);};
Window_ServanBuy13.prototype.normalColor = function() {return this.textColor(color13);};
Window_ServanBuy14.prototype.normalColor = function() {return this.textColor(color14);};
Window_ServanBuy15.prototype.normalColor = function() {return this.textColor(color15);};
Window_ServanBuy16.prototype.normalColor = function() {return this.textColor(color16);};




//===========================================================================set Scene3

function Scene_ServanBuy3(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy3.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy3.prototype.constructor = Scene_ServanBuy3;

    Scene_ServanBuy3.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy3.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window17OF)) {this.createServanBuy17();};
	if ($gameSwitches.value(Window18OF)) {this.createServanBuy18();};
	if ($gameSwitches.value(Window19OF)) {this.createServanBuy19();};
	if ($gameSwitches.value(Window20OF)) {this.createServanBuy20();};
	if ($gameSwitches.value(Window21OF)) {this.createServanBuy21();};
	if ($gameSwitches.value(Window22OF)) {this.createServanBuy22();};
	if ($gameSwitches.value(Window23OF)) {this.createServanBuy23();};
	if ($gameSwitches.value(Window24OF)) {this.createServanBuy24();};
	if (WindowSL1 === "true") {this.createServanBuyL1();};
    this.createMainWindow3();
	if ($gameSwitches.value(Window17OF)) {this._mainWindow3.drawIcon(IconCap17, window17X+Windowiconx, window17Y+Windowicony, this._mainWindow3.width);};
	if ($gameSwitches.value(Window18OF)) {this._mainWindow3.drawIcon(IconCap18, window18X+Windowiconx, window18Y+Windowicony, this._mainWindow3.width);};
	if ($gameSwitches.value(Window19OF)) {this._mainWindow3.drawIcon(IconCap19, window19X+Windowiconx, window19Y+Windowicony, this._mainWindow3.width);};
	if ($gameSwitches.value(Window20OF)) {this._mainWindow3.drawIcon(IconCap20, window20X+Windowiconx, window20Y+Windowicony, this._mainWindow3.width);};
	if ($gameSwitches.value(Window21OF)) {this._mainWindow3.drawIcon(IconCap21, window21X+Windowiconx, window21Y+Windowicony, this._mainWindow3.width);};
	if ($gameSwitches.value(Window22OF)) {this._mainWindow3.drawIcon(IconCap22, window22X+Windowiconx, window22Y+Windowicony, this._mainWindow3.width);};
	if ($gameSwitches.value(Window23OF)) {this._mainWindow3.drawIcon(IconCap23, window23X+Windowiconx, window23Y+Windowicony, this._mainWindow3.width);};
	if ($gameSwitches.value(Window24OF)) {this._mainWindow3.drawIcon(IconCap24, window24X+Windowiconx, window24Y+Windowicony, this._mainWindow3.width);};
	
	
//รูป icon

	this._mainWindow3.opacity = 0;
	this.createServanBuyEx();
};



Scene_ServanBuy3.prototype.createMainWindow3 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow3 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow3);
		
    };	

// สร้างหน้าต่างรายการ
Scene_ServanBuy3.prototype.createServanBuy17 = function(){
        this._ServanBuy17 = new Window_ServanBuy17(0, 0);
		this._ServanBuy17.move(window17X, window17Y, window17W, window17H);
		this._ServanBuy17.setHandler('ok17', this.onIndexOkBuy17.bind(this));
        this.addWindow(this._ServanBuy17);	
		if (Windowselec === "false") {this._ServanBuy17.select(-1);};
    };
Scene_ServanBuy3.prototype.createServanBuy18 = function(){
        this._ServanBuy18 = new Window_ServanBuy18(0, 0);
		this._ServanBuy18.move(window18X, window18Y, window18W, window18H);
		this._ServanBuy18.setHandler('ok18', this.onIndexOkBuy18.bind(this));	
        this.addWindow(this._ServanBuy18);
		if (Windowselec === "false") {this._ServanBuy18.select(-1);};
    };
Scene_ServanBuy3.prototype.createServanBuy19 = function(){
        this._ServanBuy19 = new Window_ServanBuy19(0, 0);
		this._ServanBuy19.move(window19X, window19Y, window19W, window19H);
		this._ServanBuy19.setHandler('ok19', this.onIndexOkBuy19.bind(this));	
        this.addWindow(this._ServanBuy19);
		if (Windowselec === "false") {this._ServanBuy19.select(-1);};
    };
Scene_ServanBuy3.prototype.createServanBuy20 = function(){
        this._ServanBuy20 = new Window_ServanBuy20(0, 0);
		this._ServanBuy20.move(window20X, window20Y, window20W, window20H);
		this._ServanBuy20.setHandler('ok20', this.onIndexOkBuy20.bind(this));	
        this.addWindow(this._ServanBuy20);
		if (Windowselec === "false") {this._ServanBuy20.select(-1);};
    };	
Scene_ServanBuy3.prototype.createServanBuy21 = function(){
        this._ServanBuy21 = new Window_ServanBuy21(0, 0);
		this._ServanBuy21.move(window21X, window21Y, window21W, window21H);
		this._ServanBuy21.setHandler('ok21', this.onIndexOkBuy21.bind(this));	
        this.addWindow(this._ServanBuy21);
		if (Windowselec === "false") {this._ServanBuy21.select(-1);};
    };
Scene_ServanBuy3.prototype.createServanBuy22 = function(){
        this._ServanBuy22 = new Window_ServanBuy22(0, 0);
		this._ServanBuy22.move(window22X, window22Y, window22W, window22H);
		this._ServanBuy22.setHandler('ok22', this.onIndexOkBuy22.bind(this));	
        this.addWindow(this._ServanBuy22);
		if (Windowselec === "false") {this._ServanBuy22.select(-1);};
    };
Scene_ServanBuy3.prototype.createServanBuy23 = function(){
        this._ServanBuy23 = new Window_ServanBuy23(0, 0);
		this._ServanBuy23.move(window23X, window23Y, window23W, window23H);
		this._ServanBuy23.setHandler('ok23', this.onIndexOkBuy23.bind(this));	
        this.addWindow(this._ServanBuy23);
		if (Windowselec === "false") {this._ServanBuy23.select(-1);};
    };
Scene_ServanBuy3.prototype.createServanBuy24 = function(){
        this._ServanBuy24 = new Window_ServanBuy24(0, 0);
		this._ServanBuy24.move(window24X, window24Y, window24W, window24H);
		this._ServanBuy24.setHandler('ok24', this.onIndexOkBuy24.bind(this));	
        this.addWindow(this._ServanBuy24);
		if (Windowselec === "false") {this._ServanBuy24.select(-1);};
    };
Scene_ServanBuy3.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP3X, windowP3Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP3X, windowP3Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP3X, windowP3Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP3X, windowP3Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP3X, windowP3Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP3X, windowP3Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP3X, windowP3Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP3X, windowP3Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP3X, windowP3Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP3X, windowP3Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP3X, windowP3Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP3X, windowP3Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP3X, windowP3Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP3X, windowP3Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP3X, windowP3Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(2);
    };
Scene_ServanBuy3.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP3EX, windowP3EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);	
		if (Windowselec === "false") {this._ServanBuyEx.select(-1);};
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy3.prototype.onIndexOkBuy17 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window17);
};	
Scene_ServanBuy3.prototype.onIndexOkBuy18 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window18);
};
Scene_ServanBuy3.prototype.onIndexOkBuy19 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window19);
};
Scene_ServanBuy3.prototype.onIndexOkBuy20 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window20);
};
Scene_ServanBuy3.prototype.onIndexOkBuy21 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window21);
};
Scene_ServanBuy3.prototype.onIndexOkBuy22 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window22);
};
Scene_ServanBuy3.prototype.onIndexOkBuy23 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window23);
};
Scene_ServanBuy3.prototype.onIndexOkBuy24 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window24);
};

Scene_ServanBuy3.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL4 = function(){
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL5 = function(){
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL6 = function(){
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL7 = function(){
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL8 = function(){
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL9 = function(){
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL10 = function(){
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL11 = function(){
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL12 = function(){
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL13 = function(){
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL14 = function(){
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy3.prototype.onIndexOkBuyL15 = function(){
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy3.prototype.onIndexOkBuyEx = function(){
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy17(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy17.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy17.prototype.constructor = Window_ServanBuy17;
    Window_ServanBuy17.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1017, window17X+Windowiconx, window17Y+Windowicony);
	this.drawIcon(1018, window18X+Windowiconx, window18Y+Windowicony);
	this.drawIcon(1019, window19X+Windowiconx, window19Y+Windowicony);
	this.drawIcon(1020, window20X+Windowiconx, window20Y+Windowicony);
	this.drawIcon(1021, window21X+Windowiconx, window21Y+Windowicony);
	this.drawIcon(1022, window22X+Windowiconx, window22Y+Windowicony);
	this.drawIcon(1023, window23X+Windowiconx, window23Y+Windowicony);
	this.drawIcon(1024, window24X+Windowiconx, window24Y+Windowicony);
    };	
	
	function Window_ServanBuy18(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy18.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy18.prototype.constructor = Window_ServanBuy18;
    Window_ServanBuy18.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy19(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy19.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy19.prototype.constructor = Window_ServanBuy19;
    Window_ServanBuy19.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy20(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy20.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy20.prototype.constructor = Window_ServanBuy20;
    Window_ServanBuy20.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy21(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy21.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy21.prototype.constructor = Window_ServanBuy21;
    Window_ServanBuy21.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy22(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy22.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy22.prototype.constructor = Window_ServanBuy22;
    Window_ServanBuy22.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy23(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy23.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy23.prototype.constructor = Window_ServanBuy23;
    Window_ServanBuy23.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy24(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy24.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy24.prototype.constructor = Window_ServanBuy24;
    Window_ServanBuy24.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy17.prototype.makeCommandList = function(){
	this.addCommand(name17, 'ok17', true);
    };

    Window_ServanBuy18.prototype.makeCommandList = function(){
	this.addCommand(name18, 'ok18', true);
    };
	
    Window_ServanBuy19.prototype.makeCommandList = function(){
	this.addCommand(name19, 'ok19', true);
    };
	
    Window_ServanBuy20.prototype.makeCommandList = function(){
	this.addCommand(name20, 'ok20', true);
    };
	
	Window_ServanBuy21.prototype.makeCommandList = function(){
	this.addCommand(name21, 'ok21', true);
    };

	Window_ServanBuy22.prototype.makeCommandList = function(){
	this.addCommand(name22, 'ok22', true);
    };
	
	Window_ServanBuy23.prototype.makeCommandList = function(){
	this.addCommand(name23, 'ok23', true);
    };
	Window_ServanBuy24.prototype.makeCommandList = function(){
	this.addCommand(name24, 'ok24', true);
    };

Window_ServanBuy17.prototype.normalColor = function() {return this.textColor(color17);};
Window_ServanBuy18.prototype.normalColor = function() {return this.textColor(color18);};
Window_ServanBuy19.prototype.normalColor = function() {return this.textColor(color19);};
Window_ServanBuy20.prototype.normalColor = function() {return this.textColor(color20);};
Window_ServanBuy21.prototype.normalColor = function() {return this.textColor(color21);};
Window_ServanBuy22.prototype.normalColor = function() {return this.textColor(color22);};
Window_ServanBuy23.prototype.normalColor = function() {return this.textColor(color23);};
Window_ServanBuy24.prototype.normalColor = function() {return this.textColor(color24);};



//===========================================================================set Scene4

function Scene_ServanBuy4(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy4.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy4.prototype.constructor = Scene_ServanBuy4;

    Scene_ServanBuy4.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy4.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window25OF)) {this.createServanBuy25();};
	if ($gameSwitches.value(Window26OF)) {this.createServanBuy26();};
	if ($gameSwitches.value(Window27OF)) {this.createServanBuy27();};
	if ($gameSwitches.value(Window28OF)) {this.createServanBuy28();};
	if ($gameSwitches.value(Window29OF)) {this.createServanBuy29();};
	if ($gameSwitches.value(Window30OF)) {this.createServanBuy30();};
	if ($gameSwitches.value(Window31OF)) {this.createServanBuy31();};
	if ($gameSwitches.value(Window32OF)) {this.createServanBuy32();};
	if (WindowSL1 === "true") {this.createServanBuyL1();};
    this.createMainWindow4();
	if ($gameSwitches.value(Window25OF)) {this._mainWindow4.drawIcon(IconCap25, window25X+Windowiconx, window25Y+Windowicony, this._mainWindow4.width);};
	if ($gameSwitches.value(Window26OF)) {this._mainWindow4.drawIcon(IconCap26, window26X+Windowiconx, window26Y+Windowicony, this._mainWindow4.width);};
	if ($gameSwitches.value(Window27OF)) {this._mainWindow4.drawIcon(IconCap27, window27X+Windowiconx, window27Y+Windowicony, this._mainWindow4.width);};
	if ($gameSwitches.value(Window28OF)) {this._mainWindow4.drawIcon(IconCap28, window28X+Windowiconx, window28Y+Windowicony, this._mainWindow4.width);};
	if ($gameSwitches.value(Window29OF)) {this._mainWindow4.drawIcon(IconCap29, window29X+Windowiconx, window29Y+Windowicony, this._mainWindow4.width);};
	if ($gameSwitches.value(Window30OF)) {this._mainWindow4.drawIcon(IconCap30, window30X+Windowiconx, window30Y+Windowicony, this._mainWindow4.width);};
	if ($gameSwitches.value(Window31OF)) {this._mainWindow4.drawIcon(IconCap31, window31X+Windowiconx, window31Y+Windowicony, this._mainWindow4.width);};
	if ($gameSwitches.value(Window32OF)) {this._mainWindow4.drawIcon(IconCap32, window32X+Windowiconx, window32Y+Windowicony, this._mainWindow4.width);};
	
	
//รูป icon

	this._mainWindow4.opacity = 0;	
	this.createServanBuyEx();
};



Scene_ServanBuy4.prototype.createMainWindow4 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow4 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow4);
		
    };	

// สร้างหน้าต่างรายการ
Scene_ServanBuy4.prototype.createServanBuy25 = function(){
        this._ServanBuy25 = new Window_ServanBuy25(0, 0);
		this._ServanBuy25.move(window25X, window25Y, window25W, window25H);
		this._ServanBuy25.setHandler('ok25', this.onIndexOkBuy25.bind(this));
        this.addWindow(this._ServanBuy25);	
		if (Windowselec === "false") {this._ServanBuy25.select(-1);};
    };
Scene_ServanBuy4.prototype.createServanBuy26 = function(){
        this._ServanBuy26 = new Window_ServanBuy26(0, 0);
		this._ServanBuy26.move(window26X, window26Y, window26W, window26H);
		this._ServanBuy26.setHandler('ok26', this.onIndexOkBuy26.bind(this));	
        this.addWindow(this._ServanBuy26);
		if (Windowselec === "false") {this._ServanBuy26.select(-1);};
    };
Scene_ServanBuy4.prototype.createServanBuy27 = function(){
        this._ServanBuy27 = new Window_ServanBuy27(0, 0);
		this._ServanBuy27.move(window27X, window27Y, window27W, window27H);
		this._ServanBuy27.setHandler('ok27', this.onIndexOkBuy27.bind(this));	
        this.addWindow(this._ServanBuy27);
		if (Windowselec === "false") {this._ServanBuy27.select(-1);};
    };
Scene_ServanBuy4.prototype.createServanBuy28 = function(){
        this._ServanBuy28 = new Window_ServanBuy28(0, 0);
		this._ServanBuy28.move(window28X, window28Y, window28W, window28H);
		this._ServanBuy28.setHandler('ok28', this.onIndexOkBuy28.bind(this));	
        this.addWindow(this._ServanBuy28);
		if (Windowselec === "false") {this._ServanBuy28.select(-1);};
    };	
Scene_ServanBuy4.prototype.createServanBuy29 = function(){
        this._ServanBuy29 = new Window_ServanBuy29(0, 0);
		this._ServanBuy29.move(window29X, window29Y, window29W, window29H);
		this._ServanBuy29.setHandler('ok29', this.onIndexOkBuy29.bind(this));	
        this.addWindow(this._ServanBuy29);
		if (Windowselec === "false") {this._ServanBuy29.select(-1);};
    };
Scene_ServanBuy4.prototype.createServanBuy30 = function(){
        this._ServanBuy30 = new Window_ServanBuy30(0, 0);
		this._ServanBuy30.move(window30X, window30Y, window30W, window30H);
		this._ServanBuy30.setHandler('ok30', this.onIndexOkBuy30.bind(this));	
        this.addWindow(this._ServanBuy30);
		if (Windowselec === "false") {this._ServanBuy30.select(-1);};
    };
Scene_ServanBuy4.prototype.createServanBuy31 = function(){
        this._ServanBuy31 = new Window_ServanBuy31(0, 0);
		this._ServanBuy31.move(window31X, window31Y, window31W, window31H);
		this._ServanBuy31.setHandler('ok31', this.onIndexOkBuy31.bind(this));	
        this.addWindow(this._ServanBuy31);
		if (Windowselec === "false") {this._ServanBuy31.select(-1);};
    };
Scene_ServanBuy4.prototype.createServanBuy32 = function(){
        this._ServanBuy32 = new Window_ServanBuy32(0, 0);
		this._ServanBuy32.move(window32X, window32Y, window32W, window32H);
		this._ServanBuy32.setHandler('ok32', this.onIndexOkBuy32.bind(this));	
        this.addWindow(this._ServanBuy32);
		if (Windowselec === "false") {this._ServanBuy32.select(-1);};
    };
Scene_ServanBuy4.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP4X, windowP4Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP4X, windowP4Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP4X, windowP4Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP4X, windowP4Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP4X, windowP4Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP4X, windowP4Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP4X, windowP4Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP4X, windowP4Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP4X, windowP4Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP4X, windowP4Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP4X, windowP4Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP4X, windowP4Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP4X, windowP4Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP4X, windowP4Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP4X, windowP4Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(3);
    };
Scene_ServanBuy4.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP4EX, windowP4EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);
       	if (Windowselec === "false") {this._ServanBuyEx.select(-1);};		
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy4.prototype.onIndexOkBuy25 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window25);
};	
Scene_ServanBuy4.prototype.onIndexOkBuy26 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window26);
};
Scene_ServanBuy4.prototype.onIndexOkBuy27 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window27);
};
Scene_ServanBuy4.prototype.onIndexOkBuy28 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window28);
};
Scene_ServanBuy4.prototype.onIndexOkBuy29 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window29);
};
Scene_ServanBuy4.prototype.onIndexOkBuy30 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window30);
};
Scene_ServanBuy4.prototype.onIndexOkBuy31 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window31);
};
Scene_ServanBuy4.prototype.onIndexOkBuy32 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window32);
};

Scene_ServanBuy4.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy4.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy4.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy25(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy25.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy25.prototype.constructor = Window_ServanBuy25;
    Window_ServanBuy25.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1025, window25X+Windowiconx, window25Y+Windowicony);
	this.drawIcon(1026, window26X+Windowiconx, window26Y+Windowicony);
	this.drawIcon(1027, window27X+Windowiconx, window27Y+Windowicony);
	this.drawIcon(1028, window28X+Windowiconx, window28Y+Windowicony);
	this.drawIcon(1029, window29X+Windowiconx, window29Y+Windowicony);
	this.drawIcon(1030, window30X+Windowiconx, window30Y+Windowicony);
	this.drawIcon(1031, window31X+Windowiconx, window31Y+Windowicony);
	this.drawIcon(1032, window32X+Windowiconx, window32Y+Windowicony);
    };	
	
	function Window_ServanBuy26(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy26.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy26.prototype.constructor = Window_ServanBuy26;
    Window_ServanBuy26.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy27(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy27.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy27.prototype.constructor = Window_ServanBuy27;
    Window_ServanBuy19.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy28(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy28.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy28.prototype.constructor = Window_ServanBuy28;
    Window_ServanBuy28.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy29(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy29.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy29.prototype.constructor = Window_ServanBuy29;
    Window_ServanBuy29.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy30(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy30.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy30.prototype.constructor = Window_ServanBuy30;
    Window_ServanBuy30.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy31(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy31.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy31.prototype.constructor = Window_ServanBuy31;
    Window_ServanBuy31.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy32(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy32.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy32.prototype.constructor = Window_ServanBuy32;
    Window_ServanBuy32.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy25.prototype.makeCommandList = function(){
	this.addCommand(name25, 'ok25', true);
    };

    Window_ServanBuy26.prototype.makeCommandList = function(){
	this.addCommand(name26, 'ok26', true);
    };
	
    Window_ServanBuy27.prototype.makeCommandList = function(){
	this.addCommand(name27, 'ok27', true);
    };
	
    Window_ServanBuy28.prototype.makeCommandList = function(){
	this.addCommand(name28, 'ok28', true);
    };
	
	Window_ServanBuy29.prototype.makeCommandList = function(){
	this.addCommand(name29, 'ok29', true);
    };

	Window_ServanBuy30.prototype.makeCommandList = function(){
	this.addCommand(name30, 'ok30', true);
    };
	
	Window_ServanBuy31.prototype.makeCommandList = function(){
	this.addCommand(name31, 'ok31', true);
    };
	Window_ServanBuy32.prototype.makeCommandList = function(){
	this.addCommand(name32, 'ok32', true);
    };

Window_ServanBuy25.prototype.normalColor = function() {return this.textColor(color25);};
Window_ServanBuy26.prototype.normalColor = function() {return this.textColor(color26);};
Window_ServanBuy27.prototype.normalColor = function() {return this.textColor(color27);};
Window_ServanBuy28.prototype.normalColor = function() {return this.textColor(color28);};
Window_ServanBuy29.prototype.normalColor = function() {return this.textColor(color29);};
Window_ServanBuy30.prototype.normalColor = function() {return this.textColor(color30);};
Window_ServanBuy31.prototype.normalColor = function() {return this.textColor(color31);};
Window_ServanBuy32.prototype.normalColor = function() {return this.textColor(color32);};



//===========================================================================set Scene5

function Scene_ServanBuy5(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy5.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy5.prototype.constructor = Scene_ServanBuy5;

    Scene_ServanBuy5.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy5.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window33OF)) {this.createServanBuy33();};
	if ($gameSwitches.value(Window34OF)) {this.createServanBuy34();};
	if ($gameSwitches.value(Window35OF)) {this.createServanBuy35();};
	if ($gameSwitches.value(Window36OF)) {this.createServanBuy36();};
	if ($gameSwitches.value(Window37OF)) {this.createServanBuy37();};
	if ($gameSwitches.value(Window38OF)) {this.createServanBuy38();};
	if ($gameSwitches.value(Window39OF)) {this.createServanBuy39();};
	if ($gameSwitches.value(Window40OF)) {this.createServanBuy40();};
	if (WindowSL1 === "true") {this.createServanBuyL1();};
	this.createMainWindow5();
	if ($gameSwitches.value(Window33OF)) {this._mainWindow5.drawIcon(IconCap33, window33X+Windowiconx, window33Y+Windowicony, this._mainWindow5.width);};
	if ($gameSwitches.value(Window34OF)) {this._mainWindow5.drawIcon(IconCap34, window34X+Windowiconx, window34Y+Windowicony, this._mainWindow5.width);};
	if ($gameSwitches.value(Window35OF)) {this._mainWindow5.drawIcon(IconCap35, window35X+Windowiconx, window35Y+Windowicony, this._mainWindow5.width);};
	if ($gameSwitches.value(Window36OF)) {this._mainWindow5.drawIcon(IconCap36, window36X+Windowiconx, window36Y+Windowicony, this._mainWindow5.width);};
	if ($gameSwitches.value(Window37OF)) {this._mainWindow5.drawIcon(IconCap37, window37X+Windowiconx, window37Y+Windowicony, this._mainWindow5.width);};
	if ($gameSwitches.value(Window38OF)) {this._mainWindow5.drawIcon(IconCap38, window38X+Windowiconx, window38Y+Windowicony, this._mainWindow5.width);};
	if ($gameSwitches.value(Window39OF)) {this._mainWindow5.drawIcon(IconCap39, window39X+Windowiconx, window39Y+Windowicony, this._mainWindow5.width);};
	if ($gameSwitches.value(Window40OF)) {this._mainWindow5.drawIcon(IconCap40, window40X+Windowiconx, window40Y+Windowicony, this._mainWindow5.width);};

	
//รูป icon

	this._mainWindow5.opacity = 0;	
	this.createServanBuyEx();
};



Scene_ServanBuy5.prototype.createMainWindow5 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow5 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow5);
		
    };	

// สร้างหน้าต่างรายการ
Scene_ServanBuy5.prototype.createServanBuy33 = function(){
        this._ServanBuy33 = new Window_ServanBuy33(0, 0);
		this._ServanBuy33.move(window33X, window33Y, window33W, window33H);
		this._ServanBuy33.setHandler('ok33', this.onIndexOkBuy33.bind(this));
        this.addWindow(this._ServanBuy33);	
		if (Windowselec === "false") {this._ServanBuy33.select(-1);};
    };
Scene_ServanBuy5.prototype.createServanBuy34 = function(){
        this._ServanBuy34 = new Window_ServanBuy34(0, 0);
		this._ServanBuy34.move(window34X, window34Y, window34W, window34H);
		this._ServanBuy34.setHandler('ok34', this.onIndexOkBuy34.bind(this));	
        this.addWindow(this._ServanBuy34);
		if (Windowselec === "false") {this._ServanBuy34.select(-1);};
    };
Scene_ServanBuy5.prototype.createServanBuy35 = function(){
        this._ServanBuy35 = new Window_ServanBuy35(0, 0);
		this._ServanBuy35.move(window35X, window35Y, window35W, window35H);
		this._ServanBuy35.setHandler('ok35', this.onIndexOkBuy35.bind(this));	
        this.addWindow(this._ServanBuy35);
		if (Windowselec === "false") {this._ServanBuy35.select(-1);};
    };
Scene_ServanBuy5.prototype.createServanBuy36 = function(){
        this._ServanBuy36 = new Window_ServanBuy36(0, 0);
		this._ServanBuy36.move(window36X, window36Y, window36W, window36H);
		this._ServanBuy36.setHandler('ok36', this.onIndexOkBuy36.bind(this));	
        this.addWindow(this._ServanBuy36);
		if (Windowselec === "false") {this._ServanBuy36.select(-1);};
    };	
Scene_ServanBuy5.prototype.createServanBuy37 = function(){
        this._ServanBuy37 = new Window_ServanBuy37(0, 0);
		this._ServanBuy37.move(window37X, window37Y, window37W, window37H);
		this._ServanBuy37.setHandler('ok37', this.onIndexOkBuy37.bind(this));	
        this.addWindow(this._ServanBuy37);
		if (Windowselec === "false") {this._ServanBuy37.select(-1);};
    };
Scene_ServanBuy5.prototype.createServanBuy38 = function(){
        this._ServanBuy38 = new Window_ServanBuy38(0, 0);
		this._ServanBuy38.move(window38X, window38Y, window38W, window38H);
		this._ServanBuy38.setHandler('ok38', this.onIndexOkBuy38.bind(this));	
        this.addWindow(this._ServanBuy38);
		if (Windowselec === "false") {this._ServanBuy38.select(-1);};
    };
Scene_ServanBuy5.prototype.createServanBuy39 = function(){
        this._ServanBuy39 = new Window_ServanBuy39(0, 0);
		this._ServanBuy39.move(window39X, window39Y, window39W, window39H);
		this._ServanBuy39.setHandler('ok39', this.onIndexOkBuy39.bind(this));	
        this.addWindow(this._ServanBuy39);
		if (Windowselec === "false") {this._ServanBuy39.select(-1);};
    };
Scene_ServanBuy5.prototype.createServanBuy40 = function(){
        this._ServanBuy40 = new Window_ServanBuy40(0, 0);
		this._ServanBuy40.move(window40X, window40Y, window40W, window40H);
		this._ServanBuy40.setHandler('ok40', this.onIndexOkBuy40.bind(this));	
        this.addWindow(this._ServanBuy40);
		if (Windowselec === "false") {this._ServanBuy40.select(-1);};
    };
Scene_ServanBuy5.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP5X, windowP5Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP5X, windowP5Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP5X, windowP5Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP5X, windowP5Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP5X, windowP5Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP5X, windowP5Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP5X, windowP5Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP5X, windowP5Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP5X, windowP5Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP5X, windowP5Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP5X, windowP5Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP5X, windowP5Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP5X, windowP5Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP5X, windowP5Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP5X, windowP5Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(4);
    };
Scene_ServanBuy5.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP5EX, windowP5EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);	
		if (Windowselec === "false") {this._ServanBuyEx.select(-1);};
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy5.prototype.onIndexOkBuy33 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window33);
};	
Scene_ServanBuy5.prototype.onIndexOkBuy34 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window34);
};
Scene_ServanBuy5.prototype.onIndexOkBuy35 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window35);
};
Scene_ServanBuy5.prototype.onIndexOkBuy36 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window36);
};
Scene_ServanBuy5.prototype.onIndexOkBuy37 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window37);
};
Scene_ServanBuy5.prototype.onIndexOkBuy38 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window38);
};
Scene_ServanBuy5.prototype.onIndexOkBuy39 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window39);
};
Scene_ServanBuy5.prototype.onIndexOkBuy40 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window40);
};

Scene_ServanBuy5.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy5.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy5.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy33(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy33.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy33.prototype.constructor = Window_ServanBuy33;
    Window_ServanBuy33.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1033, window33X+Windowiconx, window33Y+Windowicony);
	this.drawIcon(1034, window34X+Windowiconx, window34Y+Windowicony);
	this.drawIcon(1035, window35X+Windowiconx, window35Y+Windowicony);
	this.drawIcon(1036, window36X+Windowiconx, window36Y+Windowicony);
	this.drawIcon(1037, window37X+Windowiconx, window37Y+Windowicony);
	this.drawIcon(1038, window38X+Windowiconx, window38Y+Windowicony);
	this.drawIcon(1039, window39X+Windowiconx, window39Y+Windowicony);
	this.drawIcon(1040, window40X+Windowiconx, window40Y+Windowicony);
    };	
	
	function Window_ServanBuy34(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy34.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy34.prototype.constructor = Window_ServanBuy34;
    Window_ServanBuy34.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy35(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy35.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy35.prototype.constructor = Window_ServanBuy35;
    Window_ServanBuy35.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy36(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy36.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy36.prototype.constructor = Window_ServanBuy36;
    Window_ServanBuy36.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy37(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy37.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy37.prototype.constructor = Window_ServanBuy37;
    Window_ServanBuy37.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy38(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy38.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy38.prototype.constructor = Window_ServanBuy38;
    Window_ServanBuy38.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy39(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy39.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy39.prototype.constructor = Window_ServanBuy39;
    Window_ServanBuy39.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy40(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy40.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy40.prototype.constructor = Window_ServanBuy40;
    Window_ServanBuy40.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy33.prototype.makeCommandList = function(){
	this.addCommand(name33, 'ok33', true);
    };

    Window_ServanBuy34.prototype.makeCommandList = function(){
	this.addCommand(name34, 'ok34', true);
    };
	
    Window_ServanBuy35.prototype.makeCommandList = function(){
	this.addCommand(name35, 'ok35', true);
    };
	
    Window_ServanBuy36.prototype.makeCommandList = function(){
	this.addCommand(name36, 'ok36', true);
    };
	
	Window_ServanBuy37.prototype.makeCommandList = function(){
	this.addCommand(name37, 'ok37', true);
    };

	Window_ServanBuy38.prototype.makeCommandList = function(){
	this.addCommand(name38, 'ok38', true);
    };
	
	Window_ServanBuy39.prototype.makeCommandList = function(){
	this.addCommand(name39, 'ok39', true);
    };
	Window_ServanBuy40.prototype.makeCommandList = function(){
	this.addCommand(name40, 'ok40', true);
    };

Window_ServanBuy33.prototype.normalColor = function() {return this.textColor(color33);};
Window_ServanBuy34.prototype.normalColor = function() {return this.textColor(color34);};
Window_ServanBuy35.prototype.normalColor = function() {return this.textColor(color35);};
Window_ServanBuy36.prototype.normalColor = function() {return this.textColor(color36);};
Window_ServanBuy37.prototype.normalColor = function() {return this.textColor(color37);};
Window_ServanBuy38.prototype.normalColor = function() {return this.textColor(color38);};
Window_ServanBuy39.prototype.normalColor = function() {return this.textColor(color39);};
Window_ServanBuy40.prototype.normalColor = function() {return this.textColor(color40);};



//===========================================================================set Scene6

function Scene_ServanBuy6(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy6.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy6.prototype.constructor = Scene_ServanBuy6;

    Scene_ServanBuy6.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy6.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window41OF)) {this.createServanBuy41();};
	if ($gameSwitches.value(Window42OF)) {this.createServanBuy42();};
	if ($gameSwitches.value(Window43OF)) {this.createServanBuy43();};
	if ($gameSwitches.value(Window44OF)) {this.createServanBuy44();};
	if ($gameSwitches.value(Window45OF)) {this.createServanBuy45();};
	if ($gameSwitches.value(Window46OF)) {this.createServanBuy46();};
	if ($gameSwitches.value(Window47OF)) {this.createServanBuy47();};
	if ($gameSwitches.value(Window48OF)) {this.createServanBuy48();};
	if (WindowSL1 === "true") {this.createServanBuyL1();};
	this.createMainWindow6();
	if ($gameSwitches.value(Window41OF)) {this._mainWindow6.drawIcon(IconCap41, window41X+Windowiconx, window41Y+Windowicony, this._mainWindow6.width);};
	if ($gameSwitches.value(Window42OF)) {this._mainWindow6.drawIcon(IconCap42, window42X+Windowiconx, window42Y+Windowicony, this._mainWindow6.width);};
	if ($gameSwitches.value(Window43OF)) {this._mainWindow6.drawIcon(IconCap43, window43X+Windowiconx, window43Y+Windowicony, this._mainWindow6.width);};
	if ($gameSwitches.value(Window44OF)) {this._mainWindow6.drawIcon(IconCap44, window44X+Windowiconx, window44Y+Windowicony, this._mainWindow6.width);};
	if ($gameSwitches.value(Window45OF)) {this._mainWindow6.drawIcon(IconCap45, window45X+Windowiconx, window45Y+Windowicony, this._mainWindow6.width);};
	if ($gameSwitches.value(Window46OF)) {this._mainWindow6.drawIcon(IconCap46, window46X+Windowiconx, window46Y+Windowicony, this._mainWindow6.width);};
	if ($gameSwitches.value(Window47OF)) {this._mainWindow6.drawIcon(IconCap47, window47X+Windowiconx, window47Y+Windowicony, this._mainWindow6.width);};
	if ($gameSwitches.value(Window48OF)) {this._mainWindow6.drawIcon(IconCap48, window48X+Windowiconx, window48Y+Windowicony, this._mainWindow6.width);};

	
//รูป icon

	this._mainWindow6.opacity = 0;		
	this.createServanBuyEx();
};



Scene_ServanBuy6.prototype.createMainWindow6 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow6 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow6);
		
    };	

// สร้างหน้าต่างรายการ
Scene_ServanBuy6.prototype.createServanBuy41 = function(){
        this._ServanBuy41 = new Window_ServanBuy41(0, 0);
		this._ServanBuy41.move(window41X, window41Y, window41W, window41H);
		this._ServanBuy41.setHandler('ok41', this.onIndexOkBuy41.bind(this));
        this.addWindow(this._ServanBuy41);	
		if (Windowselec === "false") {this._ServanBuy41.select(-1);};
    };
Scene_ServanBuy6.prototype.createServanBuy42 = function(){
        this._ServanBuy42 = new Window_ServanBuy42(0, 0);
		this._ServanBuy42.move(window42X, window42Y, window42W, window42H);
		this._ServanBuy42.setHandler('ok42', this.onIndexOkBuy42.bind(this));	
        this.addWindow(this._ServanBuy42);
		if (Windowselec === "false") {this._ServanBuy42.select(-1);};
    };
Scene_ServanBuy6.prototype.createServanBuy43 = function(){
        this._ServanBuy43 = new Window_ServanBuy43(0, 0);
		this._ServanBuy43.move(window43X, window43Y, window43W, window43H);
		this._ServanBuy43.setHandler('ok43', this.onIndexOkBuy43.bind(this));	
        this.addWindow(this._ServanBuy43);
		if (Windowselec === "false") {this._ServanBuy43.select(-1);};
    };
Scene_ServanBuy6.prototype.createServanBuy44 = function(){
        this._ServanBuy44 = new Window_ServanBuy44(0, 0);
		this._ServanBuy44.move(window44X, window44Y, window44W, window44H);
		this._ServanBuy44.setHandler('ok44', this.onIndexOkBuy44.bind(this));	
        this.addWindow(this._ServanBuy44);
		if (Windowselec === "false") {this._ServanBuy44.select(-1);};
    };	
Scene_ServanBuy6.prototype.createServanBuy45 = function(){
        this._ServanBuy45 = new Window_ServanBuy45(0, 0);
		this._ServanBuy45.move(window45X, window45Y, window45W, window45H);
		this._ServanBuy45.setHandler('ok45', this.onIndexOkBuy45.bind(this));	
        this.addWindow(this._ServanBuy45);
		if (Windowselec === "false") {this._ServanBuy45.select(-1);};
    };
Scene_ServanBuy6.prototype.createServanBuy46 = function(){
        this._ServanBuy46 = new Window_ServanBuy46(0, 0);
		this._ServanBuy46.move(window46X, window46Y, window46W, window46H);
		this._ServanBuy46.setHandler('ok46', this.onIndexOkBuy46.bind(this));	
        this.addWindow(this._ServanBuy46);
		if (Windowselec === "false") {this._ServanBuy46.select(-1);};
    };
Scene_ServanBuy6.prototype.createServanBuy47 = function(){
        this._ServanBuy47 = new Window_ServanBuy47(0, 0);
		this._ServanBuy47.move(window47X, window47Y, window47W, window47H);
		this._ServanBuy47.setHandler('ok47', this.onIndexOkBuy47.bind(this));	
        this.addWindow(this._ServanBuy47);
		if (Windowselec === "false") {this._ServanBuy47.select(-1);};
    };
Scene_ServanBuy6.prototype.createServanBuy48 = function(){
        this._ServanBuy48 = new Window_ServanBuy48(0, 0);
		this._ServanBuy48.move(window48X, window48Y, window48W, window48H);
		this._ServanBuy48.setHandler('ok48', this.onIndexOkBuy48.bind(this));	
        this.addWindow(this._ServanBuy48);
		if (Windowselec === "false") {this._ServanBuy48.select(-1);};
    };
Scene_ServanBuy6.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP6X, windowP6Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP6X, windowP6Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP6X, windowP6Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP6X, windowP6Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP6X, windowP6Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP6X, windowP6Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP6X, windowP6Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP6X, windowP6Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP6X, windowP6Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP6X, windowP6Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP6X, windowP6Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP6X, windowP6Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP6X, windowP6Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP6X, windowP6Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP6X, windowP6Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(5);
    };
Scene_ServanBuy6.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP6EX, windowP6EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);	
		if (Windowselec === "false") {this._ServanBuyEx.select(-1);};
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy6.prototype.onIndexOkBuy41 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window41);
};	
Scene_ServanBuy6.prototype.onIndexOkBuy42 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window42);
};
Scene_ServanBuy6.prototype.onIndexOkBuy43 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window43);
};
Scene_ServanBuy6.prototype.onIndexOkBuy44 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window44);
};
Scene_ServanBuy6.prototype.onIndexOkBuy45 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window45);
};
Scene_ServanBuy6.prototype.onIndexOkBuy46 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window46);
};
Scene_ServanBuy6.prototype.onIndexOkBuy47 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window47);
};
Scene_ServanBuy6.prototype.onIndexOkBuy48 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window48);
};

Scene_ServanBuy6.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy6.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy6.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy41(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy41.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy41.prototype.constructor = Window_ServanBuy41;
    Window_ServanBuy41.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1041, window41X+Windowiconx, window41Y+Windowicony);
	this.drawIcon(1042, window42X+Windowiconx, window42Y+Windowicony);
	this.drawIcon(1043, window43X+Windowiconx, window43Y+Windowicony);
	this.drawIcon(1044, window44X+Windowiconx, window44Y+Windowicony);
	this.drawIcon(1045, window45X+Windowiconx, window45Y+Windowicony);
	this.drawIcon(1046, window46X+Windowiconx, window46Y+Windowicony);
	this.drawIcon(1047, window47X+Windowiconx, window47Y+Windowicony);
	this.drawIcon(1048, window48X+Windowiconx, window48Y+Windowicony);
    };	
	
	function Window_ServanBuy42(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy42.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy42.prototype.constructor = Window_ServanBuy42;
    Window_ServanBuy42.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy43(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy43.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy43.prototype.constructor = Window_ServanBuy43;
    Window_ServanBuy43.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy44(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy44.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy44.prototype.constructor = Window_ServanBuy44;
    Window_ServanBuy44.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy45(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy45.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy45.prototype.constructor = Window_ServanBuy45;
    Window_ServanBuy45.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy46(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy46.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy46.prototype.constructor = Window_ServanBuy46;
    Window_ServanBuy46.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy47(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy47.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy47.prototype.constructor = Window_ServanBuy47;
    Window_ServanBuy47.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy48(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy48.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy48.prototype.constructor = Window_ServanBuy48;
    Window_ServanBuy48.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy41.prototype.makeCommandList = function(){
	this.addCommand(name41, 'ok41', true);
    };

    Window_ServanBuy42.prototype.makeCommandList = function(){
	this.addCommand(name42, 'ok42', true);
    };
	
    Window_ServanBuy43.prototype.makeCommandList = function(){
	this.addCommand(name43, 'ok43', true);
    };
	
    Window_ServanBuy44.prototype.makeCommandList = function(){
	this.addCommand(name44, 'ok44', true);
    };
	
	Window_ServanBuy45.prototype.makeCommandList = function(){
	this.addCommand(name45, 'ok45', true);
    };

	Window_ServanBuy46.prototype.makeCommandList = function(){
	this.addCommand(name46, 'ok46', true);
    };
	
	Window_ServanBuy47.prototype.makeCommandList = function(){
	this.addCommand(name47, 'ok47', true);
    };
	Window_ServanBuy48.prototype.makeCommandList = function(){
	this.addCommand(name48, 'ok48', true);
    };

Window_ServanBuy41.prototype.normalColor = function() {return this.textColor(color41);};
Window_ServanBuy42.prototype.normalColor = function() {return this.textColor(color42);};
Window_ServanBuy43.prototype.normalColor = function() {return this.textColor(color43);};
Window_ServanBuy44.prototype.normalColor = function() {return this.textColor(color44);};
Window_ServanBuy45.prototype.normalColor = function() {return this.textColor(color45);};
Window_ServanBuy46.prototype.normalColor = function() {return this.textColor(color46);};
Window_ServanBuy47.prototype.normalColor = function() {return this.textColor(color47);};
Window_ServanBuy48.prototype.normalColor = function() {return this.textColor(color48);};



//===========================================================================set Scene7

function Scene_ServanBuy7(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy7.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy7.prototype.constructor = Scene_ServanBuy7;

    Scene_ServanBuy7.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy7.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window49OF)) {this.createServanBuy49();};
	if ($gameSwitches.value(Window50OF)) {this.createServanBuy50();};
	if ($gameSwitches.value(Window51OF)) {this.createServanBuy51();};
	if ($gameSwitches.value(Window52OF)) {this.createServanBuy52();};
	if ($gameSwitches.value(Window53OF)) {this.createServanBuy53();};
	if ($gameSwitches.value(Window54OF)) {this.createServanBuy54();};
	if ($gameSwitches.value(Window55OF)) {this.createServanBuy55();};
	if ($gameSwitches.value(Window56OF)) {this.createServanBuy56();};
	if (WindowSL1 === "true") {this.createServanBuyL1();};
	this.createMainWindow7();
	if ($gameSwitches.value(Window49OF)) {this._mainWindow7.drawIcon(IconCap49, window49X+Windowiconx, window49Y+Windowicony, this._mainWindow7.width);};
	if ($gameSwitches.value(Window50OF)) {this._mainWindow7.drawIcon(IconCap50, window50X+Windowiconx, window50Y+Windowicony, this._mainWindow7.width);};
	if ($gameSwitches.value(Window51OF)) {this._mainWindow7.drawIcon(IconCap51, window51X+Windowiconx, window51Y+Windowicony, this._mainWindow7.width);};
	if ($gameSwitches.value(Window52OF)) {this._mainWindow7.drawIcon(IconCap52, window52X+Windowiconx, window52Y+Windowicony, this._mainWindow7.width);};
	if ($gameSwitches.value(Window53OF)) {this._mainWindow7.drawIcon(IconCap53, window53X+Windowiconx, window53Y+Windowicony, this._mainWindow7.width);};
	if ($gameSwitches.value(Window54OF)) {this._mainWindow7.drawIcon(IconCap54, window54X+Windowiconx, window54Y+Windowicony, this._mainWindow7.width);};
	if ($gameSwitches.value(Window55OF)) {this._mainWindow7.drawIcon(IconCap55, window55X+Windowiconx, window55Y+Windowicony, this._mainWindow7.width);};
	if ($gameSwitches.value(Window56OF)) {this._mainWindow7.drawIcon(IconCap56, window56X+Windowiconx, window56Y+Windowicony, this._mainWindow7.width);};

	
//รูป icon

	this._mainWindow7.opacity = 0;		
	this.createServanBuyEx();
};



Scene_ServanBuy7.prototype.createMainWindow7 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow7 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow7);
		
    };	

// สร้างหน้าต่างรายการ
Scene_ServanBuy7.prototype.createServanBuy49 = function(){
        this._ServanBuy49 = new Window_ServanBuy49(0, 0);
		this._ServanBuy49.move(window49X, window49Y, window49W, window49H);
		this._ServanBuy49.setHandler('ok49', this.onIndexOkBuy49.bind(this));
        this.addWindow(this._ServanBuy49);	
		if (Windowselec === "false") {this._ServanBuy49.select(-1);};
    };
Scene_ServanBuy7.prototype.createServanBuy50 = function(){
        this._ServanBuy50 = new Window_ServanBuy50(0, 0);
		this._ServanBuy50.move(window50X, window50Y, window50W, window50H);
		this._ServanBuy50.setHandler('ok50', this.onIndexOkBuy50.bind(this));	
        this.addWindow(this._ServanBuy50);
		if (Windowselec === "false") {this._ServanBuy50.select(-1);};
    };
Scene_ServanBuy7.prototype.createServanBuy51 = function(){
        this._ServanBuy51 = new Window_ServanBuy51(0, 0);
		this._ServanBuy51.move(window51X, window51Y, window51W, window51H);
		this._ServanBuy51.setHandler('ok51', this.onIndexOkBuy51.bind(this));	
        this.addWindow(this._ServanBuy51);
		if (Windowselec === "false") {this._ServanBuy51.select(-1);};
    };
Scene_ServanBuy7.prototype.createServanBuy52 = function(){
        this._ServanBuy52 = new Window_ServanBuy52(0, 0);
		this._ServanBuy52.move(window52X, window52Y, window52W, window52H);
		this._ServanBuy52.setHandler('ok52', this.onIndexOkBuy52.bind(this));	
        this.addWindow(this._ServanBuy52);
		if (Windowselec === "false") {this._ServanBuy52.select(-1);};
    };	
Scene_ServanBuy7.prototype.createServanBuy53 = function(){
        this._ServanBuy53 = new Window_ServanBuy53(0, 0);
		this._ServanBuy53.move(window53X, window53Y, window53W, window53H);
		this._ServanBuy53.setHandler('ok53', this.onIndexOkBuy53.bind(this));	
        this.addWindow(this._ServanBuy53);
		if (Windowselec === "false") {this._ServanBuy53.select(-1);};
    };
Scene_ServanBuy7.prototype.createServanBuy54 = function(){
        this._ServanBuy54 = new Window_ServanBuy54(0, 0);
		this._ServanBuy54.move(window54X, window54Y, window54W, window54H);
		this._ServanBuy54.setHandler('ok54', this.onIndexOkBuy54.bind(this));	
        this.addWindow(this._ServanBuy54);
		if (Windowselec === "false") {this._ServanBuy54.select(-1);};
    };
Scene_ServanBuy7.prototype.createServanBuy55 = function(){
        this._ServanBuy55 = new Window_ServanBuy55(0, 0);
		this._ServanBuy55.move(window55X, window55Y, window55W, window55H);
		this._ServanBuy55.setHandler('ok55', this.onIndexOkBuy55.bind(this));	
        this.addWindow(this._ServanBuy55);
		if (Windowselec === "false") {this._ServanBuy55.select(-1);};
    };
Scene_ServanBuy7.prototype.createServanBuy56 = function(){
        this._ServanBuy56 = new Window_ServanBuy56(0, 0);
		this._ServanBuy56.move(window56X, window56Y, window56W, window56H);
		this._ServanBuy56.setHandler('ok56', this.onIndexOkBuy56.bind(this));	
        this.addWindow(this._ServanBuy56);
		if (Windowselec === "false") {this._ServanBuy56.select(-1);};
    };
Scene_ServanBuy7.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP7X, windowP7Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP7X, windowP7Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP7X, windowP7Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP7X, windowP7Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP7X, windowP7Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP7X, windowP7Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP7X, windowP7Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP7X, windowP7Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP7X, windowP7Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP7X, windowP7Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP7X, windowP7Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP7X, windowP7Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP7X, windowP7Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP7X, windowP7Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP7X, windowP7Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(6);
    };
Scene_ServanBuy7.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP7EX, windowP7EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);
        if (Windowselec === "false") {this._ServanBuyEx.select(-1);};		
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy7.prototype.onIndexOkBuy49 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window49);
};	
Scene_ServanBuy7.prototype.onIndexOkBuy50 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window50);
};
Scene_ServanBuy7.prototype.onIndexOkBuy51 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window51);
};
Scene_ServanBuy7.prototype.onIndexOkBuy52 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window52);
};
Scene_ServanBuy7.prototype.onIndexOkBuy53 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window53);
};
Scene_ServanBuy7.prototype.onIndexOkBuy54 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window54);
};
Scene_ServanBuy7.prototype.onIndexOkBuy55 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window55);
};
Scene_ServanBuy7.prototype.onIndexOkBuy56 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window56);
};

Scene_ServanBuy7.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy7.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy7.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy49(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy49.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy49.prototype.constructor = Window_ServanBuy49;
    Window_ServanBuy49.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1049, window49X+Windowiconx, window49Y+Windowicony);
	this.drawIcon(1050, window50X+Windowiconx, window50Y+Windowicony);
	this.drawIcon(1051, window51X+Windowiconx, window51Y+Windowicony);
	this.drawIcon(1052, window52X+Windowiconx, window52Y+Windowicony);
	this.drawIcon(1053, window53X+Windowiconx, window53Y+Windowicony);
	this.drawIcon(1054, window54X+Windowiconx, window54Y+Windowicony);
	this.drawIcon(1055, window55X+Windowiconx, window55Y+Windowicony);
	this.drawIcon(1056, window56X+Windowiconx, window56Y+Windowicony);
    };	
	
	function Window_ServanBuy50(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy50.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy50.prototype.constructor = Window_ServanBuy50;
    Window_ServanBuy50.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy51(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy51.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy51.prototype.constructor = Window_ServanBuy51;
    Window_ServanBuy51.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy52(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy52.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy52.prototype.constructor = Window_ServanBuy52;
    Window_ServanBuy52.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy53(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy53.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy53.prototype.constructor = Window_ServanBuy53;
    Window_ServanBuy53.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy54(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy54.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy54.prototype.constructor = Window_ServanBuy54;
    Window_ServanBuy54.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy55(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy55.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy55.prototype.constructor = Window_ServanBuy55;
    Window_ServanBuy55.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy56(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy56.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy56.prototype.constructor = Window_ServanBuy56;
    Window_ServanBuy56.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy49.prototype.makeCommandList = function(){
	this.addCommand(name49, 'ok49', true);
    };

    Window_ServanBuy50.prototype.makeCommandList = function(){
	this.addCommand(name50, 'ok50', true);
    };
	
    Window_ServanBuy51.prototype.makeCommandList = function(){
	this.addCommand(name51, 'ok51', true);
    };
	
    Window_ServanBuy52.prototype.makeCommandList = function(){
	this.addCommand(name52, 'ok52', true);
    };
	
	Window_ServanBuy53.prototype.makeCommandList = function(){
	this.addCommand(name53, 'ok53', true);
    };

	Window_ServanBuy54.prototype.makeCommandList = function(){
	this.addCommand(name54, 'ok54', true);
    };
	
	Window_ServanBuy55.prototype.makeCommandList = function(){
	this.addCommand(name55, 'ok55', true);
    };
	Window_ServanBuy56.prototype.makeCommandList = function(){
	this.addCommand(name56, 'ok56', true);
    };

Window_ServanBuy49.prototype.normalColor = function() {return this.textColor(color49);};
Window_ServanBuy50.prototype.normalColor = function() {return this.textColor(color50);};
Window_ServanBuy51.prototype.normalColor = function() {return this.textColor(color51);};
Window_ServanBuy52.prototype.normalColor = function() {return this.textColor(color52);};
Window_ServanBuy53.prototype.normalColor = function() {return this.textColor(color53);};
Window_ServanBuy54.prototype.normalColor = function() {return this.textColor(color54);};
Window_ServanBuy55.prototype.normalColor = function() {return this.textColor(color55);};
Window_ServanBuy56.prototype.normalColor = function() {return this.textColor(color56);};



//===========================================================================set Scene8

function Scene_ServanBuy8(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy8.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy8.prototype.constructor = Scene_ServanBuy8;

    Scene_ServanBuy8.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy8.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window57OF)) {this.createServanBuy57();};
	if ($gameSwitches.value(Window58OF)) {this.createServanBuy58();};
	if ($gameSwitches.value(Window59OF)) {this.createServanBuy59();};
	if ($gameSwitches.value(Window60OF)) {this.createServanBuy60();};
	if ($gameSwitches.value(Window61OF)) {this.createServanBuy61();};
	if ($gameSwitches.value(Window62OF)) {this.createServanBuy62();};
	if ($gameSwitches.value(Window63OF)) {this.createServanBuy63();};
	if ($gameSwitches.value(Window64OF)) {this.createServanBuy64();};
	if (WindowSL1 === "true") {this.createServanBuyL1();};
	this.createMainWindow8();
	if ($gameSwitches.value(Window57OF)) {this._mainWindow8.drawIcon(IconCap57, window57X+Windowiconx, window57Y+Windowicony, this._mainWindow8.width);};
	if ($gameSwitches.value(Window58OF)) {this._mainWindow8.drawIcon(IconCap58, window58X+Windowiconx, window58Y+Windowicony, this._mainWindow8.width);};
	if ($gameSwitches.value(Window59OF)) {this._mainWindow8.drawIcon(IconCap59, window59X+Windowiconx, window59Y+Windowicony, this._mainWindow8.width);};
	if ($gameSwitches.value(Window60OF)) {this._mainWindow8.drawIcon(IconCap60, window60X+Windowiconx, window60Y+Windowicony, this._mainWindow8.width);};
	if ($gameSwitches.value(Window61OF)) {this._mainWindow8.drawIcon(IconCap61, window61X+Windowiconx, window61Y+Windowicony, this._mainWindow8.width);};
	if ($gameSwitches.value(Window62OF)) {this._mainWindow8.drawIcon(IconCap62, window62X+Windowiconx, window62Y+Windowicony, this._mainWindow8.width);};
	if ($gameSwitches.value(Window63OF)) {this._mainWindow8.drawIcon(IconCap63, window63X+Windowiconx, window63Y+Windowicony, this._mainWindow8.width);};
	if ($gameSwitches.value(Window64OF)) {this._mainWindow8.drawIcon(IconCap64, window64X+Windowiconx, window64Y+Windowicony, this._mainWindow8.width);};

	
//รูป icon

	this._mainWindow8.opacity = 0;		
	this.createServanBuyEx();
};



Scene_ServanBuy8.prototype.createMainWindow8 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow8 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow8);
		
    };	

// สร้างหน้าต่างรายการ
Scene_ServanBuy8.prototype.createServanBuy57 = function(){
        this._ServanBuy57 = new Window_ServanBuy57(0, 0);
		this._ServanBuy57.move(window57X, window57Y, window57W, window57H);
		this._ServanBuy57.setHandler('ok57', this.onIndexOkBuy57.bind(this));
        this.addWindow(this._ServanBuy57);	
		if (Windowselec === "false") {this._ServanBuy57.select(-1);};
    };
Scene_ServanBuy8.prototype.createServanBuy58 = function(){
        this._ServanBuy58 = new Window_ServanBuy58(0, 0);
		this._ServanBuy58.move(window58X, window58Y, window58W, window58H);
		this._ServanBuy58.setHandler('ok58', this.onIndexOkBuy58.bind(this));	
        this.addWindow(this._ServanBuy58);
		if (Windowselec === "false") {this._ServanBuy58.select(-1);};
    };
Scene_ServanBuy8.prototype.createServanBuy59 = function(){
        this._ServanBuy59 = new Window_ServanBuy59(0, 0);
		this._ServanBuy59.move(window59X, window59Y, window59W, window59H);
		this._ServanBuy59.setHandler('ok59', this.onIndexOkBuy59.bind(this));	
        this.addWindow(this._ServanBuy59);
		if (Windowselec === "false") {this._ServanBuy59.select(-1);};
    };
Scene_ServanBuy8.prototype.createServanBuy60 = function(){
        this._ServanBuy60 = new Window_ServanBuy60(0, 0);
		this._ServanBuy60.move(window60X, window60Y, window60W, window60H);
		this._ServanBuy60.setHandler('ok60', this.onIndexOkBuy60.bind(this));	
        this.addWindow(this._ServanBuy60);
		if (Windowselec === "false") {this._ServanBuy60.select(-1);};
    };	
Scene_ServanBuy8.prototype.createServanBuy61 = function(){
        this._ServanBuy61 = new Window_ServanBuy61(0, 0);
		this._ServanBuy61.move(window61X, window61Y, window61W, window61H);
		this._ServanBuy61.setHandler('ok61', this.onIndexOkBuy61.bind(this));	
        this.addWindow(this._ServanBuy61);
		if (Windowselec === "false") {this._ServanBuy61.select(-1);};
    };
Scene_ServanBuy8.prototype.createServanBuy62 = function(){
        this._ServanBuy62 = new Window_ServanBuy62(0, 0);
		this._ServanBuy62.move(window62X, window62Y, window62W, window62H);
		this._ServanBuy62.setHandler('ok62', this.onIndexOkBuy62.bind(this));	
        this.addWindow(this._ServanBuy62);
		if (Windowselec === "false") {this._ServanBuy62.select(-1);};
    };
Scene_ServanBuy8.prototype.createServanBuy63 = function(){
        this._ServanBuy63 = new Window_ServanBuy63(0, 0);
		this._ServanBuy63.move(window63X, window63Y, window63W, window63H);
		this._ServanBuy63.setHandler('ok63', this.onIndexOkBuy63.bind(this));	
        this.addWindow(this._ServanBuy63);
		if (Windowselec === "false") {this._ServanBuy63.select(-1);};
    };
Scene_ServanBuy8.prototype.createServanBuy64 = function(){
        this._ServanBuy64 = new Window_ServanBuy64(0, 0);
		this._ServanBuy64.move(window64X, window64Y, window64W, window64H);
		this._ServanBuy64.setHandler('ok64', this.onIndexOkBuy64.bind(this));	
        this.addWindow(this._ServanBuy64);
		if (Windowselec === "false") {this._ServanBuy64.select(-1);};
    };
Scene_ServanBuy8.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP8X, windowP8Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP8X, windowP8Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP8X, windowP8Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP8X, windowP8Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP8X, windowP8Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP8X, windowP8Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP8X, windowP8Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP8X, windowP8Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP8X, windowP8Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP8X, windowP8Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP8X, windowP8Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP8X, windowP8Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP8X, windowP8Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP8X, windowP8Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP8X, windowP8Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(7);
    };
Scene_ServanBuy8.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP8EX, windowP8EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);	
		if (Windowselec === "false") {this._ServanBuyEx.select(-1);};
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy8.prototype.onIndexOkBuy57 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window57);
};	
Scene_ServanBuy8.prototype.onIndexOkBuy58 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window58);
};
Scene_ServanBuy8.prototype.onIndexOkBuy59 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window59);
};
Scene_ServanBuy8.prototype.onIndexOkBuy60 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window60);
};
Scene_ServanBuy8.prototype.onIndexOkBuy61 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window61);
};
Scene_ServanBuy8.prototype.onIndexOkBuy62 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window62);
};
Scene_ServanBuy8.prototype.onIndexOkBuy63 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window63);
};
Scene_ServanBuy8.prototype.onIndexOkBuy64 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window64);
};

Scene_ServanBuy8.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy8.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy8.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy57(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy57.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy57.prototype.constructor = Window_ServanBuy57;
    Window_ServanBuy57.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1057, window57X+Windowiconx, window57Y+Windowicony);
	this.drawIcon(1058, window58X+Windowiconx, window58Y+Windowicony);
	this.drawIcon(1059, window59X+Windowiconx, window59Y+Windowicony);
	this.drawIcon(1060, window60X+Windowiconx, window60Y+Windowicony);
	this.drawIcon(1061, window61X+Windowiconx, window61Y+Windowicony);
	this.drawIcon(1062, window62X+Windowiconx, window62Y+Windowicony);
	this.drawIcon(1063, window63X+Windowiconx, window63Y+Windowicony);
	this.drawIcon(1064, window64X+Windowiconx, window64Y+Windowicony);
    };	
	
	function Window_ServanBuy58(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy58.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy58.prototype.constructor = Window_ServanBuy58;
    Window_ServanBuy58.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy59(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy59.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy59.prototype.constructor = Window_ServanBuy59;
    Window_ServanBuy59.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy60(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy60.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy60.prototype.constructor = Window_ServanBuy60;
    Window_ServanBuy60.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy61(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy61.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy61.prototype.constructor = Window_ServanBuy61;
    Window_ServanBuy61.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy62(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy62.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy62.prototype.constructor = Window_ServanBuy62;
    Window_ServanBuy62.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy63(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy63.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy63.prototype.constructor = Window_ServanBuy63;
    Window_ServanBuy63.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy64(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy64.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy64.prototype.constructor = Window_ServanBuy64;
    Window_ServanBuy64.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy57.prototype.makeCommandList = function(){
	this.addCommand(name57, 'ok57', true);
    };

    Window_ServanBuy58.prototype.makeCommandList = function(){
	this.addCommand(name58, 'ok58', true);
    };
	
    Window_ServanBuy59.prototype.makeCommandList = function(){
	this.addCommand(name59, 'ok59', true);
    };
	
    Window_ServanBuy60.prototype.makeCommandList = function(){
	this.addCommand(name60, 'ok60', true);
    };
	
	Window_ServanBuy61.prototype.makeCommandList = function(){
	this.addCommand(name61, 'ok61', true);
    };

	Window_ServanBuy62.prototype.makeCommandList = function(){
	this.addCommand(name62, 'ok62', true);
    };
	
	Window_ServanBuy63.prototype.makeCommandList = function(){
	this.addCommand(name63, 'ok63', true);
    };
	Window_ServanBuy64.prototype.makeCommandList = function(){
	this.addCommand(name64, 'ok64', true);
    };

Window_ServanBuy57.prototype.normalColor = function() {return this.textColor(color57);};
Window_ServanBuy58.prototype.normalColor = function() {return this.textColor(color58);};
Window_ServanBuy59.prototype.normalColor = function() {return this.textColor(color59);};
Window_ServanBuy60.prototype.normalColor = function() {return this.textColor(color60);};
Window_ServanBuy61.prototype.normalColor = function() {return this.textColor(color61);};
Window_ServanBuy62.prototype.normalColor = function() {return this.textColor(color62);};
Window_ServanBuy63.prototype.normalColor = function() {return this.textColor(color63);};
Window_ServanBuy64.prototype.normalColor = function() {return this.textColor(color64);};



//===========================================================================set Scene9

function Scene_ServanBuy9(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy9.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy9.prototype.constructor = Scene_ServanBuy9;

    Scene_ServanBuy9.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy9.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window65OF)) {this.createServanBuy65();};
	if ($gameSwitches.value(Window66OF)) {this.createServanBuy66();};
	if ($gameSwitches.value(Window67OF)) {this.createServanBuy67();};
	if ($gameSwitches.value(Window68OF)) {this.createServanBuy68();};
	if ($gameSwitches.value(Window69OF)) {this.createServanBuy69();};
	if ($gameSwitches.value(Window70OF)) {this.createServanBuy70();};
	if ($gameSwitches.value(Window71OF)) {this.createServanBuy71();};
	if ($gameSwitches.value(Window72OF)) {this.createServanBuy72();};
	if (WindowSL1 === "true") {this.createServanBuyL1();};
	this.createMainWindow9();
	if ($gameSwitches.value(Window65OF)) {this._mainWindow9.drawIcon(IconCap65, window65X+Windowiconx, window65Y+Windowicony, this._mainWindow9.width);};
	if ($gameSwitches.value(Window66OF)) {this._mainWindow9.drawIcon(IconCap66, window66X+Windowiconx, window66Y+Windowicony, this._mainWindow9.width);};
	if ($gameSwitches.value(Window67OF)) {this._mainWindow9.drawIcon(IconCap67, window67X+Windowiconx, window67Y+Windowicony, this._mainWindow9.width);};
	if ($gameSwitches.value(Window68OF)) {this._mainWindow9.drawIcon(IconCap68, window68X+Windowiconx, window68Y+Windowicony, this._mainWindow9.width);};
	if ($gameSwitches.value(Window69OF)) {this._mainWindow9.drawIcon(IconCap69, window69X+Windowiconx, window69Y+Windowicony, this._mainWindow9.width);};
	if ($gameSwitches.value(Window70OF)) {this._mainWindow9.drawIcon(IconCap70, window70X+Windowiconx, window70Y+Windowicony, this._mainWindow9.width);};
	if ($gameSwitches.value(Window71OF)) {this._mainWindow9.drawIcon(IconCap71, window71X+Windowiconx, window71Y+Windowicony, this._mainWindow9.width);};
	if (W$gameSwitches.value(Window72OF)) {this._mainWindow9.drawIcon(IconCap72, window72X+Windowiconx, window72Y+Windowicony, this._mainWindow9.width);};


//รูป icon

	this._mainWindow9.opacity = 0;		
	this.createServanBuyEx();
};



Scene_ServanBuy9.prototype.createMainWindow9 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow9 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow9);
		
    };	

// สร้างหน้าต่างรายการ
Scene_ServanBuy9.prototype.createServanBuy65 = function(){
        this._ServanBuy65 = new Window_ServanBuy65(0, 0);
		this._ServanBuy65.move(window65X, window65Y, window65W, window65H);
		this._ServanBuy65.setHandler('ok65', this.onIndexOkBuy65.bind(this));
        this.addWindow(this._ServanBuy65);
        if (Windowselec === "false") {this._ServanBuy65.select(-1);};		
    };
Scene_ServanBuy9.prototype.createServanBuy66 = function(){
        this._ServanBuy66 = new Window_ServanBuy66(0, 0);
		this._ServanBuy66.move(window66X, window66Y, window66W, window66H);
		this._ServanBuy66.setHandler('ok66', this.onIndexOkBuy66.bind(this));	
        this.addWindow(this._ServanBuy66);
		if (Windowselec === "false") {this._ServanBuy66.select(-1);};
    };
Scene_ServanBuy9.prototype.createServanBuy67 = function(){
        this._ServanBuy67 = new Window_ServanBuy67(0, 0);
		this._ServanBuy67.move(window67X, window67Y, window67W, window67H);
		this._ServanBuy67.setHandler('ok67', this.onIndexOkBuy67.bind(this));	
        this.addWindow(this._ServanBuy67);
		if (Windowselec === "false") {this._ServanBuy67.select(-1);};
    };
Scene_ServanBuy9.prototype.createServanBuy68 = function(){
        this._ServanBuy68 = new Window_ServanBuy68(0, 0);
		this._ServanBuy68.move(window68X, window68Y, window68W, window68H);
		this._ServanBuy68.setHandler('ok68', this.onIndexOkBuy68.bind(this));	
        this.addWindow(this._ServanBuy68);
		if (Windowselec === "false") {this._ServanBuy68.select(-1);};
    };	
Scene_ServanBuy9.prototype.createServanBuy69 = function(){
        this._ServanBuy69 = new Window_ServanBuy69(0, 0);
		this._ServanBuy69.move(window69X, window69Y, window69W, window69H);
		this._ServanBuy69.setHandler('ok69', this.onIndexOkBuy69.bind(this));	
        this.addWindow(this._ServanBuy69);
		if (Windowselec === "false") {this._ServanBuy69.select(-1);};
    };
Scene_ServanBuy9.prototype.createServanBuy70 = function(){
        this._ServanBuy70 = new Window_ServanBuy70(0, 0);
		this._ServanBuy70.move(window70X, window70Y, window70W, window70H);
		this._ServanBuy70.setHandler('ok70', this.onIndexOkBuy70.bind(this));	
        this.addWindow(this._ServanBuy70);
		if (Windowselec === "false") {this._ServanBuy70.select(-1);};
    };
Scene_ServanBuy9.prototype.createServanBuy71 = function(){
        this._ServanBuy71 = new Window_ServanBuy71(0, 0);
		this._ServanBuy71.move(window71X, window71Y, window71W, window71H);
		this._ServanBuy71.setHandler('ok71', this.onIndexOkBuy71.bind(this));	
        this.addWindow(this._ServanBuy71);
		if (Windowselec === "false") {this._ServanBuy71.select(-1);};
    };
Scene_ServanBuy9.prototype.createServanBuy72 = function(){
        this._ServanBuy72 = new Window_ServanBuy72(0, 0);
		this._ServanBuy72.move(window72X, window72Y, window72W, window72H);
		this._ServanBuy72.setHandler('ok72', this.onIndexOkBuy72.bind(this));	
        this.addWindow(this._ServanBuy72);
		if (Windowselec === "false") {this._ServanBuy72.select(-1);};
    };
Scene_ServanBuy9.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP9X, windowP9Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP9X, windowP9Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP9X, windowP9Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP9X, windowP9Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP9X, windowP9Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP9X, windowP9Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP9X, windowP9Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP9X, windowP9Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP9X, windowP9Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP9X, windowP9Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP9X, windowP9Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP9X, windowP9Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP9X, windowP9Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP9X, windowP9Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP9X, windowP9Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(8);
    };
Scene_ServanBuy9.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP9EX, windowP9EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);
        if (Windowselec === "false") {this._ServanBuyEx.select(-1);};		
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy9.prototype.onIndexOkBuy65 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window65);
};	
Scene_ServanBuy9.prototype.onIndexOkBuy66 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window66);
};
Scene_ServanBuy9.prototype.onIndexOkBuy67 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window67);
};
Scene_ServanBuy9.prototype.onIndexOkBuy68 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window68);
};
Scene_ServanBuy9.prototype.onIndexOkBuy69 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window69);
};
Scene_ServanBuy9.prototype.onIndexOkBuy70 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window70);
};
Scene_ServanBuy9.prototype.onIndexOkBuy71 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window71);
};
Scene_ServanBuy9.prototype.onIndexOkBuy72 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window72);
};

Scene_ServanBuy9.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy9.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy9.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy65(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy65.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy65.prototype.constructor = Window_ServanBuy65;
    Window_ServanBuy65.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1065, window65X+Windowiconx, window65Y+Windowicony);
	this.drawIcon(1066, window66X+Windowiconx, window66Y+Windowicony);
	this.drawIcon(1067, window67X+Windowiconx, window67Y+Windowicony);
	this.drawIcon(1068, window68X+Windowiconx, window68Y+Windowicony);
	this.drawIcon(1069, window69X+Windowiconx, window69Y+Windowicony);
	this.drawIcon(1070, window70X+Windowiconx, window70Y+Windowicony);
	this.drawIcon(1071, window71X+Windowiconx, window71Y+Windowicony);
	this.drawIcon(1072, window72X+Windowiconx, window72Y+Windowicony);
    };	
	
	function Window_ServanBuy66(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy66.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy66.prototype.constructor = Window_ServanBuy66;
    Window_ServanBuy66.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy67(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy67.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy67.prototype.constructor = Window_ServanBuy67;
    Window_ServanBuy67.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy68(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy68.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy68.prototype.constructor = Window_ServanBuy68;
    Window_ServanBuy68.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy69(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy69.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy69.prototype.constructor = Window_ServanBuy69;
    Window_ServanBuy69.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy70(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy70.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy70.prototype.constructor = Window_ServanBuy70;
    Window_ServanBuy70.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy71(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy71.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy71.prototype.constructor = Window_ServanBuy71;
    Window_ServanBuy71.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy72(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy72.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy72.prototype.constructor = Window_ServanBuy72;
    Window_ServanBuy72.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy65.prototype.makeCommandList = function(){
	this.addCommand(name65, 'ok65', true);
    };

    Window_ServanBuy66.prototype.makeCommandList = function(){
	this.addCommand(name66, 'ok66', true);
    };
	
    Window_ServanBuy67.prototype.makeCommandList = function(){
	this.addCommand(name67, 'ok67', true);
    };
	
    Window_ServanBuy68.prototype.makeCommandList = function(){
	this.addCommand(name68, 'ok68', true);
    };
	
	Window_ServanBuy69.prototype.makeCommandList = function(){
	this.addCommand(name69, 'ok69', true);
    };

	Window_ServanBuy70.prototype.makeCommandList = function(){
	this.addCommand(name70, 'ok70', true);
    };
	
	Window_ServanBuy71.prototype.makeCommandList = function(){
	this.addCommand(name71, 'ok71', true);
    };
	Window_ServanBuy72.prototype.makeCommandList = function(){
	this.addCommand(name72, 'ok72', true);
    };

Window_ServanBuy65.prototype.normalColor = function() {return this.textColor(color65);};
Window_ServanBuy66.prototype.normalColor = function() {return this.textColor(color66);};
Window_ServanBuy67.prototype.normalColor = function() {return this.textColor(color67);};
Window_ServanBuy68.prototype.normalColor = function() {return this.textColor(color68);};
Window_ServanBuy69.prototype.normalColor = function() {return this.textColor(color69);};
Window_ServanBuy70.prototype.normalColor = function() {return this.textColor(color70);};
Window_ServanBuy71.prototype.normalColor = function() {return this.textColor(color71);};
Window_ServanBuy72.prototype.normalColor = function() {return this.textColor(color72);};



//===========================================================================set Scene10

function Scene_ServanBuy10(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy10.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy10.prototype.constructor = Scene_ServanBuy10;

    Scene_ServanBuy10.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy10.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window73OF)) {this.createServanBuy73();};
	if ($gameSwitches.value(Window74OF)) {this.createServanBuy74();};
	if ($gameSwitches.value(Window75OF)) {this.createServanBuy75();};
	if ($gameSwitches.value(Window76OF)) {this.createServanBuy76();};
	if ($gameSwitches.value(Window77OF)) {this.createServanBuy77();};
	if ($gameSwitches.value(Window78OF)) {this.createServanBuy78();};
	if ($gameSwitches.value(Window79OF)) {this.createServanBuy79();};
	if ($gameSwitches.value(Window80OF)) {this.createServanBuy80();};
	if (WindowSL1 === "true") {this.createServanBuyL1();};
    this.createMainWindow10();
	if ($gameSwitches.value(Window73OF)) {this._mainWindow10.drawIcon(IconCap73, window73X+Windowiconx, window73Y+Windowicony, this._mainWindow10.width);};
	if ($gameSwitches.value(Window74OF)) {this._mainWindow10.drawIcon(IconCap74, window74X+Windowiconx, window74Y+Windowicony, this._mainWindow10.width);};
	if ($gameSwitches.value(Window75OF)) {this._mainWindow10.drawIcon(IconCap75, window75X+Windowiconx, window75Y+Windowicony, this._mainWindow10.width);};
	if ($gameSwitches.value(Window76OF)) {this._mainWindow10.drawIcon(IconCap76, window76X+Windowiconx, window76Y+Windowicony, this._mainWindow10.width);};
	if ($gameSwitches.value(Window77OF)) {this._mainWindow10.drawIcon(IconCap77, window77X+Windowiconx, window77Y+Windowicony, this._mainWindow10.width);};
	if ($gameSwitches.value(Window78OF)) {this._mainWindow10.drawIcon(IconCap78, window78X+Windowiconx, window78Y+Windowicony, this._mainWindow10.width);};
	if ($gameSwitches.value(Window79OF)) {this._mainWindow10.drawIcon(IconCap79, window79X+Windowiconx, window79Y+Windowicony, this._mainWindow10.width);};
	if ($gameSwitches.value(Window80OF)) {this._mainWindow10.drawIcon(IconCap80, window80X+Windowiconx, window80Y+Windowicony, this._mainWindow10.width);};
	

//รูป icon

	this._mainWindow10.opacity = 0;		
	this.createServanBuyEx();
};



Scene_ServanBuy10.prototype.createMainWindow10 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow10 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow10);
		
    };	

// สร้างหน้าต่างรายการ
Scene_ServanBuy10.prototype.createServanBuy73 = function(){
        this._ServanBuy73 = new Window_ServanBuy73(0, 0);
		this._ServanBuy73.move(window73X, window73Y, window73W, window73H);
		this._ServanBuy73.setHandler('ok73', this.onIndexOkBuy73.bind(this));
        this.addWindow(this._ServanBuy73);	
		if (Windowselec === "false") {this._ServanBuy73.select(-1);};
    };
Scene_ServanBuy10.prototype.createServanBuy74 = function(){
        this._ServanBuy74 = new Window_ServanBuy74(0, 0);
		this._ServanBuy74.move(window74X, window74Y, window74W, window74H);
		this._ServanBuy74.setHandler('ok74', this.onIndexOkBuy74.bind(this));	
        this.addWindow(this._ServanBuy74);
		if (Windowselec === "false") {this._ServanBuy74.select(-1);};
    };
Scene_ServanBuy10.prototype.createServanBuy75 = function(){
        this._ServanBuy75 = new Window_ServanBuy75(0, 0);
		this._ServanBuy75.move(window75X, window75Y, window75W, window75H);
		this._ServanBuy75.setHandler('ok75', this.onIndexOkBuy75.bind(this));	
        this.addWindow(this._ServanBuy75);
		if (Windowselec === "false") {this._ServanBuy75.select(-1);};
    };
Scene_ServanBuy10.prototype.createServanBuy76 = function(){
        this._ServanBuy76 = new Window_ServanBuy76(0, 0);
		this._ServanBuy76.move(window76X, window76Y, window76W, window76H);
		this._ServanBuy76.setHandler('ok76', this.onIndexOkBuy76.bind(this));	
        this.addWindow(this._ServanBuy76);
		if (Windowselec === "false") {this._ServanBuy76.select(-1);};
    };	
Scene_ServanBuy10.prototype.createServanBuy77 = function(){
        this._ServanBuy77 = new Window_ServanBuy77(0, 0);
		this._ServanBuy77.move(window77X, window77Y, window77W, window77H);
		this._ServanBuy77.setHandler('ok77', this.onIndexOkBuy77.bind(this));	
        this.addWindow(this._ServanBuy77);
		if (Windowselec === "false") {this._ServanBuy77.select(-1);};
    };
Scene_ServanBuy10.prototype.createServanBuy78 = function(){
        this._ServanBuy78 = new Window_ServanBuy78(0, 0);
		this._ServanBuy78.move(window78X, window78Y, window78W, window78H);
		this._ServanBuy78.setHandler('ok78', this.onIndexOkBuy78.bind(this));	
        this.addWindow(this._ServanBuy78);
		if (Windowselec === "false") {this._ServanBuy78.select(-1);};
    };
Scene_ServanBuy10.prototype.createServanBuy79 = function(){
        this._ServanBuy79 = new Window_ServanBuy79(0, 0);
		this._ServanBuy79.move(window79X, window79Y, window79W, window79H);
		this._ServanBuy79.setHandler('ok79', this.onIndexOkBuy79.bind(this));	
        this.addWindow(this._ServanBuy79);
		if (Windowselec === "false") {this._ServanBuy79.select(-1);};
    };
Scene_ServanBuy10.prototype.createServanBuy80 = function(){
        this._ServanBuy80 = new Window_ServanBuy80(0, 0);
		this._ServanBuy80.move(window80X, window80Y, window80W, window80H);
		this._ServanBuy80.setHandler('ok80', this.onIndexOkBuy80.bind(this));	
        this.addWindow(this._ServanBuy80);
		if (Windowselec === "false") {this._ServanBuy80.select(-1);};
    };
Scene_ServanBuy10.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP10X, windowP10Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP10X, windowP10Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP10X, windowP10Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP10X, windowP10Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP10X, windowP10Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP10X, windowP10Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP10X, windowP10Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP10X, windowP10Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP10X, windowP10Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP10X, windowP10Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP10X, windowP10Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP10X, windowP10Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP10X, windowP10Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP10X, windowP10Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP10X, windowP10Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(9);
    };
Scene_ServanBuy10.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP10EX, windowP10EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);
        if (Windowselec === "false") {this._ServanBuyEx.select(-1);};		
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy10.prototype.onIndexOkBuy73 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window73);
};	
Scene_ServanBuy10.prototype.onIndexOkBuy74 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window74);
};
Scene_ServanBuy10.prototype.onIndexOkBuy75 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window75);
};
Scene_ServanBuy10.prototype.onIndexOkBuy76 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window76);
};
Scene_ServanBuy10.prototype.onIndexOkBuy77 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window77);
};
Scene_ServanBuy10.prototype.onIndexOkBuy78 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window78);
};
Scene_ServanBuy10.prototype.onIndexOkBuy79 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window79);
};
Scene_ServanBuy10.prototype.onIndexOkBuy80 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window80);
};

Scene_ServanBuy10.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy10.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy10.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy73(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy73.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy73.prototype.constructor = Window_ServanBuy73;
    Window_ServanBuy73.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1073, window73X+Windowiconx, window73Y+Windowicony);
	this.drawIcon(1074, window74X+Windowiconx, window74Y+Windowicony);
	this.drawIcon(1075, window75X+Windowiconx, window75Y+Windowicony);
	this.drawIcon(1076, window76X+Windowiconx, window76Y+Windowicony);
	this.drawIcon(1077, window77X+Windowiconx, window77Y+Windowicony);
	this.drawIcon(1078, window78X+Windowiconx, window78Y+Windowicony);
	this.drawIcon(1079, window79X+Windowiconx, window79Y+Windowicony);
	this.drawIcon(1080, window80X+Windowiconx, window80Y+Windowicony);
    };	
	
	function Window_ServanBuy74(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy74.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy74.prototype.constructor = Window_ServanBuy74;
    Window_ServanBuy74.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy75(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy75.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy75.prototype.constructor = Window_ServanBuy75;
    Window_ServanBuy75.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy76(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy76.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy76.prototype.constructor = Window_ServanBuy76;
    Window_ServanBuy76.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy77(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy77.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy77.prototype.constructor = Window_ServanBuy77;
    Window_ServanBuy77.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy78(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy78.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy78.prototype.constructor = Window_ServanBuy78;
    Window_ServanBuy78.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy79(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy79.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy79.prototype.constructor = Window_ServanBuy79;
    Window_ServanBuy79.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy80(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy80.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy80.prototype.constructor = Window_ServanBuy80;
    Window_ServanBuy80.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy73.prototype.makeCommandList = function(){
	this.addCommand(name73, 'ok73', true);
    };

    Window_ServanBuy74.prototype.makeCommandList = function(){
	this.addCommand(name74, 'ok74', true);
    };
	
    Window_ServanBuy75.prototype.makeCommandList = function(){
	this.addCommand(name75, 'ok75', true);
    };
	
    Window_ServanBuy76.prototype.makeCommandList = function(){
	this.addCommand(name76, 'ok76', true);
    };
	
	Window_ServanBuy77.prototype.makeCommandList = function(){
	this.addCommand(name77, 'ok77', true);
    };

	Window_ServanBuy78.prototype.makeCommandList = function(){
	this.addCommand(name78, 'ok78', true);
    };
	
	Window_ServanBuy79.prototype.makeCommandList = function(){
	this.addCommand(name79, 'ok79', true);
    };
	Window_ServanBuy80.prototype.makeCommandList = function(){
	this.addCommand(name80, 'ok80', true);
    };

Window_ServanBuy73.prototype.normalColor = function() {return this.textColor(color73);};
Window_ServanBuy74.prototype.normalColor = function() {return this.textColor(color74);};
Window_ServanBuy75.prototype.normalColor = function() {return this.textColor(color75);};
Window_ServanBuy76.prototype.normalColor = function() {return this.textColor(color76);};
Window_ServanBuy77.prototype.normalColor = function() {return this.textColor(color77);};
Window_ServanBuy78.prototype.normalColor = function() {return this.textColor(color78);};
Window_ServanBuy79.prototype.normalColor = function() {return this.textColor(color79);};
Window_ServanBuy80.prototype.normalColor = function() {return this.textColor(color80);};



//===========================================================================set Scene11

function Scene_ServanBuy11(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy11.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy11.prototype.constructor = Scene_ServanBuy11;

    Scene_ServanBuy11.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy11.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window81OF)) {this.createServanBuy81();};
	if ($gameSwitches.value(Window82OF)) {this.createServanBuy82();};
	if ($gameSwitches.value(Window83OF)) {this.createServanBuy83();};
	if ($gameSwitches.value(Window84OF)) {this.createServanBuy84();};
	if ($gameSwitches.value(Window85OF)) {this.createServanBuy85();};
	if ($gameSwitches.value(Window86OF)) {this.createServanBuy86();};
	if ($gameSwitches.value(Window87OF)) {this.createServanBuy87();};
	if ($gameSwitches.value(Window80OF)) {this.createServanBuy88();};
	if (WindowSL1 === "true") {this.createServanBuyL1();};
	this.createMainWindow11();
	if ($gameSwitches.value(Window81OF)) {this._mainWindow11.drawIcon(IconCap81, window81X+Windowiconx, window81Y+Windowicony, this._mainWindow11.width);};
	if ($gameSwitches.value(Window82OF)) {this._mainWindow11.drawIcon(IconCap82, window82X+Windowiconx, window82Y+Windowicony, this._mainWindow11.width);};
	if ($gameSwitches.value(Window83OF)) {this._mainWindow11.drawIcon(IconCap83, window83X+Windowiconx, window83Y+Windowicony, this._mainWindow11.width);};
	if ($gameSwitches.value(Window84OF)) {this._mainWindow11.drawIcon(IconCap84, window84X+Windowiconx, window84Y+Windowicony, this._mainWindow11.width);};
	if ($gameSwitches.value(Window85OF)) {this._mainWindow11.drawIcon(IconCap85, window85X+Windowiconx, window85Y+Windowicony, this._mainWindow11.width);};
	if ($gameSwitches.value(Window86OF)) {this._mainWindow11.drawIcon(IconCap86, window86X+Windowiconx, window86Y+Windowicony, this._mainWindow11.width);};
	if ($gameSwitches.value(Window87OF)) {this._mainWindow11.drawIcon(IconCap87, window87X+Windowiconx, window87Y+Windowicony, this._mainWindow11.width);};
	if ($gameSwitches.value(Window88OF)) {this._mainWindow11.drawIcon(IconCap88, window88X+Windowiconx, window88Y+Windowicony, this._mainWindow11.width);};

	
//รูป icon

	this._mainWindow11.opacity = 0;		
	this.createServanBuyEx();
};



Scene_ServanBuy11.prototype.createMainWindow11 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow11 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow11);
		
    };	


// สร้างหน้าต่างรายการ
Scene_ServanBuy11.prototype.createServanBuy81 = function(){
        this._ServanBuy81 = new Window_ServanBuy81(0, 0);
		this._ServanBuy81.move(window81X, window81Y, window81W, window81H);
		this._ServanBuy81.setHandler('ok81', this.onIndexOkBuy81.bind(this));
        this.addWindow(this._ServanBuy81);
		if (Windowselec === "false") {this._ServanBuy81.select(-1);};
    };
Scene_ServanBuy11.prototype.createServanBuy82 = function(){
        this._ServanBuy82 = new Window_ServanBuy82(0, 0);
		this._ServanBuy82.move(window82X, window82Y, window82W, window82H);
		this._ServanBuy82.setHandler('ok82', this.onIndexOkBuy82.bind(this));	
        this.addWindow(this._ServanBuy82);
		if (Windowselec === "false") {this._ServanBuy82.select(-1);};
    };
Scene_ServanBuy11.prototype.createServanBuy83 = function(){
        this._ServanBuy83 = new Window_ServanBuy83(0, 0);
		this._ServanBuy83.move(window83X, window83Y, window83W, window83H);
		this._ServanBuy83.setHandler('ok83', this.onIndexOkBuy83.bind(this));	
        this.addWindow(this._ServanBuy83);
		if (Windowselec === "false") {this._ServanBuy83.select(-1);};
    };
Scene_ServanBuy11.prototype.createServanBuy84 = function(){
        this._ServanBuy84 = new Window_ServanBuy84(0, 0);
		this._ServanBuy84.move(window84X, window84Y, window84W, window84H);
		this._ServanBuy84.setHandler('ok84', this.onIndexOkBuy84.bind(this));	
        this.addWindow(this._ServanBuy84);
		if (Windowselec === "false") {this._ServanBuy84.select(-1);};
    };	
Scene_ServanBuy11.prototype.createServanBuy85 = function(){
        this._ServanBuy85 = new Window_ServanBuy85(0, 0);
		this._ServanBuy85.move(window85X, window85Y, window85W, window85H);
		this._ServanBuy85.setHandler('ok85', this.onIndexOkBuy85.bind(this));	
        this.addWindow(this._ServanBuy85);
		if (Windowselec === "false") {this._ServanBuy85.select(-1);};
    };
Scene_ServanBuy11.prototype.createServanBuy86 = function(){
        this._ServanBuy86 = new Window_ServanBuy86(0, 0);
		this._ServanBuy86.move(window86X, window86Y, window86W, window86H);
		this._ServanBuy86.setHandler('ok86', this.onIndexOkBuy86.bind(this));	
        this.addWindow(this._ServanBuy86);
		if (Windowselec === "false") {this._ServanBuy86.select(-1);};
    };
Scene_ServanBuy11.prototype.createServanBuy87 = function(){
        this._ServanBuy87 = new Window_ServanBuy87(0, 0);
		this._ServanBuy87.move(window87X, window87Y, window87W, window87H);
		this._ServanBuy87.setHandler('ok87', this.onIndexOkBuy87.bind(this));	
        this.addWindow(this._ServanBuy87);
		if (Windowselec === "false") {this._ServanBuy87.select(-1);};
    };
Scene_ServanBuy11.prototype.createServanBuy88 = function(){
        this._ServanBuy88 = new Window_ServanBuy88(0, 0);
		this._ServanBuy88.move(window88X, window88Y, window88W, window88H);
		this._ServanBuy88.setHandler('ok88', this.onIndexOkBuy88.bind(this));	
        this.addWindow(this._ServanBuy88);
		if (Windowselec === "false") {this._ServanBuy88.select(-1);};
    };
Scene_ServanBuy11.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP11X, windowP11Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP11X, windowP11Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP11X, windowP11Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP11X, windowP11Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP11X, windowP11Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP11X, windowP11Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP11X, windowP11Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP11X, windowP11Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP11X, windowP11Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP11X, windowP11Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP11X, windowP11Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP11X, windowP11Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP11X, windowP11Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP11X, windowP11Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP11X, windowP11Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(10);
    };
Scene_ServanBuy11.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP11EX, windowP11EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);
        if (Windowselec === "false") {this._ServanBuyEx.select(-1);};		
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy11.prototype.onIndexOkBuy81 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window81);
};	
Scene_ServanBuy11.prototype.onIndexOkBuy82 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window82);
};
Scene_ServanBuy11.prototype.onIndexOkBuy83 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window83);
};
Scene_ServanBuy11.prototype.onIndexOkBuy84 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window84);
};
Scene_ServanBuy11.prototype.onIndexOkBuy85 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window85);
};
Scene_ServanBuy11.prototype.onIndexOkBuy86 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window86);
};
Scene_ServanBuy11.prototype.onIndexOkBuy87 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window87);
};
Scene_ServanBuy11.prototype.onIndexOkBuy88 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window88);
};

Scene_ServanBuy11.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy11.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy11.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy81(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy81.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy81.prototype.constructor = Window_ServanBuy81;
    Window_ServanBuy81.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1081, window81X+Windowiconx, window81Y+Windowicony);
	this.drawIcon(1082, window82X+Windowiconx, window82Y+Windowicony);
	this.drawIcon(1083, window83X+Windowiconx, window83Y+Windowicony);
	this.drawIcon(1084, window84X+Windowiconx, window84Y+Windowicony);
	this.drawIcon(1085, window85X+Windowiconx, window85Y+Windowicony);
	this.drawIcon(1086, window86X+Windowiconx, window86Y+Windowicony);
	this.drawIcon(1087, window87X+Windowiconx, window87Y+Windowicony);
	this.drawIcon(1088, window88X+Windowiconx, window88Y+Windowicony);
    };	
	
	function Window_ServanBuy82(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy82.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy82.prototype.constructor = Window_ServanBuy82;
    Window_ServanBuy82.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy83(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy83.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy83.prototype.constructor = Window_ServanBuy83;
    Window_ServanBuy83.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy84(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy84.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy84.prototype.constructor = Window_ServanBuy84;
    Window_ServanBuy84.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy85(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy85.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy85.prototype.constructor = Window_ServanBuy85;
    Window_ServanBuy85.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy86(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy86.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy86.prototype.constructor = Window_ServanBuy86;
    Window_ServanBuy86.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy87(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy87.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy87.prototype.constructor = Window_ServanBuy87;
    Window_ServanBuy87.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy88(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy88.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy88.prototype.constructor = Window_ServanBuy88;
    Window_ServanBuy88.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy81.prototype.makeCommandList = function(){
	this.addCommand(name81, 'ok81', true);
    };

    Window_ServanBuy82.prototype.makeCommandList = function(){
	this.addCommand(name82, 'ok82', true);
    };
	
    Window_ServanBuy83.prototype.makeCommandList = function(){
	this.addCommand(name83, 'ok83', true);
    };
	
    Window_ServanBuy84.prototype.makeCommandList = function(){
	this.addCommand(name84, 'ok84', true);
    };
	
	Window_ServanBuy85.prototype.makeCommandList = function(){
	this.addCommand(name85, 'ok85', true);
    };

	Window_ServanBuy86.prototype.makeCommandList = function(){
	this.addCommand(name86, 'ok86', true);
    };
	
	Window_ServanBuy87.prototype.makeCommandList = function(){
	this.addCommand(name87, 'ok87', true);
    };
	Window_ServanBuy88.prototype.makeCommandList = function(){
	this.addCommand(name88, 'ok88', true);
    };

Window_ServanBuy81.prototype.normalColor = function() {return this.textColor(color81);};
Window_ServanBuy82.prototype.normalColor = function() {return this.textColor(color82);};
Window_ServanBuy83.prototype.normalColor = function() {return this.textColor(color83);};
Window_ServanBuy84.prototype.normalColor = function() {return this.textColor(color84);};
Window_ServanBuy85.prototype.normalColor = function() {return this.textColor(color85);};
Window_ServanBuy86.prototype.normalColor = function() {return this.textColor(color86);};
Window_ServanBuy87.prototype.normalColor = function() {return this.textColor(color87);};
Window_ServanBuy88.prototype.normalColor = function() {return this.textColor(color88);};



//===========================================================================set Scene12

function Scene_ServanBuy12(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy12.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy12.prototype.constructor = Scene_ServanBuy12;

    Scene_ServanBuy12.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy12.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window89OF)) {this.createServanBuy89();};
	if ($gameSwitches.value(Window90OF)) {this.createServanBuy90();};
	if ($gameSwitches.value(Window91OF)) {this.createServanBuy91();};
	if ($gameSwitches.value(Window92OF)) {this.createServanBuy92();};
	if ($gameSwitches.value(Window93OF)) {this.createServanBuy93();};
	if ($gameSwitches.value(Window94OF)) {this.createServanBuy94();};
	if ($gameSwitches.value(Window95OF)) {this.createServanBuy95();};
	if ($gameSwitches.value(Window96OF)) {this.createServanBuy96();};
	if (WindowSL1 === "true") {this.createServanBuyL1();};
	this.createMainWindow12();
	if ($gameSwitches.value(Window89OF)) {this._mainWindow12.drawIcon(IconCap89, window89X+Windowiconx, window89Y+Windowicony, this._mainWindow12.width);};
	if ($gameSwitches.value(Window90OF)) {this._mainWindow12.drawIcon(IconCap90, window90X+Windowiconx, window90Y+Windowicony, this._mainWindow12.width);};
	if ($gameSwitches.value(Window91OF)) {this._mainWindow12.drawIcon(IconCap91, window91X+Windowiconx, window91Y+Windowicony, this._mainWindow12.width);};
	if ($gameSwitches.value(Window92OF)) {this._mainWindow12.drawIcon(IconCap92, window92X+Windowiconx, window92Y+Windowicony, this._mainWindow12.width);};
	if ($gameSwitches.value(Window93OF)) {this._mainWindow12.drawIcon(IconCap93, window93X+Windowiconx, window93Y+Windowicony, this._mainWindow12.width);};
	if ($gameSwitches.value(Window94OF)) {this._mainWindow12.drawIcon(IconCap94, window94X+Windowiconx, window94Y+Windowicony, this._mainWindow12.width);};
	if ($gameSwitches.value(Window95OF)) {this._mainWindow12.drawIcon(IconCap95, window95X+Windowiconx, window95Y+Windowicony, this._mainWindow12.width);};
	if ($gameSwitches.value(Window96OF)) {this._mainWindow12.drawIcon(IconCap96, window96X+Windowiconx, window96Y+Windowicony, this._mainWindow12.width);};


//รูป icon

	this._mainWindow12.opacity = 0;		
	this.createServanBuyEx();
};



Scene_ServanBuy12.prototype.createMainWindow12 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow12 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow12);
		
    };	

// สร้างหน้าต่างรายการ
Scene_ServanBuy12.prototype.createServanBuy89 = function(){
        this._ServanBuy89 = new Window_ServanBuy89(0, 0);
		this._ServanBuy89.move(window89X, window89Y, window89W, window89H);
		this._ServanBuy89.setHandler('ok89', this.onIndexOkBuy89.bind(this));
        this.addWindow(this._ServanBuy89);
		if (Windowselec === "false") {this._ServanBuy89.select(-1);};
    };
Scene_ServanBuy12.prototype.createServanBuy90 = function(){
        this._ServanBuy90 = new Window_ServanBuy90(0, 0);
		this._ServanBuy90.move(window90X, window90Y, window90W, window90H);
		this._ServanBuy90.setHandler('ok90', this.onIndexOkBuy90.bind(this));	
        this.addWindow(this._ServanBuy90);
		if (Windowselec === "false") {this._ServanBuy90.select(-1);};
    };
Scene_ServanBuy12.prototype.createServanBuy91 = function(){
        this._ServanBuy91 = new Window_ServanBuy91(0, 0);
		this._ServanBuy91.move(window91X, window91Y, window91W, window91H);
		this._ServanBuy91.setHandler('ok91', this.onIndexOkBuy91.bind(this));	
        this.addWindow(this._ServanBuy91);
		if (Windowselec === "false") {this._ServanBuy91.select(-1);};
    };
Scene_ServanBuy12.prototype.createServanBuy92 = function(){
        this._ServanBuy92 = new Window_ServanBuy92(0, 0);
		this._ServanBuy92.move(window92X, window92Y, window92W, window92H);
		this._ServanBuy92.setHandler('ok92', this.onIndexOkBuy92.bind(this));	
        this.addWindow(this._ServanBuy92);
		if (Windowselec === "false") {this._ServanBuy92.select(-1);};
    };	
Scene_ServanBuy12.prototype.createServanBuy93 = function(){
        this._ServanBuy93 = new Window_ServanBuy93(0, 0);
		this._ServanBuy93.move(window93X, window93Y, window93W, window93H);
		this._ServanBuy93.setHandler('ok93', this.onIndexOkBuy93.bind(this));	
        this.addWindow(this._ServanBuy93);
		if (Windowselec === "false") {this._ServanBuy93.select(-1);};
    };
Scene_ServanBuy12.prototype.createServanBuy94 = function(){
        this._ServanBuy94 = new Window_ServanBuy94(0, 0);
		this._ServanBuy94.move(window94X, window94Y, window94W, window94H);
		this._ServanBuy94.setHandler('ok94', this.onIndexOkBuy94.bind(this));	
        this.addWindow(this._ServanBuy94);
		if (Windowselec === "false") {this._ServanBuy94.select(-1);};
    };
Scene_ServanBuy12.prototype.createServanBuy95 = function(){
        this._ServanBuy95 = new Window_ServanBuy95(0, 0);
		this._ServanBuy95.move(window95X, window95Y, window95W, window95H);
		this._ServanBuy95.setHandler('ok95', this.onIndexOkBuy95.bind(this));	
        this.addWindow(this._ServanBuy95);
		if (Windowselec === "false") {this._ServanBuy95.select(-1);};
    };
Scene_ServanBuy12.prototype.createServanBuy96 = function(){
        this._ServanBuy96 = new Window_ServanBuy96(0, 0);
		this._ServanBuy96.move(window96X, window96Y, window96W, window96H);
		this._ServanBuy96.setHandler('ok96', this.onIndexOkBuy96.bind(this));	
        this.addWindow(this._ServanBuy96);
		if (Windowselec === "false") {this._ServanBuy96.select(-1);};
    };
Scene_ServanBuy12.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP12X, windowP12Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP12X, windowP12Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP12X, windowP12Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP12X, windowP12Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP12X, windowP12Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP12X, windowP12Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP12X, windowP12Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP12X, windowP12Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP12X, windowP12Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP12X, windowP12Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP12X, windowP12Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP12X, windowP12Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP12X, windowP12Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP12X, windowP12Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP12X, windowP12Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(11);
    };
Scene_ServanBuy12.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP12EX, windowP12EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);
        if (Windowselec === "false") {this._ServanBuyEx.select(-1);};		
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy12.prototype.onIndexOkBuy89 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window89);
};	
Scene_ServanBuy12.prototype.onIndexOkBuy90 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window90);
};
Scene_ServanBuy12.prototype.onIndexOkBuy91 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window91);
};
Scene_ServanBuy12.prototype.onIndexOkBuy92 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window92);
};
Scene_ServanBuy12.prototype.onIndexOkBuy93 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window93);
};
Scene_ServanBuy12.prototype.onIndexOkBuy94 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window94);
};
Scene_ServanBuy12.prototype.onIndexOkBuy95 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window95);
};
Scene_ServanBuy12.prototype.onIndexOkBuy96 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window96);
};

Scene_ServanBuy12.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy12.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy12.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy89(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy89.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy89.prototype.constructor = Window_ServanBuy89;
    Window_ServanBuy89.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1089, window89X+Windowiconx, window89Y+Windowicony);
	this.drawIcon(1090, window90X+Windowiconx, window90Y+Windowicony);
	this.drawIcon(1091, window91X+Windowiconx, window91Y+Windowicony);
	this.drawIcon(1092, window92X+Windowiconx, window92Y+Windowicony);
	this.drawIcon(1093, window93X+Windowiconx, window93Y+Windowicony);
	this.drawIcon(1094, window94X+Windowiconx, window94Y+Windowicony);
	this.drawIcon(1095, window95X+Windowiconx, window95Y+Windowicony);
	this.drawIcon(1096, window96X+Windowiconx, window96Y+Windowicony);
    };	
	
	function Window_ServanBuy90(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy90.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy90.prototype.constructor = Window_ServanBuy90;
    Window_ServanBuy90.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy91(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy91.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy91.prototype.constructor = Window_ServanBuy91;
    Window_ServanBuy91.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy92(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy92.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy92.prototype.constructor = Window_ServanBuy92;
    Window_ServanBuy92.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy93(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy93.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy93.prototype.constructor = Window_ServanBuy93;
    Window_ServanBuy93.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy94(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy94.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy94.prototype.constructor = Window_ServanBuy94;
    Window_ServanBuy94.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy95(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy95.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy95.prototype.constructor = Window_ServanBuy95;
    Window_ServanBuy95.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy96(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy96.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy96.prototype.constructor = Window_ServanBuy96;
    Window_ServanBuy96.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy89.prototype.makeCommandList = function(){
	this.addCommand(name89, 'ok89', true);
    };

    Window_ServanBuy90.prototype.makeCommandList = function(){
	this.addCommand(name90, 'ok90', true);
    };
	
    Window_ServanBuy91.prototype.makeCommandList = function(){
	this.addCommand(name91, 'ok91', true);
    };
	
    Window_ServanBuy92.prototype.makeCommandList = function(){
	this.addCommand(name92, 'ok92', true);
    };
	
	Window_ServanBuy93.prototype.makeCommandList = function(){
	this.addCommand(name93, 'ok93', true);
    };

	Window_ServanBuy94.prototype.makeCommandList = function(){
	this.addCommand(name94, 'ok94', true);
    };
	
	Window_ServanBuy95.prototype.makeCommandList = function(){
	this.addCommand(name95, 'ok95', true);
    };
	Window_ServanBuy96.prototype.makeCommandList = function(){
	this.addCommand(name96, 'ok96', true);
    };

Window_ServanBuy89.prototype.normalColor = function() {return this.textColor(color89);};
Window_ServanBuy90.prototype.normalColor = function() {return this.textColor(color90);};
Window_ServanBuy91.prototype.normalColor = function() {return this.textColor(color91);};
Window_ServanBuy92.prototype.normalColor = function() {return this.textColor(color92);};
Window_ServanBuy93.prototype.normalColor = function() {return this.textColor(color93);};
Window_ServanBuy94.prototype.normalColor = function() {return this.textColor(color94);};
Window_ServanBuy95.prototype.normalColor = function() {return this.textColor(color95);};
Window_ServanBuy96.prototype.normalColor = function() {return this.textColor(color96);};



//===========================================================================set Scene13

function Scene_ServanBuy13(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy13.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy13.prototype.constructor = Scene_ServanBuy13;

    Scene_ServanBuy13.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy13.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window97OF)) {this.createServanBuy97();};
	if ($gameSwitches.value(Window98OF)) {this.createServanBuy98();};
	if ($gameSwitches.value(Window99OF)) {this.createServanBuy99();};
	if ($gameSwitches.value(Window100OF)) {this.createServanBuy100();};
	if ($gameSwitches.value(Window101OF)) {this.createServanBuy101();};
	if ($gameSwitches.value(Window102OF)) {this.createServanBuy102();};
	if ($gameSwitches.value(Window103OF)) {this.createServanBuy103();};
	if ($gameSwitches.value(Window104OF)) {this.createServanBuy104();};
	this.createMainWindow13();
	if (gameSwitches.value(Window97OF)) {this._mainWindow13.drawIcon(IconCap97, window97X+Windowiconx, window97Y+Windowicony, this._mainWindow13.width);};
	if (gameSwitches.value(Window98OF)) {this._mainWindow13.drawIcon(IconCap98, window98X+Windowiconx, window98Y+Windowicony, this._mainWindow13.width);};
	if (gameSwitches.value(Window99OF)) {this._mainWindow13.drawIcon(IconCap99, window99X+Windowiconx, window99Y+Windowicony, this._mainWindow13.width);};
	if (gameSwitches.value(Window100OF)) {this._mainWindow13.drawIcon(IconCap100, window100X+Windowiconx, window100Y+Windowicony, this._mainWindow13.width);};
	if (gameSwitches.value(Window101OF)) {this._mainWindow13.drawIcon(IconCap101, window101X+Windowiconx, window101Y+Windowicony, this._mainWindow13.width);};
	if (gameSwitches.value(Window102OF)) {this._mainWindow13.drawIcon(IconCap102, window102X+Windowiconx, window102Y+Windowicony, this._mainWindow13.width);};
	if (gameSwitches.value(Window103OF)) {this._mainWindow13.drawIcon(IconCap103, window103X+Windowiconx, window103Y+Windowicony, this._mainWindow13.width);};
	if (gameSwitches.value(Window104OF)) {this._mainWindow13.drawIcon(IconCap104, window104X+Windowiconx, window104Y+Windowicony, this._mainWindow13.width);};
	if (WindowSL1 === "true") {this.createServanBuyL1();};


//รูป icon

	this._mainWindow13.opacity = 0;		
	this.createServanBuyEx();
};



Scene_ServanBuy13.prototype.createMainWindow13 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow13 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow13);
		
    };	

// สร้างหน้าต่างรายการ
Scene_ServanBuy13.prototype.createServanBuy97 = function(){
        this._ServanBuy97 = new Window_ServanBuy97(0, 0);
		this._ServanBuy97.move(window97X, window97Y, window97W, window97H);
		this._ServanBuy97.setHandler('ok97', this.onIndexOkBuy97.bind(this));
        this.addWindow(this._ServanBuy97);	
		if (Windowselec === "false") {this._ServanBuy97.select(-1);};
    };
Scene_ServanBuy13.prototype.createServanBuy98 = function(){
        this._ServanBuy98 = new Window_ServanBuy98(0, 0);
		this._ServanBuy98.move(window98X, window98Y, window98W, window98H);
		this._ServanBuy98.setHandler('ok98', this.onIndexOkBuy98.bind(this));	
        this.addWindow(this._ServanBuy98);
		if (Windowselec === "false") {this._ServanBuy98.select(-1);};
    };
Scene_ServanBuy13.prototype.createServanBuy99 = function(){
        this._ServanBuy99 = new Window_ServanBuy99(0, 0);
		this._ServanBuy99.move(window99X, window99Y, window99W, window99H);
		this._ServanBuy99.setHandler('ok99', this.onIndexOkBuy99.bind(this));	
        this.addWindow(this._ServanBuy99);
		if (Windowselec === "false") {this._ServanBuy99.select(-1);};
    };
Scene_ServanBuy13.prototype.createServanBuy100 = function(){
        this._ServanBuy100 = new Window_ServanBuy100(0, 0);
		this._ServanBuy100.move(window100X, window100Y, window100W, window100H);
		this._ServanBuy100.setHandler('ok100', this.onIndexOkBuy100.bind(this));	
        this.addWindow(this._ServanBuy100);
		if (Windowselec === "false") {this._ServanBuy100.select(-1);};
    };	
Scene_ServanBuy13.prototype.createServanBuy101 = function(){
        this._ServanBuy101 = new Window_ServanBuy101(0, 0);
		this._ServanBuy101.move(window101X, window101Y, window101W, window101H);
		this._ServanBuy101.setHandler('ok101', this.onIndexOkBuy101.bind(this));	
        this.addWindow(this._ServanBuy101);
		if (Windowselec === "false") {this._ServanBuy101.select(-1);};
    };
Scene_ServanBuy13.prototype.createServanBuy102 = function(){
        this._ServanBuy102 = new Window_ServanBuy102(0, 0);
		this._ServanBuy102.move(window102X, window102Y, window102W, window102H);
		this._ServanBuy102.setHandler('ok102', this.onIndexOkBuy102.bind(this));	
        this.addWindow(this._ServanBuy102);
		if (Windowselec === "false") {this._ServanBuy102.select(-1);};
    };
Scene_ServanBuy13.prototype.createServanBuy103 = function(){
        this._ServanBuy103 = new Window_ServanBuy103(0, 0);
		this._ServanBuy103.move(window103X, window103Y, window103W, window103H);
		this._ServanBuy103.setHandler('ok103', this.onIndexOkBuy103.bind(this));	
        this.addWindow(this._ServanBuy103);
		if (Windowselec === "false") {this._ServanBuy103.select(-1);};
    };
	
Scene_ServanBuy13.prototype.createServanBuy104 = function(){
        this._ServanBuy104 = new Window_ServanBuy104(0, 0);
		this._ServanBuy104.move(window104X, window104Y, window104W, window104H);
		this._ServanBuy104.setHandler('ok104', this.onIndexOkBuy104.bind(this));	
        this.addWindow(this._ServanBuy104);
		if (Windowselec === "false") {this._ServanBuy104.select(-1);};
    };
Scene_ServanBuy13.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP13X, windowP13Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP13X, windowP13Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP13X, windowP13Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP13X, windowP13Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP13X, windowP13Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP13X, windowP13Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP13X, windowP13Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP13X, windowP13Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP13X, windowP13Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP13X, windowP13Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP13X, windowP13Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP13X, windowP13Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP13X, windowP13Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP13X, windowP13Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP13X, windowP13Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(12);
    };
Scene_ServanBuy13.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP13EX, windowP13EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);	
		if (Windowselec === "false") {this._ServanBuyEx.select(-1);};
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy13.prototype.onIndexOkBuy97 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window97);
};	
Scene_ServanBuy13.prototype.onIndexOkBuy98 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window98);
};
Scene_ServanBuy13.prototype.onIndexOkBuy99 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window99);
};
Scene_ServanBuy13.prototype.onIndexOkBuy100 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window100);
};
Scene_ServanBuy13.prototype.onIndexOkBuy101 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window101);
};
Scene_ServanBuy13.prototype.onIndexOkBuy102 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window102);
};
Scene_ServanBuy13.prototype.onIndexOkBuy103 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window103);
};
Scene_ServanBuy13.prototype.onIndexOkBuy104 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window104);
};

Scene_ServanBuy13.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy13.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy13.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy97(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy97.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy97.prototype.constructor = Window_ServanBuy97;
    Window_ServanBuy97.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1097, window97X+Windowiconx, window97Y+Windowicony);
	this.drawIcon(1098, window98X+Windowiconx, window98Y+Windowicony);
	this.drawIcon(1099, window99X+Windowiconx, window99Y+Windowicony);
	this.drawIcon(1100, window100X+Windowiconx, window100Y+Windowicony);
	this.drawIcon(1101, window101X+Windowiconx, window101Y+Windowicony);
	this.drawIcon(1102, window102X+Windowiconx, window102Y+Windowicony);
	this.drawIcon(1103, window103X+Windowiconx, window103Y+Windowicony);
	this.drawIcon(1104, window104X+Windowiconx, window104Y+Windowicony);
    };	
	
	function Window_ServanBuy98(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy98.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy98.prototype.constructor = Window_ServanBuy98;
    Window_ServanBuy98.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy99(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy99.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy99.prototype.constructor = Window_ServanBuy99;
    Window_ServanBuy99.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy100(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy100.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy100.prototype.constructor = Window_ServanBuy100;
    Window_ServanBuy100.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy101(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy101.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy101.prototype.constructor = Window_ServanBuy101;
    Window_ServanBuy101.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy102(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy102.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy102.prototype.constructor = Window_ServanBuy102;
    Window_ServanBuy102.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy103(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy103.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy103.prototype.constructor = Window_ServanBuy103;
    Window_ServanBuy103.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy104(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy104.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy104.prototype.constructor = Window_ServanBuy104;
    Window_ServanBuy104.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy97.prototype.makeCommandList = function(){
	this.addCommand(name97, 'ok97', true);
    };

    Window_ServanBuy98.prototype.makeCommandList = function(){
	this.addCommand(name98, 'ok98', true);
    };
	
    Window_ServanBuy99.prototype.makeCommandList = function(){
	this.addCommand(name99, 'ok99', true);
    };
	
    Window_ServanBuy100.prototype.makeCommandList = function(){
	this.addCommand(name100, 'ok100', true);
    };
	
	Window_ServanBuy101.prototype.makeCommandList = function(){
	this.addCommand(name101, 'ok101', true);
    };

	Window_ServanBuy102.prototype.makeCommandList = function(){
	this.addCommand(name102, 'ok102', true);
    };
	
	Window_ServanBuy103.prototype.makeCommandList = function(){
	this.addCommand(name103, 'ok103', true);
    };
	Window_ServanBuy104.prototype.makeCommandList = function(){
	this.addCommand(name104, 'ok104', true);
    };

Window_ServanBuy97.prototype.normalColor = function() {return this.textColor(color97);};
Window_ServanBuy98.prototype.normalColor = function() {return this.textColor(color98);};
Window_ServanBuy99.prototype.normalColor = function() {return this.textColor(color99);};
Window_ServanBuy100.prototype.normalColor = function() {return this.textColor(color100);};
Window_ServanBuy101.prototype.normalColor = function() {return this.textColor(color101);};
Window_ServanBuy102.prototype.normalColor = function() {return this.textColor(color102);};
Window_ServanBuy103.prototype.normalColor = function() {return this.textColor(color103);};
Window_ServanBuy104.prototype.normalColor = function() {return this.textColor(color104);};


//===========================================================================set Scene14

function Scene_ServanBuy14(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy14.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy14.prototype.constructor = Scene_ServanBuy14;

    Scene_ServanBuy14.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy14.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window105OF)) {this.createServanBuy105();};
	if ($gameSwitches.value(Window106OF)) {this.createServanBuy106();};
	if ($gameSwitches.value(Window107OF)) {this.createServanBuy107();};
	if ($gameSwitches.value(Window108OF)) {this.createServanBuy108();};
	if ($gameSwitches.value(Window109OF)) {this.createServanBuy109();};
	if ($gameSwitches.value(Window110OF)) {this.createServanBuy110();};
	if ($gameSwitches.value(Window111OF)) {this.createServanBuy111();};
	if ($gameSwitches.value(Window112OF)) {this.createServanBuy112();};
	this.createMainWindow14();
	if ($gameSwitches.value(Window105OF)) {this._mainWindow14.drawIcon(IconCap105, window105X+Windowiconx, window105Y+Windowicony, this._mainWindow14.width);};
	if ($gameSwitches.value(Window106OF)) {this._mainWindow14.drawIcon(IconCap106, window106X+Windowiconx, window106Y+Windowicony, this._mainWindow14.width);};
	if ($gameSwitches.value(Window107OF)) {this._mainWindow14.drawIcon(IconCap107, window107X+Windowiconx, window107Y+Windowicony, this._mainWindow14.width);};
	if ($gameSwitches.value(Window108OF)) {this._mainWindow14.drawIcon(IconCap108, window108X+Windowiconx, window108Y+Windowicony, this._mainWindow14.width);};
	if ($gameSwitches.value(Window109OF)) {this._mainWindow14.drawIcon(IconCap109, window109X+Windowiconx, window109Y+Windowicony, this._mainWindow14.width);};
	if ($gameSwitches.value(Window110OF)) {this._mainWindow14.drawIcon(IconCap110, window110X+Windowiconx, window110Y+Windowicony, this._mainWindow14.width);};
	if ($gameSwitches.value(Window111OF)) {this._mainWindow14.drawIcon(IconCap111, window111X+Windowiconx, window111Y+Windowicony, this._mainWindow14.width);};
	if ($gameSwitches.value(Window112OF)) {this._mainWindow14.drawIcon(IconCap112, window112X+Windowiconx, window112Y+Windowicony, this._mainWindow14.width);};
	
	if (WindowSL1 === "true") {this.createServanBuyL1();};

	
//รูป icon

	this._mainWindow14.opacity = 0;		
	this.createServanBuyEx();
};



Scene_ServanBuy14.prototype.createMainWindow14 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow14 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow14);
		
    };	

// สร้างหน้าต่างรายการ
Scene_ServanBuy14.prototype.createServanBuy105 = function(){
        this._ServanBuy105 = new Window_ServanBuy105(0, 0);
		this._ServanBuy105.move(window105X, window105Y, window105W, window105H);
		this._ServanBuy105.setHandler('ok105', this.onIndexOkBuy105.bind(this));
        this.addWindow(this._ServanBuy105);	
		if (Windowselec === "false") {this._ServanBuy105.select(-1);};
    };
Scene_ServanBuy14.prototype.createServanBuy106 = function(){
        this._ServanBuy106 = new Window_ServanBuy106(0, 0);
		this._ServanBuy106.move(window106X, window106Y, window106W, window106H);
		this._ServanBuy106.setHandler('ok106', this.onIndexOkBuy106.bind(this));	
        this.addWindow(this._ServanBuy106);
		if (Windowselec === "false") {this._ServanBuy106.select(-1);};
    };
Scene_ServanBuy14.prototype.createServanBuy107 = function(){
        this._ServanBuy107 = new Window_ServanBuy107(0, 0);
		this._ServanBuy107.move(window107X, window107Y, window107W, window107H);
		this._ServanBuy107.setHandler('ok107', this.onIndexOkBuy107.bind(this));	
        this.addWindow(this._ServanBuy107);
		if (Windowselec === "false") {this._ServanBuy107.select(-1);};
    };
Scene_ServanBuy14.prototype.createServanBuy108 = function(){
        this._ServanBuy108 = new Window_ServanBuy108(0, 0);
		this._ServanBuy108.move(window108X, window108Y, window108W, window108H);
		this._ServanBuy108.setHandler('ok108', this.onIndexOkBuy108.bind(this));	
        this.addWindow(this._ServanBuy108);
		if (Windowselec === "false") {this._ServanBuy108.select(-1);};
    };	
Scene_ServanBuy14.prototype.createServanBuy109 = function(){
        this._ServanBuy109 = new Window_ServanBuy109(0, 0);
		this._ServanBuy109.move(window109X, window109Y, window109W, window109H);
		this._ServanBuy109.setHandler('ok109', this.onIndexOkBuy109.bind(this));	
        this.addWindow(this._ServanBuy109);
		if (Windowselec === "false") {this._ServanBuy109.select(-1);};
    };
Scene_ServanBuy14.prototype.createServanBuy110 = function(){
        this._ServanBuy110 = new Window_ServanBuy110(0, 0);
		this._ServanBuy110.move(window110X, window110Y, window110W, window110H);
		this._ServanBuy110.setHandler('ok110', this.onIndexOkBuy110.bind(this));	
        this.addWindow(this._ServanBuy110);
		if (Windowselec === "false") {this._ServanBuy110.select(-1);};
    };
Scene_ServanBuy14.prototype.createServanBuy111 = function(){
        this._ServanBuy111 = new Window_ServanBuy111(0, 0);
		this._ServanBuy111.move(window111X, window111Y, window111W, window111H);
		this._ServanBuy111.setHandler('ok111', this.onIndexOkBuy111.bind(this));	
        this.addWindow(this._ServanBuy111);
		if (Windowselec === "false") {this._ServanBuy111.select(-1);};
    };
Scene_ServanBuy14.prototype.createServanBuy112 = function(){
        this._ServanBuy112 = new Window_ServanBuy112(0, 0);
		this._ServanBuy112.move(window112X, window112Y, window112W, window112H);
		this._ServanBuy112.setHandler('ok112', this.onIndexOkBuy112.bind(this));	
        this.addWindow(this._ServanBuy112);
		if (Windowselec === "false") {this._ServanBuy112.select(-1);};
    };
Scene_ServanBuy14.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP14X, windowP14Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP14X, windowP14Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP14X, windowP14Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP14X, windowP14Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP14X, windowP14Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP14X, windowP14Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP14X, windowP14Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP14X, windowP14Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP14X, windowP14Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP14X, windowP14Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP14X, windowP14Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP14X, windowP14Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP14X, windowP14Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP14X, windowP14Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP14X, windowP14Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(13);
    };
Scene_ServanBuy14.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP14EX, windowP14EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);	
		if (Windowselec === "false") {this._ServanBuyEx.select(-1);};
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy14.prototype.onIndexOkBuy105 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window105);
};	
Scene_ServanBuy14.prototype.onIndexOkBuy106 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window106);
};
Scene_ServanBuy14.prototype.onIndexOkBuy107 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window107);
};
Scene_ServanBuy14.prototype.onIndexOkBuy108 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window108);
};
Scene_ServanBuy14.prototype.onIndexOkBuy109 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window109);
};
Scene_ServanBuy14.prototype.onIndexOkBuy110 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window110);
};
Scene_ServanBuy14.prototype.onIndexOkBuy111 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window111);
};
Scene_ServanBuy14.prototype.onIndexOkBuy112 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window112);
};

Scene_ServanBuy14.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy14.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy14.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy105(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy105.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy105.prototype.constructor = Window_ServanBuy105;
    Window_ServanBuy105.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1105, window105X+Windowiconx, window105Y+Windowicony);
	this.drawIcon(1106, window106X+Windowiconx, window106Y+Windowicony);
	this.drawIcon(1107, window107X+Windowiconx, window107Y+Windowicony);
	this.drawIcon(1108, window108X+Windowiconx, window108Y+Windowicony);
	this.drawIcon(1109, window109X+Windowiconx, window109Y+Windowicony);
	this.drawIcon(1110, window110X+Windowiconx, window110Y+Windowicony);
	this.drawIcon(1111, window111X+Windowiconx, window111Y+Windowicony);
	this.drawIcon(1112, window112X+Windowiconx, window112Y+Windowicony);
    };	
	
	function Window_ServanBuy106(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy106.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy106.prototype.constructor = Window_ServanBuy106;
    Window_ServanBuy106.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy107(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy107.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy107.prototype.constructor = Window_ServanBuy107;
    Window_ServanBuy107.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy108(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy108.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy108.prototype.constructor = Window_ServanBuy108;
    Window_ServanBuy108.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy109(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy109.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy109.prototype.constructor = Window_ServanBuy109;
    Window_ServanBuy109.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy110(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy110.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy110.prototype.constructor = Window_ServanBuy110;
    Window_ServanBuy110.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy111(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy111.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy111.prototype.constructor = Window_ServanBuy111;
    Window_ServanBuy111.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy112(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy112.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy112.prototype.constructor = Window_ServanBuy112;
    Window_ServanBuy112.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy105.prototype.makeCommandList = function(){
	this.addCommand(name105, 'ok105', true);
    };

    Window_ServanBuy106.prototype.makeCommandList = function(){
	this.addCommand(name106, 'ok106', true);
    };
	
    Window_ServanBuy107.prototype.makeCommandList = function(){
	this.addCommand(name107, 'ok107', true);
    };
	
    Window_ServanBuy108.prototype.makeCommandList = function(){
	this.addCommand(name108, 'ok108', true);
    };
	
	Window_ServanBuy109.prototype.makeCommandList = function(){
	this.addCommand(name109, 'ok109', true);
    };

	Window_ServanBuy110.prototype.makeCommandList = function(){
	this.addCommand(name110, 'ok110', true);
    };
	
	Window_ServanBuy111.prototype.makeCommandList = function(){
	this.addCommand(name111, 'ok111', true);
    };
	Window_ServanBuy112.prototype.makeCommandList = function(){
	this.addCommand(name112, 'ok112', true);
    };

Window_ServanBuy105.prototype.normalColor = function() {return this.textColor(color105);};
Window_ServanBuy106.prototype.normalColor = function() {return this.textColor(color106);};
Window_ServanBuy107.prototype.normalColor = function() {return this.textColor(color107);};
Window_ServanBuy108.prototype.normalColor = function() {return this.textColor(color108);};
Window_ServanBuy109.prototype.normalColor = function() {return this.textColor(color109);};
Window_ServanBuy110.prototype.normalColor = function() {return this.textColor(color110);};
Window_ServanBuy111.prototype.normalColor = function() {return this.textColor(color111);};
Window_ServanBuy112.prototype.normalColor = function() {return this.textColor(color112);};


//===========================================================================set Scene15

function Scene_ServanBuy15(){
        this.initialize.apply(this, arguments);
    }

    Scene_ServanBuy15.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ServanBuy15.prototype.constructor = Scene_ServanBuy15;

    Scene_ServanBuy15.prototype.initialize = function(){
    Scene_MenuBase.prototype.initialize.call(this);
    };


Scene_ServanBuy15.prototype.create = function(){
  Scene_MenuBase.prototype.create.call(this);
 
    // สร้างหน้าต่าง
	this.createWindowLayer();
	if ($gameSwitches.value(Window113OF)) {this.createServanBuy113();};
	if ($gameSwitches.value(Window114OF)) {this.createServanBuy114();};
	if ($gameSwitches.value(Window115OF)) {this.createServanBuy115();};
	if ($gameSwitches.value(Window116OF)) {this.createServanBuy116();};
	if ($gameSwitches.value(Window117OF)) {this.createServanBuy117();};
	if ($gameSwitches.value(Window118OF)) {this.createServanBuy118();};
	if ($gameSwitches.value(Window119OF)) {this.createServanBuy119();};
	if ($gameSwitches.value(Window120OF)) {this.createServanBuy120();};
	this.createMainWindow15();
	if ($gameSwitches.value(Window113OF)) {this._mainWindow15.drawIcon(IconCap113, window113X+Windowiconx, window113Y+Windowicony, this._mainWindow15.width);};
	if ($gameSwitches.value(Window114OF)) {this._mainWindow15.drawIcon(IconCap114, window114X+Windowiconx, window114Y+Windowicony, this._mainWindow15.width);};
	if ($gameSwitches.value(Window115OF)) {this._mainWindow15.drawIcon(IconCap115, window115X+Windowiconx, window115Y+Windowicony, this._mainWindow15.width);};
	if ($gameSwitches.value(Window116OF)) {this._mainWindow15.drawIcon(IconCap116, window116X+Windowiconx, window116Y+Windowicony, this._mainWindow15.width);};
	if ($gameSwitches.value(Window117OF)) {this._mainWindow15.drawIcon(IconCap117, window117X+Windowiconx, window117Y+Windowicony, this._mainWindow15.width);};
	if ($gameSwitches.value(Window118OF)) {this._mainWindow15.drawIcon(IconCap118, window118X+Windowiconx, window118Y+Windowicony, this._mainWindow15.width);};
	if ($gameSwitches.value(Window119OF)) {this._mainWindow15.drawIcon(IconCap119, window119X+Windowiconx, window119Y+Windowicony, this._mainWindow15.width);};
	if ($gameSwitches.value(Window120OF)) {this._mainWindow15.drawIcon(IconCap120, window120X+Windowiconx, window120Y+Windowicony, this._mainWindow15.width);};
	
	if (WindowSL1 === "true") {this.createServanBuyL1();};


//รูป icon

	this._mainWindow15.opacity = 0;		
	this.createServanBuyEx();
};



Scene_ServanBuy15.prototype.createMainWindow15 = function(){
        var ww = Graphics.width;
        var wh = Graphics.height;
	
        var wx = 0;
        var wy = 0;

        this._mainWindow15 = new Window_Base(wx, wy, ww, wh);		
        this.addChild(this._mainWindow15);
		
    };	

// สร้างหน้าต่างรายการ
Scene_ServanBuy15.prototype.createServanBuy113 = function(){
        this._ServanBuy113 = new Window_ServanBuy113(0, 0);
		this._ServanBuy113.move(window113X, window113Y, window113W, window113H);
		this._ServanBuy113.setHandler('ok113', this.onIndexOkBuy113.bind(this));
        this.addWindow(this._ServanBuy113);	
		if (Windowselec === "false") {this._ServanBuy113.select(-1);};
    };
Scene_ServanBuy15.prototype.createServanBuy114 = function(){
        this._ServanBuy114 = new Window_ServanBuy114(0, 0);
		this._ServanBuy114.move(window114X, window114Y, window114W, window114H);
		this._ServanBuy114.setHandler('ok114', this.onIndexOkBuy114.bind(this));	
        this.addWindow(this._ServanBuy114);
		if (Windowselec === "false") {this._ServanBuy114.select(-1);};
    };
Scene_ServanBuy15.prototype.createServanBuy115 = function(){
        this._ServanBuy115 = new Window_ServanBuy115(0, 0);
		this._ServanBuy115.move(window115X, window115Y, window115W, window115H);
		this._ServanBuy115.setHandler('ok115', this.onIndexOkBuy115.bind(this));	
        this.addWindow(this._ServanBuy115);
		if (Windowselec === "false") {this._ServanBuy115.select(-1);};
    };
Scene_ServanBuy15.prototype.createServanBuy116 = function(){
        this._ServanBuy116 = new Window_ServanBuy116(0, 0);
		this._ServanBuy116.move(window116X, window116Y, window116W, window116H);
		this._ServanBuy116.setHandler('ok116', this.onIndexOkBuy116.bind(this));	
        this.addWindow(this._ServanBuy116);
		if (Windowselec === "false") {this._ServanBuy116.select(-1);};
    };	
Scene_ServanBuy15.prototype.createServanBuy117 = function(){
        this._ServanBuy117 = new Window_ServanBuy117(0, 0);
		this._ServanBuy117.move(window117X, window117Y, window117W, window117H);
		this._ServanBuy117.setHandler('ok117', this.onIndexOkBuy117.bind(this));	
        this.addWindow(this._ServanBuy117);
		if (Windowselec === "false") {this._ServanBuy117.select(-1);};
    };
Scene_ServanBuy15.prototype.createServanBuy118 = function(){
        this._ServanBuy118 = new Window_ServanBuy118(0, 0);
		this._ServanBuy118.move(window118X, window118Y, window118W, window118H);
		this._ServanBuy118.setHandler('ok118', this.onIndexOkBuy118.bind(this));	
        this.addWindow(this._ServanBuy118);
		if (Windowselec === "false") {this._ServanBuy118.select(-1);};
    };
Scene_ServanBuy15.prototype.createServanBuy119 = function(){
        this._ServanBuy119 = new Window_ServanBuy119(0, 0);
		this._ServanBuy119.move(window119X, window119Y, window119W, window119H);
		this._ServanBuy119.setHandler('ok119', this.onIndexOkBuy119.bind(this));	
        this.addWindow(this._ServanBuy119);
		if (Windowselec === "false") {this._ServanBuy119.select(-1);};
    };
Scene_ServanBuy15.prototype.createServanBuy120 = function(){
        this._ServanBuy120 = new Window_ServanBuy120(0, 0);
		this._ServanBuy120.move(window120X, window120Y, window120W, window120H);
		this._ServanBuy120.setHandler('ok120', this.onIndexOkBuy120.bind(this));	
        this.addWindow(this._ServanBuy120);
		if (Windowselec === "false") {this._ServanBuy120.select(-1);};
    };
Scene_ServanBuy15.prototype.createServanBuyL1 = function(){
        this._ServanBuyL1 = new Window_ServanBuyL1(0, 0);
		if (choice === "1") {this._ServanBuyL1.move(windowP15X, windowP15Y, 70, 80);};	
		if (choice === "2") {this._ServanBuyL1.move(windowP15X, windowP15Y, 110, 80);};
		if (choice === "3") {this._ServanBuyL1.move(windowP15X, windowP15Y, 160, 80);};
		if (choice === "4") {this._ServanBuyL1.move(windowP15X, windowP15Y, 200, 80);};
		if (choice === "5") {this._ServanBuyL1.move(windowP15X, windowP15Y, 240, 80);};
		if (choice === "6") {this._ServanBuyL1.move(windowP15X, windowP15Y, 240, 80);};
		if (choice === "7") {this._ServanBuyL1.move(windowP15X, windowP15Y, 240, 80);};
		if (choice === "8") {this._ServanBuyL1.move(windowP15X, windowP15Y, 240, 80);};
		if (choice === "9") {this._ServanBuyL1.move(windowP15X, windowP15Y, 240, 80);};
		if (choice === "10") {this._ServanBuyL1.move(windowP15X, windowP15Y, 240, 80);};
		if (choice === "11") {this._ServanBuyL1.move(windowP15X, windowP15Y, 240, 80);};
		if (choice === "12") {this._ServanBuyL1.move(windowP15X, windowP15Y, 240, 80);};
		if (choice === "13") {this._ServanBuyL1.move(windowP15X, windowP15Y, 240, 80);};
		if (choice === "14") {this._ServanBuyL1.move(windowP15X, windowP15Y, 240, 80);};
		if (choice === "15") {this._ServanBuyL1.move(windowP15X, windowP15Y, 240, 80);};
		this._ServanBuyL1.setHandler('okL1', this.onIndexOkBuyL1.bind(this));
     	this._ServanBuyL1.setHandler('okL2', this.onIndexOkBuyL2.bind(this));
		this._ServanBuyL1.setHandler('okL3', this.onIndexOkBuyL3.bind(this));
		this._ServanBuyL1.setHandler('okL4', this.onIndexOkBuyL4.bind(this));
		this._ServanBuyL1.setHandler('okL5', this.onIndexOkBuyL5.bind(this));
		this._ServanBuyL1.setHandler('okL6', this.onIndexOkBuyL6.bind(this));
     	this._ServanBuyL1.setHandler('okL7', this.onIndexOkBuyL7.bind(this));
		this._ServanBuyL1.setHandler('okL8', this.onIndexOkBuyL8.bind(this));
		this._ServanBuyL1.setHandler('okL9', this.onIndexOkBuyL9.bind(this));
		this._ServanBuyL1.setHandler('okL10', this.onIndexOkBuyL10.bind(this));
		this._ServanBuyL1.setHandler('okL11', this.onIndexOkBuyL11.bind(this));
     	this._ServanBuyL1.setHandler('okL12', this.onIndexOkBuyL12.bind(this));
		this._ServanBuyL1.setHandler('okL13', this.onIndexOkBuyL13.bind(this));
		this._ServanBuyL1.setHandler('okL14', this.onIndexOkBuyL14.bind(this));
		this._ServanBuyL1.setHandler('okL15', this.onIndexOkBuyL15.bind(this));
        this.addWindow(this._ServanBuyL1);
		this._ServanBuyL1.select(14);
    };
Scene_ServanBuy15.prototype.createServanBuyEx = function(){
        this._ServanBuyEx = new Window_ServanBuyEx(0, 0);
		this._ServanBuyEx.move(windowP15EX, windowP15EY, 120, 70);
		this._ServanBuyEx.setHandler('Ex', this.onIndexOkBuyEx.bind(this));
        this.addWindow(this._ServanBuyEx);
        if (Windowselec === "false") {this._ServanBuyEx.select(-1);};		
    };	
 
// การประมวลผลเมื่อกดปุ่ม
Scene_ServanBuy15.prototype.onIndexOkBuy113 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window113);
};	
Scene_ServanBuy15.prototype.onIndexOkBuy114 = function(){
SceneManager.goto(Scene_Map);
$gameTemp.reserveCommonEvent(window114);
};
Scene_ServanBuy15.prototype.onIndexOkBuy115 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window115);
};
Scene_ServanBuy15.prototype.onIndexOkBuy116 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window116);
};
Scene_ServanBuy15.prototype.onIndexOkBuy117 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window117);
};
Scene_ServanBuy15.prototype.onIndexOkBuy118 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window118);
};
Scene_ServanBuy15.prototype.onIndexOkBuy119 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window119);
};
Scene_ServanBuy15.prototype.onIndexOkBuy120 = function(){
SceneManager.goto(Scene_Map);	
$gameTemp.reserveCommonEvent(window120);
};

Scene_ServanBuy15.prototype.onIndexOkBuyL1 = function(){	
SceneManager.push(Scene_ServanBuy);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL2 = function(){	
SceneManager.push(Scene_ServanBuy2);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL3 = function(){	
SceneManager.push(Scene_ServanBuy3);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL4 = function(){	
SceneManager.push(Scene_ServanBuy4);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL5 = function(){	
SceneManager.push(Scene_ServanBuy5);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL6 = function(){	
SceneManager.push(Scene_ServanBuy6);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL7 = function(){	
SceneManager.push(Scene_ServanBuy7);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL8 = function(){	
SceneManager.push(Scene_ServanBuy8);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL9 = function(){	
SceneManager.push(Scene_ServanBuy9);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL10 = function(){	
SceneManager.push(Scene_ServanBuy10);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL11 = function(){	
SceneManager.push(Scene_ServanBuy11);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL12 = function(){	
SceneManager.push(Scene_ServanBuy12);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL13 = function(){	
SceneManager.push(Scene_ServanBuy13);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL14 = function(){	
SceneManager.push(Scene_ServanBuy14);
};
Scene_ServanBuy15.prototype.onIndexOkBuyL15 = function(){	
SceneManager.push(Scene_ServanBuy15);
};
Scene_ServanBuy15.prototype.onIndexOkBuyEx = function(){	
SceneManager.goto(Scene_Map);
}; 
// หน้าต่าง
    function Window_ServanBuy113(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy113.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy113.prototype.constructor = Window_ServanBuy113;
    Window_ServanBuy113.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
	this.drawIcon(1113, window113X+Windowiconx, window113Y+Windowicony);
	this.drawIcon(1114, window114X+Windowiconx, window114Y+Windowicony);
	this.drawIcon(1115, window115X+Windowiconx, window115Y+Windowicony);
	this.drawIcon(1116, window116X+Windowiconx, window116Y+Windowicony);
	this.drawIcon(1117, window117X+Windowiconx, window117Y+Windowicony);
	this.drawIcon(1118, window118X+Windowiconx, window118Y+Windowicony);
	this.drawIcon(1119, window119X+Windowiconx, window119Y+Windowicony);
	this.drawIcon(1120, window120X+Windowiconx, window120Y+Windowicony);
    };	
	
	function Window_ServanBuy114(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy114.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy114.prototype.constructor = Window_ServanBuy114;
    Window_ServanBuy114.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy115(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy115.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy115.prototype.constructor = Window_ServanBuy115;
    Window_ServanBuy115.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy116(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy116.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy116.prototype.constructor = Window_ServanBuy116;
    Window_ServanBuy116.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
 	function Window_ServanBuy117(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy117.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy117.prototype.constructor = Window_ServanBuy117;
    Window_ServanBuy117.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy118(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy118.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy118.prototype.constructor = Window_ServanBuy118;
    Window_ServanBuy118.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
	
	function Window_ServanBuy119(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy119.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy119.prototype.constructor = Window_ServanBuy119;
    Window_ServanBuy119.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
 	function Window_ServanBuy120(){
	this.initialize.apply(this, arguments);
    }
    Window_ServanBuy120.prototype = Object.create(Window_Command.prototype);
    Window_ServanBuy120.prototype.constructor = Window_ServanBuy120;
    Window_ServanBuy120.prototype.initialize = function(x, y){
	Window_Command.prototype.initialize.call(this, x, y);
    };
			
   // set command
   
    Window_ServanBuy113.prototype.makeCommandList = function(){
	this.addCommand(name113, 'ok113', true);
    };

    Window_ServanBuy114.prototype.makeCommandList = function(){
	this.addCommand(name114, 'ok114', true);
    };
	
    Window_ServanBuy115.prototype.makeCommandList = function(){
	this.addCommand(name115, 'ok115', true);
    };
	
    Window_ServanBuy116.prototype.makeCommandList = function(){
	this.addCommand(name116, 'ok116', true);
    };
	
	Window_ServanBuy117.prototype.makeCommandList = function(){
	this.addCommand(name117, 'ok117', true);
    };

	Window_ServanBuy118.prototype.makeCommandList = function(){
	this.addCommand(name118, 'ok118', true);
    };
	
	Window_ServanBuy119.prototype.makeCommandList = function(){
	this.addCommand(name119, 'ok119', true);
    };
	Window_ServanBuy120.prototype.makeCommandList = function(){
	this.addCommand(name120, 'ok120', true);
    };

Window_ServanBuy113.prototype.normalColor = function() {return this.textColor(color113);};
Window_ServanBuy114.prototype.normalColor = function() {return this.textColor(color114);};
Window_ServanBuy115.prototype.normalColor = function() {return this.textColor(color115);};
Window_ServanBuy116.prototype.normalColor = function() {return this.textColor(color116);};
Window_ServanBuy117.prototype.normalColor = function() {return this.textColor(color117);};
Window_ServanBuy118.prototype.normalColor = function() {return this.textColor(color118);};
Window_ServanBuy119.prototype.normalColor = function() {return this.textColor(color119);};
Window_ServanBuy120.prototype.normalColor = function() {return this.textColor(color120);};


var _Spriteset_Map_update = Spriteset_Map.prototype.update;   
Spriteset_Map.prototype.update = function() { _Spriteset_Map_update.call(this);       
var SKsprite1 = new Sprite(); 
var SKsprite2 = new Sprite();   
var SKsprite3 = new Sprite();   
var SKsprite4 = new Sprite();   
var SKsprite5 = new Sprite();   
var SKsprite6 = new Sprite();   
var SKsprite7 = new Sprite();   
var SKsprite8 = new Sprite();   
var SKsprite9 = new Sprite();   
var SKsprite10 = new Sprite();   
var SKsprite11 = new Sprite();   
var SKsprite12 = new Sprite();   
var SKsprite13 = new Sprite();   
var SKsprite14 = new Sprite();   
var SKsprite15 = new Sprite();   
var SKsprite16 = new Sprite();   
var SKsprite17 = new Sprite();   
var SKsprite18 = new Sprite();   
var SKsprite19 = new Sprite();   
var SKsprite20 = new Sprite();   
var SKsprite21 = new Sprite();  
var SKsprite22 = new Sprite();
var SKsprite23 = new Sprite();   
var SKsprite24 = new Sprite();   
var SKsprite25 = new Sprite();   
var SKsprite26 = new Sprite();   
var SKsprite27 = new Sprite();   
var SKsprite28 = new Sprite();   
var SKsprite29 = new Sprite();   
var SKsprite30 = new Sprite();   
var SKsprite31 = new Sprite();   
var SKsprite32 = new Sprite();   
var SKsprite33 = new Sprite();   
var SKsprite34 = new Sprite();   
var SKsprite35 = new Sprite();   
var SKsprite36 = new Sprite();   
var SKsprite37 = new Sprite();   
var SKsprite38 = new Sprite();   
var SKsprite39 = new Sprite();   
var SKsprite40 = new Sprite();   
var SKsprite41 = new Sprite();  
var SKsprite42 = new Sprite(); 
var SKsprite43 = new Sprite();   
var SKsprite44 = new Sprite();   
var SKsprite45 = new Sprite();   
var SKsprite46 = new Sprite();   
var SKsprite47 = new Sprite();   
var SKsprite48 = new Sprite();   
var SKsprite49 = new Sprite();   
var SKsprite50 = new Sprite();   
var SKsprite51 = new Sprite();   
var SKsprite52 = new Sprite();   
var SKsprite53 = new Sprite();   
var SKsprite54 = new Sprite();   
var SKsprite55 = new Sprite();   
var SKsprite56 = new Sprite();   
var SKsprite57 = new Sprite();   
var SKsprite58 = new Sprite();   
var SKsprite59 = new Sprite();   
var SKsprite60 = new Sprite();   
var SKsprite61 = new Sprite();   
var SKsprite62 = new Sprite();  
var SKsprite63 = new Sprite();
var SKsprite64 = new Sprite();   
var SKsprite65 = new Sprite();   
var SKsprite66 = new Sprite();   
var SKsprite67 = new Sprite();   
var SKsprite68 = new Sprite();   
var SKsprite69 = new Sprite();   
var SKsprite70 = new Sprite();   
var SKsprite71 = new Sprite();   
var SKsprite72 = new Sprite();   
var SKsprite73 = new Sprite();   
var SKsprite74 = new Sprite();   
var SKsprite75 = new Sprite();   
var SKsprite76 = new Sprite();   
var SKsprite77 = new Sprite();   
var SKsprite78 = new Sprite();   
var SKsprite79 = new Sprite();   
var SKsprite80 = new Sprite();   
var SKsprite81 = new Sprite();
var SKsprite82 = new Sprite(); 
var SKsprite83 = new Sprite();   
var SKsprite84 = new Sprite();   
var SKsprite85 = new Sprite();   
var SKsprite86 = new Sprite();   
var SKsprite87 = new Sprite();   
var SKsprite88 = new Sprite();   
var SKsprite89 = new Sprite();   
var SKsprite90 = new Sprite();   
var SKsprite91 = new Sprite();   
var SKsprite92 = new Sprite();   
var SKsprite93 = new Sprite();   
var SKsprite94 = new Sprite();   
var SKsprite95 = new Sprite();   
var SKsprite96 = new Sprite();   
var SKsprite97 = new Sprite();   
var SKsprite98 = new Sprite();   
var SKsprite99 = new Sprite();   
var SKsprite100 = new Sprite();   
var SKsprite101 = new Sprite();   
var SKsprite102 = new Sprite();  
var SKsprite103 = new Sprite();
var SKsprite104 = new Sprite();   
var SKsprite105 = new Sprite();   
var SKsprite106 = new Sprite();   
var SKsprite107 = new Sprite();   
var SKsprite108 = new Sprite();   
var SKsprite109 = new Sprite();   
var SKsprite110 = new Sprite();   
var SKsprite111 = new Sprite();   
var SKsprite112 = new Sprite();   
var SKsprite113 = new Sprite();   
var SKsprite114 = new Sprite();   
var SKsprite115 = new Sprite();   
var SKsprite116 = new Sprite();   
var SKsprite117 = new Sprite();   
var SKsprite118 = new Sprite();   
var SKsprite119 = new Sprite();   
var SKsprite120 = new Sprite();   
     

SKsprite1.bitmap = ImageManager.loadSystem(SKWindow1);
SKsprite2.bitmap = ImageManager.loadSystem(SKWindow2);  
SKsprite3.bitmap = ImageManager.loadSystem(SKWindow3);
SKsprite4.bitmap = ImageManager.loadSystem(SKWindow4);  
SKsprite5.bitmap = ImageManager.loadSystem(SKWindow5);
SKsprite6.bitmap = ImageManager.loadSystem(SKWindow6);  
SKsprite7.bitmap = ImageManager.loadSystem(SKWindow7);
SKsprite8.bitmap = ImageManager.loadSystem(SKWindow8); 
SKsprite9.bitmap = ImageManager.loadSystem(SKWindow9);
SKsprite10.bitmap = ImageManager.loadSystem(SKWindow10);  
SKsprite11.bitmap = ImageManager.loadSystem(SKWindow11);
SKsprite12.bitmap = ImageManager.loadSystem(SKWindow12);  
SKsprite13.bitmap = ImageManager.loadSystem(SKWindow13);
SKsprite14.bitmap = ImageManager.loadSystem(SKWindow14);  
SKsprite15.bitmap = ImageManager.loadSystem(SKWindow15);
SKsprite16.bitmap = ImageManager.loadSystem(SKWindow16);
SKsprite17.bitmap = ImageManager.loadSystem(SKWindow17);
SKsprite18.bitmap = ImageManager.loadSystem(SKWindow18);  
SKsprite19.bitmap = ImageManager.loadSystem(SKWindow19);
SKsprite20.bitmap = ImageManager.loadSystem(SKWindow20);  
SKsprite21.bitmap = ImageManager.loadSystem(SKWindow21);
SKsprite22.bitmap = ImageManager.loadSystem(SKWindow22);  
SKsprite23.bitmap = ImageManager.loadSystem(SKWindow23);
SKsprite24.bitmap = ImageManager.loadSystem(SKWindow24);
SKsprite25.bitmap = ImageManager.loadSystem(SKWindow25);
SKsprite26.bitmap = ImageManager.loadSystem(SKWindow26);  
SKsprite27.bitmap = ImageManager.loadSystem(SKWindow27);
SKsprite28.bitmap = ImageManager.loadSystem(SKWindow28);  
SKsprite29.bitmap = ImageManager.loadSystem(SKWindow29);
SKsprite30.bitmap = ImageManager.loadSystem(SKWindow30);  
SKsprite31.bitmap = ImageManager.loadSystem(SKWindow31);
SKsprite32.bitmap = ImageManager.loadSystem(SKWindow32);
SKsprite33.bitmap = ImageManager.loadSystem(SKWindow33);
SKsprite34.bitmap = ImageManager.loadSystem(SKWindow34);  
SKsprite35.bitmap = ImageManager.loadSystem(SKWindow35);
SKsprite36.bitmap = ImageManager.loadSystem(SKWindow36);  
SKsprite37.bitmap = ImageManager.loadSystem(SKWindow37);
SKsprite38.bitmap = ImageManager.loadSystem(SKWindow38);  
SKsprite39.bitmap = ImageManager.loadSystem(SKWindow39);
SKsprite40.bitmap = ImageManager.loadSystem(SKWindow40); 
SKsprite41.bitmap = ImageManager.loadSystem(SKWindow41);
SKsprite42.bitmap = ImageManager.loadSystem(SKWindow42);  
SKsprite43.bitmap = ImageManager.loadSystem(SKWindow43);
SKsprite44.bitmap = ImageManager.loadSystem(SKWindow44);  
SKsprite45.bitmap = ImageManager.loadSystem(SKWindow45);
SKsprite46.bitmap = ImageManager.loadSystem(SKWindow46);  
SKsprite47.bitmap = ImageManager.loadSystem(SKWindow47);
SKsprite48.bitmap = ImageManager.loadSystem(SKWindow48); 
SKsprite49.bitmap = ImageManager.loadSystem(SKWindow49);
SKsprite50.bitmap = ImageManager.loadSystem(SKWindow50);  
SKsprite51.bitmap = ImageManager.loadSystem(SKWindow51);
SKsprite52.bitmap = ImageManager.loadSystem(SKWindow52);  
SKsprite53.bitmap = ImageManager.loadSystem(SKWindow53);
SKsprite54.bitmap = ImageManager.loadSystem(SKWindow54);  
SKsprite55.bitmap = ImageManager.loadSystem(SKWindow55);
SKsprite56.bitmap = ImageManager.loadSystem(SKWindow56);
SKsprite57.bitmap = ImageManager.loadSystem(SKWindow57);
SKsprite58.bitmap = ImageManager.loadSystem(SKWindow58);  
SKsprite59.bitmap = ImageManager.loadSystem(SKWindow59);
SKsprite60.bitmap = ImageManager.loadSystem(SKWindow60);  
SKsprite61.bitmap = ImageManager.loadSystem(SKWindow61);
SKsprite62.bitmap = ImageManager.loadSystem(SKWindow62);  
SKsprite63.bitmap = ImageManager.loadSystem(SKWindow63);
SKsprite64.bitmap = ImageManager.loadSystem(SKWindow64);
SKsprite65.bitmap = ImageManager.loadSystem(SKWindow65);
SKsprite66.bitmap = ImageManager.loadSystem(SKWindow66);  
SKsprite67.bitmap = ImageManager.loadSystem(SKWindow67);
SKsprite68.bitmap = ImageManager.loadSystem(SKWindow68);  
SKsprite69.bitmap = ImageManager.loadSystem(SKWindow69);
SKsprite70.bitmap = ImageManager.loadSystem(SKWindow70);  
SKsprite71.bitmap = ImageManager.loadSystem(SKWindow71);
SKsprite72.bitmap = ImageManager.loadSystem(SKWindow72);
SKsprite73.bitmap = ImageManager.loadSystem(SKWindow73);
SKsprite74.bitmap = ImageManager.loadSystem(SKWindow74);  
SKsprite75.bitmap = ImageManager.loadSystem(SKWindow75);
SKsprite76.bitmap = ImageManager.loadSystem(SKWindow76);  
SKsprite77.bitmap = ImageManager.loadSystem(SKWindow77);
SKsprite78.bitmap = ImageManager.loadSystem(SKWindow78);  
SKsprite79.bitmap = ImageManager.loadSystem(SKWindow79);
SKsprite80.bitmap = ImageManager.loadSystem(SKWindow80);
SKsprite81.bitmap = ImageManager.loadSystem(SKWindow81);
SKsprite82.bitmap = ImageManager.loadSystem(SKWindow82);  
SKsprite83.bitmap = ImageManager.loadSystem(SKWindow83);
SKsprite84.bitmap = ImageManager.loadSystem(SKWindow84);  
SKsprite85.bitmap = ImageManager.loadSystem(SKWindow85);
SKsprite86.bitmap = ImageManager.loadSystem(SKWindow86);  
SKsprite87.bitmap = ImageManager.loadSystem(SKWindow87);
SKsprite88.bitmap = ImageManager.loadSystem(SKWindow88); 
SKsprite89.bitmap = ImageManager.loadSystem(SKWindow89);
SKsprite90.bitmap = ImageManager.loadSystem(SKWindow90);  
SKsprite91.bitmap = ImageManager.loadSystem(SKWindow91);
SKsprite92.bitmap = ImageManager.loadSystem(SKWindow92);  
SKsprite93.bitmap = ImageManager.loadSystem(SKWindow93);
SKsprite94.bitmap = ImageManager.loadSystem(SKWindow94);  
SKsprite95.bitmap = ImageManager.loadSystem(SKWindow95);
SKsprite96.bitmap = ImageManager.loadSystem(SKWindow96);
SKsprite97.bitmap = ImageManager.loadSystem(SKWindow97);
SKsprite98.bitmap = ImageManager.loadSystem(SKWindow98);  
SKsprite99.bitmap = ImageManager.loadSystem(SKWindow99);
SKsprite100.bitmap = ImageManager.loadSystem(SKWindow100);  
SKsprite101.bitmap = ImageManager.loadSystem(SKWindow101);
SKsprite102.bitmap = ImageManager.loadSystem(SKWindow102);  
SKsprite103.bitmap = ImageManager.loadSystem(SKWindow103);
SKsprite104.bitmap = ImageManager.loadSystem(SKWindow104);
SKsprite105.bitmap = ImageManager.loadSystem(SKWindow105);
SKsprite106.bitmap = ImageManager.loadSystem(SKWindow106);  
SKsprite107.bitmap = ImageManager.loadSystem(SKWindow107);
SKsprite108.bitmap = ImageManager.loadSystem(SKWindow108);  
SKsprite109.bitmap = ImageManager.loadSystem(SKWindow109);
SKsprite110.bitmap = ImageManager.loadSystem(SKWindow110);  
SKsprite111.bitmap = ImageManager.loadSystem(SKWindow111);
SKsprite112.bitmap = ImageManager.loadSystem(SKWindow112);
SKsprite113.bitmap = ImageManager.loadSystem(SKWindow113);
SKsprite114.bitmap = ImageManager.loadSystem(SKWindow114);  
SKsprite115.bitmap = ImageManager.loadSystem(SKWindow115);
SKsprite116.bitmap = ImageManager.loadSystem(SKWindow116);  
SKsprite117.bitmap = ImageManager.loadSystem(SKWindow117);
SKsprite118.bitmap = ImageManager.loadSystem(SKWindow118);  
SKsprite119.bitmap = ImageManager.loadSystem(SKWindow119);
SKsprite120.bitmap = ImageManager.loadSystem(SKWindow120);


};

Window_ServanBuy1.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow1);};
Window_ServanBuy2.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow2);};
Window_ServanBuy3.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow3);};
Window_ServanBuy4.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow4);};
Window_ServanBuy5.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow5);};
Window_ServanBuy6.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow6);};
Window_ServanBuy7.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow7);};
Window_ServanBuy8.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow8);};
Window_ServanBuy9.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow9);};
Window_ServanBuy10.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow10);};
Window_ServanBuy11.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow11);};
Window_ServanBuy12.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow12);};
Window_ServanBuy13.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow13);};
Window_ServanBuy14.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow14);};
Window_ServanBuy15.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow15);};
Window_ServanBuy16.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow16);};
Window_ServanBuy17.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow17);};
Window_ServanBuy18.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow18);};
Window_ServanBuy19.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow19);};
Window_ServanBuy20.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow20);};
Window_ServanBuy21.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow21);};
Window_ServanBuy22.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow22);};
Window_ServanBuy23.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow23);};
Window_ServanBuy24.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow24);};
Window_ServanBuy25.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow25);};
Window_ServanBuy26.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow26);};
Window_ServanBuy27.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow27);};
Window_ServanBuy28.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow28);};
Window_ServanBuy29.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow29);};
Window_ServanBuy30.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow30);};
Window_ServanBuy31.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow31);};
Window_ServanBuy32.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow32);};
Window_ServanBuy33.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow33);};
Window_ServanBuy34.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow34);};
Window_ServanBuy35.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow35);};
Window_ServanBuy36.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow36);};
Window_ServanBuy37.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow37);};
Window_ServanBuy38.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow38);};
Window_ServanBuy39.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow39);};
Window_ServanBuy40.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow40);};
Window_ServanBuy41.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow41);};
Window_ServanBuy42.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow42);};
Window_ServanBuy43.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow43);};
Window_ServanBuy44.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow44);};
Window_ServanBuy45.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow45);};
Window_ServanBuy46.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow46);};
Window_ServanBuy47.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow47);};
Window_ServanBuy48.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow48);};
Window_ServanBuy49.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow49);};
Window_ServanBuy50.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow50);};
Window_ServanBuy51.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow51);};
Window_ServanBuy52.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow52);};
Window_ServanBuy53.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow53);};
Window_ServanBuy54.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow54);};
Window_ServanBuy55.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow55);};
Window_ServanBuy56.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow56);};
Window_ServanBuy57.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow57);};
Window_ServanBuy58.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow58);};
Window_ServanBuy59.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow59);};
Window_ServanBuy60.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow60);};
Window_ServanBuy61.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow61);};
Window_ServanBuy62.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow62);};
Window_ServanBuy63.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow63);};
Window_ServanBuy64.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow64);};
Window_ServanBuy65.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow65);};
Window_ServanBuy66.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow66);};
Window_ServanBuy67.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow67);};
Window_ServanBuy68.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow68);};
Window_ServanBuy69.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow69);};
Window_ServanBuy70.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow70);};
Window_ServanBuy71.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow71);};
Window_ServanBuy72.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow72);};
Window_ServanBuy73.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow73);};
Window_ServanBuy74.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow74);};
Window_ServanBuy75.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow75);};
Window_ServanBuy76.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow76);};
Window_ServanBuy77.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow77);};
Window_ServanBuy78.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow78);};
Window_ServanBuy79.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow79);};
Window_ServanBuy80.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow80);};
Window_ServanBuy81.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow81);};
Window_ServanBuy82.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow82);};
Window_ServanBuy83.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow83);};
Window_ServanBuy84.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow84);};
Window_ServanBuy85.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow85);};
Window_ServanBuy86.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow86);};
Window_ServanBuy87.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow87);};
Window_ServanBuy88.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow88);};
Window_ServanBuy89.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow89);};
Window_ServanBuy90.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow90);};
Window_ServanBuy91.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow91);};
Window_ServanBuy92.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow92);};
Window_ServanBuy93.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow93);};
Window_ServanBuy94.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow94);};
Window_ServanBuy95.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow95);};
Window_ServanBuy96.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow96);};
Window_ServanBuy97.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow97);};
Window_ServanBuy98.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow98);};
Window_ServanBuy99.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow99);};
Window_ServanBuy100.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow100);};
Window_ServanBuy101.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow101);};
Window_ServanBuy102.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow102);};
Window_ServanBuy103.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow103);};
Window_ServanBuy104.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow104);};
Window_ServanBuy105.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow105);};
Window_ServanBuy106.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow106);};
Window_ServanBuy107.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow107);};
Window_ServanBuy108.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow108);};
Window_ServanBuy109.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow109);};
Window_ServanBuy110.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow110);};
Window_ServanBuy111.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow111);};
Window_ServanBuy112.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow112);};
Window_ServanBuy113.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow113);};
Window_ServanBuy114.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow114);};
Window_ServanBuy115.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow115);};
Window_ServanBuy116.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow116);};
Window_ServanBuy117.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow117);};
Window_ServanBuy118.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow118);};
Window_ServanBuy119.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow119);};
Window_ServanBuy120.prototype.loadWindowskin = function() {this.windowskin = ImageManager.loadSystem(SKWindow120);};



Window_ServanBuy1.prototype.windowWidth = function() {return window1W;};
Window_ServanBuy2.prototype.windowWidth = function() {return window2W;};
Window_ServanBuy3.prototype.windowWidth = function() {return window3W;};
Window_ServanBuy4.prototype.windowWidth = function() {return window4W;};
Window_ServanBuy5.prototype.windowWidth = function() {return window5W;};
Window_ServanBuy6.prototype.windowWidth = function() {return window6W;};
Window_ServanBuy7.prototype.windowWidth = function() {return window7W;};
Window_ServanBuy8.prototype.windowWidth = function() {return window8W;};
Window_ServanBuy9.prototype.windowWidth = function() {return window9W;};
Window_ServanBuy10.prototype.windowWidth = function() {return window10W;};
Window_ServanBuy11.prototype.windowWidth = function() {return window11W;};
Window_ServanBuy12.prototype.windowWidth = function() {return window12W;};
Window_ServanBuy13.prototype.windowWidth = function() {return window13W;};
Window_ServanBuy14.prototype.windowWidth = function() {return window14W;};
Window_ServanBuy15.prototype.windowWidth = function() {return window15W;};
Window_ServanBuy16.prototype.windowWidth = function() {return window16W;};
Window_ServanBuy17.prototype.windowWidth = function() {return window17W;};
Window_ServanBuy18.prototype.windowWidth = function() {return window18W;};
Window_ServanBuy19.prototype.windowWidth = function() {return window19W;};
Window_ServanBuy20.prototype.windowWidth = function() {return window20W;};
Window_ServanBuy21.prototype.windowWidth = function() {return window21W;};
Window_ServanBuy22.prototype.windowWidth = function() {return window22W;};
Window_ServanBuy23.prototype.windowWidth = function() {return window23W;};
Window_ServanBuy24.prototype.windowWidth = function() {return window24W;};
Window_ServanBuy25.prototype.windowWidth = function() {return window25W;};
Window_ServanBuy26.prototype.windowWidth = function() {return window26W;};
Window_ServanBuy27.prototype.windowWidth = function() {return window27W;};
Window_ServanBuy28.prototype.windowWidth = function() {return window28W;};
Window_ServanBuy29.prototype.windowWidth = function() {return window29W;};
Window_ServanBuy30.prototype.windowWidth = function() {return window30W;};
Window_ServanBuy31.prototype.windowWidth = function() {return window31W;};
Window_ServanBuy32.prototype.windowWidth = function() {return window32W;};
Window_ServanBuy33.prototype.windowWidth = function() {return window33W;};
Window_ServanBuy34.prototype.windowWidth = function() {return window34W;};
Window_ServanBuy35.prototype.windowWidth = function() {return window35W;};
Window_ServanBuy36.prototype.windowWidth = function() {return window36W;};
Window_ServanBuy37.prototype.windowWidth = function() {return window37W;};
Window_ServanBuy38.prototype.windowWidth = function() {return window38W;};
Window_ServanBuy39.prototype.windowWidth = function() {return window39W;};
Window_ServanBuy40.prototype.windowWidth = function() {return window40W;};
Window_ServanBuy41.prototype.windowWidth = function() {return window41W;};
Window_ServanBuy42.prototype.windowWidth = function() {return window42W;};
Window_ServanBuy43.prototype.windowWidth = function() {return window43W;};
Window_ServanBuy44.prototype.windowWidth = function() {return window44W;};
Window_ServanBuy45.prototype.windowWidth = function() {return window45W;};
Window_ServanBuy46.prototype.windowWidth = function() {return window46W;};
Window_ServanBuy47.prototype.windowWidth = function() {return window47W;};
Window_ServanBuy48.prototype.windowWidth = function() {return window48W;};
Window_ServanBuy49.prototype.windowWidth = function() {return window49W;};
Window_ServanBuy50.prototype.windowWidth = function() {return window50W;};
Window_ServanBuy51.prototype.windowWidth = function() {return window51W;};
Window_ServanBuy52.prototype.windowWidth = function() {return window52W;};
Window_ServanBuy53.prototype.windowWidth = function() {return window53W;};
Window_ServanBuy54.prototype.windowWidth = function() {return window54W;};
Window_ServanBuy55.prototype.windowWidth = function() {return window55W;};
Window_ServanBuy56.prototype.windowWidth = function() {return window56W;};
Window_ServanBuy57.prototype.windowWidth = function() {return window57W;};
Window_ServanBuy58.prototype.windowWidth = function() {return window58W;};
Window_ServanBuy59.prototype.windowWidth = function() {return window59W;};
Window_ServanBuy60.prototype.windowWidth = function() {return window60W;};
Window_ServanBuy61.prototype.windowWidth = function() {return window61W;};
Window_ServanBuy62.prototype.windowWidth = function() {return window62W;};
Window_ServanBuy63.prototype.windowWidth = function() {return window63W;};
Window_ServanBuy64.prototype.windowWidth = function() {return window64W;};
Window_ServanBuy65.prototype.windowWidth = function() {return window65W;};
Window_ServanBuy66.prototype.windowWidth = function() {return window66W;};
Window_ServanBuy67.prototype.windowWidth = function() {return window67W;};
Window_ServanBuy68.prototype.windowWidth = function() {return window68W;};
Window_ServanBuy69.prototype.windowWidth = function() {return window69W;};
Window_ServanBuy70.prototype.windowWidth = function() {return window70W;};
Window_ServanBuy71.prototype.windowWidth = function() {return window71W;};
Window_ServanBuy72.prototype.windowWidth = function() {return window72W;};
Window_ServanBuy73.prototype.windowWidth = function() {return window73W;};
Window_ServanBuy74.prototype.windowWidth = function() {return window74W;};
Window_ServanBuy75.prototype.windowWidth = function() {return window75W;};
Window_ServanBuy76.prototype.windowWidth = function() {return window76W;};
Window_ServanBuy77.prototype.windowWidth = function() {return window77W;};
Window_ServanBuy78.prototype.windowWidth = function() {return window78W;};
Window_ServanBuy79.prototype.windowWidth = function() {return window79W;};
Window_ServanBuy80.prototype.windowWidth = function() {return window80W;};
Window_ServanBuy81.prototype.windowWidth = function() {return window81W;};
Window_ServanBuy82.prototype.windowWidth = function() {return window82W;};
Window_ServanBuy83.prototype.windowWidth = function() {return window83W;};
Window_ServanBuy84.prototype.windowWidth = function() {return window84W;};
Window_ServanBuy85.prototype.windowWidth = function() {return window85W;};
Window_ServanBuy86.prototype.windowWidth = function() {return window86W;};
Window_ServanBuy87.prototype.windowWidth = function() {return window87W;};
Window_ServanBuy88.prototype.windowWidth = function() {return window88W;};
Window_ServanBuy89.prototype.windowWidth = function() {return window89W;};
Window_ServanBuy90.prototype.windowWidth = function() {return window90W;};
Window_ServanBuy91.prototype.windowWidth = function() {return window91W;};
Window_ServanBuy92.prototype.windowWidth = function() {return window92W;};
Window_ServanBuy93.prototype.windowWidth = function() {return window93W;};
Window_ServanBuy94.prototype.windowWidth = function() {return window94W;};
Window_ServanBuy95.prototype.windowWidth = function() {return window95W;};
Window_ServanBuy96.prototype.windowWidth = function() {return window96W;};
Window_ServanBuy97.prototype.windowWidth = function() {return window97W;};
Window_ServanBuy98.prototype.windowWidth = function() {return window98W;};
Window_ServanBuy99.prototype.windowWidth = function() {return window99W;};
Window_ServanBuy100.prototype.windowWidth = function() {return window100W;};
Window_ServanBuy101.prototype.windowWidth = function() {return window101W;};
Window_ServanBuy102.prototype.windowWidth = function() {return window102W;};
Window_ServanBuy103.prototype.windowWidth = function() {return window103W;};
Window_ServanBuy104.prototype.windowWidth = function() {return window104W;};
Window_ServanBuy105.prototype.windowWidth = function() {return window105W;};
Window_ServanBuy106.prototype.windowWidth = function() {return window106W;};
Window_ServanBuy107.prototype.windowWidth = function() {return window107W;};
Window_ServanBuy108.prototype.windowWidth = function() {return window108W;};
Window_ServanBuy109.prototype.windowWidth = function() {return window109W;};
Window_ServanBuy110.prototype.windowWidth = function() {return window110W;};
Window_ServanBuy111.prototype.windowWidth = function() {return window111W;};
Window_ServanBuy112.prototype.windowWidth = function() {return window112W;};
Window_ServanBuy113.prototype.windowWidth = function() {return window113W;};
Window_ServanBuy114.prototype.windowWidth = function() {return window114W;};
Window_ServanBuy115.prototype.windowWidth = function() {return window115W;};
Window_ServanBuy116.prototype.windowWidth = function() {return window116W;};
Window_ServanBuy117.prototype.windowWidth = function() {return window117W;};
Window_ServanBuy118.prototype.windowWidth = function() {return window118W;};
Window_ServanBuy119.prototype.windowWidth = function() {return window119W;};
Window_ServanBuy120.prototype.windowWidth = function() {return window120W;};


Window_ServanBuy1.prototype.standardFontSize = function() {return PLKFN1;};
Window_ServanBuy2.prototype.standardFontSize = function() {return PLKFN2;};
Window_ServanBuy3.prototype.standardFontSize = function() {return PLKFN3;};
Window_ServanBuy4.prototype.standardFontSize = function() {return PLKFN4;};
Window_ServanBuy5.prototype.standardFontSize = function() {return PLKFN5;};
Window_ServanBuy6.prototype.standardFontSize = function() {return PLKFN6;};
Window_ServanBuy7.prototype.standardFontSize = function() {return PLKFN7;};
Window_ServanBuy8.prototype.standardFontSize = function() {return PLKFN8;};
Window_ServanBuy9.prototype.standardFontSize = function() {return PLKFN9;};
Window_ServanBuy10.prototype.standardFontSize = function() {return PLKFN10;};
Window_ServanBuy11.prototype.standardFontSize = function() {return PLKFN11;};
Window_ServanBuy12.prototype.standardFontSize = function() {return PLKFN12;};
Window_ServanBuy13.prototype.standardFontSize = function() {return PLKFN13;};
Window_ServanBuy14.prototype.standardFontSize = function() {return PLKFN14;};
Window_ServanBuy15.prototype.standardFontSize = function() {return PLKFN15;};
Window_ServanBuy16.prototype.standardFontSize = function() {return PLKFN16;};
Window_ServanBuy17.prototype.standardFontSize = function() {return PLKFN17;};
Window_ServanBuy18.prototype.standardFontSize = function() {return PLKFN18;};
Window_ServanBuy19.prototype.standardFontSize = function() {return PLKFN19;};
Window_ServanBuy20.prototype.standardFontSize = function() {return PLKFN20;};
Window_ServanBuy21.prototype.standardFontSize = function() {return PLKFN21;};
Window_ServanBuy22.prototype.standardFontSize = function() {return PLKFN22;};
Window_ServanBuy23.prototype.standardFontSize = function() {return PLKFN23;};
Window_ServanBuy24.prototype.standardFontSize = function() {return PLKFN24;};
Window_ServanBuy25.prototype.standardFontSize = function() {return PLKFN25;};
Window_ServanBuy26.prototype.standardFontSize = function() {return PLKFN26;};
Window_ServanBuy27.prototype.standardFontSize = function() {return PLKFN27;};
Window_ServanBuy28.prototype.standardFontSize = function() {return PLKFN28;};
Window_ServanBuy29.prototype.standardFontSize = function() {return PLKFN29;};
Window_ServanBuy30.prototype.standardFontSize = function() {return PLKFN30;};
Window_ServanBuy31.prototype.standardFontSize = function() {return PLKFN31;};
Window_ServanBuy32.prototype.standardFontSize = function() {return PLKFN32;};
Window_ServanBuy33.prototype.standardFontSize = function() {return PLKFN33;};
Window_ServanBuy34.prototype.standardFontSize = function() {return PLKFN34;};
Window_ServanBuy35.prototype.standardFontSize = function() {return PLKFN35;};
Window_ServanBuy36.prototype.standardFontSize = function() {return PLKFN36;};
Window_ServanBuy37.prototype.standardFontSize = function() {return PLKFN37;};
Window_ServanBuy38.prototype.standardFontSize = function() {return PLKFN38;};
Window_ServanBuy39.prototype.standardFontSize = function() {return PLKFN39;};
Window_ServanBuy40.prototype.standardFontSize = function() {return PLKFN40;};
Window_ServanBuy41.prototype.standardFontSize = function() {return PLKFN41;};
Window_ServanBuy42.prototype.standardFontSize = function() {return PLKFN42;};
Window_ServanBuy43.prototype.standardFontSize = function() {return PLKFN43;};
Window_ServanBuy44.prototype.standardFontSize = function() {return PLKFN44;};
Window_ServanBuy45.prototype.standardFontSize = function() {return PLKFN45;};
Window_ServanBuy46.prototype.standardFontSize = function() {return PLKFN46;};
Window_ServanBuy47.prototype.standardFontSize = function() {return PLKFN47;};
Window_ServanBuy48.prototype.standardFontSize = function() {return PLKFN48;};
Window_ServanBuy49.prototype.standardFontSize = function() {return PLKFN49;};
Window_ServanBuy50.prototype.standardFontSize = function() {return PLKFN50;};
Window_ServanBuy51.prototype.standardFontSize = function() {return PLKFN51;};
Window_ServanBuy52.prototype.standardFontSize = function() {return PLKFN52;};
Window_ServanBuy53.prototype.standardFontSize = function() {return PLKFN53;};
Window_ServanBuy54.prototype.standardFontSize = function() {return PLKFN54;};
Window_ServanBuy55.prototype.standardFontSize = function() {return PLKFN55;};
Window_ServanBuy56.prototype.standardFontSize = function() {return PLKFN56;};
Window_ServanBuy57.prototype.standardFontSize = function() {return PLKFN57;};
Window_ServanBuy58.prototype.standardFontSize = function() {return PLKFN58;};
Window_ServanBuy59.prototype.standardFontSize = function() {return PLKFN59;};
Window_ServanBuy60.prototype.standardFontSize = function() {return PLKFN60;};
Window_ServanBuy61.prototype.standardFontSize = function() {return PLKFN61;};
Window_ServanBuy62.prototype.standardFontSize = function() {return PLKFN62;};
Window_ServanBuy63.prototype.standardFontSize = function() {return PLKFN63;};
Window_ServanBuy64.prototype.standardFontSize = function() {return PLKFN64;};
Window_ServanBuy65.prototype.standardFontSize = function() {return PLKFN65;};
Window_ServanBuy66.prototype.standardFontSize = function() {return PLKFN66;};
Window_ServanBuy67.prototype.standardFontSize = function() {return PLKFN67;};
Window_ServanBuy68.prototype.standardFontSize = function() {return PLKFN68;};
Window_ServanBuy69.prototype.standardFontSize = function() {return PLKFN69;};
Window_ServanBuy70.prototype.standardFontSize = function() {return PLKFN70;};
Window_ServanBuy71.prototype.standardFontSize = function() {return PLKFN71;};
Window_ServanBuy72.prototype.standardFontSize = function() {return PLKFN72;};
Window_ServanBuy73.prototype.standardFontSize = function() {return PLKFN73;};
Window_ServanBuy74.prototype.standardFontSize = function() {return PLKFN74;};
Window_ServanBuy75.prototype.standardFontSize = function() {return PLKFN75;};
Window_ServanBuy76.prototype.standardFontSize = function() {return PLKFN76;};
Window_ServanBuy77.prototype.standardFontSize = function() {return PLKFN77;};
Window_ServanBuy78.prototype.standardFontSize = function() {return PLKFN78;};
Window_ServanBuy79.prototype.standardFontSize = function() {return PLKFN79;};
Window_ServanBuy80.prototype.standardFontSize = function() {return PLKFN80;};
Window_ServanBuy81.prototype.standardFontSize = function() {return PLKFN81;};
Window_ServanBuy82.prototype.standardFontSize = function() {return PLKFN82;};
Window_ServanBuy83.prototype.standardFontSize = function() {return PLKFN83;};
Window_ServanBuy84.prototype.standardFontSize = function() {return PLKFN84;};
Window_ServanBuy85.prototype.standardFontSize = function() {return PLKFN85;};
Window_ServanBuy86.prototype.standardFontSize = function() {return PLKFN86;};
Window_ServanBuy87.prototype.standardFontSize = function() {return PLKFN87;};
Window_ServanBuy88.prototype.standardFontSize = function() {return PLKFN88;};
Window_ServanBuy89.prototype.standardFontSize = function() {return PLKFN89;};
Window_ServanBuy90.prototype.standardFontSize = function() {return PLKFN90;};
Window_ServanBuy91.prototype.standardFontSize = function() {return PLKFN91;};
Window_ServanBuy92.prototype.standardFontSize = function() {return PLKFN92;};
Window_ServanBuy93.prototype.standardFontSize = function() {return PLKFN93;};
Window_ServanBuy94.prototype.standardFontSize = function() {return PLKFN94;};
Window_ServanBuy95.prototype.standardFontSize = function() {return PLKFN95;};
Window_ServanBuy96.prototype.standardFontSize = function() {return PLKFN96;};
Window_ServanBuy97.prototype.standardFontSize = function() {return PLKFN97;};
Window_ServanBuy98.prototype.standardFontSize = function() {return PLKFN98;};
Window_ServanBuy99.prototype.standardFontSize = function() {return PLKFN99;};
Window_ServanBuy100.prototype.standardFontSize = function() {return PLKFN100;};
Window_ServanBuy101.prototype.standardFontSize = function() {return PLKFN101;};
Window_ServanBuy102.prototype.standardFontSize = function() {return PLKFN102;};
Window_ServanBuy103.prototype.standardFontSize = function() {return PLKFN103;};
Window_ServanBuy104.prototype.standardFontSize = function() {return PLKFN104;};
Window_ServanBuy105.prototype.standardFontSize = function() {return PLKFN105;};
Window_ServanBuy106.prototype.standardFontSize = function() {return PLKFN106;};
Window_ServanBuy107.prototype.standardFontSize = function() {return PLKFN107;};
Window_ServanBuy108.prototype.standardFontSize = function() {return PLKFN108;};
Window_ServanBuy109.prototype.standardFontSize = function() {return PLKFN109;};
Window_ServanBuy110.prototype.standardFontSize = function() {return PLKFN110;};
Window_ServanBuy111.prototype.standardFontSize = function() {return PLKFN111;};
Window_ServanBuy112.prototype.standardFontSize = function() {return PLKFN112;};
Window_ServanBuy113.prototype.standardFontSize = function() {return PLKFN113;};
Window_ServanBuy114.prototype.standardFontSize = function() {return PLKFN114;};
Window_ServanBuy115.prototype.standardFontSize = function() {return PLKFN115;};
Window_ServanBuy116.prototype.standardFontSize = function() {return PLKFN116;};
Window_ServanBuy117.prototype.standardFontSize = function() {return PLKFN117;};
Window_ServanBuy118.prototype.standardFontSize = function() {return PLKFN118;};
Window_ServanBuy119.prototype.standardFontSize = function() {return PLKFN119;};
Window_ServanBuy120.prototype.standardFontSize = function() {return PLKFN120;};




	 //Set the icon captions in here.

IconCaptions = {
0: "",
cond0: ""
,[1001]: Captions1 
,[1002]: Captions2 
,[1003]: Captions3 
,[1004]: Captions4
,[1005]: Captions5
,[1006]: Captions6
,[1007]: Captions7
,[1008]: Captions8
,[1009]: Captions9
,[1010]: Captions10
,[1011]: Captions11
,[1012]: Captions12
,[1013]: Captions13
,[1014]: Captions14
,[1015]: Captions15
,[1016]: Captions16
,[1017]: Captions17
,[1018]: Captions18
,[1019]: Captions19
,[1020]: Captions20
,[1021]: Captions21
,[1022]: Captions22
,[1023]: Captions23
,[1024]: Captions24
,[1025]: Captions25
,[1026]: Captions26
,[1027]: Captions27
,[1028]: Captions28
,[1029]: Captions29
,[1030]: Captions30
,[1031]: Captions31
,[1032]: Captions32
,[1033]: Captions33
,[1034]: Captions34
,[1035]: Captions35
,[1036]: Captions36
,[1037]: Captions37
,[1038]: Captions38
,[1039]: Captions39
,[1040]: Captions40
,[1041]: Captions41
,[1042]: Captions42
,[1043]: Captions43
,[1044]: Captions44
,[1045]: Captions45
,[1046]: Captions46
,[1047]: Captions47
,[1048]: Captions48
,[1049]: Captions49
,[1050]: Captions50
,[1051]: Captions51
,[1052]: Captions52
,[1053]: Captions53
,[1054]: Captions54
,[1055]: Captions55
,[1056]: Captions56
,[1057]: Captions57
,[1058]: Captions58
,[1059]: Captions59
,[1060]: Captions60
,[1061]: Captions61
,[1062]: Captions62
,[1063]: Captions63
,[1064]: Captions64
,[1065]: Captions65
,[1066]: Captions66
,[1067]: Captions67
,[1068]: Captions68
,[1069]: Captions69
,[1070]: Captions70
,[1071]: Captions71
,[1072]: Captions72
,[1073]: Captions73
,[1074]: Captions74
,[1075]: Captions75
,[1076]: Captions76
,[1077]: Captions77
,[1078]: Captions78
,[1079]: Captions79
,[1080]: Captions80
,[1081]: Captions81
,[1082]: Captions82
,[1083]: Captions83
,[1084]: Captions84
,[1085]: Captions85
,[1086]: Captions86
,[1087]: Captions87
,[1088]: Captions88
,[1089]: Captions89
,[1090]: Captions90
,[1091]: Captions91
,[1092]: Captions92
,[1093]: Captions93
,[1094]: Captions94
,[1095]: Captions95
,[1096]: Captions96
,[1097]: Captions97
,[1098]: Captions98
,[1099]: Captions99
,[1100]: Captions100
,[1101]: Captions101
,[1102]: Captions102
,[1103]: Captions103
,[1104]: Captions104
,[1105]: Captions105
,[1106]: Captions106
,[1107]: Captions107
,[1108]: Captions108
,[1109]: Captions109
,[1110]: Captions110
,[1111]: Captions111
,[1112]: Captions112
,[1113]: Captions113
,[1114]: Captions114
,[1115]: Captions115
,[1116]: Captions116
,[1117]: Captions117
,[1118]: Captions118
,[1119]: Captions119
,[1120]: Captions120


	 }
	 
	 


})();