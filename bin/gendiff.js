import { program } from 'commander';

program
    .description('Compares two configuration files and shows a difference.')
    .version('0.1.0')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format <type>', 'output format');

program.parse();