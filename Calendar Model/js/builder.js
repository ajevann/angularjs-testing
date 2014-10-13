var raw_data = "2014-08-01 04:00:00,2014-08-01 05:22:22,CHG010934,requested,Awaiting Approval,Normal,d9731c846f16e1007af78e354b3ee44b$$2014-08-01 17:00:00,2014-08-01 18:00:00,CHG010935,requested,Awaiting Approval,Normal,5a8454c46f16e1007af78e354b3ee46e$$2014-08-01 19:00:00,2014-08-02 19:01:01,CHG010938,approved,Approved,Normal,3de9d95c6f5221002d52eec54b3ee42b$$2014-08-02 02:00:00,2014-08-03 03:00:00,CHG010936,requested,Awaiting Approval,Normal,0de598c46f16e1007af78e354b3ee437$$2014-08-04 07:00:00,2014-08-05 07:00:00,CHG011096,not requested,Draft,Normal,3e713ae26fd7a1007af78e354b3ee421$$2014-08-04 07:00:00,2014-08-05 07:00:00,CHG010948,approved,Approved,Emergency,828127716f5a21002d52eec54b3ee4d3$$2014-08-05 07:00:00,2014-08-08 07:00:00,CHG010942,approved,Approved,Routine,e7b393786fd221002d52eec54b3ee4aa$$2014-08-05 08:01:01,2014-08-19 08:01:01,CHG010945,approved,Approved,Normal,1dc983cd6f1621002d52eec54b3ee4af$$2014-08-06 15:00:00,2014-08-06 17:00:00,CHG010959,approved,Approved,Normal,02a25d2e6f5e21002d52eec54b3ee410$$2014-08-07 16:00:00,2014-08-07 20:00:00,CHG010172,not requested,Draft,Normal,f0788b036f682500e57a8e354b3ee489$$2014-08-07 20:57:33,2014-08-08 00:57:33,CHG010209,requested,Awaiting Approval,Normal,44ec7b986ffc2500e57a8e354b3ee4f2$$2014-08-08 15:00:00,2014-08-08 16:00:00,CHG010961,approved,Approved,Normal,5d704f6e6f5e21007af78e354b3ee42d$$2014-08-08 15:00:00,2014-08-08 16:00:00,CHG010996,approved,Approved,Routine,6fc8fa036f9261002d52eec54b3ee47c$$2014-08-09 04:00:00,2014-08-09 06:00:00,CHG010949,requested,Awaiting Approval,Normal,7778f7ce6f9a21002d52eec54b3ee4ab$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010982,requested,Awaiting Approval,Normal,0110a13a6fde21007af78e354b3ee4fb$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010983,requested,Awaiting Approval,Normal,89e12d3a6fde21007af78e354b3ee441$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010980,requested,Awaiting Approval,Normal,b40ed9f66fde21007af78e354b3ee465$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010979,requested,Awaiting Approval,Normal,f0dcd1f66fde21007af78e354b3ee411$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010978,requested,Awaiting Approval,Normal,2e7bd9b66fde21007af78e354b3ee4d9$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010976,requested,Awaiting Approval,Normal,c97995b66fde21007af78e354b3ee437$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010975,requested,Awaiting Approval,Normal,aeb71d766fde21007af78e354b3ee480$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010973,requested,Awaiting Approval,Normal,921f45f26fde21007af78e354b3ee45b$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010971,requested,Awaiting Approval,Normal,0ddef8326fde21007af78e354b3ee4eb$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010963,not requested,Draft,Normal,ddbb2cf26fde21002d52eec54b3ee4f8$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010986,requested,Awaiting Approval (Rejected),Normal,ff4ae1ba6fde21007af78e354b3ee4b2$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010998,approved,Approved,Routine,2b1e482f6f1621007af78e354b3ee487$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010989,approved,Approved,Normal,87a135fa6fde21007af78e354b3ee4fb$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010988,approved,Approved,Normal,b87fe5fa6fde21007af78e354b3ee421$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010994,not requested,Draft,Normal,40a0358b6f5221007af78e354b3ee4dd$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010987,approved,Approved,Normal,cebd29ba6fde21007af78e354b3ee4e6$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010985,requested,Awaiting Approval (Rejected),Normal,e1d5e57a6fde21007af78e354b3ee4fe$$2014-08-09 07:00:00,2014-08-10 07:00:00,CHG010991,requested,Awaiting Approval,Normal,ac35d2366f1221007af78e354b3ee4fa$$2014-08-09 15:00:00,2014-08-09 17:00:00,CHG010999,approved,Approved,Routine,686ea0af6f1661002d52eec54b3ee412$$2014-08-10 01:00:00,2014-08-10 03:00:00,CHG010962,not requested,Draft,Normal,c318ecb26fde21002d52eec54b3ee4e0$$2014-08-12 08:01:01,2014-08-19 08:01:01,CHG010952,requested,Awaiting Approval,Normal,aaf6abda6f1e21002d52eec54b3ee4e6$$2014-08-12 08:01:01,2014-08-26 08:01:01,CHG010954,approved,Approved,Routine,29b7bb9e6f1e21002d52eec54b3ee4fb$$2014-08-12 08:01:01,2014-08-26 08:01:01,CHG010953,approved,Approved,Routine,b165ff5e6f1e21002d52eec54b3ee481$$2014-08-13 19:00:00,2014-08-13 21:00:00,CHG010960,requested,Awaiting Approval,Normal,20ff7e6e6f5e21007af78e354b3ee42a$$2014-08-14 07:00:00,2014-08-16 07:00:00,CHG011004,not requested,Draft,Normal,7d76c5f86fae61002d52eec54b3ee407$$2014-08-14 15:00:00,2014-08-15 00:00:00,CHG011009,approved,Approved,Normal,223554316f2e21007af78e354b3ee49a$$2014-08-19 04:00:00,2014-08-19 05:00:00,CHG011011,approved,Approved,Emergency,854aaf226fe261007af78e354b3ee4eb$$2014-08-19 04:00:00,2014-08-19 05:00:00,CHG011013,not requested,Draft,Emergency,d615b3ea6f2ea1002d52eec54b3ee4e9$$2014-08-20 19:00:00,2014-08-20 20:00:00,CHG010984,not requested,Draft,Normal,a732e13a6fde21007af78e354b3ee4c7$$2014-08-21 04:00:00,2014-08-21 05:00:00,CHG011019,approved,Approved,Normal,bcb5590b6f2a61007af78e354b3ee4e4$$2014-08-21 04:00:00,2014-08-21 09:00:00,CHG010993,approved,Approved,Normal,98bcfb3e6f1261002d52eec54b3ee499$$2014-08-21 05:00:00,2014-08-21 06:00:00,CHG010964,requested,Awaiting Approval,Normal,34713c366fde21002d52eec54b3ee411$$2014-08-21 05:00:00,2014-08-21 06:00:00,CHG010966,approved,Approved,Normal,d9c5b4766fde21002d52eec54b3ee43c$$2014-08-21 05:00:00,2014-08-21 06:00:00,CHG010967,requested,Awaiting Approval,Normal,6576fc366fde21002d52eec54b3ee4fa$$2014-08-21 05:00:00,2014-08-21 06:00:00,CHG010968,requested,Awaiting Approval,Normal,f718b0b66fde21002d52eec54b3ee407$$2014-08-21 05:00:00,2014-08-21 06:00:00,CHG010969,requested,Awaiting Approval,Normal,34b8f8766fde21002d52eec54b3ee48d$$2014-08-21 05:00:00,2014-08-21 06:00:00,CHG010970,requested,Awaiting Approval,Normal,be69b4b66fde21002d52eec54b3ee406$$2014-08-21 05:00:00,2014-08-21 06:00:00,CHG010972,requested,Awaiting Approval,Normal,ba9f70726fde21007af78e354b3ee462$$2014-08-21 05:00:00,2014-08-21 06:00:00,CHG010965,requested,Awaiting Approval,Normal,4273b0766fde21002d52eec54b3ee452$$2014-08-21 21:00:09,2014-08-22 01:00:09,CHG010210,approved,Approved,Informational,227db7986ffc2500e57a8e354b3ee41a$$2014-08-21 22:00:00,2014-08-21 23:00:00,CHG010958,approved,Approved,Normal,3d02d52a6f5e21007af78e354b3ee4eb$$2014-08-26 08:01:01,2014-09-26 08:01:01,CHG010946,approved,Approved,Normal,9a4223016f5621007af78e354b3ee448$$2014-08-28 20:00:00,2014-08-28 21:00:00,CHG011047,not requested,Draft,Normal,6f76ed596ff225002d52eec54b3ee4f5$$2014-08-28 20:00:00,2014-08-28 21:00:00,CHG011024,requested,Awaiting Approval,Emergency,32ff3d1f6faa61007af78e354b3ee45c$$2014-08-30 13:00:00,2014-08-31 01:00:00,CHG011030,requested,Awaiting Approval,Normal,dd6c07b46f3225002d52eec54b3ee455$$2014-08-30 19:00:00,2014-08-30 21:00:00,CHG011050,requested,Awaiting Approval (Rejected),Normal,d710f9a16f3221007af78e354b3ee405$$2014-08-31 13:00:00,2014-08-31 19:00:00,CHG010957,requested,Awaiting Approval,Normal,937a98ae6f1e21007af78e354b3ee417$$2014-08-31 15:00:00,2014-08-31 21:00:00,CHG011032,requested,Awaiting Approval,Normal,6050e3fc6f76a1007af78e354b3ee438$$2014-08-31 19:00:00,2014-09-01 01:00:00,CHG011029,requested,Awaiting Approval,Normal,e4c58c446f32a1007af78e354b3ee4b0$$2014-09-01 08:00:00,2014-09-04 08:00:00,CHG011048,requested,Awaiting Approval,Normal,ea62a0e96ffaa1007af78e354b3ee48c$$2014-09-01 10:00:00,2014-09-01 13:00:00,CHG011058,approved,Approved,Normal,175f6d066f7221007af78e354b3ee42a$$2014-09-04 07:00:00,2014-09-04 07:00:00,CHG010134,requested,Awaiting Approval,Normal,ebf0a9d36f58e100e57a8e354b3ee420$$2014-09-04 07:00:00,2014-09-04 07:00:00,CHG010133,requested,Awaiting Approval,Normal,3f0cd1d36f58e100e57a8e354b3ee4af$$2014-09-04 16:00:00,2014-09-04 20:00:00,CHG010064,requested,Awaiting Approval,Emergency,c2fc034a6f40a100e57a8e354b3ee439$$2014-09-04 16:00:00,2014-09-04 20:00:00,CHG010008,requested,Awaiting Approval,Normal,573483346f0c6100e57a8e354b3ee4c4$$2014-09-04 16:00:00,2014-09-04 20:00:00,CHG010011,requested,Awaiting Approval,Normal,b41603346f0c6100e57a8e354b3ee4d3$$2014-09-08 07:00:00,2014-09-08 11:00:00,CHG010132,approved,Approved,Informational,5d0b1d936f58e100e57a8e354b3ee41a$$2014-09-09 17:00:00,2014-09-09 21:00:00,CHG010335,not requested,Draft,Normal,cd3088b46f01a500e57a8e354b3ee43a$$2014-09-10 19:00:00,2014-09-10 20:00:00,CHG011054,requested,Awaiting Approval,Emergency,146af6756ffa25002d52eec54b3ee431$$2014-09-12 07:00:00,2014-09-12 07:00:00,CHG011078,not requested,Draft,Normal,e1726a126f4321002d52eec54b3ee42b$$2014-09-12 08:01:01,2014-09-13 08:01:01,CHG011077,requested,Awaiting Approval,Normal,dbf297c26fc7e5002d52eec54b3ee430$$2014-09-14 08:00:00,2014-09-14 11:00:00,CHG011080,requested,Awaiting Approval,Normal,51a74cf66f4321002d52eec54b3ee422$$2014-09-14 15:00:00,2014-10-15 08:00:00,CHG011083,requested,Awaiting Approval (Rejected),Normal,002641b66f8321007af78e354b3ee4ac$$2014-09-16 03:00:00,2014-09-16 04:00:00,CHG011084,approved,Approved,Routine,d3abee6b6f0f21002d52eec54b3ee4d7$$2014-09-18 07:00:00,2014-09-28 07:00:00,CHG011089,requested,Awaiting Approval,Normal,70f6f3d46f1761002d52eec54b3ee49c$$2014-09-18 07:00:00,2014-09-19 07:00:00,CHG011088,requested,Awaiting Approval,Normal,3f2677546f1761002d52eec54b3ee4d0$$2014-09-20 13:00:00,2014-09-21 01:00:00,CHG010992,requested,Awaiting Approval,Normal,a77cde726f1261002d52eec54b3ee4ef$$2014-09-20 16:00:18,2014-09-20 17:00:00,CHG011005,requested,Awaiting Approval,Normal,8706a5bc6fa221007af78e354b3ee48e$$2014-09-24 02:03:56,2014-09-24 06:03:56,CHG010328,not requested,Draft,Normal,9f7e77e46f01a500e57a8e354b3ee474$$2014-09-24 18:11:11,2014-09-26 18:11:11,CHG011094,not requested,Draft,Normal,f4093f0a6f53a1007af78e354b3ee4f5$$2014-09-26 17:00:00,2014-09-26 21:00:00,CHG010323,requested,Awaiting Approval,Normal,29dc73a46f01a500e57a8e354b3ee4ef$$2014-09-27 18:11:11,2014-09-28 18:11:11,CHG011097,requested,Awaiting Approval,Normal,71a560df6f9fa1007af78e354b3ee486$$2014-09-30 21:00:00,2014-10-02 04:00:00,CHG011051,requested,Awaiting Approval,Normal,280c02e56f3221007af78e354b3ee401$$2014-10-01 15:00:00,2014-10-01 15:15:00,CHG011081,requested,Awaiting Approval,Emergency,88540db66f8321007af78e354b3ee4ce$$2014-10-18 15:00:00,2014-10-18 19:00:00,CHG010377,requested,Awaiting Approval,Emergency,4bbf8cb46f8d2500dd3deec54b3ee4ca$$2014-11-02 01:00:00,2014-11-30 05:00:00,CHG011056,requested,Awaiting Approval,Normal,a0576f7d6ffa25002d52eec54b3ee47b$$2014-11-04 18:00:00,2015-01-09 18:00:00,CHG011091,not requested,Draft,Normal,decc0b3d6fdf61002d52eec54b3ee4b2$$2014-11-04 19:11:11,2015-01-08 19:11:11,CHG011092,not requested,Draft,Normal,d059efbd6f5f61007af78e354b3ee4d9";
var test_data = loadData(raw_data);

