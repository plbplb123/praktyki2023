function Sprawdzanagram(text1,text2) {

  const cleantext1 = text1.toLowerCase();
  const cleantext2 = text2.toLowerCase();

  if (cleantext1.length !== cleantext2.length) {
    return false;
  }
  if(cleantext1.split('').sort().join('') === cleantext2.split('').sort().join(''))
  {
    return true;
  }
  else
  {
    return false;
  }
}
  
function wyswietlwynik()
{
    const text = document.getElementById('Input1').value;
    const text2 = document.getElementById('Input2').value;
    if(Sprawdzanagram(text,text2))
    {
        alert("Te dwa slowa sa anagramem");
    }
    else
    {
        alert("Te dwa slowa nie sa anagramem");
    }
    
}