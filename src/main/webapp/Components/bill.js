$(document).ready(function() {
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

// save=========================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
 	$("#alertSuccess").text("");
 	$("#alertSuccess").hide();
 	$("#alertError").text("");
 	$("#alertError").hide();

	// Form validation-------------------
	var status = validateBillForm();
	if (status != true)
 	{
 		$("#alertError").text(status);
 		$("#alertError").show();
 		return;
 	}
	
	// If valid------------------------
	var type = ($("#hidbillIDSave").val() == "") ? "POST" : "PUT";
 	$.ajax(
 	{
 		url : "BillAPI",
 		type : type,
 		data : $("#formBill").serialize(),
 		dataType : "text",
 		complete : function(response, status)
 	{
 
	onBillSaveComplete(response.responseText, status);
 	}
 });
	
	
});

//Save function ===============================
function onBillSaveComplete(response, status)
	{
	if (status == "success")
	 	{
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divBillsGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error")
	{
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	 	$("#hidbillIDSave").val("");
	 	$("#formBill")[0].reset();
	}
	


	
// update ======================================	
$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidbillIDSave").val(
					$(this).closest("tr").find('#hidbillIDUpdate').val());
 	$("#bName").val($(this).closest("tr").find('td:eq(0)').text());
	$("#bDate").val($(this).closest("tr").find('td:eq(1)').text());
 	$("#accNo").val($(this).closest("tr").find('td:eq(2)').text());
 	$("#preReading").val($(this).closest("tr").find('td:eq(3)').text());
	$("#currentReading").val($(this).closest("tr").find('td:eq(4)').text());
});





//Delete==============================================
$(document).on("click", ".btnRemove", function(event)
{
 	$.ajax(
 	{
 		url : "BillAPI",
 		type : "DELETE",
 		data : "billID=" + $(this).data("billid"),
 		dataType : "text",
 		complete : function(response, status)
 		{
 		onBillDeleteComplete(response.responseText, status);
 		}
 	});
});

//Delete function ================================
function onBillDeleteComplete(response, status)
{
	if (status == "success")
 	{
 		var resultSet = JSON.parse(response);
 		if (resultSet.status.trim() == "success")
 	{
 		$("#alertSuccess").text("Successfully deleted.");
 		$("#alertSuccess").show();
 		$("#divBillsGrid").html(resultSet.data);
 	} 
	else if (resultSet.status.trim() == "error")
 	{
 		$("#alertError").text(resultSet.data);
 		$("#alertError").show();
 	}
 	} 
		else if (status == "error")
 	{
 		$("#alertError").text("Error while deleting.");
 		$("#alertError").show();
 	} 
		else
 	{
 		$("#alertError").text("Unknown error while deleting..");
 		$("#alertError").show();
 	}
}

//Form validation ===================================
function validateBillForm()
{
	// Consumer name
	if ($("#bName").val().trim() == "")
 	{
 		return "Please Enter Consumer Name.";
 	}
	// Date
	if ($("#bDate").val().trim() == "")
 	{
 		return "Please Enter Date.";
 	}
	// Account number
	if ($("#accNo").val().trim() == "")
	{
 		return "Please Enter Account Number.";
 	}
	// Last reading
	if ($("#preReading").val().trim() == "")
 	{
 		return "Please Enter Last Reading Value.";
 	}
	// Current reading
	if ($("#currentReading").val().trim() == "")
	{
 		return "Please Enter Current Reading Value.";
 	}

	return true;
}
