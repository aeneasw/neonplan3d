# Eigene Möbel

Eigene Möbel aus **Blender, Rhino & Co.** – direkt in NeonPlan 3D, im Reiter **🛋 Eigene Möbel** (nur für
Administratoren).

- Modell hineinziehen (GLB, glTF, OBJ, STL), 3D-Vorschau drehen, Name, Art, Räume, Leuchte usw. wählen,
  **„In NeonPlan übernehmen“** – das Möbel steht sofort im Editor unter **Möbel**.
- Liste deiner Möbel mit Vorschaubild, Bearbeiten und Entfernen.

## So funktioniert es

NeonPlan zeichnet Pack-Möbel aus **Quadern, Zylindern und schrägen Quadern („Loft“), höchstens 60 pro
Möbel**. Echte Meshes kann es nicht darstellen. Dein Modell wird deshalb umgerechnet:

| Im Modell | wird in NeonPlan |
|---|---|
| ein Objekt, das ein Zylinder ist (Bein, Rolle, Lampenfuß) | ein Zylinder (stehend oder liegend) |
| ein Objekt, das sich nach oben verjüngt (Lampenschirm, Kegel) | ein Loft |
| ein Objekt, das ein Quader ist (Platte, Seitenwand), auch schräg gedreht | ein (gedrehter) Quader |
| ein Objekt mit komplizierter Form (ein ganzer Stuhl als ein Mesh, ein L-Sofa) | wird in mehrere Quader zerlegt |

**Tipp:** Exportiere Möbel mit **getrennten Objekten** (Beine, Platte, Schublade, Kissen …). Dann wird jedes
Objekt genau ein passendes Teil, mit der Farbe seines Materials. Ein einziges verschmolzenes Mesh (typisch bei
STL) wird erkennbar, aber klötzchenhaft.

Farben kommen aus der Grundfarbe der Materialien (glTF *Base Color*, OBJ *Kd*). Texturen kann NeonPlan nicht
zeigen. Transparente Materialien werden Glas, **leuchtende Materialien (Emission) leuchten in der Farbe der
verknüpften Lampe** – damit werden Lampen gleich richtig erkannt.

### Der Schlüssel

NeonPlan importiert nur signierte Packs. Beim ersten Start erzeugt NeonPlan deshalb einen **eigenen Schlüssel**
für deine Installation (er liegt in `.storage` und ist damit in jedem Home-Assistant-Backup) und trägt ihn bei
jedem Start **nur im Arbeitsspeicher** als **Studio-Schlüssel** ein. Ein Studio-Schlüssel darf nur Packs mit der
ID `studio.*` signieren und **keine Pro-Funktionen oder Module** – er schaltet also nichts frei.

Bevor der Schlüssel benutzt wird, macht NeonPlan einen **Selbsttest**: Es signiert absichtlich ein Pack mit
Pro-Funktion, eines mit Modul und eines mit fremder ID und prüft, dass die Pack-Prüfung alle drei ablehnt.
Schlägt das fehl, bleibt der Schlüssel aus und die Seite zeigt den Grund. Bereits importierte Möbel
funktionieren dann weiter.

Importiert wird über den normalen Pack-Import – derselbe Weg wie „Möbel-Pack importieren“ unter
Erweiterungen. Alle eigenen Möbel stehen in **einem** Pack (`studio.eigene-moebel`).

### Umstieg von der Erweiterung „NeonPlan 3D – Eigene Möbel“

Wer bisher die separate Integration benutzt hat: NeonPlan übernimmt beim ersten Start deren Schlüssel und
Möbelliste. Das schon importierte Pack bleibt gültig. Danach die alte Integration unter *Einstellungen →
Geräte & Dienste* löschen und ihren Ordner `custom_components/neonplan_eigene_moebel` entfernen.

## Benutzen

1. **🛋 Eigene Möbel** öffnen und das Modell in das Feld ziehen oder **Dateien wählen**. Gehören Dateien
   zusammen (`.gltf` + `.bin`, `.obj` + `.mtl`), alle zusammen auswählen.
2. Die Vorschau zeigt das Möbel so, wie NeonPlan es zeichnet. Ziehen dreht, das Mausrad zoomt. Der Pfeil zeigt
   **vorne** – NeonPlan stellt Möbel mit dem Rücken an die Wand.
3. Bei Bedarf anpassen:
   - **Detailgrad** – höchstens so viele Teile (mehr = genauer, aber mehr Arbeit für schwache Tablets).
   - **Einheit** – wird geschätzt (glTF ist immer Meter; Rhino exportiert oft mm). Falsch? Hier ändern.
   - **Oben ist** – Y oder Z. Liegt das Möbel auf der Seite, umschalten.
   - **Drehen** – wenn die Vorderseite nicht zum Pfeil zeigt.
   - **Kanten** – keine, zart, normal oder leuchtend wie die Wände.
4. **Name, Art** (Bereich in der Möbelbibliothek), **Räume**, wo es steht (Boden, auf einem Möbel, Wand mit
   Höhe, Decke), **Leuchte** (dann lässt es sich mit einem Licht verknüpfen), **elektrisch**, **Oberseite trägt
   Möbel** (Tisch, Kommode).
5. **In NeonPlan übernehmen** – das Möbel steht im Editor unter **Möbel**.

Ein Möbel mit gleichem Namen kann das vorhandene **ersetzen** – Möbel im Plan übernehmen dann die neue Form.
**Bearbeiten** in der Liste ändert Name und Eigenschaften. **Entfernen** nimmt es aus dem Pack; im Plan bleibt
dann ein einfacher Kasten. Auch eine **Pack-JSON** (siehe [packs.md](packs.md)) lässt sich hier hochladen.

### Export aus Blender

*Datei → Exportieren → glTF 2.0*, Format **glTF Binary (.glb)**, unter *Include* gern **Selected Objects**,
*+Y Up* eingeschaltet lassen, *Modifiers anwenden* an. **Kompression (Draco) aus.** Möbel aus mehreren Objekten
bauen statt alles zu verbinden.

### Export aus Rhino

Am besten *Datei → Exportieren → glTF (.glb)* (Rhino 8). OBJ und STL gehen auch; die Einheit (meist mm) wird
erkannt. Steht das Modell nach dem Upload auf der Seite, **Oben ist → Z** wählen. Getrennte Objekte bleiben
getrennt – ein `Join` über alles macht daraus ein einziges Mesh, das zerlegt werden muss.

## Grenzen

- Höchstens 60 Teile pro Möbel, höchstens 10 m pro Seite, höchstens 200 eigene Möbel.
- Keine Texturen, keine runden Formen außer Zylindern; Kugeln und organische Formen werden Quader-Stapel.
- Uploads bis 300 MB (in 8-MB-Stücken), Modelle bis 3 Mio. Dreiecke. Komprimierte glTF (Draco/Meshopt) gehen
  nicht. FBX, .blend und .3dm bitte als glTF exportieren.
- Das Lesen der Modelle braucht das Python-Paket numpy, das in Home Assistant OS und im Container dabei ist.
- Die Möbel funktionieren nur in **deiner** Installation. Bitte keine fremden Packs damit signieren und nichts
  weiterverteilen.