function loadDailyRequests(year, month, day) {
	var currDate = new Date(year, month + 1, day);

	//console.log('c : ' + currDate.toString());

	var div = '<div class="cal-change-request-container">';

	var i = 0;
	for (i = 0; i < test_data.length; i++) {
		var item_startDate 	= test_data[i][0];
		var item_endDate 	= test_data[i][1];

		if (compareDate(currDate, item_startDate, item_endDate)) {

			var item_number 	= test_data[i][2].toString();
			var item_approval 	= test_data[i][3];
			var item_state 		= test_data[i][4];
			var item_type 		= test_data[i][5];
			var item_sysId		= test_data[i][6];

			var color = setColor(item_state);

			var item = 
				'<div class="cal-change-request-item ' + item_number + '" style="background-color:' + color + ';" onmouseover="highlightAll(\'' + 
					item_number.toString() + '\')"  onmouseout="unhighlightAll(\'' + item_number.toString() + '\')"><a class="request-link" href="' + 
					item_sysId + '"><strong>' + item_number + '</strong> (' + item_state + ') ' + item_type + '</a></div>';

			div = div.concat(item);
		}
	}
	
	div = div.concat('</div>');
	return div;

}

function loadData(raw) {
	var a = raw.split('$$');
	var b = [];
	
	var i = 0;
	for (i = 0; i < a.length; i++) {
		var c = a[i].split(',');
		c[0] = formatDate(c[0]);
		c[1] = formatDate(c[1]);
		b.push(c);
		//console.log(c);
	}

	return b;
}

function formatDate(date) {
	var a = date.split(' ');
	var b = a[0].split('-');
	var c = a[1].split(':');

	var newDate = new Date(b[0], b[1], b[2], c[0], c[1], c[2]);

	return newDate;
}

function compareDate(currDate, startDate, endDate) {
	if (startDate.getYear() == currDate.getYear() &&
		startDate.getMonth() == currDate.getMonth() &&
		startDate.getDate() == currDate.getDate()) {
		return true;
	}

	if (startDate.getYear() == currDate.getYear() &&
		startDate.getMonth() == currDate.getMonth() &&
		startDate.getDate() == currDate.getDate()) {
		return true;
	}

	if (startDate <= currDate && currDate <= endDate) {
		return true;
	}

	return false;
}

function setColor(approval) {
	if (approval == 'Informational') return '#FFF380';
	if (approval == 'Draft') return '#FFFFFF';
	if (approval == 'Approved') return '#4AA02C';
	if (approval == 'Closed') return '#736F6E';
	if (approval == 'Awaiting Approval') return '#F88017';
}
