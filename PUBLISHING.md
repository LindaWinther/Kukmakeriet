# Publicera prototypen med GitHub Pages

Den statiska versionen av prototypen ligger i `docs/`. Spring Boot-koden behöver inte köras av GitHub Pages.

## Första publiceringen

1. Pusha ändringarna till GitHub-repot.
2. Öppna repot på GitHub.
3. Gå till **Settings → Pages**.
4. Under **Build and deployment**, välj **Deploy from a branch**.
5. Välj den branch som används, normalt `master` i detta repo, och mappen `/docs`.
6. Klicka **Save**.

Sidan blir tillgänglig på:

`https://LindaWinther.github.io/Kukmakeriet/`

Publiceringen kan ta några minuter. Status och eventuella fel visas under repots **Actions**-flik.

## När designen ändras

Spring-versionen i `src/` och Pages-versionen i `docs/` är separata. Ändringar som ska synas på GitHub Pages behöver därför även föras över till `docs/` innan de pushas.
