var isDate = function(obj){
	 return !!(obj && obj.getTimezoneOffset && obj.setUTCFullYear);
}

Date.prototype.strftime = function(){
       function _zero(num){return (num < 10 ) ? "0"+num : ""+num };
       return [this.getFullYear()+"", _zero(this.getMonth()+1), _zero(this.getDate()) ].join('-') + " " + 
                        [this.getHours(), this.getMinutes(), this.getSeconds()].join(':')
}

if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(/{([^{}]*)}/g,
            function (a, b) {
                var r = o[b];
				return isDate(o[b]) ? o[b].strftime():  r.toString();
            }
        );
    };
}