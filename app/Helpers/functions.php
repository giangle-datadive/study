<?php
    if(!function_exists('api_response')) {
        function api_response($error, $message, $data = null) {
            $result = [
                'error' => $error,
                'message' => $message,
                'data' => $data,
            ];

            return response()->json($result);
        }
    }