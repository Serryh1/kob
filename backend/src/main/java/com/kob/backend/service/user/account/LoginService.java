package com.kob.backend.service.impl.user.account;

import java.util.Map;

public interface LoginService {
    public Map<String ,String > login(String username, String password);
}
