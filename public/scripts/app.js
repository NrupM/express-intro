console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  // album ajax request
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleAlbumSuccess,
    error: handleAlbumError
  });

  // function handleAlbumSuccess(json) {
  //   console.log(json);
  //   json.forEach(function(event, i){
  //     $('#albums').append($(`<p> ${json[i].title} ${json[i].artist} </p>`));
  //   })
  // }

  function handleSuccess(json) {
  // takes an array of albums and renders them as an unordered list
  var albums = json;
  var outputHtml = '<ul>';
  albums.forEach(function(album) {
    outputHtml = outputHtml + "<li>" + album.artist + " -- " + album.title + "</li>";
  });
  outputHtml += '</ul>';
  $('#albumTarget').html(outputHtml);
}

  function handleAlbumError(xhr, status, errorThrown) {
    console.log('uh oh this album is on backorder');
  }

//taquerias ajax request
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/taquerias',
    success: handleTacoSuccess,
    error: handleTacoError
  });

  function handleTacoSuccess(json) {
    console.log(json);
    json.forEach(function(event, i){
      $('#taquerias').append($(`<p> ${json[i].name}</p>`));
    })
  }


  function handleTacoError(xhr, status, errorThrown) {
    console.log('no taco for you');
  }

});
