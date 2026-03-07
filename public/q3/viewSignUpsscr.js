   
   
    function readLocalStorage(){
        let acctString = localStorage.getItem("accounts");
        if (!acctString) { 
            accountList = {};
        }

        else {
            accountList = JSON.parse(acctString);
        }

        return accountList; 
    }

    const table = document.querySelector('table');
    const filter = document.getElementById('clubFilter');

        function resetTable(table){
            table.innerHTML = '';
        }

        function populateTable(){ 
            resetTable(table);

            const headerRow = document.createElement('tr');
            const headers = ['Student ID', 'Full Name', 'Birthday', 'Email', 'Mobile Phone', 'Grade Level', 'Residence Type', 'Organization', 'Why Join'];
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });

            table.appendChild(headerRow);

            // populated table w data
            let accountList = readLocalStorage();
            let rowCount = 0;
            for(let account in accountList){ // executes each entry (account) in accountList
                if (filter.value !== 'all' && accountList[account]['cluborg'] !== filter.value) {
                    continue; // skip account if it doesn't match the filter
                }
                const row = document.createElement('tr'); // for each account; 
                for(let entry in accountList[account]){ // for each entry in account
                    const td = document.createElement('td'); 
                    td.textContent = accountList[account][entry]; 
                    row.appendChild(td);
                }
                table.appendChild(row); // appends each account
                rowCount++;
            }
            showFiltertable(rowCount, headers.length);
        } 
        populateTable();
        filter.addEventListener('change', populateTable);

        function showFiltertable(count, colspan){
            const total = document.getElementById('total');
            if(count === 0){
                total.textContent = "No sign ups yet for this club.";
                table.innerHTML = '<tr><td colspan="' + colspan + '">No sign ups yet for this club.</td></tr>';
            } else {
                total.textContent = '';
            }

        }

        filter.addEventListener('change', function() {
            if(filter.value === "all"){
                populateTable();
            }
            else{
                populateTable(filter.value);
            }
        });

