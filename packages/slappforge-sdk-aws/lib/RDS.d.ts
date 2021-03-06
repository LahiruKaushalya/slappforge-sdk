/*
 * Copyright (c) 2017-2018 SLAppForge Lanka Private Ltd. (https://www.slappforge.com).
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Connection} from "mysql";

/**
 * @author Chathura Widanage
 */
export class RDS {
    constructor(connectionManager: ConnectionManager);

    query(prams: QueryParams, callback: Function, connection: Connection);

    beginTransaction(prams: TransactionParams, callback: Function);
}

interface RDSParams {
    instanceIdentifier: string;
}

interface QueryParams extends RDSParams {
    inserts: Array<string>;
    query: string;
}

interface TransactionParams extends RDSParams {

}

interface ConnectionManager {
    connections: Array<string>;
}
