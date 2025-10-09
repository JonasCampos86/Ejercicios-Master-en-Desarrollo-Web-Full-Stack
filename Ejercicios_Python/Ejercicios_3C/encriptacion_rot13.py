'''
El abecedario latino es un sistema de escritura alfabético más usado del mundo hoy en día. Se
compone de 26 letras principales, más ciertas modificaciones y letras adicionales según el idioma
del que se trate (por ejemplo, en castellano y gallego se incluye la ”ñ”, en portugués, francés y
catalán la ”Ç”, en alemán la ”ß”, etc.).
Aplicar el cifrado ROT13 a un texto se reduce a examinar sus caracteres alfabéticos y sustituirlos
por la letra que está 13 posiciones por delante en el alfabeto, volviendo al principio si es necesario
y conservando las mayúsculas y minúsculas: a se convierte en n, B se convierte en O, y así hasta
la Z, que se convierte en M. Solo quedan afectadas las 26 letras principales que aparecen en el
alfabeto latino; los números, símbolos, espacios y otros caracteres se dejan igual.

[a,b,c,d,e,f,g,h,i,j,k,l,m] [H, O, L, A]
          
          ROT13

[n,o,p,q,r,s,t,u,v,w,x,y,z] [U, B, Y, N]
'''
#tenemos un str con las letas del abecedario
abecdario ="abcdefghijklmnopqrstuvwxyz"
abecdario_mayusculas = abecdario.upper()
mensaje ="Moña"
mensaje_cifrado = ""
mensaje_comparacion ="Zbñn"
#recoremos las letras del mensaje
for char in mensaje:
    #comprobamos que esta en el abecedario minuscula
    if char in abecdario:
    
        for i in range(len(abecdario)):
            if char == abecdario[i]:
                char_indice = i
                  #solucion aa salirnos de rango 26
                if char_indice + 13 >= 26:
                    char_indice = char_indice -26
                    #la conversion a rot13 es el indice +13
                nuevo_indice = char_indice +13
                letra= abecdario[nuevo_indice]
                mensaje_cifrado= mensaje_cifrado + letra
    
    elif char in abecdario_mayusculas:
        
        for i in range(len(abecdario_mayusculas)):
            
            if char == abecdario_mayusculas[i]:
                char_indice = i
                  #solucion aa salirnos de rango 26
                if char_indice + 13 >= 26:
                    char_indice = char_indice -26
                    #la conversion a rot13 es el indice +13
                nuevo_indice = char_indice +13
                letra= abecdario_mayusculas[nuevo_indice]
                mensaje_cifrado= mensaje_cifrado + letra
    else:
        mensaje_cifrado =mensaje_cifrado+char

print("El mensaje cifrado es : ",mensaje_cifrado)
if mensaje_cifrado == mensaje_comparacion:
    print(f"El mensaje {mensaje} y el mensaje {mensaje_comparacion} son iguales")
else:
    print("Los mensajes son distintos")    
            
      
    
    






