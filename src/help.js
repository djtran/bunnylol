// @flow strict

import type {CommandDataTableType, ColumnDataTableType} from './commands.js';

import {COMMANDS} from './commands.js';

export const viewHelpPage: () => void = function(){
    const data: Array<CommandDataTableType> = Object.keys(COMMANDS).map((command: string) => {
        const cmdData = COMMANDS[command];
        return {
            name: cmdData.name, 
            url: cmdData.url, 
            command: command
        };
    });
    const columns: Array<ColumnDataTableType> = [
        {data: 'command', title: "Command"}, 
        {data: 'name', title: "Name"}, 
        {data: 'url', title: "URL"}, 
    ];
    // $FlowFixMe - jQuery import
    $('#help-table').DataTable({
        data: data,
        columns: columns,
        order: [[ 1, "asc" ]],
        paging: false
    });
}
