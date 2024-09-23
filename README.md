# interview-test

## Backend

A backend mappában egy Spring Boot webalkalmazás található, amely munkavállalók adatait kezeli. Egy munkavállaló rendelkezik id-vel, névvel és email címmel. Jelenleg lehetőségünk van az alkalmazásban új munkavállalót létrehozni, illetve id alapján lekérdezhetjük egy már létező munkavállaló adatait. Az adatbázishoz H2-t használunk, és fájlba mentjük ki az adatokat (db/employee.h2.mv.db).

Új munkavállaló létrehozása a /employee végpont POST metódussal való meghívásával kivitelezhető. A kérés body-jába át kell adnunk egy munkavállalót reprezentáló objektumot:

```json
{
 "name": "Chuck Norris",
 "email": "cnorris@company.com"
}
```

Létező munkavállaló lekérdezése a /employee/{id} végpont GET metódussal való meghívásával lehetséges, ahol az {id} helyére be kell helyettesítenünk az általunk kért munkavállaló id-jét. Ha nemlétező id-t adunk meg, akkor 204 No content választ fogunk visszakapni.

Feladat:

Egy új végpont létrehozása, amivel lekérdezhetjük az adatbázisban szereplő összes munkavállaló adatait. Az alábbi json egy példa, ami megmutatja, hogy az elkészült végpontnak milyen formában kell visszaadnia a választ:

```json
{
 "name": "Chuck Norris",
 "email": "cnorris@company.com"
},
{
 "name": "Jackie Chan",
 "email": "jchan@company.com"
},
{
 "name": "Rocky Balboa",
 "email": "rbalboa@company.com"
}
```

## Frontend

A frontend mappában egy Angular alkalmazás található, amely a backend-hez csatlakozva UI felületet biztosít annak végpontjaihoz. A form-okkal létrehozhatunk új munkavállalót, illetve lekérdezhetjük egy meglévő munkavállaló adatait.

Feladat:

Egy új felület segítségével jelenítsük meg a backend feladatban elkészült munkavállaló listát. A felület tartalmazzon egy táblázatot, amiben látható az adatbázisban levő összes munkavállaló. Ha új munkavállalót hozunk létre, akkor a táblázat tartalma is frissüljön. A táblázat elkészülhet a már meglévő komponens alján, vagy akár egy új komponensbe is. A táblázat design-ja szabadon választható.