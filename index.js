// Code your solution in this file!
// Code your solution in this file
function distanceFromHqInBlocks(someValue){
    if (someValue<42){
        return(42-someValue);
      }
      else {
    
      return(someValue-42)
        }  
}    
function distanceFromHqInFeet(someValue){
    if (someValue<42){
        return(264*(42-someValue));
      }
      else {
    
      return(264*(someValue-42))
        }  
}
function distanceTravelledInFeet(start,destination){
    if (destination>start){
        return ((destination-start)*264)
    }else{
        return ((start-destination)*264)
    }
    
}
function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start,destination)
    if(feet <= 400){
        return 0;
    }
    else if(feet > 400 && feet <= 2000){
        return (feet - 400) * 0.02;

    }else if(feet > 2000 && feet <= 2500){
        return 25;
    }else{
        return 'cannot travel that far'
    }
}