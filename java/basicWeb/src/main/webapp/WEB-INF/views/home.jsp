<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Grid</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<link rel="stylesheet" href="resources/css/project01.css" type="text/css">
</head>
<body>
  <h1>Grid그리드</h1>
  <div class="all">
  	<form action="/register" method="post">
  		<div class="top">
  		
  			<label for="id">
  				<input class="inputId" type="text" placeholder="아이디" id="userID" name="userID" maxlength="20">
  			</label>
  			
  			<label for="name">
  				<input class="inputName" type="text" placeholder="이름" id="userName" name="userName" maxlength="20">
  			</label>
      	
     	 	<label for="sex" class="gender"><input type="radio" name="sex" value="남"> 남</label>
      	<label for="sex" class="gender"><input type="radio" name="sex" value="녀"> 녀</label>
      
      	<select id="country" onchange="optionChange()" name="country">
	        <option value="" style="color: rgb(194, 194, 194);" selected disabled>국가</option>
	        <option value="한국">한국</option>
	        <option value="일본">일본</option>
	        <option value="중국">중국</option>
	      </select>

	      <select id="city" name="city">
	        <option value="" selected disabled>도시</option>
	        <option></option>
	      </select>
	      
	     
	      
	      <input type="date">
	      <input type="date">
    	</div>
	    <div class="middle">
	      <input type="button" value="조회">
	      <input type="submit" class="update_btn" id="update_btn" value="저장">
	      <input type="button" value="엑셀다운">
	      <input type="button" class="delete_btn" id="delete_btn" value="삭제" onclick="deleteVal();" >
	    </div>
  	</form>
    
    <div class="bottom">
      <table>
        <tr>
          <th>선택</th>
          <th>아이디</th>
          <th>이름</th>
          <th>성별</th>
          <th>국가</th>
          <th>도시</th>
        </tr>
        	<c:forEach items="${list}" var="list">
						<tr>
							<td><input type="checkbox" id="seIn" name="seIn" class="seIn" value="${list.bno}" ></td>
							<td><c:out value="${list.userID}" /></td>
							<td><c:out value="${list.userName}" /></td>
							<td><c:out value="${list.sex}" /></td>
							<td><c:out value="${list.country}" /></td>
							<td><c:out value="${list.city}" /></td>
						</tr>
					</c:forEach>
      </table>
    </div>
  </div>
	
	<script type="text/javascript">
	$(function(){
		var chkObj = document.getElementsByNAme()
	});
	</script>

  <script>
	//국가 메뉴 서브 도시
    function optionChange(){
    	var korea = ['서울', '인천', '부산'];
      var japan = ['도쿄', '오사카', '삿포르'];
      var china = ['베이징', '상하이', '우한'];

      var v = $('#country').val();
      var o;
      if (v == '한국'){
        o = korea;
      }else if (v == '일본'){
        o = japan;
      }else if (v == '중국'){
        o = china;
      }else{
        o = [];
      }
      $('#city').empty();
      $('#city').append('<option value="" style="color: rgb(194, 194, 194);" selected disabled>도시</option>');
      for(var i = 0; i<o.length; i++){
      	$('#city').append('<option name="'+ o[i] +'">' + o[i] + '</option>');
      }
    }
	//선택삭제
	
  </script>
  
	<!-- Jquery 사용문-->
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
		
	<!-- bootstrap -->
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
	</body>
</html>