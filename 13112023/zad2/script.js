function palindrome(text)
{
    
    if (text === text.split("").reverse().join("")) {
        
      return true;
    }
    else
    {
        return false;
    }
}

function wyswietlpalindrom()
{
    const text = document.getElementById('Input1').value;
    if(palindrome(text))
    {
        alert("Input jest palindromem");
    }
    else
    {
        alert("Input nie jest palindromem");
    }
    
}