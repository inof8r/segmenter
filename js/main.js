var appVersion = 0.1;

function testMessage(msg) {
	alert("msg:" + msg)
}


function SegmentFactory(){  

	this.blockvals = ["Default A","Default B","Default C","Default D"];    
	this.targ = null;

	this.setTarg = function(targ){  
		this.targ = $("#" + targ);
	};  
	this.segmentTarg = function(targ, type, params){  

		var theHTML = "";
		if (type == "splitV") {
			theHTML += '<div id="' + targ + '_cell_0" class="col50x100">' + this.blockvals[0] + '</div>';
			theHTML += '<div id="' + targ + '_cell_1" class="col50x100">' + this.blockvals[1] + '</div>';			
		}
		if (type == "splitH") {
			theHTML += '<div id="' + targ + '_cell_0" class="col100x50">' + this.blockvals[0] + '</div>';
			theHTML += '<div id="' + targ + '_cell_1" class="col100x50">' + this.blockvals[1] + '</div>';			
		}
		if (type == "cross") {
			theHTML += '<div id="' + targ + '_cell_0" class="col50x50">' + this.blockvals[0] + '</div>';
			theHTML += '<div id="' + targ + '_cell_1" class="col50x50">' + this.blockvals[1] + '</div>';			
			theHTML += '<div id="' + targ + '_cell_2" class="col50x50">' + this.blockvals[2] + '</div>';
			theHTML += '<div id="' + targ + '_cell_3" class="col50x50">' + this.blockvals[3] + '</div>';			
		}

		$("#" + targ).html(theHTML);
	};  
	
	
        
}