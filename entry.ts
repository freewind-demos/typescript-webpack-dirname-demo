import {printInnerPath} from './inner';

function printEntryPath() {
  console.log('[entry.ts]', __dirname);
}

printEntryPath();
printInnerPath();
