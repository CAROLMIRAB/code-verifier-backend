import dotenv from 'dotenv'
import server from './src/server'
import { Server } from 'http';
import { LogError, LogSuccess } from './src/utils/logger';

dotenv.config();

const port = process.env.PORT || 8000

// * Execute SERVER


server.listen(port, () => {
  LogSuccess(`[SERVER ON]: Running in  http://localhost:${port}/api`)
})

server.on('error', (error) => {
  LogError(`[SERVER ERROR]: ${error}`)
})