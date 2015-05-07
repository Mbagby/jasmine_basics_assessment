module.exports = {
	average: function(array){
		var sum = 0;
		for (var i = 0; i <array.length; i++){
			sum += array[i]
		}
		return sum/array.length;
	},
	letterGrade: function(grade){
		if (grade >= 90 && grade <=100){
			return "A"
		}else if (grade >= 80 && grade < 90){
			return "B"
		}else if (grade >= 70 && grade < 80){
			return "C"
		}else if (grade >= 60 && grade < 70){
			return "D"
		}else if (grade >= 0 && grade < 60){
			return "F"
		}
	},
	median: function(array){	
			for(var i=0;i<array.length;i++){
				for(var n=0; n <array.length; n++){
					if (array[n]>array[n+1]){
						var temp = array[n]
						array[n] = array[n+1]
						array[n+1] = temp
					}
				}
			}
				if(array.length % 2 ===0){
					var middle1 = array.length / 2
					var middle2 = middle1 -1
					return((array[middle1] + array[middle2])/2)
				}else
					var middle = (array.length + 1)/2
					return(middle)
	},
	mode: function(array){
			var list = {};
			for (i=0; i< array.length; i++){
				var grade = array[i];
				if(list[grade]){
					list[grade] += 1 
				}else{
					list[grade] = 1;
				}
			}
			return list[grade]
		}
	}
}
//key: Value
//91 : 2


