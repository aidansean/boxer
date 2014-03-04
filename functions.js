var cellSize = 60 ;
var nRows = 10 ;
var nCols = 10 ;

var cells = new Array() ;
for(var i=0 ; i<nRows ; i++){
  cells.push(new Array()) ;
  for(var j=0 ; j<nCols ; j++){
    cells[i].push(-1) ;
  }
}

function max_box_size(u, v){
  var counter = 1 ;
  while(true){
    if(u+counter==nRows) return counter ;
    if(v+counter==nCols) return counter ;
    for(var i=0 ; i<=counter ; i++){
      if(cells[u+counter][v+i]!=-1) return counter ;
      if(cells[u+i][v+counter]!=-1) return counter ;
    }
    counter++ ;
  }
}

function fill_box(u, v, size){
  for(var i=u ; i<u+size ; i++){
    for(var j=v ; j<v+size ; j++){
      cells[i][j] = 0 ;
    }
  }
  cells[u][v] = size ;
}

function pick_free_cell(){
  var free_u = new Array() ;
  var free_v = new Array() ;
  for(var i=0 ; i<nRows ; i++){
    for(var j=0 ; j<nCols ; j++){
      if(cells[i][j]==-1){
        free_u.push(i) ;
        free_v.push(j) ;
      }
    }
  }
  if(free_u.length==0) return [-1,-1] ;
  var index = Math.floor(Math.random()*free_u.length) ;
  return [free_u[index],free_v[index]] ;
}

function pick_size(u,v){
  var max_size = max_box_size(u,v) ;
  var size = 1+Math.floor(Math.random()*max_size) ;
  return size ;
}

function add_next_box(){
  var next_cell = pick_free_cell() ;
  if(next_cell[0]==-1) return ;
  var u = next_cell[0] ;
  var v = next_cell[1] ;
  var size = pick_size(u,v) ;
  fill_box(u,v,size) ;
  add_next_box() ;
}

function start(){
  var tbody = document.getElementById("tbody_boxes") ;
  var tr ;
  var td ;
  var n = 5 ;
  var w ;
  var h ;
  
  add_next_box() ;
  
  // Top spacer
  tr = document.createElement("tr") ;
  tr.id = "tr_spacerTop" ;
  
  td = document.createElement("td") ;
  td.id = "td_spacerTopLeft_" ;
  td.className = 'spacerCorner' ;
  tr.appendChild(td) ;
  
  for(var j=0 ; j<nCols ; j++){
    td = document.createElement("td") ;
    td.id = "td_spacerTop_" + j ;
    td.className = 'spacerH' ;
    tr.appendChild(td) ;
  }
  
  td = document.createElement("td") ;
  td.id = "td_spacerTopRight_" ;
  td.className = 'spacerCorner' ;
  tr.appendChild(td) ;
  tbody.appendChild(tr) ;
  
  // Cells
  for(var i=0 ; i<nRows ; i++){
    tr = document.createElement("tr") ;
    tr.id = "tr_" + i ;
    
    td = document.createElement("td") ;
    td.id = "td_spacerLeft_" + i ;
    td.className = "spacerV" ;
    tr.appendChild(td) ;
    
    for(var j=0 ; j<nCols ; j++){
      var size = cells[i][j] ;
      if(size==0) continue ;
      td = document.createElement("td") ;
      td.id = "td_" + i + "_" + j ;
      td.setAttribute("colspan",size) ;
      td.setAttribute("rowspan",size) ;
      var color = "rgb(" + (10*i) + "," + (10*j) + ",0)" ;
      color = "rgb("+(100+(25*i))+",0,"+(100+(25*j))+")" ;
      td.style.backgroundColor = color ;
      td.style.fontSize = (40*size) + "px" ;
      var noise_x = (Math.floor(Math.random()*5)+2)*10 ;
      var noise_y = (Math.floor(Math.random()*5)+2)*10 ;
      w = cellSize*size+noise_x ;
      h = cellSize*size+noise_y ;
      td.style.backgroundImage = "url(http://placekitten.com/g/"+w+"/"+h+")" ;
      //td.innerHTML = size ;
      tr.appendChild(td) ;
    }
    td = document.createElement("td") ;
    td.id = "td_spacerRight_" + i ;
    td.className = "spacerV" ;
    tr.appendChild(td) ;
    
    tbody.appendChild(tr) ;
  }
  
  // Bottom spacer
  tr = document.createElement("tr") ;
  tr.id = "tr_spacerBottom" ;
  
  td = document.createElement("td") ;
  td.id = "td_spacerBottomLeft_" ;
  td.className = 'spacerCorner' ;
  tr.appendChild(td) ;
  
  for(var j=0 ; j<nCols ; j++){
    td = document.createElement("td") ;
    td.id = "td_spacerBottom_" + j ;
    td.className = 'spacerH' ;
    tr.appendChild(td) ;
  }
  
  td = document.createElement("td") ;
  td.id = "td_spacerBottomRight_" ;
  td.className = 'spacerCorner' ;
  tr.appendChild(td) ;
  tbody.appendChild(tr) ;
}