<script type="text/javascript" src="logics.js"></script>
<title>Admin</title>

<form>
      <input id="searchquery" type="text" placeholder="Search.." name="search">
      
    </form>
    <button style="float: left;" onclick="adminsearch()">search</button>

   <select style="visibility: visible;  " id="search_selection_id1" >
	<option>user</option>
	<option>product</option>
	<option>pages</option>
</select>


<select style="visibility: visible; " id="search_selection_id2" onchange="search_selection()">
	<option>name</option>
	<option>phone</option>
	<option>email</option>
	<option>address</option>
</select>

<select style="visibility:visible; " id="search_selection_id3" >
	<option>product name</option>
	<option>product ID</option>
</select>

<a onclick="xyz()" style="cursor: pointer; cursor: hand;">haseeb</a>

<div id="searchresultbodydiv">

<!-- <table id="result_table">

<thead> 

<tr>
<th>Name</th>
<th>Phone</th>
<th>Email</th>
<th>Address</th>
</tr>
</thead>


<tbody id="table_body">
	
</tbody>


</table> -->
</div>