/**
 * Created by Andrey on 10.04.2015.
 */
/*3.	�� ����� ���������� ������ �����, ������������ �������� � ������ ������.
 ��� ������� �� ������ ����� ������ �� ��������� � ������ �����.
  ���� ����� �� �������, �� �������� �� ����.*/

var button = document.getElementById ("button");
button.style.marginLeft = "5%";

myStr = new Array (9);

for (var i = 1; i < 10; i++) {
 myStr[i - 1] = document.getElementById('li' + i);
 myStr[i - 1].style.paddingLeft = "20px";
 }

function Click()
{
 var Result = document.getElementById("form").value;
 for (var i = 0; i < 9; i++)
   if(myStr[i].firstChild.nodeValue == Result)
  {
   i = i+1;
   alert ("������ � " + i);
   Result = "";
   break;
  }

 if (Result)
 alert("������ �� �������.")
}