import * as Alloy from 'alloy';
import index from '/controllers/index';

Alloy.Globals.someProperty = true;
Alloy.Globals.isIOS7 = (OS_IOS && parseInt(Ti.Platform.version, 10) >= 7);
Alloy.Globals.isTalliPhone = (OS_IOS && Ti.Platform.displayCaps.platformHeight == 568);

new index();
