function DnaTranscriber(dna) {
	this.dna = dna;

	this.toRna = function(dna) {
		var rna = '';
		for (var letter of dna.split('')) {
			switch (letter) {
				case 'C':
					rna += 'G';
					break;
				case 'G':
					rna += 'C';
					break;
				case 'T':
					rna += 'A';
					break;
				case 'A':
					rna += 'U';
					break;
				default:
					throw Error('Invalid input');
			}
		}
		return rna;
	};
}

module.exports = DnaTranscriber;
