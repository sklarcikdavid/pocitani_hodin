function ulozProgres() {
      const datumInput = document.getElementById('datum').value;
      const zacatekSmeny = document.getElementById('zacatekSmeny').value;
      const konecSmeny = document.getElementById('konecSmeny').value;
      const popisekSmeny = document.getElementById('popisekSmeny').value;

      const datum = datumInput ? new Date(datumInput).toLocaleDateString() : new Date().toLocaleDateString();

      const entries = JSON.parse(localStorage.getItem("workEntries") || "[]");
      const entryExists = entries.some(entry => entry.datum === datum);

      if (entryExists) {
        alert(`Pro datum ${datum} již existuje záznam!`);
        return;
      }

      const zacatek = new Date(`1970-01-01T${zacatekSmeny}:00`);
      const konec = new Date(`1970-01-01T${konecSmeny}:00`);
      const rozdil = konec - zacatek;
      const hodiny = Math.floor(rozdil / (1000 * 60 * 60));
      const minuty = Math.floor((rozdil % (1000 * 60 * 60)) / (1000 * 60));
      const casovyRozdil = `${hodiny} hodin a ${minuty} minut`;

      const entry = {
        datum,
        zacatekSmeny,
        konecSmeny,
        casovyRozdil,
        popisekSmeny,
      };

      entries.push(entry);
      localStorage.setItem("workEntries", JSON.stringify(entries));

      alert("Záznam úspěšně uložen!");
    }

    function mazaniZaznamu() {
      localStorage.removeItem("workEntries");
      alert("Všechny záznamy byly smazány!");
    }

    function generovatPDF() {
  const entries = JSON.parse(localStorage.getItem("workEntries") || "[]");

  if (entries.length === 0) {
    alert("Nebyly nalezeny žádné záznamy!");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Mesicni prehled", 10, 10);

  const data = entries.map(entry => [
    entry.datum,
    entry.zacatekSmeny,
    entry.konecSmeny,
    entry.casovyRozdil,
    entry.popisekSmeny
  ]);

  doc.autoTable({
    startY: 20,
    styles: { font: "helvetica", fontSize: 12, cellPadding: 2 },
    headStyles: { fillColor: [242, 168, 208] },
    columnStyles: {
      0: { cellWidth: 25 },
      1: { cellWidth: 30 },
      2: { cellWidth: 30 },
      3: { cellWidth: 30 },
      4: { cellWidth: 70, overflow: 'linebreak' }
    },
    head: [["Datum", "Zacatek smeny", "Konec smeny", "Casovy rozdil", "Popisek smeny"]],
    body: data,
    theme: 'grid'
  });

  doc.save("mesicni_smeny.pdf");
}

    function zobrazitUlozeneDny() {
      const entries = JSON.parse(localStorage.getItem("workEntries") || "[]");

      if (entries.length === 0) {
        document.getElementById("registeredDays").innerHTML = "<p>Zatím nejsou uloženy žádné záznamy.</p>";
        return;
      }

      const zobrazeniZaznamu = entries.map(entry => `
        <div style="border: none solid #ccc; padding: 10px; margin-bottom: 5px;">
          <p><strong>Datum:</strong> ${entry.datum}</p>
          <p><strong>Začátek směny:</strong> ${entry.zacatekSmeny}</p>
          <p><strong>Konec směny:</strong> ${entry.konecSmeny}</p>
          <p><strong>Časový rozdíl:</strong> ${entry.casovyRozdil}</p>
          <p><strong>Popisek směny:</strong> ${entry.popisekSmeny}</p>
        </div>
      `).join("");

      document.getElementById("registeredDays").innerHTML = `
        <h3>Uložené záznamy:</h3>
        ${zobrazeniZaznamu}
      `;
    }