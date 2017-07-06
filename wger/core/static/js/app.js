$(document).ready( function () {
     /* Make table sortable */
     $('#main_member_list').DataTable({
         bFilter: true,
         paging: false,
         bInfo : false
     });
 });
